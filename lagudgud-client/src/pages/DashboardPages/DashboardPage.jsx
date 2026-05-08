import React from 'react';
import { Box, Typography, Stack, Card, CardContent, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart"; // Import PieChart

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
];

const rows = [
  { id: 1, lastName: 'Manobal', firstName: 'Lisa', age: 24 },
  { id: 2, lastName: 'Kim', firstName: 'Jennie', age: 30 },
  { id: 3, lastName: 'Kim', firstName: 'Jisoo', age: 31 },
  { id: 4, lastName: 'Park', firstName: 'Rose', age: 23 },
  { id: 5, lastName: 'Satoru', firstName: 'Gojo', age: null },
];

const averageAge = (
  rows.reduce((sum, row) => sum + (row.age || 0), 0) /
  rows.filter((row) => row.age !== null).length
).toFixed(1);

const DashboardPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Dashboard
      </Typography>

      {/* Summary Cards */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <Card sx={{ flex: 1, boxShadow: 0, border: '1px solid #e0e0e0' }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">Total Users</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'medium' }}>{rows.length}</Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1, boxShadow: 0, border: '1px solid #e0e0e0' }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">Average Age</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'medium' }}>{averageAge}</Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* 🔷 CHARTS SECTION - Side by Side */}
<Box sx={{ display: 'flex', alignItems: 'center', gap: 26, mb: 6 }}>
  {/* Bar chart takes all remaining space */}
  <Box sx={{ flex: 1 }}>
    <BarChart
      series={[
        { data: [30, 40, 35, 50], label: "Series 1", color: '#A89699' },
        { data: [20, 30, 25, 45], label: "Series 2", color: '#F3A4BB' },
      ]}
      xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
      height={300}
    />
  </Box>

  {/* Pie chart stays fixed on the right */}
  <Box sx={{ flexShrink: 0, display: 'flex', marginRight: 14, justifyContent: 'center' }}>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: '10', color: '#A89699' },
            { id: 1, value: 15, label: '15', color: '#F3A4BB' },
            { id: 2, value: 20, label: '20', color: '#643F48' },
          ],
          innerRadius: 0,
          paddingAngle: 1,
          cornerRadius: 0,
        },
      ]}
      width={300}
      height={200}
      slotProps={{ legend: { hidden: true } }}
    />
  </Box>
</Box>

      {/* Users Overview Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Users Overview
      </Typography>
      <Box sx={{ height: 400, width: '100%', mb: 4 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default DashboardPage;