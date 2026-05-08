import React from 'react';
import { Box, Typography, Stack, Card, CardContent } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

const ReportsPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      {/* DATA VISUALIZATION SECTION */}
      <Stack 
        direction={{ xs: "column", md: "row" }} 
        spacing={3} 
        sx={{ mb: 4 }}
      >
        {/* BAR CHART CARD */}
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Sales Performance
            </Typography>
            <BarChart
              series={[
                { data: [10, 20, 30, 40], label: "Sales", color: '#A89699' },
                { data: [15, 25, 20, 35], label: "Revenue", color: '#F3A4BB' }
              ]}
              xAxis={[{ data: ["Jan", "Feb", "Mar", "Apr"], scaleType: "band" }]}
              height={300}
            />
          </CardContent>
        </Card>

        {/* PIE CHART CARD */}
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Category Distribution
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "Series A", color: '#A89699' },
                      { id: 1, value: 20, label: "Series B", color: '#F3A4BB' },
                      { id: 2, value: 30, label: "Series C", color: '#643F48' },
                    ],
                    innerRadius: 30,
                    paddingAngle: 5,
                    cornerRadius: 5,
                  },
                ]}
                width={400}
                height={300}
              />
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default ReportsPage;