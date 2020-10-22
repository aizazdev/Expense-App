import React, {useContext, useState} from 'react';
import { fade,ThemeProvider,withStyles,makeStyles,createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import MenuItem from '@material-ui/core/MenuItem';
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



const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export const AddTransaction = ()=> {
  const classes = useStyles();
  const[name, setName] = useState("");
  const[amount, setAmount] = useState(0);
  const [symbol, setSymbol] = React.useState('+');

  const{ addTransaction } = useContext(globalContext);
  const newTransaction = {
    name,
    amount: (symbol == '+' ? Number(amount) : Number(-amount))
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
