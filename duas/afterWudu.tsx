import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const afterWudu: RenderableContent[] = [
    {
        type: "bismillah",
        content: "afterWudu",
    },
    renderLine,
    {
        type: "arabic",
        content:
            "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    },
    {
        type: "paragraph",
        content:
            "I bear witness that there is no deity but Allah, alone, without partner, and I bear witness that Muhammad is His servant and Messenger.",
        contentBengali:
            "আমি সাক্ষ্য দিচ্ছি যে, আল্লাহ ছাড়া কোনো উপাস্য নেই, তিনি একক, তাঁর কোনো শরিক নেই এবং আমি সাক্ষ্য দিচ্ছি যে, মুহাম্মদ (সা.) তাঁর রাসূল।",
    },
    renderLine,
];

export default afterWudu;
