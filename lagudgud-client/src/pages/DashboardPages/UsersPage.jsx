import { useState, useMemo } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import usersSeed from '../../data/users.json?raw';

const PALETTE = {
  primary:   '#A89699',
  secondary: '#F3A4BB',
  accent:    '#643F48',
  light:     '#F9F0F3',
  border:    '#e0e0e0',
};

const roles    = ['admin', 'editor', 'viewer'];
const genders  = ['male', 'female', 'other'];
const statuses = ['active', 'inactive'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  role: 'editor',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName:     String(user.firstName     ?? '').trim(),
        lastName:      String(user.lastName      ?? '').trim(),
        age:           String(user.age           ?? '').trim(),
        gender:        genders.includes(String(user.gender ?? '').trim().toLowerCase())
                         ? String(user.gender ?? '').trim().toLowerCase() : '',
        contactNumber: String(user.contactNumber ?? '').trim(),
        email:         String(user.email         ?? '').trim().toLowerCase(),
        role:          roles.includes(String(user.role ?? '').trim().toLowerCase())
                         ? String(user.role ?? '').trim().toLowerCase() : 'editor',
        username:      String(user.username      ?? '').trim().toLowerCase(),
        password:      String(user.password      ?? ''),
        address:       String(user.address       ?? '').trim(),
        isActive:      typeof user.isActive === 'boolean' ? user.isActive : true,
      })),
      error: '',
    };
  } catch {
    return {
      users: [],
      error: 'Unable to read users from src/data/users.json.',
    };
  }
};

const seed = loadUsers();

const UsersPage = () => {
  const theme    = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [users, setUsers]               = useState(seed.users);
  const [modal, setModal]               = useState({ open: false, id: null });
  const [form,  setForm]                = useState(blankForm);
  const [errors, setErrors]             = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // ── Search & filter state ────────────────────────────────────
  const [search,       setSearch]       = useState('');
  const [filterRole,   setFilterRole]   = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // ── Derived filtered list ────────────────────────────────────
  const filteredUsers = useMemo(() => {
    const q = search.trim().toLowerCase();
    return users.filter((u) => {
      const matchesSearch =
        !q ||
        u.firstName.toLowerCase().includes(q) ||
        u.lastName.toLowerCase().includes(q)  ||
        u.email.toLowerCase().includes(q)     ||
        u.username.toLowerCase().includes(q);

      const matchesRole   = !filterRole   || u.role   === filterRole;
      const matchesGender = !filterGender || u.gender === filterGender;
      const matchesStatus =
        !filterStatus ||
        (filterStatus === 'active' ? u.isActive : !u.isActive);

      return matchesSearch && matchesRole && matchesGender && matchesStatus;
    });
  }, [users, search, filterRole, filterGender, filterStatus]);

  const clearFilters = () => {
    setSearch('');
    setFilterRole('');
    setFilterGender('');
    setFilterStatus('');
  };

  // ── Form helpers ─────────────────────────────────────────────
  const resetForm = () => { setForm({ ...blankForm }); setErrors({}); };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user ? { ...blankForm, ...user } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // ── Validation (Enhancement 3) ───────────────────────────────
  const validate = () => {
    const nextErrors = {};
    const email    = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();

    // Required fields
    [
      ['firstName',     'First name'],
      ['lastName',      'Last name'],
      ['age',           'Age'],
      ['gender',        'Gender'],
      ['contactNumber', 'Contact number'],
      ['email',         'Email'],
      ['role',          'Role'],
      ['username',      'Username'],
      ['password',      'Password'],
      ['address',       'Address'],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    // Age — numbers only
    if (!nextErrors.age && !/^\d+$/.test(form.age.trim())) {
      nextErrors.age = 'Age must be a number only.';
    }
    if (!nextErrors.age) {
      const ageNum = Number(form.age.trim());
      if (ageNum < 1 || ageNum > 120) {
        nextErrors.age = 'Age must be between 1 and 120.';
      }
    }

    // Contact number — exactly 11 digits
    if (!nextErrors.contactNumber && !/^\d{11}$/.test(form.contactNumber.trim())) {
      nextErrors.contactNumber = 'Contact number must be exactly 11 digits.';
    }

    // Email format
    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    // Email uniqueness
    if (!nextErrors.email &&
        users.some((u) => u.id !== modal.id && u.email === email)) {
      nextErrors.email = 'Email address already exists.';
    }

    // Username — no spaces
    if (!nextErrors.username && /\s/.test(form.username)) {
      nextErrors.username = 'Username must not contain spaces.';
    }
    // Username uniqueness
    if (!nextErrors.username &&
        users.some((u) => u.id !== modal.id && u.username === username)) {
      nextErrors.username = 'Username already exists.';
    }

    // Password — at least 8 characters
    if (!nextErrors.password && form.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return; }

    const nextUser = {
      firstName:     form.firstName.trim(),
      lastName:      form.lastName.trim(),
      age:           form.age.trim(),
      gender:        form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email:         form.email.trim().toLowerCase(),
      role:          form.role.trim().toLowerCase(),
      username:      form.username.trim().toLowerCase(),
      password:      form.password,
      address:       form.address.trim(),
      isActive:      form.isActive,
    };

    setUsers((prev) =>
      modal.id
        ? prev.map((u) => (u.id === modal.id ? { ...u, ...nextUser } : u))
        : [
            ...prev,
            {
              id: prev.reduce((max, u) => Math.max(max, Number(u.id) || 0), 0) + 1,
              ...nextUser,
            },
          ]
    );
    closeModal();
  };

  const toggleStatus = (id) =>
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u))
    );

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value:      form[name],
    onChange:   handleChange,
    error:      Boolean(errors[name]),
    helperText: errors[name],
    fullWidth:  true,
    ...extra,
  });

  // ── Columns ──────────────────────────────────────────────────
  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'fullName', headerName: 'Full Name', flex: 1, minWidth: 170,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim(),
    },
    { field: 'username',      headerName: 'Username',       minWidth: 150 },
    { field: 'age',           headerName: 'Age',            width: 90  },
    {
      field: 'gender', headerName: 'Gender', minWidth: 110,
      valueGetter: (_, row) => labelize(row.gender),
    },
    { field: 'contactNumber', headerName: 'Contact Number', minWidth: 160 },
    { field: 'email',         headerName: 'Email',          flex: 1.1, minWidth: 220 },
    {
      field: 'role', headerName: 'Role', minWidth: 120,
      valueGetter: (_, row) => labelize(row.role),
    },
    {
      field: 'status', headerName: 'Status', minWidth: 120, sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          sx={row.isActive
            ? { bgcolor: PALETTE.secondary, color: PALETTE.accent, fontWeight: 'bold' }
            : { bgcolor: PALETTE.light,     color: PALETTE.primary, border: `1px solid ${PALETTE.primary}` }}
        />
      ),
    },
    {
      field: 'actions', headerName: 'Actions', minWidth: 220,
      sortable: false, filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button
            size="small" variant="outlined"
            onClick={() => openModal(row)}
            sx={{ borderColor: PALETTE.primary, color: PALETTE.accent,
                  '&:hover': { borderColor: PALETTE.accent, bgcolor: PALETTE.light } }}
          >
            Edit
          </Button>
          <Button
            size="small" variant="contained"
            onClick={() => toggleStatus(row.id)}
            sx={{
              bgcolor: row.isActive ? PALETTE.primary : PALETTE.accent,
              '&:hover': { bgcolor: row.isActive ? PALETTE.accent : PALETTE.primary },
            }}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  const hasActiveFilters = search || filterRole || filterGender || filterStatus;

  // ────────────────────────────────────────────────────────────
  return (
    <Box sx={{ width: '100%', minWidth: 0 }}>

      {/* ── Page header ── */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between',
                 alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: PALETTE.accent }}>
          Users
        </Typography>
        <Button
          variant="contained"
          onClick={() => openModal()}
          sx={{
            bgcolor: PALETTE.accent,
            '&:hover': { bgcolor: PALETTE.primary },
            width: { xs: '100%', sm: 'auto' },
            borderRadius: 5,
            height: 42, 
            minWidth: 'auto',
            px: 3,
            mr: 2
          }}
        >
          Add User
        </Button>
      </Box>

      {seed.error && (
        <Alert severity="error" sx={{ mb: 2 }}>{seed.error}</Alert>
      )}

      {/* ── Enhancement 2: Search + Filters ── */}
      <Paper
        sx={{
          p: 2, mb: 2,
          border: `1px solid ${PALETTE.border}`,
          borderTop: `3px solid ${PALETTE.primary}`,
          boxShadow: 0,
        }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap">
          {/* Search bar */}
          <TextField
            placeholder="Search by name, email or username…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="small"
            sx={{ flex: 2, minWidth: 220 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: PALETTE.primary }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Role filter */}
          <TextField
            select
            label="Role"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            size="small"
            sx={{ flex: 1, minWidth: 130 }}
          >
            <MenuItem value="">All Roles</MenuItem>
            {roles.map((r) => (
              <MenuItem key={r} value={r}>{labelize(r)}</MenuItem>
            ))}
          </TextField>

          {/* Gender filter */}
          <TextField
            select
            label="Gender"
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
            size="small"
            sx={{ flex: 1, minWidth: 130 }}
          >
            <MenuItem value="">All Genders</MenuItem>
            {genders.map((g) => (
              <MenuItem key={g} value={g}>{labelize(g)}</MenuItem>
            ))}
          </TextField>

          {/* Status filter */}
          <TextField
            select
            label="Status"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            size="small"
            sx={{ flex: 1, minWidth: 130 }}
          >
            <MenuItem value="">All Statuses</MenuItem>
            {statuses.map((s) => (
              <MenuItem key={s} value={s}>{labelize(s)}</MenuItem>
            ))}
          </TextField>

          {/* Clear button — only show when a filter is active */}
          {hasActiveFilters && (
            <Button
              variant="outlined"
              onClick={clearFilters}
              size="small"
              sx={{ borderColor: PALETTE.primary, color: PALETTE.accent,
                    '&:hover': { bgcolor: PALETTE.light, borderColor: PALETTE.accent },
                    alignSelf: 'center' }}
            >
              Clear
            </Button>
          )}
        </Stack>

        {/* Result count */}
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
          Showing {filteredUsers.length} of {users.length} user{users.length !== 1 ? 's' : ''}
        </Typography>
      </Paper>

      {/* ── Data Grid ── */}
      <Paper sx={{ p: { xs: 1.5, sm: 2 }, minWidth: 0, overflow: 'hidden',
                   border: `1px solid ${PALETTE.border}`, boxShadow: 0 }}>
        {filteredUsers.length ? (
          <Box sx={{ height: { xs: 460, sm: 520 }, width: '100%', minWidth: 0 }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
              sx={{
                minWidth: 0,
                border: 'none',
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: PALETTE.accent,
                  color: '#fff',
                  fontWeight: 'bold',
                },
                '& .MuiDataGrid-columnHeader .MuiSvgIcon-root': { color: '#fff' },
                '& .MuiDataGrid-row:nth-of-type(even)': { backgroundColor: PALETTE.light },
                '& .MuiDataGrid-row:hover': { backgroundColor: '#f3e0e6' },
                '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': { outline: 'none' },
                '& .MuiDataGrid-footerContainer': { borderTop: `1px solid ${PALETTE.border}` },
              }}
            />
          </Box>
        ) : (
          <Alert severity="info" sx={{ border: `1px solid ${PALETTE.secondary}` }}>
            {hasActiveFilters
              ? 'No users match your search or filter criteria. Try clearing the filters.'
              : 'No users found. Use Add User to create your first record.'}
          </Alert>
        )}
      </Paper>

      {/* ── Add / Edit Modal ── */}
      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle
            sx={{
              bgcolor: PALETTE.accent,
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            {modal.id ? 'Edit User' : 'Add User'}
          </DialogTitle>

          <DialogContent dividers sx={{ px: { xs: 2, sm: 3 } }}>
            <Stack spacing={2} sx={{ pt: 1 }}>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName',  'Last Name')}  />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                {/* Age — hint: numbers only */}
                <TextField
                  {...fieldProps('age', 'Age')}
                  helperText={errors.age || 'Numbers only (e.g. 25)'}
                />
                <TextField {...fieldProps('gender', 'Gender', { select: true })}>
                  {genders.map((g) => (
                    <MenuItem key={g} value={g}>{labelize(g)}</MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                {/* Contact number — hint: 11 digits */}
                <TextField
                  {...fieldProps('contactNumber', 'Contact Number')}
                  helperText={errors.contactNumber || 'Must be exactly 11 digits (e.g. 09123456789)'}
                />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('role', 'Role', { select: true })}>
                  {roles.map((r) => (
                    <MenuItem key={r} value={r}>{labelize(r)}</MenuItem>
                  ))}
                </TextField>
                {/* Username — hint: no spaces */}
                <TextField
                  {...fieldProps('username', 'Username')}
                  helperText={errors.username || 'No spaces allowed'}
                />
              </Stack>

              {/* Password — hint: min 8 chars */}
              <TextField
                {...fieldProps('password', 'Password', {
                  type: showPassword ? 'text' : 'password',
                  helperText: errors.password || 'Minimum 8 characters',
                  slotProps: {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setShowPassword((p) => !p)}
                            onMouseDown={(e) => e.preventDefault()}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  },
                })}
              />

              <TextField {...fieldProps('address', 'Address', { multiline: true, rows: 3 })} />

              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': { color: PALETTE.accent },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        bgcolor: PALETTE.primary,
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ color: form.isActive ? PALETTE.accent : 'text.secondary' }}>
                    {form.isActive ? 'User status: Active' : 'User status: Inactive'}
                  </Typography>
                }
              />
            </Stack>
          </DialogContent>

          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button
              onClick={closeModal}
              sx={{ color: PALETTE.accent,
                    '&:hover': { bgcolor: PALETTE.light } }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: PALETTE.accent, '&:hover': { bgcolor: PALETTE.primary } }}
            >
              {modal.id ? 'Update User' : 'Save User'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;