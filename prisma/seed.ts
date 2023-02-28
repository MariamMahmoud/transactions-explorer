import { PrismaClient } from '@prisma/client';
import accounts from './seeds/accounts.json';
import categories from './seeds/categories.json';
// was too big cause heap out of memory 
// random brainstorming idea to import it: can be separated into 2 files to help with that
import transactions from './seeds/transactions.json';

const prisma = new PrismaClient();

 const seedTransactions = async() => {
	const parsedTransactions: {  
		id: string;
		accountId: string;
		categoryId: string;
		reference: string;
		amount: number;
		currency: string;
		date: Date;
	 }[] = [];
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
		);
	});
	await prisma.transaction.createMany({data: parsedTransactions});
 }

async function main ()  {   
	await prisma.account.createMany({data: accounts});
	await prisma.category.createMany({data: categories});
	await seedTransactions();
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

