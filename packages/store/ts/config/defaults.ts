export const DEFAULTS = {
  namespace: "",
  enums: {},
  userTypes: {},
} as const;

export type DEFAULTS = typeof DEFAULTS;

export const TABLE_DEFAULTS = {
  directory: "tables",
  keySchema: { key: "bytes32" },
  tableIdArgument: false,
  storeArgument: false,
  offchainOnly: false,
} as const;

export type TABLE_DEFAULTS = typeof TABLE_DEFAULTS;
