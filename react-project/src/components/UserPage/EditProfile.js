import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import styles from "./EditProfile.module.scss";

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2} className={styles.addButon}>
      <Button variant="outlined" startIcon={<CreateRoundedIcon />} className={styles.buttonColor}>
        Edit your profile
      </Button>
    </Stack>
  );
}
