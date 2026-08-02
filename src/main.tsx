import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async';
import { registerSW } from "virtual:pwa-register";
import { ThemeProvider } from './ThemeContext.tsx'
const queryClient = new QueryClient()

// registerSW({
//   immediate: true,
// });

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New version available. Update now?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("App is ready to work offline.");
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
            <Toaster/>
          </BrowserRouter>
          </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>,
)
