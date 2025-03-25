import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const duaForParents: RenderableContent[] = [
    { type: "bismillah", content: "duaForParents" },
    renderLine,
    { type: "arabic", content: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا" },
    {
        type: "paragraph",
        content: "O my Lord, have mercy upon them as they brought me up [when I was] small.",
        contentBengali: "হে আমার পালনকর্তা! তাদের (আমার পিতামাতার) উপর রহমত করুন যেমন তারা আমাকে ছোটবেলায় পালন করেছেন।",
    },
    renderLine,
];

const duaBeforeBoardingShip: RenderableContent[] = [
    { type: "bismillah", content: "duaBeforeBoardingShip" },
    renderLine,
    { type: "arabic", content: "بِسْمِ اللّٰهِ مَجْرَاهَا وَمُرْسَاهَا إِنَّ رَبِّي لَغَفُوْرٌ رَّحِيْمٌ" },
    {
        type: "paragraph",
        content: "In the name of Allah, its sailing and its anchoring. Indeed, my Lord is Forgiving and Merciful.",
        contentBengali: "আল্লাহর নামে এর চলাচল এবং স্থিরতা, নিশ্চয়ই আমার রব হলেন ক্ষমাশীল, দয়ালু।",
    },
    renderLine,
];

const duaForIftar: RenderableContent[] = [
    { type: "bismillah", content: "duaForIftar" },
    renderLine,
    { type: "arabic", content: "اللَّهُمَّ لَكَ صُمْتُ وَعَلَىٰ رِزْقِكَ أَفْطَرْتُ" },
    {
        type: "paragraph",
        content: "O Allah, I fasted for You, and I break my fast with the sustenance You provided.",
        contentBengali: "হে আল্লাহ! আমি তুমিরই জন্য রোজা রেখেছি এবং তোমার দেওয়া রিজিকের মাধ্যমে ইফতার করছি।",
    },
    renderLine,
];

const duaForGoodInThisWorldAndTheHereafter: RenderableContent[] = [
    { type: "bismillah", content: "duaForGoodInThisWorldAndTheHereafter" },
    renderLine,
    {
        type: "arabic",
        content: "اللَّهُمَّ اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَّفِي الْآخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ",
    },
    {
        type: "paragraph",
        content:
            "O Allah, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
        contentBengali:
            "হে আল্লাহ! আমাদেরকে দুনিয়াতে ভালোরূপ দাও এবং আখিরাতে ভালোরূপ দাও এবং আমাদেরকে আগুনের আযাব থেকে রক্ষা কর।",
    },
    renderLine,
];

const greetingSalaam: RenderableContent[] = [
    { type: "bismillah", content: "greetingSalaam" },
    renderLine,
    { type: "arabic", content: "اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ" },
    {
        type: "paragraph",
        content: "Peace be upon you, and Allah’s mercy and blessings.",
        contentBengali: "আপনার প্রতি শান্তি, আল্লাহর রহমত এবং বরকত বর্ষিত হোক।",
    },
    renderLine,
];

export { duaForParents, duaBeforeBoardingShip, duaForIftar, duaForGoodInThisWorldAndTheHereafter, greetingSalaam };
