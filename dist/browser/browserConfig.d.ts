import { BarAwareWebViewType } from "./webView/BarAwareWebView";
import { TabToolbarType } from "./footer/TabToolbar";
import { HeaderType } from "./header/Header";
import { GradientProgressBarType } from "./header/GradientProgressBar";
import { BarConfig, RetractionStyle } from "./bothBars/BarConfig";
export interface HeaderConfig extends BarConfig {
    HEADER_RETRACTED_HEIGHT?: number;
    HEADER_REVEALED_HEIGHT?: number;
    HEADER_HIDDEN_HEIGHT?: number;
    progressBarTrackColor?: string;
    portraitRetraction: RetractionStyle;
    landscapeRetraction: RetractionStyle;
    textFieldTextColor?: string;
    buttonEnabledColor?: string;
    buttonDisabledColor?: string;
    slotBackgroundColor?: string;
    textFieldBackgroundColor?: string;
    contentView?: HeaderType;
    progressBar?: GradientProgressBarType;
}
/**
 * References are made to the header retraction/reveal heights because the footer
 * is designed to retract at exactly the same rate as the header does.
 */
export interface FooterConfig extends BarConfig {
    buttonEnabledColor?: string;
    buttonDisabledColor?: string;
    HEADER_RETRACTED_HEIGHT?: number;
    HEADER_REVEALED_HEIGHT?: number;
    FOOTER_REVEALED_HEIGHT: number;
    portraitRetraction: RetractionStyle.alwaysRevealed | RetractionStyle.retractToHidden | RetractionStyle.alwaysHidden;
    landscapeRetraction: RetractionStyle.alwaysRevealed | RetractionStyle.retractToHidden | RetractionStyle.alwaysHidden;
    contentView?: TabToolbarType;
}
export interface BrowserConfig {
    header: HeaderConfig;
    footer: FooterConfig;
    barAwareWebView?: BarAwareWebViewType;
}
export declare const defaultConfig: BrowserConfig;
