module.exports = {
    content: [
        '!**/{bin,obj,node_modules}/**',
        '**/*.{cshtml,html,js}',
    ],
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    //prefix: 'tw-',
    plugins: [],
}