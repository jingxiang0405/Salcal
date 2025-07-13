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
                            label="姓名"
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
                                label="薪水計算方式"
                                onChange={(e) => setWageScheme(e.target.value)}
                            >
                                <MenuItem value="hour">時薪制</MenuItem>
                                <MenuItem value="month">月薪制</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="每單位薪水"
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
                            儲存
                        </Button>
                        <Button size="small" onClick={() => setIsEditing(false)}>
                            取消
                        </Button>
                    </>
                ) : (
                    <Button size="small" onClick={() => setIsEditing(true)}>
                        編輯
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default EmployeeBox;
