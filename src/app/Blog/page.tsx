"use client";

import React, { useEffect, useState } from "react";
import { getPosts } from "../Services/blog-api-service";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Loader } from "../Common/loader";
import Typography from "@mui/material/Typography";
import style from "./blog.module.css";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Head from "next/head";

const page = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    minHeight: "300px",
  }));
  const ReadDetailButton = styled(Button)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "8px 30px",
    borderRadius: "20px",
    textTransform: "none",
  }));
  const [data, setData] = useState<any>([]);
  const [isLoading, setisLoading] = useState<any>(true);
  useEffect(() => {
    getPosts()
      .then((res: any) => {
        setData(res?.data?.posts);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Blogs</title>
      </Head>
      <Typography variant="h4">Blogs</Typography>
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ flexGrow: 1 }} mt={3}>
          <Grid container spacing={2} direction="row" alignItems="stretch">
            {data.map((items: any, index: any) => {
              return (
                <Grid item xs={12} md={6} lg={4} sm={6} xl={4} key={index}>
                  <Item className={style.commonCard}>
                    <h2>{items?.title}</h2>
                    <p>{items?.body}</p>
                    <div className={style.buttonDiv}>
                      <Link
                        href={{
                          pathname: `/Blog/${items.id}`,
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <ReadDetailButton variant="outlined">
                          Read Detail <ArrowForwardIcon fontSize="small" />
                        </ReadDetailButton>
                      </Link>
                    </div>
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default page;
