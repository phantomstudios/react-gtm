import { renderHook } from "@testing-library/react-hooks";
import { render } from "test-utils";

import {
  trackEvent,
  useTracking,
  TrackingHeadScript,
  TrackingBodyScript,
} from "../src";

const ID = "GTM-abc123";

describe("<TrackingHeadScript />", () => {
  it("adds TrackingHeadScript to HTML markup", async () => {
    render(<TrackingHeadScript id={ID} />);

    expect(document.getElementsByTagName("script")).toContain(ID);
  });

  it("doesn't add <TrackingHeadScript /> to HTML markup if no id", async () => {
    render(<TrackingHeadScript />);

    expect(document.getElementsByTagName("iframe")).toEqual(null);
  });
});

describe("<TrackingBodyScript />", () => {
  it("adds TrackingBodyScript to HTML markup", async () => {
    render(<TrackingBodyScript id={ID} />);

    expect(document.getElementsByTagName("iframe")).toContain(`id=${ID}`);
  });

  it("doesn't add <TrackingBodyScript /> to HTML markup if no id", async () => {
    render(<TrackingBodyScript />);

    expect(document.getElementsByTagName("iframe")).toEqual(null);
  });
});

describe("trackEvent()", () => {
  it("adds tracking event to dataLayer", async () => {
    const event = "customEvent";
    const args = {
      name: "name",
      category: "category",
      action: "action",
      label: "label",
    };
    trackEvent(event, ...args);

    expect(window.dataLayer[0].event).toEqual(event);
  });
});

describe("useTracking()", () => {
  it("adds tracking event to dataLayer", async () => {
    const event = "customEvent";
    const args = {
      name: "name",
      category: "category",
      action: "action",
      label: "label",
    };
    renderHook(() => useTracking(event, args));

    expect(window.dataLayer[0]).toEqual(args);
  });
});
