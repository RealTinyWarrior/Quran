import React, { createContext, useEffect, useState } from "react";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageContext = createContext<[string, (language: string) => void]>(["English", () => {}]);

const RootLayout = () => {
    const [language, setLanguage] = useState("English");

    useEffect(() => {
        async function getData() {
            let storedLanguage = await AsyncStorage.getItem("language");

            if (storedLanguage == null) {
                // ask the user to set their main language
                setLanguage("English");
            } else {
                setLanguage(storedLanguage);
            }
        }

        getData();
    });

    return (
        <LanguageContext.Provider value={[language, setLanguage]}>
            <Stack>
                <Stack.Screen options={{ headerShown: false, animation: "fade_from_bottom" }} name="index" />
                <Stack.Screen
                    options={{ headerShown: false, animation: "fade_from_bottom" }}
                    name="settings/index"
                />
                <Stack.Screen
                    name="quran/index"
                    options={{ headerShown: false, animation: "fade_from_bottom" }}
                />
                <Stack.Screen
                    name="calender/index"
                    options={{ headerShown: false, animation: "fade_from_bottom" }}
                />
            </Stack>
        </LanguageContext.Provider>
    );
};

export default RootLayout;
export { LanguageContext };
