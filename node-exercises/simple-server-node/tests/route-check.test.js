const routeCheck = require("../lib/route-check");

describe("Route check", () => {
  it("should be a function", () => {
    expect(typeof routeCheck).toBe("function");
  });

  it("should throw error", () => {
    expect(() => routeCheck({}, "")).toThrow(TypeError);
    expect(() => routeCheck("", "")).toThrow(TypeError);
  });

  it("should return object", () => {
    expect(typeof routeCheck("/check", { route: "/check" })).toBe("object");
    expect(routeCheck("/check", { route: "/check" }).isCorrectRoute).toBe(true);
    expect(routeCheck("/check/1", { route: "/check" }).isCorrectRoute).toBe(
      false
    );
    expect(routeCheck("/check", { route: "/check/:id" }).isCorrectRoute).toBe(
      false
    );
  });
  it("should return params", () => {
    expect(routeCheck("/check/1", { route: "/check/:id" }).isCorrectRoute).toBe(
      true
    );
    expect(routeCheck("/check/1", { route: "/check/:id" }).params).toEqual({
      id: "1",
    });
  });
});

routeCheck("/check", { route: "/check/1" });
