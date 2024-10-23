import HorizontalCardsRow from "@/Components/cards/HorizontalCardsRow";
import MainBanner from "@/Components/landing/MainBanner";
import MainDesc from "@/Components/landing/MainDesc";
import MainGallery from "@/Components/landing/MainGallery";
import MainPriceList from "@/Components/landing/MainPriceList";
import InteractiveMap from "@/Components/landing/InteractiveMap";
import ImageGalleryCarousel from "@/Components/carousels/ImageGalleryCarousel";
import styles from "@/Styles/Page.module.css";

export default function Home() {
  return (
    <>
      <MainBanner />
      <MainDesc />
      <ImageGalleryCarousel />
      <MainGallery />
      <MainPriceList />
      <HorizontalCardsRow />
      <InteractiveMap />
    </>
  );
}
