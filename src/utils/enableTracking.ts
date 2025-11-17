import { IS_BROWSER } from "./platform";

const enableTracking = (id: string, enable = true) => {
  if (!IS_BROWSER) return;
  (window as unknown as Record<string, string>)[`ga-disable-${id}`] =
    (!enable).toString();
};

export default enableTracking;
