import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import globalContext from './../Context/GlobalContext';

const useStyles = makeStyles((theme) => ({
    header: {
        color: "silver",
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "15px",
    },
    total: {
        color: "orange",
        fontSize: "30px",
        fontWeight: "bold"
    }    
  }));
export const Transaction = ()=> {

    const classes = useStyles();
    const {transaction} =  useContext(globalContext);
    const transactionAmounts = transaction.map(trans => (trans.amount < 0) ? -(trans.amount) : trans.amount) ;
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
   
    return(
        <div>
            <div>
                <div className={classes.header}>
                    Total Transaction
                </div>
                <div className={classes.total}>
                    ${balance}
                </div>
            </div>
        </div>
    )
}