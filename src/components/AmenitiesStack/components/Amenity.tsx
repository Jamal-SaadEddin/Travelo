import { Chip, Fade, Tooltip } from "@mui/material";
import { Amenity as AmenityProps } from "../entities/Amenity";

const Amenity = ({ name, description, icon }: AmenityProps) => {
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
        sx={{ px: 1.5, py: 3, gap: 1, fontSize: "15px" }}
      />
    </Tooltip>
  );
};

export default Amenity;
