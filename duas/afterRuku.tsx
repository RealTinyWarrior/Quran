import { RenderableContent, renderLine } from "../components/ArticleRenderer";

const afterRuku: RenderableContent[] = [
    {
        type: "bismillah",
        content: "afterRuku",
    },
    renderLine,
    {
        type: "arabic",
        content: "سَمِعَ اللَّہُ لِمَنْ حَمِدَهُ",
    },
    {
        type: "paragraph",
        content: "Allah hears the one who praises Him",
        contentBengali: "আল্লাহ তা'আলা সেই ব্যক্তির কথা শোনেন।",
    },
    renderLine,
];

export default afterRuku;
