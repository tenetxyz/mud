// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

/* Autogenerated file. Do not edit manually. */

// Import store internals
import { IStore } from "@latticexyz/store/src/IStore.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { StoreCore } from "@latticexyz/store/src/StoreCore.sol";
import { Bytes } from "@latticexyz/store/src/Bytes.sol";
import { Memory } from "@latticexyz/store/src/Memory.sol";
import { SliceLib } from "@latticexyz/store/src/Slice.sol";
import { EncodeArray } from "@latticexyz/store/src/tightcoder/EncodeArray.sol";
import { FieldLayout } from "@latticexyz/store/src/FieldLayout.sol";
import { Schema } from "@latticexyz/store/src/Schema.sol";
import { EncodedLengths, EncodedLengthsLib } from "@latticexyz/store/src/EncodedLengths.sol";
import { ResourceId } from "@latticexyz/store/src/ResourceId.sol";

// Import user types
import { ResourceId } from "@latticexyz/store/src/ResourceId.sol";

library HasKeys {
  // Hex below is the result of `WorldResourceIdLib.encode({ namespace: "", name: "HasKeys", typeId: RESOURCE_TABLE });`
  ResourceId constant _tableId = ResourceId.wrap(0x746200000000000000000000000000004861734b657973000000000000000000);

  FieldLayout constant _fieldLayout =
    FieldLayout.wrap(0x0001010001000000000000000000000000000000000000000000000000000000);

  // Hex-encoded key schema of (bytes32, bytes32)
  Schema constant _keySchema = Schema.wrap(0x004002005f5f0000000000000000000000000000000000000000000000000000);
  // Hex-encoded value schema of (bool)
  Schema constant _valueSchema = Schema.wrap(0x0001010060000000000000000000000000000000000000000000000000000000);

  /**
   * @notice Get the table's key field names.
   * @return keyNames An array of strings with the names of key fields.
   */
  function getKeyNames() internal pure returns (string[] memory keyNames) {
    keyNames = new string[](2);
    keyNames[0] = "sourceTable";
    keyNames[1] = "keysHash";
  }

  /**
   * @notice Get the table's value field names.
   * @return fieldNames An array of strings with the names of value fields.
   */
  function getFieldNames() internal pure returns (string[] memory fieldNames) {
    fieldNames = new string[](1);
    fieldNames[0] = "has";
  }

  /**
   * @notice Register the table with its config.
   */
  function register() internal {
    StoreSwitch.registerTable(_tableId, _fieldLayout, _keySchema, _valueSchema, getKeyNames(), getFieldNames());
  }

  /**
   * @notice Register the table with its config.
   */
  function _register() internal {
    StoreCore.registerTable(_tableId, _fieldLayout, _keySchema, _valueSchema, getKeyNames(), getFieldNames());
  }

  /**
   * @notice Register the table with its config (using the specified store).
   */
  function register(IStore _store) internal {
    _store.registerTable(_tableId, _fieldLayout, _keySchema, _valueSchema, getKeyNames(), getFieldNames());
  }

  /**
   * @notice Get has.
   */
  function getHas(ResourceId sourceTable, bytes32 keysHash) internal view returns (bool has) {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    bytes32 _blob = StoreSwitch.getStaticField(_tableId, _keyTuple, 0, _fieldLayout);
    return (_toBool(uint8(bytes1(_blob))));
  }

  /**
   * @notice Get has.
   */
  function _getHas(ResourceId sourceTable, bytes32 keysHash) internal view returns (bool has) {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    bytes32 _blob = StoreCore.getStaticField(_tableId, _keyTuple, 0, _fieldLayout);
    return (_toBool(uint8(bytes1(_blob))));
  }

  /**
   * @notice Get has (using the specified store).
   */
  function getHas(IStore _store, ResourceId sourceTable, bytes32 keysHash) internal view returns (bool has) {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    bytes32 _blob = _store.getStaticField(_tableId, _keyTuple, 0, _fieldLayout);
    return (_toBool(uint8(bytes1(_blob))));
  }

  /**
   * @notice Get has.
   */
  function get(ResourceId sourceTable, bytes32 keysHash) internal view returns (bool has) {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    bytes32 _blob = StoreSwitch.getStaticField(_tableId, _keyTuple, 0, _fieldLayout);
    return (_toBool(uint8(bytes1(_blob))));
  }

  /**
   * @notice Get has.
   */
  function _get(ResourceId sourceTable, bytes32 keysHash) internal view returns (bool has) {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    bytes32 _blob = StoreCore.getStaticField(_tableId, _keyTuple, 0, _fieldLayout);
    return (_toBool(uint8(bytes1(_blob))));
  }

  /**
   * @notice Get has (using the specified store).
   */
  function get(IStore _store, ResourceId sourceTable, bytes32 keysHash) internal view returns (bool has) {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    bytes32 _blob = _store.getStaticField(_tableId, _keyTuple, 0, _fieldLayout);
    return (_toBool(uint8(bytes1(_blob))));
  }

  /**
   * @notice Set has.
   */
  function setHas(ResourceId sourceTable, bytes32 keysHash, bool has) internal {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    StoreSwitch.setStaticField(_tableId, _keyTuple, 0, abi.encodePacked((has)), _fieldLayout);
  }

  /**
   * @notice Set has.
   */
  function _setHas(ResourceId sourceTable, bytes32 keysHash, bool has) internal {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    StoreCore.setStaticField(_tableId, _keyTuple, 0, abi.encodePacked((has)), _fieldLayout);
  }

  /**
   * @notice Set has (using the specified store).
   */
  function setHas(IStore _store, ResourceId sourceTable, bytes32 keysHash, bool has) internal {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    _store.setStaticField(_tableId, _keyTuple, 0, abi.encodePacked((has)), _fieldLayout);
  }

  /**
   * @notice Set has.
   */
  function set(ResourceId sourceTable, bytes32 keysHash, bool has) internal {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    StoreSwitch.setStaticField(_tableId, _keyTuple, 0, abi.encodePacked((has)), _fieldLayout);
  }

  /**
   * @notice Set has.
   */
  function _set(ResourceId sourceTable, bytes32 keysHash, bool has) internal {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    StoreCore.setStaticField(_tableId, _keyTuple, 0, abi.encodePacked((has)), _fieldLayout);
  }

  /**
   * @notice Set has (using the specified store).
   */
  function set(IStore _store, ResourceId sourceTable, bytes32 keysHash, bool has) internal {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    _store.setStaticField(_tableId, _keyTuple, 0, abi.encodePacked((has)), _fieldLayout);
  }

  /**
   * @notice Delete all data for given keys.
   */
  function deleteRecord(ResourceId sourceTable, bytes32 keysHash) internal {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    StoreSwitch.deleteRecord(_tableId, _keyTuple);
  }

  /**
   * @notice Delete all data for given keys.
   */
  function _deleteRecord(ResourceId sourceTable, bytes32 keysHash) internal {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    StoreCore.deleteRecord(_tableId, _keyTuple, _fieldLayout);
  }

  /**
   * @notice Delete all data for given keys (using the specified store).
   */
  function deleteRecord(IStore _store, ResourceId sourceTable, bytes32 keysHash) internal {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    _store.deleteRecord(_tableId, _keyTuple);
  }

  /**
   * @notice Tightly pack static (fixed length) data using this table's schema.
   * @return The static data, encoded into a sequence of bytes.
   */
  function encodeStatic(bool has) internal pure returns (bytes memory) {
    return abi.encodePacked(has);
  }

  /**
   * @notice Encode all of a record's fields.
   * @return The static (fixed length) data, encoded into a sequence of bytes.
   * @return The lengths of the dynamic fields (packed into a single bytes32 value).
   * @return The dynamic (variable length) data, encoded into a sequence of bytes.
   */
  function encode(bool has) internal pure returns (bytes memory, EncodedLengths, bytes memory) {
    bytes memory _staticData = encodeStatic(has);

    EncodedLengths _encodedLengths;
    bytes memory _dynamicData;

    return (_staticData, _encodedLengths, _dynamicData);
  }

  /**
   * @notice Encode keys as a bytes32 array using this table's field layout.
   */
  function encodeKeyTuple(ResourceId sourceTable, bytes32 keysHash) internal pure returns (bytes32[] memory) {
    bytes32[] memory _keyTuple = new bytes32[](2);
    _keyTuple[0] = ResourceId.unwrap(sourceTable);
    _keyTuple[1] = keysHash;

    return _keyTuple;
  }
}

/**
 * @notice Cast a value to a bool.
 * @dev Boolean values are encoded as uint8 (1 = true, 0 = false), but Solidity doesn't allow casting between uint8 and bool.
 * @param value The uint8 value to convert.
 * @return result The boolean value.
 */
function _toBool(uint8 value) pure returns (bool result) {
  assembly {
    result := value
  }
}
