const path = require("path")
const merge = require("deepmerge")
const { ModifierFlags } = require("typescript")

function withFrameworkConfig( defaultConfig ={} ) {
    const framework = "shopify" // change to frameworking you want to use

    const frameworkNextConfig = require(path.join("../", framework, "next.config"))
    const config = merge(defaultConfig, frameworkNextConfig)

    return config
}

module.exports = {withFrameworkConfig}