module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Project Settings
        project: {
            views      : 'app/views',
            webroot    : 'app/webroot',
            assets     : 'assets',
            assets_dist: 'app/webroot/assets'
        },

        // CSS
        compass: {
            dist: {
                options: {
                    httpPath: '/',
                    cssDir: '<%= project.assets_dist %>/css',
                    sassDir: '<%= project.assets %>/scss',
                    imagesDir: '<%= project.assets %>/img',
                    httpImagesPath: '/assets/img',
                    httpGeneratedImagesPath: '<%= compass.dist.options.httpImagesPath %>',
                    javascriptsDir: '<%= project.assets %>/js',
                    outputStyle: 'compressed',
                    sourcemap: true,
                    force: true
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({
                        // browsers: ['last 1 version']
                    })
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= compass.dist.options.cssDir %>',
                    src: '**/*.css',
                    dest: '<%= compass.dist.options.cssDir %>'
                }]
            }
        },

        // Images
        clean: [
            '<%= project.assets %>/img-build'
        ],
        imagemin: {
            assets: {
                files: [{
                    expand: true,
                    cwd: '<%= project.assets_dist %>/img/',
                    src: '**/*.{png,jpg,gif}',
                    dest: '<%= project.assets_dist %>/img/'
                }],
                options: {
                    optimizationLevel: 5 // 0-7
                }
            }
        },

        // Files
        copy: {
            img: {
                expand: true,
                cwd: '<%= project.assets %>/img',
                // TODO: Ignore `icons` directory
                src: '**/*.{svg,svgz,png,jpg,gif}',
                dest: '<%= project.assets_dist %>/img'
            }
        },

        // Watch
        watch: {
            scss: {
                files: ['<%= compass.dist.options.sassDir %>/**/*.scss'],
                tasks: ['compass:dist', 'postcss:dist']
            },
            livereload: {
                files: [
                    '<%= project.assets_dist %>/css/**/*.css'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Tasks
    grunt.registerTask('default', [
        'watch'
    ]);
    grunt.registerTask('build', [
        'build-img',
        'build-css'
    ]);
    grunt.registerTask('build-img', [
        'clean',
        'copy:img',
        'imagemin',
    ]);
    grunt.registerTask('build-css', [
        'compass',
        'postcss'
    ]);
};
