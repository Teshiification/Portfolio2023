import Link from 'next/link';
import CreateNote from './Create';
import PocketBase from 'pocketbase';

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'


async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return(
    <div className='grid grid-rows gap-10 justify-center'>
      <h1 className='text-xl font-semibold'>Notes</h1>
      <div className="flex gap-10">
        {notes?.map((note) => {
          return (
          <>
          <Link href={`/notes/${note.id}`} className="bg-yellow-200 grid grid-rows gap-4 w-fit h-fit text-black rounded p-2">
            <h2>note/{note.id}</h2>
            <h1>{note.title}</h1>
          </Link>          
          </>
          )
        })}
      </div>

      <CreateNote />
    </div>
  );
}