export interface EmbedTrackingProps {
  id?: string;
}

export interface TrackingEventProps {
  event?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
