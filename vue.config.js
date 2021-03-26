module.exports = {
    publicPath: "/sanag/",
    css: {
        loaderOptions: {
            sass: {
                additionalData: "@import '@/styles/global.scss';"
            }
        }
    }
}