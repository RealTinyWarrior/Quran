import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const istighfar: RenderableContent[] = [
    {
        type: "bismillah",
        content: "istighfar",
    },
    renderLine,
    {
        type: "arabic",
        content: "أَسْتَغْفِرُ اللَّهَ رَبِّيْ مِنْ كُلِّ ذَنْبٍ وَأَتُوْبُ إِلَيْهِ",
    },
    {
        type: "paragraph",
        content: "I ask Allah for forgiveness, my Lord, from every sin and turn to Him in repentance.",
        contentBengali: "আমি আল্লাহর কাছে ক্ষমা চাই আমার সব গুনাহ থেকে এবং তাঁর কাছে তওবা করি।",
    },
    renderLine,
];

export default istighfar;
