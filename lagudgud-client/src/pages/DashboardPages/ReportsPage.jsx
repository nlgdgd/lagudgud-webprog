import { useRef } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from '@mui/x-data-grid';

const PALETTE = {
  primary:   '#A89699',
  secondary: '#F3A4BB',
  accent:    '#643F48',
  light:     '#F9F0F3',
  border:    '#e0e0e0',
};

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName',  headerName: 'Last name',  width: 150, editable: true },
  { field: 'age',       headerName: 'Age', type: 'number', width: 110, editable: true },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow',       firstName: 'Jon',      age: 14  },
  { id: 2, lastName: 'Lannister',  firstName: 'Cersei',   age: 31  },
  { id: 3, lastName: 'Lannister',  firstName: 'Jaime',    age: 31  },
  { id: 4, lastName: 'Stark',      firstName: 'Arya',     age: 11  },
  { id: 5, lastName: 'Targaryen',  firstName: 'Daenerys', age: null},
  { id: 6, lastName: 'Melisandre', firstName: null,       age: 150 },
  { id: 7, lastName: 'Clifford',   firstName: 'Ferrara',  age: 44  },
  { id: 8, lastName: 'Frances',    firstName: 'Rossini',  age: 36  },
  { id: 9, lastName: 'Roxie',      firstName: 'Harvey',   age: 65  },
];

const ReportsPage = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContents = printRef.current;
    if (!printContents) return;

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    if (!printWindow) return;

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Print Report</title>
          ${Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
            .map((n) => n.outerHTML).join('')}
          <style>
            @page { size: A4; margin: 16mm; }
            * { box-sizing: border-box; }
            body {
              margin: 0;
              font-family: Arial, Helvetica, sans-serif;
              background: #fff;
              color: #1f2937;
            }
            .report-shell { padding: 28px; }

            /* ── Header ── */
            .report-header {
              margin-bottom: 24px;
              padding-bottom: 14px;
              border-bottom: 3px solid ${PALETTE.primary};
            }
            .report-header h1 {
              margin: 0 0 4px;
              font-size: 26px;
              font-weight: 700;
              color: ${PALETTE.accent};
            }
            .report-header .badge {
              display: inline-block;
              background: ${PALETTE.light};
              color: ${PALETTE.accent};
              border: 1px solid ${PALETTE.primary};
              border-radius: 4px;
              padding: 2px 10px;
              font-size: 11px;
              font-weight: 600;
              margin-bottom: 6px;
            }
            .report-header p {
              margin: 0;
              font-size: 13px;
              color: #6b7280;
              line-height: 1.5;
            }

            /* ── Cards ── */
            .report-content .MuiCard-root {
              box-shadow: none !important;
              border: 1px solid ${PALETTE.border};
              break-inside: avoid;
              page-break-inside: avoid;
              border-top: 3px solid ${PALETTE.primary};
            }
            .report-content .MuiCardContent-root { padding: 20px; }
            .report-content svg { max-width: 100%; }

            /* ── Section heading bar ── */
            .section-bar {
              background: ${PALETTE.light};
              border-left: 4px solid ${PALETTE.accent};
              padding: 6px 12px;
              margin-bottom: 10px;
              font-weight: 700;
              font-size: 13px;
              color: ${PALETTE.accent};
            }

            /* ── Summary stat boxes ── */
            .stat-row {
              display: flex;
              gap: 12px;
              margin-bottom: 20px;
            }
            .stat-box {
              flex: 1;
              border: 1px solid ${PALETTE.border};
              border-top: 3px solid ${PALETTE.secondary};
              border-radius: 4px;
              padding: 12px 16px;
              background: #fff;
            }
            .stat-box .label {
              font-size: 11px;
              color: #6b7280;
              margin-bottom: 4px;
            }
            .stat-box .value {
              font-size: 24px;
              font-weight: 700;
              color: ${PALETTE.accent};
            }

            /* ── Data table ── */
            .print-table {
              width: 100%;
              border-collapse: collapse;
              font-size: 12px;
              margin-top: 8px;
            }
            .print-table th {
              background: ${PALETTE.accent};
              color: #fff;
              padding: 8px 10px;
              text-align: left;
              font-weight: 600;
            }
            .print-table td {
              padding: 7px 10px;
              border-bottom: 1px solid ${PALETTE.border};
              color: #374151;
            }
            .print-table tr:nth-child(even) td { background: ${PALETTE.light}; }

            /* ── Footer ── */
            .report-footer {
              margin-top: 28px;
              padding-top: 10px;
              border-top: 1px solid ${PALETTE.border};
              font-size: 11px;
              color: #9ca3af;
              display: flex;
              justify-content: space-between;
            }
          </style>
        </head>
        <body>
          <main class="report-shell">
            <header class="report-header">
              <div class="badge">OFFICIAL REPORT</div>
              <h1>Reports Summary</h1>
              <p>Analytics overview for generated reports, category breakdown, and completion performance.</p>
              <p>Prepared on <strong>${exportedAt}</strong></p>
            </header>

            <!-- Stat boxes -->
            <div class="stat-row">
              <div class="stat-box">
                <div class="label">Total Generated</div>
                <div class="value">89</div>
              </div>
              <div class="stat-box">
                <div class="label">Total Completed</div>
                <div class="value">71</div>
              </div>
              <div class="stat-box">
                <div class="label">Completion Rate</div>
                <div class="value">78%</div>
              </div>
              <div class="stat-box">
                <div class="label">Report Categories</div>
                <div class="value">4</div>
              </div>
            </div>

            <!-- Charts (cloned from live DOM) -->
            <div class="section-bar">Charts &amp; Visualizations</div>
            <section class="report-content">
              ${printContents.innerHTML}
            </section>

            <!-- Static data table -->
            <div class="section-bar" style="margin-top:24px;">User Data Table</div>
            <table class="print-table">
              <thead>
                <tr>
                  <th>ID</th><th>First Name</th><th>Last Name</th>
                  <th>Age</th><th>Full Name</th>
                </tr>
              </thead>
              <tbody>
                ${rows.map(r => `
                  <tr>
                    <td>${r.id}</td>
                    <td>${r.firstName ?? '—'}</td>
                    <td>${r.lastName}</td>
                    <td>${r.age ?? '—'}</td>
                    <td>${(r.firstName ?? '') + ' ' + r.lastName}</td>
                  </tr>`).join('')}
              </tbody>
            </table>

            <footer class="report-footer">
              <span>Generated by Reports System</span>
              <span>${exportedAt}</span>
            </footer>
          </main>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Box>
      {/* ── Page header ── */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: PALETTE.accent }}>
            Reports
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Report analytics overview showing generated reports, category breakdown, and current
            completion performance.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap
        sx={{ justifyContent: 'flex-end', width: "100%" }}>
          <Button
            size='small'
            variant="contained"
            sx={{ bgcolor: PALETTE.accent, '&:hover': { bgcolor: PALETTE.primary }, height: 42, minWidth: 'auto', px: 3, borderRadius: 5, mr: 0.5, mt: 5 }}
          >
            Generate
          </Button>
          <Button
            size='small'
            variant="contained"
            onClick={handlePrint}
            sx={{ bgcolor: PALETTE.accent, '&:hover': { bgcolor: PALETTE.primary }, height: 42, minWidth: 'auto', px: 3, borderRadius: 5, mr: 0.5, mt: 5 }}
          >
            Export
          </Button>
          <Button
            size='small'
            variant="contained"
            sx={{ bgcolor: PALETTE.accent, '&:hover': { bgcolor: PALETTE.primary }, height: 42, minWidth: 'auto', px: 3, borderRadius: 5, mr: 4, mt: 5 }}
          >
            Filter
          </Button>
        </Stack>
      </Stack>

      {/* ── Printable content ── */}
      <Stack ref={printRef} spacing={3}>

        {/* Bar Chart */}
        <Card sx={{ boxShadow: 0, border: `1px solid ${PALETTE.border}`,
                    borderTop: `3px solid ${PALETTE.primary}` }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: PALETTE.accent, fontWeight: 'bold' }}>
              Monthly Report Output
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              This chart compares how many reports were generated and how many were completed across
              the last four months.
            </Typography>
            <BarChart
              series={[
                { data: [18, 24, 20, 27], label: 'Generated', color: PALETTE.primary },
                { data: [12, 19, 17, 23], label: 'Completed', color: PALETTE.secondary },
              ]}
              height={300}
              xAxis={[{
                data: ['January', 'February', 'March', 'April'],
                scaleType: 'band',
                label: 'Months',
              }]}
            />
          </CardContent>
        </Card>

        {/* Pie + Gauge */}
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3}>
          <Card sx={{ flex: 1, boxShadow: 0, border: `1px solid ${PALETTE.border}`,
                      borderTop: `3px solid ${PALETTE.secondary}` }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: PALETTE.accent, fontWeight: 'bold' }}>
                Report Category Share
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Distribution of report requests by category for the current reporting period.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <PieChart
                  series={[{
                    data: [
                      { id: 0, value: 14, label: 'Sales',     color: PALETTE.primary   },
                      { id: 1, value: 10, label: 'Users',     color: PALETTE.secondary },
                      { id: 2, value: 8,  label: 'Inventory', color: PALETTE.accent    },
                      { id: 3, value: 6,  label: 'Finance',   color: '#C9A0AC'         },
                    ],
                  }]}
                  width={280}
                  height={220}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1, boxShadow: 0, border: `1px solid ${PALETTE.border}`,
                      borderTop: `3px solid ${PALETTE.accent}` }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: PALETTE.accent, fontWeight: 'bold' }}>
                Completion Rate
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Current percentage of reports completed on time based on the latest reporting cycle.
              </Typography>
              <Box sx={{ minHeight: 220, display: 'flex', alignItems: 'center',
                         justifyContent: 'center' }}>
                <Gauge
                  width={180}
                  height={180}
                  value={78}
                  sx={{
                    '& .MuiGauge-valueText': { fill: PALETTE.accent },
                    '& .MuiGauge-referenceArc': { fill: PALETTE.light },
                    '& .MuiGauge-valueArc': { fill: PALETTE.primary },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Stack>

        {/* Data Grid */}
        <Card sx={{ boxShadow: 0, border: `1px solid ${PALETTE.border}`,
                    borderTop: `3px solid ${PALETTE.primary}` }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: PALETTE.accent, fontWeight: 'bold' }}>
              User Data
            </Typography>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
              sx={{
                border: 'none',
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: PALETTE.accent,
                  color: '#fff',
                  fontWeight: 'bold',
                },
                '& .MuiDataGrid-columnHeader .MuiSvgIcon-root': { color: '#fff' },
                '& .MuiDataGrid-row:nth-of-type(even)': { backgroundColor: PALETTE.light },
                '& .MuiDataGrid-row:hover': { backgroundColor: '#f3e0e6' },
                '& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus': { outline: 'none' },
                '& .MuiCheckbox-root.Mui-checked': { color: PALETTE.accent },
              }}
            />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default ReportsPage;