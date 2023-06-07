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
  Uint32BareComponent,
  Uint32BareComponentInterface,
} from "../Uint32BareComponent";

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
        internalType: "uint32",
        name: "",
        type: "uint32",
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
        internalType: "uint32",
        name: "value",
        type: "uint32",
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
  "0x60806040523480156200001157600080fd5b50604051620013d6380380620013d68339810160408190526200003491620001e1565b818162000041336200006b565b60028190556001600160a01b0382161562000061576200006182620000df565b505050506200021d565b6000620000826200019760201b62000a241760201c565b80546040519192506001600160a01b03808516929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380546001600160a01b0319166001600160a01b0392909216919091179055565b620000e9620001bb565b6001600160a01b0316336001600160a01b0316146200011b57604051632f7a8ee160e01b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117909155600254604051630f30347760e41b8152306004820152602481019190915263f303477090604401600060405180830381600087803b1580156200017b57600080fd5b505af115801562000190573d6000803e3d6000fd5b5050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000620001d26200019760201b62000a241760201c565b546001600160a01b0316919050565b60008060408385031215620001f557600080fd5b82516001600160a01b03811681146200020d57600080fd5b6020939093015192949293505050565b6111a9806200022d6000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638da5cb5b116100b2578063b8bc073d11610081578063cccf7a8e11610066578063cccf7a8e146102c1578063d923c3c4146102d4578063f2fde38b146102e757600080fd5b8063b8bc073d1461028e578063bf4fe57e146102ae57600080fd5b80638da5cb5b146102495780639d2c76b414610251578063af640d0f14610264578063b361be461461027b57600080fd5b80634fef6a381161010957806375c0669c116100ee57806375c0669c14610200578063861eb905146102135780638b2829471461023657600080fd5b80634fef6a38146101d75780636b122fe0146101ea57600080fd5b80630ff4c9161461013b57806330b67baa1461016857806331b933b9146101ad5780634cc82215146101c2575b600080fd5b61014e610149366004610ceb565b6102fa565b60405163ffffffff90911681526020015b60405180910390f35b6000546101889073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015f565b6101b5610320565b60405161015f9190610d04565b6101d56101d0366004610ceb565b610354565b005b6101d56101e5366004610d48565b61039f565b6101f261047d565b60405161015f929190610e18565b6101d561020e366004610d48565b610569565b610226610221366004610d48565b61059b565b604051901515815260200161015f565b6101d5610244366004610fe2565b610626565b610188610673565b6101d561025f366004610d48565b6106b8565b61026d60025481565b60405190815260200161015f565b6101b5610289366004611029565b610320565b6102a161029c366004610ceb565b6107e1565b60405161015f9190611066565b6101d56102bc366004610d48565b610883565b6102266102cf366004610ceb565b61095e565b6101d56102e236600461108b565b610980565b6101d56102f5366004610d48565b6109ab565b600080610306836107e1565b80602001905181019061031991906110bb565b9392505050565b60606040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035d3361059b565b610393576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039c81610a48565b50565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff16331461040f576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b604080516001808252818301909252606091829190816020015b6060815260200190600190039081610497575050604080516001808252818301909252919350602080830190803683370190505090506040518060400160405280600581526020017f76616c756500000000000000000000000000000000000000000000000000000081525082600081518110610516576105166110d8565b6020026020010181905250600a81600081518110610536576105366110d8565b6020026020010190602181111561054f5761054f610de9565b9081602181111561056257610562610de9565b9052509091565b6040517f17d5b8e800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c909602052604081205460ff168061062057506105f1610673565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b92915050565b61062f3361059b565b610665576040517f406ed3da00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61066f8282610ab6565b5050565b60006106b37f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610728576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556002546040517ff3034770000000000000000000000000000000000000000000000000000000008152306004820152602481019190915263f3034770906044015b600060405180830381600087803b1580156107c657600080fd5b505af11580156107da573d6000803e3d6000fd5b5050505050565b60008181526001602052604090208054606091906107fe90611107565b80601f016020809104026020016040519081016040528092919081815260200182805461082a90611107565b80156108775780601f1061084c57610100808354040283529160200191610877565b820191906000526020600020905b81548152906001019060200180831161085a57829003601f168201915b50505050509050919050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff1633146108f3576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff1660009081527f8ffeadc5cba727b8cc3cdef48739619490ea317fdb3baae1259089d06f92c9096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b6000818152600160205260408120805461097790611107565b15159392505050565b6040805163ffffffff8316602082015261066f91849101604051602081830303815290604052610626565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f6716804605473ffffffffffffffffffffffffffffffffffffffff163314610a1b576040517f2f7a8ee100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039c81610b64565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f67168046090565b6000818152600160205260408120610a5f91610c18565b6000546040517f0de3b7b50000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff90911690630de3b7b5906024016107ac565b60008281526001602090815260409091208251610ad592840190610c52565b506000546040517fcfd3c57f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063cfd3c57f90610b2e908590859060040161115a565b600060405180830381600087803b158015610b4857600080fd5b505af1158015610b5c573d6000803e3d6000fd5b505050505050565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460805460405161039c928492909173ffffffffffffffffffffffffffffffffffffffff8085169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b508054610c2490611107565b6000825580601f10610c34575050565b601f01602090049060005260206000209081019061039c9190610cd6565b828054610c5e90611107565b90600052602060002090601f016020900481019282610c805760008555610cc6565b82601f10610c9957805160ff1916838001178555610cc6565b82800160010185558215610cc6579182015b82811115610cc6578251825591602001919060010190610cab565b50610cd2929150610cd6565b5090565b5b80821115610cd25760008155600101610cd7565b600060208284031215610cfd57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610d3c57835183529284019291840191600101610d20565b50909695505050505050565b600060208284031215610d5a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461031957600080fd5b6000815180845260005b81811015610da457602081850181015186830182015201610d88565b81811115610db6576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000604082016040835280855180835260608501915060608160051b8601019250602080880160005b83811015610e8d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018552610e7b868351610d7e565b95509382019390820190600101610e41565b50508584038187015286518085528782019482019350915060005b82811015610efb57845160228110610ee9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b84529381019392810192600101610ea8565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112610f4857600080fd5b813567ffffffffffffffff80821115610f6357610f63610f08565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715610fa957610fa9610f08565b81604052838152866020858801011115610fc257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610ff557600080fd5b82359150602083013567ffffffffffffffff81111561101357600080fd5b61101f85828601610f37565b9150509250929050565b60006020828403121561103b57600080fd5b813567ffffffffffffffff81111561105257600080fd5b61105e84828501610f37565b949350505050565b6020815260006103196020830184610d7e565b63ffffffff8116811461039c57600080fd5b6000806040838503121561109e57600080fd5b8235915060208301356110b081611079565b809150509250929050565b6000602082840312156110cd57600080fd5b815161031981611079565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061111b57607f821691505b602082108103611154577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b82815260406020820152600061105e6040830184610d7e56fea2646970667358221220555980355f5d12e645028321f0ab0d914f7f5f7de29775c062d800d552a266e564736f6c634300080d0033";

type Uint32BareComponentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Uint32BareComponentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Uint32BareComponent__factory extends ContractFactory {
  constructor(...args: Uint32BareComponentConstructorParams) {
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
  ): Promise<Uint32BareComponent> {
    return super.deploy(
      world,
      id,
      overrides || {}
    ) as Promise<Uint32BareComponent>;
  }
  override getDeployTransaction(
    world: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(world, id, overrides || {});
  }
  override attach(address: string): Uint32BareComponent {
    return super.attach(address) as Uint32BareComponent;
  }
  override connect(signer: Signer): Uint32BareComponent__factory {
    return super.connect(signer) as Uint32BareComponent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Uint32BareComponentInterface {
    return new utils.Interface(_abi) as Uint32BareComponentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Uint32BareComponent {
    return new Contract(address, _abi, signerOrProvider) as Uint32BareComponent;
  }
}
