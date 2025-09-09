let contract;
let web3;

window.addEventListener('load', async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else {
    alert('Please install MetaMask!');
    return;
  }

  const networkId = await web3.eth.net.getId();
  const deployedNetwork = await fetch('build/contracts/GiftChain.json')
    .then(res => res.json())
    .then(data => data.networks[networkId]);

  const abi = await fetch('build/contracts/GiftChain.json')
    .then(res => res.json())
    .then(data => data.abi);

  contract = new web3.eth.Contract(abi, deployedNetwork.address);
});

async function donate() {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.donate().send({ from: accounts[0], value: web3.utils.toWei('0.01', 'ether') });
  document.getElementById('status').innerText = 'Donation sent!';
}
