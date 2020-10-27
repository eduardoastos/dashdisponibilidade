import React, { useState } from "react";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { InputLabel, MenuItem, Checkbox } from '@material-ui/core';
import CheckCreate from "./components/CheckCreate";
import { Container, StyledFormControlFilter, StyledSelect, StyledButton, StyledFormControlLabel } from "./styles";
import Header from '../../components/Header';

import VirtualTable from './components/VirtualTable';

export default function CheckList() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [environment, setEnvironment] = useState("");
  const [company, setCompany] = useState("");
  const [channel, setChannel] = useState("");
  const [product, setProduct] = useState("");
  const [origin, setOrigin] = useState("");


  const [state, setState] = React.useState({
    // checkedB: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  const useStyles = makeStyles((theme) => createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }));

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
    <>
      <Header/>
      <Container>
        <h1>Registros</h1>
        <div className="filter">
          <div className="filter-flex">
          <StyledFormControlFilter variant="outlined" className="filter-intern">
              <InputLabel id="company-select-label">Unidade</InputLabel>
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
            </StyledFormControlFilter>
            

            

            <StyledFormControlFilter variant="outlined" className="filter-intern">
              <InputLabel id="company-select-label">Canal</InputLabel>
              <StyledSelect
                labelId="company-select-label"
                id="company-select"
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
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
            </StyledFormControlFilter>

            <StyledFormControlFilter variant="outlined" className="filter-intern">
              <InputLabel id="company-select-label">Ambiente</InputLabel>
              <StyledSelect
                labelId="company-select-label"
                id="company-select"
                value={environment}
                onChange={(e) => setEnvironment(e.target.value)}
                label="Companhia"
              >
                <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>
                <MenuItem value="CVC">Produção</MenuItem>
                <MenuItem value="LIV">Homologação</MenuItem>
                {/* <MenuItem value="ESF">Esfera Santander</MenuItem>
                <MenuItem value="SUB">Submarino</MenuItem> */}
              </StyledSelect>
            </StyledFormControlFilter>

            <StyledFormControlFilter variant="outlined" className="filter-intern">
              <InputLabel id="company-select-label">Produto</InputLabel>
              <StyledSelect
                labelId="company-select-label"
                id="company-select"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
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
            </StyledFormControlFilter>

            <StyledFormControlFilter variant="outlined" className="filter-intern">
              <InputLabel id="company-select-label">Origem</InputLabel>
              <StyledSelect
                labelId="company-select-label"
                id="company-select"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                label="Companhia"
              >
                <MenuItem value="">
                  {/* <em>Selecione</em> */}
                </MenuItem>
                <MenuItem value="CVC">CVC</MenuItem>
                <MenuItem value="LIV">Livelo</MenuItem>
                <MenuItem value="ESF">Esfera Santander</MenuItem>
                <MenuItem value="SUB">Submarino</MenuItem>
              </StyledSelect>
            </StyledFormControlFilter>

            <StyledFormControlLabel
              control={<BlueCheckbox />}
              label="Desabilitar Lista"
            />

          </div>
          
          <StyledButton variant="contained" color="primary">
            Buscar
          </StyledButton>


          

        </div>

        <VirtualTable/>


        <div>
          {/* <button type="button" onClick={handleOpen} className="button-bottom">
            Adicionar Verificação
          </button> */}
          <StyledButton variant="contained" color="primary" onClick={handleOpen} className="button-bottom right-space">
            Adicionar
          </StyledButton>

          <StyledButton variant="contained" color="primary" className="button-bottom right-space">
            Deletar
          </StyledButton>

          <StyledButton variant="contained" color="primary" className="button-bottom">
            Exportar CSV
          </StyledButton>
          
          <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            
            BackdropProps= {classes.backDrop}
          >
            <CheckCreate />
          </Modal>
        </div>
      </Container>
    </>
  );
}
