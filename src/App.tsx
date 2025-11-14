import './App.css'
import { ThemeProvider } from './context/ThemeProvide';
import { MainPage } from './pages/MainPage'
import { Header } from './components/Header';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client = {queryClient}>
      <ThemeProvider>
        <Header />
        <MainPage/>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
