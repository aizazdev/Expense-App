import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import globalContext from './../Context/GlobalContext';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "10px"
    },
    income: {
        backgroundColor: "orange",
        padding: "10px",
        borderRadius: "10px"
    },
    size: {
        fontSize: "25px",
        fontWeight: "bold",
        color: "white"
    },
    expense: {
        backgroundColor: "silver",
        padding: "10px",
        borderRadius: "10px"
    },

  }));

export const IncomeExpense = ()=> {
    
    const {transaction} = useContext(globalContext);
    console.log(transaction)
    let income = transaction.map((trans) => (trans.amount > 0 ) ? trans.amount : 0 );
    let expense = transaction.map((trans) => (trans.amount < 0 ) ? trans.amount : 0 );

    let totalIncome = income.reduce((item, acc)=> (acc +=item),0).toFixed(2);
    let totalExpense = expense.reduce((item, acc)=> (acc +=item),0).toFixed(2);
    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={6} className={classes.income}>
                    <Typography className={classes.size}>Income</Typography>
                    <Typography className={classes.size}>${totalIncome}</Typography>
                </Grid>
                <Grid item xs={6} className={classes.expense}>
                    <Typography className={classes.size}>Expense</Typography>
                    <Typography className={classes.size}>${totalExpense}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}