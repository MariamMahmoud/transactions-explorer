import { gql } from 'apollo-server';

export default  gql`
    scalar DateTime @specifiedBy (url: "https://ibm.github.io/graphql-specs/custom-scalars/date-time.html")

    type Transaction {
        id: ID!
        reference: String!
        category: Category
        account: Account
        date: DateTime!
        amount: Float!
        currency: String!
    }
    type Category {
        id: ID!
        name: String!
        color: String!
    }
    type Account {
        id: ID!
        name: String!
        bank: String!
    }

    input DateRange {
        start: DateTime
        end: DateTime
    }

    
    input SearchQuery {
        categoryName: String
        accountName: String
        accountBank: String
        reference: String
        amount: Float
        dateRange: DateRange
    }

    input categoryData {
        id: ID
        name: String
        color: String
    }


    type Query {
        "get transactions for landing page"
        allTransactions: [Transaction]
        getTransaction: Transaction
        "to be displayed in the categories drop down list"
        allCategories: [Category]
        getCategory(id: ID!): Category
        "to be displayed in the accounts drop down list, if needed!"
        allAccounts: [Account]
        getAccount(id: ID!): Account
        searchTransactions(searchQuery: SearchQuery): [Transaction]
    }

    type Mutation {
        editTransactionCategory(id: ID!, data: categoryData): Transaction
    }
`;
