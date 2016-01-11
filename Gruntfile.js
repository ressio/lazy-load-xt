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
                ' | <%= _.pluck(pkg.licenses, "type").join(", ") %> License */'
        },
        // Task configuration.
        clean: {
            files: ['dist']
        },
        copy: {
            loadinggif: {
                src: 'src/loading.gif',
                dest: 'dist/loading.gif'
            }
        },
        concat: {
            options: {
                banner: '<%= banner.full %>',
                process: function (src) {
                    // remove jslint/jshint options and 'use strict' declaration
                    return src
                        .replace(/\/\*js[hl]int.*?\*\/\n/g, '')
                        .replace(/(^|\n)[ \t]*(['"])use strict\2;[ \t]*\n*/g, '$1');
                }
            },
            base: {
                src: ['src/jquery.<%= pkg.name %>.js'],
                dest: 'dist/jquery.<%= pkg.name %>.js'
            },
            spinner: {
                src: ['src/jquery.<%= pkg.name %>.spinner.css'],
                dest: 'dist/jquery.<%= pkg.name %>.spinner.css'
            },
            fadein: {
                src: ['src/jquery.<%= pkg.name %>.fadein.css'],
                dest: 'dist/jquery.<%= pkg.name %>.fadein.css'
            },

            extra: {
                src: ['src/jquery.<%= pkg.name %>.js', 'src/jquery.<%= pkg.name %>.video.js'],
                dest: 'dist/jquery.<%= pkg.name %>.extra.js'
            },

            jqlight: {
                src: ['src/jqlight.<%= pkg.name %>.js'],
                dest: 'dist/jqlight.<%= pkg.name %>.js'
            },

            autoload: {
                src: ['src/jquery.<%= pkg.name %>.autoload.js'],
                dest: 'dist/jquery.<%= pkg.name %>.autoload.js'
            },
            bg: {
                src: ['src/jquery.<%= pkg.name %>.bg.js'],
                dest: 'dist/jquery.<%= pkg.name %>.bg.js'
            },
            bootstrap: {
                src: ['src/jquery.<%= pkg.name %>.bootstrap.js'],
                dest: 'dist/jquery.<%= pkg.name %>.bootstrap.js'
            },
            jquerymobile: {
                src: ['src/jquery.<%= pkg.name %>.jquerymobile.js'],
                dest: 'dist/jquery.<%= pkg.name %>.jquerymobile.js'
            },
            picture: {
                src: ['src/jquery.<%= pkg.name %>.picture.js'],
                dest: 'dist/jquery.<%= pkg.name %>.picture.js'
            },
            print: {
                src: ['src/jquery.<%= pkg.name %>.print.js'],
                dest: 'dist/jquery.<%= pkg.name %>.print.js'
            },
            script: {
                src: ['src/jquery.<%= pkg.name %>.script.js'],
                dest: 'dist/jquery.<%= pkg.name %>.script.js'
            },
            srcset: {
                src: ['src/jquery.<%= pkg.name %>.srcset.js'],
                dest: 'dist/jquery.<%= pkg.name %>.srcset.js'
            },
            video: {
                src: ['src/jquery.<%= pkg.name %>.video.js'],
                dest: 'dist/jquery.<%= pkg.name %>.video.js'
            },
            widget: {
                src: ['src/jquery.<%= pkg.name %>.widget.js'],
                dest: 'dist/jquery.<%= pkg.name %>.widget.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner.short %>\n',
                report: 'gzip'
            },
            base: {
                src: '<%= concat.base.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.min.js'
            },
            extra: {
                src: '<%= concat.extra.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.extra.min.js'
            },

            jqlight: {
                src: '<%= concat.jqlight.dest %>',
                dest: 'dist/jqlight.<%= pkg.name %>.min.js'
            },

            autoload: {
                src: '<%= concat.autoload.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.autoload.min.js'
            },
            bg: {
                src: '<%= concat.bg.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.bg.min.js'
            },
            bootstrap: {
                src: '<%= concat.bootstrap.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.bootstrap.min.js'
            },
            jquerymobile: {
                src: '<%= concat.jquerymobile.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.jquerymobile.min.js'
            },
            picture: {
                src: '<%= concat.picture.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.picture.min.js'
            },
            print: {
                src: '<%= concat.print.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.print.min.js'
            },
            script: {
                src: '<%= concat.script.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.script.min.js'
            },
            srcset: {
                src: '<%= concat.srcset.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.srcset.min.js'
            },
            video: {
                src: '<%= concat.video.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.video.min.js'
            },
            widget: {
                src: '<%= concat.widget.dest %>',
                dest: 'dist/jquery.<%= pkg.name %>.widget.min.js'
            }
        },
        cssmin: {
            minify: {
                options: {
                    banner: '<%= banner.short %>',
                    report: 'gzip'
                },
                files: [
                    {src: 'src/jquery.<%= pkg.name %>.spinner.css', dest: 'dist/jquery.<%= pkg.name %>.spinner.min.css'},
                    {src: 'src/jquery.<%= pkg.name %>.fadein.css', dest: 'dist/jquery.<%= pkg.name %>.fadein.min.css'}
                ]
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
/*  grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch'); */
    require('jit-grunt')(grunt);

    // Default task.
    grunt.registerTask('default', ['jshint', 'clean', 'copy', 'concat', 'uglify', 'cssmin', 'qunit']);

};
