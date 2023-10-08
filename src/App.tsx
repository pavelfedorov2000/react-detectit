import AppRouter from './components/AppRouter';
import Layout from './components/layouts/Layout';
import { ClassName } from './enums/ClassName';

const App = () => {
    return (
        <div className={ClassName.Wrapper}>
            <Layout />
        </div>
    );
}

export default App;
