export interface EmbedTrackingProps {
  id?: string;
}

export interface TrackingProps {
  event?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
