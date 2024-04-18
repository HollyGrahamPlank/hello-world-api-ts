import { expect, describe, it } from "vitest";
import someText from "../src";

describe("the shared text", () => {
  it("should be hello world", () => {
    expect(someText).toEqual("Hello World!");
  });
  it("is truthy", () => {
    expect(someText).toBeTruthy();
  });
});
