import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { DuaObject } from "../app/dua/duaList";
import Lang from "./Lang";
import { router } from "expo-router";

const DataContainer = ({ data, borderColor }: { data: DuaObject; borderColor: string }) => {
    return (
        <View style={[styles.container, { borderColor }]}>
            <Lang style={styles.title} english={data.groupName} bengali={data.groupNameBengali} />

            <View style={styles.routesContainer}>
                {data.routes.map((elm, i) => (
                    <View key={data.groupName + i} style={styles.touchableWrapper}>
                        <TouchableNativeFeedback onPress={() => router.push(elm.link)}>
                            <View style={styles.route}>
                                <Lang style={styles.routeText} english={elm.name} bengali={elm.nameBengali} />
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4F4F9",
        padding: "6%",
        marginTop: "2.5%",
        borderRadius: 3,
        borderTopWidth: 4,
        elevation: 5,
        width: "90%",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333D4B",
    },
    routesContainer: {
        marginTop: "8%",
    },
    touchableWrapper: {
        borderRadius: 6,
        overflow: "hidden", // Ensures ripple effect respects border radius
        marginBottom: 6,
    },
    route: {
        backgroundColor: "#E6EAF0",
        borderRadius: 6,
        paddingVertical: "2.8%",
        paddingHorizontal: 10,
        borderColor: "gray",
        borderRightWidth: 2,
    },
    routeText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#2D3748",
    },
});

export default DataContainer;
