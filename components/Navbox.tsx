import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import QuranSVG from "../assets/icons/quran";
import QuranSymbol from "../assets/icons/quransymbol";
import PlanetFill from "../assets/icons/planetfill";
import TestTube from "../assets/icons/testtube";
import { router } from "expo-router";
import { useContext } from "react";
import { LanguageContext } from "../app/_layout";
import CalenderSVG from "../assets/icons/calender";
import ClockSVG from "../assets/icons/clock";
import Hadith from "../assets/icons/hadith";
import Masalah from "../assets/icons/masalah";

type Props = {
    title: string;
    preText: string;
    href: string;
    titleBengali: string;
    preTextBengali: string;
    fill?: boolean;
};

const Navbox = ({ title, preText, titleBengali, preTextBengali, href, fill }: Props) => {
    const [language] = useContext(LanguageContext);

    return (
        <View style={fill == true ? styles.containerFill : styles.container}>
            <TouchableNativeFeedback onPress={() => router.push(href)}>
                <View style={styles.buttonCont}>
                    <Icon name={title} />

                    <Text style={fill ? styles.fillText : styles.text}>
                        {" "}
                        {language == "English" ? preText : preTextBengali} {"\n"}{" "}
                        {language == "English" ? title : titleBengali}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const Icon = ({ name }: { name: string }) => {
    return name == "Quran" ? (
        <QuranSymbol style={styles.fillIcon} />
    ) : name === "Calender" ? (
        <CalenderSVG style={styles.icon} />
    ) : name == "Islam" ? (
        <PlanetFill style={styles.icon} />
    ) : name == "Ayaats" ? (
        <TestTube style={styles.icon} />
    ) : name == "Timeline" ? (
        <ClockSVG style={styles.icon} />
    ) : name == "Duas" ? (
        <Hadith style={styles.icon} />
    ) : name == "Mas'alahs" ? (
        <Masalah style={styles.icon} />
    ) : (
        <QuranSVG style={styles.icon} />
    );
};

const styles = StyleSheet.create({
    container: {
        width: "48.5%",
        backgroundColor: "#F0F8FF",
        borderRadius: 12,
        elevation: 7,
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
    },

    containerFill: {
        width: "100%",
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
        fontWeight: "700",
        marginLeft: "2%",
    },

    fillText: {
        fontSize: 20,
        fontWeight: "900",
        marginLeft: "2%",
    },

    icon: {
        position: "relative",
        height: "150%",
        width: "27%",
        marginLeft: "5%",
    },

    fillIcon: {
        position: "relative",
        height: "150%",
        width: "21%",
        marginLeft: "4%",
    },
});

export default Navbox;
