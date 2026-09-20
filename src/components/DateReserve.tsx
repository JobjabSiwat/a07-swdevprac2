'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

const inputStyle = {
    '& .MuiInput-underline:after': { borderBottomColor: '#b8860b' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#b8860b' },
};

export default function DateReserve() {
    const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
    const [venue, setVenue] = useState<string>('Bloom');

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex flex-col gap-5 w-full">
                <TextField
                    variant="standard"
                    name="Name-Lastname"
                    label="Name-Lastname"
                    fullWidth
                    sx={inputStyle}
                />
                <TextField
                    variant="standard"
                    name="Contact-Number"
                    label="Contact-Number"
                    fullWidth
                    sx={inputStyle}
                />
                <DatePicker
                    className="w-full"
                    value={bookingDate}
                    onChange={(newValue) => setBookingDate(newValue)}
                    desktopModeMediaQuery="@media (min-width:0px)"
                    slotProps={{
                        textField: {
                            variant: 'standard',
                            sx: inputStyle,
                        },
                    }}
                />
                <Select
                    variant="standard"
                    id="venue"
                    value={venue}
                    onChange={(e: SelectChangeEvent) => setVenue(e.target.value)}
                    fullWidth
                    sx={inputStyle}
                >
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
            </div>
        </LocalizationProvider>
    );
}