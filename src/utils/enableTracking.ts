import { IS_BROWSER } from "./platform";

const enableTracking = (id: string, enable = true) => {
  if (!IS_BROWSER) return;
  window[`ga-disable-${id}`] = (!enable).toString();
};

export default enableTracking;
