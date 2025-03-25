import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const futureIntentionDua: RenderableContent[] = [
    { type: "bismillah", content: "futureIntentionDua" },
    renderLine,
    { type: "arabic", content: "إِن شَاءَ اللَّهُ" },
    { type: "paragraph", content: "If Allah wills.", contentBengali: "আল্লাহ যদি চান।" },
    renderLine,
];

const astonishmentDua: RenderableContent[] = [
    { type: "bismillah", content: "astonishmentDua" },
    renderLine,
    { type: "arabic", content: "سُبْحَانَ اللَّهِ" },
    { type: "paragraph", content: "Glory is to Allah.", contentBengali: "আল্লাহ পবিত্র।" },
    renderLine,
];

const gratitudeDua: RenderableContent[] = [
    { type: "bismillah", content: "gratitudeDua" },
    renderLine,
    { type: "arabic", content: "جَزَاكَ اللَّهُ خَيْرًا" },
    {
        type: "paragraph",
        content: "May Allah reward you with goodness.",
        contentBengali: "আল্লাহ আপনাকে উত্তম প্রতিদান দিন।",
    },
    renderLine,
];

const disobedienceDua: RenderableContent[] = [
    { type: "bismillah", content: "disobedienceDua" },
    renderLine,
    { type: "arabic", content: "نَعُوذُ بِاللَّهِ" },
    {
        type: "paragraph",
        content: "We seek refuge with Allah.",
        contentBengali: "আমরা আল্লাহর কাছে আশ্রয় প্রার্থনা করি।",
    },
    renderLine,
];

const goodEventDua: RenderableContent[] = [
    { type: "bismillah", content: "goodEventDua" },
    renderLine,
    { type: "arabic", content: "مَا شَاءَ ٱللَّهُ" },
    { type: "paragraph", content: "What Allah has willed.", contentBengali: "আল্লাহ যা ইচ্ছা করেছেন" },
    renderLine,
];

export { futureIntentionDua, astonishmentDua, gratitudeDua, disobedienceDua, goodEventDua };
