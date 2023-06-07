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
  StringArrayComponent,
  StringArrayComponentInterface,
} from "../StringArrayComponent";

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
        internalType: "string[]",
        name: "value",
        type: "string[]",
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
        internalType: "string[]",
        name: "",
        type: "string[]",
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
        internalType: "string[]",
        name: "value",
        type: "string[]",
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
  "0x60806040523480156200001157600080fd5b50604051620031683803806200316883398101604081905262000034916200029a565b81818181620000433362000108565b60028190556001600160a01b03821615620000635762000063826200017c565b505060405162000073906200027e565b604051809103906000f08015801562000090573d6000803e3d6000fd5b50600380546001600160a01b0319166001600160a01b0392909216919091179055604051620000bf906200028c565b604051809103906000f080158015620000dc573d6000803e3d6000fd5b50600480546001600160a01b0319166001600160a01b039290921691909117905550620002d692505050565b60006200011f6200023460201b62000ca81760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b6200018662000258565b6001600160a01b0316336001600160a01b031614620001b857604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200021857600080fd5b505af11580156200022d573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60006200026f6200023460201b62000ca81760201c565b546001600160a01b0316919050565b61084a806200208c83390190565b61089280620028d683390190565b60008060408385031215620002ae57600080fd5b82516001600160a01b0381168114620002c657600080fd5b6020939093015192949293505050565b611da680620002e66000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c8063861eb905116100cd578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102eb578063cccf7a8e146102fe578063f2fde38b1461031157600080fd5b8063b361be46146102b8578063b8bc073d146102cb57600080fd5b80638da5cb5b116100b25780638da5cb5b146102865780639d2c76b41461028e578063af640d0f146102a157600080fd5b8063861eb905146102505780638b2829471461027357600080fd5b80633b972370116101245780634fef6a38116101095780634fef6a38146102145780636b122fe01461022757806375c0669c1461023d57600080fd5b80633b972370146101ec5780634cc822151461020157600080fd5b80630ff4c91614610156578063188a02201461017f57806330b67baa1461019f57806331b933b9146101e4575b600080fd5b6101696101643660046114c6565b610324565b60405161017691906115ab565b60405180910390f35b61019261018d36600461178b565b610348565b60405161017691906117c8565b6000546101bf9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610176565b610192610372565b6101ff6101fa36600461180c565b61042d565b005b6101ff61020f3660046114c6565b61045a565b6101ff610222366004611853565b6104a5565b61022f610583565b6040516101769291906118b8565b6101ff61024b366004611853565b61066f565b61026361025e366004611853565b610725565b6040519015158152602001610176565b6101ff610281366004611966565b6107af565b6101bf6107f8565b6101ff61029c366004611853565b610838565b6102aa60025481565b604051908152602001610176565b6101926102c63660046119a3565b610961565b6102de6102d93660046114c6565b610a1e565b60405161017691906119d8565b6101ff6102f9366004611853565b610ac0565b61026361030c3660046114c6565b610b9b565b6101ff61031f366004611853565b610c2f565b606061032f82610a1e565b80602001905181019061034291906119eb565b92915050565b60606103428260405160200161035e91906115ab565b604051602081830303815290604052610961565b600354604080517f410d59cc000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff169163410d59cc9160048083019260009291908290030181865afa1580156103e2573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526104289190810190611ad8565b905090565b610456828260405160200161044291906115ab565b6040516020818303038152906040526107af565b5050565b61046333610725565b610499576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104a281610ccc565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610515576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b604080516001808252818301909252606091829190816020015b606081526020019060019003908161059d575050604080516001808252818301909252919350602080830190803683370190505090506040518060400160405280600581526020017f76616c75650000000000000000000000000000000000000000000000000000008152508260008151811061061c5761061c611b69565b602002602001018190525060218160008151811061063c5761063c611b69565b6020026020010190602181111561065557610655611889565b9081602181111561066857610668611889565b9052509091565b61067833610725565b6106ae576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff1680610342575061077b6107f8565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161492915050565b6107b833610725565b6107ee576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104568282610f8b565b60006104287f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146108a8576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b15801561094657600080fd5b505af115801561095a573d6000803e3d6000fd5b5050505050565b60048054825160208401206040517f796c5e940000000000000000000000000000000000000000000000000000000081529283015260609173ffffffffffffffffffffffffffffffffffffffff9091169063796c5e9490602401600060405180830381865afa1580156109d8573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103429190810190611ad8565b6000818152600160205260409020805460609190610a3b90611b98565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6790611b98565b8015610ab45780601f10610a8957610100808354040283529160200191610ab4565b820191906000526020600020905b815481529060010190602001808311610a9757829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610b30576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6003546040517fcccf7a8e0000000000000000000000000000000000000000000000000000000081526004810183905260009173ffffffffffffffffffffffffffffffffffffffff169063cccf7a8e90602401602060405180830381865afa158015610c0b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103429190611beb565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610c9f576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104a281611222565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b60045460008281526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff909216916385edea1391610d0991611c0d565b60405190819003812060e083901b7fffffffff000000000000000000000000000000000000000000000000000000001682526004820152602401602060405180830381865afa158015610d60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d849190611cdf565b600003610d8e5750565b60045460008281526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff90921691636526db7a91610dcb91611c0d565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101849052604401600060405180830381600087803b158015610e2657600080fd5b505af1158015610e3a573d6000803e3d6000fd5b50506003546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff9091169250634cc822159150602401600060405180830381600087803b158015610eaa57600080fd5b505af1158015610ebe573d6000803e3d6000fd5b50505050610ecb8161122b565b60005b6005548110156104565760058181548110610eeb57610eeb611b69565b6000918252602090912001546040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690634cc8221590602401600060405180830381600087803b158015610f6057600080fd5b505af1158015610f74573d6000803e3d6000fd5b505050508080610f8390611cf8565b915050610ece565b6003546040517f1003e2d20000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff90911690631003e2d290602401600060405180830381600087803b158015610ff757600080fd5b505af115801561100b573d6000803e3d6000fd5b505060045460008581526001602052604090819020905173ffffffffffffffffffffffffffffffffffffffff9092169350636526db7a925061104c91611c0d565b60405190819003812060e083901b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482015260248101859052604401600060405180830381600087803b1580156110a757600080fd5b505af11580156110bb573d6000803e3d6000fd5b505060048054845160208601206040517f771602f7000000000000000000000000000000000000000000000000000000008152928301526024820186905273ffffffffffffffffffffffffffffffffffffffff16925063771602f79150604401600060405180830381600087803b15801561113557600080fd5b505af1158015611149573d6000803e3d6000fd5b505050506111578282611299565b60005b60055481101561121d576005818154811061117757611177611b69565b6000918252602090912001546040517f0216b83800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690630216b838906111d89086908690600401611d57565b600060405180830381600087803b1580156111f257600080fd5b505af1158015611206573d6000803e3d6000fd5b50505050808061121590611cf8565b91505061115a565b505050565b6104a281611347565b6000818152600160205260408120611242916113f3565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b59060240161092c565b600082815260016020908152604090912082516112b89284019061142d565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f906113119085908590600401611d57565b600060405180830381600087803b15801561132b57600080fd5b505af115801561133f573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405173ffffffffffffffffffffffffffffffffffffffff8481169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b5080546113ff90611b98565b6000825580601f1061140f575050565b601f0160209004906000526020600020908101906104a291906114b1565b82805461143990611b98565b90600052602060002090601f01602090048101928261145b57600085556114a1565b82601f1061147457805160ff19168380011785556114a1565b828001600101855582156114a1579182015b828111156114a1578251825591602001919060010190611486565b506114ad9291506114b1565b5090565b5b808211156114ad57600081556001016114b2565b6000602082840312156114d857600080fd5b5035919050565b60005b838110156114fa5781810151838201526020016114e2565b83811115611509576000848401525b50505050565b600081518084526115278160208601602086016114df565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000815180845260208085019450848260051b860182860160005b8581101561159e57838303895261158c83835161150f565b98850198925090840190600101611574565b5090979650505050505050565b6020815260006115be6020830184611559565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561163b5761163b6115c5565b604052919050565b600067ffffffffffffffff82111561165d5761165d6115c5565b5060051b60200190565b600067ffffffffffffffff821115611681576116816115c5565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60006116c06116bb84611667565b6115f4565b90508281528383830111156116d457600080fd5b828260208301376000602084830101529392505050565b600082601f8301126116fc57600080fd5b8135602061170c6116bb83611643565b82815260059290921b8401810191818101908684111561172b57600080fd5b8286015b8481101561178057803567ffffffffffffffff81111561174f5760008081fd5b8701603f810189136117615760008081fd5b6117728986830135604084016116ad565b84525091830191830161172f565b509695505050505050565b60006020828403121561179d57600080fd5b813567ffffffffffffffff8111156117b457600080fd5b6117c0848285016116eb565b949350505050565b6020808252825182820181905260009190848201906040850190845b81811015611800578351835292840192918401916001016117e4565b50909695505050505050565b6000806040838503121561181f57600080fd5b82359150602083013567ffffffffffffffff81111561183d57600080fd5b611849858286016116eb565b9150509250929050565b60006020828403121561186557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146115be57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6040815260006118cb6040830185611559565b8281036020848101919091528451808352858201928201906000805b8281101561193857855160228110611926577f4e487b710000000000000000000000000000000000000000000000000000000083526021600452602483fd5b845294840194928401926001016118e7565b509198975050505050505050565b600082601f83011261195757600080fd5b6115be838335602085016116ad565b6000806040838503121561197957600080fd5b82359150602083013567ffffffffffffffff81111561199757600080fd5b61184985828601611946565b6000602082840312156119b557600080fd5b813567ffffffffffffffff8111156119cc57600080fd5b6117c084828501611946565b6020815260006115be602083018461150f565b600060208083850312156119fe57600080fd5b825167ffffffffffffffff80821115611a1657600080fd5b818501915085601f830112611a2a57600080fd5b8151611a386116bb82611643565b81815260059190911b83018401908481019088831115611a5757600080fd5b8585015b83811015611acb57805185811115611a735760008081fd5b8601603f81018b13611a855760008081fd5b878101516040611a976116bb83611667565b8281528d82848601011115611aac5760008081fd5b611abb838c83018487016114df565b8652505050918601918601611a5b565b5098975050505050505050565b60006020808385031215611aeb57600080fd5b825167ffffffffffffffff811115611b0257600080fd5b8301601f81018513611b1357600080fd5b8051611b216116bb82611643565b81815260059190911b82018301908381019087831115611b4057600080fd5b928401925b82841015611b5e57835182529284019290840190611b45565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c90821680611bac57607f821691505b602082108103611be5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600060208284031215611bfd57600080fd5b815180151581146115be57600080fd5b600080835481600182811c915080831680611c2957607f831692505b60208084108203611c61577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b818015611c755760018114611ca457611cd1565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528489019650611cd1565b60008a81526020902060005b86811015611cc95781548b820152908501908301611cb0565b505084890196505b509498975050505050505050565b600060208284031215611cf157600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611d50577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b8281526040602082015260006117c0604083018461150f56fea264697066735822122001b81ebc5bc22d1dc7d86b88663dcb5f85745793cb0bbcab95b1df1f95d6f31564736f6c634300080d0033608060405234801561001057600080fd5b5061001a3361001f565b6100b4565b600061003361009060201b6105431760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b610787806100c36000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638e7cb6e11161005b5780638e7cb6e114610100578063949d225d1461012a578063cccf7a8e1461013b578063f2fde38b1461015e57600080fd5b80631003e2d21461008d578063410d59cc146100a25780634cc82215146100c05780638da5cb5b146100d3575b600080fd5b6100a061009b36600461061b565b610171565b005b6100aa610233565b6040516100b79190610634565b60405180910390f35b6100a06100ce36600461061b565b61028b565b6100db6103ef565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b61011361010e36600461061b565b610434565b6040805192151583526020830191909152016100b7565b6000546040519081526020016100b7565b61014e61014936600461061b565b610467565b60405190151581526020016100b7565b6100a061016c366004610678565b6104ca565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101e1576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101ea81610467565b61023057600080548282526001602081905260408320829055810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563018190555b50565b6060600080548060200260200160405190810160405280929190818152602001828054801561028157602002820191906000526020600020905b81548152602001906001019080831161026d575b5050505050905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146102fb576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030481610467565b156102305760008054610319906001906106b5565b81548110610329576103296106f3565b9060005260206000200154600060016000848152602001908152602001600020548154811061035a5761035a6106f3565b60009182526020808320909101929092558281526001918290526040812054815490929190819084908110610391576103916106f3565b9060005260206000200154815260200190815260200160002081905550600160008281526020019081526020016000206000905560008054806103d6576103d6610722565b6001900381819060005260206000200160009055905550565b600061042f7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b60008061044083610467565b61044f57506000928392509050565b50506000908152600160208190526040909120549091565b60008054810361047957506000919050565b60008281526001602052604081205490036104b55781600080815481106104a2576104a26106f3565b9060005260206000200154149050919050565b50600090815260016020526040902054151590565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461053a576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61023081610567565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610230928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006020828403121561062d57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561066c57835183529284019291840191600101610650565b50909695505050505050565b60006020828403121561068a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106ae57600080fd5b9392505050565b6000828210156106ee577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220c147fe9d375839842a60b6e353fbf54ccdf2be51cec6c48f280257f98aa8724264736f6c634300080d0033608060405234801561001057600080fd5b5061001a3361001f565b6100b4565b600061003361009060201b6105691760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6107cf806100c36000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806385edea131161005b57806385edea13146100d35780638da5cb5b14610101578063a0265ff81461012e578063f2fde38b1461015157600080fd5b80636526db7a14610082578063771602f714610097578063796c5e94146100aa575b600080fd5b610095610090366004610641565b610164565b005b6100956100a5366004610641565b610301565b6100bd6100b8366004610663565b6103b5565b6040516100ca919061067c565b60405180910390f35b6100f36100e1366004610663565b60009081526020819052604090205490565b6040519081526020016100ca565b610109610415565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ca565b61014161013c366004610641565b61045a565b60405190151581526020016100ca565b61009561015f3660046106c0565b6104ed565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146101d4576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101de828261045a565b156102fd57600082815260208190526040902080546101ff906001906106fd565b8154811061020f5761020f61073b565b600091825260208083209091015484835282825260408084206001845281852086865290935290922054815481106102495761024961073b565b6000918252602080832090910192909255838152600182526040808220848352808452818320548684528385529183208584529381905283549193909291849081106102975761029761073b565b600091825260208083209091015483528281019390935260409182018120939093558483526001825280832084845282528083208390558483529082905290208054806102e6576102e661076a565b600190038181906000526020600020016000905590555b5050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610371576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037b828261045a565b6102fd5760009182526020828152604080842080546001808552838720868852855292862081905585845291820181558452922090910155565b6000818152602081815260409182902080548351818402810184019094528084526060939283018282801561040957602002820191906000526020600020905b8154815260200190600101908083116103f5575b50505050509050919050565b60006104557f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6000828152602081905260408120548103610477575060006104e7565b600083815260016020908152604080832085845290915281205490036104c957600083815260208190526040812080548492906104b6576104b661073b565b90600052602060002001541490506104e7565b50600082815260016020908152604080832084845290915290205415155b92915050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461055d576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105668161058d565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610566928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806040838503121561065457600080fd5b50508035926020909101359150565b60006020828403121561067557600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156106b457835183529284019291840191600101610698565b50909695505050505050565b6000602082840312156106d257600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146106f657600080fd5b9392505050565b600082821015610736577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212205075ee04a55006f7c2f4ac9e1dcd4d1823c68da532c74ffb7267527bfc04459a64736f6c634300080d0033";

type StringArrayComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StringArrayComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StringArrayComponent__factory extends ContractFactory {
  constructor(...args: StringArrayComponentConstructorParams) {
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
  ): Promise<StringArrayComponent> {
    return super.deploy(
      world,
      id,
      overrides || {}
    ) as Promise<StringArrayComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, id, overrides || {});
  }
  override attach(address: string): StringArrayComponent {
    return super.attach(address) as StringArrayComponent;
  }
  override connect(signer: Signer): StringArrayComponent__factory {
    return super.connect(signer) as StringArrayComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StringArrayComponentInterface {
    return new utils.Interface(_abi) as StringArrayComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StringArrayComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StringArrayComponent;
  }
}
