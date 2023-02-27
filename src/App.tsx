import { Header, Footer, BurgerMenu } from './Components';
import AppRouter from './Components/AppRouter';

const App = () => {
    return (
        <div className='wrapper'>
            <Header />
            <BurgerMenu />
            <AppRouter />
            <Footer />
        </div>
    );
}

export default App;
