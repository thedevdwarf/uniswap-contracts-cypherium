const { ethers } = require("hardhat");

async function main() {
    const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");

    // Doğru `ethers.utils.keccak256` çağrısı
    const initCodeHash = ethers.utils.keccak256(UniswapV2Pair.bytecode);

    console.log(`INIT_CODE_HASH: ${initCodeHash}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});