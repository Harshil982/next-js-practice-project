import Image from "next/image";
import styles from "./page.module.css";
import Image1 from "./../assets/Image1.jpg";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <main>
      <Typography variant="h4">Home</Typography>
      <p>This is main Page</p>
    </main>
  );
}
