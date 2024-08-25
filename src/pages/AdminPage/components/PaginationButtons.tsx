import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button, IconButton } from "@mui/material";

type PaginationButtonsProps = {
  currentPage: number;
  totalPages: number;
  handleClick: (pageNumber: number) => void;
};

export const renderPaginationButtons = ({
  currentPage,
  totalPages,
  handleClick,
}: PaginationButtonsProps) => {
  const maxButtons = 4;
  const buttons: JSX.Element[] = [];

  // Calculate the range of buttons to display
  let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  const end = Math.min(totalPages, start + maxButtons - 1);
  start = Math.max(1, end - maxButtons + 1);

  // Add first page button
  buttons.push(
    <IconButton
      key="first"
      onClick={() => handleClick(1)}
      disabled={currentPage === 1}
    >
      <FirstPageIcon />
    </IconButton>,
  );

  // Add previous page button
  buttons.push(
    <IconButton
      key="prev"
      onClick={() => handleClick(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <NavigateBeforeIcon />
    </IconButton>,
  );

  // Add pagination buttons
  for (let i = start; i <= end; i++) {
    buttons.push(
      <Button
        key={i}
        onClick={() => handleClick(i)}
        disabled={currentPage === i}
        sx={{
          bgcolor: currentPage === i ? "primary.light" : "inherit",
          p: 0,
          minWidth: 0,
          width: "36.5px",
          borderRadius: "100%",
          color: "inherit",
          "&:disabled": {
            color: "black",
          },
        }}
      >
        {i}
      </Button>,
    );
  }

  // Add next page button
  buttons.push(
    <IconButton
      key="next"
      onClick={() => handleClick(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <NavigateNextIcon />
    </IconButton>,
  );

  // Add last page button
  buttons.push(
    <IconButton
      key="last"
      onClick={() => handleClick(totalPages)}
      disabled={currentPage === totalPages}
    >
      <LastPageIcon />
    </IconButton>,
  );

  return buttons;
};
