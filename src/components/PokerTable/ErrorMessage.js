import React, { useEffect } from "react";
import { useTable } from "../../context/TableContext";
import { ErrorContainer } from "./styles";

const ErrorMessage = () => {
  const { error, setError } = useTable();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    const lifeTime = setTimeout(() => {
      error && setError(undefined);
    }, 7000);

    return () => {
      clearTimeout(lifeTime);
    };
  }, [setError, error]);

  return (
    <ErrorContainer
      transition={{ repeat: Infinity, duration: 0.5 }}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {error}
    </ErrorContainer>
  );
};

export default ErrorMessage;
