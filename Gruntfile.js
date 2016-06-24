module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ["themes"]
				},

				files: {
					"dist/markdown.css": "themes/markdown.less",
					"dist/clearness-dark.css": "themes/clearness-dark/clearness-dark.less",
					"dist/clearness.css": "themes/clearness/clearness.less",
					"dist/github.css": "themes/github/github.less",
					"dist/haroopad.css": "themes/haroopad/haroopad.less",
					"dist/solarized-dark.css": "themes/solarized-dark/solarized-dark.less",
					"dist/solarized-light.css": "themes/solarized-light/solarized-light.less",
					"dist/node-dark.css": "themes/node-dark/node-dark.less",
					"dist/metro-vibes.css": "themes/metro-vibes/metro-vibes.less",
					"dist/metro-vibes-dark.css": "themes/metro-vibes-dark/metro-vibes-dark.less",
					"dist/wood.css": "themes/wood/wood.less",
					"dist/wood-ri.css": "themes/wood-ri/wood-ri.less"
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
			},
			resources: {
				files: [
          { src: 'themes/wood/wood.jpg', dest: 'build/wood/wood.jpg' },
          { src: 'themes/wood-ri/wood.jpg', dest: 'build/wood-ri/wood.jpg' }
				]
			}
		}
	});

	grunt.registerTask('default', [ 'less:development', 'copy:resources', 'copy:preview' ]);
	grunt.registerTask('build', [ 'less:development', 'copy' ]);
}
