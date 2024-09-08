import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import useCurrentPageStore from "../../store/currentPage.store";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const pageData = useCurrentPageStore((state) => state.currentPage);
  let id;
  let placeholder;

  switch (pageData) {
    case "cities":
      id = "search-cities";
      placeholder = "Search for cities...";
      break;
    case "hotels":
      id = "search-hotels";
      placeholder = "Search for hotels...";
      break;
    case "rooms":
      id = "search-rooms";
      placeholder = "Search for rooms...";
      break;
    default:
      id = "search";
      placeholder = "Search...";
      break;
  }

  return (
    <TextField
      id={id}
      placeholder={placeholder}
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
