import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from "./CoverNavigation.module.scss";

export default function CoverNavigation() {

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} className={styles.coverNavigation}>
      <BottomNavigationAction className={styles.iconStyle}
        label="Recents posts"
        value="recents posts"
        icon={<RestoreIcon className={styles.iconStyle}/>}
      />
      <BottomNavigationAction className={styles.iconStyle}
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon className={styles.iconStyle}/>}
      />
      <BottomNavigationAction className={styles.iconStyle}
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon className={styles.iconStyle} />}
      />
      <BottomNavigationAction label="Pictures" value="pictures" icon={<FolderIcon className={styles.iconStyle}/>} className={styles.iconStyle}/>
    </BottomNavigation>
  );
}