import React, { useState } from "react";
import { Content, StyledTextField, StyledSelect, StyledFormControl, StyledButton, StyledFormControlLabel } from "./styles";
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

export default function CheckCreate() {
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
          <h1>Cadastrar Verificação</h1>
          {/* </div> */}
        </header>

        <form className="createCheck">
          <StyledTextField
            label="Nome"
            variant="outlined"
            required            
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* 
        Company
        Editar esse cara */}
          <div className="body-double">
            <StyledFormControl variant="outlined" className="body-double-intern">
              <InputLabel id="company-select-label">Companhia</InputLabel>
              <StyledSelect
                labelId="company-select-label"
                id="company-select"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                label="Companhia"
              >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="CVC">CVC</MenuItem>
                <MenuItem value="LIV">Livelo</MenuItem>
                <MenuItem value="ESF">Esfera Santander</MenuItem>
                <MenuItem value="SUB">Submarino</MenuItem>
              </StyledSelect>
            </StyledFormControl>

          
            <StyledFormControl variant="outlined" className="body-double-intern">
              <InputLabel id="channel-select-label">Canal</InputLabel>
              <StyledSelect
                labelId="channel-select-label"
                id="channel-select"
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                label="Canal"
              >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="VM">Venda Mais</MenuItem>
                <MenuItem value="VC">Venda Compartilhada</MenuItem>
                <MenuItem value="LIV">Livelo</MenuItem>
                <MenuItem value="ESF">Esfera Santander</MenuItem>
                <MenuItem value="SUB">Submarino</MenuItem>
              </StyledSelect>
            </StyledFormControl>
          </div>

          <div className="body-double">
            <StyledFormControl variant="outlined" className="body-double-intern">
              <InputLabel id="environment-select-label">Ambiente</InputLabel>
              <StyledSelect
                labelId="environment-select-label"
                id="environment-select"
                value={environment}
                onChange={(e) => setEnvironment(e.target.value)}
                label="Ambiente"
              >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="Prod">Prod</MenuItem>
                <MenuItem value="10">Stage / Preprod</MenuItem>
                <MenuItem value="10">Homolog / QA</MenuItem>
                <MenuItem value="20">TI</MenuItem>
              </StyledSelect>
            </StyledFormControl>

            
            <StyledFormControl variant="outlined" className="body-double-intern">
              <InputLabel id="product-select-label">Produto</InputLabel>
              <StyledSelect
                labelId="product-select-label"
                id="product-select"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                label="Produto"
              >
                <MenuItem value="Air">Aéreo</MenuItem>
                <MenuItem value="Hotel">Hotel</MenuItem>
                <MenuItem value="Car">Carros</MenuItem>
                <MenuItem value="Services">Serviços</MenuItem>
              </StyledSelect>
            </StyledFormControl>
          </div>
          {/* Origem */}
          <StyledTextField
            label="Origem"
            variant="outlined"
            required
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
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
