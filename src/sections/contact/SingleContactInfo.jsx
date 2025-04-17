import React from "react";

// eslint-disable-next-line no-unused-vars
const SingleContactInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};

export default SingleContactInfo;
