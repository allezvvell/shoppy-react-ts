import { createRoot } from 'react-dom/client';
import GlobalStyle from './components/styles/GlobalStyles.tsx';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import store from './store';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
