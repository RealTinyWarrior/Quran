import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Lang from "../../components/Lang";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../../assets/icons/back";

const ComingSoonPage = () => {
    return (
        <View style={styles.body}>
            <LinearGradient
                colors={["#c4a6f7", "#bfe8f5", "white", "white"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.6, y: 0.89 }}
                style={styles.gradient}
            />

            <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <View style={{ overflow: "hidden", borderRadius: 4 }}>
                        <TouchableNativeFeedback style={styles.back} onPress={() => router.back()}>
                            <BackButton style={{ width: 30, height: 35, marginTop: "2%" }} />
                        </TouchableNativeFeedback>
                    </View>

                    <Lang english="Coming Soon!" bengali="শিগ্রই আসছে!" style={{ fontWeight: 900, fontSize: 20 }} />
                </View>

                <View style={{ alignItems: "center", marginTop: "50%" }}>
                    <Lang
                        style={{ fontSize: 26, width: "82%", textAlign: "center", fontWeight: "500", color: "#3e3e3e" }}
                        english="This feature is coming soon!"
                        bengali="এই ফিচারটি শিগ্রই আসছে!"
                    />
                </View>
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
        paddingLeft: "5%",
        paddingRight: "5%",
        width: "100%",
        height: "100%",
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
    top: {
        height: 40,
        position: "relative",
        top: "2%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
});

export default ComingSoonPage;
