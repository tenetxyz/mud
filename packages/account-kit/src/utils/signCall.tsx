import { Account, Address, Chain, Hex, PublicClient, Transport, WalletClient, toHex } from "viem";
import { signTypedData } from "viem/actions";
import { callWithSignatureTypes } from "@latticexyz/world/internal";
import { getRecord } from "./getRecord";
import modulesConfig from "@latticexyz/world-modules/internal/mud.config";

// TODO: move this to world package or similar
// TODO: nonce _or_ publicClient?

export type SignCallOptions = {
  userAccountClient: WalletClient<Transport, Chain, Account>;
  chainId: number;
  worldAddress: Address;
  systemId: Hex;
  callData: Hex;
  nonce?: bigint | null;
  /**
   * This should be bound to the same chain as `chainId` option.
   */
  publicClient?: PublicClient<Transport, Chain>;
};

export async function signCall({
  userAccountClient,
  chainId,
  worldAddress,
  systemId,
  callData,
  nonce: initialNonce,
  publicClient,
}: SignCallOptions) {
  const nonce =
    initialNonce ??
    (publicClient
      ? (
          await getRecord(publicClient, {
            storeAddress: worldAddress,
            table: modulesConfig.tables.CallWithSignatureNonces,
            key: { signer: userAccountClient.account.address },
            blockTag: "pending",
          })
        ).nonce
      : 0n);

  return await signTypedData(userAccountClient, {
    account: userAccountClient.account,
    domain: {
      verifyingContract: worldAddress,
      salt: toHex(chainId, { size: 32 }),
    },
    types: callWithSignatureTypes,
    primaryType: "Call",
    message: {
      signer: userAccountClient.account.address,
      systemId,
      callData,
      nonce,
    },
  });
}
