import { TrackingEventProps } from "../types";
import { IS_BROWSER } from "./platform";

declare global {
  interface Window {
    dataLayer: TrackingEventProps[];
  }
}

const trackEvent = (event = "interaction", data?: TrackingEventProps) => {
  // If not in browser and dataLayer doesn't exist, return...
  if (!IS_BROWSER || !window.dataLayer) return;

  // Else, add tracking event
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
};

export default trackEvent;
