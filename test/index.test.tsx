import { renderHook } from "@testing-library/react-hooks";
import { render } from "test-utils";

import {
  trackEvent,
  useTracking,
  TrackingHeadScript,
  TrackingBodyScript,
} from "../src";
import { IS_BROWSER } from "../src/utils/utils";

const ID = "GTM-abc123";

beforeEach(() => {
  if (IS_BROWSER) window.dataLayer = [];
});

describe("<TrackingHeadScript />", () => {
  it("adds TrackingHeadScript to HTML markup", async () => {
    render(<TrackingHeadScript id={ID} />);

    // todo: need to target something else
    expect(document.getElementsByTagName("script")).toContain(ID);
  });

  it("doesn't add <TrackingHeadScript /> to HTML markup if no id", async () => {
    render(<TrackingHeadScript />);

    // todo: need to target something else
    expect(document.getElementsByTagName("script")).toEqual(null);
  });
});

describe("<TrackingBodyScript />", () => {
  it("adds TrackingBodyScript to HTML markup", async () => {
    render(<TrackingBodyScript id={ID} />);

    // todo: need to target something else
    expect(document.getElementsByTagName("iframe")).toContain(`id=${ID}`);
  });

  it("doesn't add <TrackingBodyScript /> to HTML markup if no id", async () => {
    render(<TrackingBodyScript />);

    // todo: need to target something else
    expect(document.getElementsByTagName("iframe")).toEqual(null);
  });
});

describe("trackEvent()", () => {
  it("adds tracking event to dataLayer", async () => {
    if (!IS_BROWSER) return;

    const event = "customEvent";
    const data = {
      name: "name",
      category: "category",
      action: "action",
      label: "label",
    };
    trackEvent(event, data);

    expect(window.dataLayer[0]).toEqual({ event, ...data });
  });
});

describe("useTracking()", () => {
  it("adds tracking event to dataLayer", async () => {
    if (!IS_BROWSER) return;

    const event = "customEvent";
    const data = {
      name: "name",
      category: "category",
      action: "action",
      label: "label",
    };
    renderHook(() => useTracking(event, data));

    expect(window.dataLayer[0]).toEqual({ event, ...data });
  });
});
