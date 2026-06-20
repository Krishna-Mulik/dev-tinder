import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import RootLayout from './layouts/RootLayout.tsx';
import Login from './components/auth/Login.tsx';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<Login />} />

                <Route path='/' element={<RootLayout />} >
                    <Route index element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode >
);
