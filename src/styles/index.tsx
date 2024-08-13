import { useTheme } from "@mui/material";

export const useStyles = () => {
  const theme = useTheme();

  const hotelCardsStyles = {
    cardsStackStyles: {
      width: "100%",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      gap: 4,
    },
    cardStyles: {
      maxWidth: 650,
      minWidth: 300,
      mx: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
      flexBasis: "auto",
      border:
        theme.palette.mode === "dark" ? "7px solid #272727" : "7px solid #fff",
    },
  };

  const featuredDealStyles = {
    cardWidth: {
      xs: "100%",
      sm: "calc(50% - 1rem)",
      md: "calc(33.333% - 1.333rem)",
      lg: "calc(25% - 1.5rem)",
    },
  };

  const recentlyVisitedHotelStyles = {
    cardWidth: {
      xs: "100%",
      sm: "calc(50% - 1rem)",
      md: "calc(33.333% - 1.333rem)",
    },
  };

  const trendingDestinationStyles = {
    styledCard: {
      overflow: "hidden",
      position: "relative",
      width: "100%",
      height: "100%",
    },
    styledCardMedia: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "top",
      borderRadius: "5px",
    },
    cityName: {
      position: "absolute",
      top: "16px",
      left: "16px",
      color: "white",
      textShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)",
      fontWeight: "bold",
    },
  };

  const filterComponentStyles = {
    paper: {
      padding: 3,
      minWidth: 300,
      maxWidth: 650,
      mx: "auto",
    },
    titleColor: theme.palette.mode === "dark" ? "grey.300" : "textSecondary",
    slider: {
      mx: 1,
      width: "95%",
      "& .MuiSlider-valueLabel": {
        top: 45,
        bgcolor: "transparent",
        color: "inherit",
      },
      "& .MuiSlider-thumb": {
        borderRadius: "50%",
        width: 20,
        height: 20,
        border: `2px solid`,
        borderColor: "primary.main",
        backgroundColor: theme.palette.mode === "dark" ? "grey.800" : "white",
      },
    },
    toggleButton: {
      textTransform: "none",
      "&.Mui-selected": {
        backgroundColor: "primary.main",
        color: "black",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "primary.light",
      },
    },
  };

  const hotelListingsStyles = {
    cardWidth: "100%",
  };

  return {
    hotelCardsStyles,
    featuredDealStyles,
    recentlyVisitedHotelStyles,
    trendingDestinationStyles,
    filterComponentStyles,
    hotelListingsStyles,
  };
};
