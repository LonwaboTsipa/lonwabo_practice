export interface IMorningStarPortfolio {
    client_code?: string;
    type?: string;
    label?: string;
    value?: number;
    bond_style_box?: number;
    bond_effective_duration?: number;
    bond_effective_maturity?: number;
    bond_average_coupon?: number;
    bond_average_credit_quality?: number;
    bond_average_price?: number;
    bond_yield_to_maturity?: number;
    bond_modified_duration?: number;
    bond_current_yield?: number;
}