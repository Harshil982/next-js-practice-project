"use client";
import { useEffect, useState } from "react";
import { notFound, redirect } from "next/navigation";
import { getPostById, postData } from "@/app/Services/blog-api-service";
import { Loader } from "@/app/Common/loader";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { wrap } from "module";

const page = ({ params }: { params: { blogNo: string | number } }) => {
  const { blogNo } = params;
  const CustomChip = styled(Chip)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
  }));
  const [data, setData] = useState<any>();
  const [isLoading, setisLoading] = useState<any>(true);

  useEffect(() => {
    blogNo &&
      getPostById(Number(blogNo))
        .then((res: any) => {
          setData(res?.data);
          setisLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setisLoading(false);
          notFound();
        });
  }, []);

  const handlePostdata = () => {
    postData()
      .then((res: any) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : data ? (
        <div style={{ margin: "5px 20px" }}>
          <h2>{data?.title}</h2>
          <Stack direction="row" spacing={1} flexWrap={"wrap"}>
            {data?.tags?.map((tag: any, index: any) => {
              return <CustomChip label={tag} key={index} />;
            })}
          </Stack>
          <Stack direction="row" spacing={1} alignItems={"center"} mt={3}>
            <p>Total Reactions :</p>
            <Chip label={data?.reactions} style={{ marginLeft: "10px" }} />
          </Stack>

          <p>{data?.body}</p>

          <button onClick={handlePostdata}>Post Data</button>
        </div>
      ) : (
        "Not Found"
      )}
    </div>
  );
};

export default page;
