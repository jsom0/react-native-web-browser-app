import { DEFAULT_HEADER_RETRACTED_HEIGHT, DEFAULT_HEADER_REVEALED_HEIGHT } from "./header/TabLocationView";
import { DEFAULT_FOOTER_REVEALED_HEIGHT } from "./footer/Footer";
import { DefaultBarAwareWebView } from "./webView/BarAwareWebView";
import { defaultTabToolbar } from "./footer/TabToolbar";
import { defaultHeader } from "./header/Header";
import { defaultGradientProgressBar } from "./header/GradientProgressBar";
import { RetractionStyle } from "./bothBars/BarConfig";
export const defaultConfig = {
    header: {
        HEADER_RETRACTED_HEIGHT: DEFAULT_HEADER_RETRACTED_HEIGHT,
        HEADER_REVEALED_HEIGHT: DEFAULT_HEADER_REVEALED_HEIGHT,
        portraitRetraction: RetractionStyle.retractToCompact,
        landscapeRetraction: RetractionStyle.retractToHidden,
        progressBarTrackColor: "blue",
        backgroundColor: "gray",
        slotBackgroundColor: "darkgray",
        textFieldTextColor: "black",
        textFieldBackgroundColor: "transparent",
        // contentView: (props: HeaderProps) => null,
        contentView: defaultHeader,
        // progressBar: (props: GradientProgressBarOwnProps) => null,
        progressBar: defaultGradientProgressBar,
    },
    footer: {
        HEADER_RETRACTED_HEIGHT: DEFAULT_HEADER_RETRACTED_HEIGHT,
        HEADER_REVEALED_HEIGHT: DEFAULT_HEADER_REVEALED_HEIGHT,
        FOOTER_REVEALED_HEIGHT: DEFAULT_FOOTER_REVEALED_HEIGHT,
        portraitRetraction: RetractionStyle.retractToHidden,
        landscapeRetraction: RetractionStyle.alwaysHidden,
        backgroundColor: "gray",
        // contentView: (props: TabToolbarProps) => null,
        contentView: defaultTabToolbar,
    },
    barAwareWebView: DefaultBarAwareWebView,
};
//# sourceMappingURL=browserConfig.js.map