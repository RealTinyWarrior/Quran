import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Lang from "./Lang";

function convertToBengaliSource(source: string): string {
    let sourceArray = source.split(" ");

    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    source = sourceArray[1].slice(0, source.length - 1);

    return sourceArray[0] + " " + sourceArray[1].replace(/\d/g, (digit) => bengaliDigits[parseInt(digit)]);
}

const versesEnglish = [
    "Indeed, it is not the eyes that are blind, but it is the hearts in the chests that grow blind.",
    "So remember Me; I will remember you.",
    "Do not despair of the mercy of Allāh. Indeed, Allāh forgives all sins.",
    "And when My servants ask you concerning Me, indeed I am near.",
    "Unquestionably, by the remembrance of Allah hearts are assured.",
    "And rely upon the Ever-Living who does not die.",
    "And He is with you wherever you are.",
    "O you who have believed, remember Allah with much remembrance.",
    "And establish prayer for My remembrance.",
    "And do not be like those who forgot Allah, so He made them forget themselves.",
    "And mention the name of your Lord and devote yourself to Him with complete devotion.",
    "And whoever turns away from My remembrance - indeed, he will have a depressed life.",
    "Remember Allah during specific numbered days.",
    "And remember your Lord within yourself in humility and in fear.",
    "And remember Allah much that you may be successful.",
    "My mercy encompasses all things.",
    "Your Lord is the Forgiving, Full of Mercy.",
    "Allah is the Bestower of Mercy.",
    "Allah is the Most Merciful of the merciful.",
    "And your Lord is full of mercy.",
    "Indeed, Allah does not change the condition of a people until they change what is in themselves.",
    "So verily, with the hardship, there is relief.",
    "And We have not sent you, [O Muhammad], except as a mercy to the worlds.",
    "Indeed, Allah is with the patient.",
    "And He found you lost and guided [you].",
    "Indeed, Allah loves those who rely [upon Him].",
    "And Allah is the best of providers.",
    "Allah does not burden a soul beyond that it can bear.",
    "Indeed, Allah is with the doers of good.",
    "Verily, Allah is Forgiving and Merciful.",
    "Woe to every backbiter slanderer.",
    "He dimmed its night, and brought forth its daylight",
];

const versesBengali = [
    "বস্তুতঃ চক্ষু তো অন্ধ হয় না, কিন্তু বক্ষ স্থিত অন্তরই অন্ধ হয়।",
    "কাজেই তোমরা আমাকে স্মরণ কর, আমিও তোমাদেরকে স্মরণ করব।",
    "তোমরা আল্লাহর রহমত থেকে নিরাশ হয়ো না। আল্লাহ সমস্ত গুনাহ ক্ষমা করে দেবেন।",
    "যখন আমার বান্দারা আমার সম্পর্কে তোমাকে জিজ্ঞেস করে, তখন (বলুন) আমি তো নিকটেই আছি।",
    "জেনে রাখো, আল্লাহর স্মরণেই অন্তরসমূহ প্রশান্তি লাভ করে।",
    "এবং সেই চিরঞ্জীবের উপর নির্ভর কর, যিনি কখনো মৃত্যুবরণ করবেন না।",
    "আর তিনি তোমাদের সাথে আছেন, যেখানে তোমরা থাকো।",
    "হে মুমিনগণ! তোমরা আল্লাহকে অধিক পরিমাণে স্মরণ কর।",
    "এবং আমার স্মরণের জন্য নামায কায়েম কর।",
    "এবং তাদের মতো হয়ো না যারা আল্লাহকে ভুলে গেছে, ফলে আল্লাহ তাদের নিজেদেরকে ভুলিয়ে দিয়েছেন।",
    "এবং তোমার প্রভুর নাম স্মরণ কর এবং তাঁর প্রতি সম্পূর্ণভাবে মনোনিবেশ কর।",
    "এবং যে আমার স্মরণ থেকে মুখ ফিরিয়ে নেয়, তার জন্য সংকীর্ণ জীবনযাপন হবে।",
    "নির্দিষ্ট গণনা করা দিনে আল্লাহকে স্মরণ কর।",
    "এবং তোমার প্রভুকে স্মরণ কর তোমার মনে, বিনয় ও ভয়ে।",
    "এবং আল্লাহকে অধিক স্মরণ কর, যাতে তোমরা সফলকাম হও।",
    "আমার রহমত সবকিছু বেষ্টন করে।",
    "তোমার প্রতিপালক ক্ষমাশীল, দয়ালু।",
    "আল্লাহ দয়ার দাতা।",
    "আল্লাহ দয়ালুদের মধ্যে সর্বাধিক দয়ালু।",
    "এবং তোমার প্রতিপালক দয়া পরিপূর্ণ।",
    "নিশ্চয়ই আল্লাহ কোনো জাতির অবস্থা পরিবর্তন করেন না, যতক্ষণ না তারা নিজেদের অবস্থা পরিবর্তন করে।",
    "অতএব, নিশ্চয়ই কষ্টের সাথে স্বস্তি রয়েছে।",
    "আমি তোমাকে সমগ্র বিশ্বের জন্য রহমত স্বরূপ পাঠিয়েছি।",
    "নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সাথে আছেন।",
    "এবং তিনি তোমাকে পথহারা অবস্থায় পেয়ে পথ প্রদর্শন করেছেন।",
    "নিশ্চয়ই আল্লাহ তাদের ভালোবাসেন যারা তাঁর উপর নির্ভর করেন।",
    "আল্লাহ সবচেয়ে উত্তম রিজিকদাতা।",
    "আল্লাহ কোনো আত্মাকে তার সামর্থ্যের বাইরে বোঝা দেন না।",
    "নিশ্চয়ই আল্লাহ সৎকর্মশীলদের সাথে আছেন।",
    "নিশ্চয়ই আল্লাহ ক্ষমাশীল এবং দয়ালু।",
    "দুর্ভোগ প্রত্যেকের, যে পিছনে ও সামনে লোকের নিন্দা করে।",
    "আর তিনি এর রাতকে করেছেন অন্ধকারাচ্ছন্ন এবং প্রকাশ করেছেন এর সূর্যালোক।",
];

const source = [
    "Quran (22:46)",
    "Quran (2:152)",
    "Quran (39:53)",
    "Quran (2:186)",
    "Quran (13:28)",
    "Quran (25:58)",
    "Quran (57:4)",
    "Quran (33:41)",
    "Quran (20:14)",
    "Quran (59:19)",
    "Quran (73:8)",
    "Quran (20:124)",
    "Quran (2:203)",
    "Quran (7:205)",
    "Quran (8:45)",
    "Quran (7:156)",
    "Quran (18:58)",
    "Quran (2:54)",
    "Quran (12:92)",
    "Quran (6:133)",
    "Quran (13:11)",
    "Quran (94:6)",
    "Quran (21:107)",
    "Quran (2:153)",
    "Quran (93:7)",
    "Quran (3:159)",
    "Quran (22:58)",
    "Quran (2:286)",
    "Quran (29:69)",
    "Quran (39:53)",
    "Quran (104:1)",
    "Quran (79:29)",
];

const GetVerse = async () => {
    let latestSave = await AsyncStorage.getItem("welcome-verse-date");
    const latestSaveDate = new Date(parseInt(latestSave!));
    const now = new Date();

    const timeDifference = now.getTime() - latestSaveDate.getTime();
    console.log(timeDifference / 1000);

    if (latestSave == null || timeDifference > 1000 * 60 * 1) {
        //* If the verse is older than a minute, get a new one

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
                style={{ fontSize: 17, fontWeight: "800" }}
            />

            <Lang
                english={source[verseIndex]}
                bengali={convertToBengaliSource(source[verseIndex].replace("Quran", "কুরআন"))}
                style={{ fontWeight: "600", color: "#3b3b3b", fontSize: 12 }}
            />
        </>
    );
};

export default WelcomeVerse;
