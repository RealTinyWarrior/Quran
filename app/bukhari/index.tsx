import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { LanguageContext } from "../_layout";
import { useContext } from "react";

const BukhariPage = () => {
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
                            ? `https://sunnah.com/bukhari`
                            : `https://www.hadithbd.com/bukhari-tawhid.php`,
                }}
            />
        </>
    );
};

export default BukhariPage;
