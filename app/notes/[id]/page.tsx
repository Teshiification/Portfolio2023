async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    Note(note)
  );
}

export function Note(note:any) {
  return (
    <div className="bg-yellow-200 grid grid-rows gap-4 w-fit h-fit text-black rounded p-2">
      <h1 className="text-gray-500">notes/{note.id}</h1>
      <div className="grid grid-rows gap-4">
        <h3 className="text-xl font-semibold">{note.title}</h3>
        <h5 className="">{note.content}</h5>
        <p className="text-xs">{note.created}</p>
      </div>
    </div>
  );
}