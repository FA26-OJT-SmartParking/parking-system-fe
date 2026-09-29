import { NO_DATA_COLOR, slotColor } from "./slotColors";

describe("slotColor", () => {
  it("returns green for an available slot", () => {
    expect(slotColor("Available")).toBe(0x22c55e);
  });

  it("returns red for an occupied slot", () => {
    expect(slotColor("Occupied")).toBe(0xef4444);
  });

  it("returns gray when no status has arrived yet", () => {
    expect(slotColor(undefined)).toBe(NO_DATA_COLOR);
  });

  it.each(["Maintenance", "", "constructor"])("returns gray for the unknown status %p", (status) => {
    expect(slotColor(status)).toBe(NO_DATA_COLOR);
  });
});
