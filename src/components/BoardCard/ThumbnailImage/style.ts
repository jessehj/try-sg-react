import styled from "styled-components";
import ThumnailImageProps from "./interface";

const StyledThumnailImage = styled.div<ThumnailImageProps>`
  width: 100%;
  min-height: 160px;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export default StyledThumnailImage;
