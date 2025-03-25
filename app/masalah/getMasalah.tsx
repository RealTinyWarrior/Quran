import { RenderableContent } from "../../components/ArticleRenderer";
import { namazFarz } from "../../masalahs/fajrwajibprayer";
import faraidOfWudu from "../../masalahs/faraidOfWudu";
import { hajjFard } from "../../masalahs/hajjFard";
import namazBhangarKaron from "../../masalahs/namajBhongerKaron";
import { namazForbiddenTimes } from "../../masalahs/namajForbiddenTime";
import namazRakat from "../../masalahs/namajRakat";
import namazWaqt from "../../masalahs/namajWaqt";
import namazWajib from "../../masalahs/namazWajib";
import { sawmKafara, sawmQazaReasons } from "../../masalahs/saomkafara";
import { saomBreakingReasons } from "../../masalahs/somebreakreasons";
import { obligatoryGhusl, tayammumFard, wuduNullifiers } from "../../masalahs/wuduGhuslTayammum";
import { zakatConditions } from "../../masalahs/zakatconditions";
import { zakatRecipients } from "../../masalahs/zakatRecipients";

export default function getMasalah(id: string): RenderableContent[] {
    return (
        {
            "faraid-of-wudu": faraidOfWudu,
            "invalidate-wudu": wuduNullifiers,
            "faraid-of-ghusl": obligatoryGhusl,
            "faraid-of-tayammum": tayammumFard,
            "faraid-of-salah": namazFarz,
            "wajib-of-salah": namazWajib,
            "nullifiers-of-salah": namazBhangarKaron,
            "rakats-of-prayers": namazRakat,
            "timings-of-prayers": namazWaqt,
            "prohibited-times": namazForbiddenTimes,
            "nullifiers-of-fasting": saomBreakingReasons,
            "qadha-of-fasting": sawmQazaReasons,
            "kaffara-of-fasting": sawmKafara,
            "conditions-for-zakat": zakatConditions,
            "recipients-of-zakat": zakatRecipients,
            "faraid-of-hajj": hajjFard,
        }[id] || []
    );
}

export function getMasalahName(id: string): string[] {
    return (
        {
            "faraid-of-wudu": ["Faraid of Wudu", "অজুর ফরয"],
            "invalidate-wudu": ["Causes that Invalidate Wudu", "অজু ভঙ্গের কারণ"],
            "faraid-of-ghusl": ["Faraid of Ghusl", "গোসলের ফরয"],
            "faraid-of-tayammum": ["Faraid of Tayammum", "তায়াম্মুমে ফরয"],
            "faraid-of-salah": ["Faraid of Salah", "নামাজের ফরয"],
            "wajib-of-salah": ["Wajib of Salah", "নামাযের ওয়াজিব"],
            "nullifiers-of-salah": ["Nullifiers of Salah", "নামায ভঙ্গের কারণসমূহ"],
            "rakats-of-prayers": ["Rakats of Five Daily Prayers", "৫ ওয়াক্ত নামাজের রাকাতসমূহ"],
            "timings-of-prayers": ["Timing of Five Daily Prayers", "৫ ওয়াক্ত নামাজের ওয়াক্তসমূহ"],
            "prohibited-times": ["Prohibited Times for Salah", "যে সময়ে প্রত্যেক নামায নিষিদ্ধ"],
            "nullifiers-of-fasting": ["Nullifiers of Fasting", "সাওম ভঙ্গের কারণসমূহ"],
            "qadha-of-fasting": ["Reasons for Qadha of Fasting", "সাওম কাযা করার কারন সমূহ"],
            "kaffara-of-fasting": ["Kaffara of Fasting", "সাওমের কাফ্ফারা নিম্নরূপ"],
            "conditions-for-zakat": ["Conditions for Zakat", "যাকাত ফরজ হওয়ার শর্ত"],
            "recipients-of-zakat": ["Recipients of Zakat", "যাকাতের মাসারিফ"],
            "faraid-of-hajj": ["Faraid of Hajj", "হজের ফরজ"],
        }[id] || []
    );
}
