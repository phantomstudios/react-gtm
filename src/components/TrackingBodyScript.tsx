import { EmbedTrackingProps } from "../types";

const TrackingBodyScript = ({ id }: EmbedTrackingProps) => (
  <>
    {id && (
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
