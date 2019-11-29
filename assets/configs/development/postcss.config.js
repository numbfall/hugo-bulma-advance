const autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
        autoprefixer({
            browserlist: [
                "last 2 versions"
            ]
        })
    ]
}
