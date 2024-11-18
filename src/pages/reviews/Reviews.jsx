import React, { useState } from "react";
import "./reviews.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";

const Reviews = () => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, date: "2024-11-10", rating: 4, planner: "John Doe", vendor: "Vendor A", message: "Great work!", response: "" },
    { id: 2, date: "2024-11-12", rating: 2, planner: "Jane Smith", vendor: "Vendor B", message: "Not satisfied.", response: "" },
    { id: 3, date: "2024-11-11", rating: 5, planner: "Mike Johnson", vendor: "Vendor C", message: "Excellent service!", response: "" },
  ]);

  const [sortField, setSortField] = useState("date");

  // Sort feedbacks
  const sortedFeedbacks = [...feedbacks].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];

    if (typeof fieldA === "string" && typeof fieldB === "string") {
      return fieldA.localeCompare(fieldB);
    }

    if (typeof fieldA === "number" && typeof fieldB === "number") {
      return fieldA - fieldB;
    }

    if (sortField === "date") {
      const dateA = new Date(fieldA);
      const dateB = new Date(fieldB);
      return dateA - dateB;
    }

    return 0;
  });

  const handleResponseChange = (id, value) => {
    const updatedFeedbacks = feedbacks.map((feedback) =>
      feedback.id === id ? { ...feedback, response: value } : feedback
    );
    setFeedbacks(updatedFeedbacks);
  };

  const handleResponseSubmit = (id) => {
    const feedback = feedbacks.find((fb) => fb.id === id);
    // Confirm response stored in table
    alert(`Response submitted for feedback ID ${id}: ${feedback.response}`);
  };

  return (
    <div className="reviews">
      <Sidebar />
      <div className="reviewsContainer">
        <Navbar />
        <div className="reviewsHeader">
          <Typography variant="h4" gutterBottom>
            Feedback and Reviews
          </Typography>
          <div className="sortControls">
            <Typography variant="h6" sx={{ mr: 2 }}>
              Sort Reviews By:
            </Typography>
            <Select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              displayEmpty
              sx={{ width: 200 }}
            >
              <MenuItem value="date">Date</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="planner">Planner</MenuItem>
              <MenuItem value="vendor">Vendor</MenuItem>
            </Select>
          </div>
        </div>
  
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Planner</TableCell>
                <TableCell>Vendor</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Response</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedFeedbacks.map((feedback) => (
                <TableRow key={feedback.id}>
                  <TableCell>{feedback.date}</TableCell>
                  <TableCell>{feedback.rating}</TableCell>
                  <TableCell>{feedback.planner}</TableCell>
                  <TableCell>{feedback.vendor}</TableCell>
                  <TableCell>{feedback.message}</TableCell>
                  <TableCell>
                    <TextField
                      value={feedback.response}
                      onChange={(e) =>
                        handleResponseChange(feedback.id, e.target.value)
                      }
                      placeholder="Enter response"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleResponseSubmit(feedback.id)}
                    >
                      Send
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
  
};

export default Reviews;
