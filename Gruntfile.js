module.exports = function(grunt) {

  var normalize = require('node-normalize-scss').includePaths;

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  grunt.initConfig({
    execute: {
      target: {
        src: ['server.js']
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          noCache: true,
          includePaths: [].concat(normalize),
        },
        files: [
          {
            expand: true,
            cwd: "scss/",
            src: ["**/*.scss"],
            dest: "./public/css",
            ext: "-min.css"
          }
        ]
      }
    },
    watch: {
      sass: {
        files: ["scss/**/*.scss"],
        tasks: ["sass"]
      }
    },
    parallel: {
      serve: {
        options: {
          stream: true
        },
        tasks: [{
          grunt: true,
          args: ['watch']
        }, {
          grunt: true,
          args: ['execute']
        }]
      },
    }
  })

  // Default task(s)
  grunt.registerTask('default', ['execute']);
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('serve', 'launch server and watch tasks', [
    'parallel',
  ]);
};
