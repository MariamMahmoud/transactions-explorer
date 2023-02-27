import { PrismaClient } from '@prisma/client';
import { uuid }from 'short-uuid' ;
const prisma = new PrismaClient();


export default {
	Query: {
        // TODO: paginate and sort
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
        // TODO: paginate and sort
		searchTransactions: (_: any, args: { searchQuery: {
            categoryName: string,
            accountName: string,
            accountBank: string,
            reference: string,
            amount: number,
            dateRange: {
                start: Date
                end: Date
            }
        } }) => {
            const search = args.searchQuery ? {
                OR: [{
                    category: {
                        name: { contains: args.searchQuery.categoryName }
                    }
                },
                {
                    account: {
                        OR: [
                            { name: { contains: args.searchQuery.accountName } },
                            { bank: { contains: args.searchQuery.accountBank } } 
                        ]
                        
                    }
                },
                {
                    reference: { contains: args.searchQuery.reference }
                },
                {
                    amount: {equals: args.searchQuery.amount }
                },
                {
                    AND: [
                        { date: { gte: args.searchQuery.dateRange.start } },
                        { date: { lte: args.searchQuery.dateRange.end  } },
                    ] 
                }] 
            }: {};

            return prisma.transaction.findMany({
                where: search,
                include: {
                    account: true,
                    category: true
                },
		    });
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