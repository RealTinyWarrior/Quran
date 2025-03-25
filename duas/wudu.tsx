import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const wudu: RenderableContent[] = [
    {
        type: "bismillah",
        content: "wudu",
    },
    renderLine,
    {
        type: "arabic",
        content: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ",
    },
    {
        type: "paragraph",
        content: "In the name of Allah, and Allah is the Greatest.",
        contentBengali: "আল্লাহর নামে এবং আল্লাহ সর্বশ্রেষ্ঠ।",
    },
    renderLine,
];

export default wudu;
