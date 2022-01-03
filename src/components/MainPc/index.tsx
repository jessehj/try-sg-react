import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import style from "./style";
import MainPrintCard from "../MainPrintCard";
import * as Types from "../types/index";
import MainPageNation from "../MainPageNation";
// import request from "../../network/request";
// import { getNoticeList } from "./apis";
import MainSearch from "../MainSearch";
import FixMenu from "../FixMenu";

const MainPc = function () {
  const [contentData, setContentData] = useState<Types.ContentType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const pageNumber: number = Math.ceil(contentData.length / postsPerPage);

  const getUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const getData = async () => {
      try {
        const response: AxiosResponse<Types.ContentType[], any> =
          await axios.get(getUrl);
        console.log(response.data);
        setContentData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData().catch((e) => console.log(e));
  }, []);
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;

  const showContentList = (
    allContent: Types.ContentType[]
  ): Types.ContentType[] => {
    const resultContentList = allContent.slice(firstIndex, lastIndex);
    return resultContentList;
  };

  return (
    <style.MainWrap>
      <FixMenu />
      <MainSearch />
      <style.CardContainer>
        <MainPrintCard data={showContentList(contentData)} />
      </style.CardContainer>
      <MainPageNation pageNumber={pageNumber} changeCurrent={setCurrentPage} />
    </style.MainWrap>
  );
};

export default MainPc;
