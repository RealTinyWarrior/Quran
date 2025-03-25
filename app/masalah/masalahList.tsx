export type MasalahObject = {
    groupName: string;
    groupNameBengali: string;
    routes: { name: string; nameBengali: string; link: string }[];
};

const masalahList: MasalahObject[] = [
    {
        groupName: "Essential Masalahs",
        groupNameBengali: "প্রয়োজনীয় মাসআলা",
        routes: [
            {
                name: "Faraid of Wudu",
                nameBengali: "অজুর ফরয",
                link: "/masalah/faraid-of-wudu",
            },
            {
                name: "Causes that Invalidate Wudu",
                nameBengali: "অজু ভঙ্গের কারণ",
                link: "/masalah/invalidate-wudu",
            },
            {
                name: "Faraid of Ghusl",
                nameBengali: "গোসলের ফরয",
                link: "/masalah/faraid-of-ghusl",
            },
            {
                name: "Faraid of Tayammum",
                nameBengali: "তায়াম্মুমে ফরয",
                link: "/masalah/faraid-of-tayammum",
            },
            {
                name: "Faraid of Salah",
                nameBengali: "নামাজের ফরয",
                link: "/masalah/faraid-of-salah",
            },
            {
                name: "Wajib of Salah",
                nameBengali: "নামাযের ওয়াজিব",
                link: "/masalah/wajib-of-salah",
            },
            {
                name: "Nullifiers of Salah",
                nameBengali: "নামায ভঙ্গের কারণসমূহ",
                link: "/masalah/nullifiers-of-salah",
            },
            {
                name: "Rakats of Five Daily Prayers",
                nameBengali: "৫ ওয়াক্ত নামাজের রাকাতসমূহ",
                link: "/masalah/rakats-of-prayers",
            },
            {
                name: "Timing of Five Daily Prayers",
                nameBengali: "৫ ওয়াক্ত নামাজের ওয়াক্তসমূহ",
                link: "/masalah/timings-of-prayers",
            },
            {
                name: "Prohibited Times for Salah",
                nameBengali: "যে সময়ে প্রত্যেক নামায নিষিদ্ধ",
                link: "/masalah/prohibited-times",
            },
            {
                name: "Nullifiers of Fasting",
                nameBengali: "সাওম ভঙ্গের কারণসমূহ",
                link: "/masalah/nullifiers-of-fasting",
            },
            {
                name: "Reasons for Qadha of Fasting",
                nameBengali: "সাওম কাযা করার কারন সমূহ",
                link: "/masalah/qadha-of-fasting",
            },
            {
                name: "Kaffara of Fasting",
                nameBengali: "সাওমের কাফ্ফারা নিম্নরূপ",
                link: "/masalah/kaffara-of-fasting",
            },
            {
                name: "Conditions for Zakat",
                nameBengali: "যাকাত ফরজ হওয়ার শর্ত",
                link: "/masalah/conditions-for-zakat",
            },
            {
                name: "Recipients of Zakat",
                nameBengali: "যাকাতের মাসারিফ",
                link: "/masalah/recipients-of-zakat",
            },
            {
                name: "Faraid of Hajj",
                nameBengali: "হজের ফরজ",
                link: "/masalah/faraid-of-hajj",
            },
        ],
    },
];

export default masalahList;
