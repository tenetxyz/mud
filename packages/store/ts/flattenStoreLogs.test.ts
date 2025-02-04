/* eslint-disable max-len */
import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { getStoreLogs } from "./getStoreLogs";
import { flattenStoreLogs } from "./flattenStoreLogs";
import { deployMockGame } from "mock-game-contracts";
import { summarizeLogs } from "./test/summarizeLogs";
import { createTestClient, snapshotAnvilState } from "with-anvil";

describe("flattenStoreLogs", async () => {
  beforeAll(snapshotAnvilState);
  beforeEach(snapshotAnvilState);

  beforeAll(async () => {
    await deployMockGame();
  });

  it("flattens store logs", async () => {
    const logs = await getStoreLogs(createTestClient(), { fromBlock: "earliest", toBlock: "latest" });
    const flattenedLogs = flattenStoreLogs(logs);

    expect(summarizeLogs(flattenedLogs)).toMatchInlineSnapshot(`
      [
        "Store_SetRecord  world__InitModuleAddres  ()",
        "Store_SetRecord  store__Tables  (0x746273746f72650000000000000000005461626c657300000000000000000000)",
        "Store_SetRecord  store__Tables  (0x746273746f72650000000000000000005265736f757263654964730000000000)",
        "Store_SetRecord  store__ResourceIds  (0x746273746f72650000000000000000005461626c657300000000000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x746273746f72650000000000000000005265736f757263654964730000000000)",
        "Store_SetRecord  store__Tables  (0x746273746f726500000000000000000053746f7265486f6f6b73000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x746273746f726500000000000000000053746f7265486f6f6b73000000000000)",
        "Store_SetRecord  store__Tables  (0x7462776f726c640000000000000000004e616d6573706163654f776e65720000)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c640000000000000000004e616d6573706163654f776e65720000)",
        "Store_SetRecord  store__Tables  (0x7462776f726c6400000000000000000042616c616e6365730000000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c6400000000000000000042616c616e6365730000000000000000)",
        "Store_SetRecord  store__Tables  (0x7462776f726c64000000000000000000496e7374616c6c65644d6f64756c6573)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c64000000000000000000496e7374616c6c65644d6f64756c6573)",
        "Store_SetRecord  store__Tables  (0x7462776f726c640000000000000000005573657244656c65676174696f6e436f)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c640000000000000000005573657244656c65676174696f6e436f)",
        "Store_SetRecord  store__Tables  (0x7462776f726c640000000000000000004e616d65737061636544656c65676174)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c640000000000000000004e616d65737061636544656c65676174)",
        "Store_SetRecord  store__Tables  (0x7462776f726c640000000000000000005265736f757263654163636573730000)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c640000000000000000005265736f757263654163636573730000)",
        "Store_SetRecord  store__Tables  (0x7462776f726c6400000000000000000053797374656d73000000000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c6400000000000000000053797374656d73000000000000000000)",
        "Store_SetRecord  store__Tables  (0x7462776f726c6400000000000000000046756e6374696f6e53656c6563746f72)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c6400000000000000000046756e6374696f6e53656c6563746f72)",
        "Store_SetRecord  store__Tables  (0x6f74776f726c6400000000000000000046756e6374696f6e5369676e61747572)",
        "Store_SetRecord  store__ResourceIds  (0x6f74776f726c6400000000000000000046756e6374696f6e5369676e61747572)",
        "Store_SetRecord  store__Tables  (0x7462776f726c6400000000000000000053797374656d486f6f6b730000000000)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c6400000000000000000053797374656d486f6f6b730000000000)",
        "Store_SetRecord  store__Tables  (0x7462776f726c6400000000000000000053797374656d52656769737472790000)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c6400000000000000000053797374656d52656769737472790000)",
        "Store_SetRecord  store__Tables  (0x7462776f726c64000000000000000000496e69744d6f64756c65416464726573)",
        "Store_SetRecord  store__ResourceIds  (0x7462776f726c64000000000000000000496e69744d6f64756c65416464726573)",
        "Store_SetRecord  store__ResourceIds  (0x6e73000000000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x6e7373746f726500000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__NamespaceOwner  (0x6e7373746f726500000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__ResourceAccess  (0x6e7373746f726500000000000000000000000000000000000000000000000000,0x0000000000000000000000008dc4168dc8e582f0ef5adbab3c0873856682639b)",
        "Store_SetRecord  store__ResourceIds  (0x6e73776f726c6400000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__NamespaceOwner  (0x6e73776f726c6400000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__ResourceAccess  (0x6e73776f726c6400000000000000000000000000000000000000000000000000,0x0000000000000000000000008dc4168dc8e582f0ef5adbab3c0873856682639b)",
        "Store_SetRecord  store__ResourceIds  (0x737900000000000000000000000000004163636573734d616e6167656d656e74)",
        "Store_SetRecord  world__Systems  (0x737900000000000000000000000000004163636573734d616e6167656d656e74)",
        "Store_SetRecord  world__SystemRegistry  (0x00000000000000000000000073e872dcf77241b6d2afe4169ac27f9d31767292)",
        "Store_SetRecord  world__ResourceAccess  (0x6e73000000000000000000000000000000000000000000000000000000000000,0x00000000000000000000000073e872dcf77241b6d2afe4169ac27f9d31767292)",
        "Store_SetRecord  store__ResourceIds  (0x7379000000000000000000000000000042616c616e63655472616e7366657200)",
        "Store_SetRecord  world__Systems  (0x7379000000000000000000000000000042616c616e63655472616e7366657200)",
        "Store_SetRecord  world__SystemRegistry  (0x00000000000000000000000050418155710200d0266e683a93209aa60501b7b3)",
        "Store_SetRecord  world__ResourceAccess  (0x6e73000000000000000000000000000000000000000000000000000000000000,0x00000000000000000000000050418155710200d0266e683a93209aa60501b7b3)",
        "Store_SetRecord  store__ResourceIds  (0x73790000000000000000000000000000426174636843616c6c00000000000000)",
        "Store_SetRecord  world__Systems  (0x73790000000000000000000000000000426174636843616c6c00000000000000)",
        "Store_SetRecord  world__SystemRegistry  (0x0000000000000000000000002aac36425e74ff6c0778da582c55176394a067b0)",
        "Store_SetRecord  world__ResourceAccess  (0x6e73000000000000000000000000000000000000000000000000000000000000,0x0000000000000000000000002aac36425e74ff6c0778da582c55176394a067b0)",
        "Store_SetRecord  store__ResourceIds  (0x73790000000000000000000000000000526567697374726174696f6e00000000)",
        "Store_SetRecord  world__Systems  (0x73790000000000000000000000000000526567697374726174696f6e00000000)",
        "Store_SetRecord  world__SystemRegistry  (0x000000000000000000000000047f80b91559887ab304519858c0bce90f2a00a6)",
        "Store_SetRecord  world__ResourceAccess  (0x6e73000000000000000000000000000000000000000000000000000000000000,0x000000000000000000000000047f80b91559887ab304519858c0bce90f2a00a6)",
        "Store_SetRecord  world__FunctionSelector  (0x40554c3a00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x40554c3a00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x8d53b20800000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x8d53b20800000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0xef5d6bbb00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xef5d6bbb00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x219adc2e00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x219adc2e00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0xc9c85a6000000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xc9c85a6000000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x45afd19900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x45afd19900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0xce5e8dd900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xce5e8dd900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x8fc8cf7e00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x8fc8cf7e00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x8da798da00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x8da798da00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x0ba51f4900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x0ba51f4900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x530f4b6000000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x530f4b6000000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x0560912900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x0560912900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0xb29e408900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xb29e408900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0xd5f8337f00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xd5f8337f00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0xa92813ad00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xa92813ad00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x3350b6a900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x3350b6a900000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x26d9810200000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x26d9810200000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x6548a90a00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x6548a90a00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x1d2257ba00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x1d2257ba00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0xcdc938c500000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xcdc938c500000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0xbfdfaff700000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xbfdfaff700000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0xaa66e9c800000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xaa66e9c800000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__InstalledModules  (0x0000000000000000000000009fcc45958071325949b488a784268371f17cb2d7,0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470)",
        "Store_SetRecord  world__NamespaceOwner  (0x6e73000000000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__ResourceAccess  (0x6e73000000000000000000000000000000000000000000000000000000000000,0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266)",
        "Store_SetRecord  store__Tables  (0x74620000000000000000000000000000506f736974696f6e0000000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x74620000000000000000000000000000506f736974696f6e0000000000000000)",
        "Store_SetRecord  store__Tables  (0x746200000000000000000000000000004865616c746800000000000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x746200000000000000000000000000004865616c746800000000000000000000)",
        "Store_SetRecord  store__Tables  (0x74620000000000000000000000000000496e76656e746f727900000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x74620000000000000000000000000000496e76656e746f727900000000000000)",
        "Store_SetRecord  store__Tables  (0x7462000000000000000000000000000053636f72650000000000000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x7462000000000000000000000000000053636f72650000000000000000000000)",
        "Store_SetRecord  store__Tables  (0x7462000000000000000000000000000057696e6e657200000000000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x7462000000000000000000000000000057696e6e657200000000000000000000)",
        "Store_SetRecord  store__Tables  (0x746200000000000000000000000000005465727261696e000000000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x746200000000000000000000000000005465727261696e000000000000000000)",
        "Store_SetRecord  store__ResourceIds  (0x737900000000000000000000000000004d6f766553797374656d000000000000)",
        "Store_SetRecord  world__Systems  (0x737900000000000000000000000000004d6f766553797374656d000000000000)",
        "Store_SetRecord  world__SystemRegistry  (0x00000000000000000000000008f2b45d8787be8a81869d9968f25323861352b0)",
        "Store_SetRecord  world__ResourceAccess  (0x6e73000000000000000000000000000000000000000000000000000000000000,0x00000000000000000000000008f2b45d8787be8a81869d9968f25323861352b0)",
        "Store_SetRecord  world__FunctionSelector  (0xb591186e00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xb591186e00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  store__Tables  (0x7462000000000000000000000000000043616c6c576974685369676e61747572)",
        "Store_SetRecord  store__ResourceIds  (0x7462000000000000000000000000000043616c6c576974685369676e61747572)",
        "Store_SetRecord  store__ResourceIds  (0x7379000000000000000000000000000044656c65676174696f6e000000000000)",
        "Store_SetRecord  world__Systems  (0x7379000000000000000000000000000044656c65676174696f6e000000000000)",
        "Store_SetRecord  world__SystemRegistry  (0x0000000000000000000000003381d30ec2b116ce996ab7c17852c3ea34eb1823)",
        "Store_SetRecord  world__ResourceAccess  (0x6e73000000000000000000000000000000000000000000000000000000000000,0x0000000000000000000000003381d30ec2b116ce996ab7c17852c3ea34eb1823)",
        "Store_SetRecord  world__FunctionSelector  (0x1fae630800000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x1fae630800000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__InstalledModules  (0x00000000000000000000000051bd8d2de7017c23ee5bdc885e70dfdd0862b837,0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470)",
        "Store_SetRecord  store__ResourceIds  (0x6e736d6574616461746100000000000000000000000000000000000000000000)",
        "Store_SetRecord  store__Tables  (0x74626d657461646174610000000000005265736f757263655461670000000000)",
        "Store_SetRecord  store__ResourceIds  (0x74626d657461646174610000000000005265736f757263655461670000000000)",
        "Store_SetRecord  store__ResourceIds  (0x73796d657461646174610000000000004d6574616461746153797374656d0000)",
        "Store_SetRecord  world__Systems  (0x73796d657461646174610000000000004d6574616461746153797374656d0000)",
        "Store_SetRecord  world__SystemRegistry  (0x00000000000000000000000053e501d8e4c977ff5b27446ec6a60e57c7ef1050)",
        "Store_SetRecord  world__ResourceAccess  (0x6e736d6574616461746100000000000000000000000000000000000000000000,0x00000000000000000000000053e501d8e4c977ff5b27446ec6a60e57c7ef1050)",
        "Store_SetRecord  world__FunctionSelector  (0xff66f05f00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xc6972e9300000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xff66f05f00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0xefc1704200000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x116e68f200000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xefc1704200000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSelector  (0x5ce7ca1a00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0xf128760200000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__FunctionSignatur  (0x5ce7ca1a00000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__NamespaceOwner  (0x6e736d6574616461746100000000000000000000000000000000000000000000)",
        "Store_SetRecord  world__ResourceAccess  (0x6e736d6574616461746100000000000000000000000000000000000000000000,0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266)",
        "Store_SetRecord  world__InstalledModules  (0x0000000000000000000000000f8d2ae4af9b5c4677766030338a8720e30073cc,0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470)",
        "Store_SetRecord  metadata__ResourceTag  (0x737900000000000000000000000000004d6f766553797374656d000000000000,0x6162690000000000000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  metadata__ResourceTag  (0x737900000000000000000000000000004d6f766553797374656d000000000000,0x776f726c64416269000000000000000000000000000000000000000000000000)",
        "Store_SetRecord  Position  (0x0000000000000000000000001d96f2f6bef1202e4ce1ff6dad0c2cb002861d3e)",
        "Store_SetRecord  Health  (0x0000000000000000000000001d96f2f6bef1202e4ce1ff6dad0c2cb002861d3e)",
        "Store_SetRecord  Position  (0x000000000000000000000000328809bc894f92807417d2dad6b7c998c1afdac6)",
        "Store_SetRecord  Health  (0x000000000000000000000000328809bc894f92807417d2dad6b7c998c1afdac6)",
        "Store_SetRecord  Position  (0x000000000000000000000000078cf0753dd50f7c56f20b3ae02719ea199be2eb)",
        "Store_SetRecord  Health  (0x000000000000000000000000078cf0753dd50f7c56f20b3ae02719ea199be2eb)",
        "Store_SetRecord  Position  (0x000000000000000000000000dba86119a787422c593cef119e40887f396024e2)",
        "Store_SetRecord  Terrain  (0x0000000000000000000000000000000000000000000000000000000000000003,0x0000000000000000000000000000000000000000000000000000000000000005)",
      ]
    `);
  });
});
