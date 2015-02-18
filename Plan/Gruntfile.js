module.exports = function( grunt ) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    less: {
      development: {
        options: {
          paths: [ 'assets/css' ],
          compress: true,
          sourceMap: true,
          sourceMapBasepath: '/',
          sourceMapRootpath: '/'
        },
        files: {
          'assets/css/style.css': 'assets/less/style.less'
        }
      },
      dist: {
        options: {
          paths: [ 'assets/css' ],
          compress: true
        },
        files: {
          'dist/css/style.css': 'assets/less/style.less'
        }
      }
    },
    copy: {
      dist: {
        files: [
          {expand: true, src: ['assets/img/**'], dest: 'dist/img/'}
        ]
      }
    },
    autoprefixer: {
      main: {
        browsers: [ 'last 2 versions' ],
        expand: true,
        flatten: true,
        map: true,
        src: 'assets/css/*.css',
        dest: 'assets/css'
      }
    },
    // running `grunt watch` will watch for changes
    watch: {
      files: [ 'assets/less/*.less' ],
      tasks: [ 'less:development', 'autoprefixer' ]
    },
    connect: {
      server: {
        options: {
          port: 1111,
          useAvailablePort: true
        }
      }
    }
  });

  grunt.loadNpmTasks( 'grunt-contrib-less' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-autoprefixer' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-copy' );

  grunt.registerTask( 'default', [ 'less:development', 'autoprefixer', 'connect', 'watch' ] );
  grunt.registerTask( 'build', [ 'less:dist', 'copy:dist', 'autoprefixer' ] );
};
