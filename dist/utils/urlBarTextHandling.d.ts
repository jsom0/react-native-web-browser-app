export declare function isValidUrl(text: string): boolean;
export declare enum SearchProvider {
    Bing = "Bing",
    DuckDuckGo = "DuckDuckGo",
    Google = "Google"
}
export declare function convertTextToSearchQuery(text: string, searchProvider: SearchProvider): string;
