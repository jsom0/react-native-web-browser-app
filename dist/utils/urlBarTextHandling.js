/* Safer regex of the two given in: https://stackoverflow.com/a/4749397/5951226 */
// The original Regex written and escaped for usage in Obj-C: "(?i)\\b((?:[a-z][\\w-]+:(?:/{1,3}|[a-z0-9%])|www\\d{0,3}[.]|[a-z0-9.\\-]+[.][a-z]{2,4}/?)(?:[^\\s()<>]+|\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\))*(?:\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\)|[^\\s`!()\\[\\]{};:'\".,<>?«»“”‘’])*)"
const urlRegEx = /^((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/?)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))*(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'\".,<>?«»“”‘’])*)/i;
export function isValidUrl(text) {
    return urlRegEx.test(text);
}
export var SearchProvider;
(function (SearchProvider) {
    SearchProvider["Bing"] = "Bing";
    /* I'll support these later */
    // Cliqz = "Cliqz",
    SearchProvider["DuckDuckGo"] = "DuckDuckGo";
    SearchProvider["Google"] = "Google";
    // Yahoo = "Yahoo",
})(SearchProvider || (SearchProvider = {}));
export function convertTextToSearchQuery(text, searchProvider) {
    let searchQuery = "";
    switch (searchProvider) {
        case SearchProvider.Bing:
            {
                const termDelimiter = "+";
                const params = text.split(" ").reduce((acc, term, i) => acc + (i > 0 ? termDelimiter : "") + encodeURIComponent(term), "");
                searchQuery = "https://www.bing.com/search?q=" + params;
            }
            break;
        case SearchProvider.Google:
            {
                const termDelimiter = "%20";
                const params = text.split(" ").reduce((acc, term, i) => acc + (i > 0 ? termDelimiter : "") + encodeURIComponent(term), "");
                searchQuery = "https://www.google.com/search?q=" + params;
            }
            break;
        case SearchProvider.DuckDuckGo:
            {
                // Seems to accept either "+" or "%20" as a term delimeter.
                const termDelimiter = "+";
                const params = text.split(" ").reduce((acc, term, i) => acc + (i > 0 ? termDelimiter : "") + encodeURIComponent(term), "");
                searchQuery = "https://www.duckduckgo.com/?q=" + params;
            }
            break;
    }
    return searchQuery;
}
//# sourceMappingURL=urlBarTextHandling.js.map