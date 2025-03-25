import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const duaShabeQadr: RenderableContent[] = [
    { type: "bismillah", content: "duaShabeQadr" },
    renderLine,
    { type: "arabic", content: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي" },
    {
        type: "paragraph",
        content: "O Allah, indeed You are Forgiving, You love forgiveness, so forgive me.",
        contentBengali: "হে আল্লাহ! তুমি ক্ষমাশীল, ক্ষমা করতে ভালোবাসো, তাই আমাকে ক্ষমা করে দাও।",
    },
    renderLine,
];

const duaSeekingRefuge: RenderableContent[] = [
    { type: "bismillah", content: "duaSeekingRefuge" },
    renderLine,
    { type: "arabic", content: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ" },
    {
        type: "paragraph",
        content: "I seek refuge with Allah from the accursed Shaytan.",
        contentBengali: "আমি আল্লাহর কাছে আশ্রয় চাই অভিশপ্ত শয়তান থেকে।",
    },
    renderLine,
];

const duaForgiveness: RenderableContent[] = [
    { type: "bismillah", content: "duaForgiveness" },
    renderLine,
    {
        type: "arabic",
        content:
            "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُوْنَنَّ مِنَ الْخَاسِرِينَ",
    },
    {
        type: "paragraph",
        content:
            "Our Lord! We have wronged ourselves. If You do not forgive us and have mercy upon us, we will surely be among the losers.",
        contentBengali:
            "হে আমাদের রব! আমরা নিজেদের ওপর যুলুম করেছি। যদি তুমি আমাদের ক্ষমা না করো এবং দয়া না করো, তাহলে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হবো।",
    },
    renderLine,
];

const duaGraveVisit: RenderableContent[] = [
    { type: "bismillah", content: "duaGraveVisit" },
    renderLine,
    {
        type: "arabic",
        content:
            "السَّلَامُ عَلَيْكُمْ يَا أَهْلَ الْقُبُوْرِ، يَغْفِرُ اللَّهُ لَنَا وَلَكُمْ، أَنْتُمْ سَلَفُنَا وَنَحْنُ بِالْأَثَرِ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ",
    },
    {
        type: "paragraph",
        content:
            "Peace be upon you, O inhabitants of the graves. May Allah forgive us and you. You have preceded us, and we are following you. Indeed, if Allah wills, we will join you.",
        contentBengali:
            "হে কবরবাসীগণ! তোমাদের উপর শান্তি বর্ষিত হোক। আল্লাহ তোমাদের ও আমাদের ক্ষমা করুন। তোমরা আমাদের পূর্বগামী এবং আমরা তোমাদের অনুসরণকারী। আর নিশ্চয়ই আমরা আল্লাহ চাইলে তোমাদের সঙ্গে মিলিত হবো।",
    },
    renderLine,
];

export { duaShabeQadr, duaSeekingRefuge, duaForgiveness, duaGraveVisit };
