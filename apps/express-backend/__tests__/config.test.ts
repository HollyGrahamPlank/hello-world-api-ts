import { expect, describe, it } from "vitest";
import fs from "fs/promises";
import { API_SPEC_PATH } from "../src/config/apiValidator.config";

describe("the API spec config", () => {
  it("should resolve to a real file", async () => {
    await expect(fs.access(API_SPEC_PATH, fs.constants.R_OK)).resolves.not.toThrow();
  });
});
