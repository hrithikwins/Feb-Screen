import React from "react";
import styles from "./screen.module.css";

const page = () => {
  return (
    <div className={styles.view}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.flexdiv}>
            <span className={styles.name}>Rebecca, 26</span>
            <span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png"
                alt=""
                className={styles.flag}
              />
            </span>
          </div>

          <div className={styles.about}>
            <div className={styles.aboutme}>About me</div>
            <div className={styles.aboutcontent}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </div>
          </div>

          <div className={styles.tags}>
            <div className={styles.tag}>Photography</div>
            <div className={styles.tag}>Movies</div>
            <div className={styles.tag}>Traveling</div>
            <div className={styles.tag}>5+</div>
          </div>

          <div className={styles.button}>Send resqust</div>
        </div>
      </div>
    </div>
  );
};

export default page;
