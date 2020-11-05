import React,{useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  TextField
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));


const Budget = ({ className, ...rest },props) => {
  const classes = useStyles();
  const {Name,setName} = useState('');
  const {board} = rest;
  debugger
  let html='';
  const handleChange = (event) => {
    setName({
      ...Name,
      [event.target.name]: event.target.value
    });
  };
  if (board.name=='')
  {
    html= <TextField
    fullWidth
    helperText="Please specify the  name board"
    label="Name Board"
    name="name"
    onChange={handleChange}
    required
    value={board.name}
    variant="outlined"
  />
  }
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3} 
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {board.name}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon/>
            </Avatar>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
           
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
           
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;
