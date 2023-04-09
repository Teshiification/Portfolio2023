import { getStorageItemById } from '../../../lib/prisma/storageItems'
import { AddItem, DeleteItem } from './buttons'

const HalleIDPage = async ({ params }: any) => {
    const { item } = await getStorageItemById(Number(params.id))
    console.log(item)
    return (
        <section className="relative flex flex-col gap-4 h-screen w-screen bg-vicious-black p-4">
            <p className="text-white">{item?.name}</p>

            <h2>Anzahl: {item?.amount.length}</h2>

            <div className="flex h-12 justify-around items-center">
                {/* 
                <AddItem id={Number(params.id)} />
                <DeleteItem id={Number(params.id)} />
            */}
            </div>

            <div className="bottom-0 h-full">
                <h2 className="absolute -mt-3 ml-2 pl-1 pr-1 bg-vicious-black uppercase font-semibold">
                    log
                </h2>
                <div className="flex flex-wrap gap-4 p-4 w-full h-full justify-around border-2 border-vicious-secondary rounded content-start">
                    {item?.amount?.map((entry, key) => {
                        return <p key={key}>{entry.timestamp.toUTCString()}</p>
                    })}
                </div>
            </div>
        </section>
    )
}

export default HalleIDPage
