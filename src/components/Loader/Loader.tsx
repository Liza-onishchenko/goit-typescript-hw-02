import { RotatingLines } from "react-loader-spinner";
import { FC } from "react";
import css from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={true}
        width="35"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
      />
    </div>
  );
};

export default Loader;
