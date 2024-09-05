import React from "react";

export default function PageDetail({ params }) {
  const id = params.id;
  return <div>Product: {id}</div>;
}
