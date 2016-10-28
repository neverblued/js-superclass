module.exports = function (grunt) {
    var banner = '';
    banner += '// <%= package.name %>-<%= package.version %>\n';
    banner += '// by <%= package.author %>, <%= package.year %>.\n\n';
    var name = '<%= package.name %>-<%= package.version %>';
    var filename = 'build/' + name + '.js';
    var gruntOptions = {
        package: grunt.file.readJSON ('package.json'),
        concat: {
            options: {
                banner: banner
            },
            dist: {
                src: ['source/*.js'],
                dest: filename
            }
		},
		removelogging: {
			dist: {
				src: filename
			}
		},
		uglify: {
            options: {
                banner: banner
            },
			main: {
				files: {/* set explicitly */}
			}
		}
    };
    var minified = 'build/' + name + '.min.js';
    gruntOptions.uglify.main.files [minified] = filename;
	grunt.initConfig (gruntOptions);
	grunt.loadNpmTasks ('grunt-contrib-concat');
	grunt.loadNpmTasks ('grunt-contrib-uglify');
	grunt.loadNpmTasks ('grunt-remove-logging');
    grunt.registerTask ('default', ['concat', 'removelogging', 'uglify']);
};
