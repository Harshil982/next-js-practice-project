"use client";
import React from "react";
import { TextField, Button, Stack } from "@mui/material";
import style from "./form.module.css";

export default function page() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <form action={(e) => handleSubmit(e)}>
        <Stack
          sx={{
            width: "320px",
          }}
          spacing={2}
          margin={"auto"}
          className={style.formDesign}
        >
          <TextField
            variant="standard"
            label="Username"
            onChange={(e) => console.log(e.target.value)}
            required
          />
          <TextField
            variant="standard"
            type="password"
            label="Password"
            required
          />

          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: "50px" }}
          >
            submit
          </Button>
        </Stack>
      </form>
    </div>
  );
}
