import { makeStyles } from "@mui/material";

const useStyles = makeStyles({
  paginationContainer: {
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "220px",

    "& .MuiPaginationItem-root": {
      margin: "0 6px",
      fontSize: "14px",
    },
    "& .MuiPaginationItem-page": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'proxima-nova', 'Noto Sans KR', sans-serif",
      letterSpacing: "-0.1px",

      "&.Mui-selected": {
        backgroundColor: "black",
        color: "white",
      },
    },
  },

  pageRange: {
    margin: "16px 0 30px",
    fontSize: "14px",
    fontWeight: "400",
  },

  additionalFee: {
    fontSize: "13px",
    fontWeight: "300",
    color: "#777",
    lineHeight: "30px",
  },
});

export default {
  useStyles,
};
