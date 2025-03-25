import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { LanguageContext } from "../_layout";

const NasaiPage = () => {
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
                source={{
                    uri:
                        language == "English"
                            ? `https://sunnah.com/nasai`
                            : "https://www.hadithbd.com/hadith/chapter/?book=6",
                }}
            />
        </>
    );
};

export default NasaiPage;
