const Server = require("../lib/server.js");

const server = new Server();
describe("Server", () => {
  it("should be an object", () => {
    expect(typeof server).toBe("object");
  });
  it("should port greather 65536 throw error", () => {
    expect(() => server.listen(70000)).toThrow(RangeError);
  });
  it("should methods throw error", () => {
    expect(() => server.get("/check", "check")).toThrow(TypeError);
    expect(server.routes.length).toBe(0);
  });
  it("should methods not throw errors", () => {
    expect(() => server.get("/check", jest.fn)).not.toThrow(TypeError);
    expect(() => server.post("/check", jest.fn)).not.toThrow(TypeError);
    expect(() => server.put("/check", jest.fn)).not.toThrow(TypeError);
    expect(() => server.delete("/check", jest.fn)).not.toThrow(TypeError);
    expect(server.routes.length).toBe(4);
  });
  it("should addMiddleware throw error", () => {
    expect(() => server.addMiddleware([])).toThrow(Error);
    expect(() => server.addMiddleware([1])).toThrow(Error);
  });
});
