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
					"build/clearness-dark/clearness-dark.css": "themes/clearness-dark/clearness-dark.less",
					"build/clearness/clearness.css": "themes/clearness/clearness.less",
					"build/github/github.css": "themes/github/github.less",
					"build/github-rhio/github-rhio.css": "themes/github-rhio/github-rhio.less",
					"build/solarized-dark/solarized-dark.css": "themes/solarized-dark/solarized-dark.less",
					"build/solarized-light/solarized-light.css": "themes/solarized-light/solarized-light.less",
					"build/node-dark/node-dark.css": "themes/node-dark/node-dark.less"
				}
			}
		},

		copy: {
			main: {
				files: [
					// { expand: true, cwd: 'themes/node-dark/', src: ['**'], dest: 'assets/css/' }
				]
			},
			preview: {
				files: [
					{ expand: true, cwd: 'build/', src: ['**'], dest: 'assets/css/' }
				]
			}
		}
	});

	grunt.registerTask('default', [ 'less:development', 'copy:preview' ]);
	grunt.registerTask('build', [ 'less:development', 'copy' ]);
}