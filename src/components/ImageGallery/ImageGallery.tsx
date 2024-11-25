import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App.types";
import { FC } from "react";

interface ImageGalleryProps {
  images: Image[] | null;
  onImageClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  if (!images) {
    return null;
  }
  return (
    <>
      <ul className={css.list}>
        {images !== null &&
          images.map((image) => (
            <li key={image.id} className={css.listCard}>
              <ImageCard image={image} onImageClick={onImageClick} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ImageGallery;
