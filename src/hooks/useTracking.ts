import { useCallback } from "react";

import track from "..";
import { TrackingProps } from "../types";

const useTracking = ({ type, ...args }: TrackingProps) =>
  useCallback(() => track({ type, ...args }), [type, args]);

export default useTracking;
