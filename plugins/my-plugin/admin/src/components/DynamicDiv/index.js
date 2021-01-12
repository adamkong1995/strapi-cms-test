import styled from 'styled-components';

const DynamicDiv = styled.div`
    display: ${props => props.inline ? "inline-block" : "block"};

    margin-top: ${props => props.mMarginTop ? props.mMarginTop : "0px"} !important;
    margin-bottom: ${props => props.mMarginBottom ? props.mMarginBottom : "0px"} !important;
    margin-left: ${props => props.mMarginLeft ? props.mMarginLeft : "0px"} !important;
    margin-right: ${props => props.mMarginRight ? props.mMarginRight : "0px"} !important;

    padding: ${props => props.mPadding ? props.mPadding : "0px"} !important;
`;

export default DynamicDiv;