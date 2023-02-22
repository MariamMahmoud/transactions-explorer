import { PrismaClient } from '@prisma/client'
import accounts from './seeds/accounts.json'
import categories from './seeds/categories.json'
// was too big cause heap out of memory
// can be separated into 2 files to help with that
import transactions from './seeds/transactions.json'

// idea for fixing forign key error, no idea!!!
const prisma = new PrismaClient()
const parsedTransactions: {  
    id: string;
    account: {
        connect: {
            id: string
        }
    },

    category: {
        connect: {
            id: string,
        }
    }
    reference: string;
    amount: number;
    currency: string;
    date: Date;
 }[] = [];

async function main ()  {   
    await prisma.account.createMany({data: accounts});
    await prisma.category.createMany({data: categories});

    transactions.forEach(transaction => {
        parsedTransactions.push(
            {
                id: transaction.id,
                account: {
                    connect: {
                        id: transaction.accountId,
                    }
                },
                category: {
                    connect: {
                        id: transaction.categoryId,
                    }
                },
                reference: transaction.reference,
                amount: transaction.amount,
                currency: transaction.currency,
                date: new Date(Date.parse(transaction.date)),
            }
        )
    })
    Promise.all(parsedTransactions.map(parsedTransaction => prisma.transaction.create({data: parsedTransaction})))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });

