module.exports = grunt => {

    //Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['src/*.js']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                footer: '\n/* ! author is <%= pkg.author %> */'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            },
            builda: {
                options: {
                    mangle: {
                        eval: false, // default false
                        keep_fnames: false, // default false
                        reserved: [], // default []
                        toplevel: false // defalut false
                    },
                    report: 'min',
                    sourcemap: true
                },
                files: {
                    'build/gruntproject_a.min.js': ['src/gruntproject.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify:build', 'uglify:builda']);
}