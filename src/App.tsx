import logo from "./assets/logo-nlw-experts.svg";
import { NewNoteCard } from "./components/new-note-card";
import NoteCard from "./components/note-card";

const MOCKED_NOTE = {
  date: new Date(),
  content:
    "SMASJDSJÇKSADJKSDAJKLDSAKLJDSJAKLKJDSLAKLJMSDKSDAKJSDJKDSKJLSADKJLDKAJLS",
};

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-10 space-y-6">
      <img src={logo} alt="imagem" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500 "
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px] ">
        <NewNoteCard />
        <NoteCard note={MOCKED_NOTE} />
      </div>
    </div>
  );
}
