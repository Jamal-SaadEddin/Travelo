import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  useTheme,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useFormik } from "formik";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import useSearchBoxStore from "../../store/searchBoxStore";
import RoomBookingSelector from "./components/RoomBookingSelector";

const validationSchema = yup.object({
  checkIn: yup.date().required("Check-in date is required"),
  checkOut: yup.date().required("Check-out date is required"),
  adults: yup.number().min(1).required("Adults is required"),
  children: yup.number().min(0).required("Children is required"),
  rooms: yup.number().min(1).required("Rooms is required"),
});

interface SearchBoxProps {
  regularStyle?: boolean;
}

const SearchBox = ({ regularStyle = false }: SearchBoxProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { searchQueries, setSearchQueries } = useSearchBoxStore();

  const formik = useFormik({
    initialValues: searchQueries,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { cityName, checkIn, checkOut, adults, children, rooms } = values;
      const checkInDate = checkIn.format("YYYY-MM-DD");
      const checkOutDate = checkOut.format("YYYY-MM-DD");

      const queryParams = queryString.stringify({
        city: cityName,
        checkInDate,
        checkOutDate,
        adults,
        children,
        numberOfRooms: rooms,
      });

      navigate(`/search?${queryParams}`);
    },
  });

  const handleCityChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      formik.setFieldValue(name, event.target.value);
      setSearchQueries({
        ...searchQueries,
        [name]: event.target.value,
      });
    };

  const handleDateChange = (name: string) => (date: unknown) => {
    formik.setFieldValue(name, date);
    setSearchQueries({
      ...searchQueries,
      [name]: date,
    });
  };

  const hanldeCountChange = (name: string, count: number) => {
    formik.setFieldValue(name, count);
    setSearchQueries({
      ...searchQueries,
      [name]: count,
    });
  };

  const styles = {
    searchBox: {
      display: "flex",
      gap: 2,
      justifyContent: "space-between",
      p: 2,
      border:
        regularStyle && theme.palette.mode === "dark"
          ? "none"
          : "1px solid #ccc",
      borderRadius: 1,
      position: regularStyle ? "static" : "absolute",
      bottom: "20px",
      width: "100%",
      minWidth: 300,
      maxWidth: regularStyle ? { xs: 555, md: "100%" } : "100%",
      mx: "auto",
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={formik.handleSubmit}>
        <Box position="relative">
          <Box
            sx={styles.searchBox}
            flexDirection={{ xs: "column", md: "row" }}
            bgcolor={
              regularStyle
                ? "inherit"
                : theme.palette.mode === "dark"
                  ? "#272727"
                  : "#fff"
            }
            component={regularStyle ? Paper : Box}
            elevation={theme.palette.mode === "dark" ? 3 : 1}
          >
            <Box width={{ xs: "100%", md: "25%" }}>
              <TextField
                id="cityName"
                placeholder="Search cities to visit..."
                variant="outlined"
                fullWidth
                sx={{
                  minWidth: 215,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                value={formik.values.cityName}
                onChange={handleCityChange("cityName")}
              />
            </Box>
            <Box width={{ xs: "100%", md: "35%" }} display="flex" gap={1}>
              <DatePicker
                label="Check-in"
                defaultValue={dayjs()}
                minDate={dayjs()}
                value={formik.values.checkIn}
                onChange={handleDateChange("checkIn")}
                sx={{ width: "50%" }}
              />
              <DatePicker
                label="Check-out"
                defaultValue={dayjs().add(1, "day")}
                minDate={dayjs().add(1, "day")}
                value={formik.values.checkOut}
                onChange={handleDateChange("checkOut")}
                sx={{ width: "50%" }}
              />
            </Box>
            <Box width={{ xs: "100%", md: "25%" }}>
              <RoomBookingSelector
                roomInfo={formik.values}
                handleChange={hanldeCountChange}
              />
            </Box>
            <Box width={{ xs: "100%", md: "15%" }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ height: "100%", fontWeight: "bold", fontSize: "16px" }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </LocalizationProvider>
  );
};

export default SearchBox;
