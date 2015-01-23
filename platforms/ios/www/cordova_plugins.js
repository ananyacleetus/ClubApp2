cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/net.spantree.searchbar/www/searchbar.js",
        "id": "net.spantree.searchbar.searchbar",
        "clobbers": [
            "cordova.searchbar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "net.spantree.searchbar": "2.0"
}
// BOTTOM OF METADATA
});