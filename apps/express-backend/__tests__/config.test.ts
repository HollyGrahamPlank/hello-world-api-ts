import { expect, describe, it } from "vitest";
import fs from "fs/promises";
import { API_SPEC_PATH } from "../src/config/apiValidator.config";
import { HTTP_PORT } from "../src/config/http.config";

describe("API Validator Config", () => {
  describe("the API spec", () => {
    it("should resolve to a real file", async () => {
      await expect(fs.access(API_SPEC_PATH, fs.constants.R_OK)).resolves.not.toThrow();
    });
  });
});

describe("HTTP Server Config", () => {
  describe("the server port", () => {
    it("is a number", () => {
      expect(HTTP_PORT).toBeTypeOf("number");
    });
  });
});
