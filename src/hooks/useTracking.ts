import { useCallback } from "react";

import { TrackingEventProps } from "../types";
import trackEvent from "../utils/trackEvent";

const useTracking = (event: TrackingEventProps) =>
  useCallback(() => trackEvent(event), [event]);

export default useTracking;
