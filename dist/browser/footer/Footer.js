import * as React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaInsetsContext, } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { RetractionStyle } from '../bothBars/BarConfig';
import { DEFAULT_HEADER_RETRACTED_HEIGHT, DEFAULT_HEADER_REVEALED_HEIGHT, } from '../header/TabLocationView';
import { defaultTabToolbar } from './TabToolbar';
const { diffClamp, interpolateNode, event: reanimatedEvent, multiply, add, cond, lessThan, neq, Clock, Extrapolate, clockRunning, set, startClock, spring, sub, stopClock, eq, } = Animated;
// export const FOOTER_RETRACTED_HEIGHT: number = 22;
export const DEFAULT_FOOTER_REVEALED_HEIGHT = 44;
// https://github.com/cliqz/user-agent-ios/blob/develop/Client/Frontend/Browser/BrowserViewController.swift#L103
export class Footer extends React.Component {
    render() {
        const { config, showToolbar, orientation, children, ...rest } = this.props;
        const { backgroundColor, contentView = defaultTabToolbar, landscapeRetraction, portraitRetraction, FOOTER_REVEALED_HEIGHT = DEFAULT_FOOTER_REVEALED_HEIGHT, HEADER_REVEALED_HEIGHT = DEFAULT_HEADER_REVEALED_HEIGHT, HEADER_RETRACTED_HEIGHT = DEFAULT_HEADER_RETRACTED_HEIGHT, } = config;
        const retractionStyle = orientation === 'portrait' ? portraitRetraction : landscapeRetraction;
        const HEADER_RETRACTION_DISTANCE = HEADER_REVEALED_HEIGHT - HEADER_RETRACTED_HEIGHT;
        const FOOTER_HIDDEN_HEIGHT = 0;
        if (showToolbar) {
            /* Warning: I've tried other layouts (StackLayout and FlexboxLayout) here, but they shift
             * horizontally after rotation. Only ContentView seems to escape this bug. */
            return (<SafeAreaInsetsContext.Consumer>
          {(edgeInsets) => {
                    const unsafeAreaCoverHeight = edgeInsets.bottom;
                    let heightStyle;
                    switch (retractionStyle) {
                        case RetractionStyle.alwaysRevealed:
                            heightStyle = {
                                // height: "auto",
                                height: FOOTER_REVEALED_HEIGHT + unsafeAreaCoverHeight,
                            };
                            break;
                        // case RetractionStyle.retractToCompact:
                        case RetractionStyle.retractToHidden:
                            heightStyle = {
                                height: interpolateNode(this.props.scrollY, [-HEADER_RETRACTION_DISTANCE, HEADER_RETRACTION_DISTANCE], [
                                    FOOTER_HIDDEN_HEIGHT,
                                    add(FOOTER_REVEALED_HEIGHT, unsafeAreaCoverHeight),
                                ], Extrapolate.CLAMP),
                            };
                            break;
                        case RetractionStyle.alwaysHidden:
                            heightStyle = {
                                height: FOOTER_HIDDEN_HEIGHT,
                            };
                    }
                    return (<Animated.View style={[
                            {
                                flexDirection: 'column',
                                width: '100%',
                                backgroundColor,
                                /* Combine this with auto height. */
                                // paddingBottom: unsafeAreaCoverHeight,
                                paddingLeft: edgeInsets.left,
                                paddingRight: edgeInsets.right,
                            },
                            heightStyle,
                        ]} 
                    // height={{ value: animatedHeight, unit: "dip" }}
                    {...rest}>
                {contentView({ config })}
                {/* <ContentView config={config}/> */}
              </Animated.View>);
                }}
        </SafeAreaInsetsContext.Consumer>);
        }
        // Unclear what footer should do when not showing toolbar...
        return <View></View>;
    }
}
export const FooterConnected = connect((wholeStoreState) => {
    // console.log(`wholeStoreState`, wholeStoreState);
    return {
        orientation: wholeStoreState.ui.orientation,
    };
}, {})(Footer);
//# sourceMappingURL=Footer.js.map