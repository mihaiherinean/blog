import React from 'react';
import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <AppRoutes/>
    <ReactQueryDevtools />
    </QueryClientProvider>
    </BrowserRouter>
  
    </>
  );
}

export default App;
