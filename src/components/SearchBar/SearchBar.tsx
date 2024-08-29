import SearchIcon from "@mui/icons-material/Search";
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <TextField
        id="cityName" // changable
        placeholder="Search for cities..." // changable
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
