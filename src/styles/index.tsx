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
      maxWidth: 728,
      minWidth: 300,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flex: 1,
      flexBasis: "auto",
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
      maxWidth: 400,
    },
    titleColor: theme.palette.mode === "dark" ? "grey.300" : "textSecondary",
    sliderThumb: {
      borderRadius: "50%",
      width: 20,
      height: 20,
      border: `2px solid`,
      borderColor: "primary.main",
    },
    sliderValueLabel: {
      top: 45,
      bgcolor: "transparent",
      color: "inherit",
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

  return {
    hotelCardsStyles,
    featuredDealStyles,
    recentlyVisitedHotelStyles,
    trendingDestinationStyles,
    filterComponentStyles,
  };
};
