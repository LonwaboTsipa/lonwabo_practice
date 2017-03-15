import * as Primitive from '../xml-primitives';

// Source files:
// http://localhost:7777/static/XSD/AnnualReport.xsd
// http://localhost:7777/static/XSD/BeneficialOwnership.xsd
// http://localhost:7777/static/XSD/ClientSpecific.xsd
// http://localhost:7777/static/XSD/Company.xsd
// http://localhost:7777/static/XSD/ContactInformation.xsd
// http://localhost:7777/static/XSD/DataGroupList.xsd
// http://localhost:7777/static/XSD/DataMap.xsd
// http://localhost:7777/static/XSD/DataStatus.xsd
// http://localhost:7777/static/XSD/Family.xsd
// http://localhost:7777/static/XSD/Fund.xsd
// http://localhost:7777/static/XSD/FundShareClass.xsd
// http://localhost:7777/static/XSD/HistoricalOperation.xsd
// http://localhost:7777/static/XSD/InternationalFeature.xsd
// http://localhost:7777/static/XSD/MultilingualVariation.xsd
// http://localhost:7777/static/XSD/Performance.xsd
// http://localhost:7777/static/XSD/PerformanceBasics.xsd
// http://localhost:7777/static/XSD/PerformanceId.xsd
// http://localhost:7777/static/XSD/Portfolio.xsd
// http://localhost:7777/static/XSD/ProfessionalInformation.xsd
// http://localhost:7777/static/XSD/ProprietaryData.xsd
// http://localhost:7777/static/XSD/RiskMeasuresRank.xsd
// http://localhost:7777/static/XSD/SP_CodeAndValue.xsd
// http://localhost:7777/static/XSD/SeparateAccountOperation.xsd
// http://localhost:7777/static/XSD/Strategy.xsd
// http://localhost:7777/static/XSD/TradingInformation.xsd
// http://localhost:7777/static/XSD/_MorningstarDataType.xsd


export interface BaseType {
	_exists: boolean;
	_namespace: string;
}
export interface _accountBreakdownType extends BaseType {
	Type: number;
	NumberOfAccount?: number;
	TotalMarketValue?: number;
}
export interface accountBreakdownType extends _accountBreakdownType { constructor: { new(): accountBreakdownType }; }
export var accountBreakdownType: { new(): accountBreakdownType };

export interface _AnnualReportType extends BaseType {
	ExternalId: string;
	Id: string;
	Type: number;
	Date: Date;
	FeeAndExpense?: AnnualReportTypeFeeAndExpenseType;
	Financials?: AnnualReportTypeFinancialsType;
}
export interface AnnualReportType extends _AnnualReportType { constructor: { new(): AnnualReportType }; }

export interface _AnnualReportTypeFeeAndExpenseType extends BaseType {
	AdministrationFeePercentage?: number;
	AOP?: number;
	AssetManagementFeePercentage?: number;
	AverageManagedAssets?: AnnualReportTypeFeeAndExpenseTypeAverageManagedAssetsType;
	AverageNetAssets?: AnnualReportTypeFeeAndExpenseTypeAverageNetAssetsType;
	DeferLoad?: number;
	ExpenseComponent?: AnnualReportTypeFeeAndExpenseTypeExpenseComponentType;
	GrossExpenseRatio?: AnnualReportTypeFeeAndExpenseTypeGrossExpenseRatioType;
	GrossExpenseRatioOnManagedAssets?: number;
	GrossIncome?: number;
	IndirectCostRatio?: AnnualReportTypeFeeAndExpenseTypeIndirectCostRatioType;
	IsOGC?: string;
	ManagementExpenseRatio?: number;
	NetExpenseRatio?: AnnualReportTypeFeeAndExpenseTypeNetExpenseRatioType;
	NetExpenseRatioOnManagedAssets?: number;
	NetIncomeRatio?: AnnualReportTypeFeeAndExpenseTypeNetIncomeRatioType;
	OngoingCharge?: number;
	PerformanceFee?: number;
	TradingExpenseRatio?: number;
}
export interface AnnualReportTypeFeeAndExpenseType extends _AnnualReportTypeFeeAndExpenseType { constructor: { new(): AnnualReportTypeFeeAndExpenseType }; }

export interface _AnnualReportTypeFeeAndExpenseTypeAverageManagedAssetsType extends Primitive._number {
	NumberOfMonthCovered: number;
}
export interface AnnualReportTypeFeeAndExpenseTypeAverageManagedAssetsType extends _AnnualReportTypeFeeAndExpenseTypeAverageManagedAssetsType { constructor: { new(): AnnualReportTypeFeeAndExpenseTypeAverageManagedAssetsType }; }

export interface _AnnualReportTypeFeeAndExpenseTypeAverageNetAssetsType extends Primitive._number {
	NumberOfMonthCovered: number;
}
export interface AnnualReportTypeFeeAndExpenseTypeAverageNetAssetsType extends _AnnualReportTypeFeeAndExpenseTypeAverageNetAssetsType { constructor: { new(): AnnualReportTypeFeeAndExpenseTypeAverageNetAssetsType }; }

export interface _AnnualReportTypeFeeAndExpenseTypeExpenseComponentType extends BaseType {
	AccountingFee?: number;
	AdministratorFee?: number;
	AdvisorFee?: number;
	AuditorFee?: number;
	BoardOfDirectorsFee?: number;
	CustodianFee?: number;
	DistributionFee?: number;
	Dividend?: number;
	ExpenseWaiver?: number;
	InsuranceFee?: number;
	Interest?: number;
	LegalFee?: number;
	ListingFee?: number;
	OrganizationFee?: number;
	OtherFee?: number;
	ProfessionalFee?: number;
	RegistrationFee?: number;
	ShareholderReportingFee?: number;
	SubAdvisorFee?: AnnualReportTypeFeeAndExpenseTypeExpenseComponentTypeSubAdvisorFeeType;
	Tax?: number;
	TransferAgencyFee?: number;
	TrusteeFee?: number;
}
export interface AnnualReportTypeFeeAndExpenseTypeExpenseComponentType extends _AnnualReportTypeFeeAndExpenseTypeExpenseComponentType { constructor: { new(): AnnualReportTypeFeeAndExpenseTypeExpenseComponentType }; }

export interface _AnnualReportTypeFeeAndExpenseTypeExpenseComponentTypeSubAdvisorFeeType extends BaseType {
	CompanyFeeDetail?: AnnualReportTypeFeeAndExpenseTypeExpenseComponentTypeSubAdvisorFeeTypeCompanyFeeDetailType[];
	TotalValue?: number;
}
export interface AnnualReportTypeFeeAndExpenseTypeExpenseComponentTypeSubAdvisorFeeType extends _AnnualReportTypeFeeAndExpenseTypeExpenseComponentTypeSubAdvisorFeeType { constructor: { new(): AnnualReportTypeFeeAndExpenseTypeExpenseComponentTypeSubAdvisorFeeType }; }

export interface _AnnualReportTypeFeeAndExpenseTypeExpenseComponentTypeSubAdvisorFeeTypeCompanyFeeDetailType extends BaseType {
	CompanyId: string;
	ActualValue?: number;
	ContractualValue?: number;
	FeeSchedule?: feeScheduleNonNegativeIntegerType[];
}
export interface AnnualReportTypeFeeAndExpenseTypeExpenseComponentTypeSubAdvisorFeeTypeCompanyFeeDetailType extends _AnnualReportTypeFeeAndExpenseTypeExpenseComponentTypeSubAdvisorFeeTypeCompanyFeeDetailType { constructor: { new(): AnnualReportTypeFeeAndExpenseTypeExpenseComponentTypeSubAdvisorFeeTypeCompanyFeeDetailType }; }

export interface _AnnualReportTypeFeeAndExpenseTypeGrossExpenseRatioType extends _smallRawDecimal {
	Unannualized: boolean;
}
export interface AnnualReportTypeFeeAndExpenseTypeGrossExpenseRatioType extends _AnnualReportTypeFeeAndExpenseTypeGrossExpenseRatioType { constructor: { new(): AnnualReportTypeFeeAndExpenseTypeGrossExpenseRatioType }; }

export interface _AnnualReportTypeFeeAndExpenseTypeIndirectCostRatioType extends _nonNegativeSmallRawDecimal {
	Estimated: boolean;
	IncludePerformanceFee: boolean;
}
export interface AnnualReportTypeFeeAndExpenseTypeIndirectCostRatioType extends _AnnualReportTypeFeeAndExpenseTypeIndirectCostRatioType { constructor: { new(): AnnualReportTypeFeeAndExpenseTypeIndirectCostRatioType }; }

export interface _AnnualReportTypeFeeAndExpenseTypeNetExpenseRatioType extends _smallRawDecimal {
	Unannualized: boolean;
}
export interface AnnualReportTypeFeeAndExpenseTypeNetExpenseRatioType extends _AnnualReportTypeFeeAndExpenseTypeNetExpenseRatioType { constructor: { new(): AnnualReportTypeFeeAndExpenseTypeNetExpenseRatioType }; }

export interface _AnnualReportTypeFeeAndExpenseTypeNetIncomeRatioType extends _smallDecimal {
	Unannualized: boolean;
}
export interface AnnualReportTypeFeeAndExpenseTypeNetIncomeRatioType extends _AnnualReportTypeFeeAndExpenseTypeNetIncomeRatioType { constructor: { new(): AnnualReportTypeFeeAndExpenseTypeNetIncomeRatioType }; }

export interface _AnnualReportTypeFinancialsType extends BaseType {
	NetAssets?: number;
	PerformanceFeeAmount?: number;
	RealizedCapitalGain?: number;
	RestructuringExpense?: number;
	TotalDistributionToPreferredShareholder?: number;
	TurnoverRatio?: AnnualReportTypeFinancialsTypeTurnoverRatioType;
	UnrealizedCapitalGain?: number;
}
export interface AnnualReportTypeFinancialsType extends _AnnualReportTypeFinancialsType { constructor: { new(): AnnualReportTypeFinancialsType }; }

export interface _AnnualReportTypeFinancialsTypeTurnoverRatioType extends _smallDecimal {
	Date: Date;
	Unannualized: boolean;
}
export interface AnnualReportTypeFinancialsTypeTurnoverRatioType extends _AnnualReportTypeFinancialsTypeTurnoverRatioType { constructor: { new(): AnnualReportTypeFinancialsTypeTurnoverRatioType }; }

export interface _availableSalesChargeClassDetailType extends BaseType {
	ClassType: availableSalesChargeClassDetailTypeClassTypeType;
	FundSERV?: availableSalesChargeClassDetailTypeFundSERVType;
}
export interface availableSalesChargeClassDetailType extends _availableSalesChargeClassDetailType { constructor: { new(): availableSalesChargeClassDetailType }; }
export var availableSalesChargeClassDetailType: { new(): availableSalesChargeClassDetailType };

export interface _availableSalesChargeClassDetailTypeClassTypeType extends _varchar25 {
	Id: number;
}
export interface availableSalesChargeClassDetailTypeClassTypeType extends _availableSalesChargeClassDetailTypeClassTypeType { constructor: { new(): availableSalesChargeClassDetailTypeClassTypeType }; }

export interface _availableSalesChargeClassDetailTypeFundSERVType extends Primitive._boolean {
	CannexCode: number;
	CurrencyId: string;
	Id: string;
	Status: number;
}
export interface availableSalesChargeClassDetailTypeFundSERVType extends _availableSalesChargeClassDetailTypeFundSERVType { constructor: { new(): availableSalesChargeClassDetailTypeFundSERVType }; }

export interface _BeneficialOwnershipType extends BaseType {
	ExternalId: string;
	Id: number;
	Ownership: string;
	OwnershipOverview: BeneficialOwnershipTypeOwnershipOverviewType[];
}
export interface BeneficialOwnershipType extends _BeneficialOwnershipType { constructor: { new(): BeneficialOwnershipType }; }

export interface _BeneficialOwnershipTypeOwnershipOverviewType extends BaseType {
	Date: Date;
	HoldingDetail: holdingDetailType;
}
export interface BeneficialOwnershipTypeOwnershipOverviewType extends _BeneficialOwnershipTypeOwnershipOverviewType { constructor: { new(): BeneficialOwnershipTypeOwnershipOverviewType }; }

export type bigDecimal = number;
export type _bigDecimal = Primitive._number;

export type bigRawDecimal = number;
export type _bigRawDecimal = Primitive._number;

export interface _booleanDateType extends Primitive._boolean {
	Date: Date;
}
export interface booleanDateType extends _booleanDateType { constructor: { new(): booleanDateType }; }
export var booleanDateType: { new(): booleanDateType };

export interface _breakdownNonNegativeType extends BaseType {
	Type: number;
	Ratio?: number;
	Value?: number;
}
export interface breakdownNonNegativeType extends _breakdownNonNegativeType { constructor: { new(): breakdownNonNegativeType }; }
export var breakdownNonNegativeType: { new(): breakdownNonNegativeType };

export type char1 = string;
export type _char1 = Primitive._string;

export type char10 = string;
export type _char10 = Primitive._string;

export type char12 = string;
export type _char12 = Primitive._string;

export type char2 = string;
export type _char2 = Primitive._string;

export type char20 = string;
export type _char20 = Primitive._string;

export type char3 = string;
export type _char3 = Primitive._string;

export type char4 = string;
export type _char4 = Primitive._string;

export type char5 = string;
export type _char5 = Primitive._string;

export type char6 = string;
export type _char6 = Primitive._string;

export type char7 = string;
export type _char7 = Primitive._string;

export type char8 = string;
export type _char8 = Primitive._string;

export type char9 = string;
export type _char9 = Primitive._string;

export interface _ClientSpecificType extends BaseType {
	Id?: number;
	Benchmark?: ClientSpecificTypeBenchmarkType[];
	IDC?: ClientSpecificTypeIDCType[];
	PeerGroup?: ClientSpecificTypePeerGroupType[];
	PercentFundOfFundHoldings?: number[];
	Performance?: ClientSpecificTypePerformanceType[];
	Portfolio?: ClientSpecificTypePortfolioType[];
	PortfolioBreakdown?: ClientSpecificTypePortfolioBreakdownType[];
}
export interface ClientSpecificType extends _ClientSpecificType { constructor: { new(): ClientSpecificType }; }

export interface _ClientSpecificTypeBenchmarkType extends BaseType {
	PrimaryIndexId: string;
	RiskFreeIdx: string;
}
export interface ClientSpecificTypeBenchmarkType extends _ClientSpecificTypeBenchmarkType { constructor: { new(): ClientSpecificTypeBenchmarkType }; }

export interface _ClientSpecificTypeIDCType extends BaseType {
	ITT115_FundIssuerIdCode?: string[];
	ITT116_FundIssuerTypeOfIdCode?: string[];
	ITT117_FundIssuerName?: string[];
	ITT118_FundIssuerNACE?: string[];
	ITT119_FundIssuerGroupLEI?: string[];
	ITT120_FundIssuerGroupTypeOfIdCode?: string[];
	ITT121_FundIssuerGroupName?: string[];
	ITT122_FundIssuerCountryOfIncorporation?: string[];
	ITT123_FundCIC?: string[];
}
export interface ClientSpecificTypeIDCType extends _ClientSpecificTypeIDCType { constructor: { new(): ClientSpecificTypeIDCType }; }

export interface _ClientSpecificTypePeerGroupType extends BaseType {
	Id: number;
	RegionId: number;
	Performance: ClientSpecificTypePeerGroupTypePerformanceType;
}
export interface ClientSpecificTypePeerGroupType extends _ClientSpecificTypePeerGroupType { constructor: { new(): ClientSpecificTypePeerGroupType }; }

export interface _ClientSpecificTypePeerGroupTypePerformanceType extends BaseType {
	CurrencyId: string;
	CumulativeReturn: ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnType;
	StandardizedPerformance: ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceType;
}
export interface ClientSpecificTypePeerGroupTypePerformanceType extends _ClientSpecificTypePeerGroupTypePerformanceType { constructor: { new(): ClientSpecificTypePeerGroupTypePerformanceType }; }

export interface _ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnType extends BaseType {
	Return: ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnTypeReturnType[];
}
export interface ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnType extends _ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnType { constructor: { new(): ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnType }; }

export interface _ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnTypeReturnType extends BaseType {
	StoreDate: Date;
	Type: number;
	EndDate: Date;
	ReturnDetail: ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnTypeReturnTypeReturnDetailType[];
}
export interface ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnTypeReturnType extends _ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnTypeReturnType { constructor: { new(): ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnTypeReturnType }; }

export interface _ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnTypeReturnTypeReturnDetailType extends BaseType {
	TimePeriod: string;
	Value: number;
}
export interface ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnTypeReturnTypeReturnDetailType extends _ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnTypeReturnTypeReturnDetailType { constructor: { new(): ClientSpecificTypePeerGroupTypePerformanceTypeCumulativeReturnTypeReturnTypeReturnDetailType }; }

export interface _ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceType extends BaseType {
	Return: ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceTypeReturnType[];
}
export interface ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceType extends _ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceType { constructor: { new(): ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceType }; }

export interface _ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceTypeReturnType extends BaseType {
	StoreDate: Date;
	Type: number;
	EndDate: Date;
	ReturnDetail: ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceTypeReturnTypeReturnDetailType;
}
export interface ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceTypeReturnType extends _ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceTypeReturnType { constructor: { new(): ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceTypeReturnType }; }

export interface _ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceTypeReturnTypeReturnDetailType extends BaseType {
	TimePeriod: string;
	Value: number;
}
export interface ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceTypeReturnTypeReturnDetailType extends _ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceTypeReturnTypeReturnDetailType { constructor: { new(): ClientSpecificTypePeerGroupTypePerformanceTypeStandardizedPerformanceTypeReturnTypeReturnDetailType }; }

export interface _ClientSpecificTypePerformanceType extends BaseType {
	CurrencyId: string;
	CumulativeReturn?: ClientSpecificTypePerformanceTypeCumulativeReturnType;
	MonthEndAnnualPerformance?: ClientSpecificTypePerformanceTypeMonthEndAnnualPerformanceType;
	PerformanceStatistics?: ClientSpecificTypePerformanceTypePerformanceStatisticsType;
	StandardizedPerformance?: ClientSpecificTypePerformanceTypeStandardizedPerformanceType;
	TotalReturn?: ClientSpecificTypePerformanceTypeTotalReturnType;
}
export interface ClientSpecificTypePerformanceType extends _ClientSpecificTypePerformanceType { constructor: { new(): ClientSpecificTypePerformanceType }; }

export interface _ClientSpecificTypePerformanceTypeCumulativeReturnType extends BaseType {
	Return?: returnType[];
}
export interface ClientSpecificTypePerformanceTypeCumulativeReturnType extends _ClientSpecificTypePerformanceTypeCumulativeReturnType { constructor: { new(): ClientSpecificTypePerformanceTypeCumulativeReturnType }; }

export interface _ClientSpecificTypePerformanceTypeMonthEndAnnualPerformanceType extends BaseType {
	Return?: returnType[];
}
export interface ClientSpecificTypePerformanceTypeMonthEndAnnualPerformanceType extends _ClientSpecificTypePerformanceTypeMonthEndAnnualPerformanceType { constructor: { new(): ClientSpecificTypePerformanceTypeMonthEndAnnualPerformanceType }; }

export interface _ClientSpecificTypePerformanceTypePerformanceStatisticsType extends BaseType {
	Return: ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnType[];
}
export interface ClientSpecificTypePerformanceTypePerformanceStatisticsType extends _ClientSpecificTypePerformanceTypePerformanceStatisticsType { constructor: { new(): ClientSpecificTypePerformanceTypePerformanceStatisticsType }; }

export interface _ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnType extends BaseType {
	StoreDate?: Date;
	TimePeriod?: string;
	Type: number;
	EndDate: Date;
	ReturnDetail: ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailType;
	StartDate: Date;
}
export interface ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnType extends _ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnType { constructor: { new(): ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnType }; }

export interface _ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailType extends BaseType {
	TimePeriod: string;
	LargestGain: ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailTypeLargestGainType;
	LargestLost: ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailTypeLargestLostType;
	Months?: number;
	NegativeMonths?: number;
	NegativeQuarters?: number;
	PositiveMonths?: number;
	PositiveQuarters?: number;
	Quarters?: number;
	UpPeriodPercent: number;
}
export interface ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailType extends _ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailType { constructor: { new(): ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailType }; }

export interface _ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailTypeLargestGainType extends Primitive._number {
	Date: Date;
}
export interface ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailTypeLargestGainType extends _ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailTypeLargestGainType { constructor: { new(): ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailTypeLargestGainType }; }

export interface _ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailTypeLargestLostType extends Primitive._number {
	Date: Date;
}
export interface ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailTypeLargestLostType extends _ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailTypeLargestLostType { constructor: { new(): ClientSpecificTypePerformanceTypePerformanceStatisticsTypeReturnTypeReturnDetailTypeLargestLostType }; }

export interface _ClientSpecificTypePerformanceTypeStandardizedPerformanceType extends BaseType {
	Return?: returnType[];
}
export interface ClientSpecificTypePerformanceTypeStandardizedPerformanceType extends _ClientSpecificTypePerformanceTypeStandardizedPerformanceType { constructor: { new(): ClientSpecificTypePerformanceTypeStandardizedPerformanceType }; }

export interface _ClientSpecificTypePerformanceTypeTotalReturnType extends BaseType {
	Return?: returnType[];
}
export interface ClientSpecificTypePerformanceTypeTotalReturnType extends _ClientSpecificTypePerformanceTypeTotalReturnType { constructor: { new(): ClientSpecificTypePerformanceTypeTotalReturnType }; }

export interface _ClientSpecificTypePortfolioBreakdownType extends BaseType {
	SalePosition: string;
	AssetAllocation: ClientSpecificTypePortfolioBreakdownTypeAssetAllocationType[];
}
export interface ClientSpecificTypePortfolioBreakdownType extends _ClientSpecificTypePortfolioBreakdownType { constructor: { new(): ClientSpecificTypePortfolioBreakdownType }; }

export interface _ClientSpecificTypePortfolioBreakdownTypeAssetAllocationType extends BaseType {
	Type: string;
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioBreakdownTypeAssetAllocationType extends _ClientSpecificTypePortfolioBreakdownTypeAssetAllocationType { constructor: { new(): ClientSpecificTypePortfolioBreakdownTypeAssetAllocationType }; }

export interface _ClientSpecificTypePortfolioType extends BaseType {
	Date?: Date;
	PreviousPortfolioDate?: Date;
	PortfolioBreakdown: ClientSpecificTypePortfolioTypePortfolioBreakdownType[];
	PortfolioSummary?: ClientSpecificTypePortfolioTypePortfolioSummaryType;
}
export interface ClientSpecificTypePortfolioType extends _ClientSpecificTypePortfolioType { constructor: { new(): ClientSpecificTypePortfolioType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownType extends BaseType {
	SalePosition: string;
	AssetAllocation?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetAllocationType[];
	AssetClassExposure?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetClassExposureType[];
	AssetLiquidity?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetLiquidityType[];
	BondIssuerCompanyBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownType[];
	BondRegionalExposure?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondRegionalExposureType[];
	BondSectorBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondSectorBreakdownType[];
	CallableBondBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCallableBondBreakdownType[];
	CashBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCashBreakdownType[];
	CountryExposure?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCountryExposureType[];
	CouponRange?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCouponRangeType[];
	CreditQualityBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCreditQualityBreakdownType[];
	CustomBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCustomBreakdownType[];
	EconomicMoatBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeEconomicMoatBreakdownType[];
	GICS?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGICSType[];
	GlobalBondSector?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorType[];
	GlobalStockSectorBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalStockSectorBreakdownType[];
	IndustryBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeIndustryBreakdownType[];
	IndustryGroupBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeIndustryGroupBreakdownType[];
	InvestmentTimeHorizon?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeInvestmentTimeHorizonType[];
	MarketCapitalBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMarketCapitalBreakdownType[];
	MaturityRange?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMaturityRangeType[];
	MSCICountryBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownType[];
	MSCIRegionalExposure?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCIRegionalExposureType[];
	RegionalAssetAllocation?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationType[];
	RegionalExposure?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalExposureType[];
	RegionalGovBondSectorBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownType[];
	RiskCurrencyExposure?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureType[];
	SpecialBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecialBreakdownType[];
	SpecializedBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownType[];
	StockSectorBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStockSectorBreakdownType[];
	StockTypeBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStockTypeBreakdownType[];
	StyleBoxBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStyleBoxBreakdownType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetAllocationType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetAllocationType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetAllocationType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetAllocationType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetClassExposureType extends BaseType {
	AssetClassExposureValue: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetClassExposureTypeAssetClassExposureValueType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetClassExposureType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetClassExposureType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetClassExposureType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetClassExposureTypeAssetClassExposureValueType extends Primitive._boolean {
	AssetClassId: string;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetClassExposureTypeAssetClassExposureValueType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetClassExposureTypeAssetClassExposureValueType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetClassExposureTypeAssetClassExposureValueType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetLiquidityType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetLiquidityType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetLiquidityType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeAssetLiquidityType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownType extends BaseType {
	IssuerCompanyValue?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownTypeIssuerCompanyValueType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownTypeIssuerCompanyValueType extends _smallRawDecimal {
	CompanyId: string;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownTypeIssuerCompanyValueType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownTypeIssuerCompanyValueType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownTypeIssuerCompanyValueType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondRegionalExposureType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondRegionalExposureType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondRegionalExposureType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondRegionalExposureType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondSectorBreakdownType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondSectorBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondSectorBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeBondSectorBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCallableBondBreakdownType extends BaseType {
	CallableRatio?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCallableBondBreakdownTypeCallableRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCallableBondBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCallableBondBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCallableBondBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCallableBondBreakdownTypeCallableRatioType extends _smallRawDecimal {
	TimePeriod: string;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCallableBondBreakdownTypeCallableRatioType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCallableBondBreakdownTypeCallableRatioType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCallableBondBreakdownTypeCallableRatioType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCashBreakdownType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCashBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCashBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCashBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCountryExposureType extends BaseType {
	Type: string;
	CountryExposureValue?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCountryExposureTypeCountryExposureValueType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCountryExposureType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCountryExposureType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCountryExposureType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCountryExposureTypeCountryExposureValueType extends _smallRawDecimal {
	CountryId: string;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCountryExposureTypeCountryExposureValueType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCountryExposureTypeCountryExposureValueType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCountryExposureTypeCountryExposureValueType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCouponRangeType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCouponRangeType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCouponRangeType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCouponRangeType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCreditQualityBreakdownType extends BaseType {
	Date: Date;
	Surveyed: boolean;
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCreditQualityBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCreditQualityBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCreditQualityBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCustomBreakdownType extends BaseType {
	Date: Date;
	Type: number;
	BreakdownValue: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCustomBreakdownTypeBreakdownValueType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCustomBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCustomBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCustomBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCustomBreakdownTypeBreakdownValueType extends _bigRawDecimal {
	Type: string;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCustomBreakdownTypeBreakdownValueType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCustomBreakdownTypeBreakdownValueType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeCustomBreakdownTypeBreakdownValueType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeEconomicMoatBreakdownType extends BaseType {
	BreakdownValue?: rawRatioType[];
	CoverageRatio?: number;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeEconomicMoatBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeEconomicMoatBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeEconomicMoatBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGICSType extends BaseType {
	GICSBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGICSTypeGICSBreakdownType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGICSType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGICSType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGICSType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGICSTypeGICSBreakdownType extends BaseType {
	Type: number;
	BreakdownValue?: rawRatioVarchar10Type[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGICSTypeGICSBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGICSTypeGICSBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGICSTypeGICSBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorType extends BaseType {
	GlobalBondSectorBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownType[];
	GlobalBondSectorCountryBreakdown?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownType extends BaseType {
	Level: number;
	BreakdownValue: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownTypeBreakdownValueType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownTypeBreakdownValueType extends _smallRawDecimal {
	Type: number;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownTypeBreakdownValueType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownTypeBreakdownValueType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownTypeBreakdownValueType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownType extends BaseType {
	Type: number;
	BreakdownValue?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownTypeBreakdownValueType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownTypeBreakdownValueType extends _nonNegativeSmallRawDecimal {
	CountryId: string;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownTypeBreakdownValueType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownTypeBreakdownValueType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownTypeBreakdownValueType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalStockSectorBreakdownType extends BaseType {
	BreakdownValue?: rawRatioIntegerType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalStockSectorBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalStockSectorBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeGlobalStockSectorBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeIndustryBreakdownType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeIndustryBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeIndustryBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeIndustryBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeIndustryGroupBreakdownType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeIndustryGroupBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeIndustryGroupBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeIndustryGroupBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeInvestmentTimeHorizonType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeInvestmentTimeHorizonType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeInvestmentTimeHorizonType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeInvestmentTimeHorizonType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMarketCapitalBreakdownType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMarketCapitalBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMarketCapitalBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMarketCapitalBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMaturityRangeType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMaturityRangeType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMaturityRangeType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMaturityRangeType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownType extends BaseType {
	Type: string;
	MSCICountryBreakdownValue?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownTypeMSCICountryBreakdownValueType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownTypeMSCICountryBreakdownValueType extends _smallRawDecimal {
	CountryId: string;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownTypeMSCICountryBreakdownValueType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownTypeMSCICountryBreakdownValueType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownTypeMSCICountryBreakdownValueType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCIRegionalExposureType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCIRegionalExposureType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCIRegionalExposureType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeMSCIRegionalExposureType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationType extends BaseType {
	AssetAllocationBreakdown: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationTypeAssetAllocationBreakdownType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationTypeAssetAllocationBreakdownType extends BaseType {
	RegionId: string;
	BreakdownValue: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationTypeAssetAllocationBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationTypeAssetAllocationBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationTypeAssetAllocationBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalExposureType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalExposureType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalExposureType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalExposureType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownType extends BaseType {
	RegionalBreakdown: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownTypeRegionalBreakdownType;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownTypeRegionalBreakdownType extends BaseType {
	RegionId: string;
	BreakdownValue: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownTypeRegionalBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownTypeRegionalBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownTypeRegionalBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureType extends BaseType {
	Type: string;
	BreakdownValue?: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureTypeBreakdownValueType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureTypeBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureTypeBreakdownValueType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureTypeBreakdownValueType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureTypeBreakdownValueType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecialBreakdownType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecialBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecialBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecialBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownType extends BaseType {
	SpecializedBreakdownDetail: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailType extends BaseType {
	BreakdownType: number;
	Type: string;
	BreakdownValue: ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailTypeBreakdownValueType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailTypeBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailTypeBreakdownValueType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailTypeBreakdownValueType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailTypeBreakdownValueType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStockSectorBreakdownType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStockSectorBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStockSectorBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStockSectorBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStockTypeBreakdownType extends BaseType {
	BreakdownValue: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStockTypeBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStockTypeBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStockTypeBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStyleBoxBreakdownType extends BaseType {
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStyleBoxBreakdownType extends _ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStyleBoxBreakdownType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioBreakdownTypeStyleBoxBreakdownType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioSummaryType extends BaseType {
	SalePosition: string;
	HoldingAggregate: ClientSpecificTypePortfolioTypePortfolioSummaryTypeHoldingAggregateType;
}
export interface ClientSpecificTypePortfolioTypePortfolioSummaryType extends _ClientSpecificTypePortfolioTypePortfolioSummaryType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioSummaryType }; }

export interface _ClientSpecificTypePortfolioTypePortfolioSummaryTypeHoldingAggregateType extends BaseType {
	NumberOfBondHolding: number;
	NumberOfHolding: number;
	NumberOfStockHolding: number;
	TotalMarketValue: number;
}
export interface ClientSpecificTypePortfolioTypePortfolioSummaryTypeHoldingAggregateType extends _ClientSpecificTypePortfolioTypePortfolioSummaryTypeHoldingAggregateType { constructor: { new(): ClientSpecificTypePortfolioTypePortfolioSummaryTypeHoldingAggregateType }; }

export interface _companyDetailType extends BaseType {
	Id: number;
	CIK?: string;
	AddressLine1?: string;
	AddressLine2?: string;
	AddressLine3?: string;
	AddressLine4?: string;
	City?: string;
	CompanyName: string;
	Country?: tokenIdChar3Type;
	EmailAddress?: string;
	Fax?: string;
	Homepage?: string;
	Phone?: string;
	PostalCode?: string;
	Province?: string;
}
export interface companyDetailType extends _companyDetailType { constructor: { new(): companyDetailType }; }
export var companyDetailType: { new(): companyDetailType };

export interface _CompanyType extends BaseType {
	BrandingId?: string;
	ExternalId?: string;
	Id: string;
	IsMultiIdentifiers?: boolean;
	IsUltimateParent?: boolean;
	LegacyFamilyId?: number;
	Status?: string;
	AssetManagementFeature?: CompanyTypeAssetManagementFeatureType;
	CompanyNarratives?: CompanyTypeCompanyNarrativesType;
	CompanyOperation: CompanyTypeCompanyOperationType;
	Headquarter?: CompanyTypeHeadquarterType;
	HistoricalOperation?: HistoricalOperationType;
}
export interface CompanyType extends _CompanyType { constructor: { new(): CompanyType }; }

export interface _CompanyTypeAssetManagementFeatureType extends BaseType {
	CompanyAttributes?: CompanyTypeAssetManagementFeatureTypeCompanyAttributesType;
	Disciplinarity?: CompanyTypeAssetManagementFeatureTypeDisciplinarityType;
	GIPSCompliance?: CompanyTypeAssetManagementFeatureTypeGIPSComplianceType;
	LoadReduction?: CompanyTypeAssetManagementFeatureTypeLoadReductionType;
	ManagedPortfolio?: CompanyTypeAssetManagementFeatureTypeManagedPortfolioType;
	RegulatoryRegistration?: CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationType;
	TradingPolicy?: CompanyTypeAssetManagementFeatureTypeTradingPolicyType;
}
export interface CompanyTypeAssetManagementFeatureType extends _CompanyTypeAssetManagementFeatureType { constructor: { new(): CompanyTypeAssetManagementFeatureType }; }

export interface _CompanyTypeAssetManagementFeatureTypeCompanyAttributesType extends BaseType {
	DisasterRecoveryPlan: boolean;
	ErrorsOmissionInsured: CompanyTypeAssetManagementFeatureTypeCompanyAttributesTypeErrorsOmissionInsuredType;
	FiduciaryLiabilityInsured: boolean;
	FirmBonded: boolean;
	RegisteredAdvisorCompany: boolean;
	SubjectToUSASecurityLaw: boolean;
}
export interface CompanyTypeAssetManagementFeatureTypeCompanyAttributesType extends _CompanyTypeAssetManagementFeatureTypeCompanyAttributesType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeCompanyAttributesType }; }

export interface _CompanyTypeAssetManagementFeatureTypeCompanyAttributesTypeErrorsOmissionInsuredType extends Primitive._boolean {
	InsuredLimit: number;
}
export interface CompanyTypeAssetManagementFeatureTypeCompanyAttributesTypeErrorsOmissionInsuredType extends _CompanyTypeAssetManagementFeatureTypeCompanyAttributesTypeErrorsOmissionInsuredType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeCompanyAttributesTypeErrorsOmissionInsuredType }; }

export interface _CompanyTypeAssetManagementFeatureTypeDisciplinarityType extends BaseType {
	Date?: Date;
	DisciplinaryAction: CompanyTypeAssetManagementFeatureTypeDisciplinarityTypeDisciplinaryActionType[];
}
export interface CompanyTypeAssetManagementFeatureTypeDisciplinarityType extends _CompanyTypeAssetManagementFeatureTypeDisciplinarityType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeDisciplinarityType }; }

export interface _CompanyTypeAssetManagementFeatureTypeDisciplinarityTypeDisciplinaryActionType extends BaseType {
	EntityCharged: number;
	Type: number;
	Description?: string;
	PendingAction?: boolean;
	PreviousUnfavorableAction?: CompanyTypeAssetManagementFeatureTypeDisciplinarityTypeDisciplinaryActionTypePreviousUnfavorableActionType;
}
export interface CompanyTypeAssetManagementFeatureTypeDisciplinarityTypeDisciplinaryActionType extends _CompanyTypeAssetManagementFeatureTypeDisciplinarityTypeDisciplinaryActionType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeDisciplinarityTypeDisciplinaryActionType }; }

export interface _CompanyTypeAssetManagementFeatureTypeDisciplinarityTypeDisciplinaryActionTypePreviousUnfavorableActionType extends Primitive._boolean {
	TimePeriod: string;
}
export interface CompanyTypeAssetManagementFeatureTypeDisciplinarityTypeDisciplinaryActionTypePreviousUnfavorableActionType extends _CompanyTypeAssetManagementFeatureTypeDisciplinarityTypeDisciplinaryActionTypePreviousUnfavorableActionType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeDisciplinarityTypeDisciplinaryActionTypePreviousUnfavorableActionType }; }

export interface _CompanyTypeAssetManagementFeatureTypeGIPSComplianceType extends BaseType {
	Attestation?: CompanyTypeAssetManagementFeatureTypeGIPSComplianceTypeAttestationType;
	Date: Date;
}
export interface CompanyTypeAssetManagementFeatureTypeGIPSComplianceType extends _CompanyTypeAssetManagementFeatureTypeGIPSComplianceType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeGIPSComplianceType }; }

export interface _CompanyTypeAssetManagementFeatureTypeGIPSComplianceTypeAttestationType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
	Date?: Date;
}
export interface CompanyTypeAssetManagementFeatureTypeGIPSComplianceTypeAttestationType extends _CompanyTypeAssetManagementFeatureTypeGIPSComplianceTypeAttestationType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeGIPSComplianceTypeAttestationType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionType extends BaseType {
	Date: Date;
	ExchangePrivilege?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeType;
	LetterOfIntent?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentType;
	NAVTransfer?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferType;
	ReinstatementPrivilege?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeType;
	RightsOfAccumulation?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationType;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeType extends BaseType {
	Description?: string;
	MinimumHoldingPeriod?: unitInteger;
	QualifiedShareClassType?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeType;
	ResetHoldingPeriod?: boolean;
	WaiveHigherSalesChargeDifference?: boolean;
	WaiveRedemptionFee?: boolean;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeType extends BaseType {
	QualifiedShareClassTypeDetail: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType[];
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends BaseType {
	Description?: string;
	DestinationShareClassType?: tokenIdVarchar10Type;
	RequireSameShareClassType?: boolean;
	SourceShareClassType: tokenIdVarchar10Type;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentType extends BaseType {
	Escrow?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeEscrowType;
	ForwardPeriod: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeForwardPeriodType;
	LookBackPeriod?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeLookBackPeriodType;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeEscrowType extends _smallDecimal {
	Unit: number;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeEscrowType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeEscrowType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeEscrowType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeForwardPeriodType extends Primitive._number {
	Unit: number;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeForwardPeriodType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeForwardPeriodType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeForwardPeriodType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeLookBackPeriodType extends Primitive._number {
	Unit: number;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeLookBackPeriodType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeLookBackPeriodType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeLetterOfIntentTypeLookBackPeriodType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferType extends BaseType {
	Description?: string;
	MaximumTransferPeriod?: unitInteger;
	QualifiedShareClassType?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeType;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeType extends BaseType {
	QualifiedShareClassTypeDetail: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType[];
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends BaseType {
	Description?: string;
	DestinationShareClassType?: tokenIdVarchar10Type;
	RequireSameShareClassType?: boolean;
	SourceShareClassType: tokenIdVarchar10Type;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeType extends BaseType {
	MaximumFrequency?: string;
	CreditDeferLoad?: boolean;
	Description?: string;
	MaximumReinstatementPeriod?: unitInteger;
	QualifiedShareClassType?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeType;
	ResetHoldingPeriod?: boolean;
	WaiveFrontLoad?: boolean;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeType extends BaseType {
	QualifiedShareClassTypeDetail: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType[];
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends BaseType {
	Description?: string;
	DestinationShareClassType?: tokenIdVarchar10Type;
	RequireSameShareClassType?: boolean;
	SourceShareClassType: tokenIdVarchar10Type;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationType extends BaseType {
	CalculationMethodId: number;
	OtherConsideration?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationType;
	ROAQualification: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationType;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationType extends BaseType {
	Description: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationTypeDescriptionType[];
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationTypeDescriptionType extends _string1000 {
	Type: number;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationTypeDescriptionType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationTypeDescriptionType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationTypeDescriptionType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationType extends BaseType {
	AccountList?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListType;
	BalanceAggregation?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeBalanceAggregationType;
	OwnerList?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListType;
	Reduction?: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeReductionType;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListType extends BaseType {
	AccountType: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListTypeAccountTypeType[];
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListTypeAccountTypeType extends BaseType {
	Id: number;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListTypeAccountTypeType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListTypeAccountTypeType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListTypeAccountTypeType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeBalanceAggregationType extends BaseType {
	ShareClassType: tokenIdVarchar10Type[];
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeBalanceAggregationType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeBalanceAggregationType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeBalanceAggregationType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListType extends BaseType {
	OwnerType: CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListTypeOwnerTypeType[];
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListTypeOwnerTypeType extends BaseType {
	Id: number;
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListTypeOwnerTypeType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListTypeOwnerTypeType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListTypeOwnerTypeType }; }

export interface _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeReductionType extends BaseType {
	ShareClassType: tokenIdVarchar10Type[];
}
export interface CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeReductionType extends _CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeReductionType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeReductionType }; }

export interface _CompanyTypeAssetManagementFeatureTypeManagedPortfolioType extends BaseType {
	MasterPortfolioId: CompanyTypeAssetManagementFeatureTypeManagedPortfolioTypeMasterPortfolioIdType[];
}
export interface CompanyTypeAssetManagementFeatureTypeManagedPortfolioType extends _CompanyTypeAssetManagementFeatureTypeManagedPortfolioType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeManagedPortfolioType }; }

export interface _CompanyTypeAssetManagementFeatureTypeManagedPortfolioTypeMasterPortfolioIdType extends Primitive._number {
	Type: number;
}
export interface CompanyTypeAssetManagementFeatureTypeManagedPortfolioTypeMasterPortfolioIdType extends _CompanyTypeAssetManagementFeatureTypeManagedPortfolioTypeMasterPortfolioIdType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeManagedPortfolioTypeMasterPortfolioIdType }; }

export interface _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationType extends BaseType {
	RegionalRegulatory?: CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryType;
	RegulatoryLicense?: CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseType;
}
export interface CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationType extends _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationType }; }

export interface _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryType extends BaseType {
	BrazilRegulatory?: CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeBrazilRegulatoryType;
	SpanishRegulatory?: CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeSpanishRegulatoryType;
	USARegulatory?: CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeUSARegulatoryType;
}
export interface CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryType extends _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryType }; }

export interface _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeBrazilRegulatoryType extends BaseType {
	ANBID?: number;
	CNPJ?: string;
	CVM?: number;
}
export interface CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeBrazilRegulatoryType extends _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeBrazilRegulatoryType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeBrazilRegulatoryType }; }

export interface _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeSpanishRegulatoryType extends BaseType {
	CIFCode?: string;
	CNMV?: number;
	DGSCode?: string;
}
export interface CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeSpanishRegulatoryType extends _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeSpanishRegulatoryType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeSpanishRegulatoryType }; }

export interface _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeUSARegulatoryType extends BaseType {
	CRDNumber?: string;
	ExemptFromSECRegistration?: boolean;
	SEC13FCIK?: number;
	SEC13FFileNumber?: string;
	SECAdvisorFileNumber?: string;
}
export interface CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeUSARegulatoryType extends _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeUSARegulatoryType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegionalRegulatoryTypeUSARegulatoryType }; }

export interface _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseType extends BaseType {
	RegulatoryLicenseDetail: CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseTypeRegulatoryLicenseDetailType[];
}
export interface CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseType extends _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseType }; }

export interface _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseTypeRegulatoryLicenseDetailType extends BaseType {
	Exempted?: boolean;
	LicenseIssuer: CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseTypeRegulatoryLicenseDetailTypeLicenseIssuerType;
	LicenseIssueYear?: number;
	LicenseType: string;
}
export interface CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseTypeRegulatoryLicenseDetailType extends _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseTypeRegulatoryLicenseDetailType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseTypeRegulatoryLicenseDetailType }; }

export interface _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseTypeRegulatoryLicenseDetailTypeLicenseIssuerType extends BaseType {
	CountryId: string;
	Id: string;
}
export interface CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseTypeRegulatoryLicenseDetailTypeLicenseIssuerType extends _CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseTypeRegulatoryLicenseDetailTypeLicenseIssuerType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeRegulatoryRegistrationTypeRegulatoryLicenseTypeRegulatoryLicenseDetailTypeLicenseIssuerType }; }

export interface _CompanyTypeAssetManagementFeatureTypeTradingPolicyType extends BaseType {
	ExcessiveTradingPolicy?: CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyType;
	SoftDollarPolicy?: string;
	TradingEffectiveness?: string;
}
export interface CompanyTypeAssetManagementFeatureTypeTradingPolicyType extends _CompanyTypeAssetManagementFeatureTypeTradingPolicyType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeTradingPolicyType }; }

export interface _CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyType extends BaseType {
	Date: Date;
	Description?: string;
	RestrictedTradingPeriod?: unitInteger;
	RoundTripPeriod?: unitInteger;
	RoundTripRestriction?: CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyTypeRoundTripRestrictionType;
}
export interface CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyType extends _CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyType }; }

export interface _CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyTypeRoundTripRestrictionType extends BaseType {
	RoundTripFrequency: CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyTypeRoundTripRestrictionTypeRoundTripFrequencyType[];
}
export interface CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyTypeRoundTripRestrictionType extends _CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyTypeRoundTripRestrictionType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyTypeRoundTripRestrictionType }; }

export interface _CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyTypeRoundTripRestrictionTypeRoundTripFrequencyType extends BaseType {
	NumberOfRoundTrip: number;
	TimePeriod: unitInteger;
}
export interface CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyTypeRoundTripRestrictionTypeRoundTripFrequencyType extends _CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyTypeRoundTripRestrictionTypeRoundTripFrequencyType { constructor: { new(): CompanyTypeAssetManagementFeatureTypeTradingPolicyTypeExcessiveTradingPolicyTypeRoundTripRestrictionTypeRoundTripFrequencyType }; }

export interface _CompanyTypeCompanyNarrativesType extends BaseType {
	LanguageId: string;
	BusinessObjectiveAndStrategy?: string;
	CompanyHistory?: string;
	InvestmentPhilosophy?: string;
	LegalDisclosure?: string;
	OrganizationAndOwnership?: string;
	ProductOfferingAndService?: string;
	Profile?: string;
	RiskManagementStrategy?: string;
}
export interface CompanyTypeCompanyNarrativesType extends _CompanyTypeCompanyNarrativesType { constructor: { new(): CompanyTypeCompanyNarrativesType }; }

export interface _CompanyTypeCompanyOperationType extends BaseType {
	BusinessTypeClassification?: CompanyTypeCompanyOperationTypeBusinessTypeClassificationType;
	CompanyAttributes?: CompanyTypeCompanyOperationTypeCompanyAttributesType;
	CompanyBasics: CompanyTypeCompanyOperationTypeCompanyBasicsType;
	CompanyIdentifiers?: CompanyTypeCompanyOperationTypeCompanyIdentifiersType;
	CompanyOwnership?: CompanyTypeCompanyOperationTypeCompanyOwnershipType;
	KeyPersonnelList?: CompanyTypeCompanyOperationTypeKeyPersonnelListType;
	PersonnelSummary?: CompanyTypeCompanyOperationTypePersonnelSummaryType;
	TopClientList?: CompanyTypeCompanyOperationTypeTopClientListType;
}
export interface CompanyTypeCompanyOperationType extends _CompanyTypeCompanyOperationType { constructor: { new(): CompanyTypeCompanyOperationType }; }

export interface _CompanyTypeCompanyOperationTypeBusinessTypeClassificationType extends BaseType {
	BusinessType: number[];
}
export interface CompanyTypeCompanyOperationTypeBusinessTypeClassificationType extends _CompanyTypeCompanyOperationTypeBusinessTypeClassificationType { constructor: { new(): CompanyTypeCompanyOperationTypeBusinessTypeClassificationType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyAttributesType extends BaseType {
	CompanyAIFMD?: boolean;
}
export interface CompanyTypeCompanyOperationTypeCompanyAttributesType extends _CompanyTypeCompanyOperationTypeCompanyAttributesType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyAttributesType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsType extends BaseType {
	BrandingName?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeBrandingNameType[];
	ClassType?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeClassTypeType[];
	CompanyType?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeCompanyTypeType[];
	Domicile?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeDomicileType[];
	EIN?: string[];
	EntityType?: number[];
	InceptionDate?: Date[];
	LanguageVariation?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationType[];
	Name?: string[];
	NetAssets?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeNetAssetsType[];
	Obsolete?: obsoleteType[];
	OrganizationForm?: varchar40UnsignedByteType[];
	ParentCompanyList?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListType[];
	ShortName?: string[];
	TypeStatus?: boolean[];
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsType extends _CompanyTypeCompanyOperationTypeCompanyBasicsType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeBrandingNameType extends _varchar25 {
	Id: string;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeBrandingNameType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeBrandingNameType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeBrandingNameType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeClassTypeType extends BaseType {
	ClassTypeDetail: CompanyTypeCompanyOperationTypeCompanyBasicsTypeClassTypeTypeClassTypeDetailType[];
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeClassTypeType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeClassTypeType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeClassTypeType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeClassTypeTypeClassTypeDetailType extends BaseType {
	Type: string;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeClassTypeTypeClassTypeDetailType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeClassTypeTypeClassTypeDetailType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeClassTypeTypeClassTypeDetailType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeCompanyTypeType extends BaseType {
	Type: number[];
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeCompanyTypeType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeCompanyTypeType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeCompanyTypeType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeDomicileType extends BaseType {
	Country: tokenIdChar3Type;
	Province?: string;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeDomicileType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeDomicileType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeDomicileType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationType extends BaseType {
	LanguageId: string;
	RegionVariation: CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationType[];
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationType extends BaseType {
	ApplicableRegion?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeApplicableRegionType;
	CompanyNarratives?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesType;
	LegalName?: string;
	Name?: string;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeApplicableRegionType extends BaseType {
	RegionId: string[];
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeApplicableRegionType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeApplicableRegionType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeApplicableRegionType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesType extends BaseType {
	LanguageId: string;
	Headquarter?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterType;
	Profile?: string;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterType extends BaseType {
	CountryHeadquarter?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterTypeCountryHeadquarterType;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterTypeCountryHeadquarterType extends BaseType {
	PrimaryHeadquarter: boolean;
	ContactInformation?: ContactInformationType;
	Country?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterTypeCountryHeadquarterTypeCountryType;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterTypeCountryHeadquarterType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterTypeCountryHeadquarterType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterTypeCountryHeadquarterType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterTypeCountryHeadquarterTypeCountryType extends _varchar50 {
	Id: string;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterTypeCountryHeadquarterTypeCountryType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterTypeCountryHeadquarterTypeCountryType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesTypeHeadquarterTypeCountryHeadquarterTypeCountryType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeNetAssetsType extends Primitive._number {
	Date: Date;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeNetAssetsType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeNetAssetsType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeNetAssetsType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListType extends BaseType {
	ParentCompany?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListTypeParentCompanyType[];
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListTypeParentCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
	ParentType?: string;
	Role?: string;
	RoleList?: CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListTypeParentCompanyTypeRoleListType;
	Source?: string;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListTypeParentCompanyType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListTypeParentCompanyType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListTypeParentCompanyType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListTypeParentCompanyTypeRoleListType extends BaseType {
	Role: string;
}
export interface CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListTypeParentCompanyTypeRoleListType extends _CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListTypeParentCompanyTypeRoleListType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyBasicsTypeParentCompanyListTypeParentCompanyTypeRoleListType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyIdentifiersType extends BaseType {
	CompanyIdentifiers?: CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersType;
}
export interface CompanyTypeCompanyOperationTypeCompanyIdentifiersType extends _CompanyTypeCompanyOperationTypeCompanyIdentifiersType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyIdentifiersType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersType extends BaseType {
	ABN?: string[];
	CIFCode?: string[];
	CIKs?: CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCIKsType[];
	CRDs?: CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCRDsType[];
	CUSIPIssuerIds?: CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCUSIPIssuerIdsType[];
	DGSCode?: string[];
	EIN?: number[];
	LEI?: string[];
	RegistrationNo?: string[];
	SEC13FCIK?: number[];
	SECFileNumbers?: CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeSECFileNumbersType[];
}
export interface CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersType extends _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCIKsType extends BaseType {
	CIK?: CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCIKsTypeCIKType;
}
export interface CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCIKsType extends _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCIKsType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCIKsType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCIKsTypeCIKType extends Primitive._string {
	EntityType?: number;
}
export interface CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCIKsTypeCIKType extends _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCIKsTypeCIKType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCIKsTypeCIKType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCRDsType extends BaseType {
	CRD: CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCRDsTypeCRDType;
}
export interface CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCRDsType extends _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCRDsType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCRDsType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCRDsTypeCRDType extends Primitive._string {
	EntityType?: number;
}
export interface CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCRDsTypeCRDType extends _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCRDsTypeCRDType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCRDsTypeCRDType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCUSIPIssuerIdsType extends BaseType {
	CUSIPIssuerId: string[];
}
export interface CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCUSIPIssuerIdsType extends _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCUSIPIssuerIdsType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCUSIPIssuerIdsType }; }

export type CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCUSIPIssuerIdsTypeCUSIPIssuerIdType = string;
export type _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeCUSIPIssuerIdsTypeCUSIPIssuerIdType = Primitive._string;

export interface _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeSECFileNumbersType extends BaseType {
	SECFileNumber: CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeSECFileNumbersTypeSECFileNumberType;
}
export interface CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeSECFileNumbersType extends _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeSECFileNumbersType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeSECFileNumbersType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeSECFileNumbersTypeSECFileNumberType extends Primitive._string {
	EntityType?: number;
}
export interface CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeSECFileNumbersTypeSECFileNumberType extends _CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeSECFileNumbersTypeSECFileNumberType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyIdentifiersTypeCompanyIdentifiersTypeSECFileNumbersTypeSECFileNumberType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyOwnershipType extends BaseType {
	MinorityOwned?: boolean;
	NumberOfEmployeeOwner?: number;
	PercentOwnedByEmployee?: number;
	PercentOwnedByFemale?: number;
	PrivateCompany?: boolean;
	RegionalBreakdown?: CompanyTypeCompanyOperationTypeCompanyOwnershipTypeRegionalBreakdownType;
}
export interface CompanyTypeCompanyOperationTypeCompanyOwnershipType extends _CompanyTypeCompanyOperationTypeCompanyOwnershipType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyOwnershipType }; }

export interface _CompanyTypeCompanyOperationTypeCompanyOwnershipTypeRegionalBreakdownType extends BaseType {
	BreakdownValue: rawRatioType[];
}
export interface CompanyTypeCompanyOperationTypeCompanyOwnershipTypeRegionalBreakdownType extends _CompanyTypeCompanyOperationTypeCompanyOwnershipTypeRegionalBreakdownType { constructor: { new(): CompanyTypeCompanyOperationTypeCompanyOwnershipTypeRegionalBreakdownType }; }

export interface _CompanyTypeCompanyOperationTypeKeyPersonnelListType extends BaseType {
	DataLink: linkVarchar10Type[];
	ProfessionalInformation: ProfessionalInformationType[];
}
export interface CompanyTypeCompanyOperationTypeKeyPersonnelListType extends _CompanyTypeCompanyOperationTypeKeyPersonnelListType { constructor: { new(): CompanyTypeCompanyOperationTypeKeyPersonnelListType }; }

export interface _CompanyTypeCompanyOperationTypePersonnelSummaryType extends BaseType {
	DesignationBreakdown?: CompanyTypeCompanyOperationTypePersonnelSummaryTypeDesignationBreakdownType;
	EndDate?: Date;
	JobFunctionBreakdown?: CompanyTypeCompanyOperationTypePersonnelSummaryTypeJobFunctionBreakdownType;
	NumberOfEmployee?: number;
}
export interface CompanyTypeCompanyOperationTypePersonnelSummaryType extends _CompanyTypeCompanyOperationTypePersonnelSummaryType { constructor: { new(): CompanyTypeCompanyOperationTypePersonnelSummaryType }; }

export interface _CompanyTypeCompanyOperationTypePersonnelSummaryTypeDesignationBreakdownType extends BaseType {
	BreakdownDetail: breakdownNonNegativeType[];
}
export interface CompanyTypeCompanyOperationTypePersonnelSummaryTypeDesignationBreakdownType extends _CompanyTypeCompanyOperationTypePersonnelSummaryTypeDesignationBreakdownType { constructor: { new(): CompanyTypeCompanyOperationTypePersonnelSummaryTypeDesignationBreakdownType }; }

export interface _CompanyTypeCompanyOperationTypePersonnelSummaryTypeJobFunctionBreakdownType extends BaseType {
	BreakdownDetail: breakdownNonNegativeType[];
}
export interface CompanyTypeCompanyOperationTypePersonnelSummaryTypeJobFunctionBreakdownType extends _CompanyTypeCompanyOperationTypePersonnelSummaryTypeJobFunctionBreakdownType { constructor: { new(): CompanyTypeCompanyOperationTypePersonnelSummaryTypeJobFunctionBreakdownType }; }

export interface _CompanyTypeCompanyOperationTypeTopClientListType extends BaseType {
	ClientInformation: CompanyTypeCompanyOperationTypeTopClientListTypeClientInformationType[];
}
export interface CompanyTypeCompanyOperationTypeTopClientListType extends _CompanyTypeCompanyOperationTypeTopClientListType { constructor: { new(): CompanyTypeCompanyOperationTypeTopClientListType }; }

export interface _CompanyTypeCompanyOperationTypeTopClientListTypeClientInformationType extends BaseType {
	Name: string;
	TotalMarketValue: number;
}
export interface CompanyTypeCompanyOperationTypeTopClientListTypeClientInformationType extends _CompanyTypeCompanyOperationTypeTopClientListTypeClientInformationType { constructor: { new(): CompanyTypeCompanyOperationTypeTopClientListTypeClientInformationType }; }

export interface _CompanyTypeHeadquarterType extends BaseType {
	CountryHeadquarter: CompanyTypeHeadquarterTypeCountryHeadquarterType[];
}
export interface CompanyTypeHeadquarterType extends _CompanyTypeHeadquarterType { constructor: { new(): CompanyTypeHeadquarterType }; }

export interface _CompanyTypeHeadquarterTypeCountryHeadquarterType extends BaseType {
	PrimaryHeadquarter: boolean;
	ContactInformation?: ContactInformationType;
	ContactList?: CompanyTypeHeadquarterTypeCountryHeadquarterTypeContactListType;
	Country: tokenIdChar3Type;
	CreditRating?: CompanyTypeHeadquarterTypeCountryHeadquarterTypeCreditRatingType;
}
export interface CompanyTypeHeadquarterTypeCountryHeadquarterType extends _CompanyTypeHeadquarterTypeCountryHeadquarterType { constructor: { new(): CompanyTypeHeadquarterTypeCountryHeadquarterType }; }

export interface _CompanyTypeHeadquarterTypeCountryHeadquarterTypeContactListType extends BaseType {
	ContactPerson: ContactPerson[];
}
export interface CompanyTypeHeadquarterTypeCountryHeadquarterTypeContactListType extends _CompanyTypeHeadquarterTypeCountryHeadquarterTypeContactListType { constructor: { new(): CompanyTypeHeadquarterTypeCountryHeadquarterTypeContactListType }; }

export interface _CompanyTypeHeadquarterTypeCountryHeadquarterTypeCreditRatingType extends BaseType {
	CreditRatingDetail: CompanyTypeHeadquarterTypeCountryHeadquarterTypeCreditRatingTypeCreditRatingDetailType[];
}
export interface CompanyTypeHeadquarterTypeCountryHeadquarterTypeCreditRatingType extends _CompanyTypeHeadquarterTypeCountryHeadquarterTypeCreditRatingType { constructor: { new(): CompanyTypeHeadquarterTypeCountryHeadquarterTypeCreditRatingType }; }

export interface _CompanyTypeHeadquarterTypeCountryHeadquarterTypeCreditRatingTypeCreditRatingDetailType extends BaseType {
	CreditRatingAgency: tokenIdChar2Type;
	Date?: Date;
	Value: string;
}
export interface CompanyTypeHeadquarterTypeCountryHeadquarterTypeCreditRatingTypeCreditRatingDetailType extends _CompanyTypeHeadquarterTypeCountryHeadquarterTypeCreditRatingTypeCreditRatingDetailType { constructor: { new(): CompanyTypeHeadquarterTypeCountryHeadquarterTypeCreditRatingTypeCreditRatingDetailType }; }

export interface _ContactInformationType extends BaseType {
	AddressLine1?: string;
	AddressLine2?: string;
	AddressLine3?: string;
	AddressLine4?: string;
	AddressLine5?: string;
	City?: string;
	Country?: tokenIdChar3Type;
	EmailAddress?: string;
	Fax?: string;
	Homepage?: string;
	Phone?: string;
	PostalCode?: string;
	Province?: string;
}
export interface ContactInformationType extends _ContactInformationType { constructor: { new(): ContactInformationType }; }

export interface _ContactPerson extends BaseType {
	PrimaryContact: boolean;
	TargetMarketType: number;
	ContactInformation: ContactInformationType;
	Name: string;
	ProfessionalTitle?: ContactPersonProfessionalTitleType;
	RoleList?: ContactPersonRoleListType;
}
export interface ContactPerson extends _ContactPerson { constructor: { new(): ContactPerson }; }
export var ContactPerson: { new(): ContactPerson };

export interface _ContactPersonProfessionalTitleType extends _varchar40 {
	Id?: number;
}
export interface ContactPersonProfessionalTitleType extends _ContactPersonProfessionalTitleType { constructor: { new(): ContactPersonProfessionalTitleType }; }

export interface _ContactPersonRoleListType extends BaseType {
	FunctionRole: ContactPersonRoleListTypeFunctionRoleType[];
}
export interface ContactPersonRoleListType extends _ContactPersonRoleListType { constructor: { new(): ContactPersonRoleListType }; }

export interface _ContactPersonRoleListTypeFunctionRoleType extends BaseType {
	Type: number;
}
export interface ContactPersonRoleListTypeFunctionRoleType extends _ContactPersonRoleListTypeFunctionRoleType { constructor: { new(): ContactPersonRoleListTypeFunctionRoleType }; }

export interface _CreationUnit extends BaseType {
	MaximumTransactionFee?: number;
	TransactionFee: number;
	UnitSize: CreationUnitUnitSizeType;
}
export interface CreationUnit extends _CreationUnit { constructor: { new(): CreationUnit }; }
export var CreationUnit: { new(): CreationUnit };

export interface _CreationUnitUnitSizeType extends Primitive._number {
	Unit: number;
}
export interface CreationUnitUnitSizeType extends _CreationUnitUnitSizeType { constructor: { new(): CreationUnitUnitSizeType }; }

export interface _DataGroupListType extends BaseType {
	DataMap: DataMapType;
}
export interface DataGroupListType extends _DataGroupListType { constructor: { new(): DataGroupListType }; }

export interface _DataMapType extends BaseType {
	Type: string;
	Criteria: DataMapTypeCriteriaType;
	Result: DataMapTypeResultType[];
}
export interface DataMapType extends _DataMapType { constructor: { new(): DataMapType }; }

export interface _DataMapTypeCriteriaType extends BaseType {
	Id: string;
	IdType: string;
	Package: string;
	RequestedIdType: string;
}
export interface DataMapTypeCriteriaType extends _DataMapTypeCriteriaType { constructor: { new(): DataMapTypeCriteriaType }; }

export interface _DataMapTypeResultType extends BaseType {
	ClassificationId: string;
	ClassificationType: number;
	EndDate?: Date;
	PeerGroupId: number;
	StartDate: Date;
	TargetRegionId: number;
}
export interface DataMapTypeResultType extends _DataMapTypeResultType { constructor: { new(): DataMapTypeResultType }; }

export interface _DataReadyType extends BaseType {
	HistoricalDataReady?: boolean;
	OnGoingDataReady?: boolean;
}
export interface DataReadyType extends _DataReadyType { constructor: { new(): DataReadyType }; }
export var DataReadyType: { new(): DataReadyType };

export interface _DataStatusType extends BaseType {
	Id: string;
	CalculationRule?: DataStatusTypeCalculationRuleType;
	CollectionStatus: DataStatusTypeCollectionStatusType;
	DataAvailability?: DataStatusTypeDataAvailabilityType;
}
export interface DataStatusType extends _DataStatusType { constructor: { new(): DataStatusType }; }

export interface _DataStatusTypeCalculationRuleType extends BaseType {
	IncludeInPeerGroup?: boolean;
	MarketHolidayPattern?: string;
}
export interface DataStatusTypeCalculationRuleType extends _DataStatusTypeCalculationRuleType { constructor: { new(): DataStatusTypeCalculationRuleType }; }

export interface _DataStatusTypeCollectionStatusType extends BaseType {
	BidOfferPriceReadiness?: DataReadyType;
	CapitalGainReadiness?: DataReadyType;
	DataReadiness?: number;
	DividendReadiness?: DataReadyType;
	EUSDReadiness?: DataReadyType;
	MarketPriceReadiness?: DataReadyType;
	NAVPriceReadiness?: DataReadyType;
	TaxCreditReadiness?: DataReadyType;
	TNAReadiness?: DataReadyType;
}
export interface DataStatusTypeCollectionStatusType extends _DataStatusTypeCollectionStatusType { constructor: { new(): DataStatusTypeCollectionStatusType }; }

export interface _DataStatusTypeDataAvailabilityType extends BaseType {
	DailyYieldAvailability?: DataStatusTypeDataAvailabilityTypeDailyYieldAvailabilityType[];
	DistributionAvailability?: DataStatusTypeDataAvailabilityTypeDistributionAvailabilityType[];
	MonthlyYieldAvailability?: DataStatusTypeDataAvailabilityTypeMonthlyYieldAvailabilityType[];
	PricingAvailability?: DataStatusTypeDataAvailabilityTypePricingAvailabilityType[];
	ReportedReturnAvailability?: DataStatusTypeDataAvailabilityTypeReportedReturnAvailabilityType[];
	TNAAvailability?: DataStatusTypeDataAvailabilityTypeTNAAvailabilityType[];
}
export interface DataStatusTypeDataAvailabilityType extends _DataStatusTypeDataAvailabilityType { constructor: { new(): DataStatusTypeDataAvailabilityType }; }

export interface _DataStatusTypeDataAvailabilityTypeDailyYieldAvailabilityType extends BaseType {
	DailyYieldFrequency?: DataStatusTypeDataAvailabilityTypeDailyYieldAvailabilityTypeDailyYieldFrequencyType[];
	DelayedDailyYield?: number;
}
export interface DataStatusTypeDataAvailabilityTypeDailyYieldAvailabilityType extends _DataStatusTypeDataAvailabilityTypeDailyYieldAvailabilityType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDailyYieldAvailabilityType }; }

export interface _DataStatusTypeDataAvailabilityTypeDailyYieldAvailabilityTypeDailyYieldFrequencyType extends _tokenVarchar100IdChar2Type {
	StartDate: Date;
}
export interface DataStatusTypeDataAvailabilityTypeDailyYieldAvailabilityTypeDailyYieldFrequencyType extends _DataStatusTypeDataAvailabilityTypeDailyYieldAvailabilityTypeDailyYieldFrequencyType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDailyYieldAvailabilityTypeDailyYieldFrequencyType }; }

export interface _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityType extends BaseType {
	CapitalGainDistributionFrequency?: tokenVarchar100IdChar2Type;
	DeclaresDailyDividend?: boolean;
	DividendDistributionFrequency?: DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeDividendDistributionFrequencyType[];
	EstimatedCapitalGainDistribution?: DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedCapitalGainDistributionType;
	EstimatedDividendDistribution?: DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedDividendDistributionType;
	MissingDividend?: DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeMissingDividendType;
	SkippedDividend?: DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeSkippedDividendType;
}
export interface DataStatusTypeDataAvailabilityTypeDistributionAvailabilityType extends _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDistributionAvailabilityType }; }

export interface _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeDividendDistributionFrequencyType extends _tokenVarchar100IdChar2Type {
	StartDate: Date;
}
export interface DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeDividendDistributionFrequencyType extends _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeDividendDistributionFrequencyType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeDividendDistributionFrequencyType }; }

export interface _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedCapitalGainDistributionType extends BaseType {
	EstimatedCapitalGainDistributionDetail: DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedCapitalGainDistributionTypeEstimatedCapitalGainDistributionDetailType[];
}
export interface DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedCapitalGainDistributionType extends _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedCapitalGainDistributionType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedCapitalGainDistributionType }; }

export interface _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedCapitalGainDistributionTypeEstimatedCapitalGainDistributionDetailType extends BaseType {
	ExcludingDate: Date;
	LongTermCapitalGain?: number;
	ShortTermCapitalGain?: number;
}
export interface DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedCapitalGainDistributionTypeEstimatedCapitalGainDistributionDetailType extends _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedCapitalGainDistributionTypeEstimatedCapitalGainDistributionDetailType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedCapitalGainDistributionTypeEstimatedCapitalGainDistributionDetailType }; }

export interface _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedDividendDistributionType extends BaseType {
	EstimatedDividendDistributionDetail: DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedDividendDistributionTypeEstimatedDividendDistributionDetailType[];
}
export interface DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedDividendDistributionType extends _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedDividendDistributionType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedDividendDistributionType }; }

export interface _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedDividendDistributionTypeEstimatedDividendDistributionDetailType extends BaseType {
	Dividend?: number;
	ExcludingDate: Date;
}
export interface DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedDividendDistributionTypeEstimatedDividendDistributionDetailType extends _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedDividendDistributionTypeEstimatedDividendDistributionDetailType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeEstimatedDividendDistributionTypeEstimatedDividendDistributionDetailType }; }

export interface _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeMissingDividendType extends BaseType {
	Date: DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeMissingDividendTypeDateType[];
}
export interface DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeMissingDividendType extends _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeMissingDividendType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeMissingDividendType }; }

export interface _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeMissingDividendTypeDateType extends Primitive._Date {
	EndDate: Date;
}
export interface DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeMissingDividendTypeDateType extends _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeMissingDividendTypeDateType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeMissingDividendTypeDateType }; }

export interface _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeSkippedDividendType extends BaseType {
	Date: DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeSkippedDividendTypeDateType[];
}
export interface DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeSkippedDividendType extends _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeSkippedDividendType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeSkippedDividendType }; }

export interface _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeSkippedDividendTypeDateType extends Primitive._Date {
	EndDate: Date;
	NonBizDateType: number;
}
export interface DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeSkippedDividendTypeDateType extends _DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeSkippedDividendTypeDateType { constructor: { new(): DataStatusTypeDataAvailabilityTypeDistributionAvailabilityTypeSkippedDividendTypeDateType }; }

export interface _DataStatusTypeDataAvailabilityTypeMonthlyYieldAvailabilityType extends BaseType {
	DelayedMonthlyYield?: number;
	MonthlyYieldFrequency?: DataStatusTypeDataAvailabilityTypeMonthlyYieldAvailabilityTypeMonthlyYieldFrequencyType[];
}
export interface DataStatusTypeDataAvailabilityTypeMonthlyYieldAvailabilityType extends _DataStatusTypeDataAvailabilityTypeMonthlyYieldAvailabilityType { constructor: { new(): DataStatusTypeDataAvailabilityTypeMonthlyYieldAvailabilityType }; }

export interface _DataStatusTypeDataAvailabilityTypeMonthlyYieldAvailabilityTypeMonthlyYieldFrequencyType extends _tokenVarchar100IdChar2Type {
	StartDate: Date;
}
export interface DataStatusTypeDataAvailabilityTypeMonthlyYieldAvailabilityTypeMonthlyYieldFrequencyType extends _DataStatusTypeDataAvailabilityTypeMonthlyYieldAvailabilityTypeMonthlyYieldFrequencyType { constructor: { new(): DataStatusTypeDataAvailabilityTypeMonthlyYieldAvailabilityTypeMonthlyYieldFrequencyType }; }

export interface _DataStatusTypeDataAvailabilityTypePricingAvailabilityType extends BaseType {
	DelayedPricing?: number;
	PricingFrequency?: DataStatusTypeDataAvailabilityTypePricingAvailabilityTypePricingFrequencyType[];
	SkippedPricing?: DataStatusTypeDataAvailabilityTypePricingAvailabilityTypeSkippedPricingType;
}
export interface DataStatusTypeDataAvailabilityTypePricingAvailabilityType extends _DataStatusTypeDataAvailabilityTypePricingAvailabilityType { constructor: { new(): DataStatusTypeDataAvailabilityTypePricingAvailabilityType }; }

export interface _DataStatusTypeDataAvailabilityTypePricingAvailabilityTypePricingFrequencyType extends _tokenVarchar100IdChar2Type {
	StartDate: Date;
}
export interface DataStatusTypeDataAvailabilityTypePricingAvailabilityTypePricingFrequencyType extends _DataStatusTypeDataAvailabilityTypePricingAvailabilityTypePricingFrequencyType { constructor: { new(): DataStatusTypeDataAvailabilityTypePricingAvailabilityTypePricingFrequencyType }; }

export interface _DataStatusTypeDataAvailabilityTypePricingAvailabilityTypeSkippedPricingType extends BaseType {
	Date: DataStatusTypeDataAvailabilityTypePricingAvailabilityTypeSkippedPricingTypeDateType[];
}
export interface DataStatusTypeDataAvailabilityTypePricingAvailabilityTypeSkippedPricingType extends _DataStatusTypeDataAvailabilityTypePricingAvailabilityTypeSkippedPricingType { constructor: { new(): DataStatusTypeDataAvailabilityTypePricingAvailabilityTypeSkippedPricingType }; }

export interface _DataStatusTypeDataAvailabilityTypePricingAvailabilityTypeSkippedPricingTypeDateType extends Primitive._Date {
	EndDate: Date;
	NonBizDateType: number;
}
export interface DataStatusTypeDataAvailabilityTypePricingAvailabilityTypeSkippedPricingTypeDateType extends _DataStatusTypeDataAvailabilityTypePricingAvailabilityTypeSkippedPricingTypeDateType { constructor: { new(): DataStatusTypeDataAvailabilityTypePricingAvailabilityTypeSkippedPricingTypeDateType }; }

export interface _DataStatusTypeDataAvailabilityTypeReportedReturnAvailabilityType extends BaseType {
	DelayedReportedReturn?: number;
	ReportedReturnFrequency?: DataStatusTypeDataAvailabilityTypeReportedReturnAvailabilityTypeReportedReturnFrequencyType;
}
export interface DataStatusTypeDataAvailabilityTypeReportedReturnAvailabilityType extends _DataStatusTypeDataAvailabilityTypeReportedReturnAvailabilityType { constructor: { new(): DataStatusTypeDataAvailabilityTypeReportedReturnAvailabilityType }; }

export interface _DataStatusTypeDataAvailabilityTypeReportedReturnAvailabilityTypeReportedReturnFrequencyType extends _tokenVarchar100IdChar2Type {
	StartDate: Date;
}
export interface DataStatusTypeDataAvailabilityTypeReportedReturnAvailabilityTypeReportedReturnFrequencyType extends _DataStatusTypeDataAvailabilityTypeReportedReturnAvailabilityTypeReportedReturnFrequencyType { constructor: { new(): DataStatusTypeDataAvailabilityTypeReportedReturnAvailabilityTypeReportedReturnFrequencyType }; }

export interface _DataStatusTypeDataAvailabilityTypeTNAAvailabilityType extends BaseType {
	DelayedTNA?: number;
	TNAFrequency?: DataStatusTypeDataAvailabilityTypeTNAAvailabilityTypeTNAFrequencyType[];
}
export interface DataStatusTypeDataAvailabilityTypeTNAAvailabilityType extends _DataStatusTypeDataAvailabilityTypeTNAAvailabilityType { constructor: { new(): DataStatusTypeDataAvailabilityTypeTNAAvailabilityType }; }

export interface _DataStatusTypeDataAvailabilityTypeTNAAvailabilityTypeTNAFrequencyType extends _tokenVarchar100IdChar2Type {
	StartDate: Date;
}
export interface DataStatusTypeDataAvailabilityTypeTNAAvailabilityTypeTNAFrequencyType extends _DataStatusTypeDataAvailabilityTypeTNAAvailabilityTypeTNAFrequencyType { constructor: { new(): DataStatusTypeDataAvailabilityTypeTNAAvailabilityTypeTNAFrequencyType }; }

export type decimal1915Type = number;
export type _decimal1915Type = Primitive._number;

export type decimal199Type = number;
export type _decimal199Type = Primitive._number;

export interface _descriptionType extends _string5120 {
	Type: number;
}
export interface descriptionType extends _descriptionType { constructor: { new(): descriptionType }; }
export var descriptionType: { new(): descriptionType };

export interface _emptyIdNonNegativeIntegerType extends BaseType {
	Id: number;
}
export interface emptyIdNonNegativeIntegerType extends _emptyIdNonNegativeIntegerType { constructor: { new(): emptyIdNonNegativeIntegerType }; }
export var emptyIdNonNegativeIntegerType: { new(): emptyIdNonNegativeIntegerType };

export interface _emptyIdPositiveIntegerType extends BaseType {
	Id: number;
}
export interface emptyIdPositiveIntegerType extends _emptyIdPositiveIntegerType { constructor: { new(): emptyIdPositiveIntegerType }; }
export var emptyIdPositiveIntegerType: { new(): emptyIdPositiveIntegerType };

export interface _endDateValueType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface endDateValueType extends _endDateValueType { constructor: { new(): endDateValueType }; }
export var endDateValueType: { new(): endDateValueType };

export interface _FamilyType extends BaseType {
	Id: number;
	ExcessiveTradingPolicy?: FamilyTypeExcessiveTradingPolicyType;
	LoadReduction?: FamilyTypeLoadReductionType;
	Name: string;
}
export interface FamilyType extends _FamilyType { constructor: { new(): FamilyType }; }

export interface _FamilyTypeExcessiveTradingPolicyType extends BaseType {
	Date: Date;
	Description?: string;
	RestrictedTradingPeriod?: unitInteger;
	RoundTripPeriod?: unitInteger;
	RoundTripRestriction?: FamilyTypeExcessiveTradingPolicyTypeRoundTripRestrictionType;
}
export interface FamilyTypeExcessiveTradingPolicyType extends _FamilyTypeExcessiveTradingPolicyType { constructor: { new(): FamilyTypeExcessiveTradingPolicyType }; }

export interface _FamilyTypeExcessiveTradingPolicyTypeRoundTripRestrictionType extends BaseType {
	RoundTripFrequency: FamilyTypeExcessiveTradingPolicyTypeRoundTripRestrictionTypeRoundTripFrequencyType[];
}
export interface FamilyTypeExcessiveTradingPolicyTypeRoundTripRestrictionType extends _FamilyTypeExcessiveTradingPolicyTypeRoundTripRestrictionType { constructor: { new(): FamilyTypeExcessiveTradingPolicyTypeRoundTripRestrictionType }; }

export interface _FamilyTypeExcessiveTradingPolicyTypeRoundTripRestrictionTypeRoundTripFrequencyType extends BaseType {
	NumberOfRoundTrip: number;
	TimePeriod: unitInteger;
}
export interface FamilyTypeExcessiveTradingPolicyTypeRoundTripRestrictionTypeRoundTripFrequencyType extends _FamilyTypeExcessiveTradingPolicyTypeRoundTripRestrictionTypeRoundTripFrequencyType { constructor: { new(): FamilyTypeExcessiveTradingPolicyTypeRoundTripRestrictionTypeRoundTripFrequencyType }; }

export interface _FamilyTypeLoadReductionType extends BaseType {
	Date: Date;
	ExchangePrivilege?: FamilyTypeLoadReductionTypeExchangePrivilegeType;
	LetterOfIntent?: FamilyTypeLoadReductionTypeLetterOfIntentType;
	NAVTransfer?: FamilyTypeLoadReductionTypeNAVTransferType;
	ReinstatementPrivilege?: FamilyTypeLoadReductionTypeReinstatementPrivilegeType;
	RightsOfAccumulation?: FamilyTypeLoadReductionTypeRightsOfAccumulationType;
}
export interface FamilyTypeLoadReductionType extends _FamilyTypeLoadReductionType { constructor: { new(): FamilyTypeLoadReductionType }; }

export interface _FamilyTypeLoadReductionTypeExchangePrivilegeType extends BaseType {
	Description?: string;
	MinimumHoldingPeriod?: unitInteger;
	QualifiedShareClassType?: FamilyTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeType;
	ResetHoldingPeriod?: boolean;
	WaiveHigherSalesChargeDifference?: boolean;
	WaiveRedemptionFee?: boolean;
}
export interface FamilyTypeLoadReductionTypeExchangePrivilegeType extends _FamilyTypeLoadReductionTypeExchangePrivilegeType { constructor: { new(): FamilyTypeLoadReductionTypeExchangePrivilegeType }; }

export interface _FamilyTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeType extends BaseType {
	QualifiedShareClassTypeDetail: FamilyTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType[];
}
export interface FamilyTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeType extends _FamilyTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeType { constructor: { new(): FamilyTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeType }; }

export interface _FamilyTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends BaseType {
	Description?: string;
	DestinationShareClassType?: tokenIdVarchar10Type;
	RequireSameShareClassType?: boolean;
	SourceShareClassType: tokenIdVarchar10Type;
}
export interface FamilyTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends _FamilyTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType { constructor: { new(): FamilyTypeLoadReductionTypeExchangePrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType }; }

export interface _FamilyTypeLoadReductionTypeLetterOfIntentType extends BaseType {
	Escrow?: FamilyTypeLoadReductionTypeLetterOfIntentTypeEscrowType;
	ForwardPeriod: FamilyTypeLoadReductionTypeLetterOfIntentTypeForwardPeriodType;
	LookBackPeriod?: FamilyTypeLoadReductionTypeLetterOfIntentTypeLookBackPeriodType;
}
export interface FamilyTypeLoadReductionTypeLetterOfIntentType extends _FamilyTypeLoadReductionTypeLetterOfIntentType { constructor: { new(): FamilyTypeLoadReductionTypeLetterOfIntentType }; }

export interface _FamilyTypeLoadReductionTypeLetterOfIntentTypeEscrowType extends _smallDecimal {
	Unit: number;
}
export interface FamilyTypeLoadReductionTypeLetterOfIntentTypeEscrowType extends _FamilyTypeLoadReductionTypeLetterOfIntentTypeEscrowType { constructor: { new(): FamilyTypeLoadReductionTypeLetterOfIntentTypeEscrowType }; }

export interface _FamilyTypeLoadReductionTypeLetterOfIntentTypeForwardPeriodType extends Primitive._number {
	Unit: number;
}
export interface FamilyTypeLoadReductionTypeLetterOfIntentTypeForwardPeriodType extends _FamilyTypeLoadReductionTypeLetterOfIntentTypeForwardPeriodType { constructor: { new(): FamilyTypeLoadReductionTypeLetterOfIntentTypeForwardPeriodType }; }

export interface _FamilyTypeLoadReductionTypeLetterOfIntentTypeLookBackPeriodType extends Primitive._number {
	Unit: number;
}
export interface FamilyTypeLoadReductionTypeLetterOfIntentTypeLookBackPeriodType extends _FamilyTypeLoadReductionTypeLetterOfIntentTypeLookBackPeriodType { constructor: { new(): FamilyTypeLoadReductionTypeLetterOfIntentTypeLookBackPeriodType }; }

export interface _FamilyTypeLoadReductionTypeNAVTransferType extends BaseType {
	Description?: string;
	MaximumTransferPeriod?: unitInteger;
	QualifiedShareClassType?: FamilyTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeType;
}
export interface FamilyTypeLoadReductionTypeNAVTransferType extends _FamilyTypeLoadReductionTypeNAVTransferType { constructor: { new(): FamilyTypeLoadReductionTypeNAVTransferType }; }

export interface _FamilyTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeType extends BaseType {
	QualifiedShareClassTypeDetail: FamilyTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType[];
}
export interface FamilyTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeType extends _FamilyTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeType { constructor: { new(): FamilyTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeType }; }

export interface _FamilyTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends BaseType {
	Description?: string;
	DestinationShareClassType?: tokenIdVarchar10Type;
	RequireSameShareClassType?: boolean;
	SourceShareClassType: tokenIdVarchar10Type;
}
export interface FamilyTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends _FamilyTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType { constructor: { new(): FamilyTypeLoadReductionTypeNAVTransferTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType }; }

export interface _FamilyTypeLoadReductionTypeReinstatementPrivilegeType extends BaseType {
	MaximumFrequency?: string;
	CreditDeferLoad?: boolean;
	Description?: string;
	MaximumReinstatementPeriod?: unitInteger;
	QualifiedShareClassType?: FamilyTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeType;
	ResetHoldingPeriod?: boolean;
	WaiveFrontLoad?: boolean;
}
export interface FamilyTypeLoadReductionTypeReinstatementPrivilegeType extends _FamilyTypeLoadReductionTypeReinstatementPrivilegeType { constructor: { new(): FamilyTypeLoadReductionTypeReinstatementPrivilegeType }; }

export interface _FamilyTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeType extends BaseType {
	QualifiedShareClassTypeDetail: FamilyTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType[];
}
export interface FamilyTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeType extends _FamilyTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeType { constructor: { new(): FamilyTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeType }; }

export interface _FamilyTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends BaseType {
	Description?: string;
	DestinationShareClassType?: tokenIdVarchar10Type;
	RequireSameShareClassType?: boolean;
	SourceShareClassType: tokenIdVarchar10Type;
}
export interface FamilyTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType extends _FamilyTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType { constructor: { new(): FamilyTypeLoadReductionTypeReinstatementPrivilegeTypeQualifiedShareClassTypeTypeQualifiedShareClassTypeDetailType }; }

export interface _FamilyTypeLoadReductionTypeRightsOfAccumulationType extends BaseType {
	CalculationMethodId: number;
	OtherConsideration?: FamilyTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationType;
	ROAQualification: FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationType;
}
export interface FamilyTypeLoadReductionTypeRightsOfAccumulationType extends _FamilyTypeLoadReductionTypeRightsOfAccumulationType { constructor: { new(): FamilyTypeLoadReductionTypeRightsOfAccumulationType }; }

export interface _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationType extends BaseType {
	Description: FamilyTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationTypeDescriptionType[];
}
export interface FamilyTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationType extends _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationType { constructor: { new(): FamilyTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationType }; }

export interface _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationTypeDescriptionType extends _string1000 {
	Type: number;
}
export interface FamilyTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationTypeDescriptionType extends _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationTypeDescriptionType { constructor: { new(): FamilyTypeLoadReductionTypeRightsOfAccumulationTypeOtherConsiderationTypeDescriptionType }; }

export interface _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationType extends BaseType {
	AccountList?: FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListType;
	BalanceAggregation?: FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeBalanceAggregationType;
	OwnerList?: FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListType;
	Reduction?: FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeReductionType;
}
export interface FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationType extends _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationType { constructor: { new(): FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationType }; }

export interface _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListType extends BaseType {
	AccountType: FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListTypeAccountTypeType[];
}
export interface FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListType extends _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListType { constructor: { new(): FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListType }; }

export interface _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListTypeAccountTypeType extends BaseType {
	Id: number;
}
export interface FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListTypeAccountTypeType extends _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListTypeAccountTypeType { constructor: { new(): FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeAccountListTypeAccountTypeType }; }

export interface _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeBalanceAggregationType extends BaseType {
	ShareClassType: tokenIdVarchar10Type[];
}
export interface FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeBalanceAggregationType extends _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeBalanceAggregationType { constructor: { new(): FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeBalanceAggregationType }; }

export interface _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListType extends BaseType {
	OwnerType: FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListTypeOwnerTypeType[];
}
export interface FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListType extends _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListType { constructor: { new(): FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListType }; }

export interface _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListTypeOwnerTypeType extends BaseType {
	Id: number;
}
export interface FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListTypeOwnerTypeType extends _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListTypeOwnerTypeType { constructor: { new(): FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeOwnerListTypeOwnerTypeType }; }

export interface _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeReductionType extends BaseType {
	ShareClassType: tokenIdVarchar10Type[];
}
export interface FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeReductionType extends _FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeReductionType { constructor: { new(): FamilyTypeLoadReductionTypeRightsOfAccumulationTypeROAQualificationTypeReductionType }; }

export interface _feeScheduleNonNegativeIntegerDecimal199ValueType extends BaseType {
	Unit: number;
	BreakpointUnit: number;
	HighBreakpoint?: number;
	LowBreakpoint: number;
	Value: number;
}
export interface feeScheduleNonNegativeIntegerDecimal199ValueType extends _feeScheduleNonNegativeIntegerDecimal199ValueType { constructor: { new(): feeScheduleNonNegativeIntegerDecimal199ValueType }; }
export var feeScheduleNonNegativeIntegerDecimal199ValueType: { new(): feeScheduleNonNegativeIntegerDecimal199ValueType };

export interface _feeScheduleNonNegativeIntegerType extends BaseType {
	Unit: number;
	BreakpointUnit: number;
	HighBreakpoint?: number;
	LowBreakpoint: number;
	Value: number;
}
export interface feeScheduleNonNegativeIntegerType extends _feeScheduleNonNegativeIntegerType { constructor: { new(): feeScheduleNonNegativeIntegerType }; }
export var feeScheduleNonNegativeIntegerType: { new(): feeScheduleNonNegativeIntegerType };

export interface _feeScheduleNonNegativeSmallRawDecimalType extends BaseType {
	Unit: number;
	BreakpointUnit: number;
	HighBreakpoint?: number;
	LowBreakpoint: number;
	Value: number;
}
export interface feeScheduleNonNegativeSmallRawDecimalType extends _feeScheduleNonNegativeSmallRawDecimalType { constructor: { new(): feeScheduleNonNegativeSmallRawDecimalType }; }
export var feeScheduleNonNegativeSmallRawDecimalType: { new(): feeScheduleNonNegativeSmallRawDecimalType };

export interface _FundShareClassType extends BaseType {
	ExternalId: string;
	FundId: string;
	Id: string;
	Private: boolean;
	Status: string;
	ClassPerformance?: FundShareClassTypeClassPerformanceType;
	ClientSpecific?: ClientSpecificType;
	DataGroupList?: DataGroupListType;
	DataStatus?: DataStatusType;
	Fund?: FundType;
	HistoricalOperation?: HistoricalOperationType;
	InternationalFeature?: InternationalFeatureType;
	MultilingualVariation?: MultilingualVariationType;
	Operation?: FundShareClassTypeOperationType;
	PerformanceId?: PerformanceIdType;
	PerformanceList?: FundShareClassTypePerformanceListType;
	ProprietaryData?: ProprietaryDataType;
	SeparateAccountOperation?: SeparateAccountOperationType;
	ShareClassAttributes?: FundShareClassTypeShareClassAttributesType;
	ShareClassNarratives?: FundShareClassTypeShareClassNarrativesType;
	SP_CodeAndValue?: SP_CodeAndValueType;
	Strategy?: StrategyType;
	TradingInformation?: TradingInformationType;
}
export interface FundShareClassType extends _FundShareClassType { constructor: { new(): FundShareClassType }; }

export interface _FundShareClassTypeClassPerformanceType extends BaseType {
	Performance?: PerformanceType;
}
export interface FundShareClassTypeClassPerformanceType extends _FundShareClassTypeClassPerformanceType { constructor: { new(): FundShareClassTypeClassPerformanceType }; }

export interface _FundShareClassTypeOperationType extends BaseType {
	AnnualReport?: AnnualReportType;
	CountryOfSales?: FundShareClassTypeOperationTypeCountryOfSalesType;
	DanishAOP?: FundShareClassTypeOperationTypeDanishAOPType;
	Prospectus?: FundShareClassTypeOperationTypeProspectusType;
	Purchase?: FundShareClassTypeOperationTypePurchaseType;
	ShareClassBasics?: FundShareClassTypeOperationTypeShareClassBasicsType;
}
export interface FundShareClassTypeOperationType extends _FundShareClassTypeOperationType { constructor: { new(): FundShareClassTypeOperationType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesType extends BaseType {
	SalesArea: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaType[];
}
export interface FundShareClassTypeOperationTypeCountryOfSalesType extends _FundShareClassTypeOperationTypeCountryOfSalesType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaType extends BaseType {
	CountryId: string;
	AreaName?: tokenIdVarchar4Type[];
	AvailableCurrencyClass?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeAvailableCurrencyClassType;
	BrokerageAvailability?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeBrokerageAvailabilityType;
	InvestorService?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeInvestorServiceType;
	LocalName?: string;
	PurchaseConstraint?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintType;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeAvailableCurrencyClassType extends BaseType {
	CurrencyClass: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeAvailableCurrencyClassTypeCurrencyClassType[];
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeAvailableCurrencyClassType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeAvailableCurrencyClassType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeAvailableCurrencyClassType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeAvailableCurrencyClassTypeCurrencyClassType extends BaseType {
	Id: string;
	RegistrationDate?: Date;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeAvailableCurrencyClassTypeCurrencyClassType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeAvailableCurrencyClassTypeCurrencyClassType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeAvailableCurrencyClassTypeCurrencyClassType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeBrokerageAvailabilityType extends BaseType {
	BrokerCompany: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeBrokerageAvailabilityTypeBrokerCompanyType[];
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeBrokerageAvailabilityType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeBrokerageAvailabilityType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeBrokerageAvailabilityType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeBrokerageAvailabilityTypeBrokerCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeBrokerageAvailabilityTypeBrokerCompanyType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeBrokerageAvailabilityTypeBrokerCompanyType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeBrokerageAvailabilityTypeBrokerCompanyType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeInvestorServiceType extends BaseType {
	AutomaticInvestmentPlan?: boolean;
	CashInvestmentPlan?: boolean;
	DividendInvestmentPlan?: boolean;
	FundClassConvertionYear?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeInvestorServiceTypeFundClassConvertionYearType;
	InvestorReportFrequency?: string;
	LocalPhone?: string;
	PhoneExchange?: boolean;
	SweepOption?: boolean;
	SystematicWithdrawalPlan?: boolean;
	TollFreePhone?: string;
	WireRedemption?: boolean;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeInvestorServiceType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeInvestorServiceType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeInvestorServiceType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeInvestorServiceTypeFundClassConvertionYearType extends Primitive._number {
	ConvertToShareId: string;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeInvestorServiceTypeFundClassConvertionYearType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeInvestorServiceTypeFundClassConvertionYearType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypeInvestorServiceTypeFundClassConvertionYearType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintType extends BaseType {
	ClosedToAllInvestors?: booleanDateType;
	ClosedToNewInvestors?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeClosedToNewInvestorsType;
	ConditionalDeferLoadNote?: string;
	DealingSuspension?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeDealingSuspensionType;
	InstitutionalOnly?: boolean;
	InvestorClassification?: string;
	MaximumFrequency?: string;
	QualifiedInvestment?: boolean;
	RedemptionConstraint?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintType;
	ReopenDate?: Date;
	RetailOnly?: boolean;
	RetirementInvestment?: string;
	SubscriptionSettlementDay?: number;
	TaxFreeInvestment?: boolean;
	TaxSavingInvestment?: boolean;
	Wholesale?: boolean;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeClosedToNewInvestorsType extends BaseType {
	Date: Date;
	Type: number[];
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeClosedToNewInvestorsType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeClosedToNewInvestorsType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeClosedToNewInvestorsType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeDealingSuspensionType extends BaseType {
	NonDealingDay: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeDealingSuspensionTypeNonDealingDayType[];
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeDealingSuspensionType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeDealingSuspensionType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeDealingSuspensionType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeDealingSuspensionTypeNonDealingDayType extends BaseType {
	EndDate?: Date;
	StartDate?: Date;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeDealingSuspensionTypeNonDealingDayType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeDealingSuspensionTypeNonDealingDayType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeDealingSuspensionTypeNonDealingDayType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintType extends BaseType {
	AdvancedNoticeTime?: unitInteger;
	FinalPayout?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeFinalPayoutType;
	InitialLockupPeriod?: unitInteger;
	InitialPayout?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeInitialPayoutType;
	MaximumFrequency?: string;
	RedemptionGate?: number;
	RedemptionSettlementDay?: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeRedemptionSettlementDayType;
	SecurityInKind?: boolean;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeFinalPayoutType extends BaseType {
	PayoutAfterAudit: boolean;
	MaximumPayoutPeriod?: unitInteger;
	PayoutRate: number;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeFinalPayoutType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeFinalPayoutType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeFinalPayoutType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeInitialPayoutType extends BaseType {
	MaximumPayoutPeriod?: unitInteger;
	PayoutRate: number;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeInitialPayoutType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeInitialPayoutType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeInitialPayoutType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeRedemptionSettlementDayType extends BaseType {
	RedemptionSettlementDayDetail: FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeRedemptionSettlementDayTypeRedemptionSettlementDayDetailType[];
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeRedemptionSettlementDayType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeRedemptionSettlementDayType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeRedemptionSettlementDayType }; }

export interface _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeRedemptionSettlementDayTypeRedemptionSettlementDayDetailType extends BaseType {
	LargeAmount: boolean;
	BreakpointType?: number;
	DaystoSettle: number;
	DaystoSettleType: number;
	LowBreakpoint?: number;
}
export interface FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeRedemptionSettlementDayTypeRedemptionSettlementDayDetailType extends _FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeRedemptionSettlementDayTypeRedemptionSettlementDayDetailType { constructor: { new(): FundShareClassTypeOperationTypeCountryOfSalesTypeSalesAreaTypePurchaseConstraintTypeRedemptionConstraintTypeRedemptionSettlementDayTypeRedemptionSettlementDayDetailType }; }

export interface _FundShareClassTypeOperationTypeDanishAOPType extends Primitive._number {
	Date: Date;
}
export interface FundShareClassTypeOperationTypeDanishAOPType extends _FundShareClassTypeOperationTypeDanishAOPType { constructor: { new(): FundShareClassTypeOperationTypeDanishAOPType }; }

export interface _FundShareClassTypeOperationTypeProspectusType extends BaseType {
	Date: Date;
	LatestProspectusDate: Date;
	AcquiredExpenseRatio?: number;
	Actual12B1?: number;
	ActualAdministrationFee?: number;
	ActualDeferLoad?: number;
	ActualFrontLoad?: number;
	ActualManagementFee?: number;
	AdministrativeFee?: FundShareClassTypeOperationTypeProspectusTypeAdministrativeFeeType;
	ChargePerformanceFee?: boolean;
	CustodianFee?: FundShareClassTypeOperationTypeProspectusTypeCustodianFeeType;
	DistributionFee?: FundShareClassTypeOperationTypeProspectusTypeDistributionFeeType;
	Dividend?: number;
	ExpenseNote?: string;
	ExpenseRatio?: number;
	FeeNegotiable?: boolean;
	GroupFee?: FundShareClassTypeOperationTypeProspectusTypeGroupFeeType;
	Interest?: number;
	ManagementFee?: FundShareClassTypeOperationTypeProspectusTypeManagementFeeType;
	MaximumCustodianFee?: number;
	OperatingExpenseRatio?: number;
	OtherFee?: FundShareClassTypeOperationTypeProspectusTypeOtherFeeType;
	PerformanceFee?: FundShareClassTypeOperationTypeProspectusTypePerformanceFeeType;
	ProspectusFeeReduction?: FundShareClassTypeOperationTypeProspectusTypeProspectusFeeReductionType;
	SubscriptionFee?: number;
	SwitchingFee?: number;
	TransactionFee?: number;
	TrusteeFee?: number;
}
export interface FundShareClassTypeOperationTypeProspectusType extends _FundShareClassTypeOperationTypeProspectusType { constructor: { new(): FundShareClassTypeOperationTypeProspectusType }; }

export interface _FundShareClassTypeOperationTypeProspectusTypeAdministrativeFeeType extends BaseType {
	FeeSchedule: feeScheduleNonNegativeIntegerType[];
}
export interface FundShareClassTypeOperationTypeProspectusTypeAdministrativeFeeType extends _FundShareClassTypeOperationTypeProspectusTypeAdministrativeFeeType { constructor: { new(): FundShareClassTypeOperationTypeProspectusTypeAdministrativeFeeType }; }

export interface _FundShareClassTypeOperationTypeProspectusTypeCustodianFeeType extends BaseType {
	FeeSchedule: feeScheduleNonNegativeIntegerType[];
}
export interface FundShareClassTypeOperationTypeProspectusTypeCustodianFeeType extends _FundShareClassTypeOperationTypeProspectusTypeCustodianFeeType { constructor: { new(): FundShareClassTypeOperationTypeProspectusTypeCustodianFeeType }; }

export interface _FundShareClassTypeOperationTypeProspectusTypeDistributionFeeType extends BaseType {
	FeeSchedule: feeScheduleNonNegativeIntegerDecimal199ValueType[];
}
export interface FundShareClassTypeOperationTypeProspectusTypeDistributionFeeType extends _FundShareClassTypeOperationTypeProspectusTypeDistributionFeeType { constructor: { new(): FundShareClassTypeOperationTypeProspectusTypeDistributionFeeType }; }

export interface _FundShareClassTypeOperationTypeProspectusTypeGroupFeeType extends BaseType {
	FeeSchedule: feeScheduleNonNegativeIntegerType[];
}
export interface FundShareClassTypeOperationTypeProspectusTypeGroupFeeType extends _FundShareClassTypeOperationTypeProspectusTypeGroupFeeType { constructor: { new(): FundShareClassTypeOperationTypeProspectusTypeGroupFeeType }; }

export interface _FundShareClassTypeOperationTypeProspectusTypeManagementFeeType extends BaseType {
	DeductionFrequency?: string;
	FeeSchedule: feeScheduleNonNegativeIntegerDecimal199ValueType[];
	MinimumChargeAmount?: number;
	SIMCAVManagementFeeComment?: string;
}
export interface FundShareClassTypeOperationTypeProspectusTypeManagementFeeType extends _FundShareClassTypeOperationTypeProspectusTypeManagementFeeType { constructor: { new(): FundShareClassTypeOperationTypeProspectusTypeManagementFeeType }; }

export interface _FundShareClassTypeOperationTypeProspectusTypeOtherFeeType extends BaseType {
	Amount?: number;
	Note?: string;
	Value?: number;
}
export interface FundShareClassTypeOperationTypeProspectusTypeOtherFeeType extends _FundShareClassTypeOperationTypeProspectusTypeOtherFeeType { constructor: { new(): FundShareClassTypeOperationTypeProspectusTypeOtherFeeType }; }

export interface _FundShareClassTypeOperationTypeProspectusTypePerformanceFeeType extends BaseType {
	ClawBack?: boolean;
	DeductionFrequency?: string;
	HighWatermark?: boolean;
	HurdleRate?: number;
	IndexDetail?: holdingDetailType[];
	IndexName?: string;
	Note?: string;
	Value: number;
}
export interface FundShareClassTypeOperationTypeProspectusTypePerformanceFeeType extends _FundShareClassTypeOperationTypeProspectusTypePerformanceFeeType { constructor: { new(): FundShareClassTypeOperationTypeProspectusTypePerformanceFeeType }; }

export interface _FundShareClassTypeOperationTypeProspectusTypeProspectusFeeReductionType extends BaseType {
	ProspectusFeeReductionDetail: FundShareClassTypeOperationTypeProspectusTypeProspectusFeeReductionTypeProspectusFeeReductionDetailType[];
}
export interface FundShareClassTypeOperationTypeProspectusTypeProspectusFeeReductionType extends _FundShareClassTypeOperationTypeProspectusTypeProspectusFeeReductionType { constructor: { new(): FundShareClassTypeOperationTypeProspectusTypeProspectusFeeReductionType }; }

export interface _FundShareClassTypeOperationTypeProspectusTypeProspectusFeeReductionTypeProspectusFeeReductionDetailType extends BaseType {
	Type: number;
	ContractualReduction: boolean;
	ExpenseRatio: number;
	ExpirationDate?: Date;
	ManagementFee: number;
	OtherFee: number;
	USA12B1: number;
}
export interface FundShareClassTypeOperationTypeProspectusTypeProspectusFeeReductionTypeProspectusFeeReductionDetailType extends _FundShareClassTypeOperationTypeProspectusTypeProspectusFeeReductionTypeProspectusFeeReductionDetailType { constructor: { new(): FundShareClassTypeOperationTypeProspectusTypeProspectusFeeReductionTypeProspectusFeeReductionDetailType }; }

export interface _FundShareClassTypeOperationTypePurchaseType extends BaseType {
	PlanList?: FundShareClassTypeOperationTypePurchaseTypePlanListType;
	PlatformList?: FundShareClassTypeOperationTypePurchaseTypePlatformListType;
	PurchaseDetail: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailType[];
}
export interface FundShareClassTypeOperationTypePurchaseType extends _FundShareClassTypeOperationTypePurchaseType { constructor: { new(): FundShareClassTypeOperationTypePurchaseType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePlanListType extends BaseType {
	Option: tokenIdPositiveIntegerType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePlanListType extends _FundShareClassTypeOperationTypePurchaseTypePlanListType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePlanListType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePlatformListType extends BaseType {
	Platform: FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePlatformListType extends _FundShareClassTypeOperationTypePurchaseTypePlatformListType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePlatformListType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformType extends BaseType {
	CompanyId: string;
	Id: string;
	MinimumInvestment?: FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentType;
	PlatformBasics: FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypePlatformBasicsType;
}
export interface FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformType extends _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentType extends BaseType {
	Date: Date;
	InitialInvestment: FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentTypeInitialInvestmentType;
	SubsequentInvestment: FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentTypeSubsequentInvestmentType;
}
export interface FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentTypeInitialInvestmentType extends Primitive._number {
	Unit: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentTypeInitialInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentTypeInitialInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentTypeInitialInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentTypeSubsequentInvestmentType extends Primitive._number {
	Unit: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentTypeSubsequentInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentTypeSubsequentInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypeMinimumInvestmentTypeSubsequentInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypePlatformBasicsType extends BaseType {
	Currency: FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypePlatformBasicsTypeCurrencyType;
	Name: string;
	ShortName?: string;
	Type: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypePlatformBasicsType extends _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypePlatformBasicsType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypePlatformBasicsType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypePlatformBasicsTypeCurrencyType extends Primitive._string {
	Id: string;
}
export interface FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypePlatformBasicsTypeCurrencyType extends _FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypePlatformBasicsTypeCurrencyType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePlatformListTypePlatformTypePlatformBasicsTypeCurrencyType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailType extends BaseType {
	CurrencyId: string;
	AvailableSalesChargeClass?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeAvailableSalesChargeClassType;
	DistributorList?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeDistributorListType;
	ExpenseProjection?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeExpenseProjectionType;
	MaximumInvestment?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMaximumInvestmentType;
	MinimumInvestment?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentType[];
	MinimumRedemption?: unitInteger;
	PurchaseCharge?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeType;
	RoundLotSize?: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeAvailableSalesChargeClassType extends BaseType {
	AvailableSalesChargeClassDetail: availableSalesChargeClassDetailType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeAvailableSalesChargeClassType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeAvailableSalesChargeClassType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeAvailableSalesChargeClassType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeDistributorListType extends BaseType {
	CompanyId: string[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeDistributorListType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeDistributorListType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeDistributorListType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeExpenseProjectionType extends BaseType {
	Unit: number;
	Date: Date;
	ExpenseProjectionDetail: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeExpenseProjectionTypeExpenseProjectionDetailType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeExpenseProjectionType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeExpenseProjectionType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeExpenseProjectionType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeExpenseProjectionTypeExpenseProjectionDetailType extends BaseType {
	TimePeriod: string;
	Value: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeExpenseProjectionTypeExpenseProjectionDetailType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeExpenseProjectionTypeExpenseProjectionDetailType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeExpenseProjectionTypeExpenseProjectionDetailType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMaximumInvestmentType extends BaseType {
	CumulativeInvestment?: unitInteger;
	Date: Date;
	TransactionalInvestment?: unitInteger;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMaximumInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMaximumInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMaximumInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentType extends BaseType {
	Type?: number;
	Date: Date;
	InitialAIPInvestment?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialAIPInvestmentType[];
	InitialInvestment?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialInvestmentType[];
	InitialRetirementInvestment?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialRetirementInvestmentType[];
	SubsequentAIPInvestment?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentAIPInvestmentType[];
	SubsequentInvestment?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentInvestmentType[];
	SubsequentRetirementInvestment?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentRetirementInvestmentType[];
	SystematicWithdrawalAmount?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSystematicWithdrawalAmountType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialAIPInvestmentType extends Primitive._number {
	CurrencyId?: string;
	Unit: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialAIPInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialAIPInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialAIPInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialInvestmentType extends Primitive._number {
	CurrencyId?: string;
	Unit: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialRetirementInvestmentType extends Primitive._number {
	CurrencyId?: string;
	Unit: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialRetirementInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialRetirementInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeInitialRetirementInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentAIPInvestmentType extends Primitive._number {
	CurrencyId?: string;
	Unit: number;
	MaximumFrequency?: string;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentAIPInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentAIPInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentAIPInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentInvestmentType extends Primitive._number {
	CurrencyId?: string;
	Unit: number;
	MaximumFrequency?: string;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentRetirementInvestmentType extends Primitive._number {
	CurrencyId?: string;
	Unit: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentRetirementInvestmentType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentRetirementInvestmentType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSubsequentRetirementInvestmentType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSystematicWithdrawalAmountType extends Primitive._number {
	CurrencyId?: string;
	Unit: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSystematicWithdrawalAmountType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSystematicWithdrawalAmountType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypeMinimumInvestmentTypeSystematicWithdrawalAmountType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeType extends BaseType {
	CreationDevelopmentFee?: number;
	DealerConcessionFee?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDealerConcessionFeeType;
	DeferLoad?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferLoadType;
	DeferredLoadForFamilyFundPlan?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferredLoadForFamilyFundPlanType;
	FrontLoad?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFrontLoadType;
	FundSERVFee?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeType;
	InCompanyTransferWaiver?: boolean;
	OrganizationFee?: number;
	RedemptionFee?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeRedemptionFeeType;
	SecondYearDeferLoad?: number;
	TotalSalesCharge?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeTotalSalesChargeType;
	TransferFee?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeTransferFeeType;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDealerConcessionFeeType extends BaseType {
	Date: Date;
	FeeSchedule: feeScheduleNonNegativeIntegerType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDealerConcessionFeeType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDealerConcessionFeeType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDealerConcessionFeeType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferLoadType extends BaseType {
	Date: Date;
	FeeSchedule: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferLoadTypeFeeScheduleType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferLoadType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferLoadType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferLoadType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferLoadTypeFeeScheduleType extends _feeScheduleNonNegativeSmallRawDecimalType {
	Exempt?: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferLoadTypeFeeScheduleType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferLoadTypeFeeScheduleType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferLoadTypeFeeScheduleType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferredLoadForFamilyFundPlanType extends BaseType {
	Date: Date;
	FeeSchedule: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferredLoadForFamilyFundPlanTypeFeeScheduleType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferredLoadForFamilyFundPlanType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferredLoadForFamilyFundPlanType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferredLoadForFamilyFundPlanType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferredLoadForFamilyFundPlanTypeFeeScheduleType extends _feeScheduleNonNegativeSmallRawDecimalType {
	Exempt?: number;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferredLoadForFamilyFundPlanTypeFeeScheduleType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferredLoadForFamilyFundPlanTypeFeeScheduleType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeDeferredLoadForFamilyFundPlanTypeFeeScheduleType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFrontLoadType extends BaseType {
	Date: Date;
	CreationUnit?: CreationUnit;
	FeeSchedule: feeScheduleNonNegativeIntegerType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFrontLoadType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFrontLoadType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFrontLoadType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeType extends BaseType {
	FundSERVFeeDetail: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeTypeFundSERVFeeDetailType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeTypeFundSERVFeeDetailType extends BaseType {
	FundSERVCode: string;
	Type: number;
	DeferedSalesCommission?: number;
	FeeSchedule?: feeScheduleNonNegativeIntegerType[];
	TrailerFee?: FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeTypeFundSERVFeeDetailTypeTrailerFeeType;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeTypeFundSERVFeeDetailType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeTypeFundSERVFeeDetailType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeTypeFundSERVFeeDetailType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeTypeFundSERVFeeDetailTypeTrailerFeeType extends BaseType {
	FeeSchedule: feeScheduleNonNegativeIntegerType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeTypeFundSERVFeeDetailTypeTrailerFeeType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeTypeFundSERVFeeDetailTypeTrailerFeeType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeFundSERVFeeTypeFundSERVFeeDetailTypeTrailerFeeType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeRedemptionFeeType extends BaseType {
	Date: Date;
	CreationUnit?: CreationUnit;
	FeeBase?: varchar40UnsignedByteType;
	FeeSchedule: feeScheduleNonNegativeSmallRawDecimalType[];
	ForCapitalGain?: boolean;
	RedeemSequence?: varchar40UnsignedByteType;
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeRedemptionFeeType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeRedemptionFeeType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeRedemptionFeeType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeTotalSalesChargeType extends BaseType {
	Date: Date;
	FeeSchedule: feeScheduleNonNegativeSmallRawDecimalType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeTotalSalesChargeType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeTotalSalesChargeType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeTotalSalesChargeType }; }

export interface _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeTransferFeeType extends BaseType {
	Date: Date;
	FeeSchedule: feeScheduleNonNegativeSmallRawDecimalType[];
}
export interface FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeTransferFeeType extends _FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeTransferFeeType { constructor: { new(): FundShareClassTypeOperationTypePurchaseTypePurchaseDetailTypePurchaseChargeTypeTransferFeeType }; }

export interface _FundShareClassTypeOperationTypeShareClassBasicsType extends BaseType {
	ClassCategoryBenchmarkId?: string;
	ClassCategoryId?: string;
	ActivationDate?: Date[];
	ClassCategoryBenchmarkName?: string[];
	ClosedEndShareType?: number[];
	Currency?: FundShareClassTypeOperationTypeShareClassBasicsTypeCurrencyType[];
	CUSIP?: string[];
	InceptionDate?: Date[];
	ISIN?: string[];
	LegalName?: string[];
	MediaStubName?: mediaStubNameType[];
	Name?: string[];
	NasdaqFullCoverage?: FundShareClassTypeOperationTypeShareClassBasicsTypeNasdaqFullCoverageType[];
	NasdaqSupplement?: FundShareClassTypeOperationTypeShareClassBasicsTypeNasdaqSupplementType[];
	Obsolete?: obsoleteType[];
	PreviousName?: FundShareClassTypeOperationTypeShareClassBasicsTypePreviousNameType[];
	PrivateOfferDate?: Date[];
	SecondaryDate?: Date[];
	ShareClassType?: FundShareClassTypeOperationTypeShareClassBasicsTypeShareClassTypeType[];
	TerminationDate?: Date[];
}
export interface FundShareClassTypeOperationTypeShareClassBasicsType extends _FundShareClassTypeOperationTypeShareClassBasicsType { constructor: { new(): FundShareClassTypeOperationTypeShareClassBasicsType }; }

export interface _FundShareClassTypeOperationTypeShareClassBasicsTypeCurrencyType extends _varchar50 {
	Id?: string;
}
export interface FundShareClassTypeOperationTypeShareClassBasicsTypeCurrencyType extends _FundShareClassTypeOperationTypeShareClassBasicsTypeCurrencyType { constructor: { new(): FundShareClassTypeOperationTypeShareClassBasicsTypeCurrencyType }; }

export interface _FundShareClassTypeOperationTypeShareClassBasicsTypeNasdaqFullCoverageType extends Primitive._boolean {
	Date?: Date;
}
export interface FundShareClassTypeOperationTypeShareClassBasicsTypeNasdaqFullCoverageType extends _FundShareClassTypeOperationTypeShareClassBasicsTypeNasdaqFullCoverageType { constructor: { new(): FundShareClassTypeOperationTypeShareClassBasicsTypeNasdaqFullCoverageType }; }

export interface _FundShareClassTypeOperationTypeShareClassBasicsTypeNasdaqSupplementType extends Primitive._boolean {
	Date: Date;
}
export interface FundShareClassTypeOperationTypeShareClassBasicsTypeNasdaqSupplementType extends _FundShareClassTypeOperationTypeShareClassBasicsTypeNasdaqSupplementType { constructor: { new(): FundShareClassTypeOperationTypeShareClassBasicsTypeNasdaqSupplementType }; }

export interface _FundShareClassTypeOperationTypeShareClassBasicsTypePreviousNameType extends _varchar40 {
	EndDate: Date;
}
export interface FundShareClassTypeOperationTypeShareClassBasicsTypePreviousNameType extends _FundShareClassTypeOperationTypeShareClassBasicsTypePreviousNameType { constructor: { new(): FundShareClassTypeOperationTypeShareClassBasicsTypePreviousNameType }; }

export interface _FundShareClassTypeOperationTypeShareClassBasicsTypeShareClassTypeType extends _varchar40 {
	Id?: string;
}
export interface FundShareClassTypeOperationTypeShareClassBasicsTypeShareClassTypeType extends _FundShareClassTypeOperationTypeShareClassBasicsTypeShareClassTypeType { constructor: { new(): FundShareClassTypeOperationTypeShareClassBasicsTypeShareClassTypeType }; }

export interface _FundShareClassTypePerformanceListType extends BaseType {
	BaseCurrencyPerformanceId: string;
	Performance: PerformanceType[];
}
export interface FundShareClassTypePerformanceListType extends _FundShareClassTypePerformanceListType { constructor: { new(): FundShareClassTypePerformanceListType }; }

export interface _FundShareClassTypeShareClassAttributesType extends BaseType {
	AvailableFor529Only?: boolean;
	AvailableForInsuranceProduct?: FundShareClassTypeShareClassAttributesTypeAvailableForInsuranceProductType;
	AvailableForPensionPlan?: FundShareClassTypeShareClassAttributesTypeAvailableForPensionPlanType;
	AvailableForRegularInvestment?: boolean;
	AvailableForRetirementPlan?: boolean;
	CurrencyHedgeDetails?: FundShareClassTypeShareClassAttributesTypeCurrencyHedgeDetailsType;
	ExchangeTradedCommodity?: boolean;
	ExchangeTradedNotes?: boolean;
	ExchangeTradedShare?: boolean;
	FClass?: boolean;
	FullSwingPricing?: boolean;
	HOLDR?: boolean;
	IndirectUseOnly?: number;
	PrimaryShareClass?: boolean;
	RestrictInvestor?: boolean;
}
export interface FundShareClassTypeShareClassAttributesType extends _FundShareClassTypeShareClassAttributesType { constructor: { new(): FundShareClassTypeShareClassAttributesType }; }

export interface _FundShareClassTypeShareClassAttributesTypeAvailableForInsuranceProductType extends Primitive._boolean {
	Type?: number;
}
export interface FundShareClassTypeShareClassAttributesTypeAvailableForInsuranceProductType extends _FundShareClassTypeShareClassAttributesTypeAvailableForInsuranceProductType { constructor: { new(): FundShareClassTypeShareClassAttributesTypeAvailableForInsuranceProductType }; }

export interface _FundShareClassTypeShareClassAttributesTypeAvailableForPensionPlanType extends Primitive._boolean {
	Type?: number;
}
export interface FundShareClassTypeShareClassAttributesTypeAvailableForPensionPlanType extends _FundShareClassTypeShareClassAttributesTypeAvailableForPensionPlanType { constructor: { new(): FundShareClassTypeShareClassAttributesTypeAvailableForPensionPlanType }; }

export interface _FundShareClassTypeShareClassAttributesTypeCurrencyHedgeDetailsType extends BaseType {
	CurrencyHedged: number;
	CurrencyHedgedTo?: tokenIdChar3Type;
	HedgedProportion?: number;
	MultipleCurrency?: boolean;
}
export interface FundShareClassTypeShareClassAttributesTypeCurrencyHedgeDetailsType extends _FundShareClassTypeShareClassAttributesTypeCurrencyHedgeDetailsType { constructor: { new(): FundShareClassTypeShareClassAttributesTypeCurrencyHedgeDetailsType }; }

export interface _FundShareClassTypeShareClassNarrativesType extends BaseType {
	LanguageId?: string;
	KIIDObjective: string;
}
export interface FundShareClassTypeShareClassNarrativesType extends _FundShareClassTypeShareClassNarrativesType { constructor: { new(): FundShareClassTypeShareClassNarrativesType }; }

export interface _FundType extends BaseType {
	ExternalId: string;
	Id: string;
	MasterPortfolioId: number;
	PortfolioProxyInvestmentId?: string;
	StrategyId?: string;
	AnnualReport?: AnnualReportType;
	DealingSchedule?: FundTypeDealingScheduleType;
	ExtendedProperty?: FundTypeExtendedPropertyType;
	FundAttributes?: FundTypeFundAttributesType;
	FundBasics?: FundTypeFundBasicsType;
	FundFeatures?: FundTypeFundFeaturesType;
	FundManagement?: FundTypeFundManagementType;
	FundNarratives?: FundTypeFundNarrativesType;
	HistoricalOperation?: HistoricalOperationType;
	IndexPortfolio?: FundTypeIndexPortfolioType;
	InternationalFeature?: InternationalFeatureType;
	MultilingualVariation?: MultilingualVariationType;
	PortfolioList?: FundTypePortfolioListType;
	Strategy?: StrategyType;
}
export interface FundType extends _FundType { constructor: { new(): FundType }; }

export interface _FundTypeDealingScheduleType extends BaseType {
	DealingTime?: FundTypeDealingScheduleTypeDealingTimeType;
	ValuationTime?: FundTypeDealingScheduleTypeValuationTimeType;
}
export interface FundTypeDealingScheduleType extends _FundTypeDealingScheduleType { constructor: { new(): FundTypeDealingScheduleType }; }

export interface _FundTypeDealingScheduleTypeDealingTimeType extends BaseType {
	CutOffTimeDetail?: FundTypeDealingScheduleTypeDealingTimeTypeCutOffTimeDetailType[];
	DealingTimeDetail?: FundTypeDealingScheduleTypeDealingTimeTypeDealingTimeDetailType[];
}
export interface FundTypeDealingScheduleTypeDealingTimeType extends _FundTypeDealingScheduleTypeDealingTimeType { constructor: { new(): FundTypeDealingScheduleTypeDealingTimeType }; }

export interface _FundTypeDealingScheduleTypeDealingTimeTypeCutOffTimeDetailType extends BaseType {
	CountryId: string;
	TimeZone: number;
	CutOffTime?: string;
	DealingType?: number;
}
export interface FundTypeDealingScheduleTypeDealingTimeTypeCutOffTimeDetailType extends _FundTypeDealingScheduleTypeDealingTimeTypeCutOffTimeDetailType { constructor: { new(): FundTypeDealingScheduleTypeDealingTimeTypeCutOffTimeDetailType }; }

export interface _FundTypeDealingScheduleTypeDealingTimeTypeDealingTimeDetailType extends BaseType {
	CountryId: string;
	TimeZone?: number;
	EndTime?: string;
	StartTime?: string;
}
export interface FundTypeDealingScheduleTypeDealingTimeTypeDealingTimeDetailType extends _FundTypeDealingScheduleTypeDealingTimeTypeDealingTimeDetailType { constructor: { new(): FundTypeDealingScheduleTypeDealingTimeTypeDealingTimeDetailType }; }

export interface _FundTypeDealingScheduleTypeValuationTimeType extends _varchar7 {
	CountryId: string;
	TimeZone: number;
}
export interface FundTypeDealingScheduleTypeValuationTimeType extends _FundTypeDealingScheduleTypeValuationTimeType { constructor: { new(): FundTypeDealingScheduleTypeValuationTimeType }; }

export interface _FundTypeExtendedPropertyType extends BaseType {}
export interface FundTypeExtendedPropertyType extends _FundTypeExtendedPropertyType { constructor: { new(): FundTypeExtendedPropertyType }; }

export interface _FundTypeFundAttributesType extends BaseType {
	CommodityTracking?: FundTypeFundAttributesTypeCommodityTrackingType;
	ContinuouslyOffered: boolean;
	CoveredCall: boolean;
	CurrencyTracking: boolean;
	DividendYieldFund?: boolean;
	EnhancedIndexFund: boolean;
	EthicalIssueStrategyFocus?: number;
	FundOfFunds: FundTypeFundAttributesTypeFundOfFundsType;
	HedgeFund: FundTypeFundAttributesTypeHedgeFundType;
	IndexFund: boolean;
	IndexingApproach?: FundTypeFundAttributesTypeIndexingApproachType;
	InsuredMuniFund: boolean;
	InverseFund?: boolean;
	LeveragedFund: boolean;
	LifeCycleFund: boolean;
	ManagedDistribution: boolean;
	MasterFeeder: FundTypeFundAttributesTypeMasterFeederType;
	MasterFund?: boolean;
	ModelPortfolioFund?: boolean;
	MoneyMarketFund: boolean;
	NonDiversifiedFund: boolean;
	OffshoreVehicle: boolean;
	OverlayManaged?: boolean;
	PrivateLabelFund: boolean;
	SociallyResponsibleFund: boolean;
	SwapBasedETF?: boolean;
	SyntheticHedgeFund?: boolean;
	TeamManagedFund: boolean;
	TermTrustFund: boolean;
	UCITS: boolean;
}
export interface FundTypeFundAttributesType extends _FundTypeFundAttributesType { constructor: { new(): FundTypeFundAttributesType }; }

export interface _FundTypeFundAttributesTypeCommodityTrackingType extends Primitive._boolean {
	Type?: number;
}
export interface FundTypeFundAttributesTypeCommodityTrackingType extends _FundTypeFundAttributesTypeCommodityTrackingType { constructor: { new(): FundTypeFundAttributesTypeCommodityTrackingType }; }

export interface _FundTypeFundAttributesTypeFundOfFundsType extends Primitive._boolean {
	InHouse?: boolean;
}
export interface FundTypeFundAttributesTypeFundOfFundsType extends _FundTypeFundAttributesTypeFundOfFundsType { constructor: { new(): FundTypeFundAttributesTypeFundOfFundsType }; }

export interface _FundTypeFundAttributesTypeHedgeFundType extends Primitive._boolean {
	Unconventional?: boolean;
}
export interface FundTypeFundAttributesTypeHedgeFundType extends _FundTypeFundAttributesTypeHedgeFundType { constructor: { new(): FundTypeFundAttributesTypeHedgeFundType }; }

export interface _FundTypeFundAttributesTypeIndexingApproachType extends BaseType {
	CensusReplication: boolean;
	DerivativeBased: boolean;
	NotApplicable: boolean;
	PhysicalFull: boolean;
	PhysicalSample: boolean;
	StratifiedSampling: boolean;
	Structured: boolean;
	SyntheticReplication: boolean;
}
export interface FundTypeFundAttributesTypeIndexingApproachType extends _FundTypeFundAttributesTypeIndexingApproachType { constructor: { new(): FundTypeFundAttributesTypeIndexingApproachType }; }

export interface _FundTypeFundAttributesTypeMasterFeederType extends Primitive._boolean {
	MasterFundId?: string;
	MasterFundName?: string;
}
export interface FundTypeFundAttributesTypeMasterFeederType extends _FundTypeFundAttributesTypeMasterFeederType { constructor: { new(): FundTypeFundAttributesTypeMasterFeederType }; }

export interface _FundTypeFundBasicsType extends BaseType {
	CategoryId?: string;
	InstitutionalCategoryId?: string;
	OldestShareId?: string;
	ProspectusObjectiveId?: string;
	ConstituentWeight?: string;
	Domicile: FundTypeFundBasicsTypeDomicileType;
	FiscalYearEndMonth?: number;
	IndexStrategyBox?: number;
	LegalName: string;
	LegalStructure: tokenIdChar2Type;
	MPTRiskFreeRateBenchmark?: FundTypeFundBasicsTypeMPTRiskFreeRateBenchmarkType;
	Name: string;
	OperationStartDate?: Date;
	PercentAssetInvestedByEmployee?: number;
	PreviousName?: varchar40ByEndDateType[];
	PrimaryBenchmark?: FundTypeFundBasicsTypePrimaryBenchmarkType;
	RebalancingFrequency?: string;
	RedemptionDate?: Date;
	SecondaryBenchmark?: FundTypeFundBasicsTypeSecondaryBenchmarkType;
	SeriesName?: tokenIdChar10Type;
	TargetDate?: Date;
	TargetMaturity?: FundTypeFundBasicsTypeTargetMaturityType;
}
export interface FundTypeFundBasicsType extends _FundTypeFundBasicsType { constructor: { new(): FundTypeFundBasicsType }; }

export interface _FundTypeFundBasicsTypeDomicileType extends _varchar40 {
	Id: string;
	Type: number;
}
export interface FundTypeFundBasicsTypeDomicileType extends _FundTypeFundBasicsTypeDomicileType { constructor: { new(): FundTypeFundBasicsTypeDomicileType }; }

export interface _FundTypeFundBasicsTypeMPTRiskFreeRateBenchmarkType extends BaseType {
	HoldingDetail: holdingDetailType[];
	Name?: string;
}
export interface FundTypeFundBasicsTypeMPTRiskFreeRateBenchmarkType extends _FundTypeFundBasicsTypeMPTRiskFreeRateBenchmarkType { constructor: { new(): FundTypeFundBasicsTypeMPTRiskFreeRateBenchmarkType }; }

export interface _FundTypeFundBasicsTypePrimaryBenchmarkType extends BaseType {
	CompositeBenchmarkId?: string;
	RescaledCompositeBenchmarkId?: string;
	AdjustmentFactor?: number;
	HoldingDetail: holdingDetailType[];
	Name?: string;
}
export interface FundTypeFundBasicsTypePrimaryBenchmarkType extends _FundTypeFundBasicsTypePrimaryBenchmarkType { constructor: { new(): FundTypeFundBasicsTypePrimaryBenchmarkType }; }

export interface _FundTypeFundBasicsTypeSecondaryBenchmarkType extends BaseType {
	AdjustmentFactor?: number;
	HoldingDetail: holdingDetailType[];
	Name?: string;
}
export interface FundTypeFundBasicsTypeSecondaryBenchmarkType extends _FundTypeFundBasicsTypeSecondaryBenchmarkType { constructor: { new(): FundTypeFundBasicsTypeSecondaryBenchmarkType }; }

export interface _FundTypeFundBasicsTypeTargetMaturityType extends Primitive._number {
	Unit?: number;
}
export interface FundTypeFundBasicsTypeTargetMaturityType extends _FundTypeFundBasicsTypeTargetMaturityType { constructor: { new(): FundTypeFundBasicsTypeTargetMaturityType }; }

export interface _FundTypeFundFeaturesType extends BaseType {
	Contrarian?: boolean;
	CorePlus?: boolean;
	EmergingManager?: boolean;
	EnhancedCashManagement?: boolean;
	FlexibleAssetAllocation?: boolean;
	GARP?: boolean;
	Infrastructure?: boolean;
	ManagedFutures?: boolean;
	RealEstateTracking?: boolean;
	ShariaCompliant?: boolean;
	SingleCountryFund?: boolean;
	SMIDCapFund?: boolean;
	StableValue?: boolean;
	TaxManaged?: boolean;
}
export interface FundTypeFundFeaturesType extends _FundTypeFundFeaturesType { constructor: { new(): FundTypeFundFeaturesType }; }

export interface _FundTypeFundManagementType extends BaseType {
	AdministratorList?: FundTypeFundManagementTypeAdministratorListType;
	AdvisorList?: FundTypeFundManagementTypeAdvisorListType;
	AuditorList?: FundTypeFundManagementTypeAuditorListType;
	BrokerList?: FundTypeFundManagementTypeBrokerListType;
	CounterpartyList?: FundTypeFundManagementTypeCounterpartyListType;
	CustodianList?: FundTypeFundManagementTypeCustodianListType;
	DepositaryList?: FundTypeFundManagementTypeDepositaryListType;
	DistributorList?: FundTypeFundManagementTypeDistributorListType;
	FundFamily?: FundTypeFundManagementTypeFundFamilyType;
	GuarantorList?: FundTypeFundManagementTypeGuarantorListType;
	LegalCounselList?: FundTypeFundManagementTypeLegalCounselListType;
	ManagerList?: FundTypeFundManagementTypeManagerListType;
	PayingAgentList?: FundTypeFundManagementTypePayingAgentListType;
	PrimeBrokerList?: FundTypeFundManagementTypePrimeBrokerListType;
	PromoterList?: FundTypeFundManagementTypePromoterListType;
	ProviderCompany?: FundTypeFundManagementTypeProviderCompanyType;
	Registration?: registrationType;
	RepresentativeList?: FundTypeFundManagementTypeRepresentativeListType;
	SubAdvisorList?: FundTypeFundManagementTypeSubAdvisorListType;
	TransferAgentList?: FundTypeFundManagementTypeTransferAgentListType;
	TrusteeList?: FundTypeFundManagementTypeTrusteeListType;
	Umbrella?: FundTypeFundManagementTypeUmbrellaType;
	UmbrellaCompany?: FundTypeFundManagementTypeUmbrellaCompanyType;
}
export interface FundTypeFundManagementType extends _FundTypeFundManagementType { constructor: { new(): FundTypeFundManagementType }; }

export interface _FundTypeFundManagementTypeAdministratorListType extends BaseType {
	AdministratorCompany: FundTypeFundManagementTypeAdministratorListTypeAdministratorCompanyType[];
}
export interface FundTypeFundManagementTypeAdministratorListType extends _FundTypeFundManagementTypeAdministratorListType { constructor: { new(): FundTypeFundManagementTypeAdministratorListType }; }

export interface _FundTypeFundManagementTypeAdministratorListTypeAdministratorCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
	DesignatedContact?: FundTypeFundManagementTypeAdministratorListTypeAdministratorCompanyTypeDesignatedContactType;
}
export interface FundTypeFundManagementTypeAdministratorListTypeAdministratorCompanyType extends _FundTypeFundManagementTypeAdministratorListTypeAdministratorCompanyType { constructor: { new(): FundTypeFundManagementTypeAdministratorListTypeAdministratorCompanyType }; }

export interface _FundTypeFundManagementTypeAdministratorListTypeAdministratorCompanyTypeDesignatedContactType extends BaseType {
	ContactPerson: ContactPerson[];
}
export interface FundTypeFundManagementTypeAdministratorListTypeAdministratorCompanyTypeDesignatedContactType extends _FundTypeFundManagementTypeAdministratorListTypeAdministratorCompanyTypeDesignatedContactType { constructor: { new(): FundTypeFundManagementTypeAdministratorListTypeAdministratorCompanyTypeDesignatedContactType }; }

export interface _FundTypeFundManagementTypeAdvisorListType extends BaseType {
	AdvisorCompany: FundTypeFundManagementTypeAdvisorListTypeAdvisorCompanyType[];
}
export interface FundTypeFundManagementTypeAdvisorListType extends _FundTypeFundManagementTypeAdvisorListType { constructor: { new(): FundTypeFundManagementTypeAdvisorListType }; }

export interface _FundTypeFundManagementTypeAdvisorListTypeAdvisorCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypeAdvisorListTypeAdvisorCompanyType extends _FundTypeFundManagementTypeAdvisorListTypeAdvisorCompanyType { constructor: { new(): FundTypeFundManagementTypeAdvisorListTypeAdvisorCompanyType }; }

export interface _FundTypeFundManagementTypeAuditorListType extends BaseType {
	AuditorCompany: FundTypeFundManagementTypeAuditorListTypeAuditorCompanyType[];
}
export interface FundTypeFundManagementTypeAuditorListType extends _FundTypeFundManagementTypeAuditorListType { constructor: { new(): FundTypeFundManagementTypeAuditorListType }; }

export interface _FundTypeFundManagementTypeAuditorListTypeAuditorCompanyType extends BaseType {
	AnnualAuditDate?: Date;
	DataLink: linkVarchar10Type;
	Company: CompanyType;
	DesignatedContact?: FundTypeFundManagementTypeAuditorListTypeAuditorCompanyTypeDesignatedContactType;
}
export interface FundTypeFundManagementTypeAuditorListTypeAuditorCompanyType extends _FundTypeFundManagementTypeAuditorListTypeAuditorCompanyType { constructor: { new(): FundTypeFundManagementTypeAuditorListTypeAuditorCompanyType }; }

export interface _FundTypeFundManagementTypeAuditorListTypeAuditorCompanyTypeDesignatedContactType extends BaseType {
	ContactPerson: ContactPerson[];
}
export interface FundTypeFundManagementTypeAuditorListTypeAuditorCompanyTypeDesignatedContactType extends _FundTypeFundManagementTypeAuditorListTypeAuditorCompanyTypeDesignatedContactType { constructor: { new(): FundTypeFundManagementTypeAuditorListTypeAuditorCompanyTypeDesignatedContactType }; }

export interface _FundTypeFundManagementTypeBrokerListType extends BaseType {
	BrokerCompany: FundTypeFundManagementTypeBrokerListTypeBrokerCompanyType[];
}
export interface FundTypeFundManagementTypeBrokerListType extends _FundTypeFundManagementTypeBrokerListType { constructor: { new(): FundTypeFundManagementTypeBrokerListType }; }

export interface _FundTypeFundManagementTypeBrokerListTypeBrokerCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypeBrokerListTypeBrokerCompanyType extends _FundTypeFundManagementTypeBrokerListTypeBrokerCompanyType { constructor: { new(): FundTypeFundManagementTypeBrokerListTypeBrokerCompanyType }; }

export interface _FundTypeFundManagementTypeCounterpartyListType extends BaseType {
	Counterparty: FundTypeFundManagementTypeCounterpartyListTypeCounterpartyType[];
}
export interface FundTypeFundManagementTypeCounterpartyListType extends _FundTypeFundManagementTypeCounterpartyListType { constructor: { new(): FundTypeFundManagementTypeCounterpartyListType }; }

export interface _FundTypeFundManagementTypeCounterpartyListTypeCounterpartyType extends BaseType {
	Company: CompanyType;
	CountryId: string;
}
export interface FundTypeFundManagementTypeCounterpartyListTypeCounterpartyType extends _FundTypeFundManagementTypeCounterpartyListTypeCounterpartyType { constructor: { new(): FundTypeFundManagementTypeCounterpartyListTypeCounterpartyType }; }

export interface _FundTypeFundManagementTypeCustodianListType extends BaseType {
	CustodianCompany: FundTypeFundManagementTypeCustodianListTypeCustodianCompanyType[];
}
export interface FundTypeFundManagementTypeCustodianListType extends _FundTypeFundManagementTypeCustodianListType { constructor: { new(): FundTypeFundManagementTypeCustodianListType }; }

export interface _FundTypeFundManagementTypeCustodianListTypeCustodianCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypeCustodianListTypeCustodianCompanyType extends _FundTypeFundManagementTypeCustodianListTypeCustodianCompanyType { constructor: { new(): FundTypeFundManagementTypeCustodianListTypeCustodianCompanyType }; }

export interface _FundTypeFundManagementTypeDepositaryListType extends BaseType {
	Depositary: FundTypeFundManagementTypeDepositaryListTypeDepositaryType[];
}
export interface FundTypeFundManagementTypeDepositaryListType extends _FundTypeFundManagementTypeDepositaryListType { constructor: { new(): FundTypeFundManagementTypeDepositaryListType }; }

export interface _FundTypeFundManagementTypeDepositaryListTypeDepositaryType extends BaseType {
	Company: CompanyType;
	CountryId: string;
}
export interface FundTypeFundManagementTypeDepositaryListTypeDepositaryType extends _FundTypeFundManagementTypeDepositaryListTypeDepositaryType { constructor: { new(): FundTypeFundManagementTypeDepositaryListTypeDepositaryType }; }

export interface _FundTypeFundManagementTypeDistributorListType extends BaseType {
	DistributorCompany: FundTypeFundManagementTypeDistributorListTypeDistributorCompanyType[];
}
export interface FundTypeFundManagementTypeDistributorListType extends _FundTypeFundManagementTypeDistributorListType { constructor: { new(): FundTypeFundManagementTypeDistributorListType }; }

export interface _FundTypeFundManagementTypeDistributorListTypeDistributorCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypeDistributorListTypeDistributorCompanyType extends _FundTypeFundManagementTypeDistributorListTypeDistributorCompanyType { constructor: { new(): FundTypeFundManagementTypeDistributorListTypeDistributorCompanyType }; }

export interface _FundTypeFundManagementTypeFundFamilyType extends BaseType {
	DataLink: linkIntegerType;
	Family: FamilyType;
}
export interface FundTypeFundManagementTypeFundFamilyType extends _FundTypeFundManagementTypeFundFamilyType { constructor: { new(): FundTypeFundManagementTypeFundFamilyType }; }

export interface _FundTypeFundManagementTypeGuarantorListType extends BaseType {
	GuarantorCompany: FundTypeFundManagementTypeGuarantorListTypeGuarantorCompanyType[];
}
export interface FundTypeFundManagementTypeGuarantorListType extends _FundTypeFundManagementTypeGuarantorListType { constructor: { new(): FundTypeFundManagementTypeGuarantorListType }; }

export interface _FundTypeFundManagementTypeGuarantorListTypeGuarantorCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypeGuarantorListTypeGuarantorCompanyType extends _FundTypeFundManagementTypeGuarantorListTypeGuarantorCompanyType { constructor: { new(): FundTypeFundManagementTypeGuarantorListTypeGuarantorCompanyType }; }

export interface _FundTypeFundManagementTypeLegalCounselListType extends BaseType {
	LegalCounselCompany: FundTypeFundManagementTypeLegalCounselListTypeLegalCounselCompanyType[];
}
export interface FundTypeFundManagementTypeLegalCounselListType extends _FundTypeFundManagementTypeLegalCounselListType { constructor: { new(): FundTypeFundManagementTypeLegalCounselListType }; }

export interface _FundTypeFundManagementTypeLegalCounselListTypeLegalCounselCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
	DesignatedContact?: FundTypeFundManagementTypeLegalCounselListTypeLegalCounselCompanyTypeDesignatedContactType;
}
export interface FundTypeFundManagementTypeLegalCounselListTypeLegalCounselCompanyType extends _FundTypeFundManagementTypeLegalCounselListTypeLegalCounselCompanyType { constructor: { new(): FundTypeFundManagementTypeLegalCounselListTypeLegalCounselCompanyType }; }

export interface _FundTypeFundManagementTypeLegalCounselListTypeLegalCounselCompanyTypeDesignatedContactType extends BaseType {
	ContactPerson: ContactPerson[];
}
export interface FundTypeFundManagementTypeLegalCounselListTypeLegalCounselCompanyTypeDesignatedContactType extends _FundTypeFundManagementTypeLegalCounselListTypeLegalCounselCompanyTypeDesignatedContactType { constructor: { new(): FundTypeFundManagementTypeLegalCounselListTypeLegalCounselCompanyTypeDesignatedContactType }; }

export interface _FundTypeFundManagementTypeManagerListType extends BaseType {
	ManagerDetail?: FundTypeFundManagementTypeManagerListTypeManagerDetailType[];
	TeamDetail?: FundTypeFundManagementTypeManagerListTypeTeamDetailType[];
}
export interface FundTypeFundManagementTypeManagerListType extends _FundTypeFundManagementTypeManagerListType { constructor: { new(): FundTypeFundManagementTypeManagerListType }; }

export interface _FundTypeFundManagementTypeManagerListTypeManagerDetailType extends BaseType {
	DisplayPreference: string;
	DataLink: linkVarchar10Type;
	AssetManagementRole: emptyIdPositiveIntegerType;
	EndDate?: Date;
	MultilingualVariation?: MultilingualVariationType;
	OtherAccountManaged?: FundTypeFundManagementTypeManagerListTypeManagerDetailTypeOtherAccountManagedType;
	OwnershipLevel?: emptyIdPositiveIntegerType;
	ProfessionalInformation: ProfessionalInformationType;
	StartDate: Date;
}
export interface FundTypeFundManagementTypeManagerListTypeManagerDetailType extends _FundTypeFundManagementTypeManagerListTypeManagerDetailType { constructor: { new(): FundTypeFundManagementTypeManagerListTypeManagerDetailType }; }

export interface _FundTypeFundManagementTypeManagerListTypeManagerDetailTypeOtherAccountManagedType extends BaseType {
	OtherAccountManagedDetail: FundTypeFundManagementTypeManagerListTypeManagerDetailTypeOtherAccountManagedTypeOtherAccountManagedDetailType[];
}
export interface FundTypeFundManagementTypeManagerListTypeManagerDetailTypeOtherAccountManagedType extends _FundTypeFundManagementTypeManagerListTypeManagerDetailTypeOtherAccountManagedType { constructor: { new(): FundTypeFundManagementTypeManagerListTypeManagerDetailTypeOtherAccountManagedType }; }

export interface _FundTypeFundManagementTypeManagerListTypeManagerDetailTypeOtherAccountManagedTypeOtherAccountManagedDetailType extends BaseType {
	FeeBase: number;
	Type: number;
	AccountBreakdown: accountBreakdownType;
}
export interface FundTypeFundManagementTypeManagerListTypeManagerDetailTypeOtherAccountManagedTypeOtherAccountManagedDetailType extends _FundTypeFundManagementTypeManagerListTypeManagerDetailTypeOtherAccountManagedTypeOtherAccountManagedDetailType { constructor: { new(): FundTypeFundManagementTypeManagerListTypeManagerDetailTypeOtherAccountManagedTypeOtherAccountManagedDetailType }; }

export interface _FundTypeFundManagementTypeManagerListTypeTeamDetailType extends BaseType {
	Id: string;
	EndDate?: Date;
	StartDate: Date;
}
export interface FundTypeFundManagementTypeManagerListTypeTeamDetailType extends _FundTypeFundManagementTypeManagerListTypeTeamDetailType { constructor: { new(): FundTypeFundManagementTypeManagerListTypeTeamDetailType }; }

export interface _FundTypeFundManagementTypePayingAgentListType extends BaseType {
	PayingAgentCompany: FundTypeFundManagementTypePayingAgentListTypePayingAgentCompanyType[];
}
export interface FundTypeFundManagementTypePayingAgentListType extends _FundTypeFundManagementTypePayingAgentListType { constructor: { new(): FundTypeFundManagementTypePayingAgentListType }; }

export interface _FundTypeFundManagementTypePayingAgentListTypePayingAgentCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypePayingAgentListTypePayingAgentCompanyType extends _FundTypeFundManagementTypePayingAgentListTypePayingAgentCompanyType { constructor: { new(): FundTypeFundManagementTypePayingAgentListTypePayingAgentCompanyType }; }

export interface _FundTypeFundManagementTypePrimeBrokerListType extends BaseType {
	PrimeBrokerCompany: FundTypeFundManagementTypePrimeBrokerListTypePrimeBrokerCompanyType[];
}
export interface FundTypeFundManagementTypePrimeBrokerListType extends _FundTypeFundManagementTypePrimeBrokerListType { constructor: { new(): FundTypeFundManagementTypePrimeBrokerListType }; }

export interface _FundTypeFundManagementTypePrimeBrokerListTypePrimeBrokerCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
	DesignatedContact?: FundTypeFundManagementTypePrimeBrokerListTypePrimeBrokerCompanyTypeDesignatedContactType;
}
export interface FundTypeFundManagementTypePrimeBrokerListTypePrimeBrokerCompanyType extends _FundTypeFundManagementTypePrimeBrokerListTypePrimeBrokerCompanyType { constructor: { new(): FundTypeFundManagementTypePrimeBrokerListTypePrimeBrokerCompanyType }; }

export interface _FundTypeFundManagementTypePrimeBrokerListTypePrimeBrokerCompanyTypeDesignatedContactType extends BaseType {
	ContactPerson: ContactPerson[];
}
export interface FundTypeFundManagementTypePrimeBrokerListTypePrimeBrokerCompanyTypeDesignatedContactType extends _FundTypeFundManagementTypePrimeBrokerListTypePrimeBrokerCompanyTypeDesignatedContactType { constructor: { new(): FundTypeFundManagementTypePrimeBrokerListTypePrimeBrokerCompanyTypeDesignatedContactType }; }

export interface _FundTypeFundManagementTypePromoterListType extends BaseType {
	PromoterCompany: FundTypeFundManagementTypePromoterListTypePromoterCompanyType[];
}
export interface FundTypeFundManagementTypePromoterListType extends _FundTypeFundManagementTypePromoterListType { constructor: { new(): FundTypeFundManagementTypePromoterListType }; }

export interface _FundTypeFundManagementTypePromoterListTypePromoterCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
	DesignatedContact?: FundTypeFundManagementTypePromoterListTypePromoterCompanyTypeDesignatedContactType;
}
export interface FundTypeFundManagementTypePromoterListTypePromoterCompanyType extends _FundTypeFundManagementTypePromoterListTypePromoterCompanyType { constructor: { new(): FundTypeFundManagementTypePromoterListTypePromoterCompanyType }; }

export interface _FundTypeFundManagementTypePromoterListTypePromoterCompanyTypeDesignatedContactType extends BaseType {
	ContactPerson: ContactPerson[];
}
export interface FundTypeFundManagementTypePromoterListTypePromoterCompanyTypeDesignatedContactType extends _FundTypeFundManagementTypePromoterListTypePromoterCompanyTypeDesignatedContactType { constructor: { new(): FundTypeFundManagementTypePromoterListTypePromoterCompanyTypeDesignatedContactType }; }

export interface _FundTypeFundManagementTypeProviderCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypeProviderCompanyType extends _FundTypeFundManagementTypeProviderCompanyType { constructor: { new(): FundTypeFundManagementTypeProviderCompanyType }; }

export interface _FundTypeFundManagementTypeRepresentativeListType extends BaseType {
	RepresentativeCompany: FundTypeFundManagementTypeRepresentativeListTypeRepresentativeCompanyType[];
}
export interface FundTypeFundManagementTypeRepresentativeListType extends _FundTypeFundManagementTypeRepresentativeListType { constructor: { new(): FundTypeFundManagementTypeRepresentativeListType }; }

export interface _FundTypeFundManagementTypeRepresentativeListTypeRepresentativeCompanyType extends BaseType {
	Company: CompanyType;
	CountryId: string;
}
export interface FundTypeFundManagementTypeRepresentativeListTypeRepresentativeCompanyType extends _FundTypeFundManagementTypeRepresentativeListTypeRepresentativeCompanyType { constructor: { new(): FundTypeFundManagementTypeRepresentativeListTypeRepresentativeCompanyType }; }

export interface _FundTypeFundManagementTypeSubAdvisorListType extends BaseType {
	SubAdvisorCompany: FundTypeFundManagementTypeSubAdvisorListTypeSubAdvisorCompanyType[];
}
export interface FundTypeFundManagementTypeSubAdvisorListType extends _FundTypeFundManagementTypeSubAdvisorListType { constructor: { new(): FundTypeFundManagementTypeSubAdvisorListType }; }

export interface _FundTypeFundManagementTypeSubAdvisorListTypeSubAdvisorCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypeSubAdvisorListTypeSubAdvisorCompanyType extends _FundTypeFundManagementTypeSubAdvisorListTypeSubAdvisorCompanyType { constructor: { new(): FundTypeFundManagementTypeSubAdvisorListTypeSubAdvisorCompanyType }; }

export interface _FundTypeFundManagementTypeTransferAgentListType extends BaseType {
	TransferAgentCompany: FundTypeFundManagementTypeTransferAgentListTypeTransferAgentCompanyType[];
}
export interface FundTypeFundManagementTypeTransferAgentListType extends _FundTypeFundManagementTypeTransferAgentListType { constructor: { new(): FundTypeFundManagementTypeTransferAgentListType }; }

export interface _FundTypeFundManagementTypeTransferAgentListTypeTransferAgentCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypeTransferAgentListTypeTransferAgentCompanyType extends _FundTypeFundManagementTypeTransferAgentListTypeTransferAgentCompanyType { constructor: { new(): FundTypeFundManagementTypeTransferAgentListTypeTransferAgentCompanyType }; }

export interface _FundTypeFundManagementTypeTrusteeListType extends BaseType {
	TrusteeCompany: FundTypeFundManagementTypeTrusteeListTypeTrusteeCompanyType[];
}
export interface FundTypeFundManagementTypeTrusteeListType extends _FundTypeFundManagementTypeTrusteeListType { constructor: { new(): FundTypeFundManagementTypeTrusteeListType }; }

export interface _FundTypeFundManagementTypeTrusteeListTypeTrusteeCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypeTrusteeListTypeTrusteeCompanyType extends _FundTypeFundManagementTypeTrusteeListTypeTrusteeCompanyType { constructor: { new(): FundTypeFundManagementTypeTrusteeListTypeTrusteeCompanyType }; }

export interface _FundTypeFundManagementTypeUmbrellaCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface FundTypeFundManagementTypeUmbrellaCompanyType extends _FundTypeFundManagementTypeUmbrellaCompanyType { constructor: { new(): FundTypeFundManagementTypeUmbrellaCompanyType }; }

export interface _FundTypeFundManagementTypeUmbrellaType extends BaseType {
	Id: string;
}
export interface FundTypeFundManagementTypeUmbrellaType extends _FundTypeFundManagementTypeUmbrellaType { constructor: { new(): FundTypeFundManagementTypeUmbrellaType }; }

export interface _FundTypeFundNarrativesType extends BaseType {
	LanguageId: string;
	CompensationStructure?: string;
	FiduciaryGrades?: FundTypeFundNarrativesTypeFiduciaryGradesType;
	FundInvestor?: string;
	IncomeDistributionPrinciple?: string;
	InvestmentCriteria?: FundTypeFundNarrativesTypeInvestmentCriteriaType;
	InvestmentDecisionMakingProcess?: string;
	InvestmentPhilosophy?: string;
	LegalDisclosure?: string;
	PortfolioConstruction?: string;
	PotentialConflictsOfInterest?: string;
	RiskProfile?: FundTypeFundNarrativesTypeRiskProfileType;
}
export interface FundTypeFundNarrativesType extends _FundTypeFundNarrativesType { constructor: { new(): FundTypeFundNarrativesType }; }

export interface _FundTypeFundNarrativesTypeFiduciaryGradesType extends BaseType {
	Date: Date;
	BoardQualityScore: stringGradeType;
	CorporateCultureScore: stringGradeType;
	FeesScore: stringGradeType;
	ManagerIncentivesScore: stringGradeType;
	OverallGrade: stringGradeType;
	RegulatoryIssuesScore: stringGradeType;
}
export interface FundTypeFundNarrativesTypeFiduciaryGradesType extends _FundTypeFundNarrativesTypeFiduciaryGradesType { constructor: { new(): FundTypeFundNarrativesTypeFiduciaryGradesType }; }

export interface _FundTypeFundNarrativesTypeInvestmentCriteriaType extends BaseType {
	InvestmentRange?: string;
	InvestmentStrategy: string;
	KIDObjective?: string;
	MultiShareFeeSummary?: string;
	StrategySummary?: string;
}
export interface FundTypeFundNarrativesTypeInvestmentCriteriaType extends _FundTypeFundNarrativesTypeInvestmentCriteriaType { constructor: { new(): FundTypeFundNarrativesTypeInvestmentCriteriaType }; }

export interface _FundTypeFundNarrativesTypeRiskProfileType extends BaseType {
	Risk: FundTypeFundNarrativesTypeRiskProfileTypeRiskType[];
}
export interface FundTypeFundNarrativesTypeRiskProfileType extends _FundTypeFundNarrativesTypeRiskProfileType { constructor: { new(): FundTypeFundNarrativesTypeRiskProfileType }; }

export interface _FundTypeFundNarrativesTypeRiskProfileTypeRiskType extends _varchar50 {
	Id: number;
}
export interface FundTypeFundNarrativesTypeRiskProfileTypeRiskType extends _FundTypeFundNarrativesTypeRiskProfileTypeRiskType { constructor: { new(): FundTypeFundNarrativesTypeRiskProfileTypeRiskType }; }

export interface _FundTypeIndexPortfolioType extends BaseType {
	DataLink: linkIntegerType[];
	Portfolio: PortfolioType[];
}
export interface FundTypeIndexPortfolioType extends _FundTypeIndexPortfolioType { constructor: { new(): FundTypeIndexPortfolioType }; }

export interface _FundTypePortfolioListType extends BaseType {
	DataLink: linkIntegerType[];
	Portfolio: PortfolioType;
	SurveyData?: FundTypePortfolioListTypeSurveyDataType[];
}
export interface FundTypePortfolioListType extends _FundTypePortfolioListType { constructor: { new(): FundTypePortfolioListType }; }

export interface _FundTypePortfolioListTypeSurveyDataType extends BaseType {
	MasterPortfolioId: number;
	AustralianSurvey: FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyType;
}
export interface FundTypePortfolioListTypeSurveyDataType extends _FundTypePortfolioListTypeSurveyDataType { constructor: { new(): FundTypePortfolioListTypeSurveyDataType }; }

export interface _FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyType extends BaseType {
	EffectiveDate: Date;
	AssetAllocation: FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationType;
}
export interface FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyType extends _FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyType { constructor: { new(): FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyType }; }

export interface _FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationType extends BaseType {
	BreakdownValue: FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationTypeBreakdownValueType[];
}
export interface FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationType extends _FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationType { constructor: { new(): FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationType }; }

export interface _FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationTypeBreakdownValueType extends _smallRawDecimal {
	Type: number;
}
export interface FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationTypeBreakdownValueType extends _FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationTypeBreakdownValueType { constructor: { new(): FundTypePortfolioListTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationTypeBreakdownValueType }; }

export interface _groupPerformanceType extends BaseType {
	ClassificationMethod: number;
	MarketingRegionId: number;
	PeerGroupId: number;
	Type: number;
	EndDate: Date;
	GroupPerformanceDetail: groupPerformanceTypeGroupPerformanceDetailType[];
}
export interface groupPerformanceType extends _groupPerformanceType { constructor: { new(): groupPerformanceType }; }
export var groupPerformanceType: { new(): groupPerformanceType };

export interface _groupPerformanceTypeGroupPerformanceDetailType extends BaseType {
	TimePeriod: string;
	GroupBreakpoint?: groupPerformanceTypeGroupPerformanceDetailTypeGroupBreakpointType;
	GroupSize: number;
}
export interface groupPerformanceTypeGroupPerformanceDetailType extends _groupPerformanceTypeGroupPerformanceDetailType { constructor: { new(): groupPerformanceTypeGroupPerformanceDetailType }; }

export interface _groupPerformanceTypeGroupPerformanceDetailTypeGroupBreakpointType extends BaseType {
	Type: number;
	GroupBreakpointDetail: groupPerformanceTypeGroupPerformanceDetailTypeGroupBreakpointTypeGroupBreakpointDetailType[];
}
export interface groupPerformanceTypeGroupPerformanceDetailTypeGroupBreakpointType extends _groupPerformanceTypeGroupPerformanceDetailTypeGroupBreakpointType { constructor: { new(): groupPerformanceTypeGroupPerformanceDetailTypeGroupBreakpointType }; }

export interface _groupPerformanceTypeGroupPerformanceDetailTypeGroupBreakpointTypeGroupBreakpointDetailType extends BaseType {
	Rank: number;
	AverageValue: number;
	HighValue: number;
	LowValue: number;
}
export interface groupPerformanceTypeGroupPerformanceDetailTypeGroupBreakpointTypeGroupBreakpointDetailType extends _groupPerformanceTypeGroupPerformanceDetailTypeGroupBreakpointTypeGroupBreakpointDetailType { constructor: { new(): groupPerformanceTypeGroupPerformanceDetailTypeGroupBreakpointTypeGroupBreakpointDetailType }; }

export interface _HistoricalOperationType extends BaseType {
	EstimatedNetAsset?: HistoricalOperationTypeEstimatedNetAssetType[];
	HistoricalOperation?: HistoricalOperationTypeHistoricalOperationType;
	HistoricalOperationDetail?: HistoricalOperationTypeHistoricalOperationDetailType[];
	LatestNetAsset?: HistoricalOperationTypeLatestNetAssetType[];
	ShareIssued?: HistoricalOperationTypeShareIssuedType;
}
export interface HistoricalOperationType extends _HistoricalOperationType { constructor: { new(): HistoricalOperationType }; }

export interface _HistoricalOperationTypeEstimatedNetAssetType extends BaseType {
	CurrencyId: string;
	EndDate: Date;
	Value: number;
}
export interface HistoricalOperationTypeEstimatedNetAssetType extends _HistoricalOperationTypeEstimatedNetAssetType { constructor: { new(): HistoricalOperationTypeEstimatedNetAssetType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailType extends BaseType {
	Year: number;
	AccountDispersionHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeAccountDispersionHistoryType;
	AccountSizeBreakdown?: HistoricalOperationTypeHistoricalOperationDetailTypeAccountSizeBreakdownType;
	BrokerageCommissionHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeBrokerageCommissionHistoryType;
	CreationUnitCashAmountHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeCreationUnitCashAmountHistoryType;
	DealingCycleHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeDealingCycleHistoryType;
	EarningsPerShareHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeEarningsPerShareHistoryType;
	EmployeeTurnover?: HistoricalOperationTypeHistoricalOperationDetailTypeEmployeeTurnoverType[];
	IncAccChangeHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeIncAccChangeHistoryType;
	InvestmentChannelBreakdown?: HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentChannelBreakdownType;
	InvestmentStrategyBreakdown?: HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentStrategyBreakdownType;
	InvestmentTypeBreakdown?: HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentTypeBreakdownType;
	LeverageHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryType;
	ManagedAccountChange?: HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeType;
	NetAccruedDividendHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeNetAccruedDividendHistoryType;
	NetAssetHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeNetAssetHistoryType;
	NetExpenseRatioHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeNetExpenseRatioHistoryType;
	NetFlowHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeNetFlowHistoryType;
	PeerGroupMembership?: HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipType;
	RestructureHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeRestructureHistoryType;
	SalesAndRepurchaseHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeSalesAndRepurchaseHistoryType;
	SalesBreakdown?: HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownType;
	SponsorFeeHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeSponsorFeeHistoryType;
	StrategyAllocationHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryType;
	StrategyCharacteristicsHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryType;
	StrategyClassificationHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyClassificationHistoryType;
	TargetAssetAllocation?: HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationType;
	TotalAssetHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeTotalAssetHistoryType;
	TotalCostRatioHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeTotalCostRatioHistoryType;
	TradingCostHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeTradingCostHistoryType;
	UndistributedNetInvestmentIncomeHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeUndistributedNetInvestmentIncomeHistoryType;
}
export interface HistoricalOperationTypeHistoricalOperationDetailType extends _HistoricalOperationTypeHistoricalOperationDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeAccountDispersionHistoryType extends BaseType {
	AccountDispersionHistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeAccountDispersionHistoryTypeAccountDispersionHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeAccountDispersionHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeAccountDispersionHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeAccountDispersionHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeAccountDispersionHistoryTypeAccountDispersionHistoryDetailType extends BaseType {
	TimePeriod: string;
	AssetWeightedStandardDeviation?: number;
	EndDate: Date;
	EqualWeightedStandardDeviation?: number;
	HighLowDispersion?: number;
	InterQuartileRange?: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeAccountDispersionHistoryTypeAccountDispersionHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeAccountDispersionHistoryTypeAccountDispersionHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeAccountDispersionHistoryTypeAccountDispersionHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeAccountSizeBreakdownType extends BaseType {
	StoreDate?: Date;
	AccountBreakdown: accountBreakdownType[];
	EndDate: Date;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeAccountSizeBreakdownType extends _HistoricalOperationTypeHistoricalOperationDetailTypeAccountSizeBreakdownType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeAccountSizeBreakdownType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeBrokerageCommissionHistoryType extends BaseType {
	HistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeBrokerageCommissionHistoryTypeHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeBrokerageCommissionHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeBrokerageCommissionHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeBrokerageCommissionHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeBrokerageCommissionHistoryTypeHistoryDetailType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeBrokerageCommissionHistoryTypeHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeBrokerageCommissionHistoryTypeHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeBrokerageCommissionHistoryTypeHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeCreationUnitCashAmountHistoryType extends BaseType {
	CreationUnitCashAmountHistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeCreationUnitCashAmountHistoryTypeCreationUnitCashAmountHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeCreationUnitCashAmountHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeCreationUnitCashAmountHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeCreationUnitCashAmountHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeCreationUnitCashAmountHistoryTypeCreationUnitCashAmountHistoryDetailType extends BaseType {
	EndDate: Date;
	EstimatedValue: number;
	TotalValue: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeCreationUnitCashAmountHistoryTypeCreationUnitCashAmountHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeCreationUnitCashAmountHistoryTypeCreationUnitCashAmountHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeCreationUnitCashAmountHistoryTypeCreationUnitCashAmountHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeDealingCycleHistoryType extends BaseType {
	DealingCycleTrack: HistoricalOperationTypeHistoricalOperationDetailTypeDealingCycleHistoryTypeDealingCycleTrackType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeDealingCycleHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeDealingCycleHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeDealingCycleHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeDealingCycleHistoryTypeDealingCycleTrackType extends BaseType {
	DayLag: number;
	StartDate: Date;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeDealingCycleHistoryTypeDealingCycleTrackType extends _HistoricalOperationTypeHistoricalOperationDetailTypeDealingCycleHistoryTypeDealingCycleTrackType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeDealingCycleHistoryTypeDealingCycleTrackType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeEarningsPerShareHistoryType extends BaseType {
	HistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeEarningsPerShareHistoryTypeHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeEarningsPerShareHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeEarningsPerShareHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeEarningsPerShareHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeEarningsPerShareHistoryTypeHistoryDetailType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeEarningsPerShareHistoryTypeHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeEarningsPerShareHistoryTypeHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeEarningsPerShareHistoryTypeHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeEmployeeTurnoverType extends BaseType {
	Type: number;
	CurrentHeadcount: number;
	GainedHeadcount?: number;
	LostHeadcount?: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeEmployeeTurnoverType extends _HistoricalOperationTypeHistoricalOperationDetailTypeEmployeeTurnoverType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeEmployeeTurnoverType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeIncAccChangeHistoryType extends BaseType {
	StatusChangeTrack: HistoricalOperationTypeHistoricalOperationDetailTypeIncAccChangeHistoryTypeStatusChangeTrackType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeIncAccChangeHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeIncAccChangeHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeIncAccChangeHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeIncAccChangeHistoryTypeStatusChangeTrackType extends BaseType {
	Status: string;
	StartDate: Date;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeIncAccChangeHistoryTypeStatusChangeTrackType extends _HistoricalOperationTypeHistoricalOperationDetailTypeIncAccChangeHistoryTypeStatusChangeTrackType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeIncAccChangeHistoryTypeStatusChangeTrackType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentChannelBreakdownType extends BaseType {
	StoreDate?: Date;
	AccountBreakdown: accountBreakdownType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentChannelBreakdownType extends _HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentChannelBreakdownType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentChannelBreakdownType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentStrategyBreakdownType extends BaseType {
	StoreDate?: Date;
	InvestmentStrategyBreakdownDetail: HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentStrategyBreakdownTypeInvestmentStrategyBreakdownDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentStrategyBreakdownType extends _HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentStrategyBreakdownType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentStrategyBreakdownType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentStrategyBreakdownTypeInvestmentStrategyBreakdownDetailType extends BaseType {
	AccountBreakdown: accountBreakdownType[];
	EndDate: Date;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentStrategyBreakdownTypeInvestmentStrategyBreakdownDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentStrategyBreakdownTypeInvestmentStrategyBreakdownDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentStrategyBreakdownTypeInvestmentStrategyBreakdownDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentTypeBreakdownType extends BaseType {
	StoreDate?: Date;
	InvestmentTypeBreakdownDetail: HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentTypeBreakdownTypeInvestmentTypeBreakdownDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentTypeBreakdownType extends _HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentTypeBreakdownType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentTypeBreakdownType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentTypeBreakdownTypeInvestmentTypeBreakdownDetailType extends BaseType {
	AccountBreakdown: accountBreakdownType[];
	EndDate: Date;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentTypeBreakdownTypeInvestmentTypeBreakdownDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentTypeBreakdownTypeInvestmentTypeBreakdownDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeInvestmentTypeBreakdownTypeInvestmentTypeBreakdownDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryType extends BaseType {
	LeverageDetail: HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryTypeLeverageDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryTypeLeverageDetailType extends BaseType {
	Type: number;
	Leverage: HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryTypeLeverageDetailTypeLeverageType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryTypeLeverageDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryTypeLeverageDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryTypeLeverageDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryTypeLeverageDetailTypeLeverageType extends BaseType {
	AverageRatio: number;
	EndDate: Date;
	MaximumRatio?: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryTypeLeverageDetailTypeLeverageType extends _HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryTypeLeverageDetailTypeLeverageType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeLeverageHistoryTypeLeverageDetailTypeLeverageType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeType extends BaseType {
	StoreDate?: Date;
	ManagedAccountChangeDetail: HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeType extends _HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailType extends BaseType {
	CurrentAccount?: HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeCurrentAccountType;
	EndDate: Date;
	GainedAccount?: HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeGainedAccountType;
	LostAccount?: HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeLostAccountType;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeCurrentAccountType extends BaseType {
	Type: number;
	AccountBreakdown: accountBreakdownType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeCurrentAccountType extends _HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeCurrentAccountType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeCurrentAccountType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeGainedAccountType extends BaseType {
	AccountBreakdown: accountBreakdownType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeGainedAccountType extends _HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeGainedAccountType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeGainedAccountType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeLostAccountType extends BaseType {
	AccountBreakdown: accountBreakdownType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeLostAccountType extends _HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeLostAccountType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeManagedAccountChangeTypeManagedAccountChangeDetailTypeLostAccountType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeNetAccruedDividendHistoryType extends BaseType {
	HistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeNetAccruedDividendHistoryTypeHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeNetAccruedDividendHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeNetAccruedDividendHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeNetAccruedDividendHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeNetAccruedDividendHistoryTypeHistoryDetailType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeNetAccruedDividendHistoryTypeHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeNetAccruedDividendHistoryTypeHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeNetAccruedDividendHistoryTypeHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeNetAssetHistoryType extends BaseType {
	HistoryDetail: endDateValueType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeNetAssetHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeNetAssetHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeNetAssetHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeNetExpenseRatioHistoryType extends BaseType {
	HistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeNetExpenseRatioHistoryTypeHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeNetExpenseRatioHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeNetExpenseRatioHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeNetExpenseRatioHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeNetExpenseRatioHistoryTypeHistoryDetailType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeNetExpenseRatioHistoryTypeHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeNetExpenseRatioHistoryTypeHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeNetExpenseRatioHistoryTypeHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeNetFlowHistoryType extends BaseType {
	NetFlowDetail: HistoricalOperationTypeHistoricalOperationDetailTypeNetFlowHistoryTypeNetFlowDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeNetFlowHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeNetFlowHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeNetFlowHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeNetFlowHistoryTypeNetFlowDetailType extends BaseType {
	TimePeriod: string;
	EndDate: Date;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeNetFlowHistoryTypeNetFlowDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeNetFlowHistoryTypeNetFlowDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeNetFlowHistoryTypeNetFlowDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipType extends BaseType {
	PeerGroupMembershipHistory: HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipTypePeerGroupMembershipHistoryType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipType extends _HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipTypePeerGroupMembershipHistoryType extends BaseType {
	ClassificationMethod: number;
	MembershipHistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipTypePeerGroupMembershipHistoryTypeMembershipHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipTypePeerGroupMembershipHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipTypePeerGroupMembershipHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipTypePeerGroupMembershipHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipTypePeerGroupMembershipHistoryTypeMembershipHistoryDetailType extends BaseType {
	SignificantChange?: boolean;
	StartDate: Date;
	Value: string;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipTypePeerGroupMembershipHistoryTypeMembershipHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipTypePeerGroupMembershipHistoryTypeMembershipHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypePeerGroupMembershipTypePeerGroupMembershipHistoryTypeMembershipHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeRestructureHistoryType extends BaseType {
	RestructureDate: Date[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeRestructureHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeRestructureHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeRestructureHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeSalesAndRepurchaseHistoryType extends BaseType {
	SalesAndRepurchaseDetail: HistoricalOperationTypeHistoricalOperationDetailTypeSalesAndRepurchaseHistoryTypeSalesAndRepurchaseDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeSalesAndRepurchaseHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeSalesAndRepurchaseHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeSalesAndRepurchaseHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeSalesAndRepurchaseHistoryTypeSalesAndRepurchaseDetailType extends BaseType {
	TimePeriod: string;
	EndDate: Date;
	InCashFlow?: number;
	NetCashFlow?: number;
	NewSalesAsset?: number;
	OutCashFlow?: number;
	RedemptionAsset?: number;
	ReinvestmentSalesAsset?: number;
	RepurchaseAsset?: number;
	TotalSalesAsset?: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeSalesAndRepurchaseHistoryTypeSalesAndRepurchaseDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeSalesAndRepurchaseHistoryTypeSalesAndRepurchaseDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeSalesAndRepurchaseHistoryTypeSalesAndRepurchaseDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownType extends BaseType {
	SalesBreakdownDetail: HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownType extends _HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailType extends BaseType {
	TimePeriod: string;
	DistributionChannelSales?: HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailTypeDistributionChannelSalesType;
	EndDate: Date;
	QualifiedPlanSales?: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailTypeDistributionChannelSalesType extends BaseType {
	DistributionChannelSalesDetail: HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailTypeDistributionChannelSalesTypeDistributionChannelSalesDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailTypeDistributionChannelSalesType extends _HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailTypeDistributionChannelSalesType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailTypeDistributionChannelSalesType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailTypeDistributionChannelSalesTypeDistributionChannelSalesDetailType extends BaseType {
	Type: number;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailTypeDistributionChannelSalesTypeDistributionChannelSalesDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailTypeDistributionChannelSalesTypeDistributionChannelSalesDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeSalesBreakdownTypeSalesBreakdownDetailTypeDistributionChannelSalesTypeDistributionChannelSalesDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeSponsorFeeHistoryType extends BaseType {
	HistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeSponsorFeeHistoryTypeHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeSponsorFeeHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeSponsorFeeHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeSponsorFeeHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeSponsorFeeHistoryTypeHistoryDetailType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeSponsorFeeHistoryTypeHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeSponsorFeeHistoryTypeHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeSponsorFeeHistoryTypeHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryType extends BaseType {
	StrategyAllocationHistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailType extends BaseType {
	Directional?: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalType;
	EndDate: Date;
	EventDriven?: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenType;
	RelativeValue?: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueType;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalType extends BaseType {
	StrategyBreakdownDetail: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailType extends BaseType {
	Type: number;
	SubStrategyBreakdown?: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType extends BaseType {
	SubStrategyBreakdownDetail: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType extends BaseType {
	Type: number;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeDirectionalTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenType extends BaseType {
	StrategyBreakdownDetail: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailType extends BaseType {
	Type: number;
	SubStrategyBreakdown?: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType extends BaseType {
	SubStrategyBreakdownDetail: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType extends BaseType {
	Type: number;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeEventDrivenTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueType extends BaseType {
	StrategyBreakdownDetail: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailType extends BaseType {
	Type: number;
	SubStrategyBreakdown?: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType extends BaseType {
	SubStrategyBreakdownDetail: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailTypeSubStrategyBreakdownType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType extends BaseType {
	Type: number;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyAllocationHistoryTypeStrategyAllocationHistoryDetailTypeRelativeValueTypeStrategyBreakdownDetailTypeSubStrategyBreakdownTypeSubStrategyBreakdownDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryType extends BaseType {
	StrategyCharacteristicsHistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryTypeStrategyCharacteristicsHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryTypeStrategyCharacteristicsHistoryDetailType extends BaseType {
	EndDate: Date;
	StrategyCharacteristicsValue: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryTypeStrategyCharacteristicsHistoryDetailTypeStrategyCharacteristicsValueType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryTypeStrategyCharacteristicsHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryTypeStrategyCharacteristicsHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryTypeStrategyCharacteristicsHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryTypeStrategyCharacteristicsHistoryDetailTypeStrategyCharacteristicsValueType extends _nonNegativeSmallDecimal {
	AssetClassId: number;
	ProcessId: number;
	RegionId: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryTypeStrategyCharacteristicsHistoryDetailTypeStrategyCharacteristicsValueType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryTypeStrategyCharacteristicsHistoryDetailTypeStrategyCharacteristicsValueType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyCharacteristicsHistoryTypeStrategyCharacteristicsHistoryDetailTypeStrategyCharacteristicsValueType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyClassificationHistoryType extends BaseType {
	StrategyClassificationHistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeStrategyClassificationHistoryTypeStrategyClassificationHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyClassificationHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyClassificationHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyClassificationHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyClassificationHistoryTypeStrategyClassificationHistoryDetailType extends BaseType {
	AssetClassId: number;
	EndDate: Date;
	FixedIncomeSectorId: number;
	GICSSectorId: number;
	MarketCapitalId: number;
	ProcessId: number;
	RegionId: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeStrategyClassificationHistoryTypeStrategyClassificationHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeStrategyClassificationHistoryTypeStrategyClassificationHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeStrategyClassificationHistoryTypeStrategyClassificationHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationType extends BaseType {
	TargetAssetAllocationHistory?: HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationTypeTargetAssetAllocationHistoryType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationType extends _HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationTypeTargetAssetAllocationHistoryType extends BaseType {
	StartDate: Date;
	AllocationBreakdown?: HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationTypeTargetAssetAllocationHistoryTypeAllocationBreakdownType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationTypeTargetAssetAllocationHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationTypeTargetAssetAllocationHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationTypeTargetAssetAllocationHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationTypeTargetAssetAllocationHistoryTypeAllocationBreakdownType extends BaseType {
	Type: number;
	LowerLimit?: number;
	UpperLimit?: number;
	Value?: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationTypeTargetAssetAllocationHistoryTypeAllocationBreakdownType extends _HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationTypeTargetAssetAllocationHistoryTypeAllocationBreakdownType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeTargetAssetAllocationTypeTargetAssetAllocationHistoryTypeAllocationBreakdownType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeTotalAssetHistoryType extends BaseType {
	HistoryDetail: endDateValueType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeTotalAssetHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeTotalAssetHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeTotalAssetHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeTotalCostRatioHistoryType extends BaseType {
	HistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeTotalCostRatioHistoryTypeHistoryDetailType;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeTotalCostRatioHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeTotalCostRatioHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeTotalCostRatioHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeTotalCostRatioHistoryTypeHistoryDetailType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeTotalCostRatioHistoryTypeHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeTotalCostRatioHistoryTypeHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeTotalCostRatioHistoryTypeHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeTradingCostHistoryType extends BaseType {
	RankedHistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeTradingCostHistoryTypeRankedHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeTradingCostHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeTradingCostHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeTradingCostHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeTradingCostHistoryTypeRankedHistoryDetailType extends BaseType {
	EndDate: Date;
	PeerGroupRank?: peerGroupRankType;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeTradingCostHistoryTypeRankedHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeTradingCostHistoryTypeRankedHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeTradingCostHistoryTypeRankedHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeUndistributedNetInvestmentIncomeHistoryType extends BaseType {
	HistoryDetail: HistoricalOperationTypeHistoricalOperationDetailTypeUndistributedNetInvestmentIncomeHistoryTypeHistoryDetailType[];
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeUndistributedNetInvestmentIncomeHistoryType extends _HistoricalOperationTypeHistoricalOperationDetailTypeUndistributedNetInvestmentIncomeHistoryType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeUndistributedNetInvestmentIncomeHistoryType }; }

export interface _HistoricalOperationTypeHistoricalOperationDetailTypeUndistributedNetInvestmentIncomeHistoryTypeHistoryDetailType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface HistoricalOperationTypeHistoricalOperationDetailTypeUndistributedNetInvestmentIncomeHistoryTypeHistoryDetailType extends _HistoricalOperationTypeHistoricalOperationDetailTypeUndistributedNetInvestmentIncomeHistoryTypeHistoryDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationDetailTypeUndistributedNetInvestmentIncomeHistoryTypeHistoryDetailType }; }

export interface _HistoricalOperationTypeHistoricalOperationType extends BaseType {
	ShareIssued: HistoricalOperationTypeHistoricalOperationTypeShareIssuedType;
}
export interface HistoricalOperationTypeHistoricalOperationType extends _HistoricalOperationTypeHistoricalOperationType { constructor: { new(): HistoricalOperationTypeHistoricalOperationType }; }

export interface _HistoricalOperationTypeHistoricalOperationTypeShareIssuedType extends BaseType {
	ShareIssuedDetail: HistoricalOperationTypeHistoricalOperationTypeShareIssuedTypeShareIssuedDetailType;
}
export interface HistoricalOperationTypeHistoricalOperationTypeShareIssuedType extends _HistoricalOperationTypeHistoricalOperationTypeShareIssuedType { constructor: { new(): HistoricalOperationTypeHistoricalOperationTypeShareIssuedType }; }

export interface _HistoricalOperationTypeHistoricalOperationTypeShareIssuedTypeShareIssuedDetailType extends BaseType {
	IPOValue: boolean;
}
export interface HistoricalOperationTypeHistoricalOperationTypeShareIssuedTypeShareIssuedDetailType extends _HistoricalOperationTypeHistoricalOperationTypeShareIssuedTypeShareIssuedDetailType { constructor: { new(): HistoricalOperationTypeHistoricalOperationTypeShareIssuedTypeShareIssuedDetailType }; }

export interface _HistoricalOperationTypeLatestNetAssetType extends BaseType {
	CurrencyId: string;
	EndDate: Date;
	Value: number;
}
export interface HistoricalOperationTypeLatestNetAssetType extends _HistoricalOperationTypeLatestNetAssetType { constructor: { new(): HistoricalOperationTypeLatestNetAssetType }; }

export interface _HistoricalOperationTypeShareIssuedType extends BaseType {
	ShareIssuedDetail?: HistoricalOperationTypeShareIssuedTypeShareIssuedDetailType;
}
export interface HistoricalOperationTypeShareIssuedType extends _HistoricalOperationTypeShareIssuedType { constructor: { new(): HistoricalOperationTypeShareIssuedType }; }

export interface _HistoricalOperationTypeShareIssuedTypeShareIssuedDetailType extends BaseType {
	IPOValue: boolean;
	Date?: Date;
	NumberOfShareHolder?: number;
	ShareOutstanding?: number;
}
export interface HistoricalOperationTypeShareIssuedTypeShareIssuedDetailType extends _HistoricalOperationTypeShareIssuedTypeShareIssuedDetailType { constructor: { new(): HistoricalOperationTypeShareIssuedTypeShareIssuedDetailType }; }

export interface _holdingDetailType extends BaseType {
	DetailHoldingTypeId: string;
	ExternalId: string;
	Id: string;
	StorageId: number;
	ExternalName: string;
	AccountingLocalValue?: number[];
	AccountingValue?: number[];
	AccruedInterest?: number[];
	AltMinTaxEligible?: boolean[];
	BloombergTicker?: string[];
	Callable?: string[];
	CIC?: string[];
	CompanyId?: string[];
	CompanyName?: string[];
	ContractSize?: number[];
	Convexity?: number[];
	CostBasis?: number[];
	Country?: tokenIdChar3Type[];
	Coupon?: number[];
	CouponFrequency?: holdingDetailTypeCouponFrequencyType[];
	CouponType?: holdingDetailTypeCouponTypeType[];
	CreditQuality?: string[];
	Currency?: tokenIdChar3Type[];
	CUSIP?: string[];
	Duration?: number[];
	EDIIssuerName?: holdingDetailTypeEDIIssuerNameType[];
	FirstBoughtDate?: Date[];
	FirstCouponDate?: Date[];
	FitchRating?: string[];
	GeographicZone?: string[];
	GICSIndustryId?: string[];
	GlobalIndustryId?: number[];
	GlobalSector?: number[];
	IDC?: holdingDetailTypeIDCType[];
	IndianCreditQualityClassification?: string[];
	IndianIndustryClassification?: tokenIdPositiveIntegerType[];
	IndustryId?: number[];
	IntCommencementDate?: Date[];
	InterestAccrualConvention?: string[];
	ISIN?: string[];
	ISOExchangeId?: string[];
	IssueDate?: Date[];
	LessThanOneYearBond?: number[];
	LocalCurrencyCode?: string[];
	LocalMarketValue?: number[];
	LocalName?: holdingDetailTypeLocalNameType[];
	MacaulayDuration?: number[];
	MarketValue?: number[];
	MatPriceAsPercent?: number[];
	MaturityDate?: Date[];
	MaturityStructure?: holdingDetailTypeMaturityStructureType[];
	ModifiedDuration?: number[];
	MoodyRating?: string[];
	MSCategoryId?: string[];
	NACE?: string[];
	NominalValue?: number[];
	NumberOfJointlyOwnedShare?: number[];
	NumberOfShare?: number[];
	OutstandingAmount?: number[];
	PerformanceId?: string[];
	Perpetual?: string[];
	PrimaryExchange?: holdingDetailTypePrimaryExchangeType[];
	Puttable?: string[];
	Rule144AEligible?: boolean[];
	SecondarySectorId?: number[];
	Sector?: tokenIdNonNegativeIntegerType[];
	SecurityName?: string[];
	SEDOL?: string[];
	SettlementDate?: Date[];
	ShareChange?: number[];
	SharePercentage?: number[];
	SIX?: holdingDetailTypeSIXType[];
	Ticker?: string[];
	UnderlyingSecId?: string[];
	UnderlyingSecurityName?: string[];
	Weighting?: number[];
	YieldtoMaturity?: number[];
	ZAFAssetType?: string[];
	ZAFBondIssuerClass?: string[];
}
export interface holdingDetailType extends _holdingDetailType { constructor: { new(): holdingDetailType }; }
export var holdingDetailType: { new(): holdingDetailType };

export interface _holdingDetailTypeCouponFrequencyType extends Primitive._string {
	Id: string;
}
export interface holdingDetailTypeCouponFrequencyType extends _holdingDetailTypeCouponFrequencyType { constructor: { new(): holdingDetailTypeCouponFrequencyType }; }

export interface _holdingDetailTypeCouponTypeType extends Primitive._string {
	Id: string;
}
export interface holdingDetailTypeCouponTypeType extends _holdingDetailTypeCouponTypeType { constructor: { new(): holdingDetailTypeCouponTypeType }; }

export interface _holdingDetailTypeEDIIssuerNameType extends Primitive._string {
	Id: number;
}
export interface holdingDetailTypeEDIIssuerNameType extends _holdingDetailTypeEDIIssuerNameType { constructor: { new(): holdingDetailTypeEDIIssuerNameType }; }

export interface _holdingDetailTypeIDCType extends BaseType {
	ITT112_IssueSPIssuerLong?: string[];
	ITT112A_IssueMoodyIssuerLong?: string[];
	ITT112B_IssueFitchIssuerLong?: string[];
	ITT114_IssueIssuerGeographicalZoneOfIssue?: string[];
	ITT129_BIDYield?: string[];
	ITT12_CIC?: string[];
	ITT130_ZVO_Bid?: string[];
	ITT13_CountryOfQuotation?: string[];
	ITT14_ISIN?: string[];
	ITT14A_SEDOL?: string[];
	ITT14B_CUSIP?: string[];
	ITT14C_AIIMIC?: string[];
	ITT14D_AIIExchangeProductCode?: string[];
	ITT14E_AIIDerivativeType?: string[];
	ITT14F_AIIPutCallId?: string[];
	ITT14G_AIIExpiryDeliveryPromptDate?: Date[];
	ITT14H_AIIStrikePrice?: string[];
	ITT17_Name?: string[];
	ITT32_InterestRateType?: string[];
	ITT33_CouponRate?: string[];
	ITT36_InterestRateIndexName?: string[];
	ITT37_InterestRateMargin?: string[];
	ITT38_CouponPaymentFrequency?: string[];
	ITT39_Maturitydate?: Date[];
	ITT40_RedemptionType?: string[];
	ITT41_RedemptionRate?: string[];
	ITT42_CallablePutable?: string[];
	ITT43_CallDate?: Date[];
	ITT43A_Putdate?: Date[];
	ITT44_IssuerBearerOptionExercise?: string[];
	ITT45_StrikePriceEmbeddedCallOption?: string[];
	ITT45A_StrikePriceEmbeddedPutOption?: string[];
	ITT46_IssuerName?: string[];
	ITT47_IssuerIdCode?: string[];
	ITT48_IssuerTypeOfIdCode?: string[];
	ITT49_IssuerGroupName?: string[];
	ITT50_IssuerGroupLEI?: string[];
	ITT51_IssuerGroupTypeOfIdCode?: string[];
	ITT52_IssuerCountryOfIncorporation?: string[];
	ITT53_IssuerGeographicalZoneOfIssue?: string[];
	ITT54_IssuerNACE?: string[];
	ITT55_IssueCovered?: string[];
	ITT56_IssueSecuritisation?: string[];
	ITT57_IssueExplicitGuaranteeCountryOfIssue?: string[];
	ITT58_IssueSubordinatedDebt?: string[];
	ITT58A_IssueNatureOftheTRANCHE?: string[];
	ITT59_IssueSPIssueLong?: string[];
	ITT59A_IssueMoodyIssueLong?: string[];
	ITT59B_IssueFitchIssueLong?: string[];
	ITT60_IssueCallPut?: string[];
	ITT61_IssueStrikePrice?: string[];
	ITT63_IssueExpiryDate?: Date[];
	ITT64_IssueExerciseType?: string[];
	ITT67_UnderlyingCIC?: string[];
	ITT68_UnderlyingISIN?: string[];
	ITT68A_UnderlyingSEDOLIDII?: string[];
	ITT68B_UnderlyingCUSIP?: string[];
	ITT70_UnderlyingName?: string[];
	ITT71_UnderlyingQuotationCurrency?: string[];
	ITT72_UnderlyingPriceSource1?: string[];
	ITT72A_UnderlyingPrice1A?: string[];
	ITT72B_UnderlyingPrice1B?: string[];
	ITT72C_UnderlyingPriceType1?: string[];
	ITT72D_UnderlyingPriceChangeDate1?: Date[];
	ITT72E_UnderlyingPriceSource2?: string[];
	ITT72F_UnderlyingPrice2A?: string[];
	ITT72G_UnderlyingPrice2B?: string[];
	ITT72H_UnderlyingPriceType2?: string[];
	ITT72I_UnderlyingPriceChangeDate2?: Date[];
	ITT73_UnderlyingCountryOfQuotation?: string[];
	ITT75_UnderlyingCouponRate?: string[];
	ITT76_UnderlyingCouponPaymentFrequency?: string[];
	ITT77_UnderlyingMaturityDate?: Date[];
	ITT78_UnderlyingRedemptionProfile?: string[];
	ITT79_UnderlyingRedemptionRate?: string[];
	ITT80_UnderlyingIssuerName?: string[];
	ITT81_UnderlyingIssuerIdCode?: string[];
	ITT82_UnderlyingIssuerTypeOfIdCode?: string[];
	ITT83_UnderlyingIssuerGroupName?: string[];
	ITT84_UnderlyingIssuerGroupLEI?: string[];
	ITT85_UnderlyingIssuerGroupTypeOfIdCode?: string[];
	ITT86_UnderlyingIssuerCountryOfIncorporation?: string[];
	ITT87_UnderlyingIssuerGeographicalZoneOfIssue?: string[];
	ITT88_UnderlyingIssueExplicitGuaranteeCountryOfIssue?: string[];
	ITT89_UnderlyingIssueSPIssueLong?: string[];
	ITT89A_UnderlyingIssueMoodyIssueLong?: string[];
	ITT89B_UnderlyingIssueFitchIssueLong?: string[];
	ITT90_ModifiedDuration?: string[];
	ITT94_Convexity?: string[];
}
export interface holdingDetailTypeIDCType extends _holdingDetailTypeIDCType { constructor: { new(): holdingDetailTypeIDCType }; }

export interface _holdingDetailTypeLocalNameType extends _varchar40 {
	LanguageId: string;
}
export interface holdingDetailTypeLocalNameType extends _holdingDetailTypeLocalNameType { constructor: { new(): holdingDetailTypeLocalNameType }; }

export interface _holdingDetailTypeMaturityStructureType extends Primitive._string {
	Id: string;
}
export interface holdingDetailTypeMaturityStructureType extends _holdingDetailTypeMaturityStructureType { constructor: { new(): holdingDetailTypeMaturityStructureType }; }

export interface _holdingDetailTypePrimaryExchangeType extends Primitive._string {
	Id: string;
}
export interface holdingDetailTypePrimaryExchangeType extends _holdingDetailTypePrimaryExchangeType { constructor: { new(): holdingDetailTypePrimaryExchangeType }; }

export interface _holdingDetailTypeSIXType extends BaseType {
	AC_DIVIDENDES_SIX?: string[];
	ACCRUED_INTEREST_SIX?: string[];
	ADDITIONAL_MARGIN_SIX?: string[];
	ASSET_CATEG_D4_SIX?: string[];
	BC_TYPE_CIC_SIX?: string[];
	BC_TYPE_SIX?: string[];
	BOND_INTERESTRATE_TYPE_SIX?: string[];
	BONDREDEMPTION_PERCENTAGE_SIX?: string[];
	BOURSE_CODE_SIX?: string[];
	CALLABLE_PUTABLE_SIX?: string[];
	CAPITAL_OUTSTANDING_SIX?: string[];
	CIC_CODE_BC_SIX?: string[];
	CIC_CODE_SIX?: string[];
	CONTRACT_DIMENSION_SIX?: string[];
	CONTRACT_SIZE_AMOUNT_SIX?: string[];
	CONVERSION_FACTOR_CONCORDANCE_SIX?: string[];
	CONVEXITY_SIX?: string[];
	COUPON_DAYCOUNT_SIX?: string[];
	COVERED_MODE_SIX?: string[];
	DELTA_SIX?: string[];
	DURATION_NEXT_CALL_SIX?: string[];
	DURATION_SIX?: string[];
	FIXED_RATE_RETURN_SIX?: string[];
	FREQUENCY_SIX?: string[];
	GAMMA_SIX?: string[];
	GUARANT_COUNTRY_SIX?: string[];
	GUARANT_LEI_CODE_SIX?: string[];
	GUARANT_LEI_TYPE_SIX?: string[];
	GUARANT_NACE_SECTOR_CODE_SIX?: string[];
	GUARANT_NACE_SECTOR_DESCR_SIX?: string[];
	GUARANT_RATING_FITCH_DATE_SIX?: string[];
	GUARANT_RATING_FITCH_IDENTIF_SIX?: string[];
	GUARANT_RATING_FITCH_SYMBOL_SIX?: string[];
	GUARANT_RATING_MOODY_DATE_SIX?: string[];
	GUARANT_RATING_MOODY_IDENTIF_SIX?: string[];
	GUARANT_RATING_MOODY_SYMBOL_SIX?: string[];
	GUARANT_RATING_SP_DATE_SIX?: string[];
	GUARANT_RATING_SP_IDENTIF_SIX?: string[];
	GUARANT_RATING_SP_SYMBOL_SIX?: string[];
	GUARANT_SFI_GK_SIX?: string[];
	GUARANT_SFI_NAME_SIX?: string[];
	GUARANT_TYPE_SIX?: string[];
	INSTR_RATING_FITCH_DATE_SIX?: string[];
	INSTR_RATING_FITCH_SYMBOL_SIX?: string[];
	INSTR_RATING_MOODY_DATE_SIX?: string[];
	INSTR_RATING_MOODY_SYMBOL_SIX?: string[];
	INSTR_RATING_SP_DATE_SIX?: string[];
	INSTR_RATING_SP_SYMBOL_SIX?: string[];
	INSTRID_SIX?: string[];
	INSTRIDTYPE_SIX?: string[];
	INSTRUMENT_NAME_SIX?: string[];
	ISSUE_DATE_SIX?: string[];
	ISSUER_COUNTRY_SIX?: string[];
	ISSUER_GEOGRAPHICAL_ZONE_SIX?: string[];
	ISSUER_LEI_CODE_SIX?: string[];
	ISSUER_LEI_TYPE_SIX?: string[];
	ISSUER_NACE_SECTOR_CODE_SIX?: string[];
	ISSUER_NACE_SECTOR_DESCR_SIX?: string[];
	ISSUER_RATING_FITCH_DATE_SIX?: string[];
	ISSUER_RATING_FITCH_IDENTIF_SIX?: string[];
	ISSUER_RATING_FITCH_SYMBOL_SIX?: string[];
	ISSUER_RATING_MOODY_DATE_SIX?: string[];
	ISSUER_RATING_MOODY_IDENTIF_SIX?: string[];
	ISSUER_RATING_MOODY_SYMBOL_SIX?: string[];
	ISSUER_RATING_SP_DATE_SIX?: string[];
	ISSUER_RATING_SP_IDENTIF_SIX?: string[];
	ISSUER_RATING_SP_SYMBOL_SIX?: string[];
	ISSUER_SFI_CODE_SIX?: string[];
	ISSUER_SFI_NAME_SIX?: string[];
	ISSUER_SFI_SECTOR_CODE_SIX?: string[];
	ISSUER_SUPRANATIONAL_IND_SIX?: string[];
	MATURITY_DATE_SIX?: string[];
	MAX_COUPON_RATE_SIX?: string[];
	MIN_COUPON_RATE_SIX?: string[];
	MOD_DURATION_NEXT_CALL_SIX?: string[];
	MOD_DURATION_SIX?: string[];
	NEXT_CALLABLE_DATE_SIX?: string[];
	NEXT_COUPON_DATE_SIX?: string[];
	NOMINAL_CURRENCY_SIX?: string[];
	NOMINAL_OF_BOND_SIX?: string[];
	OPTION_TYPE_SIX?: string[];
	PRECEDENT_COUPON_DATE_SIX?: string[];
	PRICEDATE_SIX?: string[];
	PROPORTIONAL_MARGIN_SIX?: string[];
	QUOTATION_CURRENCY_SIX?: string[];
	QUOTATION_GEOZONE_SIX?: string[];
	QUOTATION_TYPE_SIX?: string[];
	RHO_SIX?: string[];
	SENIORITY_SIX?: string[];
	SP_CAPITAL_PROTECTION_SIX?: string[];
	SP_PREPAYMENT_SIX?: string[];
	SP_SYNTHETIC_SIX?: string[];
	SP_TYPE_OF_STRUCT_PRODUCT_SIX?: string[];
	SP_UNDERLYING_SECURITY_SIX?: string[];
	THETA_SIX?: string[];
	TRIGGER_VALUE_SIX?: string[];
	ULTIM_COUNTRY_SIX?: string[];
	ULTIM_LEI_CODE_SIX?: string[];
	ULTIM_LEI_TYPE_SIX?: string[];
	ULTIM_NACE_SECTOR_CODE_SIX?: string[];
	ULTIM_NACE_SECTOR_DESCR_SIX?: string[];
	ULTIM_RATING_FITCH_DATE_SIX?: string[];
	ULTIM_RATING_FITCH_IDENTIF_SIX?: string[];
	ULTIM_RATING_FITCH_SIX?: string[];
	ULTIM_RATING_MOODYS_DATE_SIX?: string[];
	ULTIM_RATING_MOODYS_IDENTIF_SIX?: string[];
	ULTIM_RATING_MOODYS_SIX?: string[];
	ULTIM_RATING_SP_DATE_SIX?: string[];
	ULTIM_RATING_SP_IDENTIF_SIX?: string[];
	ULTIM_RATING_SP_SIX?: string[];
	ULTIM_SFI_ISSUER_CODE_SIX?: string[];
	ULTIM_SFI_ISSUER_NAME_SIX?: string[];
	ULTIM_SFI_SECTOR_CODE_SIX?: string[];
	ULTIM_SUPRANATIONAL_IND_SIX?: string[];
	UNDERL_CURRENCY_GEO_ZONE_SIX?: string[];
	UNDERL_ISSUER_COUNTRY_SIX?: string[];
	UNDERL_ISSUER_GEO_ZONE_SIX?: string[];
	UNDERL_MODIFIED_DURATION_SIX?: string[];
	UNDERL_SECURITY_CODE_CIC_INST_SIX?: string[];
	UNDERL_SECURITY_MLTP_BC_SIX?: string[];
	UNDERL_SECURITY_VAL_DATE_SIX?: string[];
	UNDERL_SECURITY_VAL_PRICE_INST_SIX?: string[];
	UNDERLYING_ASSET_TYPE_SIX?: string[];
	UNDERLYING_IDENTIFIER_SIX?: string[];
	UNDERLYING_INDEX_CODE_SIX?: string[];
	UNDERLYING_INDEX_CODE_TYPE_SIX?: string[];
	UNDERLYING_REF_NAME_SIX?: string[];
	UNDERLYING_TYPE_SIX?: string[];
	UNITSIIPRICE_SIX?: string[];
	UP_QUALIFIER_SIX?: string[];
	VALUATION_METHOD_SIX?: string[];
	VAR_ANNUAL_RETURN_SIX?: string[];
	VEGA_SIX?: string[];
	YIELD_TO_MATURITY_SIX?: string[];
}
export interface holdingDetailTypeSIXType extends _holdingDetailTypeSIXType { constructor: { new(): holdingDetailTypeSIXType }; }

export interface _InternationalFeatureType extends BaseType {
	AccumulatedDistribution?: boolean[];
	AustralianFeature?: InternationalFeatureTypeAustralianFeatureType[];
	AustrianFeature?: InternationalFeatureTypeAustrianFeatureType[];
	BelgiumFeature?: InternationalFeatureTypeBelgiumFeatureType[];
	BrazilFeature?: InternationalFeatureTypeBrazilFeatureType[];
	CanadianFeature?: InternationalFeatureTypeCanadianFeatureType[];
	ChileanFeature?: InternationalFeatureTypeChileanFeatureType[];
	ChineseFeature?: InternationalFeatureTypeChineseFeatureType[];
	DanishFeature?: InternationalFeatureTypeDanishFeatureType[];
	DutchFeature?: InternationalFeatureTypeDutchFeatureType[];
	EuropeanFeature?: InternationalFeatureTypeEuropeanFeatureType[];
	FrenchFeature?: InternationalFeatureTypeFrenchFeatureType[];
	GermanFeature?: InternationalFeatureTypeGermanFeatureType[];
	GuaranteedPerformance?: InternationalFeatureTypeGuaranteedPerformanceType[];
	HongKongFeature?: InternationalFeatureTypeHongKongFeatureType[];
	IncomeDistribution?: boolean[];
	IndianFeature?: InternationalFeatureTypeIndianFeatureType[];
	IsraeliFeature?: InternationalFeatureTypeIsraeliFeatureType[];
	ItalianFeature?: InternationalFeatureTypeItalianFeatureType[];
	JapaneseFeature?: InternationalFeatureTypeJapaneseFeatureType[];
	KoreanFeature?: InternationalFeatureTypeKoreanFeatureType[];
	MalaysianFeature?: InternationalFeatureTypeMalaysianFeatureType[];
	MexicanFeature?: InternationalFeatureTypeMexicanFeatureType[];
	NewZealandFeature?: InternationalFeatureTypeNewZealandFeatureType[];
	NorwegianFeature?: InternationalFeatureTypeNorwegianFeatureType[];
	PortugueseFeature?: InternationalFeatureTypePortugueseFeatureType[];
	PuertoRicanFeature?: InternationalFeatureTypePuertoRicanFeatureType[];
	SingaporeanFeature?: InternationalFeatureTypeSingaporeanFeatureType[];
	SouthAfricanFeature?: InternationalFeatureTypeSouthAfricanFeatureType[];
	SpanishFeature?: InternationalFeatureTypeSpanishFeatureType[];
	SwedishFeature?: InternationalFeatureTypeSwedishFeatureType[];
	SwissFeature?: InternationalFeatureTypeSwissFeatureType[];
	TaiwanFeature?: InternationalFeatureTypeTaiwanFeatureType[];
	ThaiFeature?: InternationalFeatureTypeThaiFeatureType[];
	TurkishFeature?: InternationalFeatureTypeTurkishFeatureType[];
	UKFeature?: InternationalFeatureTypeUKFeatureType[];
	USFeature?: InternationalFeatureTypeUSFeatureType[];
}
export interface InternationalFeatureType extends _InternationalFeatureType { constructor: { new(): InternationalFeatureType }; }

export interface _InternationalFeatureTypeAustralianFeatureType extends BaseType {
	APIR?: string;
	APRAInvestmentStrategy?: InternationalFeatureTypeAustralianFeatureTypeAPRAInvestmentStrategyType;
	ARSN?: string;
	AUSInvestmentRiskLevelDetail?: InternationalFeatureTypeAustralianFeatureTypeAUSInvestmentRiskLevelDetailType;
	AUSInvestmentVehicleABN?: string;
	AUSInvestmentVehicleRegion?: string;
	AUSInvestmentVehicleType?: string;
	EstablishmentFee?: InternationalFeatureTypeAustralianFeatureTypeEstablishmentFeeType;
	ExpenseRecoveryFee?: number;
	FundRecommendation?: number;
	IndustryFund?: boolean;
	IntechCategory?: string;
	InternalCode?: string;
	IssuerFee?: InternationalFeatureTypeAustralianFeatureTypeIssuerFeeType;
	MaximumOngoingAdviserServiceFee?: InternationalFeatureTypeAustralianFeatureTypeMaximumOngoingAdviserServiceFeeType;
	MaximumUpfrontAdviserServiceFee?: InternationalFeatureTypeAustralianFeatureTypeMaximumUpfrontAdviserServiceFeeType;
	MemberFee?: InternationalFeatureTypeAustralianFeatureTypeMemberFeeType;
	TerminationFee?: InternationalFeatureTypeAustralianFeatureTypeTerminationFeeType;
}
export interface InternationalFeatureTypeAustralianFeatureType extends _InternationalFeatureTypeAustralianFeatureType { constructor: { new(): InternationalFeatureTypeAustralianFeatureType }; }

export interface _InternationalFeatureTypeAustralianFeatureTypeAPRAInvestmentStrategyType extends BaseType {
	PrimaryHedgeFund?: string;
	PrimaryHoldingPeriod?: string;
	PrimaryInstrument?: string;
	PrimaryInvestmentStrategy?: string;
	PrimaryInvestmentStyle?: string;
	PrimaryMarketExposure?: string;
	PrimaryTradingStrategy?: string;
}
export interface InternationalFeatureTypeAustralianFeatureTypeAPRAInvestmentStrategyType extends _InternationalFeatureTypeAustralianFeatureTypeAPRAInvestmentStrategyType { constructor: { new(): InternationalFeatureTypeAustralianFeatureTypeAPRAInvestmentStrategyType }; }

export interface _InternationalFeatureTypeAustralianFeatureTypeAUSInvestmentRiskLevelDetailType extends BaseType {
	AUSInvestmentRiskLevel: string[];
	Date: Date[];
}
export interface InternationalFeatureTypeAustralianFeatureTypeAUSInvestmentRiskLevelDetailType extends _InternationalFeatureTypeAustralianFeatureTypeAUSInvestmentRiskLevelDetailType { constructor: { new(): InternationalFeatureTypeAustralianFeatureTypeAUSInvestmentRiskLevelDetailType }; }

export interface _InternationalFeatureTypeAustralianFeatureTypeEstablishmentFeeType extends BaseType {
	FeeSchedule: feeScheduleNonNegativeSmallRawDecimalType[];
}
export interface InternationalFeatureTypeAustralianFeatureTypeEstablishmentFeeType extends _InternationalFeatureTypeAustralianFeatureTypeEstablishmentFeeType { constructor: { new(): InternationalFeatureTypeAustralianFeatureTypeEstablishmentFeeType }; }

export interface _InternationalFeatureTypeAustralianFeatureTypeIssuerFeeType extends BaseType {
	FeeSchedule: feeScheduleNonNegativeSmallRawDecimalType[];
}
export interface InternationalFeatureTypeAustralianFeatureTypeIssuerFeeType extends _InternationalFeatureTypeAustralianFeatureTypeIssuerFeeType { constructor: { new(): InternationalFeatureTypeAustralianFeatureTypeIssuerFeeType }; }

export interface _InternationalFeatureTypeAustralianFeatureTypeMaximumOngoingAdviserServiceFeeType extends _nonNegativeSmallRawDecimal {
	Unit: number;
}
export interface InternationalFeatureTypeAustralianFeatureTypeMaximumOngoingAdviserServiceFeeType extends _InternationalFeatureTypeAustralianFeatureTypeMaximumOngoingAdviserServiceFeeType { constructor: { new(): InternationalFeatureTypeAustralianFeatureTypeMaximumOngoingAdviserServiceFeeType }; }

export interface _InternationalFeatureTypeAustralianFeatureTypeMaximumUpfrontAdviserServiceFeeType extends _nonNegativeSmallRawDecimal {
	Unit: number;
}
export interface InternationalFeatureTypeAustralianFeatureTypeMaximumUpfrontAdviserServiceFeeType extends _InternationalFeatureTypeAustralianFeatureTypeMaximumUpfrontAdviserServiceFeeType { constructor: { new(): InternationalFeatureTypeAustralianFeatureTypeMaximumUpfrontAdviserServiceFeeType }; }

export interface _InternationalFeatureTypeAustralianFeatureTypeMemberFeeType extends BaseType {
	FeeSchedule: feeScheduleNonNegativeSmallRawDecimalType[];
}
export interface InternationalFeatureTypeAustralianFeatureTypeMemberFeeType extends _InternationalFeatureTypeAustralianFeatureTypeMemberFeeType { constructor: { new(): InternationalFeatureTypeAustralianFeatureTypeMemberFeeType }; }

export interface _InternationalFeatureTypeAustralianFeatureTypeTerminationFeeType extends _nonNegativeSmallRawDecimal {}
export interface InternationalFeatureTypeAustralianFeatureTypeTerminationFeeType extends _InternationalFeatureTypeAustralianFeatureTypeTerminationFeeType { constructor: { new(): InternationalFeatureTypeAustralianFeatureTypeTerminationFeeType }; }

export interface _InternationalFeatureTypeAustrianFeatureType extends BaseType {
	AUTTaxTransparence?: boolean;
	FullyInvested?: boolean;
	LargeInvestorFund?: boolean;
	PIF?: boolean;
	SpezialFond?: boolean;
	WKN?: string;
}
export interface InternationalFeatureTypeAustrianFeatureType extends _InternationalFeatureTypeAustrianFeatureType { constructor: { new(): InternationalFeatureTypeAustrianFeatureType }; }

export interface _InternationalFeatureTypeBelgiumFeatureType extends BaseType {
	CBFInvestorRiskScale?: string;
	PensionSavingsFund?: boolean;
}
export interface InternationalFeatureTypeBelgiumFeatureType extends _InternationalFeatureTypeBelgiumFeatureType { constructor: { new(): InternationalFeatureTypeBelgiumFeatureType }; }

export interface _InternationalFeatureTypeBrazilFeatureType extends BaseType {
	TipoANBID?: string;
	TipoCVM?: string;
}
export interface InternationalFeatureTypeBrazilFeatureType extends _InternationalFeatureTypeBrazilFeatureType { constructor: { new(): InternationalFeatureTypeBrazilFeatureType }; }

export interface _InternationalFeatureTypeCanadianFeatureType extends BaseType {
	CanadaClassType?: number;
	IFICRiskClassification?: number;
	RESP?: boolean;
	RRIF?: boolean;
	RRSP?: boolean;
}
export interface InternationalFeatureTypeCanadianFeatureType extends _InternationalFeatureTypeCanadianFeatureType { constructor: { new(): InternationalFeatureTypeCanadianFeatureType }; }

export interface _InternationalFeatureTypeChileanFeatureType extends BaseType {
	AAFMCategory?: string;
	ACAFICategory?: string;
	AFPCategory?: string;
	APV?: boolean;
	APVC?: boolean;
	CCRApproved?: boolean;
	RUN?: string;
	SBSApproved?: boolean;
	SVSCategory?: string;
	TaxBenefits?: InternationalFeatureTypeChileanFeatureTypeTaxBenefitsType;
}
export interface InternationalFeatureTypeChileanFeatureType extends _InternationalFeatureTypeChileanFeatureType { constructor: { new(): InternationalFeatureTypeChileanFeatureType }; }

export interface _InternationalFeatureTypeChileanFeatureTypeTaxBenefitsType extends BaseType {
	APV42Bis?: boolean;
	APVC42Bis?: boolean;
	Bis57?: boolean;
	QUATER18?: boolean;
	TER18?: boolean;
}
export interface InternationalFeatureTypeChileanFeatureTypeTaxBenefitsType extends _InternationalFeatureTypeChileanFeatureTypeTaxBenefitsType { constructor: { new(): InternationalFeatureTypeChileanFeatureTypeTaxBenefitsType }; }

export interface _InternationalFeatureTypeChineseFeatureType extends BaseType {
	ConstructDate?: Date;
	CSDCCCode?: string;
	CSRCCategory?: string;
	FinancialPlanFund?: boolean;
	IPOSalesCharge?: InternationalFeatureTypeChineseFeatureTypeIPOSalesChargeType;
	LOF?: boolean;
	QDII?: boolean;
}
export interface InternationalFeatureTypeChineseFeatureType extends _InternationalFeatureTypeChineseFeatureType { constructor: { new(): InternationalFeatureTypeChineseFeatureType }; }

export interface _InternationalFeatureTypeChineseFeatureTypeIPOSalesChargeType extends BaseType {
	FeeSchedule: feeScheduleNonNegativeSmallRawDecimalType[];
}
export interface InternationalFeatureTypeChineseFeatureTypeIPOSalesChargeType extends _InternationalFeatureTypeChineseFeatureTypeIPOSalesChargeType { constructor: { new(): InternationalFeatureTypeChineseFeatureTypeIPOSalesChargeType }; }

export interface _InternationalFeatureTypeDanishFeatureType extends BaseType {
	DKTrafficLight?: number;
	FundStructure?: string;
	IFRKategori?: string;
}
export interface InternationalFeatureTypeDanishFeatureType extends _InternationalFeatureTypeDanishFeatureType { constructor: { new(): InternationalFeatureTypeDanishFeatureType }; }

export interface _InternationalFeatureTypeDutchFeatureType extends BaseType {
	AFMRiskScale?: string;
	MaximiumNegativeDeviation?: number;
	MaximiumPositiveDeviation?: number;
}
export interface InternationalFeatureTypeDutchFeatureType extends _InternationalFeatureTypeDutchFeatureType { constructor: { new(): InternationalFeatureTypeDutchFeatureType }; }

export interface _InternationalFeatureTypeEuropeanFeatureType extends BaseType {
	CommonCode?: string;
	EUSDReview?: InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewType;
	FundProcessingPassport?: boolean;
}
export interface InternationalFeatureTypeEuropeanFeatureType extends _InternationalFeatureTypeEuropeanFeatureType { constructor: { new(): InternationalFeatureTypeEuropeanFeatureType }; }

export interface _InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewType extends BaseType {
	Date?: Date;
	DeclarationBasisDetail?: InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeDeclarationBasisDetailType;
	PercentDirectMoneyDebtInvestment?: number;
	PercentIndirectMoneyDebtInvestment?: number;
	Scope?: InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeType;
	ScopeDetail?: InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeDetailType;
	SwitzerlandPercentDirectMoneyDebtInvestment?: number;
	SwitzerlandPercentIndirectMoneyDebtInvestment?: number;
}
export interface InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewType extends _InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewType { constructor: { new(): InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewType }; }

export interface _InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeDeclarationBasisDetailType extends BaseType {
	AssetTestDate: Date[];
	DeclarationBasis: number[];
}
export interface InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeDeclarationBasisDetailType extends _InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeDeclarationBasisDetailType { constructor: { new(): InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeDeclarationBasisDetailType }; }

export interface _InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeDetailType extends BaseType {
	EndDate?: Date[];
	Scope: InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeDetailTypeScopeType[];
	StartDate?: Date[];
}
export interface InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeDetailType extends _InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeDetailType { constructor: { new(): InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeDetailType }; }

export interface _InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeDetailTypeScopeType extends _tokenIdVarchar4Type {}
export interface InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeDetailTypeScopeType extends _InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeDetailTypeScopeType { constructor: { new(): InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeDetailTypeScopeType }; }

export interface _InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeType extends Primitive._string {
	Id: number;
}
export interface InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeType extends _InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeType { constructor: { new(): InternationalFeatureTypeEuropeanFeatureTypeEUSDReviewTypeScopeType }; }

export interface _InternationalFeatureTypeFrenchFeatureType extends BaseType {
	AdvisedHoldingPeriod?: emptyIdPositiveIntegerType;
	AMFCategory?: string;
	AMFDate?: Date;
	DedicatedFund?: boolean;
	FCIMT?: boolean;
	FCPInvestmentRule?: InternationalFeatureTypeFrenchFeatureTypeFCPInvestmentRuleType;
	FIPRegion?: string;
	PEA?: boolean;
	PEAPME?: boolean;
	ReservedFund?: boolean;
	RiskProfileFund?: boolean;
	TargetedInvestors?: number;
}
export interface InternationalFeatureTypeFrenchFeatureType extends _InternationalFeatureTypeFrenchFeatureType { constructor: { new(): InternationalFeatureTypeFrenchFeatureType }; }

export interface _InternationalFeatureTypeFrenchFeatureTypeFCPInvestmentRuleType extends BaseType {
	ARIA: boolean;
	ARIAEL: boolean;
}
export interface InternationalFeatureTypeFrenchFeatureTypeFCPInvestmentRuleType extends _InternationalFeatureTypeFrenchFeatureTypeFCPInvestmentRuleType { constructor: { new(): InternationalFeatureTypeFrenchFeatureTypeFCPInvestmentRuleType }; }

export interface _InternationalFeatureTypeGermanFeatureType extends BaseType {
	ASFund?: boolean;
	GermanTaxTransparence?: boolean;
	RiesterFund?: boolean;
	VWL?: boolean;
	WKN?: string;
}
export interface InternationalFeatureTypeGermanFeatureType extends _InternationalFeatureTypeGermanFeatureType { constructor: { new(): InternationalFeatureTypeGermanFeatureType }; }

export interface _InternationalFeatureTypeGuaranteedPerformanceType extends BaseType {
	GuaranteedCapital?: number;
	GuaranteedDividend?: number;
	GuaranteedNAVHistory?: InternationalFeatureTypeGuaranteedPerformanceTypeGuaranteedNAVHistoryType;
	GuaranteedReturn?: number;
}
export interface InternationalFeatureTypeGuaranteedPerformanceType extends _InternationalFeatureTypeGuaranteedPerformanceType { constructor: { new(): InternationalFeatureTypeGuaranteedPerformanceType }; }

export interface _InternationalFeatureTypeGuaranteedPerformanceTypeGuaranteedNAVHistoryType extends BaseType {
	GuaranteedNAV: InternationalFeatureTypeGuaranteedPerformanceTypeGuaranteedNAVHistoryTypeGuaranteedNAVType[];
}
export interface InternationalFeatureTypeGuaranteedPerformanceTypeGuaranteedNAVHistoryType extends _InternationalFeatureTypeGuaranteedPerformanceTypeGuaranteedNAVHistoryType { constructor: { new(): InternationalFeatureTypeGuaranteedPerformanceTypeGuaranteedNAVHistoryType }; }

export interface _InternationalFeatureTypeGuaranteedPerformanceTypeGuaranteedNAVHistoryTypeGuaranteedNAVType extends _positiveBigRawDecimal {}
export interface InternationalFeatureTypeGuaranteedPerformanceTypeGuaranteedNAVHistoryTypeGuaranteedNAVType extends _InternationalFeatureTypeGuaranteedPerformanceTypeGuaranteedNAVHistoryTypeGuaranteedNAVType { constructor: { new(): InternationalFeatureTypeGuaranteedPerformanceTypeGuaranteedNAVHistoryTypeGuaranteedNAVType }; }

export interface _InternationalFeatureTypeHongKongFeatureType extends BaseType {
	IFARegistered?: boolean;
	IFASector?: string;
	MPFAPIF?: boolean;
	MPFApprovalNumber?: string;
	MPFConstituent?: boolean;
	MPFScheme?: string;
	MPFSector?: string;
}
export interface InternationalFeatureTypeHongKongFeatureType extends _InternationalFeatureTypeHongKongFeatureType { constructor: { new(): InternationalFeatureTypeHongKongFeatureType }; }

export interface _InternationalFeatureTypeIndianFeatureType extends BaseType {
	AMFICode?: string;
	OpenInterval?: unitInteger;
}
export interface InternationalFeatureTypeIndianFeatureType extends _InternationalFeatureTypeIndianFeatureType { constructor: { new(): InternationalFeatureTypeIndianFeatureType }; }

export interface _InternationalFeatureTypeIsraeliFeatureType extends BaseType {
	ISACategory?: string;
	ISACode?: string;
	MaximumExposure?: InternationalFeatureTypeIsraeliFeatureTypeMaximumExposureType;
	Taxation?: emptyIdPositiveIntegerType;
}
export interface InternationalFeatureTypeIsraeliFeatureType extends _InternationalFeatureTypeIsraeliFeatureType { constructor: { new(): InternationalFeatureTypeIsraeliFeatureType }; }

export interface _InternationalFeatureTypeIsraeliFeatureTypeMaximumExposureType extends BaseType {
	EquityExposure: emptyIdNonNegativeIntegerType;
	ForeignCurrencyExposure: InternationalFeatureTypeIsraeliFeatureTypeMaximumExposureTypeForeignCurrencyExposureType;
}
export interface InternationalFeatureTypeIsraeliFeatureTypeMaximumExposureType extends _InternationalFeatureTypeIsraeliFeatureTypeMaximumExposureType { constructor: { new(): InternationalFeatureTypeIsraeliFeatureTypeMaximumExposureType }; }

export interface _InternationalFeatureTypeIsraeliFeatureTypeMaximumExposureTypeForeignCurrencyExposureType extends BaseType {
	Id: string;
}
export interface InternationalFeatureTypeIsraeliFeatureTypeMaximumExposureTypeForeignCurrencyExposureType extends _InternationalFeatureTypeIsraeliFeatureTypeMaximumExposureTypeForeignCurrencyExposureType { constructor: { new(): InternationalFeatureTypeIsraeliFeatureTypeMaximumExposureTypeForeignCurrencyExposureType }; }

export interface _InternationalFeatureTypeItalianFeatureType extends BaseType {
	CategoriaAssogestioni?: string;
	InvestmentScope?: emptyIdPositiveIntegerType;
}
export interface InternationalFeatureTypeItalianFeatureType extends _InternationalFeatureTypeItalianFeatureType { constructor: { new(): InternationalFeatureTypeItalianFeatureType }; }

export interface _InternationalFeatureTypeJapaneseFeatureType extends BaseType {
	AvailableForInvestment?: InternationalFeatureTypeJapaneseFeatureTypeAvailableForInvestmentType;
	BaseUnit?: number;
	FrontRedemptionFee?: InternationalFeatureTypeJapaneseFeatureTypeFrontRedemptionFeeType;
	IbbotsonSector?: string;
	ITA?: string;
	ITACode?: string;
}
export interface InternationalFeatureTypeJapaneseFeatureType extends _InternationalFeatureTypeJapaneseFeatureType { constructor: { new(): InternationalFeatureTypeJapaneseFeatureType }; }

export interface _InternationalFeatureTypeJapaneseFeatureTypeAvailableForInvestmentType extends BaseType {
	DefinedContribution?: boolean;
	Public?: boolean;
	SMA?: boolean;
	WRAP?: boolean;
}
export interface InternationalFeatureTypeJapaneseFeatureTypeAvailableForInvestmentType extends _InternationalFeatureTypeJapaneseFeatureTypeAvailableForInvestmentType { constructor: { new(): InternationalFeatureTypeJapaneseFeatureTypeAvailableForInvestmentType }; }

export interface _InternationalFeatureTypeJapaneseFeatureTypeFrontRedemptionFeeType extends BaseType {
	Date: Date;
	FeeSchedule: feeScheduleNonNegativeSmallRawDecimalType[];
}
export interface InternationalFeatureTypeJapaneseFeatureTypeFrontRedemptionFeeType extends _InternationalFeatureTypeJapaneseFeatureTypeFrontRedemptionFeeType { constructor: { new(): InternationalFeatureTypeJapaneseFeatureTypeFrontRedemptionFeeType }; }

export interface _InternationalFeatureTypeKoreanFeatureType extends BaseType {
	ClassificationCode_KOR?: string;
	InvestmentRiskLevel?: number;
	KRCode: string;
	KRTicker: string;
}
export interface InternationalFeatureTypeKoreanFeatureType extends _InternationalFeatureTypeKoreanFeatureType { constructor: { new(): InternationalFeatureTypeKoreanFeatureType }; }

export interface _InternationalFeatureTypeMalaysianFeatureType extends BaseType {
	EmployeeProvidentFund?: boolean;
}
export interface InternationalFeatureTypeMalaysianFeatureType extends _InternationalFeatureTypeMalaysianFeatureType { constructor: { new(): InternationalFeatureTypeMalaysianFeatureType }; }

export interface _InternationalFeatureTypeMexicanFeatureType extends BaseType {
	AdvisedHoldingPeriod?: emptyIdPositiveIntegerType;
	AMIBCategory?: string;
	InvestorClassification?: emptyIdPositiveIntegerType[];
	MarketRiskAndRating?: InternationalFeatureTypeMexicanFeatureTypeMarketRiskAndRatingType[];
	MinimumTermToIntroduceBuyOrder?: string;
	MinimumTermToIntroduceSellOrder?: string;
	OwnershipLimit?: number;
	PurchaseExecution?: string;
	PurchaseRequest?: string;
	PurchaseSettlement?: string;
	SaleExecution?: string;
	SaleRequest?: string;
	SaleSettlement?: string;
}
export interface InternationalFeatureTypeMexicanFeatureType extends _InternationalFeatureTypeMexicanFeatureType { constructor: { new(): InternationalFeatureTypeMexicanFeatureType }; }

export interface _InternationalFeatureTypeMexicanFeatureTypeMarketRiskAndRatingType extends BaseType {
	RatingAgency?: number;
	CreditRating?: string;
	MarketRisk?: number;
}
export interface InternationalFeatureTypeMexicanFeatureTypeMarketRiskAndRatingType extends _InternationalFeatureTypeMexicanFeatureTypeMarketRiskAndRatingType { constructor: { new(): InternationalFeatureTypeMexicanFeatureTypeMarketRiskAndRatingType }; }

export interface _InternationalFeatureTypeNewZealandFeatureType extends BaseType {
	KiwiSaver?: boolean;
	PIE?: boolean;
	PIEConversionDate?: Date;
	PrePIEPassive?: boolean;
}
export interface InternationalFeatureTypeNewZealandFeatureType extends _InternationalFeatureTypeNewZealandFeatureType { constructor: { new(): InternationalFeatureTypeNewZealandFeatureType }; }

export interface _InternationalFeatureTypeNorwegianFeatureType extends BaseType {
	OsloBors?: number;
}
export interface InternationalFeatureTypeNorwegianFeatureType extends _InternationalFeatureTypeNorwegianFeatureType { constructor: { new(): InternationalFeatureTypeNorwegianFeatureType }; }

export interface _InternationalFeatureTypePortugueseFeatureType extends BaseType {
	APFIPPCategory?: string;
}
export interface InternationalFeatureTypePortugueseFeatureType extends _InternationalFeatureTypePortugueseFeatureType { constructor: { new(): InternationalFeatureTypePortugueseFeatureType }; }

export interface _InternationalFeatureTypePuertoRicanFeatureType extends BaseType {
	PRSymbol: string;
}
export interface InternationalFeatureTypePuertoRicanFeatureType extends _InternationalFeatureTypePuertoRicanFeatureType { constructor: { new(): InternationalFeatureTypePuertoRicanFeatureType }; }

export interface _InternationalFeatureTypeSingaporeanFeatureType extends BaseType {
	CPFClassification?: string;
	CPFFocus?: string;
	QualifiedCPFSchemeAccount?: emptyIdPositiveIntegerType;
	RestrictedScheme?: boolean;
}
export interface InternationalFeatureTypeSingaporeanFeatureType extends _InternationalFeatureTypeSingaporeanFeatureType { constructor: { new(): InternationalFeatureTypeSingaporeanFeatureType }; }

export interface _InternationalFeatureTypeSouthAfricanFeatureType extends BaseType {
	ASISASector?: string;
	JSEAlphaCode?: string;
	Regulation28?: boolean;
}
export interface InternationalFeatureTypeSouthAfricanFeatureType extends _InternationalFeatureTypeSouthAfricanFeatureType { constructor: { new(): InternationalFeatureTypeSouthAfricanFeatureType }; }

export interface _InternationalFeatureTypeSpanishFeatureType extends BaseType {
	CategoriaCNMV?: string;
	CategoriaInverco?: string;
	DGSCode?: string;
	ESP?: boolean;
	PensionFundCIFCode?: string;
	PensionFundDGSCode?: string;
	PensionFundName?: string;
	PrincipalFund?: boolean;
}
export interface InternationalFeatureTypeSpanishFeatureType extends _InternationalFeatureTypeSpanishFeatureType { constructor: { new(): InternationalFeatureTypeSpanishFeatureType }; }

export interface _InternationalFeatureTypeSwedishFeatureType extends BaseType {
	IPS?: boolean;
	PMICode?: string;
	PPM?: boolean;
	PPMCode?: number;
}
export interface InternationalFeatureTypeSwedishFeatureType extends _InternationalFeatureTypeSwedishFeatureType { constructor: { new(): InternationalFeatureTypeSwedishFeatureType }; }

export interface _InternationalFeatureTypeSwissFeatureType extends BaseType {
	FoundationFund?: boolean;
	Valoren?: number;
}
export interface InternationalFeatureTypeSwissFeatureType extends _InternationalFeatureTypeSwissFeatureType { constructor: { new(): InternationalFeatureTypeSwissFeatureType }; }

export interface _InternationalFeatureTypeTaiwanFeatureType extends BaseType {
	RiskLevel?: number;
	SITCACategory?: string;
	SITCACode?: string;
}
export interface InternationalFeatureTypeTaiwanFeatureType extends _InternationalFeatureTypeTaiwanFeatureType { constructor: { new(): InternationalFeatureTypeTaiwanFeatureType }; }

export interface _InternationalFeatureTypeThaiFeatureType extends BaseType {
	AIMCCategory?: string;
	FundCode?: string;
	PurchaseSchedule?: string;
	RedemptionSchedule?: string;
	RegistryNumber?: string;
	SECSpecialCharacteristic?: string;
	SwitchingInFee?: InternationalFeatureTypeThaiFeatureTypeSwitchingInFeeType;
}
export interface InternationalFeatureTypeThaiFeatureType extends _InternationalFeatureTypeThaiFeatureType { constructor: { new(): InternationalFeatureTypeThaiFeatureType }; }

export interface _InternationalFeatureTypeThaiFeatureTypeSwitchingInFeeType extends BaseType {
	Date: Date;
	FeeSchedule: feeScheduleNonNegativeSmallRawDecimalType[];
}
export interface InternationalFeatureTypeThaiFeatureTypeSwitchingInFeeType extends _InternationalFeatureTypeThaiFeatureTypeSwitchingInFeeType { constructor: { new(): InternationalFeatureTypeThaiFeatureTypeSwitchingInFeeType }; }

export interface _InternationalFeatureTypeTurkishFeatureType extends BaseType {
	CMBCategory?: string;
	SeedAmount?: number;
	TypeAFund?: boolean;
}
export interface InternationalFeatureTypeTurkishFeatureType extends _InternationalFeatureTypeTurkishFeatureType { constructor: { new(): InternationalFeatureTypeTurkishFeatureType }; }

export interface _InternationalFeatureTypeUKFeatureType extends BaseType {
	ABILifeFundSector?: string;
	ABIPensionFundSector?: string;
	AICSector?: string;
	BrokerFund?: boolean;
	CommonInvestmentFund?: boolean;
	FSARecognizedOffshoreFund?: boolean;
	IMASector?: string;
	InHouseISA?: boolean;
	ISA?: boolean;
	MEXCode?: string;
	StakeHolderPension?: boolean;
	UKReportingFund?: InternationalFeatureTypeUKFeatureTypeUKReportingFundType;
}
export interface InternationalFeatureTypeUKFeatureType extends _InternationalFeatureTypeUKFeatureType { constructor: { new(): InternationalFeatureTypeUKFeatureType }; }

export interface _InternationalFeatureTypeUKFeatureTypeUKReportingFundType extends BaseType {
	Status: InternationalFeatureTypeUKFeatureTypeUKReportingFundTypeStatusType[];
}
export interface InternationalFeatureTypeUKFeatureTypeUKReportingFundType extends _InternationalFeatureTypeUKFeatureTypeUKReportingFundType { constructor: { new(): InternationalFeatureTypeUKFeatureTypeUKReportingFundType }; }

export interface _InternationalFeatureTypeUKFeatureTypeUKReportingFundTypeStatusType extends Primitive._number {
	StartDate: string;
}
export interface InternationalFeatureTypeUKFeatureTypeUKReportingFundTypeStatusType extends _InternationalFeatureTypeUKFeatureTypeUKReportingFundTypeStatusType { constructor: { new(): InternationalFeatureTypeUKFeatureTypeUKReportingFundTypeStatusType }; }

export interface _InternationalFeatureTypeUSFeatureType extends BaseType {
	Act1940?: boolean;
	GNMASecurity?: boolean;
}
export interface InternationalFeatureTypeUSFeatureType extends _InternationalFeatureTypeUSFeatureType { constructor: { new(): InternationalFeatureTypeUSFeatureType }; }

export interface _linkChar10Type extends BaseType {
	Id: string;
	ElementName: string;
	href: string;
}
export interface linkChar10Type extends _linkChar10Type { constructor: { new(): linkChar10Type }; }
export var linkChar10Type: { new(): linkChar10Type };

export interface _linkIntegerType extends BaseType {
	Id: number;
	ElementName: string;
	href: string;
}
export interface linkIntegerType extends _linkIntegerType { constructor: { new(): linkIntegerType }; }
export var linkIntegerType: { new(): linkIntegerType };

export interface _linkVarchar10Type extends BaseType {
	Id: string;
	ElementName: string;
	href: string;
}
export interface linkVarchar10Type extends _linkVarchar10Type { constructor: { new(): linkVarchar10Type }; }
export var linkVarchar10Type: { new(): linkVarchar10Type };

export interface _mediaStubNameType extends _varchar15 {
	MediaGroupId: number;
}
export interface mediaStubNameType extends _mediaStubNameType { constructor: { new(): mediaStubNameType }; }
export var mediaStubNameType: { new(): mediaStubNameType };

export type morningstarRatingType = number;
export type _morningstarRatingType = Primitive._number;

export interface _MultilingualVariationType extends BaseType {
	Id: string;
	LanguageVariation?: MultilingualVariationTypeLanguageVariationType[];
	NonEnglishText?: MultilingualVariationTypeNonEnglishTextType[];
}
export interface MultilingualVariationType extends _MultilingualVariationType { constructor: { new(): MultilingualVariationType }; }

export interface _MultilingualVariationTypeLanguageVariationType extends BaseType {
	LanguageId: string;
	RegionVariation: MultilingualVariationTypeLanguageVariationTypeRegionVariationType[];
}
export interface MultilingualVariationTypeLanguageVariationType extends _MultilingualVariationTypeLanguageVariationType { constructor: { new(): MultilingualVariationTypeLanguageVariationType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationType extends BaseType {
	ApplicableRegion?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeApplicableRegionType;
	CompanyNarratives?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesType;
	FundNarratives?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesType;
	LegalName?: string;
	ManagementTeam?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeManagementTeamType;
	MediaStubName?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeMediaStubNameType;
	Name?: string;
	PersonalInformation?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationType;
	ShareClassNarratives?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeShareClassNarrativesType;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeApplicableRegionType extends BaseType {
	RegionId: string[];
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeApplicableRegionType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeApplicableRegionType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeApplicableRegionType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesType extends BaseType {
	BusinessObjectiveAndStrategy?: string;
	CompanyHistory?: string;
	LegalDisclosure?: string;
	OrganizationAndOwnership?: string;
	ProductOfferingAndService?: string;
	Profile?: string;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeCompanyNarrativesType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesType extends BaseType {
	LanguageId?: string;
	CompensationStructure?: string;
	FiduciaryGrades?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesTypeFiduciaryGradesType;
	InvestmentCriteria?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesTypeInvestmentCriteriaType;
	InvestmentDecisionMakingProcess?: string;
	InvestmentPhilosophy?: string;
	LegalDisclosure?: string;
	PortfolioConstruction?: string;
	PotentialConflictsOfInterest?: string;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesTypeFiduciaryGradesType extends BaseType {
	Date: Date;
	BoardQualityScore: stringGradeType;
	CorporateCultureScore: stringGradeType;
	FeesScore: stringGradeType;
	ManagerIncentivesScore: stringGradeType;
	OverallGrade: stringGradeType;
	RegulatoryIssuesScore: stringGradeType;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesTypeFiduciaryGradesType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesTypeFiduciaryGradesType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesTypeFiduciaryGradesType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesTypeInvestmentCriteriaType extends BaseType {
	InvestmentRange?: string;
	InvestmentStrategy: string;
	MultiShareFeeSummary?: string;
	StrategySummary?: string;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesTypeInvestmentCriteriaType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesTypeInvestmentCriteriaType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeFundNarrativesTypeInvestmentCriteriaType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeManagementTeamType extends BaseType {
	Name: string;
	TeamInformation?: string;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeManagementTeamType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeManagementTeamType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeManagementTeamType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeMediaStubNameType extends _varchar25 {
	MediaGroupId: number;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeMediaStubNameType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeMediaStubNameType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeMediaStubNameType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationType extends BaseType {
	Affiliation?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeAffiliationType;
	Biography?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeBiographyType;
	BirthDate?: Date;
	CareerStartDate?: Date;
	Certification?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCertificationType;
	CollegeEducation?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationType;
	ContactInformation?: ContactInformationType;
	FamilyName: string;
	Gender?: boolean;
	GivenName: string;
	MiddleName?: string;
	ProfessionalHistory?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryType;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeAffiliationType extends BaseType {
	AffiliationDetail: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeAffiliationTypeAffiliationDetailType[];
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeAffiliationType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeAffiliationType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeAffiliationType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeAffiliationTypeAffiliationDetailType extends BaseType {
	Name: string;
	Title?: string;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeAffiliationTypeAffiliationDetailType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeAffiliationTypeAffiliationDetailType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeAffiliationTypeAffiliationDetailType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeBiographyType extends BaseType {
	ManagerProvidedBiography?: string;
	ProfessionalBiography?: string;
	SupplementaryBiography?: string;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeBiographyType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeBiographyType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeBiographyType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCertificationType extends BaseType {
	CertificationDetail: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCertificationTypeCertificationDetailType[];
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCertificationType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCertificationType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCertificationType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCertificationTypeCertificationDetailType extends BaseType {
	Name: string;
	Year?: number;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCertificationTypeCertificationDetailType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCertificationTypeCertificationDetailType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCertificationTypeCertificationDetailType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationType extends BaseType {
	CollegeEducationDetail: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailType[];
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailType extends BaseType {
	Degree?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailTypeDegreeType;
	Major?: string;
	School: string;
	Year?: number;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailTypeDegreeType extends _varchar10 {}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailTypeDegreeType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailTypeDegreeType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailTypeDegreeType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryType extends BaseType {
	ProfessionalHistoryDetail: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailType[];
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailType extends BaseType {
	CompanyName: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeCompanyNameType;
	EndYear?: number;
	RoleList?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListType;
	StartYear?: number;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeCompanyNameType extends _varchar75 {
	Id: string;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeCompanyNameType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeCompanyNameType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeCompanyNameType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListType extends BaseType {
	RoleDetail: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailType[];
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailType extends BaseType {
	EndYear?: number;
	ProfessionalTitle?: MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailTypeProfessionalTitleType;
	Responsibility?: string;
	StartYear?: number;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailTypeProfessionalTitleType extends _varchar75 {
	Id: number;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailTypeProfessionalTitleType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailTypeProfessionalTitleType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypePersonalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailTypeProfessionalTitleType }; }

export interface _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeShareClassNarrativesType extends BaseType {
	LanguageId: string;
	KIIDObjective: string;
}
export interface MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeShareClassNarrativesType extends _MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeShareClassNarrativesType { constructor: { new(): MultilingualVariationTypeLanguageVariationTypeRegionVariationTypeShareClassNarrativesType }; }

export interface _MultilingualVariationTypeNonEnglishTextType extends BaseType {
	LanguageId: string;
	Name?: string;
}
export interface MultilingualVariationTypeNonEnglishTextType extends _MultilingualVariationTypeNonEnglishTextType { constructor: { new(): MultilingualVariationTypeNonEnglishTextType }; }

export type nonNegativeBigRawDecimal = number;
export type _nonNegativeBigRawDecimal = Primitive._number;

export interface _nonNegativeBigRawDecimalEndDateType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface nonNegativeBigRawDecimalEndDateType extends _nonNegativeBigRawDecimalEndDateType { constructor: { new(): nonNegativeBigRawDecimalEndDateType }; }
export var nonNegativeBigRawDecimalEndDateType: { new(): nonNegativeBigRawDecimalEndDateType };

export interface _nonNegativeDecimal199EndDateValueType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface nonNegativeDecimal199EndDateValueType extends _nonNegativeDecimal199EndDateValueType { constructor: { new(): nonNegativeDecimal199EndDateValueType }; }
export var nonNegativeDecimal199EndDateValueType: { new(): nonNegativeDecimal199EndDateValueType };

export type nonNegativeDecimal199Type = number;
export type _nonNegativeDecimal199Type = Primitive._number;

export interface _nonNegativeIntegerRangeType extends BaseType {
	MaximumValue?: number;
	MinimumValue?: number;
}
export interface nonNegativeIntegerRangeType extends _nonNegativeIntegerRangeType { constructor: { new(): nonNegativeIntegerRangeType }; }
export var nonNegativeIntegerRangeType: { new(): nonNegativeIntegerRangeType };

export interface _nonNegativeIntegerUnsignedByteType extends Primitive._number {
	Type: number;
}
export interface nonNegativeIntegerUnsignedByteType extends _nonNegativeIntegerUnsignedByteType { constructor: { new(): nonNegativeIntegerUnsignedByteType }; }
export var nonNegativeIntegerUnsignedByteType: { new(): nonNegativeIntegerUnsignedByteType };

export type nonNegativeSmallDecimal = number;
export type _nonNegativeSmallDecimal = Primitive._number;

export type nonNegativeSmallRawDecimal = number;
export type _nonNegativeSmallRawDecimal = Primitive._number;

export interface _nonNegativeSmallRawDecimalEndDateType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface nonNegativeSmallRawDecimalEndDateType extends _nonNegativeSmallRawDecimalEndDateType { constructor: { new(): nonNegativeSmallRawDecimalEndDateType }; }
export var nonNegativeSmallRawDecimalEndDateType: { new(): nonNegativeSmallRawDecimalEndDateType };

export interface _obsoleteType extends BaseType {
	Type: string;
	Date?: Date;
	MergedTo?: tokenOptionalIdType;
}
export interface obsoleteType extends _obsoleteType { constructor: { new(): obsoleteType }; }
export var obsoleteType: { new(): obsoleteType };

export interface _peerGroupRankType extends BaseType {
	PeerGroupRankDetail: peerGroupRankTypePeerGroupRankDetailType[];
}
export interface peerGroupRankType extends _peerGroupRankType { constructor: { new(): peerGroupRankType }; }
export var peerGroupRankType: { new(): peerGroupRankType };

export interface _peerGroupRankTypePeerGroupRankDetailType extends BaseType {
	ClassificationMethod: number;
	MarketingRegionId: number;
	PeerGroupId: number;
	AbsoluteRank?: number;
	PercentileRank: number;
}
export interface peerGroupRankTypePeerGroupRankDetailType extends _peerGroupRankTypePeerGroupRankDetailType { constructor: { new(): peerGroupRankTypePeerGroupRankDetailType }; }

export type percentileRankType = number;
export type _percentileRankType = Primitive._number;

export interface _PerformanceBasicsType extends BaseType {
	CurrencyChangeHistory?: PerformanceBasicsTypeCurrencyChangeHistoryType;
	DividendExclusionHistory?: PerformanceBasicsTypeDividendExclusionHistoryType;
	ExchangeId?: string;
	InceptionDate?: Date;
	InheritanceEndDate?: Date;
	InternationalFeature?: InternationalFeatureType;
	ISIN?: string;
	PenceTraded?: boolean;
	PricingConversionFactor?: PerformanceBasicsTypePricingConversionFactorType;
	SEDOL?: string;
	TradingSymbol?: string;
}
export interface PerformanceBasicsType extends _PerformanceBasicsType { constructor: { new(): PerformanceBasicsType }; }

export interface _PerformanceBasicsTypeCurrencyChangeHistoryType extends BaseType {
	CurrencyChangeDetail: PerformanceBasicsTypeCurrencyChangeHistoryTypeCurrencyChangeDetailType[];
}
export interface PerformanceBasicsTypeCurrencyChangeHistoryType extends _PerformanceBasicsTypeCurrencyChangeHistoryType { constructor: { new(): PerformanceBasicsTypeCurrencyChangeHistoryType }; }

export interface _PerformanceBasicsTypeCurrencyChangeHistoryTypeCurrencyChangeDetailType extends BaseType {
	CurrencyId: string;
	EndDate: Date;
}
export interface PerformanceBasicsTypeCurrencyChangeHistoryTypeCurrencyChangeDetailType extends _PerformanceBasicsTypeCurrencyChangeHistoryTypeCurrencyChangeDetailType { constructor: { new(): PerformanceBasicsTypeCurrencyChangeHistoryTypeCurrencyChangeDetailType }; }

export interface _PerformanceBasicsTypeDividendExclusionHistoryType extends BaseType {
	StatusChangeTrack: PerformanceBasicsTypeDividendExclusionHistoryTypeStatusChangeTrackType[];
}
export interface PerformanceBasicsTypeDividendExclusionHistoryType extends _PerformanceBasicsTypeDividendExclusionHistoryType { constructor: { new(): PerformanceBasicsTypeDividendExclusionHistoryType }; }

export interface _PerformanceBasicsTypeDividendExclusionHistoryTypeStatusChangeTrackType extends BaseType {
	Status: string;
	StartDate: Date;
}
export interface PerformanceBasicsTypeDividendExclusionHistoryTypeStatusChangeTrackType extends _PerformanceBasicsTypeDividendExclusionHistoryTypeStatusChangeTrackType { constructor: { new(): PerformanceBasicsTypeDividendExclusionHistoryTypeStatusChangeTrackType }; }

export interface _PerformanceBasicsTypePricingConversionFactorType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface PerformanceBasicsTypePricingConversionFactorType extends _PerformanceBasicsTypePricingConversionFactorType { constructor: { new(): PerformanceBasicsTypePricingConversionFactorType }; }

export interface _PerformanceIdType extends BaseType {
	Result?: PerformanceIdTypeResultType[];
}
export interface PerformanceIdType extends _PerformanceIdType { constructor: { new(): PerformanceIdType }; }

export interface _PerformanceIdTypeResultType extends BaseType {
	CurrencyId?: string;
	DataStatus?: DataStatusType;
	IsBaseCurrency?: boolean;
	LatestQuotedYield?: PerformanceIdTypeResultTypeLatestQuotedYieldType;
	PerformanceBasics?: PerformanceBasicsType;
	PerformanceId?: string;
	PerformanceReturnSourceId?: string;
}
export interface PerformanceIdTypeResultType extends _PerformanceIdTypeResultType { constructor: { new(): PerformanceIdTypeResultType }; }

export interface _PerformanceIdTypeResultTypeLatestQuotedYieldType extends BaseType {
	Id: string;
	EndDate: Date;
	Value: number;
}
export interface PerformanceIdTypeResultTypeLatestQuotedYieldType extends _PerformanceIdTypeResultTypeLatestQuotedYieldType { constructor: { new(): PerformanceIdTypeResultTypeLatestQuotedYieldType }; }

export interface _PerformanceType extends BaseType {
	CurrencyId?: string;
	Id?: string;
	RegionId?: number;
	ReturnSourceId: number;
	HistoricalPerformance?: PerformanceTypeHistoricalPerformanceType;
	KIID?: PerformanceTypeKIIDType;
	PerformanceBasics?: PerformanceTypePerformanceBasicsType;
	PriceStatistics?: PerformanceTypePriceStatisticsType;
	QuarterlyTrailingPerformance?: PerformanceTypeQuarterlyTrailingPerformanceType[];
	SinceRestructureReturn?: PerformanceTypeSinceRestructureReturnType;
	TrailingPerformance?: PerformanceTypeTrailingPerformanceType;
}
export interface PerformanceType extends _PerformanceType { constructor: { new(): PerformanceType }; }

export interface _PerformanceTypeHistoricalPerformanceType extends BaseType {
	Region?: number;
	RegionId?: number;
	HistoricalPerformanceDetail?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailType[];
}
export interface PerformanceTypeHistoricalPerformanceType extends _PerformanceTypeHistoricalPerformanceType { constructor: { new(): PerformanceTypeHistoricalPerformanceType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailType extends BaseType {
	Year: number;
	DistributionHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryType[];
	EstimatedPerformanceHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeEstimatedPerformanceHistoryType;
	ExchangeRateHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeExchangeRateHistoryType;
	GroupPerformanceHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeGroupPerformanceHistoryType;
	IndicatorLevelHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeIndicatorLevelHistoryType;
	PremiumDiscountHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePremiumDiscountHistoryType;
	PriceHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryType[];
	ReturnDispersionHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnDispersionHistoryType;
	ReturnHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnHistoryType;
	RightsOfferingHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeRightsOfferingHistoryType;
	SplitHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeSplitHistoryType;
	YieldHistory?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeYieldHistoryType;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryType extends BaseType {
	Type: number;
	DailyDividend?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDailyDividendType;
	Distribution?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionType[];
	TaxCredit?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeTaxCreditType;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDailyDividendType extends BaseType {
	HistoryDetail: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDailyDividendTypeHistoryDetailType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDailyDividendType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDailyDividendType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDailyDividendType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDailyDividendTypeHistoryDetailType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDailyDividendTypeHistoryDetailType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDailyDividendTypeHistoryDetailType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDailyDividendTypeHistoryDetailType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionType extends BaseType {
	Type: number;
	DistributionDetail: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailType extends BaseType {
	DeclaredDate?: Date;
	DistributionBreakdown?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailTypeDistributionBreakdownType[];
	EffectiveReinvestPrice?: number;
	ExcludingDate: Date;
	ExDistributionExitPrice?: number;
	PayDate?: Date;
	RecordDate?: Date;
	ReinvestDate?: Date;
	TotalDistribution: number;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailTypeDistributionBreakdownType extends BaseType {
	AreaId: string;
	BreakdownValue: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailTypeDistributionBreakdownTypeBreakdownValueType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailTypeDistributionBreakdownType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailTypeDistributionBreakdownType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailTypeDistributionBreakdownType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailTypeDistributionBreakdownTypeBreakdownValueType extends _decimal199Type {
	Type: number;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailTypeDistributionBreakdownTypeBreakdownValueType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailTypeDistributionBreakdownTypeBreakdownValueType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeDistributionTypeDistributionDetailTypeDistributionBreakdownTypeBreakdownValueType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeTaxCreditType extends BaseType {
	TaxCreditDetail: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeTaxCreditTypeTaxCreditDetailType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeTaxCreditType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeTaxCreditType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeTaxCreditType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeTaxCreditTypeTaxCreditDetailType extends BaseType {
	CommodityCollectible?: number;
	ForeignTax?: number;
	Qualified5YearCapitalGain?: number;
	QualifiedSmallBusiness?: number;
	REIT?: number;
	RetainedCapitalGain?: number;
	TaxDate: Date;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeTaxCreditTypeTaxCreditDetailType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeTaxCreditTypeTaxCreditDetailType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeDistributionHistoryTypeTaxCreditTypeTaxCreditDetailType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeEstimatedPerformanceHistoryType extends BaseType {
	EstimatedPerformance: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeEstimatedPerformanceHistoryTypeEstimatedPerformanceType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeEstimatedPerformanceHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeEstimatedPerformanceHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeEstimatedPerformanceHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeEstimatedPerformanceHistoryTypeEstimatedPerformanceType extends BaseType {
	AnnualDistribution?: number;
	CurrentReturn?: number;
	EndDate: Date;
	LongTermReturn?: number;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeEstimatedPerformanceHistoryTypeEstimatedPerformanceType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeEstimatedPerformanceHistoryTypeEstimatedPerformanceType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeEstimatedPerformanceHistoryTypeEstimatedPerformanceType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeExchangeRateHistoryType extends BaseType {
	ExchangeRateDetail: nonNegativeBigRawDecimalEndDateType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeExchangeRateHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeExchangeRateHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeExchangeRateHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeGroupPerformanceHistoryType extends BaseType {
	GroupPerformance: groupPerformanceType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeGroupPerformanceHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeGroupPerformanceHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeGroupPerformanceHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeIndicatorLevelHistoryType extends BaseType {
	IndicatorLevel: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeIndicatorLevelHistoryTypeIndicatorLevelType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeIndicatorLevelHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeIndicatorLevelHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeIndicatorLevelHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeIndicatorLevelHistoryTypeIndicatorLevelType extends BaseType {
	TimePeriod: string;
	EndDate: Date;
	Value: number;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeIndicatorLevelHistoryTypeIndicatorLevelType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeIndicatorLevelHistoryTypeIndicatorLevelType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeIndicatorLevelHistoryTypeIndicatorLevelType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePremiumDiscountHistoryType extends BaseType {
	PremiumDiscount: premiumDiscountType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePremiumDiscountHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePremiumDiscountHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePremiumDiscountHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryType extends BaseType {
	ExchangeId: string;
	Diluted: boolean;
	ExIncome: boolean;
	NetOfFee: boolean;
	OriginalReported: boolean;
	ParValue: boolean;
	PostTax: boolean;
	Type: number;
	PriceDetail: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailType extends BaseType {
	AccruedInterest?: number;
	BidPrice?: number;
	ClosePrice?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypeClosePriceType;
	EndDate: Date;
	HighPrice?: number;
	LastPrice?: number;
	LowPrice?: number;
	OfferPrice?: number;
	OpenPrice?: number;
	PIEPriceComponent?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePIEPriceComponentType;
	PriceBreakdown?: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePriceBreakdownType;
	ValueVolume?: number;
	Volume?: number;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypeClosePriceType extends _positiveBigRawDecimal {
	Type: number;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypeClosePriceType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypeClosePriceType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypeClosePriceType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePIEPriceComponentType extends BaseType {
	DividendWithholdingPayment?: number;
	ForeignTaxationCredit?: number;
	ImputationCredit?: number;
	NonTaxableIncome?: number;
	OtherIncome?: number;
	ResidentWithholdingTaxation?: number;
	TaxableIncome?: number;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePIEPriceComponentType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePIEPriceComponentType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePIEPriceComponentType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePriceBreakdownType extends BaseType {
	TaxableIncome: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePriceBreakdownTypeTaxableIncomeType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePriceBreakdownType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePriceBreakdownType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePriceBreakdownType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePriceBreakdownTypeTaxableIncomeType extends _nonNegativeBigRawDecimal {
	CountryId: string;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePriceBreakdownTypeTaxableIncomeType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePriceBreakdownTypeTaxableIncomeType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypePriceHistoryTypePriceDetailTypePriceBreakdownTypeTaxableIncomeType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnDispersionHistoryType extends BaseType {
	ReturnDispersion: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnDispersionHistoryTypeReturnDispersionType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnDispersionHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnDispersionHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnDispersionHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnDispersionHistoryTypeReturnDispersionType extends BaseType {
	EndDate: Date;
	HighValue?: number;
	LowValue?: number;
	MedianValue?: number;
	StandardDeviation?: number;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnDispersionHistoryTypeReturnDispersionType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnDispersionHistoryTypeReturnDispersionType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnDispersionHistoryTypeReturnDispersionType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnHistoryType extends BaseType {
	Id: string;
	Return?: returnType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeReturnHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeRightsOfferingHistoryType extends BaseType {
	RightsOffering: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeRightsOfferingHistoryTypeRightsOfferingType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeRightsOfferingHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeRightsOfferingHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeRightsOfferingHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeRightsOfferingHistoryTypeRightsOfferingType extends BaseType {
	EntitledShare: number;
	ExcludingDate: Date;
	MarketPriceDilution?: number;
	NAVDilution?: number;
	OfferPrice: number;
	PricingDate: Date;
	ShareIssued?: number;
	Transferable: boolean;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeRightsOfferingHistoryTypeRightsOfferingType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeRightsOfferingHistoryTypeRightsOfferingType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeRightsOfferingHistoryTypeRightsOfferingType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeSplitHistoryType extends BaseType {
	Split: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeSplitHistoryTypeSplitType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeSplitHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeSplitHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeSplitHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeSplitHistoryTypeSplitType extends BaseType {
	Type: number;
	EndDate: Date;
	NewScale: number;
	OldScale: number;
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeSplitHistoryTypeSplitType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeSplitHistoryTypeSplitType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeSplitHistoryTypeSplitType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeYieldHistoryType extends BaseType {
	Yield: PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeYieldHistoryTypeYieldType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeYieldHistoryType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeYieldHistoryType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeYieldHistoryType }; }

export interface _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeYieldHistoryTypeYieldType extends BaseType {
	Type: number;
	HistoryDetail?: smallRawDecimalEndDateType[];
}
export interface PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeYieldHistoryTypeYieldType extends _PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeYieldHistoryTypeYieldType { constructor: { new(): PerformanceTypeHistoricalPerformanceTypeHistoricalPerformanceDetailTypeYieldHistoryTypeYieldType }; }

export interface _PerformanceTypeKIIDType extends BaseType {
	KIIDOngoingChargeHistory?: PerformanceTypeKIIDTypeKIIDOngoingChargeHistoryType;
	KIIDSRRIHistory?: PerformanceTypeKIIDTypeKIIDSRRIHistoryType[];
}
export interface PerformanceTypeKIIDType extends _PerformanceTypeKIIDType { constructor: { new(): PerformanceTypeKIIDType }; }

export interface _PerformanceTypeKIIDTypeKIIDOngoingChargeHistoryType extends BaseType {
	KIIDOngoingChargeTrack?: PerformanceTypeKIIDTypeKIIDOngoingChargeHistoryTypeKIIDOngoingChargeTrackType[];
}
export interface PerformanceTypeKIIDTypeKIIDOngoingChargeHistoryType extends _PerformanceTypeKIIDTypeKIIDOngoingChargeHistoryType { constructor: { new(): PerformanceTypeKIIDTypeKIIDOngoingChargeHistoryType }; }

export interface _PerformanceTypeKIIDTypeKIIDOngoingChargeHistoryTypeKIIDOngoingChargeTrackType extends BaseType {
	EndDate: Date;
	OngoingCharge: number;
}
export interface PerformanceTypeKIIDTypeKIIDOngoingChargeHistoryTypeKIIDOngoingChargeTrackType extends _PerformanceTypeKIIDTypeKIIDOngoingChargeHistoryTypeKIIDOngoingChargeTrackType { constructor: { new(): PerformanceTypeKIIDTypeKIIDOngoingChargeHistoryTypeKIIDOngoingChargeTrackType }; }

export interface _PerformanceTypeKIIDTypeKIIDSRRIHistoryType extends BaseType {
	KIIDSRRI?: PerformanceTypeKIIDTypeKIIDSRRIHistoryTypeKIIDSRRIType;
	KIIDSRRITrack?: PerformanceTypeKIIDTypeKIIDSRRIHistoryTypeKIIDSRRITrackType[];
}
export interface PerformanceTypeKIIDTypeKIIDSRRIHistoryType extends _PerformanceTypeKIIDTypeKIIDSRRIHistoryType { constructor: { new(): PerformanceTypeKIIDTypeKIIDSRRIHistoryType }; }

export interface _PerformanceTypeKIIDTypeKIIDSRRIHistoryTypeKIIDSRRITrackType extends BaseType {
	EndDate: Date;
	SRRI: number;
}
export interface PerformanceTypeKIIDTypeKIIDSRRIHistoryTypeKIIDSRRITrackType extends _PerformanceTypeKIIDTypeKIIDSRRIHistoryTypeKIIDSRRITrackType { constructor: { new(): PerformanceTypeKIIDTypeKIIDSRRIHistoryTypeKIIDSRRITrackType }; }

export interface _PerformanceTypeKIIDTypeKIIDSRRIHistoryTypeKIIDSRRIType extends BaseType {
	EndDate: Date;
	SRRI: number;
}
export interface PerformanceTypeKIIDTypeKIIDSRRIHistoryTypeKIIDSRRIType extends _PerformanceTypeKIIDTypeKIIDSRRIHistoryTypeKIIDSRRIType { constructor: { new(): PerformanceTypeKIIDTypeKIIDSRRIHistoryTypeKIIDSRRIType }; }

export interface _PerformanceTypePerformanceBasicsType extends BaseType {
	CurrencyChangeHistory?: PerformanceTypePerformanceBasicsTypeCurrencyChangeHistoryType;
	DividendExclusionHistory?: PerformanceTypePerformanceBasicsTypeDividendExclusionHistoryType;
	ExchangeId?: string;
	InceptionDate?: Date;
	InternationalFeature?: InternationalFeatureType;
	ISIN?: string;
	PenceTraded?: boolean;
	PricingConversionFactor?: PerformanceTypePerformanceBasicsTypePricingConversionFactorType;
}
export interface PerformanceTypePerformanceBasicsType extends _PerformanceTypePerformanceBasicsType { constructor: { new(): PerformanceTypePerformanceBasicsType }; }

export interface _PerformanceTypePerformanceBasicsTypeCurrencyChangeHistoryType extends BaseType {
	CurrencyChangeDetail: PerformanceTypePerformanceBasicsTypeCurrencyChangeHistoryTypeCurrencyChangeDetailType[];
}
export interface PerformanceTypePerformanceBasicsTypeCurrencyChangeHistoryType extends _PerformanceTypePerformanceBasicsTypeCurrencyChangeHistoryType { constructor: { new(): PerformanceTypePerformanceBasicsTypeCurrencyChangeHistoryType }; }

export interface _PerformanceTypePerformanceBasicsTypeCurrencyChangeHistoryTypeCurrencyChangeDetailType extends BaseType {
	CurrencyId: string;
	EndDate: Date;
}
export interface PerformanceTypePerformanceBasicsTypeCurrencyChangeHistoryTypeCurrencyChangeDetailType extends _PerformanceTypePerformanceBasicsTypeCurrencyChangeHistoryTypeCurrencyChangeDetailType { constructor: { new(): PerformanceTypePerformanceBasicsTypeCurrencyChangeHistoryTypeCurrencyChangeDetailType }; }

export interface _PerformanceTypePerformanceBasicsTypeDividendExclusionHistoryType extends BaseType {
	StatusChangeTrack: PerformanceTypePerformanceBasicsTypeDividendExclusionHistoryTypeStatusChangeTrackType[];
}
export interface PerformanceTypePerformanceBasicsTypeDividendExclusionHistoryType extends _PerformanceTypePerformanceBasicsTypeDividendExclusionHistoryType { constructor: { new(): PerformanceTypePerformanceBasicsTypeDividendExclusionHistoryType }; }

export interface _PerformanceTypePerformanceBasicsTypeDividendExclusionHistoryTypeStatusChangeTrackType extends BaseType {
	Status: string;
	StartDate: Date;
}
export interface PerformanceTypePerformanceBasicsTypeDividendExclusionHistoryTypeStatusChangeTrackType extends _PerformanceTypePerformanceBasicsTypeDividendExclusionHistoryTypeStatusChangeTrackType { constructor: { new(): PerformanceTypePerformanceBasicsTypeDividendExclusionHistoryTypeStatusChangeTrackType }; }

export interface _PerformanceTypePerformanceBasicsTypePricingConversionFactorType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface PerformanceTypePerformanceBasicsTypePricingConversionFactorType extends _PerformanceTypePerformanceBasicsTypePricingConversionFactorType { constructor: { new(): PerformanceTypePerformanceBasicsTypePricingConversionFactorType }; }

export interface _PerformanceTypePriceStatisticsType extends BaseType {
	Id: string;
	ClosePrice?: number;
	EndDate?: Date;
	Trailing52WeekStatisticsNode?: PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeType;
}
export interface PerformanceTypePriceStatisticsType extends _PerformanceTypePriceStatisticsType { constructor: { new(): PerformanceTypePriceStatisticsType }; }

export interface _PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeType extends BaseType {
	HighPrice: PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeTypeHighPriceType;
	LowPrice: PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeTypeLowPriceType;
}
export interface PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeType extends _PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeType { constructor: { new(): PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeType }; }

export interface _PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeTypeHighPriceType extends _decimal1915Type {
	EndDate: Date;
}
export interface PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeTypeHighPriceType extends _PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeTypeHighPriceType { constructor: { new(): PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeTypeHighPriceType }; }

export interface _PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeTypeLowPriceType extends _decimal1915Type {
	EndDate: Date;
}
export interface PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeTypeLowPriceType extends _PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeTypeLowPriceType { constructor: { new(): PerformanceTypePriceStatisticsTypeTrailing52WeekStatisticsNodeTypeLowPriceType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceType extends BaseType {
	Type: number;
	PotentialCapitalGain?: number;
	RiskAndRating?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingType;
	TrailingForwardYield?: PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingForwardYieldType;
	TrailingGroupPerformance?: PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingGroupPerformanceType;
	TrailingPremiumDiscount?: PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingPremiumDiscountType;
	TrailingReturn?: PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingReturnType;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceType extends _PerformanceTypeQuarterlyTrailingPerformanceType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingType extends BaseType {
	FlexibilityMeasure?: string;
	RiskAnalysis?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisType;
	RiskMeasuresRank?: RiskMeasuresRankType;
	StarRating?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingType;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisType extends BaseType {
	RelativeRiskMeasures?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresType;
	RiskMeasures?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresType;
	VolatilityMeasures?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresType;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresType extends BaseType {
	RelativeRiskMeasuresDetail: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailType[];
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailType extends BaseType {
	CurrencyId: string;
	TaxRegionId: string;
	BenchmarkType: number;
	TimePeriod: string;
	Type: number;
	Alpha?: number;
	BattingAverage?: number;
	BenchmarkIndex?: tokenIdChar10TypeMin0;
	Beta?: number;
	CaptureRatio?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailTypeCaptureRatioType[];
	Correlation?: number;
	EndDate: Date;
	Index?: tokenIdType;
	InformationRatio?: number;
	RiskFreeIndex?: tokenIdChar10Type;
	RSquared?: number;
	TrackingError?: number;
	TreynorRatio?: number;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailTypeCaptureRatioType extends _smallDecimal {
	Type: number;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailTypeCaptureRatioType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailTypeCaptureRatioType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailTypeCaptureRatioType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresType extends BaseType {
	RiskMeasuresDetail: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailType[];
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailType extends BaseType {
	CurrencyId: string;
	TaxRegionId: string;
	TimePeriod: string;
	Type: number;
	ArithmeticMean?: number;
	EndDate: Date;
	Kurtosis?: number;
	MaxDrawdown?: number;
	MaximumDrawdown?: number;
	SharpeRatio?: number;
	Skewness?: number;
	SortinoRatio?: number;
	StandardDeviation: number;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresType extends BaseType {
	Best3Month?: endDateValueType;
	EndDate: Date;
	MarketCyclePerformance?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceType;
	Volatility?: number;
	Worst3Month?: endDateValueType;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceType extends BaseType {
	MarketCyclePerformanceDetail: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceTypeMarketCyclePerformanceDetailType[];
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceTypeMarketCyclePerformanceDetailType extends BaseType {
	Type: number;
	BeginDate?: Date;
	CategoryRank?: number;
	EndDate?: Date;
	Value?: number;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceTypeMarketCyclePerformanceDetailType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceTypeMarketCyclePerformanceDetailType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceTypeMarketCyclePerformanceDetailType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingType extends BaseType {
	EndDate: Date;
	FamilyGrade?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeFamilyGradeType;
	RatingDetail: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailType[];
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeFamilyGradeType extends BaseType {
	Type: number;
	NumberOfDistinctPortfolioInFamily?: number;
	Value: number;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeFamilyGradeType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeFamilyGradeType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeFamilyGradeType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailType extends BaseType {
	TimePeriod: string;
	Type: number;
	CategorySimilarityWeighting?: number;
	NumberOfDistinctPortfolioInCategory?: number;
	PerformanceRating?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypePerformanceRatingType;
	Rating: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRatingType;
	RiskRating?: PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRiskRatingType;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypePerformanceRatingType extends BaseType {
	CategoryRank?: number;
	PerformanceScore?: number;
	Value?: number;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypePerformanceRatingType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypePerformanceRatingType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypePerformanceRatingType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRatingType extends BaseType {
	CategoryRank?: number;
	RiskAdjustedReturn?: number;
	Value?: number;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRatingType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRatingType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRatingType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRiskRatingType extends BaseType {
	CategoryRank?: number;
	RiskScore?: number;
	Value?: number;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRiskRatingType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRiskRatingType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRiskRatingType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingForwardYieldType extends BaseType {
	ForwardYield: PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingForwardYieldTypeForwardYieldType[];
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingForwardYieldType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingForwardYieldType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingForwardYieldType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingForwardYieldTypeForwardYieldType extends BaseType {
	Type: number;
	EndDate: Date;
	Value: number;
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingForwardYieldTypeForwardYieldType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingForwardYieldTypeForwardYieldType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingForwardYieldTypeForwardYieldType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingGroupPerformanceType extends BaseType {
	GroupPerformance: groupPerformanceType[];
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingGroupPerformanceType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingGroupPerformanceType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingGroupPerformanceType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingPremiumDiscountType extends BaseType {
	PremiumDiscount: premiumDiscountType[];
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingPremiumDiscountType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingPremiumDiscountType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingPremiumDiscountType }; }

export interface _PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingReturnType extends BaseType {
	Return: returnType[];
}
export interface PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingReturnType extends _PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingReturnType { constructor: { new(): PerformanceTypeQuarterlyTrailingPerformanceTypeTrailingReturnType }; }

export interface _PerformanceTypeSinceRestructureReturnType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface PerformanceTypeSinceRestructureReturnType extends _PerformanceTypeSinceRestructureReturnType { constructor: { new(): PerformanceTypeSinceRestructureReturnType }; }

export interface _PerformanceTypeTrailingPerformanceType extends BaseType {
	Type: number;
	PotentialCapitalGain?: number;
	RiskAndRating?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingType;
	TrailingForwardYield?: PerformanceTypeTrailingPerformanceTypeTrailingForwardYieldType;
	TrailingGroupPerformance?: PerformanceTypeTrailingPerformanceTypeTrailingGroupPerformanceType;
	TrailingPremiumDiscount?: PerformanceTypeTrailingPerformanceTypeTrailingPremiumDiscountType;
	TrailingReturn?: PerformanceTypeTrailingPerformanceTypeTrailingReturnType;
}
export interface PerformanceTypeTrailingPerformanceType extends _PerformanceTypeTrailingPerformanceType { constructor: { new(): PerformanceTypeTrailingPerformanceType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingType extends BaseType {
	FlexibilityMeasure?: string;
	RiskAnalysis?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisType;
	RiskMeasuresRank?: RiskMeasuresRankType;
	StarRating?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingType;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisType extends BaseType {
	RelativeRiskMeasures?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresType;
	RiskMeasures?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresType;
	VolatilityMeasures?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresType;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresType extends BaseType {
	RelativeRiskMeasuresDetail: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailType[];
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailType extends BaseType {
	CurrencyId: string;
	TaxRegionId: string;
	BenchmarkType: number;
	TimePeriod: string;
	Type: number;
	Alpha?: number;
	BattingAverage?: number;
	BenchmarkIndex?: tokenIdChar10TypeMin0;
	Beta?: number;
	CaptureRatio?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailTypeCaptureRatioType[];
	Correlation?: number;
	EndDate: Date;
	Index?: tokenIdType;
	InformationRatio?: number;
	RiskFreeIndex?: tokenIdChar10TypeMin0;
	RSquared?: number;
	TrackingError?: number;
	TreynorRatio?: number;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailTypeCaptureRatioType extends _smallDecimal {
	Type: number;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailTypeCaptureRatioType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailTypeCaptureRatioType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRelativeRiskMeasuresTypeRelativeRiskMeasuresDetailTypeCaptureRatioType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresType extends BaseType {
	RiskMeasuresDetail: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailType[];
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailType extends BaseType {
	CurrencyId: string;
	TaxRegionId: string;
	TimePeriod: string;
	Type: number;
	ArithmeticMean?: number;
	EndDate: Date;
	Kurtosis?: number;
	MaxDrawdown?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailTypeMaxDrawdownType;
	MaximumDrawdown?: number;
	SharpeRatio?: number;
	Skewness?: number;
	SortinoRatio?: number;
	StandardDeviation: number;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailTypeMaxDrawdownType extends Primitive._number {
	DrawDownMonths?: number;
	DrawUpMonths?: number;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailTypeMaxDrawdownType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailTypeMaxDrawdownType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeRiskMeasuresTypeRiskMeasuresDetailTypeMaxDrawdownType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresType extends BaseType {
	Best3Month?: endDateValueType;
	EndDate: Date;
	MarketCyclePerformance?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceType;
	Volatility?: number;
	Worst3Month?: endDateValueType;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceType extends BaseType {
	MarketCyclePerformanceDetail: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceTypeMarketCyclePerformanceDetailType[];
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceTypeMarketCyclePerformanceDetailType extends BaseType {
	Type: number;
	BeginDate?: Date;
	CategoryRank?: number;
	EndDate?: Date;
	Value?: number;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceTypeMarketCyclePerformanceDetailType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceTypeMarketCyclePerformanceDetailType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeRiskAnalysisTypeVolatilityMeasuresTypeMarketCyclePerformanceTypeMarketCyclePerformanceDetailType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingType extends BaseType {
	EndDate: Date;
	FamilyGrade?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeFamilyGradeType;
	RatingDetail: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailType[];
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeFamilyGradeType extends BaseType {
	Type: number;
	NumberOfDistinctPortfolioInFamily?: number;
	Value: number;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeFamilyGradeType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeFamilyGradeType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeFamilyGradeType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailType extends BaseType {
	TimePeriod: string;
	Type: number;
	CategorySimilarityWeighting?: number;
	NumberOfDistinctPortfolioInCategory?: number;
	PerformanceRating?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypePerformanceRatingType;
	Rating: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRatingType;
	RiskRating?: PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRiskRatingType;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypePerformanceRatingType extends BaseType {
	CategoryRank?: number;
	PerformanceScore?: number;
	Value?: number;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypePerformanceRatingType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypePerformanceRatingType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypePerformanceRatingType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRatingType extends BaseType {
	CategoryRank?: number;
	RiskAdjustedReturn?: number;
	Value?: number;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRatingType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRatingType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRatingType }; }

export interface _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRiskRatingType extends BaseType {
	CategoryRank?: number;
	RiskScore?: number;
	Value?: number;
}
export interface PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRiskRatingType extends _PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRiskRatingType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeRiskAndRatingTypeStarRatingTypeRatingDetailTypeRiskRatingType }; }

export interface _PerformanceTypeTrailingPerformanceTypeTrailingForwardYieldType extends BaseType {
	ForwardYield: PerformanceTypeTrailingPerformanceTypeTrailingForwardYieldTypeForwardYieldType[];
}
export interface PerformanceTypeTrailingPerformanceTypeTrailingForwardYieldType extends _PerformanceTypeTrailingPerformanceTypeTrailingForwardYieldType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeTrailingForwardYieldType }; }

export interface _PerformanceTypeTrailingPerformanceTypeTrailingForwardYieldTypeForwardYieldType extends BaseType {
	Type: number;
	EndDate: Date;
	Value: number;
}
export interface PerformanceTypeTrailingPerformanceTypeTrailingForwardYieldTypeForwardYieldType extends _PerformanceTypeTrailingPerformanceTypeTrailingForwardYieldTypeForwardYieldType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeTrailingForwardYieldTypeForwardYieldType }; }

export interface _PerformanceTypeTrailingPerformanceTypeTrailingGroupPerformanceType extends BaseType {
	GroupPerformance?: groupPerformanceType[];
}
export interface PerformanceTypeTrailingPerformanceTypeTrailingGroupPerformanceType extends _PerformanceTypeTrailingPerformanceTypeTrailingGroupPerformanceType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeTrailingGroupPerformanceType }; }

export interface _PerformanceTypeTrailingPerformanceTypeTrailingPremiumDiscountType extends BaseType {
	PremiumDiscount: premiumDiscountType[];
}
export interface PerformanceTypeTrailingPerformanceTypeTrailingPremiumDiscountType extends _PerformanceTypeTrailingPerformanceTypeTrailingPremiumDiscountType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeTrailingPremiumDiscountType }; }

export interface _PerformanceTypeTrailingPerformanceTypeTrailingReturnType extends BaseType {
	Return?: returnType[];
}
export interface PerformanceTypeTrailingPerformanceTypeTrailingReturnType extends _PerformanceTypeTrailingPerformanceTypeTrailingReturnType { constructor: { new(): PerformanceTypeTrailingPerformanceTypeTrailingReturnType }; }

export interface _policyPurchaseDetailType extends BaseType {
	AllowException: boolean;
	InitialPremium?: policyPurchaseDetailTypeInitialPremiumType;
	SubsequentPremium?: policyPurchaseDetailTypeSubsequentPremiumType;
}
export interface policyPurchaseDetailType extends _policyPurchaseDetailType { constructor: { new(): policyPurchaseDetailType }; }
export var policyPurchaseDetailType: { new(): policyPurchaseDetailType };

export interface _policyPurchaseDetailTypeInitialPremiumType extends BaseType {
	Unit: number;
	ValueRange: nonNegativeIntegerRangeType;
}
export interface policyPurchaseDetailTypeInitialPremiumType extends _policyPurchaseDetailTypeInitialPremiumType { constructor: { new(): policyPurchaseDetailTypeInitialPremiumType }; }

export interface _policyPurchaseDetailTypeSubsequentPremiumType extends BaseType {
	Unit: number;
	EFTMinimum?: number;
	ValueRange: nonNegativeIntegerRangeType;
}
export interface policyPurchaseDetailTypeSubsequentPremiumType extends _policyPurchaseDetailTypeSubsequentPremiumType { constructor: { new(): policyPurchaseDetailTypeSubsequentPremiumType }; }

export interface _PortfolioType extends BaseType {
	CurrencyId?: string;
	ExternalId: string;
	Id: number;
	LanguageId?: string;
	ManagerId: string;
	MasterPortfolioId: number;
	PrimaryIndexId?: string;
	SecondaryIndexId?: string;
	IdentifiedAssetPercentage: number;
	NonMonthEndPortfolio?: boolean;
	Ownership: string;
	ProviderId?: number;
	SuppressionExpiration: Date;
	AggregatedHolding?: PortfolioTypeAggregatedHoldingType;
	FundOfFundSummary?: PortfolioTypeFundOfFundSummaryType;
	Holding?: PortfolioTypeHoldingType;
	PortfolioBreakdown?: PortfolioTypePortfolioBreakdownType[];
	PortfolioStatistics?: PortfolioTypePortfolioStatisticsType[];
	PortfolioSummary: PortfolioTypePortfolioSummaryType;
	SoldOutHolding?: PortfolioTypeSoldOutHoldingType[];
	SurveyData?: PortfolioTypeSurveyDataType;
}
export interface PortfolioType extends _PortfolioType { constructor: { new(): PortfolioType }; }

export interface _PortfolioTypeAggregatedHoldingType extends BaseType {
	HoldingDetail?: holdingDetailType[];
}
export interface PortfolioTypeAggregatedHoldingType extends _PortfolioTypeAggregatedHoldingType { constructor: { new(): PortfolioTypeAggregatedHoldingType }; }

export interface _PortfolioTypeFundOfFundSummaryType extends BaseType {
	FundOfFundDetail: PortfolioTypeFundOfFundSummaryTypeFundOfFundDetailType[];
}
export interface PortfolioTypeFundOfFundSummaryType extends _PortfolioTypeFundOfFundSummaryType { constructor: { new(): PortfolioTypeFundOfFundSummaryType }; }

export interface _PortfolioTypeFundOfFundSummaryTypeFundOfFundDetailType extends BaseType {
	Type: number;
	ClosedFundWeighting?: number;
	NumberOfFund?: number;
}
export interface PortfolioTypeFundOfFundSummaryTypeFundOfFundDetailType extends _PortfolioTypeFundOfFundSummaryTypeFundOfFundDetailType { constructor: { new(): PortfolioTypeFundOfFundSummaryTypeFundOfFundDetailType }; }

export interface _PortfolioTypeHoldingType extends BaseType {
	HoldingDetail?: holdingDetailType[];
}
export interface PortfolioTypeHoldingType extends _PortfolioTypeHoldingType { constructor: { new(): PortfolioTypeHoldingType }; }

export interface _PortfolioTypePortfolioBreakdownType extends BaseType {
	SalePosition: string;
	AssetAllocation?: PortfolioTypePortfolioBreakdownTypeAssetAllocationType[];
	AssetClassExposure?: PortfolioTypePortfolioBreakdownTypeAssetClassExposureType[];
	AssetLiquidity?: PortfolioTypePortfolioBreakdownTypeAssetLiquidityType[];
	BondIssuerCompanyBreakdown?: PortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownType[];
	BondRegionalExposure?: PortfolioTypePortfolioBreakdownTypeBondRegionalExposureType[];
	BondSectorBreakdown?: PortfolioTypePortfolioBreakdownTypeBondSectorBreakdownType[];
	CallableBondBreakdown?: PortfolioTypePortfolioBreakdownTypeCallableBondBreakdownType[];
	CashBreakdown?: PortfolioTypePortfolioBreakdownTypeCashBreakdownType[];
	CountryExposure?: PortfolioTypePortfolioBreakdownTypeCountryExposureType[];
	CouponRange?: PortfolioTypePortfolioBreakdownTypeCouponRangeType[];
	CreditQualityBreakdown?: PortfolioTypePortfolioBreakdownTypeCreditQualityBreakdownType[];
	CustomBreakdown?: PortfolioTypePortfolioBreakdownTypeCustomBreakdownType[];
	EconomicMoatBreakdown?: PortfolioTypePortfolioBreakdownTypeEconomicMoatBreakdownType[];
	GICS?: PortfolioTypePortfolioBreakdownTypeGICSType[];
	GlobalBondSector?: PortfolioTypePortfolioBreakdownTypeGlobalBondSectorType[];
	GlobalStockSectorBreakdown?: PortfolioTypePortfolioBreakdownTypeGlobalStockSectorBreakdownType[];
	IndustryBreakdown?: PortfolioTypePortfolioBreakdownTypeIndustryBreakdownType[];
	IndustryGroupBreakdown?: PortfolioTypePortfolioBreakdownTypeIndustryGroupBreakdownType[];
	InvestmentTimeHorizon?: PortfolioTypePortfolioBreakdownTypeInvestmentTimeHorizonType[];
	MarketCapitalBreakdown?: PortfolioTypePortfolioBreakdownTypeMarketCapitalBreakdownType[];
	MaturityRange?: PortfolioTypePortfolioBreakdownTypeMaturityRangeType[];
	MSCICountryBreakdown?: PortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownType[];
	MSCIRegionalExposure?: PortfolioTypePortfolioBreakdownTypeMSCIRegionalExposureType[];
	RegionalAssetAllocation?: PortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationType[];
	RegionalExposure?: PortfolioTypePortfolioBreakdownTypeRegionalExposureType[];
	RegionalGovBondSectorBreakdown?: PortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownType[];
	RiskCurrencyExposure?: PortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureType[];
	SpecialBreakdown?: PortfolioTypePortfolioBreakdownTypeSpecialBreakdownType[];
	SpecializedBreakdown?: PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownType[];
	StockSectorBreakdown?: PortfolioTypePortfolioBreakdownTypeStockSectorBreakdownType[];
	StockTypeBreakdown?: PortfolioTypePortfolioBreakdownTypeStockTypeBreakdownType[];
	StyleBoxBreakdown?: PortfolioTypePortfolioBreakdownTypeStyleBoxBreakdownType[];
}
export interface PortfolioTypePortfolioBreakdownType extends _PortfolioTypePortfolioBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeAssetAllocationType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeAssetAllocationType extends _PortfolioTypePortfolioBreakdownTypeAssetAllocationType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeAssetAllocationType }; }

export interface _PortfolioTypePortfolioBreakdownTypeAssetClassExposureType extends BaseType {
	AssetClassExposureValue: PortfolioTypePortfolioBreakdownTypeAssetClassExposureTypeAssetClassExposureValueType[];
}
export interface PortfolioTypePortfolioBreakdownTypeAssetClassExposureType extends _PortfolioTypePortfolioBreakdownTypeAssetClassExposureType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeAssetClassExposureType }; }

export interface _PortfolioTypePortfolioBreakdownTypeAssetClassExposureTypeAssetClassExposureValueType extends Primitive._boolean {
	AssetClassId: string;
}
export interface PortfolioTypePortfolioBreakdownTypeAssetClassExposureTypeAssetClassExposureValueType extends _PortfolioTypePortfolioBreakdownTypeAssetClassExposureTypeAssetClassExposureValueType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeAssetClassExposureTypeAssetClassExposureValueType }; }

export interface _PortfolioTypePortfolioBreakdownTypeAssetLiquidityType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeAssetLiquidityType extends _PortfolioTypePortfolioBreakdownTypeAssetLiquidityType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeAssetLiquidityType }; }

export interface _PortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownType extends BaseType {
	IssuerCompanyValue?: PortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownTypeIssuerCompanyValueType[];
}
export interface PortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownType extends _PortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownTypeIssuerCompanyValueType extends _nonNegativeSmallRawDecimal {
	CompanyId: string;
}
export interface PortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownTypeIssuerCompanyValueType extends _PortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownTypeIssuerCompanyValueType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeBondIssuerCompanyBreakdownTypeIssuerCompanyValueType }; }

export interface _PortfolioTypePortfolioBreakdownTypeBondRegionalExposureType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeBondRegionalExposureType extends _PortfolioTypePortfolioBreakdownTypeBondRegionalExposureType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeBondRegionalExposureType }; }

export interface _PortfolioTypePortfolioBreakdownTypeBondSectorBreakdownType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeBondSectorBreakdownType extends _PortfolioTypePortfolioBreakdownTypeBondSectorBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeBondSectorBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeCallableBondBreakdownType extends BaseType {
	CallableRatio?: PortfolioTypePortfolioBreakdownTypeCallableBondBreakdownTypeCallableRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeCallableBondBreakdownType extends _PortfolioTypePortfolioBreakdownTypeCallableBondBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeCallableBondBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeCallableBondBreakdownTypeCallableRatioType extends _nonNegativeSmallRawDecimal {
	TimePeriod: string;
}
export interface PortfolioTypePortfolioBreakdownTypeCallableBondBreakdownTypeCallableRatioType extends _PortfolioTypePortfolioBreakdownTypeCallableBondBreakdownTypeCallableRatioType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeCallableBondBreakdownTypeCallableRatioType }; }

export interface _PortfolioTypePortfolioBreakdownTypeCashBreakdownType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeCashBreakdownType extends _PortfolioTypePortfolioBreakdownTypeCashBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeCashBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeCountryExposureType extends BaseType {
	Type: string;
	CountryExposureValue?: PortfolioTypePortfolioBreakdownTypeCountryExposureTypeCountryExposureValueType[];
}
export interface PortfolioTypePortfolioBreakdownTypeCountryExposureType extends _PortfolioTypePortfolioBreakdownTypeCountryExposureType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeCountryExposureType }; }

export interface _PortfolioTypePortfolioBreakdownTypeCountryExposureTypeCountryExposureValueType extends _nonNegativeSmallRawDecimal {
	CountryId: string;
}
export interface PortfolioTypePortfolioBreakdownTypeCountryExposureTypeCountryExposureValueType extends _PortfolioTypePortfolioBreakdownTypeCountryExposureTypeCountryExposureValueType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeCountryExposureTypeCountryExposureValueType }; }

export interface _PortfolioTypePortfolioBreakdownTypeCouponRangeType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeCouponRangeType extends _PortfolioTypePortfolioBreakdownTypeCouponRangeType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeCouponRangeType }; }

export interface _PortfolioTypePortfolioBreakdownTypeCreditQualityBreakdownType extends BaseType {
	Date: Date;
	Surveyed: boolean;
	BreakdownValue?: smallRawDecimalRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeCreditQualityBreakdownType extends _PortfolioTypePortfolioBreakdownTypeCreditQualityBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeCreditQualityBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeCustomBreakdownType extends BaseType {
	Date: Date;
	Type: number;
	BreakdownValue: PortfolioTypePortfolioBreakdownTypeCustomBreakdownTypeBreakdownValueType[];
}
export interface PortfolioTypePortfolioBreakdownTypeCustomBreakdownType extends _PortfolioTypePortfolioBreakdownTypeCustomBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeCustomBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeCustomBreakdownTypeBreakdownValueType extends _bigRawDecimal {
	Type: string;
}
export interface PortfolioTypePortfolioBreakdownTypeCustomBreakdownTypeBreakdownValueType extends _PortfolioTypePortfolioBreakdownTypeCustomBreakdownTypeBreakdownValueType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeCustomBreakdownTypeBreakdownValueType }; }

export interface _PortfolioTypePortfolioBreakdownTypeEconomicMoatBreakdownType extends BaseType {
	BreakdownValue?: rawRatioType[];
	CoverageRatio?: number;
}
export interface PortfolioTypePortfolioBreakdownTypeEconomicMoatBreakdownType extends _PortfolioTypePortfolioBreakdownTypeEconomicMoatBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeEconomicMoatBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeGICSType extends BaseType {
	GICSBreakdown: PortfolioTypePortfolioBreakdownTypeGICSTypeGICSBreakdownType[];
}
export interface PortfolioTypePortfolioBreakdownTypeGICSType extends _PortfolioTypePortfolioBreakdownTypeGICSType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeGICSType }; }

export interface _PortfolioTypePortfolioBreakdownTypeGICSTypeGICSBreakdownType extends BaseType {
	Type: number;
	BreakdownValue?: rawRatioVarchar10Type[];
}
export interface PortfolioTypePortfolioBreakdownTypeGICSTypeGICSBreakdownType extends _PortfolioTypePortfolioBreakdownTypeGICSTypeGICSBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeGICSTypeGICSBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeGlobalBondSectorType extends BaseType {
	GlobalBondSectorBreakdown?: PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownType[];
	GlobalBondSectorCountryBreakdown?: PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownType[];
}
export interface PortfolioTypePortfolioBreakdownTypeGlobalBondSectorType extends _PortfolioTypePortfolioBreakdownTypeGlobalBondSectorType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeGlobalBondSectorType }; }

export interface _PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownType extends BaseType {
	Level: number;
	BreakdownValue: PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownTypeBreakdownValueType[];
}
export interface PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownType extends _PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownTypeBreakdownValueType extends _nonNegativeSmallRawDecimal {
	Type: number;
}
export interface PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownTypeBreakdownValueType extends _PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownTypeBreakdownValueType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorBreakdownTypeBreakdownValueType }; }

export interface _PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownType extends BaseType {
	Type: number;
	BreakdownValue?: PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownTypeBreakdownValueType[];
}
export interface PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownType extends _PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownTypeBreakdownValueType extends _nonNegativeSmallRawDecimal {
	CountryId: string;
}
export interface PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownTypeBreakdownValueType extends _PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownTypeBreakdownValueType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeGlobalBondSectorTypeGlobalBondSectorCountryBreakdownTypeBreakdownValueType }; }

export interface _PortfolioTypePortfolioBreakdownTypeGlobalStockSectorBreakdownType extends BaseType {
	BreakdownValue?: rawRatioIntegerType[];
}
export interface PortfolioTypePortfolioBreakdownTypeGlobalStockSectorBreakdownType extends _PortfolioTypePortfolioBreakdownTypeGlobalStockSectorBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeGlobalStockSectorBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeIndustryBreakdownType extends BaseType {
	BreakdownValue?: rawRatioIntegerType[];
}
export interface PortfolioTypePortfolioBreakdownTypeIndustryBreakdownType extends _PortfolioTypePortfolioBreakdownTypeIndustryBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeIndustryBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeIndustryGroupBreakdownType extends BaseType {
	BreakdownValue?: rawRatioIntegerType[];
}
export interface PortfolioTypePortfolioBreakdownTypeIndustryGroupBreakdownType extends _PortfolioTypePortfolioBreakdownTypeIndustryGroupBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeIndustryGroupBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeInvestmentTimeHorizonType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeInvestmentTimeHorizonType extends _PortfolioTypePortfolioBreakdownTypeInvestmentTimeHorizonType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeInvestmentTimeHorizonType }; }

export interface _PortfolioTypePortfolioBreakdownTypeMarketCapitalBreakdownType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeMarketCapitalBreakdownType extends _PortfolioTypePortfolioBreakdownTypeMarketCapitalBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeMarketCapitalBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeMaturityRangeType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeMaturityRangeType extends _PortfolioTypePortfolioBreakdownTypeMaturityRangeType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeMaturityRangeType }; }

export interface _PortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownType extends BaseType {
	Type: string;
	MSCICountryBreakdownValue?: PortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownTypeMSCICountryBreakdownValueType[];
}
export interface PortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownType extends _PortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownTypeMSCICountryBreakdownValueType extends _nonNegativeSmallRawDecimal {
	CountryId: string;
}
export interface PortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownTypeMSCICountryBreakdownValueType extends _PortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownTypeMSCICountryBreakdownValueType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeMSCICountryBreakdownTypeMSCICountryBreakdownValueType }; }

export interface _PortfolioTypePortfolioBreakdownTypeMSCIRegionalExposureType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeMSCIRegionalExposureType extends _PortfolioTypePortfolioBreakdownTypeMSCIRegionalExposureType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeMSCIRegionalExposureType }; }

export interface _PortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationType extends BaseType {
	AssetAllocationBreakdown: PortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationTypeAssetAllocationBreakdownType[];
}
export interface PortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationType extends _PortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationType }; }

export interface _PortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationTypeAssetAllocationBreakdownType extends BaseType {
	RegionId: string;
	BreakdownValue: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationTypeAssetAllocationBreakdownType extends _PortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationTypeAssetAllocationBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeRegionalAssetAllocationTypeAssetAllocationBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeRegionalExposureType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeRegionalExposureType extends _PortfolioTypePortfolioBreakdownTypeRegionalExposureType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeRegionalExposureType }; }

export interface _PortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownType extends BaseType {
	RegionalBreakdown: PortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownTypeRegionalBreakdownType;
}
export interface PortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownType extends _PortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownTypeRegionalBreakdownType extends BaseType {
	RegionId: string;
	BreakdownValue: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownTypeRegionalBreakdownType extends _PortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownTypeRegionalBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeRegionalGovBondSectorBreakdownTypeRegionalBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureType extends BaseType {
	Type: string;
	RiskCurrencyExposureValue?: PortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureTypeRiskCurrencyExposureValueType[];
}
export interface PortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureType extends _PortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureType }; }

export interface _PortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureTypeRiskCurrencyExposureValueType extends _smallRawDecimal {
	CurrencyId: string;
}
export interface PortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureTypeRiskCurrencyExposureValueType extends _PortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureTypeRiskCurrencyExposureValueType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeRiskCurrencyExposureTypeRiskCurrencyExposureValueType }; }

export interface _PortfolioTypePortfolioBreakdownTypeSpecialBreakdownType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeSpecialBreakdownType extends _PortfolioTypePortfolioBreakdownTypeSpecialBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeSpecialBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownType extends BaseType {
	SpecializedBreakdownDetail: PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailType[];
}
export interface PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownType extends _PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailType extends BaseType {
	BreakdownType: number;
	Type: string;
	BreakdownValue: PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailTypeBreakdownValueType[];
}
export interface PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailType extends _PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailType }; }

export interface _PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailTypeBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailTypeBreakdownValueType extends _PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailTypeBreakdownValueType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeSpecializedBreakdownTypeSpecializedBreakdownDetailTypeBreakdownValueType }; }

export interface _PortfolioTypePortfolioBreakdownTypeStockSectorBreakdownType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeStockSectorBreakdownType extends _PortfolioTypePortfolioBreakdownTypeStockSectorBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeStockSectorBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeStockTypeBreakdownType extends BaseType {
	BreakdownValue: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeStockTypeBreakdownType extends _PortfolioTypePortfolioBreakdownTypeStockTypeBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeStockTypeBreakdownType }; }

export interface _PortfolioTypePortfolioBreakdownTypeStyleBoxBreakdownType extends BaseType {
	BreakdownValue?: rawRatioType[];
}
export interface PortfolioTypePortfolioBreakdownTypeStyleBoxBreakdownType extends _PortfolioTypePortfolioBreakdownTypeStyleBoxBreakdownType { constructor: { new(): PortfolioTypePortfolioBreakdownTypeStyleBoxBreakdownType }; }

export interface _PortfolioTypePortfolioStatisticsType extends BaseType {
	SalePosition: string;
	BondStatistics?: PortfolioTypePortfolioStatisticsTypeBondStatisticsType;
	EquityStatistics?: PortfolioTypePortfolioStatisticsTypeEquityStatisticsType;
	EquityStyle?: PortfolioTypePortfolioStatisticsTypeEquityStyleType;
}
export interface PortfolioTypePortfolioStatisticsType extends _PortfolioTypePortfolioStatisticsType { constructor: { new(): PortfolioTypePortfolioStatisticsType }; }

export interface _PortfolioTypePortfolioStatisticsTypeBondStatisticsType extends BaseType {
	AltMinTaxExposure?: number;
	AMTExposure?: number;
	AverageCoupon?: number;
	AverageCreditQuality?: number;
	AveragePrice?: number;
	CurrentYield?: number;
	EffectiveDuration?: number;
	EffectiveMaturity?: number;
	ModifiedDuration?: number;
	PreRefundedRatio?: number;
	StyleBox?: number;
	YieldToMaturity?: number;
}
export interface PortfolioTypePortfolioStatisticsTypeBondStatisticsType extends _PortfolioTypePortfolioStatisticsTypeBondStatisticsType { constructor: { new(): PortfolioTypePortfolioStatisticsTypeBondStatisticsType }; }

export interface _PortfolioTypePortfolioStatisticsTypeEquityStatisticsType extends BaseType {
	StoreDate?: Date;
	BookValueYield?: number;
	CashFlowYield?: number;
	CashReturn?: number;
	DividendYield?: number;
	DTC?: number;
	EarningsYield?: number;
	EconomicMoatScore?: number;
	FairValueYield?: number;
	FinancialHealthGrade?: number;
	FreeCashFlowYield?: number;
	GrowthGrade?: number;
	MarketCapital: number;
	NetMargin?: number;
	Past3YearEarningsGrowth?: number;
	ProfitabilityGrade?: number;
	RevenueYield?: number;
	ROA?: number;
	ROE?: number;
	ROIC?: number;
}
export interface PortfolioTypePortfolioStatisticsTypeEquityStatisticsType extends _PortfolioTypePortfolioStatisticsTypeEquityStatisticsType { constructor: { new(): PortfolioTypePortfolioStatisticsTypeEquityStatisticsType }; }

export interface _PortfolioTypePortfolioStatisticsTypeEquityStyleType extends BaseType {
	EquityStyleCoreValue: PortfolioTypePortfolioStatisticsTypeEquityStyleTypeEquityStyleCoreValueType;
	EquityStyleFactor?: PortfolioTypePortfolioStatisticsTypeEquityStyleTypeEquityStyleFactorType;
}
export interface PortfolioTypePortfolioStatisticsTypeEquityStyleType extends _PortfolioTypePortfolioStatisticsTypeEquityStyleType { constructor: { new(): PortfolioTypePortfolioStatisticsTypeEquityStyleType }; }

export interface _PortfolioTypePortfolioStatisticsTypeEquityStyleTypeEquityStyleCoreValueType extends BaseType {
	PTBScore?: number;
	PTEScore?: number;
	SizeScore: number;
	StyleBox: number;
	StyleScore: number;
}
export interface PortfolioTypePortfolioStatisticsTypeEquityStyleTypeEquityStyleCoreValueType extends _PortfolioTypePortfolioStatisticsTypeEquityStyleTypeEquityStyleCoreValueType { constructor: { new(): PortfolioTypePortfolioStatisticsTypeEquityStyleTypeEquityStyleCoreValueType }; }

export interface _PortfolioTypePortfolioStatisticsTypeEquityStyleTypeEquityStyleFactorType extends BaseType {
	Forecasted5YearEarningsGrowth?: number;
	ForecastedBookValueGrowth?: number;
	ForecastedCashFlowGrowth?: number;
	ForecastedEarningsGrowth?: number;
	ForecastedRevenueGrowth?: number;
	ProspectiveBookValueYield?: number;
	ProspectiveCashFlowYield?: number;
	ProspectiveDividendYield?: number;
	ProspectiveEarningsYield?: number;
	ProspectiveRevenueYield?: number;
}
export interface PortfolioTypePortfolioStatisticsTypeEquityStyleTypeEquityStyleFactorType extends _PortfolioTypePortfolioStatisticsTypeEquityStyleTypeEquityStyleFactorType { constructor: { new(): PortfolioTypePortfolioStatisticsTypeEquityStyleTypeEquityStyleFactorType }; }

export interface _PortfolioTypePortfolioSummaryType extends BaseType {
	AggregatedHoldingAggregate?: PortfolioTypePortfolioSummaryTypeAggregatedHoldingAggregateType[];
	Date: Date;
	HoldingAggregate?: PortfolioTypePortfolioSummaryTypeHoldingAggregateType[];
	NetExpenseRatio?: number;
	PreviousPortfolioDate?: Date;
}
export interface PortfolioTypePortfolioSummaryType extends _PortfolioTypePortfolioSummaryType { constructor: { new(): PortfolioTypePortfolioSummaryType }; }

export interface _PortfolioTypePortfolioSummaryTypeAggregatedHoldingAggregateType extends BaseType {
	SalePosition: string;
	NumberOfBondHolding?: number;
	NumberOfHolding: number;
	NumberOfStockHolding?: number;
	TotalMarketValue: PortfolioTypePortfolioSummaryTypeAggregatedHoldingAggregateTypeTotalMarketValueType[];
}
export interface PortfolioTypePortfolioSummaryTypeAggregatedHoldingAggregateType extends _PortfolioTypePortfolioSummaryTypeAggregatedHoldingAggregateType { constructor: { new(): PortfolioTypePortfolioSummaryTypeAggregatedHoldingAggregateType }; }

export interface _PortfolioTypePortfolioSummaryTypeAggregatedHoldingAggregateTypeTotalMarketValueType extends Primitive._number {
	CurrencyId: string;
}
export interface PortfolioTypePortfolioSummaryTypeAggregatedHoldingAggregateTypeTotalMarketValueType extends _PortfolioTypePortfolioSummaryTypeAggregatedHoldingAggregateTypeTotalMarketValueType { constructor: { new(): PortfolioTypePortfolioSummaryTypeAggregatedHoldingAggregateTypeTotalMarketValueType }; }

export interface _PortfolioTypePortfolioSummaryTypeHoldingAggregateType extends BaseType {
	SalePosition: string;
	NumberOfBondHolding?: number;
	NumberOfHolding: number;
	NumberOfStockHolding?: number;
	TotalMarketValue: PortfolioTypePortfolioSummaryTypeHoldingAggregateTypeTotalMarketValueType[];
}
export interface PortfolioTypePortfolioSummaryTypeHoldingAggregateType extends _PortfolioTypePortfolioSummaryTypeHoldingAggregateType { constructor: { new(): PortfolioTypePortfolioSummaryTypeHoldingAggregateType }; }

export interface _PortfolioTypePortfolioSummaryTypeHoldingAggregateTypeTotalMarketValueType extends Primitive._number {
	CurrencyId: string;
}
export interface PortfolioTypePortfolioSummaryTypeHoldingAggregateTypeTotalMarketValueType extends _PortfolioTypePortfolioSummaryTypeHoldingAggregateTypeTotalMarketValueType { constructor: { new(): PortfolioTypePortfolioSummaryTypeHoldingAggregateTypeTotalMarketValueType }; }

export interface _PortfolioTypeSoldOutHoldingType extends BaseType {
	SalePosition: string;
	HoldingDetail: holdingDetailType[];
}
export interface PortfolioTypeSoldOutHoldingType extends _PortfolioTypeSoldOutHoldingType { constructor: { new(): PortfolioTypeSoldOutHoldingType }; }

export interface _PortfolioTypeSurveyDataType extends BaseType {
	MasterPortfolioId: number;
	APRAAustralianSurvey?: PortfolioTypeSurveyDataTypeAPRAAustralianSurveyType;
	AustralianSurvey?: PortfolioTypeSurveyDataTypeAustralianSurveyType;
}
export interface PortfolioTypeSurveyDataType extends _PortfolioTypeSurveyDataType { constructor: { new(): PortfolioTypeSurveyDataType }; }

export interface _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyType extends BaseType {
	APRAAssetAllocation?: PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeAPRAAssetAllocationType;
	APRAGearingProportion?: PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeAPRAGearingProportionType;
	HedgingAPRAAssetAllocation?: PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeHedgingAPRAAssetAllocationType;
	OtherAllocation?: PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeOtherAllocationType;
}
export interface PortfolioTypeSurveyDataTypeAPRAAustralianSurveyType extends _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyType { constructor: { new(): PortfolioTypeSurveyDataTypeAPRAAustralianSurveyType }; }

export interface _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeAPRAAssetAllocationType extends BaseType {
	Type: number;
	BreakdownValue: number;
}
export interface PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeAPRAAssetAllocationType extends _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeAPRAAssetAllocationType { constructor: { new(): PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeAPRAAssetAllocationType }; }

export interface _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeAPRAGearingProportionType extends BaseType {
	Type: number;
	BreakdownValue: number;
}
export interface PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeAPRAGearingProportionType extends _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeAPRAGearingProportionType { constructor: { new(): PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeAPRAGearingProportionType }; }

export interface _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeHedgingAPRAAssetAllocationType extends BaseType {
	Type: number;
	BreakdownValue: number;
}
export interface PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeHedgingAPRAAssetAllocationType extends _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeHedgingAPRAAssetAllocationType { constructor: { new(): PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeHedgingAPRAAssetAllocationType }; }

export interface _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeOtherAllocationType extends BaseType {
	AllocationDetail?: PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeOtherAllocationTypeAllocationDetailType;
}
export interface PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeOtherAllocationType extends _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeOtherAllocationType { constructor: { new(): PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeOtherAllocationType }; }

export interface _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeOtherAllocationTypeAllocationDetailType extends BaseType {
	SecurityExternalId: string;
	Percentage: number;
	SecurityAssetClass: string;
	SecurityDomicileType: number;
	SecurityExternalName: string;
	SecurityType: string;
}
export interface PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeOtherAllocationTypeAllocationDetailType extends _PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeOtherAllocationTypeAllocationDetailType { constructor: { new(): PortfolioTypeSurveyDataTypeAPRAAustralianSurveyTypeOtherAllocationTypeAllocationDetailType }; }

export interface _PortfolioTypeSurveyDataTypeAustralianSurveyType extends BaseType {
	EffectiveDate: Date;
	AssetAllocation?: PortfolioTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationType;
}
export interface PortfolioTypeSurveyDataTypeAustralianSurveyType extends _PortfolioTypeSurveyDataTypeAustralianSurveyType { constructor: { new(): PortfolioTypeSurveyDataTypeAustralianSurveyType }; }

export interface _PortfolioTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationType extends BaseType {
	Type: number;
	BreakdownValue: number;
}
export interface PortfolioTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationType extends _PortfolioTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationType { constructor: { new(): PortfolioTypeSurveyDataTypeAustralianSurveyTypeAssetAllocationType }; }

export type positiveBigRawDecimal = number;
export type _positiveBigRawDecimal = Primitive._number;

export type positiveBigRawExtendedDecimal = number;
export type _positiveBigRawExtendedDecimal = Primitive._number;

export type positiveDecimal199Type = number;
export type _positiveDecimal199Type = Primitive._number;

export type positiveSmallRawDecimal = number;
export type _positiveSmallRawDecimal = Primitive._number;

export type positiveTinyRawExtendedDecimal = number;
export type _positiveTinyRawExtendedDecimal = Primitive._number;

export interface _premiumDiscountType extends BaseType {
	StoreDate: Date;
	Type: number;
	EndDate: Date;
	LastValue?: number;
	PremiumDiscountDetail?: premiumDiscountTypePremiumDiscountDetailType[];
}
export interface premiumDiscountType extends _premiumDiscountType { constructor: { new(): premiumDiscountType }; }
export var premiumDiscountType: { new(): premiumDiscountType };

export interface _premiumDiscountTypePremiumDiscountDetailType extends BaseType {
	TimePeriod: string;
	AverageValue: number;
	HighValue?: number;
	LowValue?: number;
}
export interface premiumDiscountTypePremiumDiscountDetailType extends _premiumDiscountTypePremiumDiscountDetailType { constructor: { new(): premiumDiscountTypePremiumDiscountDetailType }; }

export interface _priceByDateType extends _positiveBigRawDecimal {
	Date: Date;
}
export interface priceByDateType extends _priceByDateType { constructor: { new(): priceByDateType }; }
export var priceByDateType: { new(): priceByDateType };

export interface _ProfessionalInformationType extends BaseType {
	Id: string;
	IsFundManager?: boolean;
	Status: string;
	BeneficialOwnership?: BeneficialOwnershipType;
	PersonalInformation: ProfessionalInformationTypePersonalInformationType;
	ProfessionalHistory?: ProfessionalInformationTypeProfessionalHistoryType;
	SpecialtyList?: ProfessionalInformationTypeSpecialtyListType;
}
export interface ProfessionalInformationType extends _ProfessionalInformationType { constructor: { new(): ProfessionalInformationType }; }

export interface _ProfessionalInformationTypePersonalInformationType extends BaseType {
	IsFundManager?: boolean;
	Affiliation?: ProfessionalInformationTypePersonalInformationTypeAffiliationType;
	Biography?: ProfessionalInformationTypePersonalInformationTypeBiographyType;
	BirthDate?: Date;
	CareerStartDate?: Date;
	CareerStartYear?: number;
	Certification?: ProfessionalInformationTypePersonalInformationTypeCertificationType;
	CollegeEducation?: ProfessionalInformationTypePersonalInformationTypeCollegeEducationType;
	ContactInformation?: ContactInformationType;
	FamilyName?: string;
	Gender?: boolean;
	GivenName?: string;
	MiddleName?: string;
	YearOfBirth?: number;
}
export interface ProfessionalInformationTypePersonalInformationType extends _ProfessionalInformationTypePersonalInformationType { constructor: { new(): ProfessionalInformationTypePersonalInformationType }; }

export interface _ProfessionalInformationTypePersonalInformationTypeAffiliationType extends BaseType {
	AffiliationDetail: ProfessionalInformationTypePersonalInformationTypeAffiliationTypeAffiliationDetailType[];
}
export interface ProfessionalInformationTypePersonalInformationTypeAffiliationType extends _ProfessionalInformationTypePersonalInformationTypeAffiliationType { constructor: { new(): ProfessionalInformationTypePersonalInformationTypeAffiliationType }; }

export interface _ProfessionalInformationTypePersonalInformationTypeAffiliationTypeAffiliationDetailType extends BaseType {
	Name: string;
	Title?: string;
}
export interface ProfessionalInformationTypePersonalInformationTypeAffiliationTypeAffiliationDetailType extends _ProfessionalInformationTypePersonalInformationTypeAffiliationTypeAffiliationDetailType { constructor: { new(): ProfessionalInformationTypePersonalInformationTypeAffiliationTypeAffiliationDetailType }; }

export interface _ProfessionalInformationTypePersonalInformationTypeBiographyType extends BaseType {
	LanguageId?: string;
	ManagerProvidedBiography?: string[];
	ProfessionalBiography?: string[];
	SupplementaryBiography?: string[];
}
export interface ProfessionalInformationTypePersonalInformationTypeBiographyType extends _ProfessionalInformationTypePersonalInformationTypeBiographyType { constructor: { new(): ProfessionalInformationTypePersonalInformationTypeBiographyType }; }

export interface _ProfessionalInformationTypePersonalInformationTypeCertificationType extends BaseType {
	CertificationDetail: ProfessionalInformationTypePersonalInformationTypeCertificationTypeCertificationDetailType[];
}
export interface ProfessionalInformationTypePersonalInformationTypeCertificationType extends _ProfessionalInformationTypePersonalInformationTypeCertificationType { constructor: { new(): ProfessionalInformationTypePersonalInformationTypeCertificationType }; }

export interface _ProfessionalInformationTypePersonalInformationTypeCertificationTypeCertificationDetailType extends BaseType {
	Name: string;
	Year?: number;
}
export interface ProfessionalInformationTypePersonalInformationTypeCertificationTypeCertificationDetailType extends _ProfessionalInformationTypePersonalInformationTypeCertificationTypeCertificationDetailType { constructor: { new(): ProfessionalInformationTypePersonalInformationTypeCertificationTypeCertificationDetailType }; }

export interface _ProfessionalInformationTypePersonalInformationTypeCollegeEducationType extends BaseType {
	CollegeEducationDetail: ProfessionalInformationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailType[];
}
export interface ProfessionalInformationTypePersonalInformationTypeCollegeEducationType extends _ProfessionalInformationTypePersonalInformationTypeCollegeEducationType { constructor: { new(): ProfessionalInformationTypePersonalInformationTypeCollegeEducationType }; }

export interface _ProfessionalInformationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailType extends BaseType {
	Degree?: ProfessionalInformationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailTypeDegreeType;
	Major?: string;
	School: string;
	Year?: number;
}
export interface ProfessionalInformationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailType extends _ProfessionalInformationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailType { constructor: { new(): ProfessionalInformationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailType }; }

export interface _ProfessionalInformationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailTypeDegreeType extends _varchar10 {}
export interface ProfessionalInformationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailTypeDegreeType extends _ProfessionalInformationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailTypeDegreeType { constructor: { new(): ProfessionalInformationTypePersonalInformationTypeCollegeEducationTypeCollegeEducationDetailTypeDegreeType }; }

export interface _ProfessionalInformationTypeProfessionalHistoryType extends BaseType {
	ProfessionalHistoryDetail: ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailType[];
}
export interface ProfessionalInformationTypeProfessionalHistoryType extends _ProfessionalInformationTypeProfessionalHistoryType { constructor: { new(): ProfessionalInformationTypeProfessionalHistoryType }; }

export interface _ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailType extends BaseType {
	CompanyName: ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeCompanyNameType;
	RoleList?: ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListType;
}
export interface ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailType extends _ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailType { constructor: { new(): ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailType }; }

export interface _ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeCompanyNameType extends _varchar75 {
	Id: string;
}
export interface ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeCompanyNameType extends _ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeCompanyNameType { constructor: { new(): ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeCompanyNameType }; }

export interface _ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListType extends BaseType {
	RoleDetail: ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailType[];
}
export interface ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListType extends _ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListType { constructor: { new(): ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListType }; }

export interface _ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailType extends BaseType {
	EndYear?: number;
	ProfessionalTitle?: ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailTypeProfessionalTitleType;
	Responsibility?: string;
	StartYear?: number;
}
export interface ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailType extends _ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailType { constructor: { new(): ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailType }; }

export interface _ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailTypeProfessionalTitleType extends _varchar75 {
	Id: number;
}
export interface ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailTypeProfessionalTitleType extends _ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailTypeProfessionalTitleType { constructor: { new(): ProfessionalInformationTypeProfessionalHistoryTypeProfessionalHistoryDetailTypeRoleListTypeRoleDetailTypeProfessionalTitleType }; }

export interface _ProfessionalInformationTypeSpecialtyListType extends BaseType {
	Specialty: ProfessionalInformationTypeSpecialtyListTypeSpecialtyType[];
}
export interface ProfessionalInformationTypeSpecialtyListType extends _ProfessionalInformationTypeSpecialtyListType { constructor: { new(): ProfessionalInformationTypeSpecialtyListType }; }

export interface _ProfessionalInformationTypeSpecialtyListTypeSpecialtyType extends _varchar50 {
	Id: number;
}
export interface ProfessionalInformationTypeSpecialtyListTypeSpecialtyType extends _ProfessionalInformationTypeSpecialtyListTypeSpecialtyType { constructor: { new(): ProfessionalInformationTypeSpecialtyListTypeSpecialtyType }; }

export interface _ProprietaryDataType extends BaseType {
	AggregatedHoldingCIC?: ProprietaryDataTypeAggregatedHoldingCICType[];
	AggregatedHoldingFitchRating?: ProprietaryDataTypeAggregatedHoldingFitchRatingType[];
	AggregatedHoldingGeographicZone?: ProprietaryDataTypeAggregatedHoldingGeographicZoneType[];
	AggregatedHoldingMoodyRating?: ProprietaryDataTypeAggregatedHoldingMoodyRatingType[];
	AggregatedHoldingNACE?: ProprietaryDataTypeAggregatedHoldingNACEType[];
	AggregatedHoldingPortfolio?: ProprietaryDataTypeAggregatedHoldingPortfolioType[];
	AggregatedPortfolio?: ProprietaryDataTypeAggregatedPortfolioType[];
	AnalystRating?: ProprietaryDataTypeAnalystRatingType[];
	BroadAssetClass?: string[];
	CIC?: ProprietaryDataTypeCICType[];
	FitchRating?: ProprietaryDataTypeFitchRatingType[];
	GeographicZone?: ProprietaryDataTypeGeographicZoneType[];
	GlobalBrandingName?: ProprietaryDataTypeGlobalBrandingNameType[];
	LatestDocuments?: ProprietaryDataTypeLatestDocumentsType[];
	MoodyRating?: ProprietaryDataTypeMoodyRatingType[];
	MorningstarGlobalCategory?: ProprietaryDataTypeMorningstarGlobalCategoryType[];
	NACE?: ProprietaryDataTypeNACEType[];
	Portfolio?: ProprietaryDataTypePortfolioType[];
}
export interface ProprietaryDataType extends _ProprietaryDataType { constructor: { new(): ProprietaryDataType }; }

export interface _ProprietaryDataTypeAggregatedHoldingCICType extends BaseType {
	CICBreakdownValues?: ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesType;
	ShareClassCIC?: string;
	UnMappedCIC?: number;
}
export interface ProprietaryDataTypeAggregatedHoldingCICType extends _ProprietaryDataTypeAggregatedHoldingCICType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingCICType }; }

export interface _ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesType extends BaseType {
	CountryBreakdownValues?: ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeCountryBreakdownValuesType;
	NonCountryBreakdownValues?: ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesType;
}
export interface ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesType extends _ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesType }; }

export interface _ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeCountryBreakdownValuesType extends BaseType {
	CountryBreakdownValue?: ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeCountryBreakdownValuesTypeCountryBreakdownValueType[];
}
export interface ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeCountryBreakdownValuesType extends _ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeCountryBreakdownValuesType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeCountryBreakdownValuesType }; }

export interface _ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeCountryBreakdownValuesTypeCountryBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeCountryBreakdownValuesTypeCountryBreakdownValueType extends _ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeCountryBreakdownValuesTypeCountryBreakdownValueType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeCountryBreakdownValuesTypeCountryBreakdownValueType }; }

export interface _ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesType extends BaseType {
	NonCountryBreakdownValue?: ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesTypeNonCountryBreakdownValueType[];
}
export interface ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesType extends _ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesType }; }

export interface _ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesTypeNonCountryBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesTypeNonCountryBreakdownValueType extends _ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesTypeNonCountryBreakdownValueType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesTypeNonCountryBreakdownValueType }; }

export interface _ProprietaryDataTypeAggregatedHoldingFitchRatingType extends BaseType {
	FitchRatingBreakdownValues?: ProprietaryDataTypeAggregatedHoldingFitchRatingTypeFitchRatingBreakdownValuesType;
}
export interface ProprietaryDataTypeAggregatedHoldingFitchRatingType extends _ProprietaryDataTypeAggregatedHoldingFitchRatingType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingFitchRatingType }; }

export interface _ProprietaryDataTypeAggregatedHoldingFitchRatingTypeFitchRatingBreakdownValuesType extends BaseType {
	FitchRatingBreakdownValue?: ProprietaryDataTypeAggregatedHoldingFitchRatingTypeFitchRatingBreakdownValuesTypeFitchRatingBreakdownValueType[];
}
export interface ProprietaryDataTypeAggregatedHoldingFitchRatingTypeFitchRatingBreakdownValuesType extends _ProprietaryDataTypeAggregatedHoldingFitchRatingTypeFitchRatingBreakdownValuesType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingFitchRatingTypeFitchRatingBreakdownValuesType }; }

export interface _ProprietaryDataTypeAggregatedHoldingFitchRatingTypeFitchRatingBreakdownValuesTypeFitchRatingBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeAggregatedHoldingFitchRatingTypeFitchRatingBreakdownValuesTypeFitchRatingBreakdownValueType extends _ProprietaryDataTypeAggregatedHoldingFitchRatingTypeFitchRatingBreakdownValuesTypeFitchRatingBreakdownValueType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingFitchRatingTypeFitchRatingBreakdownValuesTypeFitchRatingBreakdownValueType }; }

export interface _ProprietaryDataTypeAggregatedHoldingGeographicZoneType extends BaseType {
	GeographicZoneBreakdownValues: ProprietaryDataTypeAggregatedHoldingGeographicZoneTypeGeographicZoneBreakdownValuesType;
}
export interface ProprietaryDataTypeAggregatedHoldingGeographicZoneType extends _ProprietaryDataTypeAggregatedHoldingGeographicZoneType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingGeographicZoneType }; }

export interface _ProprietaryDataTypeAggregatedHoldingGeographicZoneTypeGeographicZoneBreakdownValuesType extends BaseType {
	GeographicZoneBreakdownValue: ProprietaryDataTypeAggregatedHoldingGeographicZoneTypeGeographicZoneBreakdownValuesTypeGeographicZoneBreakdownValueType[];
}
export interface ProprietaryDataTypeAggregatedHoldingGeographicZoneTypeGeographicZoneBreakdownValuesType extends _ProprietaryDataTypeAggregatedHoldingGeographicZoneTypeGeographicZoneBreakdownValuesType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingGeographicZoneTypeGeographicZoneBreakdownValuesType }; }

export interface _ProprietaryDataTypeAggregatedHoldingGeographicZoneTypeGeographicZoneBreakdownValuesTypeGeographicZoneBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeAggregatedHoldingGeographicZoneTypeGeographicZoneBreakdownValuesTypeGeographicZoneBreakdownValueType extends _ProprietaryDataTypeAggregatedHoldingGeographicZoneTypeGeographicZoneBreakdownValuesTypeGeographicZoneBreakdownValueType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingGeographicZoneTypeGeographicZoneBreakdownValuesTypeGeographicZoneBreakdownValueType }; }

export interface _ProprietaryDataTypeAggregatedHoldingMoodyRatingType extends BaseType {
	MoodyRatingBreakdownValues?: ProprietaryDataTypeAggregatedHoldingMoodyRatingTypeMoodyRatingBreakdownValuesType;
}
export interface ProprietaryDataTypeAggregatedHoldingMoodyRatingType extends _ProprietaryDataTypeAggregatedHoldingMoodyRatingType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingMoodyRatingType }; }

export interface _ProprietaryDataTypeAggregatedHoldingMoodyRatingTypeMoodyRatingBreakdownValuesType extends BaseType {
	MoodyRatingBreakdownValue?: ProprietaryDataTypeAggregatedHoldingMoodyRatingTypeMoodyRatingBreakdownValuesTypeMoodyRatingBreakdownValueType[];
}
export interface ProprietaryDataTypeAggregatedHoldingMoodyRatingTypeMoodyRatingBreakdownValuesType extends _ProprietaryDataTypeAggregatedHoldingMoodyRatingTypeMoodyRatingBreakdownValuesType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingMoodyRatingTypeMoodyRatingBreakdownValuesType }; }

export interface _ProprietaryDataTypeAggregatedHoldingMoodyRatingTypeMoodyRatingBreakdownValuesTypeMoodyRatingBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeAggregatedHoldingMoodyRatingTypeMoodyRatingBreakdownValuesTypeMoodyRatingBreakdownValueType extends _ProprietaryDataTypeAggregatedHoldingMoodyRatingTypeMoodyRatingBreakdownValuesTypeMoodyRatingBreakdownValueType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingMoodyRatingTypeMoodyRatingBreakdownValuesTypeMoodyRatingBreakdownValueType }; }

export interface _ProprietaryDataTypeAggregatedHoldingNACEType extends BaseType {
	NACEBreakdownValues?: ProprietaryDataTypeAggregatedHoldingNACETypeNACEBreakdownValuesType;
	UnMappedNACE?: number;
}
export interface ProprietaryDataTypeAggregatedHoldingNACEType extends _ProprietaryDataTypeAggregatedHoldingNACEType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingNACEType }; }

export interface _ProprietaryDataTypeAggregatedHoldingNACETypeNACEBreakdownValuesType extends BaseType {
	NACEBreakdownValue?: ProprietaryDataTypeAggregatedHoldingNACETypeNACEBreakdownValuesTypeNACEBreakdownValueType[];
}
export interface ProprietaryDataTypeAggregatedHoldingNACETypeNACEBreakdownValuesType extends _ProprietaryDataTypeAggregatedHoldingNACETypeNACEBreakdownValuesType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingNACETypeNACEBreakdownValuesType }; }

export interface _ProprietaryDataTypeAggregatedHoldingNACETypeNACEBreakdownValuesTypeNACEBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeAggregatedHoldingNACETypeNACEBreakdownValuesTypeNACEBreakdownValueType extends _ProprietaryDataTypeAggregatedHoldingNACETypeNACEBreakdownValuesTypeNACEBreakdownValueType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingNACETypeNACEBreakdownValuesTypeNACEBreakdownValueType }; }

export interface _ProprietaryDataTypeAggregatedHoldingPortfolioType extends BaseType {
	Date: Date;
	PreviousPortfolioDate: Date;
	PortfolioBreakdown: ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownType;
}
export interface ProprietaryDataTypeAggregatedHoldingPortfolioType extends _ProprietaryDataTypeAggregatedHoldingPortfolioType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingPortfolioType }; }

export interface _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownType extends BaseType {
	SalePosition: string;
	InterestAccrualConventionBreakdown?: ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownType;
	InterestPaymentFrequencyBreakdown?: ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownType;
	PrimaryExchangeBreakdown?: ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownType;
}
export interface ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownType extends _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownType }; }

export interface _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownType extends BaseType {
	BreakdownValue: ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownTypeBreakdownValueType[];
}
export interface ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownType extends _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownType }; }

export interface _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownTypeBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownTypeBreakdownValueType extends _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownTypeBreakdownValueType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownTypeBreakdownValueType }; }

export interface _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownType extends BaseType {
	BreakdownValue: ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownTypeBreakdownValueType[];
}
export interface ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownType extends _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownType }; }

export interface _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownTypeBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownTypeBreakdownValueType extends _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownTypeBreakdownValueType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownTypeBreakdownValueType }; }

export interface _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownType extends BaseType {
	BreakdownValue: ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownTypeBreakdownValueType[];
}
export interface ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownType extends _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownType }; }

export interface _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownTypeBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownTypeBreakdownValueType extends _ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownTypeBreakdownValueType { constructor: { new(): ProprietaryDataTypeAggregatedHoldingPortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownTypeBreakdownValueType }; }

export interface _ProprietaryDataTypeAggregatedPortfolioType extends BaseType {
	Date: Date;
	PreviousPortfolioDate: Date;
	CoverageBreakdownValues: ProprietaryDataTypeAggregatedPortfolioTypeCoverageBreakdownValuesType;
}
export interface ProprietaryDataTypeAggregatedPortfolioType extends _ProprietaryDataTypeAggregatedPortfolioType { constructor: { new(): ProprietaryDataTypeAggregatedPortfolioType }; }

export interface _ProprietaryDataTypeAggregatedPortfolioTypeCoverageBreakdownValuesType extends BaseType {
	SalePosition: string;
	CoverageBreakdownValue: ProprietaryDataTypeAggregatedPortfolioTypeCoverageBreakdownValuesTypeCoverageBreakdownValueType[];
}
export interface ProprietaryDataTypeAggregatedPortfolioTypeCoverageBreakdownValuesType extends _ProprietaryDataTypeAggregatedPortfolioTypeCoverageBreakdownValuesType { constructor: { new(): ProprietaryDataTypeAggregatedPortfolioTypeCoverageBreakdownValuesType }; }

export interface _ProprietaryDataTypeAggregatedPortfolioTypeCoverageBreakdownValuesTypeCoverageBreakdownValueType extends _nonNegativeSmallRawDecimal {
	HoldingElement: string;
}
export interface ProprietaryDataTypeAggregatedPortfolioTypeCoverageBreakdownValuesTypeCoverageBreakdownValueType extends _ProprietaryDataTypeAggregatedPortfolioTypeCoverageBreakdownValuesTypeCoverageBreakdownValueType { constructor: { new(): ProprietaryDataTypeAggregatedPortfolioTypeCoverageBreakdownValuesTypeCoverageBreakdownValueType }; }

export interface _ProprietaryDataTypeAnalystRatingType extends BaseType {
	AnalystRatingValue: number;
}
export interface ProprietaryDataTypeAnalystRatingType extends _ProprietaryDataTypeAnalystRatingType { constructor: { new(): ProprietaryDataTypeAnalystRatingType }; }

export interface _ProprietaryDataTypeCICType extends BaseType {
	CICBreakdownValues?: ProprietaryDataTypeCICTypeCICBreakdownValuesType;
	ShareClassCIC?: string;
	UnMappedCIC?: number;
}
export interface ProprietaryDataTypeCICType extends _ProprietaryDataTypeCICType { constructor: { new(): ProprietaryDataTypeCICType }; }

export interface _ProprietaryDataTypeCICTypeCICBreakdownValuesType extends BaseType {
	CountryBreakdownValues?: ProprietaryDataTypeCICTypeCICBreakdownValuesTypeCountryBreakdownValuesType;
	NonCountryBreakdownValues?: ProprietaryDataTypeCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesType;
}
export interface ProprietaryDataTypeCICTypeCICBreakdownValuesType extends _ProprietaryDataTypeCICTypeCICBreakdownValuesType { constructor: { new(): ProprietaryDataTypeCICTypeCICBreakdownValuesType }; }

export interface _ProprietaryDataTypeCICTypeCICBreakdownValuesTypeCountryBreakdownValuesType extends BaseType {
	CountryBreakdownValue?: ProprietaryDataTypeCICTypeCICBreakdownValuesTypeCountryBreakdownValuesTypeCountryBreakdownValueType[];
}
export interface ProprietaryDataTypeCICTypeCICBreakdownValuesTypeCountryBreakdownValuesType extends _ProprietaryDataTypeCICTypeCICBreakdownValuesTypeCountryBreakdownValuesType { constructor: { new(): ProprietaryDataTypeCICTypeCICBreakdownValuesTypeCountryBreakdownValuesType }; }

export interface _ProprietaryDataTypeCICTypeCICBreakdownValuesTypeCountryBreakdownValuesTypeCountryBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeCICTypeCICBreakdownValuesTypeCountryBreakdownValuesTypeCountryBreakdownValueType extends _ProprietaryDataTypeCICTypeCICBreakdownValuesTypeCountryBreakdownValuesTypeCountryBreakdownValueType { constructor: { new(): ProprietaryDataTypeCICTypeCICBreakdownValuesTypeCountryBreakdownValuesTypeCountryBreakdownValueType }; }

export interface _ProprietaryDataTypeCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesType extends BaseType {
	NonCountryBreakdownValue?: ProprietaryDataTypeCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesTypeNonCountryBreakdownValueType[];
}
export interface ProprietaryDataTypeCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesType extends _ProprietaryDataTypeCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesType { constructor: { new(): ProprietaryDataTypeCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesType }; }

export interface _ProprietaryDataTypeCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesTypeNonCountryBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesTypeNonCountryBreakdownValueType extends _ProprietaryDataTypeCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesTypeNonCountryBreakdownValueType { constructor: { new(): ProprietaryDataTypeCICTypeCICBreakdownValuesTypeNonCountryBreakdownValuesTypeNonCountryBreakdownValueType }; }

export interface _ProprietaryDataTypeFitchRatingType extends BaseType {
	FitchRatingBreakdownValues?: ProprietaryDataTypeFitchRatingTypeFitchRatingBreakdownValuesType;
}
export interface ProprietaryDataTypeFitchRatingType extends _ProprietaryDataTypeFitchRatingType { constructor: { new(): ProprietaryDataTypeFitchRatingType }; }

export interface _ProprietaryDataTypeFitchRatingTypeFitchRatingBreakdownValuesType extends BaseType {
	FitchRatingBreakdownValue?: ProprietaryDataTypeFitchRatingTypeFitchRatingBreakdownValuesTypeFitchRatingBreakdownValueType[];
}
export interface ProprietaryDataTypeFitchRatingTypeFitchRatingBreakdownValuesType extends _ProprietaryDataTypeFitchRatingTypeFitchRatingBreakdownValuesType { constructor: { new(): ProprietaryDataTypeFitchRatingTypeFitchRatingBreakdownValuesType }; }

export interface _ProprietaryDataTypeFitchRatingTypeFitchRatingBreakdownValuesTypeFitchRatingBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeFitchRatingTypeFitchRatingBreakdownValuesTypeFitchRatingBreakdownValueType extends _ProprietaryDataTypeFitchRatingTypeFitchRatingBreakdownValuesTypeFitchRatingBreakdownValueType { constructor: { new(): ProprietaryDataTypeFitchRatingTypeFitchRatingBreakdownValuesTypeFitchRatingBreakdownValueType }; }

export interface _ProprietaryDataTypeGeographicZoneType extends BaseType {
	GeographicZoneBreakdownValues: ProprietaryDataTypeGeographicZoneTypeGeographicZoneBreakdownValuesType;
}
export interface ProprietaryDataTypeGeographicZoneType extends _ProprietaryDataTypeGeographicZoneType { constructor: { new(): ProprietaryDataTypeGeographicZoneType }; }

export interface _ProprietaryDataTypeGeographicZoneTypeGeographicZoneBreakdownValuesType extends BaseType {
	GeographicZoneBreakdownValue: ProprietaryDataTypeGeographicZoneTypeGeographicZoneBreakdownValuesTypeGeographicZoneBreakdownValueType[];
}
export interface ProprietaryDataTypeGeographicZoneTypeGeographicZoneBreakdownValuesType extends _ProprietaryDataTypeGeographicZoneTypeGeographicZoneBreakdownValuesType { constructor: { new(): ProprietaryDataTypeGeographicZoneTypeGeographicZoneBreakdownValuesType }; }

export interface _ProprietaryDataTypeGeographicZoneTypeGeographicZoneBreakdownValuesTypeGeographicZoneBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeGeographicZoneTypeGeographicZoneBreakdownValuesTypeGeographicZoneBreakdownValueType extends _ProprietaryDataTypeGeographicZoneTypeGeographicZoneBreakdownValuesTypeGeographicZoneBreakdownValueType { constructor: { new(): ProprietaryDataTypeGeographicZoneTypeGeographicZoneBreakdownValuesTypeGeographicZoneBreakdownValueType }; }

export interface _ProprietaryDataTypeGlobalBrandingNameType extends BaseType {
	BrandingCompany: ProprietaryDataTypeGlobalBrandingNameTypeBrandingCompanyType;
	CompanyId: string;
}
export interface ProprietaryDataTypeGlobalBrandingNameType extends _ProprietaryDataTypeGlobalBrandingNameType { constructor: { new(): ProprietaryDataTypeGlobalBrandingNameType }; }

export interface _ProprietaryDataTypeGlobalBrandingNameTypeBrandingCompanyType extends _varchar40 {
	Id: string;
}
export interface ProprietaryDataTypeGlobalBrandingNameTypeBrandingCompanyType extends _ProprietaryDataTypeGlobalBrandingNameTypeBrandingCompanyType { constructor: { new(): ProprietaryDataTypeGlobalBrandingNameTypeBrandingCompanyType }; }

export interface _ProprietaryDataTypeLatestDocumentsType extends BaseType {
	DocumentType?: ProprietaryDataTypeLatestDocumentsTypeDocumentTypeType[];
}
export interface ProprietaryDataTypeLatestDocumentsType extends _ProprietaryDataTypeLatestDocumentsType { constructor: { new(): ProprietaryDataTypeLatestDocumentsType }; }

export interface _ProprietaryDataTypeLatestDocumentsTypeDocumentTypeType extends BaseType {
	Type: number;
	Name: string;
	Document: ProprietaryDataTypeLatestDocumentsTypeDocumentTypeTypeDocumentType[];
}
export interface ProprietaryDataTypeLatestDocumentsTypeDocumentTypeType extends _ProprietaryDataTypeLatestDocumentsTypeDocumentTypeType { constructor: { new(): ProprietaryDataTypeLatestDocumentsTypeDocumentTypeType }; }

export interface _ProprietaryDataTypeLatestDocumentsTypeDocumentTypeTypeDocumentType extends Primitive._string {
	CombinedDocument?: number;
	EffectiveDate: Date;
	Format: string;
	Id: string;
	Language: string;
	LanguageId: string;
	Market?: string;
	UpdatedAt: string;
}
export interface ProprietaryDataTypeLatestDocumentsTypeDocumentTypeTypeDocumentType extends _ProprietaryDataTypeLatestDocumentsTypeDocumentTypeTypeDocumentType { constructor: { new(): ProprietaryDataTypeLatestDocumentsTypeDocumentTypeTypeDocumentType }; }

export interface _ProprietaryDataTypeMoodyRatingType extends BaseType {
	MoodyRatingBreakdownValues?: ProprietaryDataTypeMoodyRatingTypeMoodyRatingBreakdownValuesType;
}
export interface ProprietaryDataTypeMoodyRatingType extends _ProprietaryDataTypeMoodyRatingType { constructor: { new(): ProprietaryDataTypeMoodyRatingType }; }

export interface _ProprietaryDataTypeMoodyRatingTypeMoodyRatingBreakdownValuesType extends BaseType {
	MoodyRatingBreakdownValue?: ProprietaryDataTypeMoodyRatingTypeMoodyRatingBreakdownValuesTypeMoodyRatingBreakdownValueType[];
}
export interface ProprietaryDataTypeMoodyRatingTypeMoodyRatingBreakdownValuesType extends _ProprietaryDataTypeMoodyRatingTypeMoodyRatingBreakdownValuesType { constructor: { new(): ProprietaryDataTypeMoodyRatingTypeMoodyRatingBreakdownValuesType }; }

export interface _ProprietaryDataTypeMoodyRatingTypeMoodyRatingBreakdownValuesTypeMoodyRatingBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeMoodyRatingTypeMoodyRatingBreakdownValuesTypeMoodyRatingBreakdownValueType extends _ProprietaryDataTypeMoodyRatingTypeMoodyRatingBreakdownValuesTypeMoodyRatingBreakdownValueType { constructor: { new(): ProprietaryDataTypeMoodyRatingTypeMoodyRatingBreakdownValuesTypeMoodyRatingBreakdownValueType }; }

export interface _ProprietaryDataTypeMorningstarGlobalCategoryType extends _varchar75 {
	Id: string;
}
export interface ProprietaryDataTypeMorningstarGlobalCategoryType extends _ProprietaryDataTypeMorningstarGlobalCategoryType { constructor: { new(): ProprietaryDataTypeMorningstarGlobalCategoryType }; }

export interface _ProprietaryDataTypeNACEType extends BaseType {
	NACEBreakdownValues?: ProprietaryDataTypeNACETypeNACEBreakdownValuesType;
	UnMappedNACE?: number;
}
export interface ProprietaryDataTypeNACEType extends _ProprietaryDataTypeNACEType { constructor: { new(): ProprietaryDataTypeNACEType }; }

export interface _ProprietaryDataTypeNACETypeNACEBreakdownValuesType extends BaseType {
	NACEBreakdownValue?: ProprietaryDataTypeNACETypeNACEBreakdownValuesTypeNACEBreakdownValueType[];
}
export interface ProprietaryDataTypeNACETypeNACEBreakdownValuesType extends _ProprietaryDataTypeNACETypeNACEBreakdownValuesType { constructor: { new(): ProprietaryDataTypeNACETypeNACEBreakdownValuesType }; }

export interface _ProprietaryDataTypeNACETypeNACEBreakdownValuesTypeNACEBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypeNACETypeNACEBreakdownValuesTypeNACEBreakdownValueType extends _ProprietaryDataTypeNACETypeNACEBreakdownValuesTypeNACEBreakdownValueType { constructor: { new(): ProprietaryDataTypeNACETypeNACEBreakdownValuesTypeNACEBreakdownValueType }; }

export interface _ProprietaryDataTypePortfolioType extends BaseType {
	Date: Date;
	PreviousPortfolioDate: Date;
	CoverageBreakdownValues?: ProprietaryDataTypePortfolioTypeCoverageBreakdownValuesType;
	PortfolioBreakdown?: ProprietaryDataTypePortfolioTypePortfolioBreakdownType;
}
export interface ProprietaryDataTypePortfolioType extends _ProprietaryDataTypePortfolioType { constructor: { new(): ProprietaryDataTypePortfolioType }; }

export interface _ProprietaryDataTypePortfolioTypeCoverageBreakdownValuesType extends BaseType {
	SalePosition: string;
	CoverageBreakdownValue: ProprietaryDataTypePortfolioTypeCoverageBreakdownValuesTypeCoverageBreakdownValueType[];
}
export interface ProprietaryDataTypePortfolioTypeCoverageBreakdownValuesType extends _ProprietaryDataTypePortfolioTypeCoverageBreakdownValuesType { constructor: { new(): ProprietaryDataTypePortfolioTypeCoverageBreakdownValuesType }; }

export interface _ProprietaryDataTypePortfolioTypeCoverageBreakdownValuesTypeCoverageBreakdownValueType extends _nonNegativeSmallRawDecimal {
	HoldingElement: string;
}
export interface ProprietaryDataTypePortfolioTypeCoverageBreakdownValuesTypeCoverageBreakdownValueType extends _ProprietaryDataTypePortfolioTypeCoverageBreakdownValuesTypeCoverageBreakdownValueType { constructor: { new(): ProprietaryDataTypePortfolioTypeCoverageBreakdownValuesTypeCoverageBreakdownValueType }; }

export interface _ProprietaryDataTypePortfolioTypePortfolioBreakdownType extends BaseType {
	SalePosition: string;
	InterestAccrualConventionBreakdown?: ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownType;
	InterestPaymentFrequencyBreakdown?: ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownType;
	PrimaryExchangeBreakdown?: ProprietaryDataTypePortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownType;
}
export interface ProprietaryDataTypePortfolioTypePortfolioBreakdownType extends _ProprietaryDataTypePortfolioTypePortfolioBreakdownType { constructor: { new(): ProprietaryDataTypePortfolioTypePortfolioBreakdownType }; }

export interface _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownType extends BaseType {
	BreakdownValue: ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownTypeBreakdownValueType[];
}
export interface ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownType extends _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownType { constructor: { new(): ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownType }; }

export interface _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownTypeBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownTypeBreakdownValueType extends _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownTypeBreakdownValueType { constructor: { new(): ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestAccrualConventionBreakdownTypeBreakdownValueType }; }

export interface _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownType extends BaseType {
	BreakdownValue: ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownTypeBreakdownValueType[];
}
export interface ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownType extends _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownType { constructor: { new(): ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownType }; }

export interface _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownTypeBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownTypeBreakdownValueType extends _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownTypeBreakdownValueType { constructor: { new(): ProprietaryDataTypePortfolioTypePortfolioBreakdownTypeInterestPaymentFrequencyBreakdownTypeBreakdownValueType }; }

export interface _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownType extends BaseType {
	BreakdownValue: ProprietaryDataTypePortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownTypeBreakdownValueType[];
}
export interface ProprietaryDataTypePortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownType extends _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownType { constructor: { new(): ProprietaryDataTypePortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownType }; }

export interface _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownTypeBreakdownValueType extends _smallRawDecimal {
	Type: string;
}
export interface ProprietaryDataTypePortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownTypeBreakdownValueType extends _ProprietaryDataTypePortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownTypeBreakdownValueType { constructor: { new(): ProprietaryDataTypePortfolioTypePortfolioBreakdownTypePrimaryExchangeBreakdownTypeBreakdownValueType }; }

export interface _ratioRangeType extends BaseType {
	MaximumValue?: number;
	MinimumValue?: number;
}
export interface ratioRangeType extends _ratioRangeType { constructor: { new(): ratioRangeType }; }
export var ratioRangeType: { new(): ratioRangeType };

export interface _ratioType extends _nonNegativeSmallDecimal {
	Type: number;
}
export interface ratioType extends _ratioType { constructor: { new(): ratioType }; }
export var ratioType: { new(): ratioType };

export interface _rawRatioIntegerType extends _nonNegativeSmallRawDecimal {
	Type: number;
}
export interface rawRatioIntegerType extends _rawRatioIntegerType { constructor: { new(): rawRatioIntegerType }; }
export var rawRatioIntegerType: { new(): rawRatioIntegerType };

export interface _rawRatioType extends _nonNegativeSmallRawDecimal {
	Type: number;
}
export interface rawRatioType extends _rawRatioType { constructor: { new(): rawRatioType }; }
export var rawRatioType: { new(): rawRatioType };

export interface _rawRatioVarchar10Type extends _nonNegativeSmallRawDecimal {
	Type: string;
}
export interface rawRatioVarchar10Type extends _rawRatioVarchar10Type { constructor: { new(): rawRatioVarchar10Type }; }
export var rawRatioVarchar10Type: { new(): rawRatioVarchar10Type };

export interface _registrationType extends BaseType {
	CountryOfRegistration: registrationTypeCountryOfRegistrationType[];
}
export interface registrationType extends _registrationType { constructor: { new(): registrationType }; }
export var registrationType: { new(): registrationType };

export interface _registrationTypeCountryOfRegistrationType extends BaseType {
	ExternalId?: string;
	DataLink?: linkVarchar10Type;
	ClosedEndToOpenEndSwitchDate?: Date;
	Company?: CompanyType;
	Country: tokenIdChar3Type;
	EndDate?: Date;
	LocalName?: string;
	StartDate?: Date;
}
export interface registrationTypeCountryOfRegistrationType extends _registrationTypeCountryOfRegistrationType { constructor: { new(): registrationTypeCountryOfRegistrationType }; }

export interface _returnType extends BaseType {
	TaxRegionId: string;
	StoreDate: Date;
	Type: number;
	ClosePrice?: number;
	EndDate: Date;
	PriceDate?: Date;
	ReturnDetail?: returnTypeReturnDetailType | returnTypeReturnDetailType[];
	StartDate: Date;
}
export interface returnType extends _returnType { constructor: { new(): returnType }; }
export var returnType: { new(): returnType };

export interface _returnTypeReturnDetailType extends BaseType {
	TimePeriod: string;
	CategoryPerformance?: returnTypeReturnDetailTypeCategoryPerformanceType;
	PeerGroupRank?: peerGroupRankType;
	PeerGroupRankDetail?: returnTypeReturnDetailTypePeerGroupRankDetailType;
	Value?: number;
}
export interface returnTypeReturnDetailType extends _returnTypeReturnDetailType { constructor: { new(): returnTypeReturnDetailType }; }

export interface _returnTypeReturnDetailTypeCategoryPerformanceType extends BaseType {
	Category: returnTypeReturnDetailTypeCategoryPerformanceTypeCategoryType[];
}
export interface returnTypeReturnDetailTypeCategoryPerformanceType extends _returnTypeReturnDetailTypeCategoryPerformanceType { constructor: { new(): returnTypeReturnDetailTypeCategoryPerformanceType }; }

export interface _returnTypeReturnDetailTypeCategoryPerformanceTypeCategoryType extends BaseType {
	Id: string;
	Type: string;
	Name: string;
	PeerGroup?: returnTypeReturnDetailTypeCategoryPerformanceTypeCategoryTypePeerGroupType[];
}
export interface returnTypeReturnDetailTypeCategoryPerformanceTypeCategoryType extends _returnTypeReturnDetailTypeCategoryPerformanceTypeCategoryType { constructor: { new(): returnTypeReturnDetailTypeCategoryPerformanceTypeCategoryType }; }

export interface _returnTypeReturnDetailTypeCategoryPerformanceTypeCategoryTypePeerGroupType extends BaseType {
	Id: number;
	PerformanceId: string;
	RegionId: number;
	Value: number;
}
export interface returnTypeReturnDetailTypeCategoryPerformanceTypeCategoryTypePeerGroupType extends _returnTypeReturnDetailTypeCategoryPerformanceTypeCategoryTypePeerGroupType { constructor: { new(): returnTypeReturnDetailTypeCategoryPerformanceTypeCategoryTypePeerGroupType }; }

export interface _returnTypeReturnDetailTypePeerGroupRankDetailType extends BaseType {
	ClassificationId: string;
	ClassificationMethod: number;
	MarketingRegionId: number;
	PeerGroupId: number;
	AbsoluteRank?: number;
	PercentileRank: number;
}
export interface returnTypeReturnDetailTypePeerGroupRankDetailType extends _returnTypeReturnDetailTypePeerGroupRankDetailType { constructor: { new(): returnTypeReturnDetailTypePeerGroupRankDetailType }; }

export interface _RiskMeasuresRankType extends BaseType {
	RiskMeasuresRankDetail: RiskMeasuresRankTypeRiskMeasuresRankDetailType[];
}
export interface RiskMeasuresRankType extends _RiskMeasuresRankType { constructor: { new(): RiskMeasuresRankType }; }

export interface _RiskMeasuresRankTypeRiskMeasuresRankDetailType extends BaseType {
	TaxRegionId?: string;
	TimePeriod: string;
	Type: number;
	ArithmeticMean?: RiskMeasuresRankTypeRiskMeasuresRankDetailTypeArithmeticMeanType;
	AverageDrawdown?: RiskMeasuresRankTypeRiskMeasuresRankDetailTypeAverageDrawdownType;
	AverageGain?: RiskMeasuresRankTypeRiskMeasuresRankDetailTypeAverageGainType;
	EndDate: Date;
	Kurtosis?: RiskMeasuresRankTypeRiskMeasuresRankDetailTypeKurtosisType;
	MaximumDrawdown?: RiskMeasuresRankTypeRiskMeasuresRankDetailTypeMaximumDrawdownType;
	SharpeRatio?: RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSharpeRatioType;
	Skewness?: RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSkewnessType;
	SortinoRatio?: RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSortinoRatioType;
	StandardDeviation?: RiskMeasuresRankTypeRiskMeasuresRankDetailTypeStandardDeviationType;
}
export interface RiskMeasuresRankTypeRiskMeasuresRankDetailType extends _RiskMeasuresRankTypeRiskMeasuresRankDetailType { constructor: { new(): RiskMeasuresRankTypeRiskMeasuresRankDetailType }; }

export interface _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeArithmeticMeanType extends BaseType {
	PeerGroupRank?: peerGroupRankType;
}
export interface RiskMeasuresRankTypeRiskMeasuresRankDetailTypeArithmeticMeanType extends _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeArithmeticMeanType { constructor: { new(): RiskMeasuresRankTypeRiskMeasuresRankDetailTypeArithmeticMeanType }; }

export interface _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeAverageDrawdownType extends BaseType {
	PeerGroupRank?: peerGroupRankType;
}
export interface RiskMeasuresRankTypeRiskMeasuresRankDetailTypeAverageDrawdownType extends _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeAverageDrawdownType { constructor: { new(): RiskMeasuresRankTypeRiskMeasuresRankDetailTypeAverageDrawdownType }; }

export interface _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeAverageGainType extends BaseType {
	PeerGroupRank?: peerGroupRankType;
}
export interface RiskMeasuresRankTypeRiskMeasuresRankDetailTypeAverageGainType extends _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeAverageGainType { constructor: { new(): RiskMeasuresRankTypeRiskMeasuresRankDetailTypeAverageGainType }; }

export interface _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeKurtosisType extends BaseType {
	PeerGroupRank?: peerGroupRankType;
}
export interface RiskMeasuresRankTypeRiskMeasuresRankDetailTypeKurtosisType extends _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeKurtosisType { constructor: { new(): RiskMeasuresRankTypeRiskMeasuresRankDetailTypeKurtosisType }; }

export interface _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeMaximumDrawdownType extends BaseType {
	PeerGroupRank?: peerGroupRankType;
}
export interface RiskMeasuresRankTypeRiskMeasuresRankDetailTypeMaximumDrawdownType extends _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeMaximumDrawdownType { constructor: { new(): RiskMeasuresRankTypeRiskMeasuresRankDetailTypeMaximumDrawdownType }; }

export interface _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSharpeRatioType extends BaseType {
	PeerGroupRank?: peerGroupRankType;
}
export interface RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSharpeRatioType extends _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSharpeRatioType { constructor: { new(): RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSharpeRatioType }; }

export interface _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSkewnessType extends BaseType {
	PeerGroupRank?: peerGroupRankType;
}
export interface RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSkewnessType extends _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSkewnessType { constructor: { new(): RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSkewnessType }; }

export interface _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSortinoRatioType extends BaseType {
	PeerGroupRank?: peerGroupRankType;
}
export interface RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSortinoRatioType extends _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSortinoRatioType { constructor: { new(): RiskMeasuresRankTypeRiskMeasuresRankDetailTypeSortinoRatioType }; }

export interface _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeStandardDeviationType extends BaseType {
	PeerGroupRank?: peerGroupRankType;
}
export interface RiskMeasuresRankTypeRiskMeasuresRankDetailTypeStandardDeviationType extends _RiskMeasuresRankTypeRiskMeasuresRankDetailTypeStandardDeviationType { constructor: { new(): RiskMeasuresRankTypeRiskMeasuresRankDetailTypeStandardDeviationType }; }

export interface _SeparateAccountOperationType extends BaseType {
	AccountBasics?: SeparateAccountOperationTypeAccountBasicsType;
	AccountConstruction?: SeparateAccountOperationTypeAccountConstructionType;
	AccountNarratives?: SeparateAccountOperationTypeAccountNarrativesType;
}
export interface SeparateAccountOperationType extends _SeparateAccountOperationType { constructor: { new(): SeparateAccountOperationType }; }

export interface _SeparateAccountOperationTypeAccountBasicsType extends BaseType {
	AccountType?: varchar40UnsignedByteType;
	IGSAFundLink?: string;
	TargetMarket: varchar40UnsignedByteType;
}
export interface SeparateAccountOperationTypeAccountBasicsType extends _SeparateAccountOperationTypeAccountBasicsType { constructor: { new(): SeparateAccountOperationTypeAccountBasicsType }; }

export interface _SeparateAccountOperationTypeAccountConstructionType extends BaseType {
	ConstructionAttributes?: SeparateAccountOperationTypeAccountConstructionTypeConstructionAttributesType;
	Customization?: SeparateAccountOperationTypeAccountConstructionTypeCustomizationType;
	NumberOfMonthBeforeComposite?: number;
	PreviousProviderCompany?: SeparateAccountOperationTypeAccountConstructionTypePreviousProviderCompanyType;
	SimulationEndDate?: Date;
	TaxEfficiency?: SeparateAccountOperationTypeAccountConstructionTypeTaxEfficiencyType;
}
export interface SeparateAccountOperationTypeAccountConstructionType extends _SeparateAccountOperationTypeAccountConstructionType { constructor: { new(): SeparateAccountOperationTypeAccountConstructionType }; }

export interface _SeparateAccountOperationTypeAccountConstructionTypeConstructionAttributesType extends BaseType {
	AssetWeighted?: boolean;
	FullDiscretionary?: boolean;
	GrossOfManagementFee?: boolean;
	IncludeTaxableAccount?: boolean;
	IncludeTaxExemptAccount?: boolean;
	IncludeTerminatedAccount?: boolean;
	TimeWeighted?: boolean;
}
export interface SeparateAccountOperationTypeAccountConstructionTypeConstructionAttributesType extends _SeparateAccountOperationTypeAccountConstructionTypeConstructionAttributesType { constructor: { new(): SeparateAccountOperationTypeAccountConstructionTypeConstructionAttributesType }; }

export interface _SeparateAccountOperationTypeAccountConstructionTypeCustomizationType extends BaseType {
	AvailabilityList: SeparateAccountOperationTypeAccountConstructionTypeCustomizationTypeAvailabilityListType;
	MinimumAccountBalance?: number;
	Weighting?: number;
}
export interface SeparateAccountOperationTypeAccountConstructionTypeCustomizationType extends _SeparateAccountOperationTypeAccountConstructionTypeCustomizationType { constructor: { new(): SeparateAccountOperationTypeAccountConstructionTypeCustomizationType }; }

export interface _SeparateAccountOperationTypeAccountConstructionTypeCustomizationTypeAvailabilityListType extends BaseType {
	AvailabilityOption: nonNegativeIntegerUnsignedByteType[];
}
export interface SeparateAccountOperationTypeAccountConstructionTypeCustomizationTypeAvailabilityListType extends _SeparateAccountOperationTypeAccountConstructionTypeCustomizationTypeAvailabilityListType { constructor: { new(): SeparateAccountOperationTypeAccountConstructionTypeCustomizationTypeAvailabilityListType }; }

export interface _SeparateAccountOperationTypeAccountConstructionTypePreviousProviderCompanyType extends BaseType {
	EndDate: Date;
	PreservePerformanceRecord: boolean;
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface SeparateAccountOperationTypeAccountConstructionTypePreviousProviderCompanyType extends _SeparateAccountOperationTypeAccountConstructionTypePreviousProviderCompanyType { constructor: { new(): SeparateAccountOperationTypeAccountConstructionTypePreviousProviderCompanyType }; }

export interface _SeparateAccountOperationTypeAccountConstructionTypeTaxEfficiencyType extends BaseType {
	AvailabilityList: SeparateAccountOperationTypeAccountConstructionTypeTaxEfficiencyTypeAvailabilityListType;
	MinimumAccountBalance?: number;
	Weighting?: number;
}
export interface SeparateAccountOperationTypeAccountConstructionTypeTaxEfficiencyType extends _SeparateAccountOperationTypeAccountConstructionTypeTaxEfficiencyType { constructor: { new(): SeparateAccountOperationTypeAccountConstructionTypeTaxEfficiencyType }; }

export interface _SeparateAccountOperationTypeAccountConstructionTypeTaxEfficiencyTypeAvailabilityListType extends BaseType {
	AvailabilityOption: nonNegativeIntegerUnsignedByteType[];
}
export interface SeparateAccountOperationTypeAccountConstructionTypeTaxEfficiencyTypeAvailabilityListType extends _SeparateAccountOperationTypeAccountConstructionTypeTaxEfficiencyTypeAvailabilityListType { constructor: { new(): SeparateAccountOperationTypeAccountConstructionTypeTaxEfficiencyTypeAvailabilityListType }; }

export interface _SeparateAccountOperationTypeAccountNarrativesType extends BaseType {
	Disclosure?: string;
	PurchaseRequirement?: string;
}
export interface SeparateAccountOperationTypeAccountNarrativesType extends _SeparateAccountOperationTypeAccountNarrativesType { constructor: { new(): SeparateAccountOperationTypeAccountNarrativesType }; }

export interface _shareIssuedDetailType extends BaseType {
	IPOValue: boolean;
	AssetRaised?: number;
	CommonAssetRaised?: number;
	CommonShareOutstanding?: number;
	Date?: Date;
	NumberOfShareHolder?: number;
	PreferredAssetRaised?: number;
	ShareAuthorized?: number;
	ShareOutstanding?: number;
	SharePubliclyTraded?: number;
}
export interface shareIssuedDetailType extends _shareIssuedDetailType { constructor: { new(): shareIssuedDetailType }; }
export var shareIssuedDetailType: { new(): shareIssuedDetailType };

export type smallDecimal = number;
export type _smallDecimal = Primitive._number;

export type smallRawDecimal = number;
export type _smallRawDecimal = Primitive._number;

export interface _smallRawDecimalEndDateType extends BaseType {
	EndDate: Date;
	Value: number;
}
export interface smallRawDecimalEndDateType extends _smallRawDecimalEndDateType { constructor: { new(): smallRawDecimalEndDateType }; }
export var smallRawDecimalEndDateType: { new(): smallRawDecimalEndDateType };

export interface _smallRawDecimalRatioType extends _smallRawDecimal {
	Type: number;
}
export interface smallRawDecimalRatioType extends _smallRawDecimalRatioType { constructor: { new(): smallRawDecimalRatioType }; }
export var smallRawDecimalRatioType: { new(): smallRawDecimalRatioType };

export interface _SP_CodeAndValueType extends BaseType {
	Accreditation?: string[];
	DeferLoad?: SP_CodeAndValueTypeDeferLoadType[];
	DetailedCode?: string[];
	EUMainSectorCode?: string[];
	FocusShareList?: SP_CodeAndValueTypeFocusShareListType[];
	FundPortfolioCode?: string[];
	FundSizeHistory?: SP_CodeAndValueTypeFundSizeHistoryType[];
	FundURL?: string[];
	GIFSCode?: string[];
	IMAPrimaryShareClass?: string[];
	InvestmentAreaCode?: string[];
	Max12B1Fee?: number[];
	PrimaryFundList?: SP_CodeAndValueTypePrimaryFundListType[];
	PrimaryLifePensionShare?: boolean[];
	PrivateFund?: boolean[];
	RegularSavingsAmount?: number[];
	RegularSavingsFlag?: boolean[];
	RestrictedDistribution: string[];
	RestructureDate?: Date[];
	SalesRestriction?: string[];
	SPCreditRating?: string[];
	SpecialistSectorCode?: string[];
	SPId?: string;
	SPLegalStructure?: string[];
	StyleSectorCode?: string[];
	USAFeature?: SP_CodeAndValueTypeUSAFeatureType[];
}
export interface SP_CodeAndValueType extends _SP_CodeAndValueType { constructor: { new(): SP_CodeAndValueType }; }

export interface _SP_CodeAndValueTypeDeferLoadType extends BaseType {
	Date: Date;
	DeferLoadInvestmentLevel: SP_CodeAndValueTypeDeferLoadTypeDeferLoadInvestmentLevelType[];
}
export interface SP_CodeAndValueTypeDeferLoadType extends _SP_CodeAndValueTypeDeferLoadType { constructor: { new(): SP_CodeAndValueTypeDeferLoadType }; }

export interface _SP_CodeAndValueTypeDeferLoadTypeDeferLoadInvestmentLevelType extends BaseType {
	BreakpointUnit: number;
	FeeSchedule: feeScheduleNonNegativeSmallRawDecimalType[];
	HighBreakpoint?: number;
	LowBreakpoint: number;
}
export interface SP_CodeAndValueTypeDeferLoadTypeDeferLoadInvestmentLevelType extends _SP_CodeAndValueTypeDeferLoadTypeDeferLoadInvestmentLevelType { constructor: { new(): SP_CodeAndValueTypeDeferLoadTypeDeferLoadInvestmentLevelType }; }

export interface _SP_CodeAndValueTypeFocusShareListType extends BaseType {
	FocusShare: SP_CodeAndValueTypeFocusShareListTypeFocusShareType[];
}
export interface SP_CodeAndValueTypeFocusShareListType extends _SP_CodeAndValueTypeFocusShareListType { constructor: { new(): SP_CodeAndValueTypeFocusShareListType }; }

export interface _SP_CodeAndValueTypeFocusShareListTypeFocusShareType extends BaseType {
	PerformanceId: string;
	IsCoreForShareClass: boolean;
	ClassCode: string;
	FocusId?: string;
	LIFSCode?: string;
	RegisteredShareList?: SP_CodeAndValueTypeFocusShareListTypeFocusShareTypeRegisteredShareListType;
}
export interface SP_CodeAndValueTypeFocusShareListTypeFocusShareType extends _SP_CodeAndValueTypeFocusShareListTypeFocusShareType { constructor: { new(): SP_CodeAndValueTypeFocusShareListTypeFocusShareType }; }

export interface _SP_CodeAndValueTypeFocusShareListTypeFocusShareTypeRegisteredShareListType extends BaseType {
	RegisteredShare: SP_CodeAndValueTypeFocusShareListTypeFocusShareTypeRegisteredShareListTypeRegisteredShareType[];
}
export interface SP_CodeAndValueTypeFocusShareListTypeFocusShareTypeRegisteredShareListType extends _SP_CodeAndValueTypeFocusShareListTypeFocusShareTypeRegisteredShareListType { constructor: { new(): SP_CodeAndValueTypeFocusShareListTypeFocusShareTypeRegisteredShareListType }; }

export interface _SP_CodeAndValueTypeFocusShareListTypeFocusShareTypeRegisteredShareListTypeRegisteredShareType extends BaseType {
	PerformanceId: string;
	LIFSCode?: string;
	RegisteredClassCode: string;
	RegisteredShareFocusId?: string;
}
export interface SP_CodeAndValueTypeFocusShareListTypeFocusShareTypeRegisteredShareListTypeRegisteredShareType extends _SP_CodeAndValueTypeFocusShareListTypeFocusShareTypeRegisteredShareListTypeRegisteredShareType { constructor: { new(): SP_CodeAndValueTypeFocusShareListTypeFocusShareTypeRegisteredShareListTypeRegisteredShareType }; }

export interface _SP_CodeAndValueTypeFundSizeHistoryType extends BaseType {
	CurrencyId: string;
	FundSize: SP_CodeAndValueTypeFundSizeHistoryTypeFundSizeType[];
}
export interface SP_CodeAndValueTypeFundSizeHistoryType extends _SP_CodeAndValueTypeFundSizeHistoryType { constructor: { new(): SP_CodeAndValueTypeFundSizeHistoryType }; }

export interface _SP_CodeAndValueTypeFundSizeHistoryTypeFundSizeType extends BaseType {
	Date: Date;
	Value: number;
}
export interface SP_CodeAndValueTypeFundSizeHistoryTypeFundSizeType extends _SP_CodeAndValueTypeFundSizeHistoryTypeFundSizeType { constructor: { new(): SP_CodeAndValueTypeFundSizeHistoryTypeFundSizeType }; }

export interface _SP_CodeAndValueTypePrimaryFundListType extends BaseType {
	PrimaryFundForClass: SP_CodeAndValueTypePrimaryFundListTypePrimaryFundForClassType[];
}
export interface SP_CodeAndValueTypePrimaryFundListType extends _SP_CodeAndValueTypePrimaryFundListType { constructor: { new(): SP_CodeAndValueTypePrimaryFundListType }; }

export interface _SP_CodeAndValueTypePrimaryFundListTypePrimaryFundForClassType extends BaseType {
	ClassCode: string;
	Id?: string;
	PerformanceId?: string;
	SPId?: string;
}
export interface SP_CodeAndValueTypePrimaryFundListTypePrimaryFundForClassType extends _SP_CodeAndValueTypePrimaryFundListTypePrimaryFundForClassType { constructor: { new(): SP_CodeAndValueTypePrimaryFundListTypePrimaryFundForClassType }; }

export interface _SP_CodeAndValueTypeUSAFeatureType extends BaseType {
	AffinityFund: boolean;
	AvailableFor401KPlan: boolean;
	AvailableThroughFundSupermarket: boolean;
	CloseToAllIRAInvestment: boolean;
	CloseToNewIRAInvestment: boolean;
	EmployeeOnly: boolean;
	KeoghPlan: boolean;
}
export interface SP_CodeAndValueTypeUSAFeatureType extends _SP_CodeAndValueTypeUSAFeatureType { constructor: { new(): SP_CodeAndValueTypeUSAFeatureType }; }

export type SRRIRank = number;
export type _SRRIRank = Primitive._number;

export interface _StrategyType extends BaseType {
	Id: string;
	HistoricalOperation?: HistoricalOperationType;
	InvestmentApproach?: StrategyTypeInvestmentApproachType;
	Performance?: PerformanceType;
	StrategyAttributes?: StrategyTypeStrategyAttributesType;
	StrategyBasics: StrategyTypeStrategyBasicsType;
	StrategyManagement?: StrategyTypeStrategyManagementType;
}
export interface StrategyType extends _StrategyType { constructor: { new(): StrategyType }; }

export interface _StrategyTypeInvestmentApproachType extends BaseType {
	AssetAllocationStrategy?: StrategyTypeInvestmentApproachTypeAssetAllocationStrategyType;
	FixedIncomeStrategy?: StrategyTypeInvestmentApproachTypeFixedIncomeStrategyType;
	IndexingApproach?: StrategyTypeInvestmentApproachTypeIndexingApproachType;
	InvestmentAnalysis?: StrategyTypeInvestmentApproachTypeInvestmentAnalysisType;
	InvestmentBias?: StrategyTypeInvestmentApproachTypeInvestmentBiasType;
	ManagementApproach?: StrategyTypeInvestmentApproachTypeManagementApproachType;
	PortfolioManagement?: StrategyTypeInvestmentApproachTypePortfolioManagementType;
	RiskHedging?: StrategyTypeInvestmentApproachTypeRiskHedgingType;
	SecurityAllocation?: StrategyTypeInvestmentApproachTypeSecurityAllocationType;
}
export interface StrategyTypeInvestmentApproachType extends _StrategyTypeInvestmentApproachType { constructor: { new(): StrategyTypeInvestmentApproachType }; }

export interface _StrategyTypeInvestmentApproachTypeAssetAllocationStrategyType extends BaseType {
	StrategicAllocation: boolean;
	TacticalAllocation: boolean;
}
export interface StrategyTypeInvestmentApproachTypeAssetAllocationStrategyType extends _StrategyTypeInvestmentApproachTypeAssetAllocationStrategyType { constructor: { new(): StrategyTypeInvestmentApproachTypeAssetAllocationStrategyType }; }

export interface _StrategyTypeInvestmentApproachTypeFixedIncomeStrategyType extends BaseType {
	IndividualSecuritySelection: boolean;
	InterestRateExpectation: boolean;
	OptionAdjustedSpreadBased: boolean;
	SectorRotation: boolean;
	YieldCurve: boolean;
}
export interface StrategyTypeInvestmentApproachTypeFixedIncomeStrategyType extends _StrategyTypeInvestmentApproachTypeFixedIncomeStrategyType { constructor: { new(): StrategyTypeInvestmentApproachTypeFixedIncomeStrategyType }; }

export interface _StrategyTypeInvestmentApproachTypeIndexingApproachType extends BaseType {
	CensusReplication: boolean;
	FullReplication: boolean;
	Optimization: boolean;
	StratifiedSampling: boolean;
	Structured: boolean;
	Synthetic: boolean;
}
export interface StrategyTypeInvestmentApproachTypeIndexingApproachType extends _StrategyTypeInvestmentApproachTypeIndexingApproachType { constructor: { new(): StrategyTypeInvestmentApproachTypeIndexingApproachType }; }

export interface _StrategyTypeInvestmentApproachTypeInvestmentAnalysisType extends BaseType {
	FundamentalAnalysis: boolean;
	QuantitativeAnalysis: boolean;
	TechnicalAnalysis: boolean;
}
export interface StrategyTypeInvestmentApproachTypeInvestmentAnalysisType extends _StrategyTypeInvestmentApproachTypeInvestmentAnalysisType { constructor: { new(): StrategyTypeInvestmentApproachTypeInvestmentAnalysisType }; }

export interface _StrategyTypeInvestmentApproachTypeInvestmentBiasType extends BaseType {
	Arbitrage?: boolean;
	LongBiased?: boolean;
	LongOnly?: boolean;
	LongShortVariable?: boolean;
	MarketNeutral?: boolean;
	ShortBiased?: boolean;
	ShortOnly?: boolean;
}
export interface StrategyTypeInvestmentApproachTypeInvestmentBiasType extends _StrategyTypeInvestmentApproachTypeInvestmentBiasType { constructor: { new(): StrategyTypeInvestmentApproachTypeInvestmentBiasType }; }

export interface _StrategyTypeInvestmentApproachTypeManagementApproachType extends BaseType {
	ActivelyManaged: boolean;
	EnhancedIndex: boolean;
	PassivelyManaged: boolean;
}
export interface StrategyTypeInvestmentApproachTypeManagementApproachType extends _StrategyTypeInvestmentApproachTypeManagementApproachType { constructor: { new(): StrategyTypeInvestmentApproachTypeManagementApproachType }; }

export interface _StrategyTypeInvestmentApproachTypePortfolioManagementType extends BaseType {
	Concentrated: boolean;
	CoreGroupPositions: boolean;
	Diversified: boolean;
	Thematic: boolean;
}
export interface StrategyTypeInvestmentApproachTypePortfolioManagementType extends _StrategyTypeInvestmentApproachTypePortfolioManagementType { constructor: { new(): StrategyTypeInvestmentApproachTypePortfolioManagementType }; }

export interface _StrategyTypeInvestmentApproachTypeRiskHedgingType extends BaseType {
	RiskHedgingDetail: StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailType[];
}
export interface StrategyTypeInvestmentApproachTypeRiskHedgingType extends _StrategyTypeInvestmentApproachTypeRiskHedgingType { constructor: { new(): StrategyTypeInvestmentApproachTypeRiskHedgingType }; }

export interface _StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailType extends BaseType {
	Type: number;
	HedgingMethod: StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailTypeHedgingMethodType;
	HedgingScope: StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailTypeHedgingScopeType;
}
export interface StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailType extends _StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailType { constructor: { new(): StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailType }; }

export interface _StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailTypeHedgingMethodType extends BaseType {
	FuturesHedging: boolean;
	OptionsHedging: boolean;
	SecuritiesHedging: boolean;
	Swaps: boolean;
}
export interface StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailTypeHedgingMethodType extends _StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailTypeHedgingMethodType { constructor: { new(): StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailTypeHedgingMethodType }; }

export interface _StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailTypeHedgingScopeType extends BaseType {
	FrequentlyHedged: boolean;
	FullyHedged: boolean;
}
export interface StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailTypeHedgingScopeType extends _StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailTypeHedgingScopeType { constructor: { new(): StrategyTypeInvestmentApproachTypeRiskHedgingTypeRiskHedgingDetailTypeHedgingScopeType }; }

export interface _StrategyTypeInvestmentApproachTypeSecurityAllocationType extends BaseType {
	SecuritySelectionApproach: StrategyTypeInvestmentApproachTypeSecurityAllocationTypeSecuritySelectionApproachType[];
}
export interface StrategyTypeInvestmentApproachTypeSecurityAllocationType extends _StrategyTypeInvestmentApproachTypeSecurityAllocationType { constructor: { new(): StrategyTypeInvestmentApproachTypeSecurityAllocationType }; }

export interface _StrategyTypeInvestmentApproachTypeSecurityAllocationTypeSecuritySelectionApproachType extends BaseType {
	SelectionScope: number;
	BottomUp: boolean;
	TopDown: boolean;
}
export interface StrategyTypeInvestmentApproachTypeSecurityAllocationTypeSecuritySelectionApproachType extends _StrategyTypeInvestmentApproachTypeSecurityAllocationTypeSecuritySelectionApproachType { constructor: { new(): StrategyTypeInvestmentApproachTypeSecurityAllocationTypeSecuritySelectionApproachType }; }

export interface _StrategyTypeStrategyAttributesType extends BaseType {
	CommunityResponsible?: boolean;
	ConsumerResponsible?: boolean;
	CurrencyHedging?: boolean;
	DerivativeInvesting?: boolean;
	EnvironmentalConscious?: boolean;
	GlobalInvesting?: boolean;
	LaborSensitive?: boolean;
	ReligiousAwareness?: boolean;
	SecurityLending?: boolean;
	ShortSecurity?: boolean;
	SingleHedgingStrategy?: boolean;
	SociallyResponsible?: boolean;
}
export interface StrategyTypeStrategyAttributesType extends _StrategyTypeStrategyAttributesType { constructor: { new(): StrategyTypeStrategyAttributesType }; }

export interface _StrategyTypeStrategyBasicsType extends BaseType {
	StrategyGroupId: string;
	InceptionDate?: Date;
	Name: string;
	OfferingFrequency?: string;
	PrimaryBenchmark?: StrategyTypeStrategyBasicsTypePrimaryBenchmarkType;
	SecondaryBenchmark?: StrategyTypeStrategyBasicsTypeSecondaryBenchmarkType;
}
export interface StrategyTypeStrategyBasicsType extends _StrategyTypeStrategyBasicsType { constructor: { new(): StrategyTypeStrategyBasicsType }; }

export interface _StrategyTypeStrategyBasicsTypePrimaryBenchmarkType extends BaseType {
	HoldingDetail: holdingDetailType[];
}
export interface StrategyTypeStrategyBasicsTypePrimaryBenchmarkType extends _StrategyTypeStrategyBasicsTypePrimaryBenchmarkType { constructor: { new(): StrategyTypeStrategyBasicsTypePrimaryBenchmarkType }; }

export interface _StrategyTypeStrategyBasicsTypeSecondaryBenchmarkType extends BaseType {
	HoldingDetail: holdingDetailType[];
}
export interface StrategyTypeStrategyBasicsTypeSecondaryBenchmarkType extends _StrategyTypeStrategyBasicsTypeSecondaryBenchmarkType { constructor: { new(): StrategyTypeStrategyBasicsTypeSecondaryBenchmarkType }; }

export interface _StrategyTypeStrategyManagementType extends BaseType {
	ContractualLimit?: StrategyTypeStrategyManagementTypeContractualLimitType;
	MinimumInvestment?: StrategyTypeStrategyManagementTypeMinimumInvestmentType[];
	PercentFromExternalResearch?: number;
	ProviderCompany: StrategyTypeStrategyManagementTypeProviderCompanyType;
	StrategyAvailability?: StrategyTypeStrategyManagementTypeStrategyAvailabilityType;
}
export interface StrategyTypeStrategyManagementType extends _StrategyTypeStrategyManagementType { constructor: { new(): StrategyTypeStrategyManagementType }; }

export interface _StrategyTypeStrategyManagementTypeContractualLimitType extends BaseType {
	ContractualLimitDetail: StrategyTypeStrategyManagementTypeContractualLimitTypeContractualLimitDetailType[];
}
export interface StrategyTypeStrategyManagementTypeContractualLimitType extends _StrategyTypeStrategyManagementTypeContractualLimitType { constructor: { new(): StrategyTypeStrategyManagementTypeContractualLimitType }; }

export interface _StrategyTypeStrategyManagementTypeContractualLimitTypeContractualLimitDetailType extends BaseType {
	Unit: number;
	Type: number;
	HighValue: number;
	LowValue: number;
}
export interface StrategyTypeStrategyManagementTypeContractualLimitTypeContractualLimitDetailType extends _StrategyTypeStrategyManagementTypeContractualLimitTypeContractualLimitDetailType { constructor: { new(): StrategyTypeStrategyManagementTypeContractualLimitTypeContractualLimitDetailType }; }

export interface _StrategyTypeStrategyManagementTypeMinimumInvestmentType extends BaseType {
	Type?: number;
	Date: Date;
	InitialInvestment?: unitInteger;
}
export interface StrategyTypeStrategyManagementTypeMinimumInvestmentType extends _StrategyTypeStrategyManagementTypeMinimumInvestmentType { constructor: { new(): StrategyTypeStrategyManagementTypeMinimumInvestmentType }; }

export interface _StrategyTypeStrategyManagementTypeProviderCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface StrategyTypeStrategyManagementTypeProviderCompanyType extends _StrategyTypeStrategyManagementTypeProviderCompanyType { constructor: { new(): StrategyTypeStrategyManagementTypeProviderCompanyType }; }

export interface _StrategyTypeStrategyManagementTypeStrategyAvailabilityType extends BaseType {
	CollectiveInvestmentTrust?: boolean;
	MutualFund?: boolean;
	SeparateAccountAvailability?: StrategyTypeStrategyManagementTypeStrategyAvailabilityTypeSeparateAccountAvailabilityType;
}
export interface StrategyTypeStrategyManagementTypeStrategyAvailabilityType extends _StrategyTypeStrategyManagementTypeStrategyAvailabilityType { constructor: { new(): StrategyTypeStrategyManagementTypeStrategyAvailabilityType }; }

export interface _StrategyTypeStrategyManagementTypeStrategyAvailabilityTypeSeparateAccountAvailabilityType extends BaseType {
	Institutional: boolean;
	MultipleStrategyPortfolio: boolean;
	SeparateManagedAccount: boolean;
	UnifiedManagedAccount: boolean;
}
export interface StrategyTypeStrategyManagementTypeStrategyAvailabilityTypeSeparateAccountAvailabilityType extends _StrategyTypeStrategyManagementTypeStrategyAvailabilityTypeSeparateAccountAvailabilityType { constructor: { new(): StrategyTypeStrategyManagementTypeStrategyAvailabilityTypeSeparateAccountAvailabilityType }; }

export type string1000 = string;
export type _string1000 = Primitive._string;

export type string3000 = string;
export type _string3000 = Primitive._string;

export type string512 = string;
export type _string512 = Primitive._string;

export type string5120 = string;
export type _string5120 = Primitive._string;

export interface _stringGradeType extends Primitive._string {
	Grade: string;
}
export interface stringGradeType extends _stringGradeType { constructor: { new(): stringGradeType }; }
export var stringGradeType: { new(): stringGradeType };

export type styleBoxType = number;
export type _styleBoxType = Primitive._number;

export interface _tokenIdChar10Type extends _varchar40 {
	Id: string;
}
export interface tokenIdChar10Type extends _tokenIdChar10Type { constructor: { new(): tokenIdChar10Type }; }
export var tokenIdChar10Type: { new(): tokenIdChar10Type };

export interface _tokenIdChar10TypeMin0 extends _varchar40min0 {
	Id: string;
}
export interface tokenIdChar10TypeMin0 extends _tokenIdChar10TypeMin0 { constructor: { new(): tokenIdChar10TypeMin0 }; }
export var tokenIdChar10TypeMin0: { new(): tokenIdChar10TypeMin0 };

export interface _tokenIdChar2Type extends _varchar40 {
	Id: string;
}
export interface tokenIdChar2Type extends _tokenIdChar2Type { constructor: { new(): tokenIdChar2Type }; }
export var tokenIdChar2Type: { new(): tokenIdChar2Type };

export interface _tokenIdChar3Type extends _varchar40 {
	Id: string;
}
export interface tokenIdChar3Type extends _tokenIdChar3Type { constructor: { new(): tokenIdChar3Type }; }
export var tokenIdChar3Type: { new(): tokenIdChar3Type };

export interface _tokenIdNonNegativeIntegerType extends _varchar40 {
	Id: number;
}
export interface tokenIdNonNegativeIntegerType extends _tokenIdNonNegativeIntegerType { constructor: { new(): tokenIdNonNegativeIntegerType }; }
export var tokenIdNonNegativeIntegerType: { new(): tokenIdNonNegativeIntegerType };

export interface _tokenIdPositiveIntegerType extends _varchar40 {
	Id: number;
}
export interface tokenIdPositiveIntegerType extends _tokenIdPositiveIntegerType { constructor: { new(): tokenIdPositiveIntegerType }; }
export var tokenIdPositiveIntegerType: { new(): tokenIdPositiveIntegerType };

export interface _tokenIdType extends _varchar500 {
	Id: string;
}
export interface tokenIdType extends _tokenIdType { constructor: { new(): tokenIdType }; }
export var tokenIdType: { new(): tokenIdType };

export interface _tokenIdVarchar10Type extends _varchar40 {
	Id: string;
}
export interface tokenIdVarchar10Type extends _tokenIdVarchar10Type { constructor: { new(): tokenIdVarchar10Type }; }
export var tokenIdVarchar10Type: { new(): tokenIdVarchar10Type };

export interface _tokenIdVarchar4Type extends _varchar40 {
	Id: string;
}
export interface tokenIdVarchar4Type extends _tokenIdVarchar4Type { constructor: { new(): tokenIdVarchar4Type }; }
export var tokenIdVarchar4Type: { new(): tokenIdVarchar4Type };

export interface _tokenOptionalIdType extends _varchar75 {
	Id?: string;
}
export interface tokenOptionalIdType extends _tokenOptionalIdType { constructor: { new(): tokenOptionalIdType }; }
export var tokenOptionalIdType: { new(): tokenOptionalIdType };

export interface _tokenVarchar100IdChar2Type extends _varchar100 {
	Id: string;
}
export interface tokenVarchar100IdChar2Type extends _tokenVarchar100IdChar2Type { constructor: { new(): tokenVarchar100IdChar2Type }; }
export var tokenVarchar100IdChar2Type: { new(): tokenVarchar100IdChar2Type };

export interface _TradingInformationType extends BaseType {
	ExchangeListing?: TradingInformationTypeExchangeListingType;
	IPO?: TradingInformationTypeIPOType;
	LeverageMethod?: TradingInformationTypeLeverageMethodType;
	LeverageResetFrequency?: number;
	PreferredIssueList?: TradingInformationTypePreferredIssueListType;
}
export interface TradingInformationType extends _TradingInformationType { constructor: { new(): TradingInformationType }; }

export interface _TradingInformationTypeExchangeListingType extends BaseType {
	OptionTraded?: boolean;
	SEDOLOfficialListingExchange?: TradingInformationTypeExchangeListingTypeSEDOLOfficialListingExchangeType;
	TradingExchange?: TradingInformationTypeExchangeListingTypeTradingExchangeType;
}
export interface TradingInformationTypeExchangeListingType extends _TradingInformationTypeExchangeListingType { constructor: { new(): TradingInformationTypeExchangeListingType }; }

export interface _TradingInformationTypeExchangeListingTypeSEDOLOfficialListingExchangeType extends BaseType {
	SEDOLOfficialListingExchangeList: TradingInformationTypeExchangeListingTypeSEDOLOfficialListingExchangeTypeSEDOLOfficialListingExchangeListType[];
}
export interface TradingInformationTypeExchangeListingTypeSEDOLOfficialListingExchangeType extends _TradingInformationTypeExchangeListingTypeSEDOLOfficialListingExchangeType { constructor: { new(): TradingInformationTypeExchangeListingTypeSEDOLOfficialListingExchangeType }; }

export interface _TradingInformationTypeExchangeListingTypeSEDOLOfficialListingExchangeTypeSEDOLOfficialListingExchangeListType extends BaseType {
	Id?: string;
	XFMQ: boolean;
	Date?: Date;
	SEDOL: string;
}
export interface TradingInformationTypeExchangeListingTypeSEDOLOfficialListingExchangeTypeSEDOLOfficialListingExchangeListType extends _TradingInformationTypeExchangeListingTypeSEDOLOfficialListingExchangeTypeSEDOLOfficialListingExchangeListType { constructor: { new(): TradingInformationTypeExchangeListingTypeSEDOLOfficialListingExchangeTypeSEDOLOfficialListingExchangeListType }; }

export interface _TradingInformationTypeExchangeListingTypeTradingExchangeType extends BaseType {
	TradingExchangeList: TradingInformationTypeExchangeListingTypeTradingExchangeTypeTradingExchangeListType[];
}
export interface TradingInformationTypeExchangeListingTypeTradingExchangeType extends _TradingInformationTypeExchangeListingTypeTradingExchangeType { constructor: { new(): TradingInformationTypeExchangeListingTypeTradingExchangeType }; }

export interface _TradingInformationTypeExchangeListingTypeTradingExchangeTypeTradingExchangeListType extends BaseType {
	Id: string;
	Date?: Date;
	EndDate?: Date;
	TradingSymbol?: string;
}
export interface TradingInformationTypeExchangeListingTypeTradingExchangeTypeTradingExchangeListType extends _TradingInformationTypeExchangeListingTypeTradingExchangeTypeTradingExchangeListType { constructor: { new(): TradingInformationTypeExchangeListingTypeTradingExchangeTypeTradingExchangeListType }; }

export interface _TradingInformationTypeIPOType extends BaseType {
	CurrencyId?: string;
	Date: Date;
	Exchange?: tokenIdVarchar10Type;
	NAV?: number;
	OfferPrice?: number;
	SubscriptionStartDate?: Date;
}
export interface TradingInformationTypeIPOType extends _TradingInformationTypeIPOType { constructor: { new(): TradingInformationTypeIPOType }; }

export interface _TradingInformationTypeLeverageMethodType extends BaseType {
	BankCredit: boolean;
	Futures: boolean;
	MarginBorrowing: boolean;
	Option: boolean;
	Swap: boolean;
}
export interface TradingInformationTypeLeverageMethodType extends _TradingInformationTypeLeverageMethodType { constructor: { new(): TradingInformationTypeLeverageMethodType }; }

export interface _TradingInformationTypePreferredIssueListType extends BaseType {
	PreferredIssueDetail: TradingInformationTypePreferredIssueListTypePreferredIssueDetailType[];
}
export interface TradingInformationTypePreferredIssueListType extends _TradingInformationTypePreferredIssueListType { constructor: { new(): TradingInformationTypePreferredIssueListType }; }

export interface _TradingInformationTypePreferredIssueListTypePreferredIssueDetailType extends BaseType {
	CUSIP?: string;
	Date: Date;
	Name: string;
	OfferPrice: number;
	RateResetPeriod?: TradingInformationTypePreferredIssueListTypePreferredIssueDetailTypeRateResetPeriodType;
	ShareOutstanding?: number;
	UnderwriterCompany?: TradingInformationTypePreferredIssueListTypePreferredIssueDetailTypeUnderwriterCompanyType;
}
export interface TradingInformationTypePreferredIssueListTypePreferredIssueDetailType extends _TradingInformationTypePreferredIssueListTypePreferredIssueDetailType { constructor: { new(): TradingInformationTypePreferredIssueListTypePreferredIssueDetailType }; }

export interface _TradingInformationTypePreferredIssueListTypePreferredIssueDetailTypeRateResetPeriodType extends Primitive._number {
	Unit: number;
}
export interface TradingInformationTypePreferredIssueListTypePreferredIssueDetailTypeRateResetPeriodType extends _TradingInformationTypePreferredIssueListTypePreferredIssueDetailTypeRateResetPeriodType { constructor: { new(): TradingInformationTypePreferredIssueListTypePreferredIssueDetailTypeRateResetPeriodType }; }

export interface _TradingInformationTypePreferredIssueListTypePreferredIssueDetailTypeUnderwriterCompanyType extends BaseType {
	DataLink: linkVarchar10Type;
	Company: CompanyType;
}
export interface TradingInformationTypePreferredIssueListTypePreferredIssueDetailTypeUnderwriterCompanyType extends _TradingInformationTypePreferredIssueListTypePreferredIssueDetailTypeUnderwriterCompanyType { constructor: { new(): TradingInformationTypePreferredIssueListTypePreferredIssueDetailTypeUnderwriterCompanyType }; }

export interface _unitInteger extends Primitive._number {
	CurrencyId: string;
	Unit: number;
}
export interface unitInteger extends _unitInteger { constructor: { new(): unitInteger }; }
export var unitInteger: { new(): unitInteger };

export type varchar10 = string;
export type _varchar10 = Primitive._string;

export type varchar100 = string;
export type _varchar100 = Primitive._string;

export type varchar10min0 = string;
export type _varchar10min0 = Primitive._string;

export type varchar12 = string;
export type _varchar12 = Primitive._string;

export type varchar120 = string;
export type _varchar120 = Primitive._string;

export type varchar15 = string;
export type _varchar15 = Primitive._string;

export type varchar2 = string;
export type _varchar2 = Primitive._string;

export type varchar200 = string;
export type _varchar200 = Primitive._string;

export type varchar25 = string;
export type _varchar25 = Primitive._string;

export type varchar3 = string;
export type _varchar3 = Primitive._string;

export type varchar32 = string;
export type _varchar32 = Primitive._string;

export type varchar36 = string;
export type _varchar36 = Primitive._string;

export type varchar4 = string;
export type _varchar4 = Primitive._string;

export type varchar40 = string;
export type _varchar40 = Primitive._string;

export interface _varchar40ByEndDateType extends _varchar40 {
	EndDate: Date;
}
export interface varchar40ByEndDateType extends _varchar40ByEndDateType { constructor: { new(): varchar40ByEndDateType }; }
export var varchar40ByEndDateType: { new(): varchar40ByEndDateType };

export type varchar40min0 = string;
export type _varchar40min0 = Primitive._string;

export interface _varchar40UnsignedByteType extends _varchar40 {
	Type: number;
}
export interface varchar40UnsignedByteType extends _varchar40UnsignedByteType { constructor: { new(): varchar40UnsignedByteType }; }
export var varchar40UnsignedByteType: { new(): varchar40UnsignedByteType };

export type varchar5 = string;
export type _varchar5 = Primitive._string;

export type varchar50 = string;
export type _varchar50 = Primitive._string;

export type varchar500 = string;
export type _varchar500 = Primitive._string;

export type varchar6 = string;
export type _varchar6 = Primitive._string;

export type varchar7 = string;
export type _varchar7 = Primitive._string;

export type varchar75 = string;
export type _varchar75 = Primitive._string;

export interface document extends BaseType {
	AnnualReport: AnnualReportType;
	BeneficialOwnership: BeneficialOwnershipType;
	CategoryRank: number;
	ClientSpecific: ClientSpecificType;
	ClosePrice: number;
	Company: CompanyType;
	ContactInformation: ContactInformationType;
	DataGroupList: DataGroupListType;
	DataMap: DataMapType;
	DataStatus: DataStatusType;
	Date: Date;
	EndDate: Date;
	ExcludingDate: Date;
	Family: FamilyType;
	Fund: FundType;
	FundShareClass: FundShareClassType;
	HistoricalOperation: HistoricalOperationType;
	InternationalFeature: InternationalFeatureType;
	MultilingualVariation: MultilingualVariationType;
	Performance: PerformanceType;
	PerformanceBasics: PerformanceBasicsType;
	PerformanceId: PerformanceIdType;
	Portfolio: PortfolioType;
	ProfessionalInformation: ProfessionalInformationType;
	ProprietaryData: ProprietaryDataType;
	ReinvestDate: Date;
	RiskMeasuresRank: RiskMeasuresRankType;
	SeparateAccountOperation: SeparateAccountOperationType;
	SP_CodeAndValue: SP_CodeAndValueType;
	StartDate: Date;
	Strategy: StrategyType;
	StyleBox: number;
	TradingInformation: TradingInformationType;
	Value: number;
	Year: number;
}
export var document: document;
