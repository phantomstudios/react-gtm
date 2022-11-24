import { IS_BROWSER } from "./platform";

const setConsent = (consent: boolean) => {
  if (!IS_BROWSER) return;
  window.gtag("consent", "update", {
    analytics_storage: `${consent ? "granted" : "denied"}`,
  });
};

export default setConsent;
