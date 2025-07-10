import { styled } from '@mui/material/styles';
import styles from './MainPage.module.scss';

const StyledMainPage = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const MainPage = () => {
    return (
        <StyledMainPage>
            MainPage
        </StyledMainPage>
    )

}


export default MainPage
