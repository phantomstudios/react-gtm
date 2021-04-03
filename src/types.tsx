export interface EmbedTrackingProps {
  id: string;
}

type trackingType = "event" | "config";

export interface TrackingProps {
  type: trackingType;
  [key: string]: string;
}

export interface EventTrackingProps {
  event?: string;
  name?: string;
  category?: string;
  action?: string;
  label?: string;
}
