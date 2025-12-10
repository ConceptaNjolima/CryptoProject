import './App.css'
import { ThemeProvider } from './context/ThemeProvide';
import { MainPage } from './pages/MainPage'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FavoriteProvider } from './context/FavoriteProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FavoriteCoinTable } from './components/FavoriteCoinsTable';
import { Header } from './components/Header';
function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <div>
        <Header />
        <QueryClientProvider client={queryClient}>
          <FavoriteProvider>
            <ThemeProvider>
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/Favorites' element={<FavoriteCoinTable />} />
              </Routes>
              <ReactQueryDevtools initialIsOpen={false} />
            </ThemeProvider>
          </FavoriteProvider>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
