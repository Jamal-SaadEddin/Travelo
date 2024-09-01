import { Stack, TextField } from "@mui/material";
import useSearchBoxStore from "../../../store/searchBoxStore";

const TripDetails = () => {
  const searchQueries = useSearchBoxStore((state) => state.searchQueries);

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={2}>
      <TextField
        label="Dates: From ➡ To"
        variant="standard"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
        }}
        value={`📅 ${searchQueries.checkIn.format("YYYY-MM-DD")} ➡ ${searchQueries.checkOut.format("YYYY-MM-DD")}`}
        sx={{
          pointerEvents: "none",
          "& .MuiInputBase-input": {
            width: `${`📅 ${searchQueries.checkIn.format("YYYY-MM-DD")} ➡ ${searchQueries.checkOut.format("YYYY-MM-DD")}`.length}ch`,
            pt: 1,
          },
          "& .MuiInputLabel-root": {
            fontSize: "1.2rem",
          },
        }}
      />

      <TextField
        label="Guests"
        variant="standard"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
        }}
        value={`🧑🏻👩🏻‍🦰 ${searchQueries.adults} adults, 👶🏻 ${searchQueries.children} childs`}
        sx={{
          pointerEvents: "none",
          "& .MuiInputBase-input": {
            width: `${`🧑🏻 ${searchQueries.adults} adults,  ${searchQueries.children} child`.length}ch`,
            pt: 1,
          },
          "& .MuiInputLabel-root": {
            fontSize: "1.2rem",
          },
        }}
      />
    </Stack>
  );
};

export default TripDetails;
