// import MetaMaskOnboarding, { forwarderOrigin } from '@metamask/onboarding'
import React, { useEffect } from 'react';
import Link from "next/link";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3('https://eth-ropsten.alchemyapi.io/v2/rFjml79EMZI44Pr5auHaUxIapBl-xs4f')

export default function MintPage() {

  async function onClickConnect() {
    const connectButton = document.getElementById('connectMetamask');
    if (typeof web3 !== 'undefined'){
    connectButton.innerText = 'Connecting....';
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
      connectButton.innerText = 'Connected';
      connectButton.disabled = true;
    } catch (error) {
      const message_code = error['code']
      if (message_code == 4001) {
        connectButton.innerText = 'Connect Metamask';
      }
    }
  } else {
    connectButton.innerText = 'Click here to install Metamask First and then refresh this page.';
     console.log('MetaMask is not installed')
     document.getElementById('connectMetamask').setAttribute('onClick','window.open("https://metamask.io/")')
  };
}

  const runOnLoad = (e) => {
    const connectButton = document.getElementById('connectMetamask');
    if (typeof web3 == 'undefined'){
      connectButton.innerText = 'Click here to install Metamask First and then refresh this page.';
      document.getElementById('connectMetamask').setAttribute('onClick','window.open("https://metamask.io/")')
    } else { 
      web3.eth.getAccounts(function(err, accounts){
        if (err != null) console.error("An error occurred: "+err);
        else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
        else {connectButton.innerText = 'Connected';
        connectButton.disabled = true;}
    });
    }
       }

  async function mint() {
    let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  //Sending Ethereum to an address
    ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: accounts[0],
            to: '0x4e55d726D8E995Bd8e4bD0E8A35656379B50bf50',
            value: '11C37937E08000'
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  }
  
  useEffect(() => {
    runOnLoad();
  }, [])
  return (
    <>
    <body>  
    <div className="Metamask" align="right">
      MetaMask:{" "}
      <button id='connectMetamask' type="button" onClick={(e) => onClickConnect()}>Connect Metamask</button>
    </div>    
      <h1 align="center"> Mint Page</h1>
      <h5 className="title">
          <Link href="/"><a>Back to main page.</a></Link>
      </h5>
      <section align="center">
      <button id='mint' type="button" onClick={(e) => mint()}>Mint NFT</button>
      </section>

    </body>
    </>
  );
}