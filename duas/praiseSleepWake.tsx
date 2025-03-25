import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const praiseAndGratitudeDua: RenderableContent[] = [
    { type: "bismillah", content: "praiseAndGratitudeDua" },
    renderLine,
    { type: "arabic", content: "اَلْحَمْدُ لِلَّهِ" },
    { type: "paragraph", content: "All praise is due to Allah.", contentBengali: "সব প্রশংসা আল্লাহর জন্য।" },
    renderLine,
];

const foodStartDua: RenderableContent[] = [
    { type: "bismillah", content: "foodStartDua" },
    renderLine,
    { type: "arabic", content: "بِسْمِ اللَّهِ" },
    {
        type: "paragraph",
        content: "In the name of Allah (the meal has begun).",
        contentBengali: "আল্লাহর নামে (খাওয়া শুরু করা হলো)।",
    },
    renderLine,
];

const foodEndDua: RenderableContent[] = [
    { type: "bismillah", content: "foodEndDua" },
    renderLine,
    { type: "arabic", content: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ" },
    {
        type: "paragraph",
        content: "All praise is due to Allah, who has fed us and given us drink, and has made us among the Muslims.",
        contentBengali:
            "সব প্রশংসা আল্লাহর জন্য, যিনি আমাদের খাওয়ালেন এবং পান করালেন এবং আমাদের মুসলিমদের মধ্যে অন্তর্ভুক্ত করেছেন।",
    },
    renderLine,
];

const sleepDua: RenderableContent[] = [
    { type: "bismillah", content: "sleepDua" },
    renderLine,
    { type: "arabic", content: "اللّهُمّ بِسْمِكَ أَمُوتُ وَأَحْيَا" },
    {
        type: "paragraph",
        content: "O Allah! In Your name I die and in Your name I live again.",
        contentBengali: "হে আল্লাহ! তোমার নামে আমি মারা যাই এবং তোমার নামে আমি পুনরায় জীবিত হব।",
    },
    renderLine,
];

const wakeUpDua: RenderableContent[] = [
    { type: "bismillah", content: "wakeUpDua" },
    renderLine,
    { type: "arabic", content: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ" },
    {
        type: "paragraph",
        content:
            "All praise is due to Allah, who has given us life after He caused us to die, and to Him is the resurrection.",
        contentBengali: "সব প্রশংসা আল্লাহর জন্য, যিনি আমাদের মৃত্যুর পর জীবন দিয়েছেন এবং তাঁরই দিকে পুনর্জন্ম।",
    },
    renderLine,
];

export { praiseAndGratitudeDua, foodStartDua, foodEndDua, sleepDua, wakeUpDua };
