import React, { useState } from "react";
import { Content, StyledTextField, StyledSelect, StyledFormControl, StyledButton, StyledFormControlLabel, StyledDateField } from "./styles";
import { Container, MenuItem, InputLabel, Checkbox } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  }
}));

export default function MaintenanceEdit() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [channel, setChannel] = useState("");
  const [environment, setEnvironment] = useState("");
  const [product, setProduct] = useState("");
  const [origin, setOrigin] = useState("");
  const [description, setDescription] = useState("");
  

  const classes = useStyles();

  const BlueCheckbox = withStyles({
    root: {
      color: '#c4c4c4',
      '&$checked': {
        color: '#325095',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);



  return (
    <Content>
      <Container className="container" fixed>
        <header className="header">
          {/* <div className="title"> */}
          <h1>Editar Manutenção</h1>
          {/* </div> */}
        </header>

        <form className="createCheck">
          <StyledTextField
            label="Nome de Registro"
            variant="outlined"
            required            
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* 
        Company
        Editar esse cara */}
          <div className="body-double">

            <StyledDateField
              id="datetime-local"
              label="Início"
              type="datetime-local"
              defaultValue="2020-10-24T00:30"
              className={classes.textField}
              InputLabelProps={{
              shrink: true,
            }}/>

            <StyledDateField
              id="datetime-local"
              label="Fim"
              type="datetime-local"
              defaultValue="2020-10-24T00:30"
              className={classes.textField}
              InputLabelProps={{
              shrink: true,
            }}/>

            

          </div>

          
          {/* Origem */}
          {/* <StyledTextField
            label="Origem"
            variant="outlined"
            required
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />           */}

          <StyledFormControlLabel 
            control={<BlueCheckbox />}
            label="Daily"
          /> 

          <StyledFormControlLabel
            control={<BlueCheckbox />}
            label="Ativo"
          />     

          <StyledTextField
            id="standard-multiline-static"
            label="Descrição"
            multiline
            variant="outlined"
            rows={4}
            defaultValue=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>

        <footer className="footer">
          <StyledButton
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<HighlightOffIcon />}
          >
            Limpar
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Salvar
          </StyledButton>
        </footer>
      </Container>
    </Content>
  );
}
