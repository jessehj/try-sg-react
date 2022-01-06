import styled, { css, DefaultTheme } from "styled-components";

interface INoticeType {
  theme: DefaultTheme;
  isError: boolean;
}

const NoticeWrapper = styled.div`
  ${({ theme, isError }: INoticeType) => css`
    color: ${!isError
      ? theme.common.colors.primary
      : theme.common.colors.error};
    margin: 8px 10px 12px;

    ${theme.typo.body12R}
  `}
`;

export default NoticeWrapper;
