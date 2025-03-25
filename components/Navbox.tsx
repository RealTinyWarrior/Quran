import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import QuranSVG from "../assets/icons/quran";
import QuranSymbol from "../assets/icons/quransymbol";
import PlanetFill from "../assets/icons/planetfill";
import TestTube from "../assets/icons/testtube";
import { router } from "expo-router";
import { useContext } from "react";
import { LanguageContext } from "../app/_layout";
import CalenderSVG from "../assets/icons/calendar";
import ClockSVG from "../assets/icons/clock";
import Hadith from "../assets/icons/hadith";
import Masalah from "../assets/icons/masalah";
import AppSVG from "../assets/icons/apps";
import { LinearGradient } from "expo-linear-gradient";
import MasjidIcon from "../assets/icons/masjid";
import LinkSVG from "../assets/icons/link";
import FlowerSVG from "../assets/icons/flower";

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
            <LinearGradient
                colors={["#f5f2fa", "#9699eb", "#c4a6f7"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            />

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
    if (
        name == "Al-Bukhari" ||
        name == "Muslim" ||
        name == "Dawood" ||
        name == "An-Nasa'i" ||
        name == "At-Tirmidhi" ||
        name == "Majah"
    ) {
        return <FlowerSVG style={styles.fillIcon} />;
    }

    return name == "Quran" ? (
        <QuranSymbol style={styles.icon} />
    ) : name == "Islam" ? (
        <PlanetFill style={styles.icon} />
    ) : name == "Times" ? (
        <ClockSVG style={styles.icon} />
    ) : name == "Duas" ? (
        <Hadith style={styles.icon} />
    ) : name == "Mas'alahs" ? (
        <Masalah style={styles.icon} />
    ) : name == "Features" ? (
        <AppSVG style={styles.icon} />
    ) : name == "Hadith" ? (
        <MasjidIcon style={styles.icon} />
    ) : (
        <LinkSVG style={styles.icon} />
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

    gradient: {
        position: "absolute",
        height: "105%",
        width: "150%",
        opacity: 0.5,
    },
});

export default Navbox;
