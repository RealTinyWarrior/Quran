import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Lang from "./Lang";

const versesEnglish = [
    "Indeed, it is not the eyes that are blind, but it is the hearts in the chests that grow blind.",
    "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    "Do not despair of the mercy of Allāh. Indeed, Allāh forgives all sins.",
    "",
];

const versesBengali = [
    "বস্তুতঃ চক্ষু তো অন্ধ হয় না, কিন্তু বক্ষ স্থিত অন্তরই অন্ধ হয়।",
    "কাজেই তোমরা আমাকে স্মরণ কর, আমিও তোমাদেরকে স্মরণ করব এবং আমার শোকর করতে থাক, না-শোকরী করো না।",
    "তোমরা আল্লাহর রহমত থেকে নিরাশ হয়ো না। আল্লাহ সমস্ত গুনাহ ক্ষমা করে দেবেন।",
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

        let randomVerse = Math.floor(Math.random() * (versesEnglish.length - 1));
        await AsyncStorage.setItem("welcome-verse-index", randomVerse.toString());
        await AsyncStorage.setItem("welcome-verse-date", Date.now().toString());
        return randomVerse;
    } else {
        let randomVerse = await AsyncStorage.getItem("welcome-verse-index");
        return randomVerse;
    }
};

const WelcomeVerse = () => {
    const [verseIndex, setVerseIndex] = useState(versesEnglish.length - 1);

    useEffect(() => {
        async function GetData() {
            let randomVerse = await GetVerse();
            setVerseIndex(Number(randomVerse));
        }

        GetData();
    }, []);

    return (
        <>
            <Lang
                english={versesEnglish[verseIndex]}
                bengali={versesBengali[verseIndex]}
                style={{ fontSize: 15, fontWeight: "800" }}
            />

            <Lang
                english={source[verseIndex]}
                bengali={source[verseIndex].replace("Quran", "কুরআন")}
                style={{ fontWeight: "600", color: "#3b3b3b", fontSize: 12 }}
            />
        </>
    );
};

export default WelcomeVerse;
