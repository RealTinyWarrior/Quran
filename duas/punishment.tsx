import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const duaProtectionFromPunishment: RenderableContent[] = [
    { type: "bismillah", content: "duaProtectionFromPunishment" },
    renderLine,
    {
        type: "arabic",
        content:
            "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ النَّارِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
    },
    {
        type: "paragraph",
        content:
            "O Allah! I seek refuge with You from the punishment of the grave, from the punishment of the fire, from the trials of life and death, and from the evil of the trial of the Antichrist.",
        contentBengali:
            "হে আল্লাহ! আমি আপনার কাছে কবরের আযাব, জাহান্নামের আযাব, জীবন ও মৃত্যুর ফিতনা এবং দাজ্জালের সবচেয়ে বড় ফিতনা থেকে আশ্রয় চাই।",
    },
    renderLine,
];

const duaJannahAndProtectionFromHell: RenderableContent[] = [
    { type: "bismillah", content: "duaJannahAndProtectionFromHell" },
    renderLine,
    { type: "arabic", content: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ" },
    {
        type: "paragraph",
        content: "O Allah! I ask You for Jannah, and I seek refuge with You from the Fire.",
        contentBengali: "হে আল্লাহ! আমি তোমার কাছে জান্নাত প্রার্থনা করছি এবং জাহান্নাম থেকে আশ্রয় চাই।",
    },
    renderLine,
];

const duaProtectionFromDebt: RenderableContent[] = [
    { type: "bismillah", content: "duaProtectionFromDebt" },
    renderLine,
    {
        type: "arabic",
        content: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكَسَلِ وَالْهَرَمِ وَالْمَأْثَمِ وَالْمَغْرَمِ",
    },
    {
        type: "paragraph",
        content: "O Allah! I seek refuge with You from laziness, old age, sin, and debt.",
        contentBengali: "হে আল্লাহ! আমি তোমার কাছে আশ্রয় চাই অলসতা, বার্ধক্য, পাপ এবং ঋণের বোঝা থেকে।",
    },
    renderLine,
];

const duaInTimeOfTrouble: RenderableContent[] = [
    { type: "bismillah", content: "duaInTimeOfTrouble" },
    renderLine,
    { type: "arabic", content: "رَبَّنَا اٰتِنَا مِنْ لَّدُنْكَ رَحْمَةًۭ وَّهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًۭا*" },
    {
        type: "paragraph",
        content: "Our Lord! Grant us mercy from Yourself, and provide us with guidance in our matters.",
        contentBengali:
            "হে আমাদের প্রভু! আমাদের প্রতি তোমার পক্ষ থেকে রহমত দান করো এবং আমাদের জন্য আমাদের কাজ সঠিকভাবে পরিচালিত করো।",
    },
    renderLine,
];

const duaProtectionFromLaziness: RenderableContent[] = [
    { type: "bismillah", content: "duaProtectionFromLaziness" },
    renderLine,
    {
        type: "arabic",
        content:
            "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكَسَلِ وَالْفَشَلِ وَالْجُبْنِ وَالْبُخْلِ وَالْهَرَمِ وَعَذَابِ الْقَبْرِ وَفِتْنَةِ الْمَحْيَا وَفِتْنَةِ الْمَمَاتِ",
    },
    {
        type: "paragraph",
        content:
            "O Allah! I seek refuge with You from laziness, failure, cowardice, stinginess, old age, the punishment of the grave, and the trials of life and death.",
        contentBengali:
            "হে আল্লাহ! আমি তোমার কাছে আশ্রয় চাই অলসতা, ব্যর্থতা, ভয়, কৃপণতা, বার্ধক্য, কবরের আযাব, জীবন ও মৃত্যু থেকে সংশয় এবং বিপদের পরীক্ষায়।",
    },
    renderLine,
];

const duaForWhenHearingOfDeathOrCalamity: RenderableContent[] = [
    { type: "bismillah", content: "duaForWhenHearingOfDeathOrCalamity" },
    renderLine,
    { type: "arabic", content: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ" },
    {
        type: "paragraph",
        content: "Indeed, we belong to Allah, and indeed, to Him we will return.",
        contentBengali: "নিশ্চয়ই আমরা আল্লাহরই এবং আমরা আল্লাহর কাছে ফিরে যাবো।",
    },
    renderLine,
];

export {
    duaProtectionFromPunishment,
    duaJannahAndProtectionFromHell,
    duaProtectionFromDebt,
    duaInTimeOfTrouble,
    duaProtectionFromLaziness,
    duaForWhenHearingOfDeathOrCalamity,
};
