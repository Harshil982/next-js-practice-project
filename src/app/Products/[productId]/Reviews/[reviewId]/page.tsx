import React from "react";

const page = ({
  params,
}: {
  params: { reviewId: string | number; productId: string | number };
}) => {
  return (
    <div>
      Detail Review {params.reviewId} of Product {params.productId}
    </div>
  );
};

export default page;
