const purgecss = require('postcss-purgecss')
const autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
        purgecss({
            content: [
                'layouts/**/*.html'
            ]
        }),
        autoprefixer({
            browserlist: [
                "last 2 versions"
            ]
        })
    ]
}
