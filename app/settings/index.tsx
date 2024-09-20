import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../assets/icons/back";
import { router } from "expo-router";
import SettingsBox from "../../components/SettingsBox";
import LanguageSVG from "../../assets/icons/language";
import SettingContent from "../../components/SettingContent";
import Credits from "../../components/Credits";
import { LanguageContext } from "../_layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Lang from "../../components/Lang";

const SettingsPage = () => {
    const [language, setLanguage] = useContext(LanguageContext);

    const changeLanguage = async (languageParam: string) => {
        setLanguage(languageParam);
        await AsyncStorage.setItem("language", languageParam);
    };

    return (
        <View style={styles.body}>
            <View style={{ backgroundColor: "#F0F8FF", height: "150%" }}>
                <View style={styles.head}></View>
            </View>

            <SafeAreaView style={styles.container}>
                <View style={styles.top}>
                    <View style={{ overflow: "hidden", borderRadius: 4 }}>
                        <TouchableNativeFeedback style={styles.back} onPress={() => router.back()}>
                            <BackButton style={{ width: 30, height: 40 }} />
                        </TouchableNativeFeedback>
                    </View>

                    <Lang english="Settings" bengali="সেটিংস" style={{ fontWeight: 900, fontSize: 27 }} />
                </View>

                <View style={styles.main}>
                    <SettingsBox
                        description={
                            language == "English"
                                ? "Select your preferred language"
                                : "আপনার পছন্দের ভাষা নির্বাচন করুন"
                        }
                        title={language == "English" ? "Language" : "ভাষা"}
                        Icon={<LanguageSVG width={80} height={80} />}
                    >
                        <View>
                            <SettingContent
                                selected={language === "English"}
                                onClick={() => changeLanguage("English")}
                            >
                                <Text style={styles.option}>English</Text>
                            </SettingContent>

                            <SettingContent
                                selected={language === "Bengali"}
                                onClick={() => changeLanguage("Bengali")}
                            >
                                <Text style={styles.option}>বাংলা</Text>
                            </SettingContent>
                        </View>
                    </SettingsBox>
                </View>

                <Credits />
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

    head: {
        width: "100%",
        backgroundColor: "white",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 20,
        height: 87,
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

    main: {
        marginTop: 40,
    },

    option: {
        fontSize: 28,
        fontWeight: "900",
        padding: "1%",
    },
});

export default SettingsPage;
