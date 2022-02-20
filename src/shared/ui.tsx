import styled from "styled-components/native"
import colors from "./colors"

export const HorizontalDivider = styled.View`
  height: 9px;
  width: 100%;
  background-color: ${colors.secondary};
`
export const VerticalDivider = styled.View`
  width: 1px;
  height: 30px;
  background-color: ${colors.divider};
`