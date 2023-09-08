import FiltersSection from '@components/FiltersSection/FiltersSection.tsx';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <>
            <FiltersSection />
            <Outlet />
        </>
    );
}

export default App;
