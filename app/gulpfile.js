var gulp = require('gulp');
var args = require('yargs').argv;
var bs = require('browser-sync').create();
var config = require('./gulp.config')();
var del = require('del');
var _ = require('lodash');
var path = require('path');
var port = process.env.PORT || config.defaultPort;

var $ = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('help', $.taskListing);

gulp.task('default', ['help']);

gulp.task('vet', function() {
    log('Analizing source code with JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('styles', ['clean:styles'], function() {
    log('Compiling Sass --> CSS');

    return gulp
        .src(config.styles)
        .pipe($.plumber())
        .pipe($.if(args.verbose, $.print()))
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer(config.autoprefixer))
        .pipe(gulp.dest(config.temp))
        .pipe($.if(bs.active, bs.stream()));
});

gulp.task('bower_components', ['clean:bower_components'], function() {
    log('Copying bower_components');

    return gulp
        .src(config.bower_components)
        .pipe(gulp.dest(config.build + 'bower_components'));
});

gulp.task('images', ['clean:images'], function() {
    log('Copying and compressing images');

    return gulp
        .src(config.images)
        .pipe($.imagemin({
            optimizationLevel: 4
        }))
        .pipe(gulp.dest(config.build + 'images'));
});

gulp.task('clean', function(done) {
    var files = [].concat(config.build, config.temp);
    log('Cleaning: ' + files);
    clean(files, done);
});

gulp.task('clean:code', function(done) {
    var files = [].concat(
        config.temp + '**/*.js',
        config.build + '**/*.html',
        config.build + 'js/**/*.js'
    );
    clean(files, done);
});

gulp.task('clean:bower_components', function(done) {
    clean(config.build + 'bower_components/**/*.*', done);
});

gulp.task('clean:images', function(done) {
    clean(config.build + 'images/**/*.*', done);
});

gulp.task('clean:styles', function(done) {
    clean(config.temp + '**/*.css', done);
});

gulp.task('watch:styles', function(done) {
    gulp.watch([config.allscss], ['styles']);
});

gulp.task('templatecache', ['clean:code'], function() {
    log('Creating AngularJS $templateCache');

    return gulp
        .src(config.htmlTemplates)
        .pipe($.minifyHtml({
            empty: true
        }))
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options))
        .pipe(gulp.dest(config.temp));
});

gulp.task('wiredep', function() {
    log('Wire up the bower css, js and app js into the html');

    var wiredep = require('wiredep').stream;
    var options = config.getWiredepOptions();

    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

gulp.task('inject', ['wiredep', 'styles', 'templatecache'], function() {
    log('Wire up the app css into the html');

    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client));
});

gulp.task('build', ['optimize', 'bower_components', 'images'], function(done) {
    log('Building everyting');

    var msg = {
        title: 'gulp build',
        subtitle: 'Deploying to the build folder',
        message: 'Running `gulp build`'
    };

    del(config.temp);
    log(msg);
    notify(msg);
    done();
});

gulp.task('build:specs', ['templatecache'], function() {
    log('Building the specs runner');
    var wiredep = require('wiredep').stream;
    var options = config.getWiredepOptions();
    var specs = config.specs;

    options.devDependencies = true;

    if (args.startServers) {
        specs = [].concat(specs, config.serverIntegrationSpecs);
    }

    return gulp
        .src(config.specRunner)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.testLibraries), {
            name: 'inject:testlibraries',
            read: false
        }))
        .pipe($.inject(gulp.src(config.js), {
            read: false
        }))
        .pipe($.inject(gulp.src(config.specHelpers), {
            name: 'inject:spechelpers',
            read: false
        }))
        .pipe($.inject(gulp.src(specs), {
            name: 'inject:specs',
            read: false
        }))
        .pipe($.inject(gulp.src(config.temp + config.templateCache.file), {
            name: 'inject:templates',
            read: false
        }))
        .pipe(gulp.dest(config.client));
});

gulp.task('optimize', ['inject' /*, 'test'*/ ], function() {
    log('Optimizing the js, css and html');

    var assets = $.useref.assets({
        searchPath: './'
    });
    var templateCache = config.temp + config.templateCache.file;
    var cssFilter = $.filter('**/*.css');
    var jsLibsFilter = $.filter('**/' + config.optimized.lib);
    var jsAppFilter = $.filter('**/' + config.optimized.app);

    return gulp
        .src(config.index)
        .pipe($.plumber())
        .pipe($.inject(gulp.src(templateCache, {
            read: false
        }), {
            starttag: '<!-- inject:templates:js -->'
        }))
        .pipe(assets)
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(jsLibsFilter)
        .pipe($.uglify())
        .pipe(jsLibsFilter.restore())
        .pipe(jsAppFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe(jsAppFilter.restore())
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(config.build))
        .pipe($.rev.manifest())
        .pipe(gulp.dest(config.build));
});

gulp.task('bump', function() {
    var msg = 'Bumping versions';
    var type = args.type;
    var version = args.version;
    var options = {};

    if (version) {
        options.version = version;
        msg += ' to ' + version;
    } else {
        options.type = type;
        msg += ' for a ' + type;
    }
    log(msg);

    return gulp
        .src(config.packages)
        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest(config.root));
});

gulp.task('serve:build', ['build'], function(done) {
    serve(!'isDev', done);
});

gulp.task('serve:dev', ['inject'], function(done) {
    serve(!!'isDev', done);
});

gulp.task('serve:specs', ['build:specs'], function(done) {
    log('Run the specs runner');
    serve(!!'isDev', !!'specRunner', done);
});

gulp.task('test', ['vet', 'templatecache'], function(done) {
    startTests(!!'singleRun', done);
});

gulp.task('autotest', ['vet', 'templatecache'], function(done) {
    startTests(!'singleRun', done);
});

// Functions
function notify(options) {
    var notifier = require('node-notifier');
    var notifierOptions = {
        sound: 'Bootle',
        contentImage: path.join(__dirname, 'gulp.png'),
        icon: path.join(__dirname, 'gulp.png')
    };

    _.assign(notifierOptions, options);

    notifier.notify(notifierOptions);
}

function startTests(singleRun, done) {
    var KarmaServer = require('karma').Server;
    var fork = require('child_process').fork;
    var excludeFiles = [];
    var serverSpecs = config.serverIntegrationSpecs;
    var child;
    var karma;

    if (args.startServers) {
        log('Starting servers');
        var savedEnv = process.env;
        savedEnv.NODE_ENV = 'development';
        savedEnv.PORT = 8888;
        child = fork(config.nodeServer);
    } else {
        if (serverSpecs && serverSpecs.length) {
            excludeFiles = serverSpecs;
        }
    }

    var options = {
        configFile: __dirname + '/karma.conf.js',
        exclude: excludeFiles,
        singleRun: singleRun
    };

    karma = new KarmaServer(options, karmaCompleted);

    karma.start();

    function karmaCompleted(result) {
        log('Karma completed!');
        if (child) {
            log('Shooting down the child process');
            child.kill();
        }
        if (result) {
            return done('Karma: tests failed with code: ' + result);
        }

        done();
    }
}

function serve(isDev, specRunner, done) {
    if (typeof(specRunner) === 'function') {
        done = specRunner;
        specRunner = undefined;
    }

    var started = false;
    var nodeOptions = {
        script: config.nodeServer,
        delayTime: 0,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'development' : 'production'
        },
        watch: [config.server]
    };

    $.nodemon(nodeOptions)
        .on('restart', ['vet'], function(e) {
            log('*** nodemon restart');
            log('Files changed:\n' + e);
        })
        .on('start', function() {
            log($.util.colors.green('*** nodemon start'));

            startBs(isDev, specRunner);

            if (!started) {
                started = true;
                done();
            }
        })
        .on('crash', function() {
            log($.util.colors.red('*** nodemon crash'));
        })
        .on('exit', function() {
            log('*** nodemon exit');
        });
}

function changeEvent(event) {
    var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');

    log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
}

function startBs(isDev, specRunner) {
    if (args.nosync) {
        return;
    }
    if (bs.active) {
        log($.util.colors.red('bs.active'));

        return setTimeout(function() {
            bs.notify('Reloading now...');
            bs.reload({
                stream: false
            });
        }, config.bsReloadDelay);
    }

    log('Starting browser-sync on port: ' + port);

    var options = {
        proxy: 'localhost:' + port,
        port: config.bsPort,
        logPrefix: 'bs-gulp',
        notify: isDev
    };

    if (isDev) {
        options.logLevel = 'debug';
        options.files = [
            config.client + '**/*.*',
            '!' + config.allscss,
            config.temp + '**/*.*'
        ];

        gulp.watch([config.allscss], ['styles'])
            .on('change', function(e) {
                changeEvent(e);
            });
    } else {
        gulp.watch([config.client + '**/*.*'], ['optimize', bs.reload])
            .on('change', function(e) {
                changeEvent(e);
            });
    }

    if (specRunner) {
        options.startPath = config.specRunnerFile;
    }

    bs.init(options);
}

function clean(path, done) {
    log('Cleaning: ' + path);

    del(path, done);
}

function log(message) {
    if (typeof message === 'object') {
        for (var key in message) {
            if (message.hasOwnProperty(key)) {
                $.util.log($.util.colors.yellow('>>'), $.util.colors.blue(message[key]));
            }
        }
        return;
    }

    $.util.log($.util.colors.yellow('>>'), $.util.colors.blue(message));
}
