import { hallestatistic } from '../../@types/hallestatistic.d'
import { DashboardItem } from '../../components/ui'
import {
    getStorageItems,
    getStorageItemsCurrentYear,
} from '../../lib/prisma/storageItems'

const HallePage = async () => {
    //const { items } = await getStorageItems()
    const { items } = await getStorageItems()
    console.log(items)
    return (
        <section className="relative h-screen w-screen bg-vicious-black p-4 items-center justify-center content-center">
            <h1 className="absolute -mt-3 ml-2 bg-vicious-black pl-1 pr-1">
                Statistics 2023
            </h1>
            <div className="flex flex-wrap gap-4 p-4 w-full justify-around border-2 border-vicious-secondary rounded">
                {items?.map((item, key) => {
                    return <DashboardItem key={key} data={item} />
                })}
            </div>
        </section>
    )
}

export default HallePage
