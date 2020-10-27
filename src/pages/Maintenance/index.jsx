import React, { useState } from "react";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { InputLabel, MenuItem, Checkbox } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MaintenanceEdit from "./MaintenanceEdit";
import MaintenanceRegistrer from './MaintenanceRegister';
import { Container, StyledFormControlFilter, StyledSelect, StyledButton, StyledTextField } from "./styles";
import Header from '../../components/Header';
import MaintenanceVirtualTable from './MaintenanceVirtualTable';


export default function Maintenance() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [openTwo, setOpenTwo] = React.useState(false);

  const handleOpenTwo = () => {
    setOpenTwo(true);
  };

  const handleCloseTwo = () => {
    setOpenTwo(false);
  };



  const [environment, setEnvironment] = useState("");
  const [company, setCompany] = useState("");
  const [channel, setChannel] = useState("");
  const [product, setProduct] = useState("");
  const [origin, setOrigin] = useState("");


  const useStyles = makeStyles((theme) => createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
        textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
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
        <h1>Manutenções</h1>
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

            {/* <StyledFormControlLabel
              control={<BlueCheckbox />}
              label="Desabilitar Lista"
            /> */}

            <form className={classes.container} noValidate>
                <StyledTextField
                    id="datetime-local"
                    label="Início"
                    type="datetime-local"
                    defaultValue="2020-10-24T00:30"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <StyledTextField
                    id="datetime-local"
                    label="Fim"
                    type="datetime-local"
                    defaultValue="2020-10-24T00:30"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </form>

          </div>
          
          <StyledButton variant="contained" color="primary" className="button-full">
            Buscar
          </StyledButton>


          

        </div>

        <MaintenanceVirtualTable handleOpen={handleOpen}/>


        <div>
         
          <StyledButton variant="contained" color="primary" onClick={handleOpenTwo} className="button-bottom right-space">
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
            <MaintenanceEdit />
          </Modal>

          <Modal
            className={classes.modal}
            open={openTwo}
            onClose={handleCloseTwo}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            
            BackdropProps= {classes.backDrop}
          >
            <MaintenanceRegistrer />
          </Modal>
        </div>
      </Container>
    </>
  );
}
