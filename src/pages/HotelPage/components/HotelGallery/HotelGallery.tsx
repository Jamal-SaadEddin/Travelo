import { useMediaQuery, useTheme } from "@mui/material";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import LightGallery from "lightgallery/react";
import GalleryItem from "./components/GalleryItem";
import { GalleryPhoto } from "./entities/GalleryPhoto";
import "./styles.css";

interface HotelGalleryProps {
  gallery: GalleryPhoto[];
}

const HotelGallery = ({ gallery }: HotelGalleryProps) => {
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const photosShown = isXSmallScreen ? 2 : 4;

  return (
    <LightGallery elementClassNames="grid" plugins={[lgThumbnail, lgAutoPlay]}>
      {gallery.map((photo, index) => (
        <GalleryItem
          key={photo.id}
          photo={photo}
          index={index}
          photosShown={photosShown}
          totalPhotos={gallery.length}
        />
      ))}
    </LightGallery>
  );
};

export default HotelGallery;
