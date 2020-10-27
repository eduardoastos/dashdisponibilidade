import styled from "styled-components";
import TableContainer from '@material-ui/core/TableContainer';
import { FormControlLabel } from '@material-ui/core';


export const StyledTableContainer = styled(TableContainer)`
    height: 60%;
    width: 96%;
    margin: 20px 0;
    /* background-color: #3250951c; */
    box-shadow: none;
    /* border: 0.5px solid #e0e0e0; */

    .table-head {
        color: white;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .table-background {
        background-color: #325095;
    }
`;



export const StyledFormControlLabel = styled(FormControlLabel)`

    
`;