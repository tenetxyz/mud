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
  Int32BareComponent,
  Int32BareComponentInterface,
} from "../Int32BareComponent";

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
        internalType: "int32",
        name: "",
        type: "int32",
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
        internalType: "int32",
        name: "value",
        type: "int32",
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
  "0x60806040523480156200001157600080fd5b50604051620013cf380380620013cf8339810160408190526200003491620001e1565b818162000041336200006b565b60028190556001600160a01b0382161562000061576200006182620000df565b505050506200021d565b6000620000826200019760201b62000a201760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b620000e9620001bb565b6001600160a01b0316336001600160a01b0316146200011b57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200017b57600080fd5b505af115801562000190573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001d26200019760201b62000a201760201c565b546001600160a01b0316919050565b60008060408385031215620001f557600080fd5b82516001600160a01b03811681146200020d57600080fd5b6020939093015192949293505050565b6111a2806200022d6000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b8bc073d11610081578063cccf7a8e11610066578063cccf7a8e146102bf578063d93c413f146102d2578063f2fde38b146102e557600080fd5b8063b8bc073d1461028c578063bf4fe57e146102ac57600080fd5b80638da5cb5b146102475780639d2c76b41461024f578063af640d0f14610262578063b361be461461027957600080fd5b80634fef6a381161010957806375c0669c116100ee57806375c0669c146101fe578063861eb905146102115780638b2829471461023457600080fd5b80634fef6a38146101d55780636b122fe0146101e857600080fd5b80630ff4c9161461013b57806330b67baa1461016657806331b933b9146101ab5780634cc82215146101c0575b600080fd5b61014e610149366004610ce7565b6102f8565b60405160039190910b81526020015b60405180910390f35b6000546101869073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015d565b6101b361031e565b60405161015d9190610d00565b6101d36101ce366004610ce7565b610352565b005b6101d36101e3366004610d44565b61039d565b6101f061047b565b60405161015d929190610e14565b6101d361020c366004610d44565b610567565b61022461021f366004610d44565b610599565b604051901515815260200161015d565b6101d3610242366004610fde565b610624565b610186610671565b6101d361025d366004610d44565b6106b6565b61026b60025481565b60405190815260200161015d565b6101b3610287366004611025565b61031e565b61029f61029a366004610ce7565b6107df565b60405161015d9190611062565b6101d36102ba366004610d44565b610881565b6102246102cd366004610ce7565b61095c565b6101d36102e0366004611084565b61097e565b6101d36102f3366004610d44565b6109a7565b600080610304836107df565b80602001905181019061031791906110b4565b9392505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035b33610599565b610391576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039a81610a44565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461040d576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b604080516001808252818301909252606091829190816020015b6060815260200190600190039081610495575050604080516001808252818301909252919350602080830190803683370190505090506040518060400160405280600581526020017f76616c756500000000000000000000000000000000000000000000000000000081525082600081518110610514576105146110d1565b6020026020010181905250600381600081518110610534576105346110d1565b6020026020010190602181111561054d5761054d610de5565b9081602181111561056057610560610de5565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061061e57506105ef610671565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b61062d33610599565b610663576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61066d8282610ab2565b5050565b60006106b17f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610726576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156107c457600080fd5b505af11580156107d8573d6000803e3d6000fd5b5050505050565b60008181526001602052604090208054606091906107fc90611100565b80601f016020809104026020016040519081016040528092919081815260200182805461082890611100565b80156108755780601f1061084a57610100808354040283529160200191610875565b820191906000526020600020905b81548152906001019060200180831161085857829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146108f1576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6000818152600160205260408120805461097590611100565b15159392505050565b60408051600383900b602082015261066d91849101604051602081830303815290604052610624565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610a17576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039a81610b60565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610a5b91610c14565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b5906024016107aa565b60008281526001602090815260409091208251610ad192840190610c4e565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610b2a9085908590600401611153565b600060405180830381600087803b158015610b4457600080fd5b505af1158015610b58573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161039a928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610c2090611100565b6000825580601f10610c30575050565b601f01602090049060005260206000209081019061039a9190610cd2565b828054610c5a90611100565b90600052602060002090601f016020900481019282610c7c5760008555610cc2565b82601f10610c9557805160ff1916838001178555610cc2565b82800160010185558215610cc2579182015b82811115610cc2578251825591602001919060010190610ca7565b50610cce929150610cd2565b5090565b5b80821115610cce5760008155600101610cd3565b600060208284031215610cf957600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610d3857835183529284019291840191600101610d1c565b50909695505050505050565b600060208284031215610d5657600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461031757600080fd5b6000815180845260005b81811015610da057602081850181015186830182015201610d84565b81811115610db2576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015610e89577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552610e77868351610d7a565b95509382019390820190600101610e3d565b50508584038187015286518085528782019482019350915060005b82811015610ef757845160228110610ee5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101610ea4565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112610f4457600080fd5b813567ffffffffffffffff80821115610f5f57610f5f610f04565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715610fa557610fa5610f04565b81604052838152866020858801011115610fbe57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610ff157600080fd5b82359150602083013567ffffffffffffffff81111561100f57600080fd5b61101b85828601610f33565b9150509250929050565b60006020828403121561103757600080fd5b813567ffffffffffffffff81111561104e57600080fd5b61105a84828501610f33565b949350505050565b6020815260006103176020830184610d7a565b8060030b811461039a57600080fd5b6000806040838503121561109757600080fd5b8235915060208301356110a981611075565b809150509250929050565b6000602082840312156110c657600080fd5b815161031781611075565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061111457607f821691505b60208210810361114d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b82815260406020820152600061105a6040830184610d7a56fea2646970667358221220caf533b5c1280be2b7200d82e761cef87a2f4dac90155ec7598e7957adba368564736f6c634300080d0033";

type Int32BareComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Int32BareComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Int32BareComponent__factory extends ContractFactory {
  constructor(...args: Int32BareComponentConstructorParams) {
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
  ): Promise<Int32BareComponent> {
    return super.deploy(
      world,
      id,
      overrides || {}
    ) as Promise<Int32BareComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, id, overrides || {});
  }
  override attach(address: string): Int32BareComponent {
    return super.attach(address) as Int32BareComponent;
  }
  override connect(signer: Signer): Int32BareComponent__factory {
    return super.connect(signer) as Int32BareComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Int32BareComponentInterface {
    return new utils.Interface(_abi) as Int32BareComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Int32BareComponent {
    return new Contract(address, _abi, signerOrProvider) as Int32BareComponent;
  }
}
