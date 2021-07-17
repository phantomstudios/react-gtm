import React from "react";

import TestRenderer from "react-test-renderer";

import { enableTracking, trackEvent, TrackingHeadScript } from "../src";
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

  it("disables tracking if disable prop is used", async () => {
    const renderer = TestRenderer.create(
      <TrackingHeadScript id={ID} disable />
    );
    expect(
      JSON.stringify(renderer.toJSON()).includes(
        `window['ga-disable-${ID}'] = true`
      )
    ).toBe(true);
  });

  it("doesn't disable tracking if disable prop isn't used", async () => {
    const renderer = TestRenderer.create(<TrackingHeadScript id={ID} />);
    expect(
      JSON.stringify(renderer.toJSON()).includes(
        `window['ga-disable-${ID}'] = false`
      )
    ).toEqual(true);
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

  it("defaults event to customEvent if left undefined", async () => {
    if (!IS_BROWSER) return;

    const data = {
      name: "name",
      category: "category",
      action: "action",
      label: "label",
    };
    trackEvent({ data });

    expect(window.dataLayer[0]).toEqual({ event: "customEvent", ...data });
  });

  it("doesn't break build if tracking event empty", async () => {
    if (!IS_BROWSER) return;

    trackEvent();

    expect(window.dataLayer).toHaveLength(1);
  });
});

describe("enableTracking()", () => {
  it("enables tracking events if used", async () => {
    enableTracking(ID);
    expect(window[`ga-disable-${ID}`]).toEqual("false");
  });

  it("disables tracking events if enable is set to false", async () => {
    enableTracking(ID, false);
    expect(window[`ga-disable-${ID}`]).toEqual("true");
  });
});
