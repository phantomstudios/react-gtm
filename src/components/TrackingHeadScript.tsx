import React from "react";

import { EmbedTrackingProps } from "../types";

const TrackingHeadScript = ({
  id,
  hasConsent = true,
  disable = false,
}: EmbedTrackingProps) => (
  <>
    {id && (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        />
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window['ga-disable-${id}'] = ${disable.toString()};
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('consent', 'default', { 'analytics_storage': '${
                hasConsent ? "granted" : "denied"
              }' });
              gtag('config', '${id}', { page_path: window.location.pathname, send_to: '${id}' });
            `,
          }}
        />
      </>
    )}
  </>
);

export default TrackingHeadScript;
