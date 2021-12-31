import React, { useState } from "react";
import styled from "styled-components";
import { GRAY02, GRAY05, GRAY06 } from "../../styles/Variables";
import Modal from "../Modal/Modal";

const Post = function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Base>
      {isModalOpen && (
        <Modal width="384px" height="196px" onClose={handleCloseModal} />
      )}
      <ContentContainer>
        <Image src="images/post-image.svg" />
        <Content>
          <ContentTitle>커머스에서 장바구니를 구성하는 방법들</ContentTitle>
          <ContentText>이번 글에서는...?</ContentText>
          <TagContainer>
            <Tag>UI/UX</Tag>
            <Tag>서비스 기획</Tag>
            <Tag>퍼포먼스 마케팅</Tag>
          </TagContainer>
        </Content>
      </ContentContainer>
      <UserInfoContainer>
        <ProfileContainer>
          <ProfileImg src="images/profile-img.svg" />
          <Username>이나</Username>
        </ProfileContainer>
        <IconContainer>
          <EditIcon src="icons/edit-icon.svg" />
          <DeleteIcon
            src="icons/delete-icon.svg"
            onClick={() => setIsModalOpen(true)}
          />
        </IconContainer>
      </UserInfoContainer>
    </Base>
  );
};

export default Post;

const Base = styled.div`
  width: 282px;
  height: 380px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 0px 32px 0px #0000000f;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
`;

const Content = styled.div`
  padding: 10px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.p`
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  color: ${GRAY06};
  margin-bottom: 12px;
`;

const ContentText = styled.p`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${GRAY05};
  margin-bottom: 18px;
`;

const TagContainer = styled.div`
  display: flex;
  margin: auto 0 12px;
`;

const Tag = styled.div`
  background-color: ${GRAY02};
  padding: 4px 10px 4px 10px;
  border-radius: 50px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${GRAY06};
  margin-right: 4px;
`;

const UserInfoContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: auto 0 0;
  border-top: 1px solid ${GRAY02};
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 12px;
`;

const Username = styled.p`
  color: ${GRAY05};
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
`;

const IconContainer = styled.div`
  display: flex;
`;

const EditIcon = styled.img`
  cursor: pointer;
`;

const DeleteIcon = styled.img`
  cursor: pointer;
  margin-left: 14px;
`;
