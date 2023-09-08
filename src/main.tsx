import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VolumePage from '@/pages/Volume/VolumePage.tsx';
import VolumesSection from '@/pages/VolumesSection/VolumesSection.tsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <VolumesSection />,
            },
            {
                path: 'volumes/:volumeId',
                element: <VolumePage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
