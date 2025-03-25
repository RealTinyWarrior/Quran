import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const standingAfterRuku: RenderableContent[] = [
    {
        type: "bismillah",
        content: "standingAfterRuku",
    },
    renderLine,
    {
        type: "arabic",
        content: "رَبَّنَا لَكَ الْحَمْدُ",
    },
    {
        type: "paragraph",
        content: "Our Lord! To You is due all praise.",
        contentBengali: "হে আমাদের প্রভু! আপনার জন্য সমস্ত প্রশংসা।",
    },
    renderLine,
];

export default standingAfterRuku;
