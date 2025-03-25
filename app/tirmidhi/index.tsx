import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { LanguageContext } from "../_layout";

const TirmidhiPage = () => {
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
                            ? `https://sunnah.com/tirmidhi`
                            : "https://www.hadithbd.com/at-tirmidi.php",
                }}
            />
        </>
    );
};

export default TirmidhiPage;
