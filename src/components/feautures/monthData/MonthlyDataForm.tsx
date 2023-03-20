import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Button, TextField } from '@mui/material';

function MonthlyDataForm(props: any) {
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      data1: data.get('data1'),
      data2: data.get('data2'),
      data3: data.get('data3'),
    });
  };


    return (
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="data1"
              label="Data 1"
              name="data1"              
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="data2"
              label="Data2"
              name="data2"              
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="data3"
              label="data3"
              name="data3"              
              autoFocus
            />
             <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Data
            </Button>
      </Box>
    );
  }

  export default MonthlyDataForm;