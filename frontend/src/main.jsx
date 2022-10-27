import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClientProvider, QueryClient} from 'react-query'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import {Home} from './Home'
import { Balance } from './Balance'
import { Tx } from './Tx'
import { Bloque } from './Bloque'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="balance/:address" element={<Balance/>}></Route>
                    <Route path="tx/:tx" element={<Tx/>}></Route>
                    <Route path="bloque/:bloque" element={<Bloque/>}></Route>
                    <Route path="noencontrada" element={<h2>no se puede procesar dato</h2>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
)
