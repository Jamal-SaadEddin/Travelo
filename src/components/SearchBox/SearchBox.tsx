import { Box, TextField } from "@mui/material";

const styles = {
  searchBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    justifyContent: "space-between",
    p: 2,
    border: "1px solid #ccc",
    borderRadius: 1,
    mt: 0.5,
  },
};

const SearchBox = () => {
  return (
    <Box sx={styles.searchBox}>
      <TextField placeholder="Search for hotels, cities..." />
    </Box>
  );
};

export default SearchBox;
