"use strict";
exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ babyContractAddress),
/* harmony export */   "i": () => (/* binding */ chainConfig)
/* harmony export */ });
const babyContractAddress = "0xfd1D188160dF348b27a1A2dC9d2a383C033EEF8F";
// export const babyContractAddress = "0x3611203aE7551bF519D48cA4901b02bFCde7Ca81";
//Sepolia
// export const chainConfig = {
//   chainId: "0xAA36A7",
//   chainName: "Sepolia Testnet",
//   rpcUrls: ["https://sepolia.infura.io/v3/f629b791925b4e98a8048281f9c03e44"],
//   iconUrls: ["https://cronoscan.com/images/brandassets/logo.jpg?v=22.12.2.0"],
//   blockExplorerUrls: ["https://sepolia.etherscan.io"],
//   nativeCurrency: {
//     name: "SepoliaETH",
//     symbol: "ETH",
//     decimals: 18,
//   },
// };
//Mainnet
const chainConfig = {
    chainId: "0x19",
    chainName: "Cronos Mainnet Beta",
    rpcUrls: [
        "https://cronosrpc-1.xstaking.sg"
    ],
    iconUrls: [
        "https://cronoscan.com/images/brandassets/logo.jpg?v=22.12.2.0"
    ],
    blockExplorerUrls: [
        "https://cronoscan.com/"
    ],
    nativeCurrency: {
        name: "Cronos",
        symbol: "CRO",
        decimals: 18
    },
    chainIdDecimal: 25
}; //Testnet
 // export const chainConfig = {
 //   chainId: "0x152",
 //   chainName: "Cronos Testnet Beta",
 //   rpcUrls: ["https://evm-t3.cronos.org"],
 //   iconUrls: ["https://cronoscan.com/images/brandassets/logo.jpg?v=22.12.2.0"],
 //   blockExplorerUrls: ["https://cronos.crypto.org/explorer/testnet3/"],
 //   nativeCurrency: {
 //     name: "Cronos",
 //     symbol: "CRO",
 //     decimals: 18,
 //   },
 // };


/***/ }),

/***/ 6:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uY": () => (/* binding */ appInitializeStateReducer),
/* harmony export */   "OK": () => (/* binding */ appAuthInitFinished)
/* harmony export */ });
/* unused harmony exports appInitStarted, publicInitFinished, appInitializer */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(641);


const appInitializeState = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "appInitialize",
    initialState: {
        initStarted: false,
        publicInitFinished: false,
        authInitFinished: false
    },
    reducers: {
        appInitStarted (state, action) {
            state.initStarted = true;
        },
        publicInitFinished (state, action) {
            state.publicInitFinished = true;
        },
        appAuthInitFinished (state, action) {
            state.authInitFinished = true;
        }
    }
});
const appInitializeStateReducer = appInitializeState.reducer;
/**
 * Runs once to initialize application.
 */ const appInitStarted = ()=>async (dispatch)=>{
        dispatch(appInitializeState.actions.appInitStarted());
    }
;
const appAuthInitFinished = ()=>async (dispatch)=>{
        dispatch(appInitializeState.actions.appAuthInitFinished());
    }
;
const publicInitFinished = ()=>async (dispatch)=>{
        dispatch(appInitializeState.actions.publicInitFinished());
    }
;
const appInitializer = ()=>async (dispatch)=>{
        dispatch(appInitStarted());
        //  If public routes have initializations then check should be added to Router file to wait for public initialization
        dispatch(publicInitFinished());
        const isConnectSupported = localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER") || window.ethereum || localStorage.getItem("DeFiLink_session_storage_extension") || window.navigator.userAgent.includes("Crypto.com DeFiWallet");
        if (!isConnectSupported) {
            dispatch(appAuthInitFinished());
            return;
        }
        const web3ModalWillShowUp = !localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER");
        if (web3ModalWillShowUp) {
            //  Web3Modal will show up. Let the Router redirect the user to main page.
            dispatch(appAuthInitFinished());
        }
        dispatch(connectAccount(true));
    }
;


/***/ }),

/***/ 641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jR": () => (/* binding */ setShowWrongChainModal),
/* harmony export */   "$4": () => (/* binding */ onLogout),
/* harmony export */   "EA": () => (/* binding */ user),
/* harmony export */   "Yn": () => (/* binding */ connectAccount),
/* harmony export */   "Ns": () => (/* binding */ chainConnect)
/* harmony export */ });
/* unused harmony exports accountChanged, onProvider, connectingWallet, onCorrectChain, onBasicAccountData, setIsMetamask, initProvider, updateBalance */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(322);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(137);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _initSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(427);
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sentry_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _artifacts_contracts_CrosmoBaby_sol_AlienCrosmobaby_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);
/* harmony import */ var _constants___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(821);




// import { DeFiWeb3Connector } from 'deficonnect';

// import * as DefiWalletConnectProvider from '@deficonnect/web3-provider';




let chainInfo;
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState: {
        // Wallet
        provider: null,
        address: null,
        web3modal: null,
        connectingWallet: false,
        gettingContractData: true,
        needsOnboard: false,
        // Contracts
        babyContract: null,
        correctChain: false,
        showWrongChainModal: false,
        isMetamask: false
    },
    reducers: {
        accountChanged (state, action) {
            state.balance = action.payload.balance;
            state.babyContract = action.payload.babyContract;
        },
        setIsMetamask (state, action) {
            state.isMetamask = action.payload.isMetamask;
        },
        onCorrectChain (state, action) {
            state.correctChain = action.payload.correctChain;
        },
        onProvider (state, action) {
            state.provider = action.payload.provider;
            state.needsOnboard = action.payload.needsOnboard;
            state.correctChain = action.payload.correctChain;
        },
        onBasicAccountData (state, action) {
            state.address = action.payload.address;
            state.provider = action.payload.provider;
            state.web3modal = action.payload.web3modal;
            state.correctChain = action.payload.correctChain;
            state.needsOnboard = action.payload.needsOnboard;
        },
        connectingWallet (state, action) {
            state.connectingWallet = action.payload.connecting;
        },
        setShowWrongChainModal (state, action) {
            state.showWrongChainModal = action.payload;
        },
        onLogout (state) {
            state.connectingWallet = false;
            const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())({
                cacheProvider: false,
                providerOptions: []
            });
            web3Modal.clearCachedProvider();
            if (state.web3modal != null) {
                state.web3modal.clearCachedProvider();
            }
            state.web3modal = null;
            state.provider = null;
            localStorage.clear();
            state.address = "";
            state.balance = null;
        },
        balanceUpdated (state, action) {
            state.balance = action.payload;
        }
    }
});
const { accountChanged , onProvider , connectingWallet , onCorrectChain , setShowWrongChainModal , onBasicAccountData , onLogout , setIsMetamask  } = userSlice.actions;
const user = userSlice.reducer;
const connectAccount = (firstRun = false, type = "")=>async (dispatch)=>{
        console.log("currentlyPath:::", window.location.pathname);
        // const currentlyPath = window.location.pathname;
        chainInfo = _constants___WEBPACK_IMPORTED_MODULE_8__/* .chainConfig */ .i;
        console.log("chainInfo:::", chainInfo);
        const providerOptions = {
            injected: {
                display: {
                    logo: "https://github.com/MetaMask/brand-resources/raw/master/SVG/metamask-fox.svg",
                    name: "MetaMask",
                    description: "Connect with MetaMask in your browser"
                },
                package: null
            }
        };
        if (type !== "defi") {
            providerOptions.walletconnect = {
                package: (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4___default()),
                options: {
                    // chainId: 4,
                    chainId: 25,
                    rpc: {
                        4: "https://rinkeby.infura.io/v3/33f72aa1b4f441bc8f3a244da53533b4",
                        25: "https://cronosrpc-1.xstaking.sg"
                    },
                    network: "cronos",
                    metadata: {
                        icons: [
                            "https://ebisusbay.com/vector%20-%20face.svg"
                        ]
                    }
                }
            };
            console.log("provider:", providerOptions.walletconnect);
        }
        const web3ModalWillShowUp = !localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER");
        if (false) {}
        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())({
            cacheProvider: true,
            providerOptions
        });
        const web3provider1 = await web3Modal.connect().then((web3provider)=>web3provider
        ).catch((error)=>{
            (0,_sentry_react__WEBPACK_IMPORTED_MODULE_6__.captureException)(error, {
                extra: {
                    firstRun
                }
            });
            console.log("Could not get a wallet connection", error);
            return null;
        });
        console.log('web3provider:', web3provider1);
        if (!web3provider1) {
            dispatch(onLogout());
            return;
        }
        dispatch(setIsMetamask({
            isMetamask: web3provider1.isMetaMask
        }));
        try {
            dispatch(connectingWallet({
                connecting: true
            }));
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(web3provider1);
            const cid = await web3provider1.request({
                method: "net_version"
            });
            console.log("cid: ", {
                cid,
                chainId: chainInfo.chainId
            });
            const correctChain = Number(cid) === chainInfo.chainId || Number(cid) === Number(chainInfo.chainId);
            const accounts = await web3provider1.request({
                method: "eth_accounts",
                params: [
                    {
                        chainId: cid
                    }
                ]
            });
            const address = accounts[0];
            const signer = provider.getSigner();
            if (!correctChain) {
                if (firstRun) {
                    dispatch((0,_initSlice__WEBPACK_IMPORTED_MODULE_5__/* .appAuthInitFinished */ .OK)());
                }
                await dispatch(setShowWrongChainModal(true));
            }
            await dispatch(onBasicAccountData({
                address: address,
                provider: provider,
                web3modal: web3Modal,
                needsOnboard: false,
                correctChain: correctChain
            }));
            if (firstRun) {
                dispatch((0,_initSlice__WEBPACK_IMPORTED_MODULE_5__/* .appAuthInitFinished */ .OK)());
            }
            web3provider1.on("DeFiConnectorDeactivate", (error)=>{
                dispatch(onLogout());
            });
            web3provider1.on("disconnect", (error)=>{
                dispatch(onLogout());
            });
            web3provider1.on("accountsChanged", (accounts)=>{
                dispatch(onLogout());
                dispatch(connectAccount());
            });
            web3provider1.on("DeFiConnectorUpdate", (accounts)=>{
                window.location.reload();
            });
            web3provider1.on("chainChanged", (chainId)=>{
                // Handle the new chain.
                // Correctly handling chain changes can be complicated.
                // We recommend reloading the page unless you have good reason not to.
                window.location.reload();
            });
            let balance;
            let babyContract;
            let lc;
            if (signer && correctChain) {
                babyContract = new ethers__WEBPACK_IMPORTED_MODULE_1__.Contract(_constants___WEBPACK_IMPORTED_MODULE_8__/* .babyContractAddress */ .z, _artifacts_contracts_CrosmoBaby_sol_AlienCrosmobaby_json__WEBPACK_IMPORTED_MODULE_7__/* .abi */ .Mt, signer);
                try {
                    balance = ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.formatEther(await provider.getBalance(address));
                } catch (error) {
                    console.log("Error checking CRO balance", error);
                }
            }
            await dispatch(accountChanged({
                address: address,
                provider: provider,
                web3modal: web3Modal,
                needsOnboard: false,
                correctChain: correctChain,
                balance: balance,
                babyContract
            }));
        } catch (error) {
            (0,_sentry_react__WEBPACK_IMPORTED_MODULE_6__.captureException)(error, {
                extra: {
                    firstRun,
                    WEB3_CONNECT_CACHED_PROVIDER: localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER"),
                    DeFiLink_session_storage_extension: localStorage.getItem("DeFiLink_session_storage_extension")
                }
            });
            if (firstRun) {
                dispatch((0,_initSlice__WEBPACK_IMPORTED_MODULE_5__/* .appAuthInitFinished */ .OK)());
            }
            console.log(error);
            console.log("Error connecting wallet!");
            await web3Modal.clearCachedProvider();
            dispatch(onLogout());
        }
        dispatch(connectingWallet({
            connecting: false
        }));
    }
;
const initProvider = ()=>async (dispatch)=>{
        const ethereum = await detectEthereumProvider();
        if (ethereum == null || ethereum !== window.ethereum) {
            console.log("not metamask detected");
        } else {
            const provider = new ethers.providers.Web3Provider(ethereum);
            // const signer = provider.getSigner();
            // const cid = await ethereum.request({
            //   method: "net_version",
            // });
            // const correctChain = cid === chainInfo.chainId;
            // let mdc, lc;
            // if (signer && correctChain) {
            //   mdc = new Contract(mdcContractAddress, mdcAbi, signer);
            //   lc = new Contract(lcContractAddress, lcAbi, signer);
            // }
            // const obj = {
            //   provider: provider,
            //   needsOnboard: false,
            //   membershipContract: mc,
            //   correctChain: correctChain,
            // };
            //dispatch(onProvider(obj))
            provider.on("accountsChanged", (accounts)=>{
                dispatch(accountChanged({
                    address: accounts[0]
                }));
            });
            provider.on("chainChanged", (chainId)=>{
                // Handle the new chain.
                // Correctly handling chain changes can be complicated.
                // We recommend reloading the page unless you have good reason not to.
                window.location.reload();
            });
        }
    }
;
const chainConnect = (type)=>async (dispatch)=>{
        if (window.ethereum) {
            const cid = ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.hexValue(ethers__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(chainInfo.chainId));
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: cid
                        }
                    ]
                });
            } catch (error) {
                // This error code indicates that the chain has not been added to MetaMask
                // if it is not, then install it into the user MetaMask
                if (error.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainName: chainInfo.name,
                                    chainId: cid,
                                    rpcUrls: [
                                        chainInfo.rpcUrls[0]
                                    ],
                                    blockExplorerUrls: null,
                                    nativeCurrency: {
                                        name: chainInfo.name,
                                        symbol: chainInfo.nativeCurrency.symbol,
                                        decimals: 18
                                    }
                                }, 
                            ]
                        });
                        await window.ethereum.request({
                            method: "wallet_switchEthereumChain",
                            params: [
                                {
                                    chainId: cid
                                }
                            ]
                        });
                    } catch (addError) {
                        console.error(addError);
                        window.location.reload();
                    }
                }
                console.log(error);
            }
        } else {
            // eslint-disable-next-line
            const web3Provider = new (_walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_4___default())({
                infuraId: "33f72aa1b4f441bc8f3a244da53533b4",
                rpc: {
                    4: "https://rinkeby.infura.io/v3/33f72aa1b4f441bc8f3a244da53533b4",
                    25: "https://cronosrpc-1.xstaking.sg"
                },
                // chainId: 4,
                chainId: 25
            });
        }
    }
;
const updateBalance = ()=>async (dispatch, getState)=>{
        const { user: user1  } = getState();
        const { address , provider  } = user1;
        const balance = ethers.utils.formatEther(await provider.getBalance(address));
        dispatch(userSlice.actions.balanceUpdated(balance));
    }
;


/***/ }),

/***/ 74:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"address","name":"_crosmonaut","type":"address"},{"internalType":"address","name":"_crosmocraft","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"ICrosmocraft","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ICrosmonaut","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_holders","type":"address[]"},{"internalType":"uint256[]","name":"_counts","type":"uint256[]"}],"name":"airdropNFTs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"artistFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"artistWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"crosmocraftCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"crosmonautCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isCrosmocraft","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isCrosmonaut","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"mintCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleState","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_holders","type":"address[]"},{"internalType":"uint256[]","name":"_counts","type":"uint256[]"}],"name":"setAirDropCounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setArtistWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCrosmocraftCost","type":"uint256"}],"name":"setCrosmocraftCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCrosmonautCost","type":"uint256"}],"name":"setCrosmonautCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startPublicSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"from","type":"uint256"},{"internalType":"uint256","name":"to","type":"uint256"}],"name":"teamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"teamWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');

/***/ })

};
;