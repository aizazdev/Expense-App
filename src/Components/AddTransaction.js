import React, {useContext, useState} from 'react';
import {withStyles,makeStyles,
} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import globalContext from './../Context/GlobalContext';

const addDel = [
    {
      label: '+',
    },
    {
      label: '-',
    },
  ];

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'orange',
      },
      '&:hover fieldset': {
        borderColor: 'orange',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'orange',
      },
    },
  },
})(TextField);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(0, 2),
    width: "400px",
    marginBottom: "10px"
  },
  transHeading: {
      marginLeft: "20px",
      color: "silver",

  },
  submitBtn: {
      backgroundColor: "#F29040",
      color: "white",
      margin: theme.spacing(0, 2),
      width: "400px",
      marginBottom: "10px"
  },

}));


export const AddTransaction = ()=> {
  const classes = useStyles();
  const[name, setName] = useState("");
  const[amount, setAmount] = useState(0);
  const [symbol, setSymbol] = React.useState('+');

  const{ addTransaction } = useContext(globalContext);
  const newTransaction = {
    name,
    amount: (symbol === '+' ? Number(amount) : Number(-amount))
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    addTransaction(newTransaction);
  }
  return (
    <>
        <h3 className={classes.transHeading}>Add Transaction</h3>
        <form className={classes.root} noValidate >
            <CssTextField
                className={classes.margin}
                label="Name"
                variant="outlined"
                id="custom-css-outlined-input"
                onChange={(e)=> setName(e.target.value)}
            />
            <CssTextField
                className={classes.margin}
                label="Amount"
                variant="outlined"
                id="custom-css-outlined-input"
                onChange={(e)=> setAmount(e.target.value)}
            />
            <TextField
                className={classes.margin}
                id="outlined-select-symbol-native"
                select
                label="Select Type"
                value={symbol}
                onChange={(e)=> setSymbol(e.target.value)}
                SelectProps={{
                    native: true,
                }}
                helperText="Please select income(+), expense(-)"
                variant="outlined"
                >
                {addDel.map((option) => (
                    <option key={option.label} value={option.label}>
                    {option.label}
                    </option>
                ))}
            </TextField>
            <Button variant="contained" className={classes.submitBtn} onClick={(e)=>handleSubmit(e)}>
                Add Transaction
            </Button>        
        </form>
    </>
  );
}
