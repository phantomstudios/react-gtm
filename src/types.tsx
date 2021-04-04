export interface EmbedTrackingProps {
  id?: string;
}

export interface TrackingProps {
  event: string;
  [key: string]: string | number;
}
