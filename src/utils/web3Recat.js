import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers } from "ethers";

const walletconnect = new WalletConnectConnector({
  rpc: { 1: "https://main-light.eth.linkpool.io/" },
  qrcode: true,
});

export const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};
