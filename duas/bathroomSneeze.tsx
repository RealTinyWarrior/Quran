import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const bathroomEnterDua: RenderableContent[] = [
    { type: "bismillah", content: "bathroomEnterDua" },
    renderLine,
    { type: "arabic", content: "اللّهُمّ إنيّ أَعُوْذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ" },
    {
        type: "paragraph",
        content: "O Allah! I seek refuge with You from the male and female devils’ evil deeds.",
        contentBengali: "হে আল্লাহ! আমি তোমার কাছে আশ্রয় চাই পুরুষ শয়তান ও নারীর শয়তানের কুকীর্তি থেকে।",
    },
    renderLine,
];

const bathroomExitDua: RenderableContent[] = [
    { type: "bismillah", content: "bathroomExitDua" },
    renderLine,
    { type: "arabic", content: "غُفْرَانَكَ" },
    {
        type: "paragraph",
        content: "O Allah! I seek Your forgiveness.",
        contentBengali: "হে আল্লাহ! আমি তোমার নিকট ক্ষমা চাই।",
    },
    renderLine,
];

const sneezeDua: RenderableContent[] = [
    { type: "bismillah", content: "sneezeDua" },
    renderLine,
    { type: "arabic", content: "اَلْحَمْدُ لِلَّهِ" },
    { type: "paragraph", content: "All praise is due to Allah.", contentBengali: "সব প্রশংসা আল্লাহর জন্য।" },
    renderLine,
];

const sneezeReplyDua: RenderableContent[] = [
    { type: "bismillah", content: "sneezeReplyDua" },
    renderLine,
    { type: "arabic", content: "يَرْحَمُكَ اللَّهُ" },
    { type: "paragraph", content: "May Allah have mercy on you.", contentBengali: "আল্লাহ তোমাকে মাফ করুন।" },
    renderLine,
];

export { bathroomEnterDua, bathroomExitDua, sneezeDua, sneezeReplyDua };
