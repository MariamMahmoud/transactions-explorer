import { PrismaClient } from '@prisma/client';
import { argsToArgsConfig } from 'graphql/type/definition';
import { uuid }from 'short-uuid' ;
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
		getTransaction: (_parent: any, args: { id: string; }) => { 
            return prisma.transaction.findUnique({
                where: { id: args.id || undefined },
          });
        },
		allCategories: () => {
            return prisma.category.findMany();
        },
		getCategory: (_parent: any, args: { id: string; }) => { 
            return prisma.category.findUnique({
                where: { id: args.id || undefined },
          });
        },
		allAccounts: () => {
            return prisma.account.findMany();
        },
		getAccount: (_parent: any, args: { id: string; }) => { 
            return prisma.account.findUnique({
                where: { id: args.id || undefined },
          });
        },
		editTransactionCategory: (_: any, args: { data: { id: string; name: string; color: string; }; id: string; }) => {
            return prisma.category.upsert({
                where: { id: args.data.id || undefined },
                update: {
                    transactions: {
                        connect: {
                            id: args.id
                        }
                    }
                },
                create: {
                    id: uuid(),
                    name:  args.data.name,
                    color:  args.data.color,
                    transactions: {
                        connect: [{ id: args.id }]
                    }
                },
                include: {
                    transactions: true
                },
            });
        },
        
		searchTransactions: (_: any, args: { data: { name: string; color: string; }; id: string; }) => {

        }
	}
};