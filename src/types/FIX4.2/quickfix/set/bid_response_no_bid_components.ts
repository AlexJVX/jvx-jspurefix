export interface IBidResponseNoBidComponents {
  Commission: number// [1] 12 (Float)
  CommType: string// [2] 13 (String)
  ListID?: string// [3] 66 (String)
  Country?: string// [4] 421 (String)
  Side?: string// [5] 54 (String)
  Price?: number// [6] 44 (Float)
  PriceType?: number// [7] 423 (Int)
  FairValue?: number// [8] 406 (Float)
  NetGrossInd?: number// [9] 430 (Int)
  SettlmntTyp?: string// [10] 63 (String)
  FutSettDate?: Date// [11] 64 (LocalDate)
  TradingSessionID?: string// [12] 336 (String)
  Text?: string// [13] 58 (String)
  EncodedTextLen?: number// [14] 354 (Length)
  EncodedText?: Buffer// [15] 355 (RawData)
}