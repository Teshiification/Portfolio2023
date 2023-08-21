import { getStorageItemById } from '../../../lib/prisma/storageItems';

const HalleIDPage = async ({ params }: any) => {
  const { item } = await getStorageItemById(Number(params.id));
  console.log(item);
  return (
    <section className="relative flex h-screen w-screen flex-col gap-4 bg-vicious-black p-4">
      <p className="text-white">{item?.name}</p>

      <h2>Anzahl: {item?.amount.length}</h2>

      <div className="flex h-12 items-center justify-around">
        {/* 
                <AddItem id={Number(params.id)} />
                <DeleteItem id={Number(params.id)} />
            */}
      </div>

      <div className="bottom-0 h-full">
        <h2 className="absolute -mt-3 ml-2 bg-vicious-black px-1 font-semibold uppercase">
          log
        </h2>
        <div className="flex h-full w-full flex-wrap content-start justify-around gap-4 rounded border-2 border-vicious-secondary p-4">
          {item?.amount?.map((entry, key) => {
            return <p key={key}>{entry.timestamp.toUTCString()}</p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default HalleIDPage;
