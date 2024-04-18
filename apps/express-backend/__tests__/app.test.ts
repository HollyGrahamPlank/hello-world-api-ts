import { expect, describe, it, vi } from "vitest";
import runApp from "../src/app";
import someText from "@hello-world-ts/shared";

describe("the hello world app", () => {
  it("should log hello world", () => {
    const logSpy = vi.spyOn(console, "log");

    runApp();
    expect(logSpy).toHaveBeenCalledWith(someText);
  });
});
