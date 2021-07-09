import React from "react";

import { EmbedTrackingProps } from "../types";

const TrackingBodyScript = ({ id, active = true }: EmbedTrackingProps) => (
  <>
    {id && active && (
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${id}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    )}
  </>
);

export default TrackingBodyScript;
