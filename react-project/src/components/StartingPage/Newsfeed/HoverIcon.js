import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import styles from "./HoverIcon.module.scss";

export default function HoverIcon() {
  return (
    <Tooltip title="Private Info!">
      <IconButton>
        <InfoRoundedIcon className={styles.hoverIcon}/>
      </IconButton>
    </Tooltip>
  );
}