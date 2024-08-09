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
import { useFormik } from "formik";
import queryString from "query-string";
import * as yup from "yup";
import RoomBookingSelector from "./components/RoomBookingSelector";

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

const validationSchema = yup.object({
  checkIn: yup.date().required("Check-in date is required"),
  checkOut: yup.date().required("Check-out date is required"),
  adults: yup.number().min(1).required("Adults is required"),
  children: yup.number().min(0).required("Children is required"),
  rooms: yup.number().min(1).required("Rooms is required"),
});

const SearchBox = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      cityName: "",
      checkIn: dayjs(),
      checkOut: dayjs().add(1, "day"),
      adults: 2,
      children: 0,
      rooms: 1,
    },
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
      console.log(queryParams);

      // navigate(`/user/search?${queryParams}`);
    },
  });

  const handleDateChange = (name: string) => (date: unknown) => {
    formik.setFieldValue(name, date);
  };

  const hanldeCountChange = (name: string, count: number) => {
    formik.setFieldValue(name, count);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={formik.handleSubmit}>
        <Box position="relative">
          <Box
            sx={styles.searchBox}
            flexDirection={{ xs: "column", md: "row" }}
            bgcolor={theme.palette.mode === "dark" ? "#272727" : "#eee"}
          >
            <Box width={{ xs: "100%", md: "25%" }}>
              <TextField
                id="cityName"
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
                value={formik.values.cityName}
                onChange={formik.handleChange}
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
