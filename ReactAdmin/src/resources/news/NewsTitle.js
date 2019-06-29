
import React from "react";

export const NewsTitle = ({ record }) => {
    return <span>News {record ? `"${record.title}"` : ""}</span>;
  };