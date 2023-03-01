import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { Button } from "@mui/material";

export function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toggleAuth = () => {
    isLoggedIn ? navigate("/") : navigate("/auth");
    setIsLoggedIn((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <header>
        <Link to="/">
          <div className={styles.logo}>Friends finder</div>
        </Link>

        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              {!isLoggedIn && <NavLink to="/">Profile</NavLink>}
            </li>

            <li className={styles.menuItem}>
              {!isLoggedIn && <NavLink to="/friends">Friends</NavLink>}
            </li>

            <li className={styles.menuItem}>
              {!isLoggedIn && <NavLink to="/chat">Chat</NavLink>}
            </li>

            <li className={styles.menuItem}>
              
              <Button variant="contained" className={styles.buttonStyle} onClick={toggleAuth}>
                {isLoggedIn ? "Login" : "Logout"}
          </Button>
             
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
