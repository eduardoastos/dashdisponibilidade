import styled from "styled-components";
import { FormControl, Select, Button, FormControlLabel } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

export const Container = styled.div`
  padding-top: 6vh;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;

    .button-full {
      /* height: 100%; */
    }

    .button-bottom {
      height: 40px;
      cursor: pointer;    
    }

    .right-space {
      margin-right: 15px;
    }

    h1 {
      font-size: 40px;
      margin-top: 5vh;
      margin-bottom: 3vh;
      font-weight: 500;
    }

    .filter {
      height: 8%;
      width: 96%;
      /* padding-left: 5%; */
      /* border: 1px solid #c4c4c4; */
      border-radius: 3px;
      display: flex;
      align-items: center;

      .filter-intern {
        margin-right: 1%;
      }

    }

    .filter-flex {
      height: 100%;
      width: 93%;
      display: flex;
      align-items: center;
    }
`;

export const StyledFormControlFilter = styled(FormControl)`

  width: 10%;
  
  .MuiOutlinedInput-input{
    margin: 0;
    padding: 11.5px 14px;
    transform: translate(0px, 0px) scale(1);
  }

  .MuiInputLabel-outlined{
    transform: translate(14px, 16px) scale(1);
  }

  .MuiInputLabel-shrink{
    transform: translate(14px, -6px) scale(0.75);
  }

`;


export const StyledSelect = styled(Select)`

 .MuiOutlinedInput-input{
    margin: 0;
    padding: 14.5px 14px;
    transform: translate(0px, 0px) scale(1);
  }

`;

export const StyledTextField = styled(TextField)`
    margin-left: 15px;

  .MuiInputBase-input{
    color: #8a8484;
  }

  /* .MuiFormControl-root {
    margin-left: 30px;
  } */

`;


export const StyledFormControlLabel = styled(FormControlLabel)`

  .MuiTypography-root {
    color: gray;
  }

`;



export const StyledButton = styled(Button)`
  /* background-color:  #325095eb; */
  /* border-radius: 16px; */
  

  &:hover {
    /* background-color: #325095; */
    background-color: #eaeaea;
    box-shadow: none;
    /* color: white; */
    transition: 0.3s;
  }

  background-color: white;
  border: 2px solid #c4c4c4;
  box-shadow: none;
  color: #757575;
  padding: 2px 16px;
  
`;