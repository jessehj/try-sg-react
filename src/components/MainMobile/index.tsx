import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import MainSearch from "../MainSearch";
import style from "./style";
import FixMenu from "../FixMenu";

const Card = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const MainMobile = function () {
  const [items, setItems] = useState([
    { id: 1, text: 1 },
    { id: 2, text: 2 },
    { id: 3, text: 3 },
    { id: 4, text: 4 },
    { id: 5, text: 5 },
    { id: 6, text: 6 },
    { id: 7, text: 7 },
    { id: 8, text: 8 },
  ]);
  const [content, setContent] = useState(9);

  const [ref, inView] = useInView();

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(() => {
    const newItem = {
      id: content,
      text: content,
    };
    setItems(items.concat(newItem));
  }, [content]);

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView) {
      setContent((prevContent) => prevContent + 1);
    }
  }, [inView]);
  return (
    <style.MainWrap>
      <FixMenu />
      <MainSearch />
      <div className="list">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            {items.length - 1 === item.id ? (
              <Card className="list-item" ref={ref}>
                {item.text}
              </Card>
            ) : (
              <Card className="list-item">{item.text}</Card>
            )}
          </React.Fragment>
        ))}
      </div>
    </style.MainWrap>
  );
};

export default MainMobile;
