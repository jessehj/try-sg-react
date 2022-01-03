import React from "react";
import FixMenu from "../FixMenu";
import style from "./style";

const DetailContent = function () {
  return (
    <div>
      <FixMenu />
      <style.TitleContainer>
        <style.TitleInnerBox>
          <style.MainTitle>
            상품 상세 페이지 개선해 성과내기 - 스타일쉐어
          </style.MainTitle>
          <style.TitleDate>
            by <span>계정이름</span> 날짜
          </style.TitleDate>
        </style.TitleInnerBox>
      </style.TitleContainer>
      <style.MainText>
        지난 분기, 상품 상세 페이지를 개선했습니다. 스타일쉐어 서비스에서 가장
        중요한 End Page중 하나입니다. 결국 End Page로 얼만큼 많이 유입시켰고,
        비즈니스 효과를 냈는 지가 서비스의 지표, 볼륨이 됩니다. 그래도 트래픽이
        적은 웹이라 부담감은 크지 않았습니다. 오히려 선행 과제로 AB테스트할 수
        있었습니다. 상품상세페이지 개선의 목표는 두 가지였습니다. 유저가
        상품상세에서 이탈하지 않고 다음 단계로 전환될 수 있게 돕는다 첫 구매자의
        구매 전환률을 상승시킨다.
      </style.MainText>
      <style.BottomNav>
        <style.ButtonStyle
          type="button"
          onClick={() => {
            console.log("hello");
          }}
        >
          <style.ButtonTextBox>
            <style.PrevButtonIcon />
            <style.ButtonBoxTextStyle>
              &nbsp;이전 게시물&nbsp;
            </style.ButtonBoxTextStyle>
            <style.ButtonBoxTextTitle>
              서비스기획자는 뭐ㅜ하는 사람이 뭐하는 사람이 뭐하는 사람이
            </style.ButtonBoxTextTitle>
          </style.ButtonTextBox>
        </style.ButtonStyle>
        <style.ButtonStyle
          type="button"
          onClick={() => {
            console.log("hello");
          }}
        >
          <style.ButtonTextBoxRight>
            <style.NextButtonIcon />
            <style.ButtonBoxTextStyle>
              &nbsp;다음 게시물&nbsp;
            </style.ButtonBoxTextStyle>
            <style.ButtonBoxTextTitle>
              서비스기획자는 뭐ㅜ하는 사람이 뭐하는 사람이 뭐하는
              사람이asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
            </style.ButtonBoxTextTitle>
          </style.ButtonTextBoxRight>
        </style.ButtonStyle>
      </style.BottomNav>
    </div>
  );
};

export default DetailContent;
