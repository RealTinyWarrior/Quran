import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const duaAfterAdhan: RenderableContent[] = [
    {
        type: "bismillah",
        content: "duaAfterAdhan",
    },
    renderLine,
    {
        type: "arabic",
        content:
            "اللّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّداً الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَاماً مَّحْمُوداً الَّذِي وَعَدتَهُ",
    },
    {
        type: "paragraph",
        content:
            "O Allah! Lord of this perfect call and of the established prayer, grant Muhammad the intercession and the eminence, and resurrect him to the praised station which You have promised him.",
        contentBengali:
            "হে আল্লাহ! এই পূর্ণ আহ্বানের ও প্রতিষ্ঠিত নামাজের প্রভু, মুহাম্মদ (সা.)-কে সুপারিশ ও মর্যাদা দান করুন, এবং তাকে সেই প্রশংসিত স্থানে উত্তীর্ণ করুন, যা আপনি তাকে প্রতিশ্রুতি দিয়েছেন।",
    },
    renderLine,
];

export default duaAfterAdhan;
