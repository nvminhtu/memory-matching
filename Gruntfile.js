module.exports = function(grunt) {
  "use strict";

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
              ' * <%= pkg.description %> v<%= pkg.version %> \n (<%= pkg.homepage %>)\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              ' */\n\n',
              
    // Task configuration.
    clean: {
      dist: ['public','public/**/*']
    },

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['src/js/*.js']
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      scripts: {
        src: [
            'src/libs/angular.min.js'
          , 'src/libs/angular-route.js'
          , 'src/libs/angular-resource.js'
          
          , 'src/js/game.js'
          , 'src/js/controllers.js'
          , 'src/js/directives.js'

        ],
        dest: 'public/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      base: {
        src: ['<%= concat.scripts.dest %>'],
        dest: 'public/js/<%= pkg.name %>.min.js'
      }

    },

    recess: {
      options: {
        compile: true,
        banner: '<%= banner %>'
      },
      min: {
        options: {
          compress: true
        },
        src: [
        'src/css/icons.css',
        'src/css/animations.css',
        'src/css/basic.less'
        ],
        
        dest: 'public/css/<%= pkg.name %>.min.css'
      },
    },

    copy: {
      fonts: {
        expand: true,
        flatten: true,
        src: ["src/font/*"],
        dest: 'public/font/'
      }
    },

    qunit: {
      options: {
        inject: 'js/tests/unit/phantom.js'
      },
      files: ['js/tests/*.html']
    },

    watch: {
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['dist-js']
      },
      recess: {
        files: 'src/css/*.less',
        tasks: ['dist-css']
      }
    },
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);

  // Fonts distribution task.
  grunt.registerTask('dist-fonts', ['copy']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css', 'dist-fonts', 'dist-js']);

  // Default task.
  grunt.registerTask('default', ['dist','watch']);


};
