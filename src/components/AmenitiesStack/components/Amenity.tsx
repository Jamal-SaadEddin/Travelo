import { Chip, Fade, Tooltip } from "@mui/material";
import { Amenity as AmenityProps } from "../entities/Amenity";

const styles = {
  mediumChip: {
    px: 1.5,
    py: 3,
    gap: 1,
    fontSize: "15px",
  },
  smallChip: {
    px: 1,
    py: 2,
    gap: 1,
    fontSize: "12px",
  },
};

const Amenity = ({
  name,
  description,
  icon,
  size = "medium",
}: AmenityProps) => {
  return (
    <Tooltip
      title={description}
      arrow
      placement="top"
      TransitionComponent={Fade}
    >
      <Chip
        variant="outlined"
        label={name}
        icon={icon}
        sx={size === "medium" ? styles.mediumChip : styles.smallChip}
        size={size}
      />
    </Tooltip>
  );
};

export default Amenity;
