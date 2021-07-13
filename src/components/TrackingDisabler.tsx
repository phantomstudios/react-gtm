import React, { useEffect, useState } from "react";

import { EmbedTrackingProps } from "../types";

interface Props extends EmbedTrackingProps {
  disable?: boolean;
}

const TrackingDisabler = ({ id, disable = false }: Props) => {
  const [scriptKey, setScriptKey] = useState(0);
  useEffect(() => {
    setScriptKey((num) => num + 1);
  }, [disable, id]);

  return (
    <script
      key={scriptKey}
      dangerouslySetInnerHTML={{
        __html: `window["ga-disable-${id}"] = ${disable.toString()};`,
      }}
    />
  );
};

export default TrackingDisabler;
