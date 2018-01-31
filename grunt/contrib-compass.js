module.exports = function(grunt) {

  grunt.config('compass', {
      develop: {
          options: {
              sassDir: 'app/styles/sass',
              cssDir: 'generated/css'
          }
      },
      dist: {
          options: {
              sassDir: 'app/styles/sass',
              cssDir: 'dist/css',
              outputStyle: 'compressed'
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};