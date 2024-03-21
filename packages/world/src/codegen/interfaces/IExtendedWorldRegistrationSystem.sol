// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

/* Autogenerated file. Do not edit manually. */

import { ResourceId } from "@latticexyz/store/src/ResourceId.sol";
import { IOptionalSystemHook } from "./../../IOptionalSystemHook.sol";

/**
 * @title IExtendedWorldRegistrationSystem
 * @author MUD (https://mud.dev) by Lattice (https://lattice.xyz)
 * @dev This interface is automatically generated from the corresponding system contract. Do not edit manually.
 */
interface IExtendedWorldRegistrationSystem {
  function registerOptionalSystemHook(
    ResourceId systemId,
    IOptionalSystemHook hookAddress,
    uint8 enabledHooksBitmap,
    bytes32 callDataHash
  ) external;

  function unregisterOptionalSystemHook(
    ResourceId systemId,
    IOptionalSystemHook hookAddress,
    bytes32 callDataHash
  ) external;
}
