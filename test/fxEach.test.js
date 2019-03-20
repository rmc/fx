import { action, fxEach } from "../src"

describe("fxEach", () => {
  it("should create an effect for each item in array", () =>
    expect(
      fxEach([1,2,3], action("include"))
    ).toEqual([action("include"), action("include"), action("include")]))
  
  
  it("should apply transform function to add properties to fx props", () =>
    expect(
      fxEach([1, 2, 3], action("include"), (e) => ({ data: e }))
    ).toEqual([action("include", 1), action("include", 2), action("include", 3)]))

})
