
import React from 'react'
import '../src/App.css';
import Product from '../src/Product'
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
    <Routes>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  
  )
}

export default App
