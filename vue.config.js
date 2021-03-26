module.exports = {
    publicPath: "/sana/",
    css: {
        loaderOptions: {
            sass: {
                additionalData: "@import '@/styles/global.scss';"
            }
        }
    }
}