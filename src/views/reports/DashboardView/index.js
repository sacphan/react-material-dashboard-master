import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from './Budget';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';
import Sales from './Sales';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import TrafficByDevice from './TrafficByDevice';

import SimpleModal from 'src/theme/modal'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  const [boards, setBoards] = useState(Array());
  let listBoard = [];
  useEffect(() => {
    async function fetchBoardList() {
     
      var token = localStorage.getItem("Token");
      var test = JSON.parse(token);
      var cac = test.token;

      const requestURL = "https://localhost:44373/api/BoardController/getAllBoards";
      const requestOptions = {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cac,
          'My-Custom-Header': 'foobar'
        },
        // body: JSON.stringify({ title: 'React POST Request Example' })
      };
      fetch(requestURL, requestOptions)
        .then(response => response.json())
        .then(data => setBoards(data));
    }

    fetchBoardList();
  }, []);
  const renderBoard = (item) => {

    return <Grid key={item.id} item
      lg={3}
      sm={6}
      xl={3}
      xs={12}
    >
      <Budget board={item} />
    </Grid>

  }
  
  boards.map((item) => {

    listBoard.push(renderBoard(item));
  })

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      
      <Container maxWidth={false}>
      
         <SimpleModal boards={boards} setBoards={setBoards} />
       
        <br />
        <Grid
          container
          spacing={3}
        >
          {listBoard}
          
        </Grid>
       
       
      </Container>
      
    </Page>
  );
};

export default Dashboard;



