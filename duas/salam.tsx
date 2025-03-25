import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const salam: RenderableContent[] = [
    {
        type: "bismillah",
        content: "salam",
    },
    renderLine,
    {
        type: "arabic",
        content: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
    },
    {
        type: "paragraph",
        content: "Peace be upon you, and Allah's mercy and blessings.",
        contentBengali: "আপনার উপর শান্তি, আল্লাহর রহমত ও বরকত নাজিল হোক।",
    },
    renderLine,
];

export default salam;
