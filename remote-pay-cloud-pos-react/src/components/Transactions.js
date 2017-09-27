import React from 'react';
import TitleBar from "./TitleBar";
import TransactionRow from "./TransactionRow";
import { browserHistory } from 'react-router';

export default class Transactions extends React.Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.transactions = this.store.getTransactions();
        this.goToPayment = this.goToPayment.bind(this);
    }

    goToPayment(transaction){
        if(transaction.transactionTitle !== 'Manual Refund') {
            browserHistory.push({pathname: '/payment', state: {type: 'payment', id: transaction.id}});
        }
    }

    render(){

        return(
            <div className="transactions">
                <div className="transactions_list">
                    <TitleBar title="Transactions"/>
                    {this.transactions.map(function (transaction, i) {
                            return <TransactionRow key={'transaction-'+i} transaction={transaction} onClick={this.goToPayment}/>
                    }, this)}
                </div>
            </div>
        );
    }
}