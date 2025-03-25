import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const takbir: RenderableContent[] = [
    {
        type: "bismillah",
        content: "takbir",
    },
    renderLine,
    {
        type: "arabic",
        content: "اللَّهُ أَكْبَرُ",
    },
    {
        type: "paragraph",
        content: "Allah is the greatest",
        contentBengali: "আল্লাহ সর্বশ্রেষ্ঠ।",
        alignRight: true,
    },
    renderLine,
];

export default takbir;
