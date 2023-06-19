// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { IPayableSystem } from "./interfaces/IPayableSystem.sol";
import { IUint256Component } from "./interfaces/IUint256Component.sol";
import { IWorldCore } from "./interfaces/IWorldCore.sol";

import { Ownable } from "./Ownable.sol";

/**
 * System base contract
 */
abstract contract PayableSystem is IPayableSystem, Ownable {
  IUint256Component components;
  IWorldCore world;

  constructor(IWorldCore _world, address _components) {
    components = _components == address(0) ? _world.components() : IUint256Component(_components);
    world = _world;
  }
}
