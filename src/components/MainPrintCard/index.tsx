import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Types from "../types/index";
import Card from "../Card";

const LinkStyle = styled(Link)`
  text-decoration: none;
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
`;

const MainPrintCard = function ({ data }: Types.PrintCardPropsType) {
  return (
    <>
      {data.map((item) => (
        <LinkStyle to={`/detail/${item.id}`}>
          <Card
            key={item.id}
            userId={item.userId}
            title={item.title}
            body={item.body}
          />
        </LinkStyle>
      ))}
    </>
  );
};
export default MainPrintCard;
