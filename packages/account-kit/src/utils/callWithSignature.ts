import { Address } from "abitype";
import { Hex, WalletClient, Transport, Chain, Account, PublicClient } from "viem";
import { writeContract } from "viem/actions";
import { AppAccountClient } from "../common";
import { signCall } from "./signCall";
import CallWithSignatureAbi from "@latticexyz/world-modules/out/IUnstable_CallWithSignatureSystem.sol/IUnstable_CallWithSignatureSystem.abi.json";

// TODO: move this to world package or similar
// TODO: nonce _or_ publicClient?

export type CallWithSignatureOptions = {
  chainId: number;
  worldAddress: Address;
  systemId: Hex;
  callData: Hex;
  /**
   * This should be bound to the same chain as `chainId` option.
   */
  publicClient: PublicClient<Transport, Chain>;
  userAccountClient: WalletClient<Transport, Chain, Account>;
  appAccountClient: AppAccountClient;
  nonce?: bigint | null;
};

export async function callWithSignature({
  chainId,
  worldAddress,
  systemId,
  callData,
  publicClient,
  userAccountClient,
  appAccountClient,
  nonce,
}: CallWithSignatureOptions) {
  const signature = await signCall({
    userAccountClient,
    chainId,
    worldAddress,
    systemId,
    callData,
    nonce,
    publicClient,
  });

  return writeContract(appAccountClient, {
    address: worldAddress,
    abi: CallWithSignatureAbi,
    functionName: "callWithSignature",
    args: [userAccountClient.account.address, systemId, callData, signature],
  });
}
