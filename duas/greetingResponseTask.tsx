import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const greetingResponse: RenderableContent[] = [
    { type: "bismillah", content: "greetingResponse" },
    renderLine,
    { type: "arabic", content: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ" },
    {
        type: "paragraph",
        content: "And upon you be peace, and Allah’s mercy and blessings.",
        contentBengali: "আপনার উপরও শান্তি, আল্লাহর রহমত এবং বরকত বর্ষিত হোক।",
    },
    renderLine,
];

const duaForAnger: RenderableContent[] = [
    { type: "bismillah", content: "duaForAnger" },
    renderLine,
    { type: "arabic", content: "أَعُوْذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ" },
    {
        type: "paragraph",
        content: "I seek refuge with Allah from the accursed Shaytan.",
        contentBengali: "আমি শয়তানের প্ররোচনা থেকে আল্লাহর আশ্রয় চাই।",
    },
    renderLine,
];

const duaForKnowledge: RenderableContent[] = [
    { type: "bismillah", content: "duaForKnowledge" },
    renderLine,
    { type: "arabic", content: "رَّبِّ زِدْنِي عِلْمًا" },
    {
        type: "paragraph",
        content: "O my Lord, increase me in knowledge.",
        contentBengali: "হে আমার প্রভু, আমার জ্ঞান বৃদ্ধি কর।",
    },
    renderLine,
];

const duaForEnteringHome: RenderableContent[] = [
    { type: "bismillah", content: "duaForEnteringHome" },
    renderLine,
    { type: "arabic", content: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ" },
    {
        type: "paragraph",
        content: "In the name of Allah, and Allah is the Greatest.",
        contentBengali: "আল্লাহর নামে এবং আল্লাহ মহান।",
    },
    renderLine,
];

const duaForLeavingHome: RenderableContent[] = [
    { type: "bismillah", content: "duaForLeavingHome" },
    renderLine,
    { type: "arabic", content: "بِسْمِ اللَّهِ تَوَكَّلتُ عَلَى اللّٰهِ وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلَّا بِاللَّهِ" },
    {
        type: "paragraph",
        content:
            "In the name of Allah, I put my trust in Allah, and there is no strength and no power except with Allah.",
        contentBengali: "আল্লাহর নামে, আল্লাহর উপর ভরসা করলাম এবং শক্তি ও ক্ষমতা আল্লাহ ছাড়া অন্য কারো কাছে নেই।",
    },
    renderLine,
];

const duaForStartingAnyTask: RenderableContent[] = [
    { type: "bismillah", content: "duaForStartingAnyTask" },
    renderLine,
    { type: "arabic", content: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ" },
    {
        type: "paragraph",
        content: "In the name of Allah, the Most Gracious, the Most Merciful.",
        contentBengali: "আল্লাহর নামে, যিনি দয়াময় ও অত্যন্ত দয়ালু।",
    },
    renderLine,
];

export { greetingResponse, duaForAnger, duaForKnowledge, duaForEnteringHome, duaForLeavingHome, duaForStartingAnyTask };
