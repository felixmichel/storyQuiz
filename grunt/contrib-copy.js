module.exports = function(grunt) {

  grunt.config('copy', {
      develop: {
          files: [
              {expand: true, cwd: 'app', src: '*.html', dest: 'generated/', filter: 'isFile'},
              {expand: true, cwd: 'app/img', src: '**/*', dest: 'generated/img/', filter: 'isFile'},
              {expand: true, cwd: 'bower_components/font-awesome/fonts', src: '**/*', dest: 'generated/fonts/', filter: 'isFile'},
              {expand: true, cwd: 'bower_components/jquery.gifplayer/dist/', src: '*.css', dest: 'generated/css/', filter: 'isFile'}

          ]
      },
      dist: {
          files: [
              {expand: true, cwd: 'app', src: '*.html', dest: 'dist/', filter: 'isFile'},
              {expand: true, cwd: 'app/img', src: '**/*', dest: 'dist/img/', filter: 'isFile'},
              {expand: true, cwd: 'bower_components/font-awesome/fonts', src: '**/*', dest: 'dist/fonts/', filter: 'isFile'},
              {expand: true, cwd: 'bower_components/jquery.gifplayer/dist/', src: '*.css', dest: 'dist/css/', filter: 'isFile'}
          ]
      }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

};