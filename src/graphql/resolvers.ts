import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export default {
    Query: {
        allTransactions: () => {return prisma.transaction.findMany({
            include: {
                account: true,
                category: true
              },
        });
    },
        getTransaction: () => {},
        allCategories: () => {return prisma.category.findMany();},
        getCategory: () => {},
        allAccounts: () => {return prisma.account.findMany();},
        getAccount: () => {},
        updateTransaction: () => {},
        createCategory: () => {},
        searchTransactions: () => {}
    }
}