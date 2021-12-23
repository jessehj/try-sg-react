import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 328px;
  height: auto;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  overflow: hidden;
`;
export const ImageContainer = styled.image`
  width: 100%;
  height: 160px;

  background-color: #282c34;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: inherit;
  min-height: 75px;
  max-height: 114px;

  margin: 6px 0px;
`;
export const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  width: 280px;
  min-height: 21px;
  max-height: 42px;

  margin: 6px 0px;

  font-size: 14px;
  font-weight: bold;
  line-height: 21px;

  overflow: hidden;
  text-overflow: ellipsis;
`;
export const SubTitle = styled(Title)`
  min-height: 18px;
  max-height: 36px;

  font-size: 12px;
  font-weight: normal;
  color: #888888;
  line-height: 18px;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: inherit;
  height: 50px;

  border-top: 1px solid #ebecf3;
`;
export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 63px;
  height: 28px;

  margin: 0px 24px;

  &:hover {
    cursor: pointer;
  }
`;
export const ProfileName = styled.div`
  color: #888888;
  font-size: 12px;
`;
export const EditMenu = styled(Profile)`
  display: flex;

  width: 60px;
  height: 24px;

  &:hover {
    cursor: default;
  }
`;

export default {
  PostCardContainer,
  ImageContainer,
  TitleContainer,
  Title,
  SubTitle,
  Footer,
  Profile,
  ProfileName,
};
