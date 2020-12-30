import styled from 'styled-components';

export const Form = styled.div`
display:flex;
flex-direction:row;
margin: 0px 20px;
`

export const Text = styled.span`
margin:0px 5px;
font-size:32px;
font-weight:bold;
`
export const Result = styled.input.attrs({ type: 'number' })`
width:70px;
height:30px;
margin:0px 5px;
font-size:32px;
font-weight:bold;
text-align:center;
`