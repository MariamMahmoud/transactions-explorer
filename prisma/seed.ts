import { PrismaClient } from '@prisma/client'
import accounts from './seeds/accounts.json'
import categories from './seeds/categories.json'
// was too big cause heap out of memory (handling is a bonus)
// random brainstorming idea to import it: can be separated into 2 files to help with that
import transactions from './seeds/transactions.json'

// idea for fixing forign key error, no idea!!!
const prisma = new PrismaClient()
const parsedTransactions: {  
    id: string;
    accountId: string;
    categoryId: string;
    reference: string;
    amount: number;
    currency: string;
    date: Date;
 }[] = [];

async function main ()  {   
    await prisma.account.createMany({data: accounts});
    await prisma.category.createMany({data: categories});

    // TODO: clean up
    transactions.forEach(transaction => {
        parsedTransactions.push(
            {
                id: transaction.id,
                accountId: transaction.accountId,
                categoryId: transaction.categoryId,
                reference: transaction.reference,
                amount: transaction.amount,
                currency: transaction.currency,
                date: new Date(Date.parse(transaction.date)),
            }
        )
    });
    await prisma.transaction.createMany({data: parsedTransactions});
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

