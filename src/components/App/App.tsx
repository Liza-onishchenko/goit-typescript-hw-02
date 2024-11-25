import axios from "axios";
import { fetchImages } from "../services/api";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Image } from "./App.types";

import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";

function App() {
  const [images, setImages] = useState<Image[] | null>(null); //масив зображень
  const [query, setQuery] = useState<string>(""); //пошуковий термін
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1); //номер стр
  const [totalPages, setTotalPages] = useState<number>(0); //загалю кіл-сть стр
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      if (!query) return;

      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);

        if (data.results.length === 0) {
          setError("No images found for this search term.");
        } else {
          // якщо prevImages є null - пустий []
          setImages((prevImages) => [...(prevImages || []), ...data.results]); // Додаємо нові зображення до старих
          setTotalPages(data.total_pages); // Зберігаємо загальну кількість сторінок
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // обробляє події натискання на зображення
  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  //обробляє події закриття модального вікна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className={css.container}>
        <Toaster />
        <SearchBar onSubmit={handleSearch} />
        <ImageGallery images={images} onImageClick={openModal} />
        {error && images?.length === 0 && <ErrorMessage message={error} />}
        {isLoading && <Loader />}
        {images &&
          Array.isArray(images) &&
          images.length > 0 &&
          page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      </div>
    </>
  );
}

export default App;
