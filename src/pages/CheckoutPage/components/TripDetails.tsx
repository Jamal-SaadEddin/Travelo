import { Stack, TextField } from "@mui/material";

const TripDetails = () => {
  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center" spacing={2}>
      <TextField
        label="Dates: From ➡ To"
        variant="standard"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
        }}
        value="📅 2024-08-19 ➡ 2024-08-20"
        sx={{
          pointerEvents: "none",
          "& .MuiInputBase-input": {
            width: `${"📅 2024-08-19 ➡ 2024-08-20".length}ch`,
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
        value="🧑🏻👩🏻‍🦰 2 adults, 👶🏻 2 childs"
        sx={{
          pointerEvents: "none",
          "& .MuiInputBase-input": {
            width: `${"🧑🏻 2 adults,  1 child".length}ch`,
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
