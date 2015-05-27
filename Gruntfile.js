module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            js: {
                entry: __dirname + '/app/assets/js/test.js',
                output: {
                    path: 'build/',
                    filename: 'bundle.js'
                }    
            }                    
        },
        copy: {
            html: {
                cwd: __dirname + '/app',
                expand: true,
                flatten: false,
                src: '**/*.html',
                dest: __dirname + '/build',
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

    grunt.registerTask('default', [ 'clean:dev', 'webpack', 'copy:html' ]);
};