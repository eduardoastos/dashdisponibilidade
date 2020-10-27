import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Checkbox } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyledTableContainer, StyledFormControlLabel } from './styles';

import { MdEdit } from 'react-icons/md'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function createData(name, calories, fat, carbs, protein, origin, enabled, description) {
  return { name, calories, fat, carbs, protein, origin, enabled, description };
}

const rows = [
  createData('Todos', 'Todos', '01/01/2020 00:00', '01/01/2020 06:00', 'Manutenção diária', '', ''),
  createData('01', 'Submarino Aéreo', '03/08/2020 10:15', '03/08/2020 10:30', 'Manutenção programada', '', '', ''),  
];

export default function MaintenanceVirtualTable({handleOpen}) {

  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  

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
    <StyledTableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className="table-background">
            <TableCell className="table-head">Registro</TableCell>
            <TableCell className="table-head" align="left">Nome de Registro</TableCell>
            <TableCell className="table-head" align="left">Início</TableCell>
            <TableCell className="table-head" align="left">Final</TableCell>
            <TableCell className="table-head" align="left">Descrição</TableCell>
            <TableCell className="table-head" align="left">Daily</TableCell>
            <TableCell className="table-head" align="left">Ativo</TableCell>
            <TableCell className="table-head" align="left">
              {/* <StyledCheckbox/> */}
            </TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
              <TableCell align="left"><StyledFormControlLabel control={<BlueCheckbox/>}/></TableCell>
              <TableCell align="left"><StyledFormControlLabel control={<BlueCheckbox/>}/></TableCell>
              <TableCell align="left"><MdEdit size={20} className="cursor-pointer" onClick={handleOpen} /></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}