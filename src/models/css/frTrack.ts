export type IFrTrack = {
  /** The number of fractional units. */
  fr: number
}

export const FrTrackModel = (fr: number): IFrTrack => ({ fr })
