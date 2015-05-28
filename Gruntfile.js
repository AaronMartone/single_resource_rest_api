module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            js: {
                entry: __dirname + '/app/assets/js/main.js',
                output: {
                    path: 'build/',
                    filename: 'bundle.js'
                }    
            },
            test: {
                entry: __dirname + '/tests/simple-test.js',
                output: {
                    path: 'tests/',
                    filename: 'testing-bundle.js'
                }
            }                    
        },
        copy: {
            html: {
                cwd: __dirname + '/app',
                expand: true,
                flatten: false,
                src: '*.html',
                dest: __dirname + '/build',
                filter: 'isFile'                
            },
            test_html: {
                cwd: __dirname + '/tests',
                expand: true,
                flatten: false,
                src: '*.html',
                dest: __dirname + '/tests',
                filter: 'isFile'
            },
            test_css: {
                cwd: __dirname + '/node_modules/mocha',
                expand: true,
                flatten: false,
                src: 'mocha.css',
                dest: __dirname + '/tests',
                filter: 'isFile'
            },
            test_js: {
                cwd: __dirname + '/node_modules/mocha',
                expand: true,
                flatten: false,
                src: 'mocha.js',
                dest: __dirname + '/tests',
                filter: 'isFile'
            }
        },
        clean: {
            dev: {
                src: __dirname + '/build'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', [ 'clean:dev', 'webpack', 'copy' ]);
};