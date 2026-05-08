import React from 'react';
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// Full column definitions with value getters
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

// Complete dataset for the Users table
const rows = [
  { id: 1, lastName: 'Manobal', firstName: 'Lisa', age: 24 },
  { id: 2, lastName: 'Kim', firstName: 'Jennie', age: 30 },
  { id: 3, lastName: 'Kim', firstName: 'Jisoo', age: 31 },
  { id: 4, lastName: 'Park', firstName: 'Rose', age: 23 },
  { id: 5, lastName: 'Satoru', firstName: 'Gojo', age: null },
];

const UsersPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Users Overview
      </Typography>
      
      <Box sx={{ height: 500, width: "100%", mt: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          // Enable advanced features as per requirements
          experimentalFeatures={{ newEditingApi: true }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default UsersPage;