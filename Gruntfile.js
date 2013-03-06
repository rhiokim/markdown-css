module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ["themes"]
				},

				files: {
					"build/markdown.css": "themes/markdown.less",
					"build/clearness-dark.css": "themes/clearness-dark.less",
					"build/clearness.css": "themes/clearness.less",
					"build/github.css": "themes/github.less",
					"build/solarized-dark.css": "themes/solarized-dark.less",
					"build/solarized-light.css": "themes/solarized-light.less"
				}
			}
		}
	});

	grunt.registerTask('default', [ 'less:development' ]);
}