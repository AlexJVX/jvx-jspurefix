export interface IDividendAccrualFloatingRate {
  DividendFloatingRateIndex?: string// [1] 42218 (String)
  DividendFloatingRateIndexCurvePeriod?: number// [2] 42219 (Int)
  DividendFloatingRateIndexCurveUnit?: string// [3] 42220 (String)
  DividendFloatingRateMultiplier?: number// [4] 42221 (Float)
  DividendFloatingRateSpread?: number// [5] 42222 (Float)
  DividendFloatingRateSpreadPositionType?: number// [6] 42223 (Int)
  DividendFloatingRateTreatment?: number// [7] 42224 (Int)
  DividendCapRate?: number// [8] 42225 (Float)
  DividendCapRateBuySide?: number// [9] 42226 (Int)
  DividendCapRateSellSide?: number// [10] 42227 (Int)
  DividendFloorRate?: number// [11] 42228 (Float)
  DividendFloorRateBuySide?: number// [12] 42229 (Int)
  DividendFloorRateSellSide?: number// [13] 42230 (Int)
  DividendInitialRate?: number// [14] 42231 (Float)
  DividendFinalRateRoundingDirection?: string// [15] 42232 (String)
  DividendFinalRatePrecision?: number// [16] 42233 (Int)
  DividendAveragingMethod?: number// [17] 42234 (Int)
  DividendNegativeRateTreatment?: number// [18] 42235 (Int)
}
