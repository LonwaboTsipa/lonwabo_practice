export interface IEntity {
    client_code?: string;
    name?: string;
    external_id?: string;
    isin?: string;
    fund_key?: string;
    isin_cap?: string;
    isin_dist?: string;
    bloomberg_cap?: string;
    bloomberg_dist?: string;
    wkn_cap?: string;
    wkn_dist?: string;
    cusip_cap?: string;
    cusip_dist?: string;
    benchmark?: string;
    nationality?: string;
    legal_form?: string;
    launch_date?: string;
    base_currency?: string;
    fund_manager?: string;
    management_company?: string;
    investment_manager?: string;
    external_administrator?: string;
    custodian?: string;
    entrance_fee?: string;
    exit_fee?: number;
    switch_commission?: number;
    ongoing_charges?: number;
    management_fee?: number;
    nav_periodicity?: string;
    dealing_deadline?: string;
    settlement_delivery?: string;
    execution_subscription?: string;
    as_of_date?: string;
}