const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("TEST MIT-4.2-GitHub-Actions");
  });
});
