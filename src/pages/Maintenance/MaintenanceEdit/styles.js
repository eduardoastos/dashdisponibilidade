import styled from "styled-components";
import { TextField, Select, FormControl, Button, FormControlLabel } from '@material-ui/core';


export const StyledFormControlLabel = styled(FormControlLabel)`
  
  margin-bottom: 10px;
  /* margin-left: 6px; */



  .MuiButtonBase-root {
    padding: 0px 5px 0px 9px;
  }

  .MuiTypography-root {
    color: gray;
    font-size: 14px;
    font-weight: 300;
  }

`;

  

export const StyledDateField = styled(TextField)`
    margin-left: 5px !important;
    width: 40% !important;

  .MuiInputBase-input{
    color: #8a8484;
    padding: 20px 0 7px;
  }

  /* .MuiFormControl-root {
    margin-left: 30px;
  } */

`;

export const StyledTextField = styled(TextField)`
 
  .MuiOutlinedInput-input{
    margin: 0;
    padding: 11.5px 14px;
    transform: translate(0px, 0px) scale(1);
  }

  .MuiInputLabel-outlined{
    transform: translate(14px, 12px) scale(0.9);
  }

  .MuiInputLabel-shrink{
    transform: translate(14px, -6px) scale(0.75);
  }

`;


export const StyledFormControl = styled(FormControl)`
  
  .MuiOutlinedInput-input{
    margin: 0;
    padding: 11.5px 14px;
    transform: translate(0px, 0px) scale(1);
  }

  .MuiInputLabel-outlined{
    transform: translate(14px, 8px) scale(0.9);
  }

  .MuiInputLabel-shrink{
    transform: translate(14px, -6px) scale(0.75);
  }

`;



export const StyledSelect = styled(Select)`

 .MuiOutlinedInput-input{
    margin: 0;
    padding: 5.5px 14px;
    transform: translate(0px, 0px) scale(1);
  }

  /* .MuiInputLabel-outlined{
    transform: translate(14px, 8px) scale(0.85);
  } */

`;


export const StyledButton = styled(Button)`
  /* background-color:  #325095eb; */
  /* border-radius: 16px; */
    
  height: 40px;
  background-color: white;
  border: 2px solid #c4c4c4;
  box-shadow: none;
  color: #757575;
  padding: 2px 16px;

  &:hover {
    /* background-color: #325095; */
    background-color: #eaeaea;
    box-shadow: none;
    /* color: white; */
    transition: 0.3s;
  }

  
`;



export const Content = styled.div`
  border-radius: 10px;
  width: 52%;
  height: 80%;
  display: flex;
  justify-content: center;
  background-color: white;
  /* overflow: auto; */

  .no-margin {
    margin: 0;
  }

  .body-double{
    display: flex;
    justify-content: space-between;
  }

  .body-double-intern{
    width: 48%;
    margin: 0;
  }

  .container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .header {
      width: 95%;
      height: 10%;
      padding-left: 5%;
      /* border-bottom: 1.5px solid rgba(82, 85, 103, 0.2); */
      display: flex;
      justify-content: left;
      align-items: center;

      h1 {
        color: #172b4d;
        font-weight: 500;
        margin: 0;
      }
    }

    /* border: 1px solid; */
  }

  form {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 2%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    overflow-x: hidden;
    overflow-y: auto;

    div {
      width: 100%;
      margin: 0 0 6px 0;
    }
  }

  .footer {
    padding-right: 4%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* height: 12%; */
    background-color: white;
    border-radius: 0px 0px 10px 10px;
    /* border-top: 2px solid rgba(82, 85, 103, 0.2); */
  }
`;

// export const Title = styled.h1`
// `;

// export const Container = styled.section`
// `;
