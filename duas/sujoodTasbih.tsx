import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const sujoodTasbih: RenderableContent[] = [
    {
        type: "bismillah",
        content: "sujoodTasbih",
    },
    renderLine,
    {
        type: "arabic",
        content: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    },
    {
        type: "paragraph",
        content: "Glory is to my Lord, the Most High.",
        contentBengali: "আমার পরাক্রমী প্রভু আল্লাহ পবিত্র।",
    },
    renderLine,
];

export default sujoodTasbih;
