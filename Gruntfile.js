/* global module */
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*!\n' +
            ' * Pergola v<%= pkg.version %> <%= pkg.homepage %>\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= _.pluck(pkg.licenses, "type") %> (<%= _.pluck(pkg.licenses, "url") %>)\n' +
            ' */\n',

    clean: {
      css: 'dist/css',
      js: 'dist/js'
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      pergola: {
        src: 'js/*.js',
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    csscomb: {
      sort: {
        options: {
          sortOrder: '.csscomb.json'
        },
        files: {
          'dist/css/<%= pkg.name %>.css': 'dist/css/<%= pkg.name %>.css'
        }
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['dist/css/pergola.css']
    },

    connect: {
      server: {
        options: {
          port: 3000,
          hostname: 'localhost',
          base: '.'
        }
      },
      external: {
        options: {
          port: 4000,
          hostname: '0.0.0.0',
          base: '.'
        }
      }
    },

    jshint: {
      options: 'js/.jshintrc',
      files: ['Gruntfile.js', 'js/**/*.js']
    },

    less: {
      all: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        },
        files: {
          'dist/css/<%= pkg.name %>.css': 'less/pergola-build.less'
        }
      },

      mobile: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>-mobile.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>-mobile.css.map'
        },
        files: {
          'dist/css/<%= pkg.name %>-mobile.css': 'less/pergola-build-mobile.less'
        }
      },

      desktop: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>-desktop.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>-desktop.css.map'
        },
        files: {
          'dist/css/<%= pkg.name %>-desktop.css': 'less/pergola-build-desktop.less'
        }
      },

      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css',
          'dist/css/<%= pkg.name %>-mobile.min.css': 'dist/css/<%= pkg.name %>-mobile.css',
          'dist/css/<%= pkg.name %>-desktop.min.css': 'dist/css/<%= pkg.name %>-desktop.css'
        }
      }
    },

    open: {
      dist: {
        path: 'http://localhost:<%= connect.server.options.port %>/'
      }
    },

    uglify: {
      pergola: {
        options: {
          banner: '<%= banner %>',
          report: 'min'
        },
        src: '<%= concat.pergola.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: 'dist/css/*.css'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: 'js/**/*.js',
        tasks: ['clean:js', 'dist-js']
      },
      less: {
        files: 'less/**/*.less',
        tasks: ['clean:css', 'dist-css']
      },
      html: {
        files: 'index.html'
      }
    }
  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.registerTask('dev-open', ['connect', 'open', 'watch']);
  grunt.registerTask('dev', ['connect', 'watch']);
  grunt.registerTask('test', []);
  grunt.registerTask('dist-js', ['concat', 'uglify']);
  grunt.registerTask('dist-css', ['less', 'csscomb', 'csslint', 'usebanner']);
  grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js']);
  grunt.registerTask('default', ['test', 'dist']);
};