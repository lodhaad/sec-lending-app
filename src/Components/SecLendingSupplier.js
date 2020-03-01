import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
    KeyboardDatePicker, 
    MuiPickersUtilsProvider
 }  from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  table: {
      minWidth: 700,
    },
}));






  
 
  


   



const SecLendingSupplier = () => {



const [data , setData ] = React.useState(
  {

    info:{
      supplier:'',
      dateOfSupply: new Date(),
      securities:[]

    }

  }
);


const [secInput , setSecInput ] = React.useState (

  {
    secCode:'',
    quantity:''
  }


);


const handleDateChange = date => {

  setData ({ info: {...data.info, dateOfSupply: date}});

}


const handleSupplierOnChange = (e) => {
  setData ({ info: {...data.info, supplier:e.target.value}});
}


const handleAddSecurityToGrid = e => {

setData ( {info:  {...data.info, securities: [...data.info.securities, {secCode: secInput.secCode, quantity: secInput.quantity}]}})

}

const handleSecurityAndQuantityOnChange = e => {

  setSecInput({...secInput, [e.target.name]: e.target.value })

}


const handleSubmit = e => console.log (data )



 const classes = useStyles();
 





    

    return (

        <div> <TextField style ={{ marginTop : 16 }} label = 'Supplier' onChange={handleSupplierOnChange}></TextField>


        <MuiPickersUtilsProvider style ={{ marginTop : 16 }}  utils={DateFnsUtils}>
        
        
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Supply Date"
          format="MM/dd/yyyy"
          value={data.info.dateOfSupply}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>


        <br></br>

        <Grid container spacing={3}>


        <Grid item xs>

        <TextField style ={{ marginTop : 16 }} label = 'Security Code' name='secCode'  onChange= {handleSecurityAndQuantityOnChange}></TextField>
        </Grid>
        <Grid item xs>
        <TextField style ={{ marginTop : 16 }} label = 'Quantity'  name = 'quantity' onChange={handleSecurityAndQuantityOnChange}></TextField>
        </Grid>

        <Grid item xs>
        <Button variant="contained" color="primary" onClick={handleAddSecurityToGrid}>
        Add Security
        </Button>
        </Grid>
              
      </Grid>

          <br></br>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Security Code</TableCell>
            <TableCell align="right">Quantity</TableCell>
           
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data.info.securities.map(row => (
            <TableRow key={row.secCode}>
              <TableCell component="th" scope="row">
                {row.secCode}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <br></br>  

    <Button className={classes.button}  variant='contained' color='primary' onClick={handleSubmit}> Submit </Button>

            
    </div>


    )

}


export default SecLendingSupplier