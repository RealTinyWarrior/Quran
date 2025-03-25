import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Menus from "../assets/icons/menus";
import QuranSVG from "../assets/icons/quran";
import Navbox from "../components/Navbox";
import { router } from "expo-router";
import * as NavigationBar from "expo-navigation-bar";
import WelcomeVerse from "../components/WelcomeVerse";
import Lang from "../components/Lang";
import * as Font from "expo-font";
import { ScheherazadeNew_400Regular, ScheherazadeNew_700Bold } from "@expo-google-fonts/scheherazade-new";
import { useEffect } from "react";

export default function Home() {
    NavigationBar.setBorderColorAsync("#EDEDED");
    NavigationBar.setBackgroundColorAsync("#F0F8FF");
    NavigationBar.setButtonStyleAsync("dark");

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                ScheherazadeRegular: ScheherazadeNew_400Regular,
                ScheherazadeBold: ScheherazadeNew_700Bold,
            });
        }

        loadFonts();
    }, []);

    return (
        <View style={styles.body}>
            <LinearGradient
                colors={["#c4a6f7", "#bfe8f5", "white", "white"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.6, y: 0.89 }}
                style={styles.gradient}
            />

            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{ alignItems: "center", marginBottom: "3%" }}>
                        <View style={{ width: "90%" }}>
                            <StatusBar style="auto" />

                            <View style={styles.navbar}>
                                <Image style={styles.icon} source={require("../assets/icons/icon-rounded.png")} />
                                <View style={styles.iconShadow}></View>

                                <View style={styles.menu}>
                                    <TouchableNativeFeedback onPress={() => router.push("/settings")}>
                                        <Menus />
                                    </TouchableNativeFeedback>
                                </View>
                            </View>

                            <View style={styles.mainbox}>
                                <View style={styles.mainbox_text}>
                                    <WelcomeVerse />
                                </View>

                                <View style={{ width: "32%" }}>
                                    <QuranSVG />
                                </View>
                            </View>

                            <Lang style={styles.exploreTitle} english="Explore" bengali="অন্বেষণ" />

                            <View style={{ display: "flex", marginTop: "3%" }}>
                                <View style={styles.navButtons}>
                                    <Navbox
                                        preText="Recite The"
                                        preTextBengali="কুরআন"
                                        titleBengali="তিলাওয়াত"
                                        title="Quran"
                                        href="/quran"
                                    />

                                    <Navbox
                                        preText="Read The"
                                        preTextBengali="হাদিস"
                                        title="Hadith"
                                        titleBengali="পড়ুন"
                                        href="/hadith"
                                    />
                                </View>

                                <View style={styles.navButtons}>
                                    <Navbox
                                        preText="List of"
                                        preTextBengali="দোয়া"
                                        title="Duas"
                                        titleBengali="সামগ্রী"
                                        href="/dua"
                                    />

                                    <Navbox
                                        preText="List of"
                                        preTextBengali="মাসআলা"
                                        title="Mas'alahs"
                                        titleBengali="সামগ্রী"
                                        href="/masalah"
                                    />
                                </View>

                                <View style={styles.navButtons}>
                                    <Navbox
                                        preText="Prayer"
                                        preTextBengali="নামাজের"
                                        title="Times"
                                        titleBengali="সময়সূচী"
                                        href="/times"
                                    />

                                    <Navbox
                                        preText="Other"
                                        preTextBengali="অন্যান্য"
                                        title="Features"
                                        titleBengali="ফিচার"
                                        href="/others"
                                    />
                                </View>

                                <View style={[styles.navButtons, { justifyContent: "center" }]}></View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

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

    gradient: {
        position: "absolute",
        height: "105%",
        width: "150%",
        opacity: 0.5,
    },

    navbar: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: "5%",
        justifyContent: "space-between",
    },

    icon: {
        width: "15%",
        aspectRatio: 1,
        zIndex: 1,
    },

    iconShadow: {
        width: "15%",
        aspectRatio: 1,
        borderRadius: 15,
        position: "relative",
        right: "283%",
        elevation: 11,
    },

    menu: {
        width: "15%",
        aspectRatio: 1,
        borderRadius: 14,
        overflow: "hidden",
    },

    mainbox: {
        width: "100%",
        height: 170,
        marginTop: "5%",
        borderRadius: 15,
        elevation: 8,
        backgroundColor: "#F0F8FF",
        padding: "4.5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    mainbox_text: {
        width: "66%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
    },

    exploreTitle: {
        fontSize: 32,
        fontWeight: "900",
        marginTop: "5%",
    },

    navButtons: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "2.7%",
    },
});
