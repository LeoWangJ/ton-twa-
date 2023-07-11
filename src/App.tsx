import "./App.css";
import TonConnector from "./components/Ton-Connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WebApp from '@twa-dev/sdk'
const queryClient = new QueryClient();

function App() {
  console.log(WebApp)
  WebApp.showAlert('Hey there!');
  WebApp.sendData(JSON.stringify({
    is_visible: true,
    test: 'I am leo'
  }));
  WebApp.onEvent('settingsButtonClicked', (message) => {
    console.log(message)
  })

  WebApp.sendData('memesa')
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
