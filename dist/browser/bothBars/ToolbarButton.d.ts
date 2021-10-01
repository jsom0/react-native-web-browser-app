import * as React from "react";
import { RegisteredStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5';
declare type ToolbarButtonContainerStyle = RegisteredStyle<Animated.AnimateStyle<ViewStyle>> | Animated.AnimateStyle<ViewStyle>;
export declare type ToolbarButtonContainerStyleProp = {
    containerStyle?: ToolbarButtonContainerStyle;
};
export interface ToolbarButtonOwnProps {
    name?: string;
    onTap?: () => void;
    enabled?: boolean;
    enabledColor?: string;
    disabledColor?: string;
}
interface State {
}
export declare type ToolbarButtonProps = ToolbarButtonOwnProps & Omit<TouchableOpacityProps & ToolbarButtonContainerStyleProp, "style"> & Partial<FontAwesome5IconProps>;
export declare class ToolbarButton extends React.Component<ToolbarButtonProps, State> {
    render(): JSX.Element;
}
export {};
