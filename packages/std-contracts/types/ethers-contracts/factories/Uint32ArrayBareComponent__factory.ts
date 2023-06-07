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
  Uint32ArrayBareComponent,
  Uint32ArrayBareComponentInterface,
} from "../Uint32ArrayBareComponent";

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
        internalType: "uint32[]",
        name: "",
        type: "uint32[]",
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
        internalType: "uint32[]",
        name: "value",
        type: "uint32[]",
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
  "0x60806040523480156200001157600080fd5b5060405162001560380380620015608339810160408190526200003491620001e1565b818162000041336200006b565b60028190556001600160a01b0382161562000061576200006182620000df565b505050506200021d565b6000620000826200019760201b62000a1b1760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b620000e9620001bb565b6001600160a01b0316336001600160a01b0316146200011b57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200017b57600080fd5b505af115801562000190573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001d26200019760201b62000a1b1760201c565b546001600160a01b0316919050565b60008060408385031215620001f557600080fd5b82516001600160a01b03811681146200020d57600080fd5b6020939093015192949293505050565b611333806200022d6000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b8bc073d11610081578063cccf7a8e11610066578063cccf7a8e146102bd578063f2fde38b146102d0578063f96911fa146102e357600080fd5b8063b8bc073d1461028a578063bf4fe57e146102aa57600080fd5b80638da5cb5b146102455780639d2c76b41461024d578063af640d0f14610260578063b361be461461027757600080fd5b80634fef6a381161010957806375c0669c116100ee57806375c0669c146101fc578063861eb9051461020f5780638b2829471461023257600080fd5b80634fef6a38146101d35780636b122fe0146101e657600080fd5b80630ff4c9161461013b57806330b67baa1461016457806331b933b9146101a95780634cc82215146101be575b600080fd5b61014e610149366004610ce2565b6102f6565b60405161015b9190610cfb565b60405180910390f35b6000546101849073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015b565b6101b161031a565b60405161015b9190610d45565b6101d16101cc366004610ce2565b61034e565b005b6101d16101e1366004610d7d565b610399565b6101ee610477565b60405161015b929190610e54565b6101d161020a366004610d7d565b610563565b61022261021d366004610d7d565b610595565b604051901515815260200161015b565b6101d1610240366004611050565b61061f565b61018461066c565b6101d161025b366004610d7d565b6106b1565b61026960025481565b60405190815260200161015b565b6101b1610285366004611097565b61031a565b61029d610298366004610ce2565b6107da565b60405161015b91906110d4565b6101d16102b8366004610d7d565b61087c565b6102226102cb366004610ce2565b610957565b6101d16102de366004610d7d565b610979565b6101d16102f136600461111d565b6109f2565b6060610301826107da565b80602001905181019061031491906111c8565b92915050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035733610595565b61038d576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039681610a3f565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610409576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b604080516001808252818301909252606091829190816020015b6060815260200190600190039081610491575050604080516001808252818301909252919350602080830190803683370190505090506040518060400160405280600581526020017f76616c75650000000000000000000000000000000000000000000000000000008152508260008151811061051057610510611262565b6020026020010181905250601c8160008151811061053057610530611262565b6020026020010190602181111561054957610549610e25565b9081602181111561055c5761055c610e25565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061031457506105eb61066c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161492915050565b61062833610595565b61065e576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106688282610aad565b5050565b60006106ac7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610721576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156107bf57600080fd5b505af11580156107d3573d6000803e3d6000fd5b5050505050565b60008181526001602052604090208054606091906107f790611291565b80601f016020809104026020016040519081016040528092919081815260200182805461082390611291565b80156108705780601f1061084557610100808354040283529160200191610870565b820191906000526020600020905b81548152906001019060200180831161085357829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146108ec576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6000818152600160205260408120805461097090611291565b15159392505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146109e9576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039681610b5b565b6106688282604051602001610a079190610cfb565b60405160208183030381529060405261061f565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610a5691610c0f565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b5906024016107a5565b60008281526001602090815260409091208251610acc92840190610c49565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610b2590859085906004016112e4565b600060405180830381600087803b158015610b3f57600080fd5b505af1158015610b53573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804608054604051610396928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610c1b90611291565b6000825580601f10610c2b575050565b601f0160209004906000526020600020908101906103969190610ccd565b828054610c5590611291565b90600052602060002090601f016020900481019282610c775760008555610cbd565b82601f10610c9057805160ff1916838001178555610cbd565b82800160010185558215610cbd579182015b82811115610cbd578251825591602001919060010190610ca2565b50610cc9929150610ccd565b5090565b5b80821115610cc95760008155600101610cce565b600060208284031215610cf457600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610d3957835163ffffffff1683529284019291840191600101610d17565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610d3957835183529284019291840191600101610d61565b600060208284031215610d8f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610db357600080fd5b9392505050565b6000815180845260005b81811015610de057602081850181015186830182015201610dc4565b81811115610df2576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015610ec9577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552610eb7868351610dba565b95509382019390820190600101610e7d565b50508584038187015286518085528782019482019350915060005b82811015610f3757845160228110610f25577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101610ee4565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610fba57610fba610f44565b604052919050565b600082601f830112610fd357600080fd5b813567ffffffffffffffff811115610fed57610fed610f44565b61101e60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610f73565b81815284602083860101111561103357600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561106357600080fd5b82359150602083013567ffffffffffffffff81111561108157600080fd5b61108d85828601610fc2565b9150509250929050565b6000602082840312156110a957600080fd5b813567ffffffffffffffff8111156110c057600080fd5b6110cc84828501610fc2565b949350505050565b602081526000610db36020830184610dba565b600067ffffffffffffffff82111561110157611101610f44565b5060051b60200190565b63ffffffff8116811461039657600080fd5b6000806040838503121561113057600080fd5b8235915060208084013567ffffffffffffffff81111561114f57600080fd5b8401601f8101861361116057600080fd5b803561117361116e826110e7565b610f73565b81815260059190911b8201830190838101908883111561119257600080fd5b928401925b828410156111b95783356111aa8161110b565b82529284019290840190611197565b80955050505050509250929050565b600060208083850312156111db57600080fd5b825167ffffffffffffffff8111156111f257600080fd5b8301601f8101851361120357600080fd5b805161121161116e826110e7565b81815260059190911b8201830190838101908783111561123057600080fd5b928401925b828410156112575783516112488161110b565b82529284019290840190611235565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c908216806112a557607f821691505b6020821081036112de577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8281526040602082015260006110cc6040830184610dba56fea26469706673582212204064bd294fe0de2d9b17085b0e07df5fe69af8b6bc24d285032860b9c56a391864736f6c634300080d0033";

type Uint32ArrayBareComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Uint32ArrayBareComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Uint32ArrayBareComponent__factory extends ContractFactory {
  constructor(...args: Uint32ArrayBareComponentConstructorParams) {
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
  ): Promise<Uint32ArrayBareComponent> {
    return super.deploy(
      world,
      id,
      overrides || {}
    ) as Promise<Uint32ArrayBareComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, id, overrides || {});
  }
  override attach(address: string): Uint32ArrayBareComponent {
    return super.attach(address) as Uint32ArrayBareComponent;
  }
  override connect(signer: Signer): Uint32ArrayBareComponent__factory {
    return super.connect(signer) as Uint32ArrayBareComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Uint32ArrayBareComponentInterface {
    return new utils.Interface(_abi) as Uint32ArrayBareComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Uint32ArrayBareComponent {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Uint32ArrayBareComponent;
  }
}