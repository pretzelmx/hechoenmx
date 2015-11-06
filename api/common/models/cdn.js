var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var uuid = require('node-uuid');

module.exports = function(CDN) {
	function decodeBase64Image(dataString) {
		var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
		response = {};

		if (matches.length !== 3) {
			return new Error('Invalid input string');
		}

		response.type = matches[1];
		response.data = new Buffer(matches[2], 'base64');

		return response;
	}

	CDN.observe("before save", function(ctx, next) {
		var image = ctx.instance || ctx.data;
		var cdn = path.resolve(__dirname, '../../');
		var name = uuid.v4();
		cdn = cdn + '/cdn/' + name + '.jpg';
		var imageBuffer = decodeBase64Image(image.data)
		
		fs.writeFile(cdn, imageBuffer.data, function(err) {
			if (err) {
				return next(err);
			} else {
				ctx.instance.unsetAttribute("data");
				ctx.instance.file = name + '.jpg';
				next()
			}
		});
	});

	CDN.observe("after save", function(ctx, next) {
		/*
			Types:
			- avatar
			- cover
			- image
		*/

		var User = CDN.app.models.UserModel;
		var Organization = CDN.app.models.Organization;
		var Project = CDN.app.models.Project;
		var Technology = CDN.app.models.Technology;

		var data = ctx.instance || ctx.data;

		if (!_.isUndefined(data.userId)) {
			User.findById(data.userId, function(err, user) {
				if (!err) {
					var attribute = {};
					if (data.type == "avatar") {
						attribute = {"avatar": data.id}
					}
					else {
						attribute = {"cover": data.id}
					}

					user.updateAttributes(attribute, function(err, user) {
						if (!err) {
							next();
						}
						else {
							next(err);
						}
					});
				}
				else {
					next(err);
				}
			});
		}
		else if (!_.isUndefined(data.organizationId)) {
			Organization.findById(data.organizationId, function(err, organization) {
				if (!err) {
					var attribute = {};
					if (data.type == "avatar") {
						attribute = {"avatar": data.id}
					}
					else {
						attribute = {"cover": data.id}
					}

					organization.updateAttributes(attribute, function(err, organization) {
						if (!err) {
							next();
						}
						else {
							next(err);
						}
					});
				}
				else {
					next(err);
				}
			});
		}
		else if (!_.isUndefined(data.projectId)) {
			Project.findById(data.projectId, function(err, project) {
				if (!err) {
					project.updateAttributes({"image": data.id}, function(err, project) {
						if (!err) {
							next();
						}
						else {
							next(err);
						}
					});
				}
				else {
					next(err);
				}
			});
		}
		else if (!_.isUndefined(data.technologyId)) {
			Technology.findById(data.technologyId, function(err, technology) {
				if (!err) {
					technology.updateAttributes({"image": data.id}, function(err, technology) {
						if (!err) {
							next();
						}
						else {
							next(err);
						}
					});
				}
				else {
					next(err);
				}
			});
		}
		else {
			next();
		}
	});
};
