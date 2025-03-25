import { RenderableContent } from "../components/ArticleRenderer";

const namazWaqt: RenderableContent[] = [
    {
        type: "title",
        content: "Fajr Time",
        contentBengali: "ফজরের সময়",
    },
    {
        type: "paragraph",
        content: "The time for Fajr starts from the appearance of dawn and lasts until just before sunrise.",
        contentBengali: "ঊষার আলো প্রকাশ পাওয়ার পর থেকে সূযোদয়ের পূর্ব পর্যন্ত থাকে।",
    },
    {
        type: "title",
        content: "Dhuhr Time",
        contentBengali: "যোহরের সময়",
    },
    {
        type: "paragraph",
        content:
            "The time for Dhuhr begins after the sun has passed its zenith and starts to decline. The time lasts until the shadow of an object is twice its length, excluding its original shadow.",
        contentBengali:
            "সূর্য পশ্চিম দিকে ঢলে পড়ার পর শুরু হয়। সময় তখন পর্যন্ত থাকে যখন প্রত্যেক জিনিসের ছায়া তার আসল ছায়া ব্যতীত দ্বিগুন হয়। যেমন এক হাত লম্বা একটা লাকড়ির আসল ছায়া দুপুর বেলা চার আঙ্গুল ছিল। তারপর সে লাকড়ির ছায়া যখন দু'হাত চার আঙ্গুল হবে তখন যোহরের ওয়াক্ত চলে যাবে। কিন্তু সাবধানতার জন্যে যোহরের নামায এমন সময়ের মধ্যে পড়া উচিত যখন প্রত্যেক বস্তুর ছায়া তার আসল ছায়া বাদে তার সমান হয়। জুমুআর নামাযেরও এই সময়। তবে গরমের সময় একটু বিলম্বে পড়া ভাল। কিন্তু জুমুআর নামায সকল ঋতুতে প্রথম সময়ে পড়াই উত্তম।",
    },
    {
        type: "title",
        content: "Asr Time",
        contentBengali: "আসরের সময়",
    },
    {
        type: "paragraph",
        content:
            "The time for Asr starts when the Dhuhr time ends, and it lasts until the sun begins to set. However, it is better to pray Asr before the sun turns yellow. If the Asr prayer is delayed and the sun turns yellow, it is better to pray without delaying further, even if the sun has turned yellow.",
        contentBengali:
            "যোহরের ওয়াক্ত খতম হলেই আসরের ওয়াক্ত শুরু হয় এবং সূর্য অস্ত যাওয়ার সময় পর্যন্ত থাকে। অবশ্য সূর্য হলুদ বর্ণ এসে যাওয়ার পূর্বে আসরের নামায পড়া উচিত। হলুদ বর্ণ আসার পর নামায মাকরূহ হয়। কোন কারণে যদি আসরের নামায বিলম্ব হয়ে যাওয়ার কারণে সূর্য হলুদ বর্ণ ধারণ করে, তাহলে নামায কাযা না করে তখনই পড়ে নেয়া উচিত।",
    },
    {
        type: "title",
        content: "Maghrib Time",
        contentBengali: "মাগরিবের সময়",
    },
    {
        type: "paragraph",
        content:
            "Maghrib time starts immediately after sunset and lasts until the redness in the western sky fades away.",
        contentBengali:
            "সূর্য অস্ত যাওয়ার পর থেকে শুরু হয় এবং পশ্চিমাকাশের লাল বর্ণ শেষ হওয়া পর্যন্ত বাকী থাকে। মাগরিবের সময় হওয়ার সাথে সাথে পড়া মুস্তাহাব।",
    },
    {
        type: "title",
        content: "Isha Time",
        contentBengali: "ইশার সময়",
    },
    {
        type: "paragraph",
        content:
            "Isha time starts after the redness in the western sky fades and continues until Subh-e-Sadiq (dawn). It is better to pray Isha within 1.5 hours after sunset.",
        contentBengali:
            "পশ্চিমাকাশের লাল বর্ণের পর সাদা বর্ণ চলে যাওয়ার পর শুরু হয় এবং সুবহে সাদেক পর্যন্ত বাকি থাকে। পশ্চিমাকাশের সাদা বর্ণ সূর্যাস্তের আনুমানিক সোয়া ঘন্টা পর অন্ধকারে ঢেকে যায়। কিন্তু ইশার নামায সাবধানতার জন্যে দেড় ঘন্টা পর পড়া উচিত।",
    },
];

export default namazWaqt;
