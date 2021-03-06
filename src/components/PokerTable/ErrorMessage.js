import React, { useEffect } from "react";
import { useTable } from "../../context/TableContext";
import { ErrorContainer } from "./styles";

const ErrorMessage = () => {
  const { errors: {error, setError, playWarning} } = useTable();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    playWarning();
    const lifeTime = setTimeout(() => {
      error && setError(undefined);
    }, 7000);

    return () => {
      clearTimeout(lifeTime);
    };
  }, [setError, playWarning, error]);

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
