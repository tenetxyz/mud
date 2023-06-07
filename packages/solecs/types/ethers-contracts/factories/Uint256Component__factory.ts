/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  Uint256Component,
  Uint256ComponentInterface,
} from "../Uint256Component";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "world",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BareComponent__NotImplemented",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnableWritable__NotWriter",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotTransitiveOwner",
    type: "error",
  },
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
    inputs: [
      {
        internalType: "address",
        name: "writer",
        type: "address",
      },
    ],
    name: "authorizeWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntities",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "getEntitiesWithValue",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getRawValue",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSchema",
    outputs: [
      {
        internalType: "string[]",
        name: "keys",
        type: "string[]",
      },
      {
        internalType: "enum LibTypes.SchemaValue[]",
        name: "values",
        type: "uint8[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "has",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "id",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "indexer",
        type: "address",
      },
    ],
    name: "registerIndexer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_world",
        type: "address",
      },
    ],
    name: "registerWorld",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "writer",
        type: "address",
      },
    ],
    name: "unauthorizeWriter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "world",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "writeAccess",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002bba38038062002bba83398101604081905262000034916200029a565b81818181620000433362000108565b60028190556001600160a01b03821615620000635762000063826200017c565b505060405162000073906200027e565b604051809103906000f08015801562000090573d6000803e3d6000fd5b50600380546001600160a01b0319166001600160a01b0392909216919091179055604051620000bf906200028c565b604051809103906000f080158015620000dc573d6000803e3d6000fd5b50600480546001600160a01b0319166001600160a01b039290921691909117905550620002d692505050565b60006200011f6200023460201b62000ae51760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b6200018662000258565b6001600160a01b0316336001600160a01b031614620001b857604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200021857600080fd5b505af11580156200022d573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60006200026f6200023460201b62000ae51760201c565b546001600160a01b0316919050565b61084a8062001ade83390190565b610892806200232883390190565b60008060408385031215620002ae57600080fd5b82516001600160a01b0381168114620002c657600080fd5b6020939093015192949293505050565b6117f880620002e66000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80638b282947116100cd578063b8bc073d11610081578063cccf7a8e11610066578063cccf7a8e146102c0578063f2fde38b146102d3578063fbdfa1ea146102e657600080fd5b8063b8bc073d1461028d578063bf4fe57e146102ad57600080fd5b80639d2c76b4116100b25780639d2c76b41461025e578063af640d0f14610271578063b361be461461027a57600080fd5b80638b282947146102435780638da5cb5b1461025657600080fd5b80634cc82215116101245780636b122fe0116101095780636b122fe0146101f757806375c0669c1461020d578063861eb9051461022057600080fd5b80634cc82215146101d15780634fef6a38146101e457600080fd5b80630ff4c916146101565780631ab06ee51461017c57806330b67baa1461019157806331b933b9146101bc575b600080fd5b610169610164366004611267565b6102f9565b6040519081526020015b60405180910390f35b61018f61018a366004611280565b61031f565b005b6000546101a4906001600160a01b031681565b6040516001600160a01b039091168152602001610173565b6101c461034e565b60405161017391906112a2565b61018f6101df366004611267565b6103de565b61018f6101f23660046112e6565b610429565b6101ff6104b6565b604051610173929190611372565b61018f61021b3660046112e6565b6105a2565b61023361022e3660046112e6565b61064b565b6040519015158152602001610173565b61018f610251366004611500565b6106af565b6101a46106f8565b61018f61026c3660046112e6565b61072b565b61016960025481565b6101c4610288366004611547565b610821565b6102a061029b366004611267565b6108b3565b6040516101739190611584565b61018f6102bb3660046112e6565b610955565b6102336102ce366004611267565b6109df565b61018f6102e13660046112e6565b610a66565b6101c46102f4366004611267565b610ab9565b600080610305836108b3565b8060200190518101906103189190611597565b9392505050565b61034a828260405160200161033691815260200190565b6040516020818303038152906040526106af565b5050565b600354604080517f410d59cc00000000000000000000000000000000000000000000000000000000815290516060926001600160a01b03169163410d59cc9160048083019260009291908290030181865afa1580156103b1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103d991908101906115b0565b905090565b6103e73361064b565b61041d576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61042681610b09565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460546001600160a01b0316331461047357604051632f7a8ee160e01b815260040160405180910390fd5b6001600160a01b031660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c90960205260409020805460ff19166001179055565b604080516001808252818301909252606091829190816020015b60608152602001906001900390816104d0575050604080516001808252818301909252919350602080830190803683370190505090506040518060400160405280600581526020017f76616c75650000000000000000000000000000000000000000000000000000008152508260008151811061054f5761054f611656565b6020026020010181905250600d8160008151811061056f5761056f611656565b602002602001019060218111156105885761058861135c565b9081602181111561059b5761059b61135c565b9052509091565b6105ab3361064b565b6105e1576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6001600160a01b03811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff16806106a957506106946106f8565b6001600160a01b0316826001600160a01b0316145b92915050565b6106b83361064b565b6106ee576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61034a8282610d94565b60006103d97f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460546001600160a01b031690565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460546001600160a01b0316331461077557604051632f7a8ee160e01b815260040160405180910390fd5b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b15801561080657600080fd5b505af115801561081a573d6000803e3d6000fd5b5050505050565b60048054825160208401206040517f796c5e94000000000000000000000000000000000000000000000000000000008152928301526060916001600160a01b039091169063796c5e9490602401600060405180830381865afa15801561088b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106a991908101906115b0565b60008181526001602052604090208054606091906108d09061166c565b80601f01602080910402602001604051908101604052809291908181526020018280546108fc9061166c565b80156109495780601f1061091e57610100808354040283529160200191610949565b820191906000526020600020905b81548152906001019060200180831161092c57829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460546001600160a01b0316331461099f57604051632f7a8ee160e01b815260040160405180910390fd5b6001600160a01b031660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c90960205260409020805460ff19169055565b6003546040517fcccf7a8e000000000000000000000000000000000000000000000000000000008152600481018390526000916001600160a01b03169063cccf7a8e90602401602060405180830381865afa158015610a42573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a991906116a6565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460546001600160a01b03163314610ab057604051632f7a8ee160e01b815260040160405180910390fd5b61042681610ff7565b60606106a982604051602001610ad191815260200190565b604051602081830303815290604052610821565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6004546000828152600160205260409081902090516001600160a01b03909216916385edea1391610b39916116c8565b60405190819003812060e083901b7fffffffff000000000000000000000000000000000000000000000000000000001682526004820152602401602060405180830381865afa158015610b90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb49190611597565b600003610bbe5750565b6004546000828152600160205260409081902090516001600160a01b0390921691636526db7a91610bee916116c8565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101849052604401600060405180830381600087803b158015610c4957600080fd5b505af1158015610c5d573d6000803e3d6000fd5b50506003546040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481018590526001600160a01b039091169250634cc822159150602401600060405180830381600087803b158015610cc057600080fd5b505af1158015610cd4573d6000803e3d6000fd5b50505050610ce181611000565b60005b60055481101561034a5760058181548110610d0157610d01611656565b6000918252602090912001546040517f4cc82215000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b0390911690634cc8221590602401600060405180830381600087803b158015610d6957600080fd5b505af1158015610d7d573d6000803e3d6000fd5b505050508080610d8c90611763565b915050610ce4565b6003546040517f1003e2d2000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b0390911690631003e2d290602401600060405180830381600087803b158015610df357600080fd5b505af1158015610e07573d6000803e3d6000fd5b50506004546000858152600160205260409081902090516001600160a01b039092169350636526db7a9250610e3b916116c8565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101859052604401600060405180830381600087803b158015610e9657600080fd5b505af1158015610eaa573d6000803e3d6000fd5b505060048054845160208601206040517f771602f700000000000000000000000000000000000000000000000000000000815292830152602482018690526001600160a01b0316925063771602f79150604401600060405180830381600087803b158015610f1757600080fd5b505af1158015610f2b573d6000803e3d6000fd5b50505050610f398282611061565b60005b600554811015610ff25760058181548110610f5957610f59611656565b6000918252602090912001546040517f0216b8380000000000000000000000000000000000000000000000000000000081526001600160a01b0390911690630216b83890610fad90869086906004016117a9565b600060405180830381600087803b158015610fc757600080fd5b505af1158015610fdb573d6000803e3d6000fd5b505050508080610fea90611763565b915050610f3c565b505050565b61042681611102565b600081815260016020526040812061101791611194565b6000546040517f0de3b7b5000000000000000000000000000000000000000000000000000000008152600481018390526001600160a01b0390911690630de3b7b5906024016107ec565b60008281526001602090815260409091208251611080928401906111ce565b506000546040517fcfd3c57f0000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063cfd3c57f906110cc90859085906004016117a9565b600060405180830381600087803b1580156110e657600080fd5b505af11580156110fa573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046080546040516001600160a01b038481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b5080546111a09061166c565b6000825580601f106111b0575050565b601f0160209004906000526020600020908101906104269190611252565b8280546111da9061166c565b90600052602060002090601f0160209004810192826111fc5760008555611242565b82601f1061121557805160ff1916838001178555611242565b82800160010185558215611242579182015b82811115611242578251825591602001919060010190611227565b5061124e929150611252565b5090565b5b8082111561124e5760008155600101611253565b60006020828403121561127957600080fd5b5035919050565b6000806040838503121561129357600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b818110156112da578351835292840192918401916001016112be565b50909695505050505050565b6000602082840312156112f857600080fd5b81356001600160a01b038116811461031857600080fd5b6000815180845260005b8181101561133557602081850181015186830182015201611319565b81811115611347576000602083870101525b50601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b838110156113e7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08887030185526113d586835161130f565b9550938201939082019060010161139b565b50508584038187015286518085528782019482019350915060005b8281101561143c5784516022811061142a57634e487b7160e01b600052602160045260246000fd5b84529381019392810192600101611402565b5091979650505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561148857611488611449565b604052919050565b600082601f8301126114a157600080fd5b813567ffffffffffffffff8111156114bb576114bb611449565b6114ce6020601f19601f8401160161145f565b8181528460208386010111156114e357600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561151357600080fd5b82359150602083013567ffffffffffffffff81111561153157600080fd5b61153d85828601611490565b9150509250929050565b60006020828403121561155957600080fd5b813567ffffffffffffffff81111561157057600080fd5b61157c84828501611490565b949350505050565b602081526000610318602083018461130f565b6000602082840312156115a957600080fd5b5051919050565b600060208083850312156115c357600080fd5b825167ffffffffffffffff808211156115db57600080fd5b818501915085601f8301126115ef57600080fd5b81518181111561160157611601611449565b8060051b915061161284830161145f565b818152918301840191848101908884111561162c57600080fd5b938501935b8385101561164a57845182529385019390850190611631565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061168057607f821691505b6020821081036116a057634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156116b857600080fd5b8151801515811461031857600080fd5b600080835481600182811c9150808316806116e457607f831692505b6020808410820361170357634e487b7160e01b86526022600452602486fd5b818015611717576001811461172857611755565b60ff19861689528489019650611755565b60008a81526020902060005b8681101561174d5781548b820152908501908301611734565b505084890196505b509498975050505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036117a257634e487b7160e01b600052601160045260246000fd5b5060010190565b82815260406020820152600061157c604083018461130f56fea2646970667358221220ee458fa043242f57f663864cba6de4c820c2fb57b03f09ac4831bd5ce6c6050564736f6c634300080d0033608060405234801561001057600080fd5b5061001a3361001f565b6100b4565b600061003361009060201b6105431760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b610787806100c36000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638e7cb6e11161005b5780638e7cb6e114610100578063949d225d1461012a578063cccf7a8e1461013b578063f2fde38b1461015e57600080fd5b80631003e2d21461008d578063410d59cc146100a25780634cc82215146100c05780638da5cb5b146100d3575b600080fd5b6100a061009b36600461061b565b610171565b005b6100aa610233565b6040516100b79190610634565b60405180910390f35b6100a06100ce36600461061b565b61028b565b6100db6103ef565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b61011361010e36600461061b565b610434565b6040805192151583526020830191909152016100b7565b6000546040519081526020016100b7565b61014e61014936600461061b565b610467565b60405190151581526020016100b7565b6100a061016c366004610678565b6104ca565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101e1576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101ea81610467565b61023057600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563018190555b50565b6060600080548060200260200160405190810160405280929190818152602001828054801561028157602002820191906000526020600020905b81548152602001906001019080831161026d575b5050505050905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146102fb576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030481610467565b156102305760008054610319906001906106b5565b81548110610329576103296106f3565b9060005260206000200154600060016000848152602001908152602001600020548154811061035a5761035a6106f3565b60009182526020808320909101929092558281526001918290526040812054815490929190819084908110610391576103916106f3565b9060005260206000200154815260200190815260200160002081905550600160008281526020019081526020016000206000905560008054806103d6576103d6610722565b6001900381819060005260206000200160009055905550565b600061042f7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008061044083610467565b61044f57506000928392509050565b50506000908152600160208190526040909120549091565b60008054810361047957506000919050565b60008281526001602052604081205490036104b55781600080815481106104a2576104a26106f3565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461053a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61023081610567565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610230928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006020828403121561062d57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561066c57835183529284019291840191600101610650565b50909695505050505050565b60006020828403121561068a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106ae57600080fd5b9392505050565b6000828210156106ee577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea264697066735822122010e8442544721aeb2ea7e1db1a13fd47fc66330f840229a56dc8524d8245165264736f6c634300080d0033608060405234801561001057600080fd5b5061001a3361001f565b6100b4565b600061003361009060201b6105691760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6107cf806100c36000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806385edea131161005b57806385edea13146100d35780638da5cb5b14610101578063a0265ff81461012e578063f2fde38b1461015157600080fd5b80636526db7a14610082578063771602f714610097578063796c5e94146100aa575b600080fd5b610095610090366004610641565b610164565b005b6100956100a5366004610641565b610301565b6100bd6100b8366004610663565b6103b5565b6040516100ca919061067c565b60405180910390f35b6100f36100e1366004610663565b60009081526020819052604090205490565b6040519081526020016100ca565b610109610415565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ca565b61014161013c366004610641565b61045a565b60405190151581526020016100ca565b61009561015f3660046106c0565b6104ed565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101d4576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101de828261045a565b156102fd57600082815260208190526040902080546101ff906001906106fd565b8154811061020f5761020f61073b565b600091825260208083209091015484835282825260408084206001845281852086865290935290922054815481106102495761024961073b565b6000918252602080832090910192909255838152600182526040808220848352808452818320548684528385529183208584529381905283549193909291849081106102975761029761073b565b600091825260208083209091015483528281019390935260409182018120939093558483526001825280832084845282528083208390558483529082905290208054806102e6576102e661076a565b600190038181906000526020600020016000905590555b5050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610371576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037b828261045a565b6102fd5760009182526020828152604080842080546001808552838720868852855292862081905585845291820181558452922090910155565b6000818152602081815260409182902080548351818402810184019094528084526060939283018282801561040957602002820191906000526020600020905b8154815260200190600101908083116103f5575b50505050509050919050565b60006104557f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6000828152602081905260408120548103610477575060006104e7565b600083815260016020908152604080832085845290915281205490036104c957600083815260208190526040812080548492906104b6576104b661073b565b90600052602060002001541490506104e7565b50600082815260016020908152604080832084845290915290205415155b92915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461055d576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105668161058d565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610566928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806040838503121561065457600080fd5b50508035926020909101359150565b60006020828403121561067557600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156106b457835183529284019291840191600101610698565b50909695505050505050565b6000602082840312156106d257600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106f657600080fd5b9392505050565b600082821015610736577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212202fcbe961aafc75a5765c06e729b37275c4872ffa97feffbf3a841a2f87d4f87464736f6c634300080d0033";

type Uint256ComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Uint256ComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Uint256Component__factory extends ContractFactory {
  constructor(...args: Uint256ComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Uint256Component> {
    return super.deploy(
      world,
      id,
      overrides || {}
    ) as Promise<Uint256Component>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, id, overrides || {});
  }
  override attach(address: string): Uint256Component {
    return super.attach(address) as Uint256Component;
  }
  override connect(signer: Signer): Uint256Component__factory {
    return super.connect(signer) as Uint256Component__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Uint256ComponentInterface {
    return new utils.Interface(_abi) as Uint256ComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Uint256Component {
    return new Contract(address, _abi, signerOrProvider) as Uint256Component;
  }
}
