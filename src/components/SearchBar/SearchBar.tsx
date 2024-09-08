import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <TextField
      id="cityName" // changable
      placeholder="Search for cities..." // changable
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      sx={{ flexGrow: 1, minWidth: 250 }}
    />
  );
};

export default SearchBar;
