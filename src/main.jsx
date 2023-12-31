import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/App.jsx';

import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@material-tailwind/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './stores/index.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
