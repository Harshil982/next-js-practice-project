import { Grid, Paper } from "@mui/material";
import React from "react";
export default function ComplexDashboardLayout({
  children,
  table,
  notifications,
  graph,
}: Readonly<{
  children: React.ReactNode;
  table: any;
  notifications: any;
  graph: any;
}>) {
  const commonStyle: React.CSSProperties = {
    background: "lightgrey",
    padding: "15px",
    overflow: "auto",
    // justifyContent: "center",
    // alignItems: "center",
  };
  return (
    <div>
      {children}
      <Grid container spacing={2} mt={1}>
        <Grid item container direction="column" xs={12} sm={6} spacing={2}>
          <Grid item>
            <Paper
              style={{
                height: "278px",
                ...commonStyle,
              }}
            >
              {table}
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              style={{
                height: "278px",
                ...commonStyle,
              }}
              className="check"
            >
              {notifications}
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ height: "600px", ...commonStyle }}>{graph}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
