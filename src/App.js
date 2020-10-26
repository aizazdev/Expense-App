import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Header} from './Components/header';
import {AddTransaction} from './Components/AddTransaction';
import {Transaction} from './Components/transaction';
import {GlobalProvider} from './Context/GlobalContext';
import {IncomeExpense} from './Components/incomeExpense';
import {TransactionList} from './Components/transactionList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 10),
  },
  heading: {
      color: "white"
  },

}));


function App() {

  const classes = useStyles();

  return (
      <GlobalProvider>
        <div className={classes.root}>
          <Header />
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <AddTransaction />
            </Grid>
            <Grid item xs={6}>
              <Transaction />          
              <IncomeExpense />
              <TransactionList />
            </Grid>
          </Grid>
        </div>
      </GlobalProvider>
    );
  
}

export default App;
