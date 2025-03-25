import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ArticleRenderer, { RenderableContent } from "../../components/ArticleRenderer";
import BackButton from "../../assets/icons/back";
import getMasalah, { getMasalahName } from "./getMasalah";
import Lang from "../../components/Lang";
import { LinearGradient } from "expo-linear-gradient";

const Masalah = () => {
    const { id } = useLocalSearchParams() as { id: string };
    const masalah = getMasalah(id) as RenderableContent[];
    const name = getMasalahName(id);

    return (
        <View style={styles.body}>
            <LinearGradient
                colors={["#f78b9b", "#f7e1e4", "white", "white", "white"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.6, y: 0.89 }}
                style={styles.gradient}
            />

            <SafeAreaView style={styles.container}>
                <View style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                    <View style={styles.top}>
                        <View style={{ overflow: "hidden", borderRadius: 4 }}>
                            <TouchableNativeFeedback style={styles.back} onPress={() => router.back()}>
                                <BackButton fillColor="#292929" style={{ width: 30, height: 35, marginTop: "2%" }} />
                            </TouchableNativeFeedback>
                        </View>

                        <Lang
                            english={name[0]}
                            bengali={name[1]}
                            style={{ fontWeight: 900, fontSize: 16, textAlign: "right", width: "85%" }}
                        />
                    </View>
                </View>

                <ArticleRenderer data={masalah} />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#f0f4fc",
    },

    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },

    back: {
        position: "relative",
        right: 50,
        padding: 10,
    },

    top: {
        height: 40,
        position: "relative",
        top: "2%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "4%",
    },
    gradient: {
        position: "absolute",
        height: "105%",
        width: "150%",
        opacity: 0.5,
    },
});

export default Masalah;
