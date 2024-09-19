import { TouchableNativeFeedback, View } from "react-native";
import React from "react";

const SettingContent = ({
    border = false,
    selected = false,
    children,
    onClick,
}: {
    border?: boolean;
    children: React.ReactNode;
    selected?: boolean;
    onClick: () => void;
}) => {
    return (
        <View
            style={{
                borderBottomWidth: border ? 1 : 0,
                borderColor: "#D3D3D3",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: selected ? "lightgray" : "white",
                borderRadius: 5,
                overflow: "hidden",
                marginBottom: "0.5%",
            }}
        >
            <TouchableNativeFeedback
                style={{ width: "100%", height: "100%" }}
                onPress={() => (!selected ? onClick() : null)}
            >
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: "2%",
                    }}
                >
                    {children}

                    <View
                        style={{
                            width: 11,
                            borderRadius: 11,
                            backgroundColor: selected ? "#232429" : "transparent",
                            height: 11,
                            marginRight: "2%",
                        }}
                    ></View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default SettingContent;
