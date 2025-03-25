import { RenderableContent } from "../components/ArticleRenderer";

const namazForbiddenTimes: RenderableContent[] = [
    {
        type: "title",
        content: "Forbidden Times for Prayer",
        contentBengali: "যে সময়ে প্রত্যেক নামায নিষিদ্ধ",
    },
    {
        type: "paragraph",
        content:
            "1. When the sun begins to rise until its yellow color completely fades and the daylight spreads properly.",
        contentBengali:
            "১। সূর্য যখন উঠতে থাকে এবং যতক্ষণ না তার হলুদ রং ভালভাবে চলে যায় এবং হালকা ভালভাবে ছড়িয়ে না পড়ে।",
    },
    {
        type: "paragraph",
        content: "2. Exactly at midday (Zawal), until the sun starts to decline.",
        contentBengali: "২। ঠিক দ্বিপ্রহরের সময়- যতক্ষণ বেলা গড়িয়ে না যায়।",
    },
    {
        type: "paragraph",
        content:
            "3. From the moment the sun turns red until sunset. (However, if the Asr prayer was missed for any reason, it must be performed and cannot be delayed.)",
        contentBengali:
            "৩। সূর্য লাল বর্ণ ধারণ করার পর থেকে সূর্যাস্ত পর্যন্ত।( তবে যদি কোন কারণে ওই দিনের আসর নামায পড়া হয়ে না থাকে, তাহলে পড়তে হবে, কাযা করা চলবে না।)",
    },
];

export { namazForbiddenTimes };
