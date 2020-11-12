import React, { useContext  } from 'react';

import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import BoardDetailContext from 'src/context/BoardDetailContext';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const RowView = (props) => {
    const boardDetailContext = useContext(BoardDetailContext);
    const item = props.rowCurrent;
    const classes = useStyles();    
    
      return  <Grid   key={item.id} item  xs={12} sm={12}  >  
                <br/> 
                <Paper  className={classes.paper}>{item.content}</Paper> 
               
              </Grid>
  }
  export default RowView;  