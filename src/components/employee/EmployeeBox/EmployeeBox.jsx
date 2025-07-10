import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';

const EmployeeBox = ({ employee, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(employee.name);
  const [wageScheme, setWageScheme] = useState(employee.wageScheme);
  const [wage, setWage] = useState(employee.wage);

  const handleSave = () => {
    onSave({ ...employee, name, wageScheme, wage });
    setIsEditing(false);
  };

  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        {isEditing ? (
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Wage Scheme</InputLabel>
              <Select
                value={wageScheme}
                label="Wage Scheme"
                onChange={(e) => setWageScheme(e.target.value)}
              >
                <MenuItem value="hour">Hour</MenuItem>
                <MenuItem value="month">Month</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Wage"
              variant="outlined"
              type="number"
              fullWidth
              margin="normal"
              value={wage}
              onChange={(e) => setWage(e.target.value)}
            />
          </Box>
        ) : (
          <>
            <Typography variant="h5" component="div">
              {employee.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {employee.wageScheme}
            </Typography>
            <Typography variant="body2">{employee.wage}</Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        {isEditing ? (
          <>
            <Button size="small" onClick={handleSave}>
              Save
            </Button>
            <Button size="small" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </>
        ) : (
          <Button size="small" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default EmployeeBox;