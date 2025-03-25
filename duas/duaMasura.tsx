import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const duaMasura: RenderableContent[] = [
    {
        type: "bismillah",
        content: "duaMasura",
    },
    renderLine,
    {
        type: "arabic",
        content:
            "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ. فَاغْفِرْ لِي مَغْفِرَةً مِّنْ عِندِكَ، وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
    },
    {
        type: "paragraph",
        content:
            "O Allah! I have wronged myself with great wrong, and no one forgives sins except You. So forgive me with forgiveness from You, and have mercy on me. Indeed, You are the Most Forgiving, the Most Merciful.",
        contentBengali:
            "হে আল্লাহ! আমি আমার নিজের (আত্মার) উপর অনেক যুলুম (গুনাহ) করেছি। এবং আপনি ব্যতীত গুনাহসমূহ মাফ করার আর কেউ নেই। অতএব আমাকে আপনার নিজের পক্ষ থেকে মাফ করে দিন এবং আমাকে দয়া করুন। নিঃসন্দেহে আপনি অত্যন্ত ক্ষমাশীল, অসীম দয়ালু।",
    },
    renderLine,
];

export default duaMasura;
