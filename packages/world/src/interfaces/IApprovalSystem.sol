// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

interface IApprovalSystem {
  function setApproval(
    address grantee,
    uint128 expiryTimestamp,
    uint128 numCalls,
    bytes4 funcSelector,
    bytes memory args
  ) external;

  function revokeApproval(address grantee, uint256 systemID) external;

  function revokeApprovalForSystem(address grantee) external;

  function reduceApprovalForSystem(address grantor, address grantee, bytes memory funcSelectorAndArgs) external;

  function reduceApproval(
    address grantor,
    address grantee,
    uint256 systemID,
    bytes memory funcSelectorAndArgs
  ) external;
}
