import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const enterMosque: RenderableContent[] = [
    {
        type: "bismillah",
        content: "enterMosque",
    },
    renderLine,
    {
        type: "arabic",
        content:
            "بِسْمِ اللَّهِ وَالصَّلاَةُ وَالسَّلاَمُ عَلَى رَسُولِ اللَّهِ اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    },
    {
        type: "paragraph",
        content:
            "In the name of Allah, and peace and blessings upon the Messenger of Allah; O Allah! Open for me the doors of Your mercy.",
        contentBengali:
            "আল্লাহর নামে, প্রেরিত রাসূলের প্রতি শান্তি ও দোয়া; হে আল্লাহ! আমাকে তোমার রহমতের দরজা খুলে দাও।",
    },
    renderLine,
];

export default enterMosque;
