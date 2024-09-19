import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import QuranSVG from "../assets/icons/quran";
import QuranSymbol from "../assets/icons/quransymbol";
import Hadith from "../assets/icons/hadith";
import PlanetFill from "../assets/icons/planetfill";
import TestTube from "../assets/icons/testtube";
import { router } from "expo-router";

const Navbox = ({ title, preText, href }: { title: string; preText: string; href: string }) => {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback onPress={() => router.push(href)}>
                <View style={styles.buttonCont}>
                    <Icon name={title} />

                    <Text style={styles.text}>
                        {" "}
                        {preText} {"\n"} {title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const Icon = ({ name }: { name: string }) => {
    return name == "Quran" ? (
        <QuranSymbol style={styles.icon} />
    ) : name === "Hadiths" ? (
        <Hadith style={styles.icon} />
    ) : name == "Islam" ? (
        <PlanetFill style={styles.icon} />
    ) : name == "Ayaats" ? (
        <TestTube style={styles.icon} />
    ) : (
        <QuranSVG style={styles.icon} />
    );
};

const styles = StyleSheet.create({
    container: {
        width: "47%",
        backgroundColor: "#F0F8FF",
        borderRadius: 12,
        elevation: 10,
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
    },

    buttonCont: {
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        paddingTop: "6.3%",
        paddingBottom: "6.3%",
    },

    text: {
        fontSize: 16,
        fontWeight: "900",
        marginLeft: "2%",
    },

    icon: {
        position: "relative",
        height: "150%",
        width: "27%",
        marginLeft: "4.1%",
    },
});

export default Navbox;
