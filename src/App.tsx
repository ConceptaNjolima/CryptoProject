import './App.css'
import {CoinTable} from './components/CoinTable'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client = {queryClient}>
      <CoinTable/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
