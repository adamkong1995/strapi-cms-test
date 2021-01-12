import styled from 'styled-components';
import DynamicDiv from '../DynamicDiv';

const Text = styled(DynamicDiv)`
  color: ${props => props.color ? props.color : "black"};
  line-height: ${props => props.lineHeight ? props.lineHeight : "1.4"};
  font-size: ${props => props.mFontSize ? props.mFontSize : "18px"} !important;
  font-weight: ${props => props.fontWeight ? props.fontWeight : "300"};
  text-align: ${props => props.textAlign ? props.textAlign : "left"};
  opacity: ${props => props.opacity ? props.opacity : 1 };
  text-decoration: ${props => props.textDecoration};
  font-style: ${props => props.fontStyle};

  word-wrap: ${props => props.wordWrap == true ? "break-word" : "none"};
  word-break: ${props => props.wordWrap == true ? "break-all" : "none"};

  letter-spacing: normal !important;
`;

export default Text;