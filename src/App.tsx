import './App.css';
import FiltersSection from '@components/FiltersSection/FiltersSection.tsx';
import BooksSection from '@components/BooksSection/BooksSection.tsx';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                alignItems: 'center',
                paddingBottom: 20,
            }}
        >
            <FiltersSection />
            <span>Найдено 448 книг</span>
            <BooksSection />
            <button
                style={{
                    border: 'none',
                    outline: 'none',
                    padding: '10px 10px',
                    cursor: 'pointer',
                }}
            >
                Загрузить ещё...
            </button>
        </div>
    );
}

export default App;
