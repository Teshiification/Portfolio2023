import prisma from '.'

export async function getStorageItems() {
    try {
        const items = await prisma.storageItem.findMany({
            include: {
                amount: true,
            },
        })
        return { items }
    } catch (error) {
        return { error }
    }
}

export async function getStorageItemsCurrentYear() {
    try {
        const currentYear = DateTime.now().year
        const items = await prisma.storageItem.findMany({
            include: {
                amount: {
                    where: {
                        timestamp: {
                            gte: DateTime.fromObject({
                                year: currentYear,
                                month: 1,
                                day: 1,
                                hour: 0,
                                minute: 0,
                                second: 0,
                            }).toJSDate(),
                            lte: DateTime.fromObject({
                                year: currentYear,
                                month: 12,
                                day: 31,
                                hour: 23,
                                minute: 59,
                                second: 59,
                            }).toJSDate(),
                        },
                    },
                },
            },
        })
        return { items }
    } catch (error) {
        return { error }
    }
}

export async function getStorageItemById(storageid) {
    try {
        const item = await prisma.storageItem.findUnique({
            where: { id: storageid },
            include: {
                amount: true,
            },
        })
        return { item }
    } catch (error) {
        return { error }
    }
}

export async function addStorageItemEntryById(storageid) {
    try {
        await prisma.storageItemTimestamps.create({
            id: storageid,
        })
        return getStorageItemById(storageid)
    } catch (error) {
        return { error }
    }
}
