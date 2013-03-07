module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib');

	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ["themes"]
				},

				files: {
					"build/markdown.css": "themes/markdown.less",
					"build/clearness-dark.css": "themes/clearness-dark/clearness-dark.less",
					"build/clearness.css": "themes/clearness/clearness.less",
					"build/github.css": "themes/github/github.less",
					"build/solarized-dark.css": "themes/solarized-dark/solarized-dark.less",
					"build/solarized-light.css": "themes/solarized-light/solarized-light.less"
				}
			}
		},

		copy: {
			main: {
				files: [
					{ expand: true, cwd: 'build/', src: ['**'], dest: 'assets/css/' }
				]
			}
		}
	});

	grunt.registerTask('default', [ 'less:development', 'copy' ]);
}