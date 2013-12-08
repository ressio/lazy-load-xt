'use strict';

module.exports = function (grunt) {

    grunt.util.linefeed = '\n';
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: {
            full: '/*! <%= pkg.title || pkg.name %> v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
                ' * (C) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
                ' * Licensed under <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
            short: '/* <%= pkg.title || pkg.name %> <%= pkg.version %>' +
                ' | <%= _.pluck(pkg.licenses, "type").join(", ") %> License */\n'
        },
        // Task configuration.
        clean: {
            files: ['dist']
        },
        concat: {
            options: {
                banner: '<%= banner.full %>',
                process: function(src) {
                    // remove jslint/jshint options and 'use strict' declaration
                    return src
                        .replace(/\/\*js[hl]int.*?\*\/\n/g, '')
                        .replace(/(^|\n)[ \t]*(['"])use strict\2;\s*/g, '$1');
                }
            },
            base: {
                src: ['src/jquery.<%= pkg.name %>.js'],
                dest: 'dist/jquery.<%= pkg.name %>.js'
            },
            extra: {
                src: ['src/jquery.<%= pkg.name %>.js', 'src/jquery.<%= pkg.name %>.video.js'],
                dest: 'dist/jquery.<%= pkg.name %>.extra.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner.short %>',
                report: 'gzip'
            },
            base: {
                src: '<%= concat.base.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.min.js'
            },
            extra: {
                src: '<%= concat.extra.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.extra.min.js'
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            src: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: ['src/**/*.js']
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/**/*.js']
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            src: {
                files: '<%= jshint.src.src %>',
                tasks: ['jshint:src', 'qunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'qunit']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['jshint', 'clean', 'concat', 'uglify', 'qunit']);

};
