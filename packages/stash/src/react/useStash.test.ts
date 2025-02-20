import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import { useStash } from "./useStash";
import { defineStore } from "@latticexyz/store";
import { createStash } from "../createStash";
import isEqual from "fast-deep-equal";
import { Hex } from "viem";
import { getRecords } from "../actions/getRecords";
import { getRecord } from "../actions/getRecord";

// TODO: migrate to ark/attest snapshots for better formatting + typechecking

describe("useStash", () => {
  it("returns a single record", async () => {
    vi.useFakeTimers({ toFake: ["queueMicrotask"] });

    const config = defineStore({
      namespaces: {
        game: {
          tables: {
            Position: {
              schema: { player: "address", x: "uint32", y: "uint32" },
              key: ["player"],
            },
          },
        },
      },
    });
    const Position = config.namespaces.game.tables.Position;
    const stash = createStash(config);
    const player: Hex = "0x00";

    const { result, rerender } = renderHook(
      ({ player }) => useStash(stash, (state) => getRecord({ state, table: Position, key: { player } })),
      { initialProps: { player } },
    );
    vi.advanceTimersToNextTimer();

    expect(result.all.length).toBe(1);
    expect(result.current).toMatchInlineSnapshot(`undefined`);

    act(() => {
      stash.setRecord({ table: Position, key: { player }, value: { x: 1, y: 2 } });
      vi.advanceTimersToNextTimer();
    });

    // Expect update to have triggered rerender
    expect(result.all.length).toBe(2);
    expect(result.current).toMatchInlineSnapshot(`
      {
        "player": "0x00",
        "x": 1,
        "y": 2,
      }
    `);

    act(() => {
      stash.setRecord({ table: Position, key: { player: "0x01" }, value: { x: 1, y: 2 } });
      vi.advanceTimersToNextTimer();
    });

    // Expect unrelated update to not have triggered rerender
    expect(result.all.length).toBe(2);

    // Expect update to have triggered rerender
    act(() => {
      stash.setRecord({ table: Position, key: { player }, value: { x: 1, y: 3 } });
      vi.advanceTimersToNextTimer();
    });

    expect(result.all.length).toBe(3);
    expect(result.current).toMatchInlineSnapshot(`
      {
        "player": "0x00",
        "x": 1,
        "y": 3,
      }
    `);

    // Expect a change in args to trigger a rerender
    rerender({ player: "0x01" });
    expect(result.all.length).toBe(4);
    expect(result.current).toMatchInlineSnapshot(`
      {
        "player": "0x01",
        "x": 1,
        "y": 2,
      }
    `);

    act(() => {
      stash.setRecord({ table: Position, key: { player: "0x0" }, value: { x: 5, y: 0 } });
      vi.advanceTimersToNextTimer();
    });
    // Expect unrelated update to not have triggered rerender
    expect(result.all.length).toBe(4);
  });

  it("returns records of a table using equality function", async () => {
    vi.useFakeTimers({ toFake: ["queueMicrotask"] });

    const config = defineStore({
      namespaces: {
        game: {
          tables: {
            Position: {
              schema: { player: "address", x: "uint32", y: "uint32" },
              key: ["player"],
            },
          },
        },
      },
    });
    const Position = config.namespaces.game.tables.Position;
    const stash = createStash(config);
    const player: Hex = "0x00";

    const { result } = renderHook(() =>
      useStash(stash, (state) => Object.values(getRecords({ state, table: Position })), { isEqual }),
    );
    vi.advanceTimersToNextTimer();

    expect(result.all.length).toBe(1);
    expect(result.current).toMatchInlineSnapshot(`[]`);

    act(() => {
      stash.setRecord({ table: Position, key: { player }, value: { x: 1, y: 2 } });
      vi.advanceTimersToNextTimer();
    });
    expect(result.all.length).toBe(2);
    expect(result.current).toMatchInlineSnapshot(`
      [
        {
          "player": "0x00",
          "x": 1,
          "y": 2,
        },
      ]
    `);

    act(() => {
      stash.setRecord({ table: Position, key: { player: "0x01" }, value: { x: 1, y: 2 } });
      vi.advanceTimersToNextTimer();
    });
    expect(result.all.length).toBe(3);
    expect(result.current).toMatchInlineSnapshot(`
      [
        {
          "player": "0x00",
          "x": 1,
          "y": 2,
        },
        {
          "player": "0x01",
          "x": 1,
          "y": 2,
        },
      ]
    `);

    act(() => {
      stash.setRecord({ table: Position, key: { player }, value: { x: 1, y: 3 } });
      vi.advanceTimersToNextTimer();
    });
    expect(result.all.length).toBe(4);
    expect(result.current).toMatchInlineSnapshot(`
      [
        {
          "player": "0x00",
          "x": 1,
          "y": 3,
        },
        {
          "player": "0x01",
          "x": 1,
          "y": 2,
        },
      ]
    `);
  });

  it("memoizes results", async () => {
    vi.useFakeTimers({ toFake: ["queueMicrotask"] });

    const config = defineStore({
      namespaces: {
        game: {
          tables: {
            Position: {
              schema: { player: "address", x: "uint32", y: "uint32" },
              key: ["player"],
            },
            Counter: {
              schema: { count: "uint32" },
              key: [],
            },
          },
        },
      },
    });
    const { Position, Counter } = config.namespaces.game.tables;
    const stash = createStash(config);
    const player: Hex = "0x00";

    const { result } = renderHook(() =>
      useStash(
        stash,
        (state) =>
          Object.values(getRecords({ state, table: Position })).filter((position) => position.player === player),
        { isEqual },
      ),
    );
    vi.advanceTimersToNextTimer();

    expect(result.all.length).toBe(1);
    expect(result.current).toMatchInlineSnapshot(`[]`);

    act(() => {
      stash.setRecord({ table: Counter, key: {}, value: { count: 1 } });
      stash.setRecord({ table: Counter, key: {}, value: { count: 2 } });
      vi.advanceTimersToNextTimer();
    });
    act(() => {
      stash.setRecord({ table: Counter, key: {}, value: { count: 3 } });
      stash.setRecord({ table: Counter, key: {}, value: { count: 4 } });
      vi.advanceTimersToNextTimer();
    });

    expect(result.all.length).toBe(1);
    expect(result.current).toMatchInlineSnapshot(`[]`);

    act(() => {
      stash.setRecord({ table: Position, key: { player }, value: { x: 1, y: 2 } });
      vi.advanceTimersToNextTimer();
    });
    expect(result.all.length).toBe(2);
    expect(result.current).toMatchInlineSnapshot(`
      [
        {
          "player": "0x00",
          "x": 1,
          "y": 2,
        },
      ]
    `);

    act(() => {
      stash.setRecord({ table: Position, key: { player: "0x01" }, value: { x: 1, y: 2 } });
      vi.advanceTimersToNextTimer();
    });
    expect(result.all.length).toBe(2);
    expect(result.current).toMatchInlineSnapshot(`
      [
        {
          "player": "0x00",
          "x": 1,
          "y": 2,
        },
      ]
    `);

    act(() => {
      stash.setRecord({ table: Position, key: { player }, value: { x: 1, y: 3 } });
      vi.advanceTimersToNextTimer();
    });
    expect(result.all.length).toBe(3);
    expect(result.current).toMatchInlineSnapshot(`
      [
        {
          "player": "0x00",
          "x": 1,
          "y": 3,
        },
      ]
    `);
  });
});
