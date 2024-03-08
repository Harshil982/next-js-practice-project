import React from "react";
import { CircularProgress, Stack, Skeleton } from "@mui/material";

export default function page() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      {/* <CircularProgress size={50} /> */}
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={50} height={50} />
        <Skeleton variant="text" sx={{ fontSize: "2.5rem" }} />
        <Skeleton variant="rectangular" width={"100%"} height={180} />
        <Skeleton
          variant="rounded"
          width={"100%"}
          height={290}
          style={{ marginTop: "15px" }}
        />
      </Stack>
    </div>
  );
}
