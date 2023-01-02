import React, { useContext, useEffect, useState } from 'react';
declare var window: any;

const { ethereum } = window;

interface CertsData {
    allCerts: any[];
    walletAddress: string;
    isConnected: boolean;
    isAdmin: boolean;
    connectWallet: () => Promise<void>;
    connecting: boolean;
}

const CertsContext = React.createContext<CertsData>({} as CertsData);

export const useCerts = () => useContext(CertsContext);

export const CertsProvider = ({ children }: { children: React.ReactNode }) => {
    const [walletAddress, setWalletAddress] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isConnected, setWalletIsConnected] = useState(false);
    const [connecting, setConnecting] = useState(false);
    const [allCerts, setAllCerts] = useState([]);

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            setConnecting(true);
            setWalletAddress(accounts[0]);
            setConnecting(false);
            setWalletIsConnected(true)
        } catch (error) {
            console.log(error);
            setConnecting(false);
        }
    };

    const checkIfWalletIsConnect = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length) {
                setWalletAddress(accounts[0]);
                setWalletIsConnected(true)
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnect()
    }, [])

    return (
        <CertsContext.Provider value={{ walletAddress, connecting, connectWallet, isAdmin, isConnected, allCerts }}>
            {children}
        </CertsContext.Provider>
    )
}
