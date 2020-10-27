import styled from "styled-components";
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';


export const StyledBottomNavigationAction = styled(BottomNavigationAction)`
  
  .MuiBottomNavigationAction-label {
      color: #fff709;
  }

  .MuiBottomNavigationAction-iconOnly {
    opacity: 1;
    color: white;
    font-size: 14px;
  }

  

`;

export const StyledBottomNavigation = styled(BottomNavigation)`
  
  .MuiBottomNavigation-root {
      height: 6vh;
  }

`;

export const Container = styled.header`
    padding-left: 2%;
    position: fixed;
    top: 0;
    width: 100%;
    height: 6vh;
    background-color: rgb(50, 80, 149);
    display: flex;
    align-items: center;

    a {
        color: white;

        text-decoration: none;
        margin-right: 2%;

        &:hover {
        color: rgb(204, 204, 204);

            /* font-weight: 500; */
            /* transform: scale(1.06); */
        }
    }
`;