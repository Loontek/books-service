import FiltersSection from '@components/FiltersSection/FiltersSection.tsx';
import BooksSection from '@components/BooksSection/BooksSection.tsx';
import {
    useGetVolumeByIdQuery,
    useGetVolumesQuery,
} from '@/store/api/volumesApi.ts';
import './App.css';

function App() {
    const { data, isLoading, error } = useGetVolumesQuery({
        q: 'frontend',
        limit: 30,
        page: 1,
    });
    console.log(data);

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
