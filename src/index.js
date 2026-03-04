import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "./appkit";
import App from "./App";
import { PoolContextProvider } from "./context/poolContext";
import { StoreContextProvider } from "./context/store";
import { ApplicationContextProvider } from "./context/applicationContext";
import "./index.css";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";

// In bridge mode, wallet-bridge-init.js handles the wallet connection
// via MCW postMessage bridge. AppKit/wagmi still provide the provider
// context but window.ethereum is set by the bridge.

const queryClient = new QueryClient()

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#27C498",
    },
    secondary: {
      main: "#232227",
    },
    text: { main: "#FFFFFF" },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontSize: 14,
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          height: 0,
        },
      },
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ApplicationContextProvider>
            <StoreContextProvider>
              <PoolContextProvider>
                <ThemeProvider theme={theme}>
                  <Router>
                    <App />
                  </Router>
                </ThemeProvider>
              </PoolContextProvider>
            </StoreContextProvider>
          </ApplicationContextProvider>
        </Provider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
