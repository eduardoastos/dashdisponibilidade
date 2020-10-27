import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyledTableContainer } from './styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, origin, enabled, description) {
  return { name, calories, fat, carbs, protein, origin, enabled, description };
}

const rows = [
  createData('1', 'CVC Venda Compartilhada', 'Aéreo', 'VC', 'Produção', 'QA Testes', '', 'Checagens de produto Aéreo CVC'),
  createData('2', 'CVC Venda Compartilhada Hotel', 'Hotel', 'VC', 'Produção', 'QA Testes', '', 'Checagens de produto Hotel CVC'),
  createData('3', 'Submarino Aéreo VC', 'Aéreo', 'VC', 'Homologação', 'QA Testes', '', 'Checagens de produto Aéreo Submarino'),
  createData('4', 'Submarino Hotel', 'Hotel', 'Submarino', 'Homologação', 'QA Testes', '', 'Checagens de produto Hotel Submarino Produção'),
  createData('5', 'CVC Venda Compartilhada', 'Aéreo', 'VC', 'Prod', 'QA Testes', '', 'Checagens de produto Aéreo CVC'),
  // createData('6', 'CVC Venda Compartilhada Hotel', 'Hotel', 'VC', 'Prod', 'QA Tests', '', 'Checagens de produto Hotel CVC'),
  // createData('7', 'Submarino Aéreo VC', 'Aéreo', 'VC', 'Prod', 'QA Tests', '', 'Checagens de produto aéreo Sub'),
  // createData('5', 'Submarino Aéreo VC', 'Air', 'VC', 'Prod', 'QA Tests', '', 'Checagens de produto aéreo Sub'),
  // createData('6', 'Submarino Aéreo VC', 'Air', 'VC', 'Prod', 'QA Tests', '', 'Checagens de produto aéreo Sub'),
  // createData('7', 'Submarino Aéreo VC', 'Air', 'VC', 'Prod', 'QA Tests', '', 'Checagens de produto aéreo Sub'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <StyledTableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className="table-background">
            <TableCell className="table-head">ID</TableCell>
            <TableCell className="table-head" align="left">Nome</TableCell>
            <TableCell className="table-head" align="left">Produto</TableCell>
            <TableCell className="table-head" align="left">Canal</TableCell>
            <TableCell className="table-head" align="left">Ambiente</TableCell>
            <TableCell className="table-head" align="left">Origem</TableCell>
            <TableCell className="table-head" align="left">Ativado</TableCell>
           
            <TableCell className="table-head" align="left">Descrição</TableCell>
            {/* <TableCell align="left"> </TableCell> */}
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
              <TableCell align="left">{row.origin}</TableCell>
              <TableCell align="left">{row.enabled}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}