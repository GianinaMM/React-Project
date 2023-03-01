import { Link, useNavigate } from 'react-router-dom';
import styles from "./UserProfile.module.scss";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Cover from './Cover';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import CoverNavigation from './CoverNavigation';
import EditProfile from "./EditProfile";
import UserInput from "./UserInput";
import ButtonsGroup from './ButtonsGroup';


export function UserProfile() {
    return <>
    <main className={styles.main}>
    <Button variant="outlined" color="error" className={styles.link}>
    <Link to='/'>Back</Link>
      </Button>
    
    <div className={styles.profile}>
        
        <img
              src={require("./images/post0.jpg")}
              alt="Profile Picture"
              className={styles.cover}
            ></img>


            <img
              src={require("./images/profile.png")}
              alt="Profile Picture"
              className={styles.profilePictureImg}
            ></img> 
            

<Cover></Cover>
<CameraAltRoundedIcon className={styles.cameraStyle}></CameraAltRoundedIcon>
<CoverNavigation className={styles.coverNagivation}></CoverNavigation>
<EditProfile></EditProfile>
<img
              src={require("./images/icon3.png")}
              alt="Friends"
              className={styles.icon1}
            ></img> 

<img
              src={require("./images/icon2.jfif")}
              alt="Friends"
              className={styles.icon2}
            ></img> 
<h2 className={styles.h2Style}>UserName</h2>
<p className={styles.pStyle}>1,5 K Friends</p>

<div className={styles.containerPhotos}>

<span className={styles.spanStyle}>Photos</span>

<Link to='/profile' className={styles.linkStyle}>See all photos</Link>


<div className={styles.photos}>
<img
              src={require("./images/p1.jfif")}
              alt="Friends"
              className={styles.photoStyle}
            ></img> 

<img
              src={require("./images/p2.jpg")}
              alt="Friends"
              className={styles.photoStyle}
            ></img> 

<img
              src={require("./images/p3.jpg")}
              alt="Friends"
              className={styles.photoStyle}
            ></img> 
            <img
              src={require("./images/p4.jpeg")}
              alt="Friends"
              className={styles.photoStyle}
            ></img> 
             <img
              src={require("./images/p5.jfif")}
              alt="Friends"
              className={styles.photoStyle}
            ></img> 

<img
              src={require("./images/p6.jfif")}
              alt="Friends"
              className={styles.photoStyle}
            ></img> 
</div>

    </div>


    <div className={styles.inputContainter}>

      <div className={styles.inputField}>
    <img
              src={require("./images/profile.png")}
              alt="Profile Picture"
              className={styles.userInputPhoto}
            ></img> 
            
<UserInput></UserInput>

<ButtonsGroup></ButtonsGroup>
</div>
    </div>


    <div className={styles.presentationContainter}>


    </div>
    <hr></hr>
    </div>
    </main>
    </>
}