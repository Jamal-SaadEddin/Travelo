export const cardsStackStyles = {
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: 4,
};

export const cardStyles = {
  maxWidth: 728,
  minWidth: 300,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1,
  flexBasis: "auto",
};

export const recentlyVisitedHotelCardWidth = {
  xs: "100%",
  sm: "calc(50% - 1rem)",
  md: "calc(33.333% - 1.333rem)",
};

export const featuredDealHotelCardWidth = {
  xs: "100%",
  sm: "calc(50% - 1rem)",
  md: "calc(33.333% - 1.333rem)",
  lg: "calc(25% - 1.5rem)",
};

export const trendingDestinationStyles = {
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
