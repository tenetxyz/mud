/* eslint-disable max-len */
import { describe, it, expect } from "vitest";
import { getMessageToSign } from "./getMessageToSign";

describe("getMessageToSign", () => {
  it("generates message to sign", () => {
    expect(getMessageToSign("localhost")).toMatchInlineSnapshot(`
      "localhost is requesting proof of ownership of this address.

      Only sign this message if it came from an app you are interacting with at localhost.

      An app signer and smart account will be derived from this message signature and be used to transact on your behalf within this app. Do not share this message signature with anyone else.


      version=1 account=0"
    `);
  });

  it("generates message to sign for another account ID", () => {
    expect(getMessageToSign("localhost", 1)).toMatchInlineSnapshot(`
      "localhost is requesting proof of ownership of this address.

      Only sign this message if it came from an app you are interacting with at localhost.

      An app signer and smart account will be derived from this message signature and be used to transact on your behalf within this app. Do not share this message signature with anyone else.


      version=1 account=1"
    `);
  });
});
