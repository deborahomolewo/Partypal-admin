import React, { useState } from 'react';
import './analytics.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from '@mui/material';

const Analytics = () => {
  // Dummy data for daily active users and Paystack transactions
  const [dailyActiveUsers] = useState({
    planner: 120, // example planner count
    vendor: 80,   // example vendor count
  });

  const [paystackTransactions] = useState({
    totalPayments: 25000, // example total payments amount
    failedTransactions: 5, // example failed transactions count
    totalRevenue: 20000,   // example total revenue
  });

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Typography variant="h4" gutterBottom>
          Analytics Dashboard
        </Typography>
        
        {/* Active Users Section */}
        <Box mt={4}>
          <Typography variant="h6">Daily Active Users</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Planners</Typography>
                  <Typography variant="h6">{dailyActiveUsers.planner}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Vendors</Typography>
                  <Typography variant="h6">{dailyActiveUsers.vendor}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        
        <Divider sx={{ mt: 4 }} />
        
        {/* Paystack Transactions Section */}
        <Box mt={4}>
          <Typography variant="h6">Paystack Transactions</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Total Payments</Typography>
                  <Typography variant="h6">${paystackTransactions.totalPayments}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Failed Transactions</Typography>
                  <Typography variant="h6">{paystackTransactions.failedTransactions}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Total Revenue</Typography>
                  <Typography variant="h6">${paystackTransactions.totalRevenue}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Analytics;
