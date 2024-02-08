import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-nlw-experts.svg";
import { NewNoteCard } from "./components/new-note-card";
import NoteCard from "./components/note-card";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return [];
  });

  const [search, setSearch] = useState("");

  const onNoteCreated = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);
  };

  const onNoteDeleted = (id: string) => {
    const notesArray = notes.filter((notes) => {
      return notes.id !== id;
    });

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  };

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search)
        )
      : notes;

  return (
    <div className="mx-auto max-w-6xl my-10 space-y-6 px-5 ">
      <img src={logo} alt="imagem" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          onChange={handleSearch}
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500 "
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  auto-rows-[250px] ">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />
        ))}
      </div>
    </div>
  );
}
