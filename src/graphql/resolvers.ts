import { PrismaClient } from '@prisma/client';
import { uuid }from 'short-uuid' ;
const prisma = new PrismaClient();


export default {
	Query: {
		allTransactions: () => {
            return prisma.transaction.findMany({
                include: {
                    account: true,
                    category: true
                },
		});
		},
		getTransaction: (_parent: any, args: { id: string; }) => { 
            return prisma.transaction.findUnique({
                where: { id: args.id || undefined },
                include: {
                    account: true,
                    category: true
                },
          });
        },
		allCategories: () => {
            return prisma.category.findMany();
        },
		getCategory: (_parent: any, args: { id: string; }) => { 
            return prisma.category.findUnique({
                where: { id: args.id || undefined },
                include: {
                    transactions: true
                }
          });
        },
		allAccounts: () => {
            return prisma.account.findMany();
        },
		getAccount: (_parent: any, args: { id: string; }) => { 
            return prisma.account.findUnique({
                where: { id: args.id || undefined },
                include: {
                    transactions: true
                }
          });
        },
		searchTransactions: (_: any, args: { data: { name: string; color: string; }; id: string; }) => {

        }
	},
    Mutation: {
        // TODO: make it trnsactional
        editTransactionCategory: async(_: any, args: { data: { id: string; name: string; color: string; }; id: string; }) => {
            let transaction = await prisma.transaction.findFirst({
                where: { id: args.id || undefined },
                include: {
                    category: true
                }
                
            });

            // get or create category
            const category = await prisma.category.upsert({
                where: { id: args.data.id || undefined },
                update: {},
                create: {
                    id: uuid(),
                    name:  args.data.name,
                    color:  args.data.color,
                    transactions: {
                        connect: {
                            id: transaction?.id
                        }
                    }
                }
            });

            // connect new category
            return prisma.transaction.update({
                where: { id: args.id },
                data: {
                    categoryId: category.id
                },
                include: {
                    category: true
                }

            });
        },
    }

};