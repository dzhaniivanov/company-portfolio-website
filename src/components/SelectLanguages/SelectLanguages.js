import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import i18n from "../../i18n";
import InputLabel from '@mui/material/InputLabel';

export default function SelectLanguages() {

    const [language, setLanguage] = React.useState('en');

    const handleChange = (event) => {
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth   >
                <InputLabel id="demo-simple-select-label" variant="filled">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language}
                    label="Language"
                    onChange={handleChange}
                >
                    <MenuItem value={'en'}>EN</MenuItem>
                    <MenuItem value={'bg'}>BG</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
