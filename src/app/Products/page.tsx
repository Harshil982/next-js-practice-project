"use client";

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Loader } from "../Common/loader";
import Typography from "@mui/material/Typography";
import { getProducts } from "../Services/products-api-service";
import Image from "next/image";
import styles from "./product.module.css";
import style from "./../Blog/blog.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Head from "next/head";

const page = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    minHeight: "400px",
  }));
  const ReadDetailButton = styled(Button)(({ theme }) => ({
    ...theme.typography.body2,
    padding: "8px 30px",
    borderRadius: "20px",
    textTransform: "none",
  }));
  const [Products, setProducts] = useState<any>([]);
  const [isLoading, setisLoading] = useState<any>(true);
  useEffect(() => {
    getProducts()
      .then((res: any) => {
        setProducts(res?.data?.products);
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
        <title>Products</title>
      </Head>
      <Typography variant="h4">Products</Typography>
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ flexGrow: 1 }} mt={3}>
          <Grid container spacing={2} direction="row" alignItems="stretch">
            {Products.map((items: any, index: any) => {
              return (
                <Grid item xs={12} md={6} lg={4} sm={6} xl={3} key={index}>
                  <Link
                    href={`/Products/${items.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Item className={style.commonCard}>
                      <Image
                        src={items?.thumbnail}
                        alt={items?.title}
                        height={100}
                        width={100}
                        className={styles.productImage}
                      />
                      <div className={style.buttonDiv}>
                        <Link
                          href={`/Products/${items.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <ReadDetailButton variant="contained">
                            View Product <ArrowForwardIcon fontSize="small" />
                          </ReadDetailButton>
                        </Link>
                      </div>
                      <h2>{items?.title}</h2>
                      <p>{items?.description}</p>
                    </Item>
                  </Link>
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
