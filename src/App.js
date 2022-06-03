import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import Wallet from "./Wallet";
import '@solana/wallet-adapter-react-ui/styles.css';
import { useMemo } from "react";
import { getPhantomWallet, getSlopeWallet, getSolflareWallet, getSolletExtensionWallet, getSolletWallet } from "@solana/wallet-adapter-wallets";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";

function App() {

    const network = WalletAdapterNetwork.Devnet;
    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(
        () => [
            getPhantomWallet(),
            getSolflareWallet(),
            getSlopeWallet(),
            getSolletWallet({ network }),
            getSolletExtensionWallet({ network }),
        ],
        [network]
    );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <div className="App">
            <div className="d-flex justify-content-end mt-3 pe-3 ">
              {/* <button className="btn wallet-btn">Connect Wallet</button> */}
              <Wallet/>
            </div>
            <header className="text-center">
              <img src="/logo.png" alt=""/>
            </header>
            <div className="mint-container text-center ">
              <div className="mint-box p-5">
                <h1 className="mt-5 title">Little Duck</h1>
                <div>
                  <img src="/duck.jpg" className="banner-img img-thumbnail" alt=""/>
                </div>
                <div className="d-flex mt-3 mb-2 justify-content-between">
                  <span>MY SOLANA BALANCE</span>
                  <span>0 SOL</span>
                </div>
                <div className="d-flex gap-2 text-wh align-items-center">
                  <span>PROGRESS</span>
                  <div className="progress h-10px w-100">
                    <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"/>
                  </div>
                  <span>10%</span>
                </div>
                <div className="mt-3">
                  <button className="btn btn-lg mint-btn text-white p-3 px-5">MINT YOUR DUCK</button>
                </div>
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
