import { RenderableContent } from "../../components/ArticleRenderer";
import adhan from "../../duas/adhan";
import afterRuku from "../../duas/afterRuku";
import afterWudu from "../../duas/afterWudu";
import duaAfterAdhan from "../../duas/duaAfterAdhan";
import duaMasura from "../../duas/duaMasura";
import duaQunoot from "../../duas/duaQunoot";
import duroodSharif from "../../duas/duroodSharif";
import enterMosque from "../../duas/enterMosque";
import fajrAdhan from "../../duas/fajrAdhan";
import rukuTasbih from "../../duas/rukuTasbih";
import salam from "../../duas/salam";
import sayyidulIstighfar from "../../duas/sayyidulIstighfar";
import standingAfterRuku from "../../duas/standingAfterRuku";
import sujoodTasbih from "../../duas/sujoodTasbih";
import takbir from "../../duas/takbir";
import tashahhud from "../../duas/tashahhud";
import thana from "../../duas/thana";
import wudu from "../../duas/wudu";
import iqamah from "../../duas/iqamah";
import istighfar from "../../duas/istighfar";
import leaveMosque from "../../duas/leaveMosque";

import {
    astonishmentDua,
    disobedienceDua,
    futureIntentionDua,
    goodEventDua,
    gratitudeDua,
} from "../../duas/futureIntention";

import {
    duaForAnger,
    duaForEnteringHome,
    duaForKnowledge,
    duaForLeavingHome,
    duaForStartingAnyTask,
    greetingResponse,
} from "../../duas/greetingResponseTask";

import {
    duaBeforeBoardingShip,
    duaForGoodInThisWorldAndTheHereafter,
    duaForIftar,
    duaForParents,
    greetingSalaam,
} from "../../duas/parents";

import {
    duaForWhenHearingOfDeathOrCalamity,
    duaInTimeOfTrouble,
    duaJannahAndProtectionFromHell,
    duaProtectionFromDebt,
    duaProtectionFromLaziness,
    duaProtectionFromPunishment,
} from "../../duas/punishment";

import { foodEndDua, foodStartDua, praiseAndGratitudeDua, sleepDua, wakeUpDua } from "../../duas/praiseSleepWake";
import { duaForgiveness, duaGraveVisit, duaSeekingRefuge, duaShabeQadr } from "../../duas/qadrforgivance";
import { bathroomEnterDua, bathroomExitDua, sneezeDua, sneezeReplyDua } from "../../duas/bathroomSneeze";

export default function getDua(id: string): RenderableContent[] {
    return (
        {
            adhan: adhan,
            "fajr-adhan": fajrAdhan,
            "after-adhan": duaAfterAdhan,
            iqamah: iqamah,
            wudu: wudu,
            "after-wudu": afterWudu,
            "enter-mosque": enterMosque,
            "leave-mosque": leaveMosque,
            takbir: takbir,
            thana: thana,
            "ruku-tasbih": rukuTasbih,
            "after-ruku": afterRuku,
            "standing-after-ruku": standingAfterRuku,
            "sujood-tasbih": sujoodTasbih,
            tashahhud: tashahhud,
            "durood-sharif": duroodSharif,
            "dua-masura": duaMasura,
            "dua-qunoot": duaQunoot,
            salam: salam,
            istighfar: istighfar,
            "sayyidul-istighfar": sayyidulIstighfar,
            "shab-e-qadr": duaShabeQadr,
            "shaytan-refuge": duaSeekingRefuge,
            "forgiveness-sins": duaForgiveness,
            "grave-visit": duaGraveVisit,
            "protection-from-grave-hell-dajjal": duaProtectionFromPunishment,
            "seeking-paradise-protection-hell": duaJannahAndProtectionFromHell,
            "relief-from-debt": duaProtectionFromDebt,
            "distress-time": duaInTimeOfTrouble,
            "relief-from-laziness": duaProtectionFromLaziness,
            "hearing-death-news": duaForWhenHearingOfDeathOrCalamity,
            "for-parents": duaForParents,
            "boarding-ship": duaBeforeBoardingShip,
            iftar: duaForIftar,
            "well-being-world-akhira": duaForGoodInThisWorldAndTheHereafter,
            "salam-to-indivisual": greetingSalaam,
            "response-salam": greetingResponse,
            anger: duaForAnger,
            "increase-knowledge": duaForKnowledge,
            "entering-house": duaForEnteringHome,
            "leaving-house": duaForLeavingHome,
            "starting-task": duaForStartingAnyTask,
            "intending-future-task": futureIntentionDua,
            "amazing-sight-sound": astonishmentDua,
            thanksgiving: gratitudeDua,
            "seeing-disobedience": disobedienceDua,
            "good-sight-sound": goodEventDua,
            "praising-allah": praiseAndGratitudeDua,
            "starting-eat": foodStartDua,
            "after-eating": foodEndDua,
            "going-sleep": sleepDua,
            "waking-up": wakeUpDua,
            "entering-bathroom": bathroomEnterDua,
            "leaving-bathroom": bathroomExitDua,
            sneezing: sneezeDua,
            "response-sneezing": sneezeReplyDua,
        }[id] || []
    );
}

export function getDuaName(id: string): string[] {
    return (
        {
            adhan: ["Adhan", "আজান"],
            "fajr-adhan": ["Fajr Adhan", "ফজরের আজান"],
            "after-adhan": ["Dua After Adhan", "আজানের পারের দুয়া"],
            iqamah: ["Iqamah", "ইকামত"],
            wudu: ["Wudu Dua", "ওযুর দুয়া"],
            "after-wudu": ["Dua After Wudu", "ওযু করার পরবর্তী দুয়া"],
            "enter-mosque": ["Entering the Mosque Dua", "মসজিদে প্রবেশের দুয়া"],
            "leave-mosque": ["Leaving the Mosque Dua", "মসজিদ থেকে বের হওয়ার দুয়া"],
            takbir: ["Takbir", "তাকবির"],
            thana: ["Thana", "ছানা"],
            "ruku-tasbih": ["Ruku Tasbih", "রুকুর তাসবিহ"],
            "after-ruku": ["Dua After Rising from Ruku", "রুকু থেকে দাঁড়ানোর দুয়া"],
            "standing-after-ruku": ["Dua Standing After Ruku", "রুকু থেকে দাঁড়িয়ে দুয়া"],
            "sujood-tasbih": ["Sujood Tasbih", "সিজদাহর তাসবিহ"],
            tashahhud: ["Tashahhud", "তাশাহুদ"],
            "durood-sharif": ["Durood Sharif", "দরুদ শরীফ"],
            "dua-masura": ["Dua Masura", "দুয়া মাসুরা"],
            "dua-qunoot": ["Dua Qunoot", "দুয়া কুনুত"],
            salam: ["Salam", "সালাম"],
            istighfar: ["Istighfar", "ইস্তেগফার"],
            "sayyidul-istighfar": ["Sayyidul Istighfar", "সাইয়্যেদুল ইস্তেগফার"],
            "shab-e-qadr": ["Shab-e-Qadr Dua", "শবে কদরের দোয়া"],
            "shaytan-refuge": ["Dua for Seeking Refuge from Shaytan", "শয়তান থেকে আশ্রয়ের দোয়া"],
            "forgiveness-sins": ["Dua for Forgiveness of Sins", "গুনাহ মাফের দোয়া"],
            "grave-visit": ["Dua for Visiting the Grave", "কবর জিয়ারতের দোয়া"],
            "protection-from-grave-hell-dajjal": [
                "Dua for Protection from Grave Punishment, Hellfire, and the Fitnah of Dajjal",
                "কবর আযাব, জাহান্নাম ও দাজ্জালের ফিতনা থেকে বাঁচার দোয়া",
            ],
            "seeking-paradise-protection-hell": [
                "Dua for Seeking Paradise and Protection from Hellfire",
                "জান্নাত কামনা ও জাহান্নাম থেকে মুক্তির দোয়া",
            ],
            "relief-from-debt": ["Dua for Relief from Debt", "ঋণ থেকে মুক্তির দোয়া"],
            "distress-time": ["Dua for Times of Distress", "বিপদের সময় পড়ার দোয়া"],
            "relief-from-laziness": ["Dua for Relief from Laziness", "অলসতা মুক্তির জন্য দুয়া"],
            "hearing-death-news": ["Dua upon Hearing News of Death or Distress", "মৃত্যুর বা বিপদের সংবাদ শুনলে"],
            "for-parents": ["Dua for Parents", "পিতা-মাতার জন্য দুয়া"],
            "boarding-ship": ["Dua for Boarding a Ship", "নৌযানে উঠলে যে দুয়া পড়তে হয়"],
            iftar: ["Dua for Iftar", "ইফতারের দুয়া"],
            "well-being-world-akhira": [
                "Dua for Well-being in This World and the Hereafter",
                "দুনিয়া ও আখিরাতের কল্যাণের দোয়া",
            ],
            "salam-to-indivisual": ["Salam", "সালাম"],
            "response-salam": ["Response to Salam", "সালামের জবাব"],
            anger: ["Dua for Anger", "রাগের সময় যে দোয়া পড়া উচিত"],
            "increase-knowledge": ["Dua for Increase in Knowledge", "জ্ঞান বৃদ্ধির দোয়া"],
            "entering-house": ["Dua for Entering the House", "ঘরে প্রবেশের দোয়া"],
            "leaving-house": ["Dua for Leaving the House", "ঘর থেকে বের হওয়ার দোয়া"],
            "starting-task": ["Dua for Starting a Task", "কোনো কাজ শুরু করার সময়"],
            "intending-future-task": [
                "Dua for Intending to do Something in the Future",
                "ভবিষ্যতে কিছু করার ইচ্ছা হওয়ার দোয়া",
            ],
            "amazing-sight-sound": ["Dua for Seeing or Hearing Something Amazing", "আশ্চর্যজনক কিছু শুনলে"],
            thanksgiving: ["Dua for Giving Thanks", "কাউকে ধন্যবাদ জানাতে হলে যা বলতে হয়"],
            "seeing-disobedience": ["Dua for Seeing Disobedience to Allah", "আল্লাহর নাফরমানি দেখলে দুয়া"],
            "good-sight-sound": ["Dua for Seeing or Hearing Something Good", "ভালো কিছু শুনলে"],
            "praising-allah": ["Dua for Praising Allah", "আল্লাহর প্রশংসা প্রকাশের দুয়া"],
            "starting-eat": ["Dua for Starting to Eat", "খাওয়ার শুরুতে"],
            "after-eating": ["Dua for After Eating", "খাওয়ার শেষে"],
            "going-sleep": ["Dua for Going to Sleep", "ঘুমাতে যাওয়ার সময়"],
            "waking-up": ["Dua for Waking Up", "ঘুম থেকে ওঠার সময়"],
            "entering-bathroom": ["Dua for Entering the Bathroom", "বাথরুমে প্রবেশের দোয়া"],
            "leaving-bathroom": ["Dua for Leaving the Bathroom", "বাথরুম থেকে বের হওয়ার দোয়া"],
            sneezing: ["Dua for Sneezing", "হাঁচি দিলে যে দোয়া পড়তে হয়"],
            "response-sneezing": ["Response to Sneezing", "হাঁচির জবাব"],
        }[id] || []
    );
}
