import { TrackingProps } from "./types";

declare global {
  interface Window {
    dataLayer: TrackingProps[];
  }
}

const track = ({ type, ...args }: TrackingProps) => {
  // If window isn't supported and dataLayer doesn't exist, return...
  if (typeof window === "undefined" || !window.dataLayer) return;

  // Else, add tracking event
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ type, ...args });
};

export default track;
