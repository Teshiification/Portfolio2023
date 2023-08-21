import { DashboardItem } from '../../components/ui';
import { getStorageItems } from '../../lib/prisma/storageItems';

const HallePage = async () => {
  // const { items } = await getStorageItems()
  const { items } = await getStorageItems();
  console.log(items);
  return (
    <section className="relative h-screen w-screen content-center items-center justify-center bg-vicious-black p-4">
      <h1 className="absolute -mt-3 ml-2 bg-vicious-black px-1">
        Statistics 2023
      </h1>
      <div className="flex w-full flex-wrap justify-around gap-4 rounded border-2 border-vicious-secondary p-4">
        {items?.map((item, key) => {
          return <DashboardItem key={key} data={item} />;
        })}
      </div>
    </section>
  );
};

export default HallePage;
