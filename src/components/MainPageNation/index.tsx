import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import style from "./style";
import "./pagenationStyle.css";
import Theme from "../../constants/theme";

interface Props {
  changeCurrent: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
}
const useStyles = makeStyles({
  root: {
    border: 0,
    "& .MuiButtonBase-root": {
      width: "40px",
      borderRadius: 0,
      "&:active": {
        backgroundColor: `${Theme.Colors.GRAY_ONE}`,
      },
      "&:hover": {
        backgroundColor: `${Theme.Colors.GRAY_ONE}`,
      },
    },
    "& .Mui-selected": {
      borderBottom: "2px solid black",
      backgroundColor: "none",
    },
    "& .MuiPaginationItem-root": {
      backgroundColor: `${Theme.Colors.GRAY_ONE}`,
    },
    "& .MuiPaginationItem-sizeMedium": {
      backgroundColor: `${Theme.Colors.GRAY_ONE}`,
    },
    "& .MuiPaginationItem-circular": {
      backgroundColor: `${Theme.Colors.GRAY_ONE}`,
    },
  },
});
const MainPageNation = function ({ pageNumber, changeCurrent }: Props) {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    changeCurrent(value);
  };
  return (
    <style.PaginationWrap>
      <style.PaginationBox>
        <Stack>
          <Pagination
            className={classes.root}
            count={pageNumber}
            onChange={handleChange}
          />
        </Stack>
      </style.PaginationBox>
    </style.PaginationWrap>
  );
};

export default MainPageNation;
