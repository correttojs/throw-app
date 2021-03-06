import React from "react";

export default function Problem() {
  return (
    <>
      <h1>Problem!</h1>
    </>
  );
}

const pTimeout = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

export const getServerSideProps = async () => {
  await pTimeout();
  const error = new Error("Generic");
  console.log({ level: "error", message: error });
  throw error;
};
