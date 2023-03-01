import * as React from 'react';
import Button from '@mui/material/Button';
import VideoChatRoundedIcon from '@mui/icons-material/VideoChatRounded';
import PermMediaRoundedIcon from '@mui/icons-material/PermMediaRounded';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import Stack from '@mui/material/Stack';
import styles from "./ButtonsGroup.module.scss";


export default function ButtonsGroup() {
  return (
    <div className={styles.buttonsContainer}>
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<VideoChatRoundedIcon />} className={styles.buttonsStyle}>
      Live video clip

      </Button>
      
      <Button variant="outlined" startIcon={<PermMediaRoundedIcon />} className={styles.buttonsStyle}>
       Images/Photos
      </Button>

      <Button variant="outlined" startIcon={<CelebrationRoundedIcon />} className={styles.buttonsStyle}>
      Events 
      </Button>

    </Stack>
    </div>
  );
}