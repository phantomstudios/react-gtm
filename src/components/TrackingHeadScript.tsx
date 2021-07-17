import React from "react";

import { EmbedTrackingProps } from "../types";

const TrackingHeadScript = ({ id }: EmbedTrackingProps) => (
  <>
    {id && (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        />
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${id}', { page_path: window.location.pathname });
          `}
        </script>
      </>
    )}
  </>
);

export default TrackingHeadScript;
