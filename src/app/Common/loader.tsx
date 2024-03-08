import React from "react";
import { CircularProgress } from "@mui/material";
import styles from "./common.module.css";

export const Loader = () => {
  return (
    <div className={styles.commonLoader}>
      <CircularProgress size={50} />
    </div>
  );
};
