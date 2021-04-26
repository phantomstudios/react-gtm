import React from "react";

import TestRenderer from "react-test-renderer";

import { trackEvent, TrackingHeadScript, TrackingBodyScript } from "../src";
import { IS_BROWSER } from "../src/utils/platform";

const ID = "GTM-xxxxxx";

describe("<TrackingHeadScript />", () => {
  it("renders component with ID", async () => {
    const renderer = TestRenderer.create(<TrackingHeadScript id={ID} />);
    expect(JSON.stringify(renderer.toJSON()).includes(ID)).toBe(true);
  });

  it("doesn't render component if no ID", async () => {
    const renderer = TestRenderer.create(<TrackingHeadScript />);
    expect(renderer.toJSON()).toEqual(null);
  });
});

describe("<TrackingBodyScript />", () => {
  it("renders component with ID", async () => {
    const renderer = TestRenderer.create(<TrackingBodyScript id={ID} />);
    expect(JSON.stringify(renderer.toJSON()).includes(`id=${ID}`)).toBe(true);
  });

  it("doesn't render component if no ID", async () => {
    const renderer = TestRenderer.create(<TrackingBodyScript />);
    expect(renderer.toJSON()).toEqual(null);
  });
});

describe("trackEvent()", () => {
  beforeEach(() => {
    if (IS_BROWSER) window.dataLayer = [];
  });

  it("adds tracking event to dataLayer", async () => {
    if (!IS_BROWSER) return;

    const event = "customEvent";
    const data = {
      name: "name",
      category: "category",
      action: "action",
      label: "label",
    };
    trackEvent({ event, data });

    expect(window.dataLayer[0]).toEqual({ event, ...data });
  });

  it("doesn't break build if tracking event empty", async () => {
    if (!IS_BROWSER) return;

    trackEvent();

    expect(window.dataLayer).toHaveLength(1);
  });
});
