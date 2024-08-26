import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Menus from "../assets/icons/menus";
import QuranSVG from "../assets/icons/quran";

export default function Home() {
    return (
        <View style={styles.body}>
            <LinearGradient
                colors={["#9E7CD7", "#ADD8E6", "#F0F8FF", "white"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.6, y: 0.89 }}
                style={styles.gradient}
            />

            <SafeAreaView style={styles.container}>
                <StatusBar style="auto" />

                <View style={styles.navbar}>
                    <Image style={styles.icon} source={require("../assets/icons/icon-rounded.png")} />

                    <View style={styles.iconShadow}></View>

                    <View style={styles.menu}>
                        <TouchableNativeFeedback>
                            <Menus />
                        </TouchableNativeFeedback>
                    </View>
                </View>

                <View style={styles.mainbox}>
                    <View style={styles.mainbox_text}>
                        <Text style={{ fontSize: 19, fontWeight: "900" }}>
                            This is a dummy text, this is not a very cool looking text and we are trying some
                            allignment.
                        </Text>

                        <Text style={{ fontWeight: "600" }}>Some Example (22:33)</Text>
                    </View>

                    <View style={{ width: "32%" }}>
                        <QuranSVG />
                    </View>
                </View>

                <Text style={styles.exploreTitle}>Explore</Text>

                <View style={{ display: "flex", marginTop: "3%" }}>
                    <View style={styles.navButtons}></View>
                    <View style={styles.navButtons}></View>
                    <View style={styles.navButtons}></View>
                    <View style={styles.navButtons}></View>
                </View>
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
        paddingLeft: "5%",
        paddingRight: "5%",
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
        borderRadius: 18,
        overflow: "hidden",
    },

    mainbox: {
        width: "100%",
        height: "25%",
        marginTop: "5%",
        borderRadius: 15,
        elevation: 12,
        backgroundColor: "#F0F8FF",
        padding: "4.5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    mainbox_text: {
        width: "68%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
    },

    exploreTitle: {
        fontSize: 42,
        fontWeight: "900",
        marginTop: "5%",
    },

    navButtons: {
        height: "12%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
