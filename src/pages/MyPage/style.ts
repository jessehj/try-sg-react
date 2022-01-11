import styled, { css } from "styled-components";
import { flexCenterCss } from "../../common/styles/commonStyle";
import Input from "../../components/shared/Input";
import FormInputBtn from "../../components/shared/FormInputBtn";
import Button from "../../components/shared/Button";

const MyPageForm = {
  Wrapper: styled.div`
    ${({ theme }) => css`
      ${flexCenterCss};
      width: 100%;
      height: calc(100vh - 80px);
      flex-direction: column;

      ${theme.device.tablet} {
        width: 100%;
        height: 100vh;
      }
    `}
  `,
  InnerWrapper: styled.div`
    width: 320px;
    height: 100%;
  `,
  Title: styled.h2`
    ${({ theme }) => css`
      margin: 24px 0 32px;
      ${theme.typo.head24}
    `}
  `,
  LoginWrapper: styled.div``,
  FormWrapper: styled.div`
    ${({ theme }) => css`
      border-bottom: 1px solid ${theme.common.colors.gray1};
    `}
  `,
  SubTitle: styled.h3`
    ${({ theme }) => css`
      ${theme.typo.head18};
    `}
  `,
  Label: styled.div`
    ${({ theme }) => css`
      margin: 20px 0 12px;
      ${theme.typo.body14R}
    `}
  `,
  Input: styled(Input)`
    width: 100%;
  `,
  InfoBtnWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  `,
  FormInputBtn: styled(FormInputBtn)`
    margin-bottom: 33px;
  `,
  InfoBtn: styled(Button)`
    ${({ theme }) => css`
      margin-right: 10px;
      min-height: ${theme.button.heights.medium};
      padding: 10px 14px;
      ${theme.typo.button14}
    `}
  `,
  InfoWrapper: styled.div`
    ${({ theme }) => css`
      margin: 32px 0 20px;
      ${theme.typo.body14R}
    `}
  `,
  InfoSubmit: styled(Button)`
    ${({ theme }) => css`
      margin-top: 20px;
      width: 100%;
      min-height: ${theme.button.heights.extraLarge};
    `}
  `,
  InfoImg: styled.img`
    margin-right: 20px;
    width: 80px;
    height: 80px;
  `,
};

export default MyPageForm;
