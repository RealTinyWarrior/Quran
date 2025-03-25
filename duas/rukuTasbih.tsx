import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const rukuTasbih: RenderableContent[] = [
    {
        type: "bismillah",
        content: "rukuTasbih",
    },
    renderLine,
    {
        type: "arabic",
        content: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    },
    {
        type: "paragraph",
        content: "Glory is to my Lord, the Most Great.",
        contentBengali: "আমার মহান রব আল্লাহ পবিত্র।",
    },
    renderLine,
];

export default rukuTasbih;
