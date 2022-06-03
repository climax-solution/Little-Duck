import React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { shortenAddress } from './candy-machine';

export default function Wallet() {

    const wallet = useWallet();
    const connection = useConnection();
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.


    console.log("wallet=>", wallet, connection)
    return (
        <>
            {
                !wallet.connected ? <WalletMultiButton className='btn wallet-btn'>Connect Wallet</WalletMultiButton>
                : <button className='wallet-adapter-button btn wallet-btn'>{shortenAddress(wallet.publicKey.toBase58())}</button>
            }
        </>
    )
}