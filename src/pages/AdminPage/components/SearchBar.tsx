import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import useAdminSearchBarStore from "@src/store/adminSearchBar.store";
import useCurrentPageStore from "@src/store/currentPage.store";

const SearchBar = () => {
  const { cityName, setCityName, hotelName, setHotelName } =
    useAdminSearchBarStore();
  const pageData = useCurrentPageStore((state) => state.currentPage);
  let id;
  let placeholder;
  let value = "";

  switch (pageData) {
    case "cities":
      id = "search-cities";
      placeholder = "Search for cities...";
      value = cityName;
      break;
    case "hotels":
      id = "search-hotels";
      placeholder = "Search for hotels...";
      value = hotelName;
      break;
    default:
      id = "search";
      placeholder = "Search...";
      break;
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    switch (pageData) {
      case "cities":
        setCityName(value);
        break;
      case "hotels":
        setHotelName(value);
        break;
    }
  };

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
      value={value}
      onChange={handleSearch}
      sx={{ flexGrow: 1, minWidth: 250 }}
    />
  );
};

export default SearchBar;
