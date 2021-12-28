import styled from "styled-components";
import { Theme } from "../../constants/theme";

export const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 1000;
`;
export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  @media ${Theme.DeviceSize.PHONE} {
    padding-top: 60px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    padding-top: 100px;
  }
`;
export const BoardMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: ${Theme.Colors.GRAY_ONE};

  @media ${Theme.DeviceSize.PHONE} {
    height: auto;
    min-height: auto;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    height: 1838px;
  }
`;
export const PostingContainer = styled.div`
  display: flex;
  max-width: 1300px;

  @media ${Theme.DeviceSize.DESKTOP} {
    margin-top: 84px;
  }
`;
export const PostingContents = styled.div`
  display: flex;
  max-width: 1224px;

  @media ${Theme.DeviceSize.PHONE} {
    flex-direction: column;
    align-items: center;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
`;

export const PostingCard = styled.div`
  @media ${Theme.DeviceSize.PHONE} {
    margin: 12px 0px;
  }
  @media ${Theme.DeviceSize.DESKTOP} {
    margin: 12px;
  }
`;
export const PaginationContainer = styled.div`
  @media ${Theme.DeviceSize.DESKTOP} {
    margin-top: 192px;
  }
`;
export default {
  Container,
  SearchBarContainer,
  BoardMainContainer,
  PostingContainer,
  PostingContents,
  PostingCard,
  PaginationContainer,
};
