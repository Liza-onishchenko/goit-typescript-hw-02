import css from "./ImageCard.module.css";
import { Image } from "../App/App.types";
import { FC } from "react";

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}
const ImageCard: FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={css.ImageCard} onClick={() => onImageClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
