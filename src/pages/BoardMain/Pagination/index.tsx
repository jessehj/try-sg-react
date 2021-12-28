import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import { Theme } from "../../../constants/theme";

interface Props {
  count: number;
  current: (page: number) => void;
}

const PaginationControlled: React.FC<Props> = function PaginationControlled({
  count,
  current,
}) {
  const useStyles = makeStyles(() => ({
    root: {
      width: 384,
      height: 40,
      "& .MuiPaginationItem-root": {
        color: Theme.Colors.DISABLED_COLOR,
      },
      "& .MuiPaginationItem-previousNext": {
        color: Theme.Colors.PRIMARY_COLOR,
      },
      "& .MuiPaginationItem-root.Mui-selected": {
        backgroundColor: Theme.Colors.GRAY_ONE,
      },
      "& .MuiPaginationItem-root:hover": {
        backgroundColor: Theme.Colors.GRAY_ONE,
        color: Theme.Colors.HOVER_COLOR,
      },
      "& .Mui-selected": {
        color: Theme.Colors.PRIMARY_COLOR,
        textDecoration: "underline",
        textUnderlinePosition: "under",
      },
    },
  }));
  const classes = useStyles();
  const [page, setPage] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  // page가 바뀔 때 마다 mainPc(부모) 컴포넌트로 현재 idx 값을 보내줘.
  useEffect(() => {
    current(page);
  }, [page]);

  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        className={classes.root}
      />
    </Stack>
  );
};

export default PaginationControlled;
