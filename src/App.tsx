import "./App.css";
import TonConnector from "./components/Ton-Connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TWA from '@twa-dev/sdk'
const queryClient = new QueryClient();

function App() {
  console.log(TWA)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Ton Sample TWA test</h1>
        <TonConnector />
      </div>
    </QueryClientProvider>
  );
}

export default App;
