module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
      },

     jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
         }
        }
      },

      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }

  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('grammar', ['jshint']);
  // i.e. grunt grammar in command line will run jshint

  grunt.registerTask('default', ['jasmine_node', 'jshint']);
  // these ones run whenever you type grunt in the command line now.
};