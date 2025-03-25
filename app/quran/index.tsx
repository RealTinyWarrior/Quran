import React, { useContext } from "react";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { LanguageContext } from "../_layout";

const QuranPage = () => {
    const [language] = useContext(LanguageContext);

    return (
        <>
            {/* Set the status bar color to white */}
            <StatusBar style="dark" backgroundColor="white" />

            <WebView
                style={{
                    flex: 1,
                    marginTop: Constants.statusBarHeight,
                }}
                source={{ uri: `https://quran.com/${language === "English" ? "en" : "bn"}` }}
            />
        </>
    );
};

export default QuranPage;
