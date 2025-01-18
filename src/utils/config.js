import Web3 from "web3";
import { abi} from "./abi";

export let web3 = new Web3(window.ethereum);

export async function connectWallet(){
    await window.web3.currentProvider.enable();
    window.web3 = new web3(window.web3.currentProvider);
}

export const contractAddress = "0x4128B6376E92A5a12EF3Cec550928300f3c67BD3";
export const myContract = new web3.eth.Contract(abi, contractAddress)