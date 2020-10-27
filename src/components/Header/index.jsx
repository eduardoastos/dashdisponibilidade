
import React from "react";
import { Container, StyledBottomNavigationAction, StyledBottomNavigation } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';



    const useStyles = makeStyles({
        root: {
            // width: 500,
            height: '6vh',
            backgroundColor: '#325095',
        },
    });
    

export default function Header() {

    const classes = useStyles();

    const [value, setValue] = React.useState('');
    const history = useHistory();

    const handleChange = (event, newValue) => {
        // history.push(`/${newValue}`);
        setValue(newValue);
    };

    return (

        // <Container value={value} onChange={handleChange} className={classes.root}>
        //     <Link to="/">Registros</Link>
        //     <Link to="">Eventos</Link>
        //     <Link to="">Métricas</Link>
        //     <Link to="">Painel</Link>
        //     <Link to="">Manutenção</Link>
        //     <Link to="">Ajuda</Link>
        // </Container>



        <Container>
            <StyledBottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <StyledBottomNavigationAction label="Registros" value="registros"/>                 
                <StyledBottomNavigationAction label="Eventos" value="eventos"/>
                <StyledBottomNavigationAction label="Métricas" value="metricas"/>
                <StyledBottomNavigationAction label="Painel" value="painel"/>
                <StyledBottomNavigationAction label="Manutenções" value="manutencoes"/>
                <StyledBottomNavigationAction label="Ajuda" value="ajuda"/>
            </StyledBottomNavigation>
        </Container>
    );
    
}