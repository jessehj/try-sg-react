import styled, { css } from "styled-components";
import Button from "../../components/shared/Button";
import { flexCenterCss } from "../../common/styles/commonStyle";

const WelcomeForm = {
  Wrapper: styled.div`
    ${({ theme }) => css`
      ${flexCenterCss};
      width: 50%;
      height: calc(100vh - 80px);
      flex-direction: column;

      ${theme.device.tablet} {
        width: 100%;
        height: 100vh;
      }
    `}
  `,
  InnerWrap: styled.form`
    ${({ theme }) => css`
      width: 355px;

      ${theme.device.tablet} {
        width: 320px;
        display: flex;
        height: 100%;
        flex-direction: column;
        align-content: space-between;
      }
    `}
  `,
  TitleWrap: styled.div`
    ${({ theme }) => css`
      width: 100%;
      margin-bottom: 40px;

      ${theme.device.tablet} {
        margin-top: 40px;
        height: 106px;
      }
    `}
  `,
  Title: styled.h2`
    ${({ theme }) => css`
      width: 100%;
      margin-bottom: 14px;
      ${theme.typo.head34}
    `}
  `,
  SubTitle: styled.h3`
    ${({ theme }) => css`
      width: 100%;
      color: ${theme.common.colors.subText};
      ${theme.typo.body16R}
    `}
  `,
  LoginBtn: styled(Button)`
    ${({ theme }) => css`
      width: 320px;
      height: ${theme.button.heights.extraLarge};
      margin-bottom: 12px;

      ${theme.device.tablet} {
        width: 320px;
        margin: auto;
        margin-bottom: 24px;
      }
    `}
  `,
};

export default WelcomeForm;
