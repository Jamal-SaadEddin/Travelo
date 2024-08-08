import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import RoomBookingSelector from "./RoomBookingSelector/RoomBookingSelector";

const styles = {
  searchBox: {
    display: "flex",
    gap: 2,
    justifyContent: "space-between",
    p: 2,
    border: "1px solid #ccc",
    borderRadius: 1,
    position: "absolute",
    bottom: "20px",
    width: "100%",
  },
};

const SearchBox = () => {
  const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box position="relative">
        <Box
          sx={styles.searchBox}
          flexDirection={{ xs: "column", md: "row" }}
          bgcolor={theme.palette.mode === "dark" ? "#272727" : "#eee"}
        >
          <Box width={{ xs: "100%", md: "25%" }}>
            <TextField
              placeholder="Search for hotels, cities..."
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box width={{ xs: "100%", md: "35%" }} display="flex" gap={1}>
            <DatePicker
              label="Check-in"
              defaultValue={dayjs()}
              minDate={dayjs()}
              sx={{ width: "50%" }}
            />
            <DatePicker
              label="Check-out"
              defaultValue={dayjs().add(1, "day")}
              minDate={dayjs().add(1, "day")}
              sx={{ width: "50%" }}
            />
          </Box>
          <Box width={{ xs: "100%", md: "25%" }}>
            <RoomBookingSelector
              roomInfo={{ adults: 2, children: 0, rooms: 1 }}
            />
          </Box>
          <Box width={{ xs: "100%", md: "15%" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: "100%", fontWeight: "bold", fontSize: "16px" }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default SearchBox;
