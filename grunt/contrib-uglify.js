module.exports = function(grunt) {

  grunt.config('uglify', {
      develop: {
          options: {
              compress: false,
              mangle: false,
              beautify: true
          },
          files: {

              'generated/js/vendor.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'],
              'generated/js/functions.js': ['app/js/functions.js']
          }
      },
      dist: {
          options: {
              compress: true,
              compress: {
                  warnings: false
              },
              mangle: true
          },
          files: {
              'dist/js/vendor.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'],
              'dist/js/functions.js': ['app/js/functions.js']
          }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};