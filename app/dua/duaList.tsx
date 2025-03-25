export type DuaObject = {
    groupName: string;
    groupNameBengali: string;
    routes: { name: string; nameBengali: string; link: string }[];
};

const duaList: DuaObject[] = [
    {
        groupName: "Duas Before Prayer",
        groupNameBengali: "নামাজের পূর্বের দুয়া",
        routes: [
            {
                name: "Adhan",
                nameBengali: "আজান",
                link: "/dua/adhan",
            },
            {
                name: "Fajr Adhan",
                nameBengali: "ফজরের আজান",
                link: "/dua/fajr-adhan",
            },
            {
                name: "Dua After Adhan",
                nameBengali: "আজানের পারের দুয়া",
                link: "/dua/after-adhan",
            },
            {
                name: "Iqamah",
                nameBengali: "ইকামত",
                link: "/dua/iqamah",
            },
            {
                name: "Wudu Dua",
                nameBengali: "ওযুর দুয়া",
                link: "/dua/wudu",
            },
            {
                name: "Dua After Wudu",
                nameBengali: "ওযু করার পরবর্তী দুয়া",
                link: "/dua/after-wudu",
            },
            {
                name: "Entering the Mosque Dua",
                nameBengali: "মসজিদে প্রবেশের দুয়া",
                link: "/dua/enter-mosque",
            },
            {
                name: "Leaving the Mosque Dua",
                nameBengali: "মসজিদ থেকে বের হওয়ার দুয়া",
                link: "/dua/leave-mosque",
            },
        ],
    },
    {
        groupName: "Duas During Prayer",
        groupNameBengali: "নামাজের সময়ের দুয়া",
        routes: [
            {
                name: "Takbir",
                nameBengali: "তাকবির",
                link: "/dua/takbir",
            },
            {
                name: "Thana",
                nameBengali: "ছানা",
                link: "/dua/thana",
            },
            {
                name: "Ruku Tasbih",
                nameBengali: "রুকুর তাসবিহ",
                link: "/dua/ruku-tasbih",
            },
            {
                name: "Dua After Rising from Ruku",
                nameBengali: "রুকু থেকে দাঁড়ানোর দুয়া",
                link: "/dua/after-ruku",
            },
            {
                name: "Dua Standing After Ruku",
                nameBengali: "রুকু থেকে দাঁড়িয়ে যে দুয়া পড়তে হয়",
                link: "/dua/standing-after-ruku",
            },
            {
                name: "Sujood Tasbih",
                nameBengali: "সিজদাহর তাসবিহ",
                link: "/dua/sujood-tasbih",
            },
            {
                name: "Tashahhud",
                nameBengali: "তাশাহুদ",
                link: "/dua/tashahhud",
            },
            {
                name: "Durood Sharif",
                nameBengali: "দরুদ শরীফ",
                link: "/dua/durood-sharif",
            },
            {
                name: "Dua Masura",
                nameBengali: "দুয়া মাসুরা",
                link: "/dua/dua-masura",
            },
            {
                name: "Dua Qunoot",
                nameBengali: "দুয়া কুনুত",
                link: "/dua/dua-qunoot",
            },
            {
                name: "Salam",
                nameBengali: "সালাম",
                link: "/dua/salam",
            },
        ],
    },
    {
        groupName: "Daily Duas",
        groupNameBengali: "দৈনিক ব্যবহারীত দুয়া",
        routes: [
            {
                name: "Istighfar",
                nameBengali: "ইস্তেগফার",
                link: "/dua/istighfar",
            },
            {
                name: "Sayyidul Istighfar",
                nameBengali: "সাইয়্যেদুল ইস্তেগফার",
                link: "/dua/sayyidul-istighfar",
            },
            {
                name: "Shab-e-Qadr Dua",
                nameBengali: "শবে কদরের দোয়া",
                link: "/dua/shab-e-qadr",
            },
            {
                name: "Dua for Seeking Refuge from Shaytan",
                nameBengali: "শয়তান থেকে আল্লাহর কাছে আশ্রয়ের দোয়া",
                link: "/dua/shaytan-refuge",
            },
            {
                name: "Salam",
                nameBengali: "সালাম",
                link: "/dua/salam-to-indivisual",
            },
            {
                name: "Response to Salam",
                nameBengali: "সালামের জবাব",
                link: "/dua/response-salam",
            },
            {
                name: "Dua for Forgiveness of Sins",
                nameBengali: "গুনাহ মাফের দোয়া",
                link: "/dua/forgiveness-sins",
            },
            {
                name: "Dua for Visiting the Grave",
                nameBengali: "কবর জিয়ারতের দোয়া",
                link: "/dua/grave-visit",
            },
            {
                name: "Dua for Protection from Grave Punishment, Hellfire, and the Fitnah of Dajjal",
                nameBengali: "কবর আযাব, জাহান্নাম ও দাজ্জালের ফিতনা থেকে বাঁচার দোয়া",
                link: "/dua/protection-from-grave-hell-dajjal",
            },
            {
                name: "Dua for Seeking Paradise and Protection from Hellfire",
                nameBengali: "জান্নাত কামনা ও জাহান্নাম থেকে মুক্তির দোয়া",
                link: "/dua/seeking-paradise-protection-hell",
            },
            {
                name: "Dua for Relief from Debt",
                nameBengali: "ঋণ থেকে মুক্তির দোয়া",
                link: "/dua/relief-from-debt",
            },
            {
                name: "Dua for Times of Distress",
                nameBengali: "বিপদের সময় পড়ার দোয়া",
                link: "/dua/distress-time",
            },
            {
                name: "Dua for Relief from Laziness",
                nameBengali: "অলসতা মুক্তির জন্য দুয়া",
                link: "/dua/relief-from-laziness",
            },
            {
                name: "Dua upon Hearing News of Death or Distress",
                nameBengali: "মৃত্যুর বা বিপদের সংবাদ শুনলে",
                link: "/dua/hearing-death-news",
            },
            {
                name: "Dua for Parents",
                nameBengali: "পিতা-মাতার জন্য দুয়া",
                link: "/dua/for-parents",
            },
            {
                name: "Dua for Boarding a Ship",
                nameBengali: "নৌযানে উঠলে যে দুয়া পড়তে হয়",
                link: "/dua/boarding-ship",
            },
            {
                name: "Dua for Iftar",
                nameBengali: "ইফতারের দুয়া",
                link: "/dua/iftar",
            },
            {
                name: "Dua for Well-being in This World and the Hereafter",
                nameBengali: "দুনিয়া ও আখিরাতের কল্যাণের দোয়া",
                link: "/dua/well-being-world-akhira",
            },
            {
                name: "Dua for Anger",
                nameBengali: "রাগের সময় যে দোয়া পড়া উচিত",
                link: "/dua/anger",
            },
            {
                name: "Dua for Increase in Knowledge",
                nameBengali: "জ্ঞান বৃদ্ধির দোয়া",
                link: "/dua/increase-knowledge",
            },
            {
                name: "Dua for Entering the House",
                nameBengali: "ঘরে প্রবেশের দোয়া",
                link: "/dua/entering-house",
            },
            {
                name: "Dua for Leaving the House",
                nameBengali: "ঘর থেকে বের হওয়ার দোয়া",
                link: "/dua/leaving-house",
            },
            {
                name: "Dua for Starting a Task",
                nameBengali: "কোনো কাজ শুরু করার সময়",
                link: "/dua/starting-task",
            },
            {
                name: "Dua for Intending to Do Something in the Future",
                nameBengali: "ভবিষ্যতে কিছু করার ইচ্ছা হলে",
                link: "/dua/intending-future-task",
            },
            {
                name: "Dua for Seeing or Hearing Something Amazing",
                nameBengali: "আশ্চর্যজনক কিছু দেখলে বা শুনলে",
                link: "/dua/amazing-sight-sound",
            },
            {
                name: "Dua for Giving Thanks",
                nameBengali: "কাউকে ধন্যবাদ জানাতে হলে যা বলতে হয়",
                link: "/dua/thanksgiving",
            },
            {
                name: "Dua for Seeing Disobedience to Allah",
                nameBengali: "আল্লাহর নাফরমানি দেখলে যে দুয়া পড়তে হয়",
                link: "/dua/seeing-disobedience",
            },
            {
                name: "Dua for Seeing or Hearing Something Good",
                nameBengali: "ভালো কিছু দেখলে বা শুনলে",
                link: "/dua/good-sight-sound",
            },
            {
                name: "Dua for Praising Allah",
                nameBengali: "আল্লাহর প্রশংসা বা কৃতজ্ঞতা প্রকাশের দুয়া",
                link: "/dua/praising-allah",
            },
            {
                name: "Dua for Starting to Eat",
                nameBengali: "খাওয়ার শুরুতে",
                link: "/dua/starting-eat",
            },
            {
                name: "Dua for After Eating",
                nameBengali: "খাওয়ার শেষে",
                link: "/dua/after-eating",
            },
            {
                name: "Dua for Going to Sleep",
                nameBengali: "ঘুমাতে যাওয়ার সময়",
                link: "/dua/going-sleep",
            },
            {
                name: "Dua for Waking Up",
                nameBengali: "ঘুম থেকে ওঠার সময়",
                link: "/dua/waking-up",
            },
            {
                name: "Dua for Entering the Bathroom",
                nameBengali: "বাথরুমে প্রবেশের দোয়া",
                link: "/dua/entering-bathroom",
            },
            {
                name: "Dua for Leaving the Bathroom",
                nameBengali: "বাথরুম থেকে বের হওয়ার দোয়া",
                link: "/dua/leaving-bathroom",
            },
            {
                name: "Dua for Sneezing",
                nameBengali: "হাঁচি দিলে যে দোয়া পড়তে হয়",
                link: "/dua/sneezing",
            },
            {
                name: "Response to Sneezing",
                nameBengali: "হাঁচির জবাব",
                link: "/dua/response-sneezing",
            },
        ],
    },
];

export default duaList;
