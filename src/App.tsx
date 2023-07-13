import axios from "axios";
import "./App.css";
import TonConnector from "./components/Ton-Connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WebApp from '@twa-dev/sdk'
const queryClient = new QueryClient();

function App() {
  console.log(WebApp.initData)
  WebApp.showAlert('Hey there!');
  WebApp.sendData(JSON.stringify({
    is_visible: true,
    test: 'I am leo'
  }));
  WebApp.onEvent('settingsButtonClicked', (message) => {
    console.log(message)
  })
  sendMessage('', true);

  function sendMessage(msg_id: string, with_webview: boolean) {
    if (!WebApp.initDataUnsafe.query_id) {
      alert('WebViewQueryId not defined');
      return;
    }
    // axios.post('http://localhost:80/demo/sendMessage', {
    //   _auth: WebApp.initData, msg_id: msg_id || '', with_webview: !WebApp.initDataUnsafe.receiver && with_webview ? 1 : 0
    // })
  }

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
