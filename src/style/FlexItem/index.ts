import styled from "styled-components";

export interface FlexItemProps {
  flexBasis?: string;
  flexGrow?: string;
  flexShrink?: string;
}
const FlexItem = styled.div<FlexItemProps>`
  width: fit-content;
  flex-basis: ${({ flexBasis }) => {
    if (flexBasis) return flexBasis;
    return "none";
  }};
  flex-grow: ${({ flexGrow }) => {
    if (flexGrow) return flexGrow;
    return "none";
  }};
  flex-shrink: ${({ flexShrink }) => {
    if (flexShrink) return flexShrink;
    return "none";
  }};
`;

export default FlexItem;
