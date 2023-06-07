/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TestBareComponent,
  TestBareComponentInterface,
} from "../TestBareComponent";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "world",
        type: "address",
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
        name: "",
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
        components: [
          {
            internalType: "uint256",
            name: "a",
            type: "uint256",
          },
          {
            internalType: "int32",
            name: "b",
            type: "int32",
          },
          {
            internalType: "address",
            name: "c",
            type: "address",
          },
          {
            internalType: "string",
            name: "d",
            type: "string",
          },
        ],
        internalType: "struct TestStructBare",
        name: "",
        type: "tuple",
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
        name: "",
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
        internalType: "uint256",
        name: "entity",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "a",
            type: "uint256",
          },
          {
            internalType: "int32",
            name: "b",
            type: "int32",
          },
          {
            internalType: "address",
            name: "c",
            type: "address",
          },
          {
            internalType: "string",
            name: "d",
            type: "string",
          },
        ],
        internalType: "struct TestStructBare",
        name: "value",
        type: "tuple",
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
  "0x60806040523480156200001157600080fd5b506040516200189c3803806200189c833981016040819052620000349162000200565b807fb37b5d64788473f0adc4ef64537e77af09c97f23d1de34c1ad392becb4a515c862000061336200008a565b60028190556001600160a01b0382161562000081576200008182620000fe565b50505062000232565b6000620000a1620001b660201b62000c551760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b62000108620001da565b6001600160a01b0316336001600160a01b0316146200013a57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200019a57600080fd5b505af1158015620001af573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001f1620001b660201b62000c551760201c565b546001600160a01b0316919050565b6000602082840312156200021357600080fd5b81516001600160a01b03811681146200022b57600080fd5b9392505050565b61165a80620002426000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b361be4611610081578063bf4fe57e11610066578063bf4fe57e146102bd578063cccf7a8e146102d0578063f2fde38b146102e357600080fd5b8063b361be461461028a578063b8bc073d1461029d57600080fd5b80638da5cb5b146102455780639ad6ae981461024d5780639d2c76b414610260578063af640d0f1461027357600080fd5b80634fef6a381161010957806375c0669c116100ee57806375c0669c146101fc578063861eb9051461020f5780638b2829471461023257600080fd5b80634fef6a38146101d35780636b122fe0146101e657600080fd5b80630ff4c9161461013b57806330b67baa1461016457806331b933b9146101a95780634cc82215146101be575b600080fd5b61014e610149366004610f1c565b6102f6565b60405161015b9190610faf565b60405180910390f35b6000546101849073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015b565b6101b1610386565b60405161015b9190611009565b6101d16101cc366004610f1c565b6103ba565b005b6101d16101e136600461106f565b610405565b6101ee6104e3565b60405161015b9291906110c2565b6101d161020a36600461106f565b61079c565b61022261021d36600461106f565b6107ce565b604051901515815260200161015b565b6101d16102403660046112cc565b610859565b6101846108a6565b6101d161025b366004611313565b6108eb565b6101d161026e36600461106f565b610914565b61027c60025481565b60405190815260200161015b565b6101b1610298366004611361565b610386565b6102b06102ab366004610f1c565b610a3d565b60405161015b9190611396565b6101d16102cb36600461106f565b610adf565b6102226102de366004610f1c565b610bba565b6101d16102f136600461106f565b610bdc565b604080516080810182526000808252602082018190529181018290526060808201529080808061032586610a3d565b80602001905181019061033891906113b8565b6040805160808101825263ffffffff95909516855260039390930b602085015273ffffffffffffffffffffffffffffffffffffffff9091169183019190915260608201529695505050505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c3336107ce565b6103f9576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040281610c79565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610475576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60408051600480825260a08201909252606091829190816020015b60608152602001906001900390816104fe57505060408051600480825260a08201909252919350602082016080803683370190505090506040518060400160405280600181526020017f61000000000000000000000000000000000000000000000000000000000000008152508260008151811061057e5761057e611473565b6020026020010181905250600d8160008151811061059e5761059e611473565b602002602001019060218111156105b7576105b7611093565b908160218111156105ca576105ca611093565b815250506040518060400160405280600181526020017f62000000000000000000000000000000000000000000000000000000000000008152508260018151811061061757610617611473565b602002602001018190525060038160018151811061063757610637611473565b6020026020010190602181111561065057610650611093565b9081602181111561066357610663611093565b815250506040518060400160405280600181526020017f6300000000000000000000000000000000000000000000000000000000000000815250826002815181106106b0576106b0611473565b60200260200101819052506010816002815181106106d0576106d0611473565b602002602001019060218111156106e9576106e9611093565b908160218111156106fc576106fc611093565b815250506040518060400160405280600181526020017f64000000000000000000000000000000000000000000000000000000000000008152508260038151811061074957610749611473565b6020026020010181905250600f8160038151811061076957610769611473565b6020026020010190602181111561078257610782611093565b9081602181111561079557610795611093565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061085357506108246108a6565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b610862336107ce565b610898576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108a28282610ce7565b5050565b60006108e67f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b6108a2828260405160200161090091906114eb565b604051602081830303815290604052610859565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610984576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b158015610a2257600080fd5b505af1158015610a36573d6000803e3d6000fd5b5050505050565b6000818152600160205260409020805460609190610a5a906115b8565b80601f0160208091040260200160405190810160405280929190818152602001828054610a86906115b8565b8015610ad35780601f10610aa857610100808354040283529160200191610ad3565b820191906000526020600020905b815481529060010190602001808311610ab657829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610b4f576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60008181526001602052604081208054610bd3906115b8565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610c4c576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61040281610d95565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610c9091610e49565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b590602401610a08565b60008281526001602090815260409091208251610d0692840190610e83565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610d5f908590859060040161160b565b600060405180830381600087803b158015610d7957600080fd5b505af1158015610d8d573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610402928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610e55906115b8565b6000825580601f10610e65575050565b601f0160209004906000526020600020908101906104029190610f07565b828054610e8f906115b8565b90600052602060002090601f016020900481019282610eb15760008555610ef7565b82601f10610eca57805160ff1916838001178555610ef7565b82800160010185558215610ef7579182015b82811115610ef7578251825591602001919060010190610edc565b50610f03929150610f07565b5090565b5b80821115610f035760008155600101610f08565b600060208284031215610f2e57600080fd5b5035919050565b60005b83811015610f50578181015183820152602001610f38565b83811115610f5f576000848401525b50505050565b60008151808452610f7d816020860160208601610f35565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152602082015160030b604082015273ffffffffffffffffffffffffffffffffffffffff60408301511660608201526000606083015160808084015261100160a0840182610f65565b949350505050565b6020808252825182820181905260009190848201906040850190845b8181101561104157835183529284019291840191600101611025565b50909695505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461040257600080fd5b60006020828403121561108157600080fd5b813561108c8161104d565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015611137577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552611125868351610f65565b955093820193908201906001016110eb565b50508584038187015286518085528782019482019350915060005b828110156111a557845160228110611193577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101611152565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611228576112286111b2565b604052919050565b600067ffffffffffffffff82111561124a5761124a6111b2565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261128757600080fd5b813561129a61129582611230565b6111e1565b8181528460208386010111156112af57600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156112df57600080fd5b82359150602083013567ffffffffffffffff8111156112fd57600080fd5b61130985828601611276565b9150509250929050565b6000806040838503121561132657600080fd5b82359150602083013567ffffffffffffffff81111561134457600080fd5b83016080818603121561135657600080fd5b809150509250929050565b60006020828403121561137357600080fd5b813567ffffffffffffffff81111561138a57600080fd5b61100184828501611276565b60208152600061108c6020830184610f65565b8060030b811461040257600080fd5b600080600080608085870312156113ce57600080fd5b845163ffffffff811681146113e257600080fd5b60208601519094506113f3816113a9565b60408601519093506114048161104d565b606086015190925067ffffffffffffffff81111561142157600080fd5b8501601f8101871361143257600080fd5b805161144061129582611230565b81815288602083850101111561145557600080fd5b611466826020830160208601610f35565b9598949750929550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b602081528135602082015260006020830135611506816113a9565b8060030b604084015250604083013561151e8161104d565b73ffffffffffffffffffffffffffffffffffffffff811660608401525060608301357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261157057600080fd5b8301803567ffffffffffffffff81111561158957600080fd5b80360385131561159857600080fd5b6080808501526115af60a0850182602085016114a2565b95945050505050565b600181811c908216806115cc57607f821691505b602082108103611605577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8281526040602082015260006110016040830184610f6556fea264697066735822122049ed6ab0d9074e05e47cd74c0d94a2a195b50ad34fac9b404325361d1bcbc0eb64736f6c634300080d0033";

type TestBareComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestBareComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestBareComponent__factory extends ContractFactory {
  constructor(...args: TestBareComponentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestBareComponent> {
    return super.deploy(world, overrides || {}) as Promise<TestBareComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, overrides || {});
  }
  override attach(address: string): TestBareComponent {
    return super.attach(address) as TestBareComponent;
  }
  override connect(signer: Signer): TestBareComponent__factory {
    return super.connect(signer) as TestBareComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestBareComponentInterface {
    return new utils.Interface(_abi) as TestBareComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestBareComponent {
    return new Contract(address, _abi, signerOrProvider) as TestBareComponent;
  }
}
