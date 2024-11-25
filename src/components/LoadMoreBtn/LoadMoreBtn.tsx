import css from "./LoadMoreBtn.module.css";
import { FC } from "react";

interface LoadMoreBtnProps {
  onClick: () => void;
}
const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.loadMoreBtn}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
