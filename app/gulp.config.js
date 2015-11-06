module.exports = function() {
    var root = './';
    var client = 'src/client/';
    var clientApp = client + 'app/';
    var report = 'report/';
    var server = 'src/server/';
    var temp = '.tmp/';
    var specRunnerFile = 'specs.html';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({
        devDependencies: true
    })['js'];

    var config = {
        /*
         * Files paths
         */
        root: root,
        source: 'src/',
        build: 'dist/',
        bower_components: 'bower_components/**/*.*',
        client: client,
        index: client + 'index.html',
        htmlTemplates: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        temp: temp,
        allscss: client + '**/*.scss',
        styles: client + 'styles/hmx.scss',
        css: [temp + 'hmx.css'],
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        report: report,
        server: server,
        /*
         * All js files to vet
         */
        optimized: {
            app: 'app.js',
            lib: 'lib.js'
        },
        /*
         * All js files to vet
         */
        alljs: [
            'src/**/*.js',
            '*.js'
        ],
        /*
         * AngularJS HTML $templateCache
         */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'hmx.core',
                standAlone: false,
                root: 'app/'
            }
        },
        /*
         * Autoprefixer options
         */
        autoprefixer: {
            browsers: ['last 2 versions', '> 5%']
        },
        /*
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ],
        /*
         * Browser Sync
         */
        bsPort: 4001,
        bsReloadDelay: 3000,
        /*
         * Node settings
         */
        defaultPort: 4000,
        nodeServer: server + 'app.js',
        /*
         * Specs HTML runner
         */
        specs: [clientApp + '**/*.spec.js'],
        specRunner: client + specRunnerFile,
        specRunnerFile: specRunnerFile,
        testLibraries: [
            'node_modules/mocha/mocha.js',
            'node_modules/chai/chai.js',
            'node_modules/mocha-clean/index.js',
            'node_modules/sinon-chai/lib/sinon-chai.js'
        ],
        /*
         * Karma and testing settings
         */
        specHelpers: [client + 'test-helpers/*.js'],
        serverIntegrationSpecs: [client + 'tests/server-integration/**/*.spec.js']
    };

    config.getWiredepOptions = getWiredepOptions;

    config.karma = getKarmaOptions();

    return config;

    // Functions

    function getWiredepOptions() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    }

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                config.specHelpers,
                client + '**/*.module.js',
                client + '**/*.js',
                temp + config.templateCache.file,
                config.serverIntegrationSpecs
            ),
            excude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [{
                    type: 'html',
                    subdir: 'report-html'
                }, {
                    type: 'lcov',
                    subdir: 'report-lcov'
                }, {
                    type: 'text-summary'
                }]
            },
            preprocessors: {}
        };

        options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];

        return options;
    }
};
