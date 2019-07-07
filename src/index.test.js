import SDK from "./index";

const sdk = new SDK({ base: "http://localhost:3000" });

describe("## SDK Pile", () => {
  it("should list stations", async () => {
    const result = await sdk.station.listStations();
    expect(result.body.length).toBe(10);
  });

  it("should list piles", async () => {
    const result = await sdk.pile.listPiles();
    expect(result.body.length).toBe(100);
  });
});
