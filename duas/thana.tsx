import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const thana: RenderableContent[] = [
    {
        type: "bismillah",
        content: "sanaDua",
    },
    renderLine,
    {
        type: "arabic",
        content: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
    },
    {
        type: "paragraph",
        content:
            "Glory is to You, O Allah, and praise is to You; blessed is Your name, and exalted is Your majesty; there is no deity but You.",
        contentBengali:
            "হে আল্লাহ! তুমিই পবিত্র, তুমিই প্রশংসাযোগ্য, তুমিই বরকতময়, তোমার মর্যাদা অত্যন্ত উচ্চ, তুমিই একমাত্র ঈশ্বর, তোমার কেউ সমকক্ষ নেই।",
    },
    renderLine,
];

export default thana;
