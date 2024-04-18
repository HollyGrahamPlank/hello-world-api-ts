import { expect, describe, it } from "vitest";
import { HTTP_PORT } from "../src/config/http.config";

describe("the HTTP config", () => {
  it("should resolve to a real file", () => {
    expect(HTTP_PORT).toBeTruthy();
  });
});
