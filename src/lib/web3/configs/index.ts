import { PUBLIC_SOLANA_RPC } from "$env/static/public";
import { SolanaPrivateKeyProvider } from "@web3auth/solana-provider";

export const solanaConfigNoModal = {
    chainNamespace: "solana" as any,
    chainId: "0x1",
    rpcTarget: PUBLIC_SOLANA_RPC,
    displayName: "Solana Mainnet",
    blockExplorer: "https://explorer.solana.com/",
    ticker: "SOL",
    tickerName: "Solana",
}

export const solanaKeyProviderNoModal = new SolanaPrivateKeyProvider({ 
    config: { chainConfig: solanaConfigNoModal }
});


export const solanaConfig = {
    chainNamespace: "solana" as any,
    chainId: "0x1",
    rpcTarget: PUBLIC_SOLANA_RPC,
    displayName: "Solana Mainnet",
    blockExplorer: "https://explorer.solana.com/",
    ticker: "SOL",
    tickerName: "Solana",
}

export const solanaKeyProvider = new SolanaPrivateKeyProvider({ 
    config: { chainConfig: solanaConfigNoModal }
});