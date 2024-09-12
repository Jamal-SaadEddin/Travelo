import { Chip, styled } from "@mui/material";
import { GalleryPhoto } from "@src/entities/common/GalleryPhoto";

const StyledChip = styled(Chip)(() => ({
  position: "absolute",
  bottom: 10,
  right: 10,
  borderColor: "white",
  backgroundColor: "#ffc604",
  color: "black",
  fontWeight: 600,
  fontSize: "1.2rem",
  padding: "20px 5px",
}));

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
});

interface Props {
  photo: GalleryPhoto;
  index: number;
  photosShown: number;
  totalPhotos: number;
}

const GalleryItem = ({ photo, index, photosShown, totalPhotos }: Props) => {
  const isHidden = index > photosShown;
  const isBlurred = index === photosShown;
  const label = `+${totalPhotos - photosShown} More Photos`;

  return (
    <a
      className={isBlurred ? "p-relative" : ""}
      hidden={isHidden}
      href={photo.url}
    >
      <StyledImage className={isBlurred ? "blur" : ""} src={photo.url} />
      {isBlurred && <StyledChip label={label} />}
    </a>
  );
};

export default GalleryItem;
