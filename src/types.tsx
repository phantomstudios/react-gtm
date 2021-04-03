export interface EmbedTrackingProps {
  id: string;
}

export interface TrackingProps {
  [key: string]: string;
}

export interface EventTrackingProps {
  event?: string;
  name?: string;
  category?: string;
  action?: string;
  label?: string;
  value?: string | number;
}
