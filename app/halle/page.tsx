import { hallestatistic } from '../../@types/hallestatistic.d'
import { DashboardItem } from '../../components/ui'

const HallePage = () => {
    const testdata: hallestatistic[] = [
        {
            title: 'Bierkästen',
            entries: [new Date(), new Date()],
        },
        {
            title: 'Shishaköpfe',
            entries: [new Date(), new Date()],
        },
    ]

    return (
        <section className="relative h-screen w-screen bg-vicious-black justify-center items-center">
            <div className="flex flex-wrap gap-4 p-4">
                {testdata.map((item, key) => {
                    return <DashboardItem key={key} data={item} />
                })}
            </div>
        </section>
    )
}

export default HallePage
