import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Menus from "../assets/icons/menus";

export default function Home() {
    return (
        <View style={styles.body}>
            <LinearGradient
                colors={["#9E7CD7", "#ADD8E6", "#F0F8FF", "white"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1.6, y: 0.9 }}
                style={styles.gradient}
            />

            <SafeAreaView style={styles.container}>
                <View style={styles.navbar}>
                    <Image style={styles.icon} source={require("../assets/icons/icon-rounded.png")} />

                    <View style={styles.menu}>
                        <TouchableNativeFeedback>
                            <Menus />
                        </TouchableNativeFeedback>
                    </View>
                </View>

                <StatusBar style="auto" />
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
    },

    gradient: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },

    navbar: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        marginTop: "5%",
        justifyContent: "space-between",
    },

    icon: {
        width: "15%",
        aspectRatio: 1,
        elevation: 6,
    },

    menu: {
        height: "100%",
        aspectRatio: 1,
        borderRadius: 18,
        overflow: "hidden",
    },
});
