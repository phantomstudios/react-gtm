import { useCallback } from "react";

import { TrackingProps } from "../types";
import trackEvent from "../utils/trackEvent";

const useTracking = ({ event, args }: TrackingProps) =>
  useCallback(() => trackEvent({ event, ...args }), [event, args]);

export default useTracking;
