import { View, Text, StyleSheet, TouchableNativeFeedback, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Lang from "../../components/Lang";
import BackButton from "../../assets/icons/back";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import masalahList from "./masalahList";
import DataContainer from "../../components/DataContainer";

const MasalahPage = () => {
    return (
        <View style={styles.body}>
            <LinearGradient
                colors={["#f78b9b", "#f7e1e4", "white", "white"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.6, y: 0.89 }}
                style={styles.gradient}
            />

            <SafeAreaView style={styles.container}>
                <View style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                    <View style={styles.top}>
                        <View style={{ overflow: "hidden", borderRadius: 4 }}>
                            <TouchableNativeFeedback style={styles.back} onPress={() => router.back()}>
                                <BackButton style={{ width: 30, height: 35, marginTop: "2%" }} />
                            </TouchableNativeFeedback>
                        </View>

                        <Lang english="Masalahs" bengali="মাসআলা" style={{ fontWeight: 900, fontSize: 27 }} />
                    </View>
                </View>

                <ScrollView style={{ marginTop: 16 }}>
                    <View style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                        <Lang
                            english="Guidance for Every Step"
                            bengali="প্রতিটি পদক্ষেপে পথনির্দেশনা"
                            style={{
                                fontSize: 12,
                                color: "#363636",
                                marginTop: -1,
                                marginBottom: -4,
                                textAlign: "right",
                            }}
                        />
                    </View>

                    <View style={{ alignItems: "center", marginBottom: "4%" }}>
                        {masalahList.map((elm) => (
                            <DataContainer key={"root-" + elm.groupName} data={elm} borderColor="#E30B5C" />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },

    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },

    top: {
        height: 40,
        position: "relative",
        top: "2%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },

    back: {
        position: "relative",
        right: 50,
        padding: 10,
    },

    gradient: {
        position: "absolute",
        height: "105%",
        width: "150%",
        opacity: 0.5,
    },
});

export default MasalahPage;
