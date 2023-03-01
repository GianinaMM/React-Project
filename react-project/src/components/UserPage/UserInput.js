import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from "./UserInput.module.scss";

export default function FullWidthTextField() {
  return (
    <Box className={styles.boxStyle}
      sx={{
        width: 500,
        maxWidth: '100%',
     
      }}
    >
      <TextField fullWidth label="What do you thinking about?" id="What do you thinking about?" />
    </Box>
  );
}