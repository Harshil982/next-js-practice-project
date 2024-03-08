"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getPostById } from "@/app/Services/blog-api-service";
import { Loader } from "@/app/Common/loader";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { getProductById } from "@/app/Services/products-api-service";

const page = () => {
  const { productId } = useParams();
  const CustomChip = styled(Chip)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
  }));
  const [data, setData] = useState<any>();
  const [isLoading, setisLoading] = useState<any>(true);

  useEffect(() => {
    productId &&
      getProductById(Number(productId))
        .then((res: any) => {
          setData(res?.data);
          setisLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setisLoading(false);
        });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : data ? (
        <div style={{ margin: "5px 20px" }}>
          <h2>{data?.title}</h2>
          {/* <Stack direction="row" spacing={1}>
            {data?.tags?.map((tag: any, index: any) => {
              return <CustomChip label={tag} key={index} />;
            })}
          </Stack>
          <Stack direction="row" spacing={1} alignItems={"center"} mt={3}>
            <p>Total Reactions :</p>
            <Chip label={data?.reactions} style={{ marginLeft: "10px" }} />
          </Stack> */}

          <p>{data?.description}</p>
        </div>
      ) : (
        "Not Found"
      )}
    </div>
  );
};

export default page;
