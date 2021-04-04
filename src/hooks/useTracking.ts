import { useCallback } from "react";

import { TrackingEventProps } from "../types";
import trackEvent from "../utils/trackEvent";

const useTracking = (event: string, data?: TrackingEventProps) =>
  useCallback(() => trackEvent(event, data), [event, data]);

export default useTracking;
