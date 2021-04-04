import { TrackingEventProps } from "../types";

declare global {
  interface Window {
    dataLayer: TrackingEventProps[];
  }
}

const trackEvent = (event = "interaction", data?: TrackingEventProps) => {
  // If window isn't supported and dataLayer doesn't exist, return...
  if (typeof window === "undefined" || !window.dataLayer) return;

  // Else, add tracking event
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
};

export default trackEvent;
