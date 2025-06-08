import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import './tailwind.css'
import { ThemeProvider } from './context/themeProvider';
import { DeviceProvider } from './context/DeviceContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    {/** Providers */}
    <ThemeProvider>
    <DeviceProvider> 
       
                <App />
     
    </DeviceProvider>
    </ThemeProvider>    

    </StrictMode>,
)
