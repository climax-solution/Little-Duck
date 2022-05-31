function App() {
  return (
    <div className="App">
      <div className="text-end">
        <button className="btn wallet-btn text-white mt-3 me-3">Connect Wallet</button>
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
  );
}

export default App;
