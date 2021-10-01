export declare enum RetractionStyle {
    alwaysRevealed = "alwaysRevealed",
    alwaysCompact = "alwaysCompact",
    alwaysHidden = "alwaysHidden",
    retractToCompact = "retractToCompact",
    retractToHidden = "retractToHidden"
}
export interface BarConfig {
    portraitRetraction: RetractionStyle;
    landscapeRetraction: RetractionStyle;
    backgroundColor?: string;
}
