import React, { useContext } from 'react';
import globalContext from './../Context/GlobalContext';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  delBtn: {
      padding: "10px",
      borderRadius: "100px",
      width: "40px",
      height: "40px",
      backgroundColor: "orange",
      border: "0px",
      color: "white"
  }
}));

export const TransactionList = ()=> {
  const classes = useStyles();
  const{transaction, deleteTransaction} = useContext(globalContext);

  return (
    <div className={classes.root}>
        {
            transaction.map((t, ind) => {
                return(
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>{t.name}</Typography>
                            <Typography noWrap>{t.amount}</Typography>
                        </Grid>
                        <Grid item>
                            <button className={classes.delBtn} onClick={()=>deleteTransaction(t.name)}>x</button>
                        </Grid>
                        </Grid>
                    </Paper>
                )
            })
        }
    </div>
  );
}
