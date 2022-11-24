export interface EmbedTrackingProps {
  id?: string;
  hasConsent?: boolean;
  disable?: boolean;
}

export interface EventTrackingProps {
  event?: string;
  data?: EventDataProps;
}

export interface EventDataProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
