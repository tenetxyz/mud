/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { SystemStorage, SystemStorageInterface } from "../SystemStorage";

const _abi = [
  {
    inputs: [],
    name: "components",
    outputs: [
      {
        internalType: "contract IUint256Component",
        name: "",
        type: "IUint256Component",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "world",
    outputs: [
      {
        internalType: "contract IWorld",
        name: "",
        type: "IWorld",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61011661003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c806330b67baa146042578063ba62fbe41460a4575b600080fd5b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a875473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7ff67304f10c7772c78e439bc5cb07781db345424de8878c18100fdaa64d197a865473ffffffffffffffffffffffffffffffffffffffff16607b56fea2646970667358221220e70d8a3e5e354f8715802e5879152e46e69060e6b61451a8130a6b2077db27c764736f6c634300080d0033";

type SystemStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SystemStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SystemStorage__factory extends ContractFactory {
  constructor(...args: SystemStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SystemStorage> {
    return super.deploy(overrides || {}) as Promise<SystemStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SystemStorage {
    return super.attach(address) as SystemStorage;
  }
  override connect(signer: Signer): SystemStorage__factory {
    return super.connect(signer) as SystemStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SystemStorageInterface {
    return new utils.Interface(_abi) as SystemStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SystemStorage {
    return new Contract(address, _abi, signerOrProvider) as SystemStorage;
  }
}
