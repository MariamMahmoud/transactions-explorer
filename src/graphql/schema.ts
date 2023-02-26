import { gql } from 'apollo-server';
// list transactions
// get one transaction
// edit transaction, edits category (existing or new)
// add category
// search transactions
export default  gql`
    type Transaction {
        id: String!
        reference: String!
        category: Category!
        account: Account!
        "convert to scalar type Date"
        date: String!
        amount: Float!
        currency: String!
    }
    type Category {
        id: String!
        name: String!
        color: String!
    }
    type Account {
        id: String!
        name: String!
        bank: String!
    }
    type Query {
        "get transactions for landing page"
        allTransactions: [Transaction]
        transaction: Transaction
        "to be displayed in the categories drop down list"
        allCategories: [Category]
        category: Category
        "to be displayed in the accounts drop down list, if needed!"
        allAccount: [Account]
        account: Account
    }
`;
