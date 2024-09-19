import { View, Text, StyleSheet } from "react-native";
import React from "react";

type SettingsBoxProps = {
    children: React.ReactElement;
    Icon: React.ReactElement;
    title: string;
    description: string;
};

const SettingsBox = ({ children, title, Icon, description }: SettingsBoxProps) => {
    return (
        <View style={styles.box}>
            <View style={styles.titleContainer}>
                {Icon}
                <Text style={{ fontWeight: 900, fontSize: 36, flexWrap: "wrap", flex: 1 }}>
                    {title} {"\n"}
                    <Text style={styles.description}>{description}</Text>
                </Text>
            </View>

            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        borderRadius: 12,
        backgroundColor: "white",
        elevation: 5,
        padding: "2.7%",
    },

    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "3%",
    },

    description: {
        fontSize: 12,
        fontWeight: "500",
    },
});

export default SettingsBox;
