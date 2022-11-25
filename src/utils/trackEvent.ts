import { EventTrackingProps, EventDataProps } from "../types";
import { IS_BROWSER } from "./platform";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    dataLayer: EventDataProps[];
  }
}

//optional gaFormat arg to use gtag event format for GA4 only setups - datalayer.push only picked up by GTM
const trackEvent = (props?: EventTrackingProps, gaFormat = false) => {
  if (!IS_BROWSER || !window.dataLayer) return;

  const event = !props?.event ? "customEvent" : props?.event;
  if (!gaFormat) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...props?.data });
  } else {
    window.gtag("event", event, props?.data);
  }
};

export default trackEvent;
