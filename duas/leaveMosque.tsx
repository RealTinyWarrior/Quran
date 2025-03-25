import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const leaveMosque: RenderableContent[] = [
    {
        type: "bismillah",
        content: "leaveMosque",
    },
    renderLine,
    {
        type: "arabic",
        content: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",
    },
    {
        type: "paragraph",
        content: "O Allah! I ask You for Your grace.",
        contentBengali: "হে আল্লাহ! আমি তোমার দয়া ও অনুগ্রহের জন্য প্রার্থনা করছি।",
    },
    renderLine,
];

export default leaveMosque;
