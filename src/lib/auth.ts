import { PUBLIC_WEB3_AUTH_CLIENT_ID } from "$env/static/public";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { writable } from "svelte/store";
import { solanaConfigNoModal, solanaKeyProviderNoModal } from "./web3/configs";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";



export enum AuthChain {
  Solana
}



export const web3auth = writable<Web3AuthNoModal>()
  

export const initWeb3Auth = (ac?: AuthChain) => {
  ac ??= AuthChain.Solana;

  let chainConfig, privateKeyProvider; 

  if (ac == AuthChain.Solana) {
    chainConfig = solanaConfigNoModal;
    privateKeyProvider = solanaKeyProviderNoModal;
  } else {
    throw new Error("Not implemented chain");
  }


  const auth = new Web3AuthNoModal({
    clientId: PUBLIC_WEB3_AUTH_CLIENT_ID,
    web3AuthNetwork: "sapphire_mainnet", // Web3Auth Network
    chainConfig
  })

  const openloginAdapter = new OpenloginAdapter({
    privateKeyProvider
  });

  auth.configureAdapter(openloginAdapter)

  web3auth.set(auth);
}
