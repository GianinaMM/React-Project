import styles from "./Leftpage.module.scss";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Grid from "@mui/material/Grid";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import FolderSpecialRoundedIcon from "@mui/icons-material/FolderSpecialRounded";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RecipeReviewCard from "./RecipeReviewCard";
import { useState } from "react";
import Button from "@mui/material/Button";

export function Leftpage() {
  const [showCard, setShowCard] = useState(false);

  const style = {
    right: "8px",
  };

  return (
    <aside className={styles.leftContent}>
      <ul className={styles.menuList}>
        <li className={styles.textStyle}>
          <Grid item xs={1} className={styles.iconStyle}>
            <HomeRoundedIcon />
          </Grid>
          <span className={styles.textStyle}>Home</span>
        </li>
        <li className={styles.textStyle}>
          <img
            src={require("./images/profile.png")}
            alt="Profile Picture"
            className={styles.profilePicture}
          ></img>
          <span className={styles.textStyle}>Profile Picture</span>
        </li>

        <li className={styles.textStyle}>
          <Grid item xs={1} className={styles.iconStyle}>
            <MenuRoundedIcon />
          </Grid>
          <span className={styles.textStyle}>Menu</span>
        </li>

        <li className={styles.textStyle}>
          <Grid item xs={1} className={styles.iconStyle}>
            <StoreRoundedIcon />
          </Grid>
          <span className={styles.textStyle}>Marketplace</span>
        </li>

        <li className={styles.textStyle}>
          <Grid item xs={1} className={styles.iconStyle}>
            <SportsEsportsRoundedIcon />
          </Grid>
          <span className={styles.textStyle}>Gaming</span>
        </li>
        <li className={styles.textStyle}>
          <Grid item xs={1} className={styles.iconStyle}>
            <PeopleRoundedIcon />
          </Grid>
          <span className={styles.textStyle}>Groups</span>
        </li>
        <li className={styles.textStyle}>
          <Grid item xs={1} className={styles.iconStyle}>
            <EventRoundedIcon />
          </Grid>
          <span className={styles.textStyle}>Events</span>
        </li>
        <li className={styles.textStyle}>
          <Grid item xs={1} className={styles.iconStyle}>
            <FolderSpecialRoundedIcon />
          </Grid>
          <span className={styles.textStyle}>Saved</span>
        </li>

        <Button
          variant="text"
          className={styles.textStyle}
          style={style}
          onClick={() => setShowCard(!showCard)}
        >
          <Grid item xs={1} className={styles.postIcon}>
            <PostAddIcon />
          </Grid>
          {showCard ? "Hide" : "Show"} Recent post
        </Button>
        {showCard && <RecipeReviewCard />}
      </ul>
    </aside>
  );
}
