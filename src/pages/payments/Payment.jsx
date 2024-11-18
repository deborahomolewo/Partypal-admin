import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import './payment.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Box,
  Typography,
} from '@mui/material';

const Payment = () => {
  // Dummy data for transactions and proposals
  const [transactions] = useState([
    { id: 'TXN001', date: '2024-11-10', amount: 500, type: 'Payment', status: 'Completed' },
    { id: 'TXN002', date: '2024-11-11', amount: 150, type: 'Refund', status: 'Pending' },
    { id: 'TXN003', date: '2024-11-12', amount: 300, type: 'Payment', status: 'Failed' },
  ]);

  const [proposals] = useState([
    { id: 'PROP001', planner: 'John Doe', vendor: 'Vendor A', status: 'Successful' },
    { id: 'PROP002', planner: 'Jane Smith', vendor: 'Vendor B', status: 'Pending' },
    { id: 'PROP003', planner: 'Mike Johnson', vendor: 'Vendor C', status: 'Cancelled' },
  ]);

  const [topUpAmount, setTopUpAmount] = useState('');
  const [reportDateRange, setReportDateRange] = useState({ start: '', end: '' });

  const handleTopUp = () => {
    alert(`Wallet topped up with amount: $${topUpAmount}`);
    setTopUpAmount('');
  };

  const handleGenerateReport = () => {
    alert(`Report generated for date range: ${reportDateRange.start} to ${reportDateRange.end}`);
  };

  return (
    <div className="payment">
      <Sidebar />
      <div className="paymentContainer">
        <Navbar />
        <Typography variant="h4" gutterBottom>
          Payments Management
        </Typography>

        {/* Nav Tabs */}
        <ul className="nav nav-tabs" id="paymentTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="transactions-tab"
              data-bs-toggle="tab"
              data-bs-target="#transactions"
              type="button"
              role="tab"
              aria-controls="transactions"
              aria-selected="true"
            >
              Transactions
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="proposals-tab"
              data-bs-toggle="tab"
              data-bs-target="#proposals"
              type="button"
              role="tab"
              aria-controls="proposals"
              aria-selected="false"
            >
              Proposals
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="reports-tab"
              data-bs-toggle="tab"
              data-bs-target="#reports"
              type="button"
              role="tab"
              aria-controls="reports"
              aria-selected="false"
            >
              Financial Reports
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="wallet-tab"
              data-bs-toggle="tab"
              data-bs-target="#wallet"
              type="button"
              role="tab"
              aria-controls="wallet"
              aria-selected="false"
            >
              Top-Up Wallet
            </button>
          </li>
        </ul>

        <div className="tab-content" id="paymentTabContent">
          {/* Transactions Tab */}
          <div
            className="tab-pane fade show active"
            id="transactions"
            role="tabpanel"
            aria-labelledby="transactions-tab"
          >
            <Box mt={4}>
              <Typography variant="h6">Transactions</Typography>
              <TableContainer component={Paper}>
                <Table aria-label="transactions table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Transaction ID</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.id}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell>{transaction.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </div>

          {/* Proposals Tab */}
          <div
            className="tab-pane fade"
            id="proposals"
            role="tabpanel"
            aria-labelledby="proposals-tab"
          >
            <Box mt={4}>
              <Typography variant="h6">Proposals</Typography>
              <TableContainer component={Paper}>
                <Table aria-label="proposals table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Proposal ID</TableCell>
                      <TableCell>Planner</TableCell>
                      <TableCell>Vendor</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {proposals.map((proposal) => (
                      <TableRow key={proposal.id}>
                        <TableCell>{proposal.id}</TableCell>
                        <TableCell>{proposal.planner}</TableCell>
                        <TableCell>{proposal.vendor}</TableCell>
                        <TableCell>{proposal.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </div>

          {/* Financial Reports Tab */}
          <div
            className="tab-pane fade"
            id="reports"
            role="tabpanel"
            aria-labelledby="reports-tab"
          >
            <Box mt={4}>
              <Typography variant="h6">Generate Financial Report</Typography>
              <TextField
                label="Start Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={reportDateRange.start}
                onChange={(e) => setReportDateRange({ ...reportDateRange, start: e.target.value })}
                sx={{ mr: 2 }}
              />
              <TextField
                label="End Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={reportDateRange.end}
                onChange={(e) => setReportDateRange({ ...reportDateRange, end: e.target.value })}
                sx={{ mr: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleGenerateReport}
                sx={{ mt: 2 }}
              >
                Generate Report
              </Button>
            </Box>
          </div>

          {/* Wallet Top-Up Tab */}
          <div
            className="tab-pane fade"
            id="wallet"
            role="tabpanel"
            aria-labelledby="wallet-tab"
          >
            <Box mt={4}>
              <Typography variant="h6">Top Up Wallet</Typography>
              <TextField
                label="Amount"
                type="number"
                value={topUpAmount}
                onChange={(e) => setTopUpAmount(e.target.value)}
                sx={{ mr: 2 }}
              />
              <Button variant="contained" color="primary" onClick={handleTopUp}>
                Top Up
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
