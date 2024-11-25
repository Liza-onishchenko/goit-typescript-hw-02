import css from "./ErrorMessage.module.css";
import { FC } from "react";

interface ErrorMessageProps {
  message: string;
}
const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={css.errorContainer}>
      <p>
        Opps, some error occured &quot;{message}&quot;...Please, try again
        later.
      </p>
    </div>
  );
};

export default ErrorMessage;
