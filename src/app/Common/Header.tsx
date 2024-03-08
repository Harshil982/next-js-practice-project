"use client";
import React from "react";
import { Stack } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="main-header">
      <Stack
        direction="row"
        spacing={2}
        style={{ paddingLeft: "1rem" }}
        alignItems={"center"}
      >
        <Link href={`/`} className={pathName === "/" ? "active-link" : ""}>
          Home
        </Link>
        <Link
          href={`/Blog`}
          className={pathName.includes("/Blog") ? "active-link" : ""}
        >
          Blogs
        </Link>
        <Link
          href={`/Products`}
          className={pathName.includes("/Products") ? "active-link" : ""}
        >
          Products
        </Link>
        <Link
          href={`/ComplexDashboard`}
          className={pathName === "/ComplexDashboard" ? "active-link" : ""}
        >
          Dashboard
        </Link>
      </Stack>
    </div>
  );
}
