import styles from "./Rightpage.module.scss";
import { Button } from "@mui/material";
import { style } from "@mui/system";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import VideoCameraBackRoundedIcon from "@mui/icons-material/VideoCameraBackRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

export function Rightpage() {
  return (
    <aside className={styles.rightContent}>
      <div className={styles.contactSection}>
        <p className={styles.someAdvertisement}>Sponsored</p>
        <img
          src={require("./images/emag.jpg")}
          alt="advertisement"
          className={styles.advertisementStyle}
        />
        <span className={styles.advertisementPhoto}> eMAG.ro</span>
        <img
          src={require("./images/curs.jpg")}
          alt="IT"
          className={styles.advertisementStyle}
        />
        <span className={styles.advertisementPhoto}> ITSCHOOL.ro </span>
      </div>
      <hr></hr>

      <div className={styles.contactPictures}>
        <div className={styles.friendRequest}>
          <span>Friends requests </span>
          <span className={styles.seeSection}>See all</span>
          <br />

          <img
            src={require("./images/request.jpg")}
            alt="friendRequest"
            className={styles.friendR}
          />

          <Button variant="contained" className={styles.buttonStyle}>
            Confirm
          </Button>

          <Button variant="contained" className={styles.buttonStyle}>
            Remove
          </Button>
        </div>
      </div>
      <hr></hr>

      {/* <div className={styles.contactPictures}> */}
      <div className={styles.birthday}>Birthdays</div>
      <CakeRoundedIcon className={styles.birthdayIcon}></CakeRoundedIcon>
      <span className={styles.textDecoration}>
        Today is the birthday of <b>Alex M </b> and <b>3</b> others.
      </span>
      {/* </div> */}

      <hr></hr>

      <div className={styles.contactPictures}>
        <span className={styles.constactStyle}>
          Contacts
          <VideoCameraBackRoundedIcon
            className={styles.cameraIcon}
          ></VideoCameraBackRoundedIcon>
          <SearchRoundedIcon className={styles.searchIcon}></SearchRoundedIcon>
          <MoreHorizRoundedIcon
            className={styles.dotsStyle}
          ></MoreHorizRoundedIcon>
        </span>
      </div>

      <div className={styles.contactPictures}>
        <img
          src={require("./images/icon1.jfif")}
          alt="First contact"
          className={styles.firstContact}
        /> 
        <span className={styles.contactStyle}>Contact 1</span>
       
        <img
          src={require("./images/greendot.png")}
          alt="greenDot"
          className={styles.greenDot}
        />  
        
      </div>
     
      <div className={styles.contactPictures}>
        <img
          src={require("./images/icon2.jfif")}
          alt="Second contact"
          className={styles.firstContact}
        />
       <span className={styles.contactStyle}>Contact 2</span>
        <img
          src={require("./images/greendot.png")}
          alt="greenDot"
          className={styles.greenDot}
        />
      </div>

      <div className={styles.contactPictures}>
        <img
          src={require("./images/icon3.png")}
          alt="third contact"
          className={styles.firstContact}
        />
     <span className={styles.contactStyle}>Contact 3</span>
        <img
          src={require("./images/greendot.png")}
          alt="greenDot"
          className={styles.greenDot}
        />
      </div>

      <div className={styles.contactPictures}>
        <img
          src={require("./images/icon4.png")}
          alt="fourth contact"
          className={styles.firstContact}
        />
       <span className={styles.contactStyle}>Contact 4</span>
        <img
          src={require("./images/greendot.png")}
          alt="greenDot"
          className={styles.greenDot}
        />
      </div>
    </aside>
  );
}
