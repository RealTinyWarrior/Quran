import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const verses = [
    "Indeed, it is not the eyes that are blind, but it is the hearts in the chests that grow blind.",
    "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    "Do not despair of the mercy of Allāh. Indeed, Allāh forgives all sins.",
    "",
];

const source = ["Quran (22:46)", "Quran (2:152)", "Quran (39:53)", ""];

const GetVerse = async () => {
    let latestSave = await AsyncStorage.getItem("welcome-verse-date");
    const latestSaveDate = new Date(parseInt(latestSave!));
    const now = new Date();

    const timeDifference = now.getTime() - latestSaveDate.getTime();

    if (latestSave == null || timeDifference > 1000 * 60 * 60) {
        //* If the verse is older than an hour, get a new one

        let randomVerse = Math.floor(Math.random() * (verses.length - 1));
        await AsyncStorage.setItem("welcome-verse-index", randomVerse.toString());
        await AsyncStorage.setItem("welcome-verse-date", Date.now().toString());
        return randomVerse;
    } else {
        let randomVerse = await AsyncStorage.getItem("welcome-verse-index");
        return randomVerse;
    }
};

const WelcomeVerse = () => {
    const [verseIndex, setVerseIndex] = useState(verses.length - 1);

    useEffect(() => {
        async function GetData() {
            let randomVerse = await GetVerse();
            setVerseIndex(Number(randomVerse));
        }

        GetData();
    }, []);

    return (
        <>
            <Text style={{ fontSize: 19, fontWeight: "900" }}>{verses[verseIndex]}</Text>
            <Text style={{ fontWeight: "600" }}>{source[verseIndex]}</Text>
        </>
    );
};

export default WelcomeVerse;
