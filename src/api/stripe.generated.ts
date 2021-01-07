// @ts-nocheck
// Note: Had to modify the baseQuery headers and getCharges params to make this work.

/*
    This file has been generated with:
    curl -o test.json https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json
    npx @rtk-incubator/rtk-query-codegen-openapi test.json > stripe.
 */

import { createApi, fetchBaseQuery } from "@rtk-incubator/rtk-query";
export const api = createApi({
    reducerPath: 'stripeApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.stripe.com", prepareHeaders: (headers, { getState }) => {
            headers.set('authorization', `Bearer sk_test_4eC39HqLyjWDarjtT1zdp7dc`);
            return headers;
        } }),
    entityTypes: [],
    endpoints: build => ({
        post3DSecure: build.mutation<Post3DSecureApiResponse, Post3DSecureApiArg>({
            query: queryArg => ({ url: `/v1/3d_secure`, method: "POST", body: queryArg.body })
        }),
        get3DSecureThreeDSecure: build.query<Get3DSecureThreeDSecureApiResponse, Get3DSecureThreeDSecureApiArg>({
            query: queryArg => ({ url: `/v1/3d_secure/${queryArg.threeDSecure}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        deleteAccount: build.mutation<DeleteAccountApiResponse, DeleteAccountApiArg>({
            query: queryArg => ({ url: `/v1/account`, method: "DELETE", body: queryArg.body })
        }),
        getAccount: build.query<GetAccountApiResponse, GetAccountApiArg>({
            query: queryArg => ({ url: `/v1/account`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccount: build.mutation<PostAccountApiResponse, PostAccountApiArg>({
            query: queryArg => ({ url: `/v1/account`, method: "POST", body: queryArg.body })
        }),
        postAccountBankAccounts: build.mutation<PostAccountBankAccountsApiResponse, PostAccountBankAccountsApiArg>({
            query: queryArg => ({ url: `/v1/account/bank_accounts`, method: "POST", body: queryArg.body })
        }),
        deleteAccountBankAccountsId: build.mutation<DeleteAccountBankAccountsIdApiResponse, DeleteAccountBankAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/account/bank_accounts/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getAccountBankAccountsId: build.query<GetAccountBankAccountsIdApiResponse, GetAccountBankAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/account/bank_accounts/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountBankAccountsId: build.mutation<PostAccountBankAccountsIdApiResponse, PostAccountBankAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/account/bank_accounts/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        getAccountCapabilities: build.query<GetAccountCapabilitiesApiResponse, GetAccountCapabilitiesApiArg>({
            query: queryArg => ({ url: `/v1/account/capabilities`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getAccountCapabilitiesCapability: build.query<GetAccountCapabilitiesCapabilityApiResponse, GetAccountCapabilitiesCapabilityApiArg>({
            query: queryArg => ({ url: `/v1/account/capabilities/${queryArg.capability}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountCapabilitiesCapability: build.mutation<PostAccountCapabilitiesCapabilityApiResponse, PostAccountCapabilitiesCapabilityApiArg>({
            query: queryArg => ({ url: `/v1/account/capabilities/${queryArg.capability}`, method: "POST", body: queryArg.body })
        }),
        getAccountExternalAccounts: build.query<GetAccountExternalAccountsApiResponse, GetAccountExternalAccountsApiArg>({
            query: queryArg => ({ url: `/v1/account/external_accounts`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postAccountExternalAccounts: build.mutation<PostAccountExternalAccountsApiResponse, PostAccountExternalAccountsApiArg>({
            query: queryArg => ({ url: `/v1/account/external_accounts`, method: "POST", body: queryArg.body })
        }),
        deleteAccountExternalAccountsId: build.mutation<DeleteAccountExternalAccountsIdApiResponse, DeleteAccountExternalAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/account/external_accounts/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getAccountExternalAccountsId: build.query<GetAccountExternalAccountsIdApiResponse, GetAccountExternalAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/account/external_accounts/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountExternalAccountsId: build.mutation<PostAccountExternalAccountsIdApiResponse, PostAccountExternalAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/account/external_accounts/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        postAccountLoginLinks: build.mutation<PostAccountLoginLinksApiResponse, PostAccountLoginLinksApiArg>({
            query: queryArg => ({ url: `/v1/account/login_links`, method: "POST", body: queryArg.body })
        }),
        putAccountLogout: build.mutation<PutAccountLogoutApiResponse, PutAccountLogoutApiArg>({
            query: queryArg => ({ url: `/v1/account/logout`, method: "PUT", body: queryArg.body })
        }),
        getAccountPeople: build.query<GetAccountPeopleApiResponse, GetAccountPeopleApiArg>({
            query: queryArg => ({ url: `/v1/account/people`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, relationship: queryArg.relationship, starting_after: queryArg.startingAfter } })
        }),
        postAccountPeople: build.mutation<PostAccountPeopleApiResponse, PostAccountPeopleApiArg>({
            query: queryArg => ({ url: `/v1/account/people`, method: "POST", body: queryArg.body })
        }),
        deleteAccountPeoplePerson: build.mutation<DeleteAccountPeoplePersonApiResponse, DeleteAccountPeoplePersonApiArg>({
            query: queryArg => ({ url: `/v1/account/people/${queryArg.person}`, method: "DELETE", body: queryArg.body })
        }),
        getAccountPeoplePerson: build.query<GetAccountPeoplePersonApiResponse, GetAccountPeoplePersonApiArg>({
            query: queryArg => ({ url: `/v1/account/people/${queryArg.person}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountPeoplePerson: build.mutation<PostAccountPeoplePersonApiResponse, PostAccountPeoplePersonApiArg>({
            query: queryArg => ({ url: `/v1/account/people/${queryArg.person}`, method: "POST", body: queryArg.body })
        }),
        getAccountPersons: build.query<GetAccountPersonsApiResponse, GetAccountPersonsApiArg>({
            query: queryArg => ({ url: `/v1/account/persons`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, relationship: queryArg.relationship, starting_after: queryArg.startingAfter } })
        }),
        postAccountPersons: build.mutation<PostAccountPersonsApiResponse, PostAccountPersonsApiArg>({
            query: queryArg => ({ url: `/v1/account/persons`, method: "POST", body: queryArg.body })
        }),
        deleteAccountPersonsPerson: build.mutation<DeleteAccountPersonsPersonApiResponse, DeleteAccountPersonsPersonApiArg>({
            query: queryArg => ({ url: `/v1/account/persons/${queryArg.person}`, method: "DELETE", body: queryArg.body })
        }),
        getAccountPersonsPerson: build.query<GetAccountPersonsPersonApiResponse, GetAccountPersonsPersonApiArg>({
            query: queryArg => ({ url: `/v1/account/persons/${queryArg.person}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountPersonsPerson: build.mutation<PostAccountPersonsPersonApiResponse, PostAccountPersonsPersonApiArg>({
            query: queryArg => ({ url: `/v1/account/persons/${queryArg.person}`, method: "POST", body: queryArg.body })
        }),
        postAccountLinks: build.mutation<PostAccountLinksApiResponse, PostAccountLinksApiArg>({
            query: queryArg => ({ url: `/v1/account_links`, method: "POST", body: queryArg.body })
        }),
        getAccounts: build.query<GetAccountsApiResponse, GetAccountsApiArg>({
            query: queryArg => ({ url: `/v1/accounts`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postAccounts: build.mutation<PostAccountsApiResponse, PostAccountsApiArg>({
            query: queryArg => ({ url: `/v1/accounts`, method: "POST", body: queryArg.body })
        }),
        deleteAccountsAccount: build.mutation<DeleteAccountsAccountApiResponse, DeleteAccountsAccountApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}`, method: "DELETE", body: queryArg.body })
        }),
        getAccountsAccount: build.query<GetAccountsAccountApiResponse, GetAccountsAccountApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountsAccount: build.mutation<PostAccountsAccountApiResponse, PostAccountsAccountApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}`, method: "POST", body: queryArg.body })
        }),
        postAccountsAccountBankAccounts: build.mutation<PostAccountsAccountBankAccountsApiResponse, PostAccountsAccountBankAccountsApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/bank_accounts`, method: "POST", body: queryArg.body })
        }),
        deleteAccountsAccountBankAccountsId: build.mutation<DeleteAccountsAccountBankAccountsIdApiResponse, DeleteAccountsAccountBankAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/bank_accounts/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getAccountsAccountBankAccountsId: build.query<GetAccountsAccountBankAccountsIdApiResponse, GetAccountsAccountBankAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/bank_accounts/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountsAccountBankAccountsId: build.mutation<PostAccountsAccountBankAccountsIdApiResponse, PostAccountsAccountBankAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/bank_accounts/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        getAccountsAccountCapabilities: build.query<GetAccountsAccountCapabilitiesApiResponse, GetAccountsAccountCapabilitiesApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/capabilities`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getAccountsAccountCapabilitiesCapability: build.query<GetAccountsAccountCapabilitiesCapabilityApiResponse, GetAccountsAccountCapabilitiesCapabilityApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/capabilities/${queryArg.capability}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountsAccountCapabilitiesCapability: build.mutation<PostAccountsAccountCapabilitiesCapabilityApiResponse, PostAccountsAccountCapabilitiesCapabilityApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/capabilities/${queryArg.capability}`, method: "POST", body: queryArg.body })
        }),
        getAccountsAccountExternalAccounts: build.query<GetAccountsAccountExternalAccountsApiResponse, GetAccountsAccountExternalAccountsApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/external_accounts`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postAccountsAccountExternalAccounts: build.mutation<PostAccountsAccountExternalAccountsApiResponse, PostAccountsAccountExternalAccountsApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/external_accounts`, method: "POST", body: queryArg.body })
        }),
        deleteAccountsAccountExternalAccountsId: build.mutation<DeleteAccountsAccountExternalAccountsIdApiResponse, DeleteAccountsAccountExternalAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/external_accounts/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getAccountsAccountExternalAccountsId: build.query<GetAccountsAccountExternalAccountsIdApiResponse, GetAccountsAccountExternalAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/external_accounts/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountsAccountExternalAccountsId: build.mutation<PostAccountsAccountExternalAccountsIdApiResponse, PostAccountsAccountExternalAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/external_accounts/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        postAccountsAccountLoginLinks: build.mutation<PostAccountsAccountLoginLinksApiResponse, PostAccountsAccountLoginLinksApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/login_links`, method: "POST", body: queryArg.body })
        }),
        putAccountsAccountLogout: build.mutation<PutAccountsAccountLogoutApiResponse, PutAccountsAccountLogoutApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/logout`, method: "PUT", body: queryArg.body })
        }),
        getAccountsAccountPeople: build.query<GetAccountsAccountPeopleApiResponse, GetAccountsAccountPeopleApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/people`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, relationship: queryArg.relationship, starting_after: queryArg.startingAfter } })
        }),
        postAccountsAccountPeople: build.mutation<PostAccountsAccountPeopleApiResponse, PostAccountsAccountPeopleApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/people`, method: "POST", body: queryArg.body })
        }),
        deleteAccountsAccountPeoplePerson: build.mutation<DeleteAccountsAccountPeoplePersonApiResponse, DeleteAccountsAccountPeoplePersonApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/people/${queryArg.person}`, method: "DELETE", body: queryArg.body })
        }),
        getAccountsAccountPeoplePerson: build.query<GetAccountsAccountPeoplePersonApiResponse, GetAccountsAccountPeoplePersonApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/people/${queryArg.person}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountsAccountPeoplePerson: build.mutation<PostAccountsAccountPeoplePersonApiResponse, PostAccountsAccountPeoplePersonApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/people/${queryArg.person}`, method: "POST", body: queryArg.body })
        }),
        getAccountsAccountPersons: build.query<GetAccountsAccountPersonsApiResponse, GetAccountsAccountPersonsApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/persons`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, relationship: queryArg.relationship, starting_after: queryArg.startingAfter } })
        }),
        postAccountsAccountPersons: build.mutation<PostAccountsAccountPersonsApiResponse, PostAccountsAccountPersonsApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/persons`, method: "POST", body: queryArg.body })
        }),
        deleteAccountsAccountPersonsPerson: build.mutation<DeleteAccountsAccountPersonsPersonApiResponse, DeleteAccountsAccountPersonsPersonApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/persons/${queryArg.person}`, method: "DELETE", body: queryArg.body })
        }),
        getAccountsAccountPersonsPerson: build.query<GetAccountsAccountPersonsPersonApiResponse, GetAccountsAccountPersonsPersonApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/persons/${queryArg.person}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postAccountsAccountPersonsPerson: build.mutation<PostAccountsAccountPersonsPersonApiResponse, PostAccountsAccountPersonsPersonApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/persons/${queryArg.person}`, method: "POST", body: queryArg.body })
        }),
        postAccountsAccountReject: build.mutation<PostAccountsAccountRejectApiResponse, PostAccountsAccountRejectApiArg>({
            query: queryArg => ({ url: `/v1/accounts/${queryArg.account}/reject`, method: "POST", body: queryArg.body })
        }),
        getApplePayDomains: build.query<GetApplePayDomainsApiResponse, GetApplePayDomainsApiArg>({
            query: queryArg => ({ url: `/v1/apple_pay/domains`, body: queryArg.body, params: { domain_name: queryArg.domainName, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postApplePayDomains: build.mutation<PostApplePayDomainsApiResponse, PostApplePayDomainsApiArg>({
            query: queryArg => ({ url: `/v1/apple_pay/domains`, method: "POST", body: queryArg.body })
        }),
        deleteApplePayDomainsDomain: build.mutation<DeleteApplePayDomainsDomainApiResponse, DeleteApplePayDomainsDomainApiArg>({
            query: queryArg => ({ url: `/v1/apple_pay/domains/${queryArg.domain}`, method: "DELETE", body: queryArg.body })
        }),
        getApplePayDomainsDomain: build.query<GetApplePayDomainsDomainApiResponse, GetApplePayDomainsDomainApiArg>({
            query: queryArg => ({ url: `/v1/apple_pay/domains/${queryArg.domain}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getApplicationFees: build.query<GetApplicationFeesApiResponse, GetApplicationFeesApiArg>({
            query: queryArg => ({ url: `/v1/application_fees`, body: queryArg.body, params: { charge: queryArg.charge, created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getApplicationFeesFeeRefundsId: build.query<GetApplicationFeesFeeRefundsIdApiResponse, GetApplicationFeesFeeRefundsIdApiArg>({
            query: queryArg => ({ url: `/v1/application_fees/${queryArg.fee}/refunds/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postApplicationFeesFeeRefundsId: build.mutation<PostApplicationFeesFeeRefundsIdApiResponse, PostApplicationFeesFeeRefundsIdApiArg>({
            query: queryArg => ({ url: `/v1/application_fees/${queryArg.fee}/refunds/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        getApplicationFeesId: build.query<GetApplicationFeesIdApiResponse, GetApplicationFeesIdApiArg>({
            query: queryArg => ({ url: `/v1/application_fees/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postApplicationFeesIdRefund: build.mutation<PostApplicationFeesIdRefundApiResponse, PostApplicationFeesIdRefundApiArg>({
            query: queryArg => ({ url: `/v1/application_fees/${queryArg.id}/refund`, method: "POST", body: queryArg.body })
        }),
        getApplicationFeesIdRefunds: build.query<GetApplicationFeesIdRefundsApiResponse, GetApplicationFeesIdRefundsApiArg>({
            query: queryArg => ({ url: `/v1/application_fees/${queryArg.id}/refunds`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postApplicationFeesIdRefunds: build.mutation<PostApplicationFeesIdRefundsApiResponse, PostApplicationFeesIdRefundsApiArg>({
            query: queryArg => ({ url: `/v1/application_fees/${queryArg.id}/refunds`, method: "POST", body: queryArg.body })
        }),
        getBalance: build.query<GetBalanceApiResponse, GetBalanceApiArg>({
            query: queryArg => ({ url: `/v1/balance`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getBalanceHistory: build.query<GetBalanceHistoryApiResponse, GetBalanceHistoryApiArg>({
            query: queryArg => ({ url: `/v1/balance/history`, body: queryArg.body, params: { available_on: queryArg.availableOn, created: queryArg.created, currency: queryArg.currency, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, payout: queryArg.payout, source: queryArg.source, starting_after: queryArg.startingAfter, type: queryArg.type } })
        }),
        getBalanceHistoryId: build.query<GetBalanceHistoryIdApiResponse, GetBalanceHistoryIdApiArg>({
            query: queryArg => ({ url: `/v1/balance/history/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getBalanceTransactions: build.query<GetBalanceTransactionsApiResponse, GetBalanceTransactionsApiArg>({
            query: queryArg => ({ url: `/v1/balance_transactions`, body: queryArg.body, params: { available_on: queryArg.availableOn, created: queryArg.created, currency: queryArg.currency, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, payout: queryArg.payout, source: queryArg.source, starting_after: queryArg.startingAfter, type: queryArg.type } })
        }),
        getBalanceTransactionsId: build.query<GetBalanceTransactionsIdApiResponse, GetBalanceTransactionsIdApiArg>({
            query: queryArg => ({ url: `/v1/balance_transactions/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postBillingPortalSessions: build.mutation<PostBillingPortalSessionsApiResponse, PostBillingPortalSessionsApiArg>({
            query: queryArg => ({ url: `/v1/billing_portal/sessions`, method: "POST", body: queryArg.body })
        }),
        getBitcoinReceivers: build.query<GetBitcoinReceiversApiResponse, GetBitcoinReceiversApiArg>({
            query: queryArg => ({ url: `/v1/bitcoin/receivers`, body: queryArg.body, params: { active: queryArg.active, ending_before: queryArg.endingBefore, expand: queryArg.expand, filled: queryArg.filled, limit: queryArg.limit, starting_after: queryArg.startingAfter, uncaptured_funds: queryArg.uncapturedFunds } })
        }),
        getBitcoinReceiversId: build.query<GetBitcoinReceiversIdApiResponse, GetBitcoinReceiversIdApiArg>({
            query: queryArg => ({ url: `/v1/bitcoin/receivers/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getBitcoinReceiversReceiverTransactions: build.query<GetBitcoinReceiversReceiverTransactionsApiResponse, GetBitcoinReceiversReceiverTransactionsApiArg>({
            query: queryArg => ({ url: `/v1/bitcoin/receivers/${queryArg.receiver}/transactions`, body: queryArg.body, params: { customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getBitcoinTransactions: build.query<GetBitcoinTransactionsApiResponse, GetBitcoinTransactionsApiArg>({
            query: queryArg => ({ url: `/v1/bitcoin/transactions`, body: queryArg.body, params: { customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, receiver: queryArg.receiver, starting_after: queryArg.startingAfter } })
        }),
        getCharges: build.query<GetChargesApiResponse, GetChargesApiArg>({
            query: queryArg => ({ url: `/v1/charges` })
        }),
        //  Stripe API errors when the params are passed in even if undefined.
        // getCharges: build.query<GetChargesApiResponse, GetChargesApiArg>({
        //     query: queryArg => ({ url: `/v1/charges`, body: queryArg.body, params: { created: queryArg.created, customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, payment_intent: queryArg.paymentIntent, starting_after: queryArg.startingAfter, transfer_group: queryArg.transferGroup } })
        // }),
        postCharges: build.mutation<PostChargesApiResponse, PostChargesApiArg>({
            query: queryArg => ({ url: `/v1/charges`, method: "POST", body: queryArg.body })
        }),
        getChargesCharge: build.query<GetChargesChargeApiResponse, GetChargesChargeApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postChargesCharge: build.mutation<PostChargesChargeApiResponse, PostChargesChargeApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}`, method: "POST", body: queryArg.body })
        }),
        postChargesChargeCapture: build.mutation<PostChargesChargeCaptureApiResponse, PostChargesChargeCaptureApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}/capture`, method: "POST", body: queryArg.body })
        }),
        getChargesChargeDispute: build.query<GetChargesChargeDisputeApiResponse, GetChargesChargeDisputeApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}/dispute`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postChargesChargeDispute: build.mutation<PostChargesChargeDisputeApiResponse, PostChargesChargeDisputeApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}/dispute`, method: "POST", body: queryArg.body })
        }),
        postChargesChargeDisputeClose: build.mutation<PostChargesChargeDisputeCloseApiResponse, PostChargesChargeDisputeCloseApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}/dispute/close`, method: "POST", body: queryArg.body })
        }),
        postChargesChargeRefund: build.mutation<PostChargesChargeRefundApiResponse, PostChargesChargeRefundApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}/refund`, method: "POST", body: queryArg.body })
        }),
        getChargesChargeRefunds: build.query<GetChargesChargeRefundsApiResponse, GetChargesChargeRefundsApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}/refunds`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postChargesChargeRefunds: build.mutation<PostChargesChargeRefundsApiResponse, PostChargesChargeRefundsApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}/refunds`, method: "POST", body: queryArg.body })
        }),
        getChargesChargeRefundsRefund: build.query<GetChargesChargeRefundsRefundApiResponse, GetChargesChargeRefundsRefundApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}/refunds/${queryArg.refund}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postChargesChargeRefundsRefund: build.mutation<PostChargesChargeRefundsRefundApiResponse, PostChargesChargeRefundsRefundApiArg>({
            query: queryArg => ({ url: `/v1/charges/${queryArg.charge}/refunds/${queryArg.refund}`, method: "POST", body: queryArg.body })
        }),
        getCheckoutSessions: build.query<GetCheckoutSessionsApiResponse, GetCheckoutSessionsApiArg>({
            query: queryArg => ({ url: `/v1/checkout/sessions`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, payment_intent: queryArg.paymentIntent, starting_after: queryArg.startingAfter, subscription: queryArg.subscription } })
        }),
        postCheckoutSessions: build.mutation<PostCheckoutSessionsApiResponse, PostCheckoutSessionsApiArg>({
            query: queryArg => ({ url: `/v1/checkout/sessions`, method: "POST", body: queryArg.body })
        }),
        getCheckoutSessionsSession: build.query<GetCheckoutSessionsSessionApiResponse, GetCheckoutSessionsSessionApiArg>({
            query: queryArg => ({ url: `/v1/checkout/sessions/${queryArg.session}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getCheckoutSessionsSessionLineItems: build.query<GetCheckoutSessionsSessionLineItemsApiResponse, GetCheckoutSessionsSessionLineItemsApiArg>({
            query: queryArg => ({ url: `/v1/checkout/sessions/${queryArg.session}/line_items`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getCountrySpecs: build.query<GetCountrySpecsApiResponse, GetCountrySpecsApiArg>({
            query: queryArg => ({ url: `/v1/country_specs`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getCountrySpecsCountry: build.query<GetCountrySpecsCountryApiResponse, GetCountrySpecsCountryApiArg>({
            query: queryArg => ({ url: `/v1/country_specs/${queryArg.country}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getCoupons: build.query<GetCouponsApiResponse, GetCouponsApiArg>({
            query: queryArg => ({ url: `/v1/coupons`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postCoupons: build.mutation<PostCouponsApiResponse, PostCouponsApiArg>({
            query: queryArg => ({ url: `/v1/coupons`, method: "POST", body: queryArg.body })
        }),
        deleteCouponsCoupon: build.mutation<DeleteCouponsCouponApiResponse, DeleteCouponsCouponApiArg>({
            query: queryArg => ({ url: `/v1/coupons/${queryArg.coupon}`, method: "DELETE", body: queryArg.body })
        }),
        getCouponsCoupon: build.query<GetCouponsCouponApiResponse, GetCouponsCouponApiArg>({
            query: queryArg => ({ url: `/v1/coupons/${queryArg.coupon}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postCouponsCoupon: build.mutation<PostCouponsCouponApiResponse, PostCouponsCouponApiArg>({
            query: queryArg => ({ url: `/v1/coupons/${queryArg.coupon}`, method: "POST", body: queryArg.body })
        }),
        getCreditNotes: build.query<GetCreditNotesApiResponse, GetCreditNotesApiArg>({
            query: queryArg => ({ url: `/v1/credit_notes`, body: queryArg.body, params: { customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, invoice: queryArg.invoice, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postCreditNotes: build.mutation<PostCreditNotesApiResponse, PostCreditNotesApiArg>({
            query: queryArg => ({ url: `/v1/credit_notes`, method: "POST", body: queryArg.body })
        }),
        getCreditNotesPreview: build.query<GetCreditNotesPreviewApiResponse, GetCreditNotesPreviewApiArg>({
            query: queryArg => ({ url: `/v1/credit_notes/preview`, body: queryArg.body, params: { amount: queryArg.amount, credit_amount: queryArg.creditAmount, expand: queryArg.expand, invoice: queryArg.invoice, lines: queryArg.lines, memo: queryArg.memo, metadata: queryArg.metadata, out_of_band_amount: queryArg.outOfBandAmount, reason: queryArg.reason, refund: queryArg.refund, refund_amount: queryArg.refundAmount } })
        }),
        getCreditNotesPreviewLines: build.query<GetCreditNotesPreviewLinesApiResponse, GetCreditNotesPreviewLinesApiArg>({
            query: queryArg => ({ url: `/v1/credit_notes/preview/lines`, body: queryArg.body, params: { amount: queryArg.amount, credit_amount: queryArg.creditAmount, ending_before: queryArg.endingBefore, expand: queryArg.expand, invoice: queryArg.invoice, limit: queryArg.limit, lines: queryArg.lines, memo: queryArg.memo, metadata: queryArg.metadata, out_of_band_amount: queryArg.outOfBandAmount, reason: queryArg.reason, refund: queryArg.refund, refund_amount: queryArg.refundAmount, starting_after: queryArg.startingAfter } })
        }),
        getCreditNotesCreditNoteLines: build.query<GetCreditNotesCreditNoteLinesApiResponse, GetCreditNotesCreditNoteLinesApiArg>({
            query: queryArg => ({ url: `/v1/credit_notes/${queryArg.creditNote}/lines`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getCreditNotesId: build.query<GetCreditNotesIdApiResponse, GetCreditNotesIdApiArg>({
            query: queryArg => ({ url: `/v1/credit_notes/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postCreditNotesId: build.mutation<PostCreditNotesIdApiResponse, PostCreditNotesIdApiArg>({
            query: queryArg => ({ url: `/v1/credit_notes/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        postCreditNotesIdVoid: build.mutation<PostCreditNotesIdVoidApiResponse, PostCreditNotesIdVoidApiArg>({
            query: queryArg => ({ url: `/v1/credit_notes/${queryArg.id}/void`, method: "POST", body: queryArg.body })
        }),
        getCustomers: build.query<GetCustomersApiResponse, GetCustomersApiArg>({
            query: queryArg => ({ url: `/v1/customers`, body: queryArg.body, params: { created: queryArg.created, email: queryArg.email, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postCustomers: build.mutation<PostCustomersApiResponse, PostCustomersApiArg>({
            query: queryArg => ({ url: `/v1/customers`, method: "POST", body: queryArg.body })
        }),
        deleteCustomersCustomer: build.mutation<DeleteCustomersCustomerApiResponse, DeleteCustomersCustomerApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}`, method: "DELETE", body: queryArg.body })
        }),
        getCustomersCustomer: build.query<GetCustomersCustomerApiResponse, GetCustomersCustomerApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postCustomersCustomer: build.mutation<PostCustomersCustomerApiResponse, PostCustomersCustomerApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}`, method: "POST", body: queryArg.body })
        }),
        getCustomersCustomerBalanceTransactions: build.query<GetCustomersCustomerBalanceTransactionsApiResponse, GetCustomersCustomerBalanceTransactionsApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/balance_transactions`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postCustomersCustomerBalanceTransactions: build.mutation<PostCustomersCustomerBalanceTransactionsApiResponse, PostCustomersCustomerBalanceTransactionsApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/balance_transactions`, method: "POST", body: queryArg.body })
        }),
        getCustomersCustomerBalanceTransactionsTransaction: build.query<GetCustomersCustomerBalanceTransactionsTransactionApiResponse, GetCustomersCustomerBalanceTransactionsTransactionApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/balance_transactions/${queryArg.transaction}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postCustomersCustomerBalanceTransactionsTransaction: build.mutation<PostCustomersCustomerBalanceTransactionsTransactionApiResponse, PostCustomersCustomerBalanceTransactionsTransactionApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/balance_transactions/${queryArg.transaction}`, method: "POST", body: queryArg.body })
        }),
        getCustomersCustomerBankAccounts: build.query<GetCustomersCustomerBankAccountsApiResponse, GetCustomersCustomerBankAccountsApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/bank_accounts`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postCustomersCustomerBankAccounts: build.mutation<PostCustomersCustomerBankAccountsApiResponse, PostCustomersCustomerBankAccountsApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/bank_accounts`, method: "POST", body: queryArg.body })
        }),
        deleteCustomersCustomerBankAccountsId: build.mutation<DeleteCustomersCustomerBankAccountsIdApiResponse, DeleteCustomersCustomerBankAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/bank_accounts/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getCustomersCustomerBankAccountsId: build.query<GetCustomersCustomerBankAccountsIdApiResponse, GetCustomersCustomerBankAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/bank_accounts/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postCustomersCustomerBankAccountsId: build.mutation<PostCustomersCustomerBankAccountsIdApiResponse, PostCustomersCustomerBankAccountsIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/bank_accounts/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        postCustomersCustomerBankAccountsIdVerify: build.mutation<PostCustomersCustomerBankAccountsIdVerifyApiResponse, PostCustomersCustomerBankAccountsIdVerifyApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/bank_accounts/${queryArg.id}/verify`, method: "POST", body: queryArg.body })
        }),
        getCustomersCustomerCards: build.query<GetCustomersCustomerCardsApiResponse, GetCustomersCustomerCardsApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/cards`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postCustomersCustomerCards: build.mutation<PostCustomersCustomerCardsApiResponse, PostCustomersCustomerCardsApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/cards`, method: "POST", body: queryArg.body })
        }),
        deleteCustomersCustomerCardsId: build.mutation<DeleteCustomersCustomerCardsIdApiResponse, DeleteCustomersCustomerCardsIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/cards/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getCustomersCustomerCardsId: build.query<GetCustomersCustomerCardsIdApiResponse, GetCustomersCustomerCardsIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/cards/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postCustomersCustomerCardsId: build.mutation<PostCustomersCustomerCardsIdApiResponse, PostCustomersCustomerCardsIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/cards/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        deleteCustomersCustomerDiscount: build.mutation<DeleteCustomersCustomerDiscountApiResponse, DeleteCustomersCustomerDiscountApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/discount`, method: "DELETE", body: queryArg.body })
        }),
        getCustomersCustomerDiscount: build.query<GetCustomersCustomerDiscountApiResponse, GetCustomersCustomerDiscountApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/discount`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getCustomersCustomerSources: build.query<GetCustomersCustomerSourcesApiResponse, GetCustomersCustomerSourcesApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/sources`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, object: queryArg.object, starting_after: queryArg.startingAfter } })
        }),
        postCustomersCustomerSources: build.mutation<PostCustomersCustomerSourcesApiResponse, PostCustomersCustomerSourcesApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/sources`, method: "POST", body: queryArg.body })
        }),
        deleteCustomersCustomerSourcesId: build.mutation<DeleteCustomersCustomerSourcesIdApiResponse, DeleteCustomersCustomerSourcesIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/sources/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getCustomersCustomerSourcesId: build.query<GetCustomersCustomerSourcesIdApiResponse, GetCustomersCustomerSourcesIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/sources/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postCustomersCustomerSourcesId: build.mutation<PostCustomersCustomerSourcesIdApiResponse, PostCustomersCustomerSourcesIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/sources/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        postCustomersCustomerSourcesIdVerify: build.mutation<PostCustomersCustomerSourcesIdVerifyApiResponse, PostCustomersCustomerSourcesIdVerifyApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/sources/${queryArg.id}/verify`, method: "POST", body: queryArg.body })
        }),
        getCustomersCustomerSubscriptions: build.query<GetCustomersCustomerSubscriptionsApiResponse, GetCustomersCustomerSubscriptionsApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/subscriptions`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postCustomersCustomerSubscriptions: build.mutation<PostCustomersCustomerSubscriptionsApiResponse, PostCustomersCustomerSubscriptionsApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/subscriptions`, method: "POST", body: queryArg.body })
        }),
        deleteCustomersCustomerSubscriptionsSubscriptionExposedId: build.mutation<DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdApiResponse, DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/subscriptions/${queryArg.subscriptionExposedId}`, method: "DELETE", body: queryArg.body })
        }),
        getCustomersCustomerSubscriptionsSubscriptionExposedId: build.query<GetCustomersCustomerSubscriptionsSubscriptionExposedIdApiResponse, GetCustomersCustomerSubscriptionsSubscriptionExposedIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/subscriptions/${queryArg.subscriptionExposedId}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postCustomersCustomerSubscriptionsSubscriptionExposedId: build.mutation<PostCustomersCustomerSubscriptionsSubscriptionExposedIdApiResponse, PostCustomersCustomerSubscriptionsSubscriptionExposedIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/subscriptions/${queryArg.subscriptionExposedId}`, method: "POST", body: queryArg.body })
        }),
        deleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount: build.mutation<DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscountApiResponse, DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscountApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/subscriptions/${queryArg.subscriptionExposedId}/discount`, method: "DELETE", body: queryArg.body })
        }),
        getCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount: build.query<GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscountApiResponse, GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscountApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/subscriptions/${queryArg.subscriptionExposedId}/discount`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getCustomersCustomerTaxIds: build.query<GetCustomersCustomerTaxIdsApiResponse, GetCustomersCustomerTaxIdsApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/tax_ids`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postCustomersCustomerTaxIds: build.mutation<PostCustomersCustomerTaxIdsApiResponse, PostCustomersCustomerTaxIdsApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/tax_ids`, method: "POST", body: queryArg.body })
        }),
        deleteCustomersCustomerTaxIdsId: build.mutation<DeleteCustomersCustomerTaxIdsIdApiResponse, DeleteCustomersCustomerTaxIdsIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/tax_ids/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getCustomersCustomerTaxIdsId: build.query<GetCustomersCustomerTaxIdsIdApiResponse, GetCustomersCustomerTaxIdsIdApiArg>({
            query: queryArg => ({ url: `/v1/customers/${queryArg.customer}/tax_ids/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getDisputes: build.query<GetDisputesApiResponse, GetDisputesApiArg>({
            query: queryArg => ({ url: `/v1/disputes`, body: queryArg.body, params: { charge: queryArg.charge, created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, payment_intent: queryArg.paymentIntent, starting_after: queryArg.startingAfter } })
        }),
        getDisputesDispute: build.query<GetDisputesDisputeApiResponse, GetDisputesDisputeApiArg>({
            query: queryArg => ({ url: `/v1/disputes/${queryArg.dispute}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postDisputesDispute: build.mutation<PostDisputesDisputeApiResponse, PostDisputesDisputeApiArg>({
            query: queryArg => ({ url: `/v1/disputes/${queryArg.dispute}`, method: "POST", body: queryArg.body })
        }),
        postDisputesDisputeClose: build.mutation<PostDisputesDisputeCloseApiResponse, PostDisputesDisputeCloseApiArg>({
            query: queryArg => ({ url: `/v1/disputes/${queryArg.dispute}/close`, method: "POST", body: queryArg.body })
        }),
        postEphemeralKeys: build.mutation<PostEphemeralKeysApiResponse, PostEphemeralKeysApiArg>({
            query: queryArg => ({ url: `/v1/ephemeral_keys`, method: "POST", body: queryArg.body })
        }),
        deleteEphemeralKeysKey: build.mutation<DeleteEphemeralKeysKeyApiResponse, DeleteEphemeralKeysKeyApiArg>({
            query: queryArg => ({ url: `/v1/ephemeral_keys/${queryArg.key}`, method: "DELETE", body: queryArg.body })
        }),
        getEvents: build.query<GetEventsApiResponse, GetEventsApiArg>({
            query: queryArg => ({ url: `/v1/events`, body: queryArg.body, params: { created: queryArg.created, delivery_success: queryArg.deliverySuccess, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, type: queryArg.type, types: queryArg.types } })
        }),
        getEventsId: build.query<GetEventsIdApiResponse, GetEventsIdApiArg>({
            query: queryArg => ({ url: `/v1/events/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getExchangeRates: build.query<GetExchangeRatesApiResponse, GetExchangeRatesApiArg>({
            query: queryArg => ({ url: `/v1/exchange_rates`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getExchangeRatesRateId: build.query<GetExchangeRatesRateIdApiResponse, GetExchangeRatesRateIdApiArg>({
            query: queryArg => ({ url: `/v1/exchange_rates/${queryArg.rateId}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getFileLinks: build.query<GetFileLinksApiResponse, GetFileLinksApiArg>({
            query: queryArg => ({ url: `/v1/file_links`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, expired: queryArg.expired, file: queryArg.file, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postFileLinks: build.mutation<PostFileLinksApiResponse, PostFileLinksApiArg>({
            query: queryArg => ({ url: `/v1/file_links`, method: "POST", body: queryArg.body })
        }),
        getFileLinksLink: build.query<GetFileLinksLinkApiResponse, GetFileLinksLinkApiArg>({
            query: queryArg => ({ url: `/v1/file_links/${queryArg.link}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postFileLinksLink: build.mutation<PostFileLinksLinkApiResponse, PostFileLinksLinkApiArg>({
            query: queryArg => ({ url: `/v1/file_links/${queryArg.link}`, method: "POST", body: queryArg.body })
        }),
        getFiles: build.query<GetFilesApiResponse, GetFilesApiArg>({
            query: queryArg => ({ url: `/v1/files`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, purpose: queryArg.purpose, starting_after: queryArg.startingAfter } })
        }),
        postFiles: build.mutation<PostFilesApiResponse, PostFilesApiArg>({
            query: queryArg => ({ url: `/v1/files`, method: "POST", body: queryArg.body })
        }),
        getFilesFile: build.query<GetFilesFileApiResponse, GetFilesFileApiArg>({
            query: queryArg => ({ url: `/v1/files/${queryArg.file}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getInvoiceitems: build.query<GetInvoiceitemsApiResponse, GetInvoiceitemsApiArg>({
            query: queryArg => ({ url: `/v1/invoiceitems`, body: queryArg.body, params: { created: queryArg.created, customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, invoice: queryArg.invoice, limit: queryArg.limit, pending: queryArg.pending, starting_after: queryArg.startingAfter } })
        }),
        postInvoiceitems: build.mutation<PostInvoiceitemsApiResponse, PostInvoiceitemsApiArg>({
            query: queryArg => ({ url: `/v1/invoiceitems`, method: "POST", body: queryArg.body })
        }),
        deleteInvoiceitemsInvoiceitem: build.mutation<DeleteInvoiceitemsInvoiceitemApiResponse, DeleteInvoiceitemsInvoiceitemApiArg>({
            query: queryArg => ({ url: `/v1/invoiceitems/${queryArg.invoiceitem}`, method: "DELETE", body: queryArg.body })
        }),
        getInvoiceitemsInvoiceitem: build.query<GetInvoiceitemsInvoiceitemApiResponse, GetInvoiceitemsInvoiceitemApiArg>({
            query: queryArg => ({ url: `/v1/invoiceitems/${queryArg.invoiceitem}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postInvoiceitemsInvoiceitem: build.mutation<PostInvoiceitemsInvoiceitemApiResponse, PostInvoiceitemsInvoiceitemApiArg>({
            query: queryArg => ({ url: `/v1/invoiceitems/${queryArg.invoiceitem}`, method: "POST", body: queryArg.body })
        }),
        getInvoices: build.query<GetInvoicesApiResponse, GetInvoicesApiArg>({
            query: queryArg => ({ url: `/v1/invoices`, body: queryArg.body, params: { collection_method: queryArg.collectionMethod, created: queryArg.created, customer: queryArg.customer, due_date: queryArg.dueDate, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, status: queryArg.status, subscription: queryArg.subscription } })
        }),
        postInvoices: build.mutation<PostInvoicesApiResponse, PostInvoicesApiArg>({
            query: queryArg => ({ url: `/v1/invoices`, method: "POST", body: queryArg.body })
        }),
        getInvoicesUpcoming: build.query<GetInvoicesUpcomingApiResponse, GetInvoicesUpcomingApiArg>({
            query: queryArg => ({ url: `/v1/invoices/upcoming`, body: queryArg.body, params: { coupon: queryArg.coupon, customer: queryArg.customer, discounts: queryArg.discounts, expand: queryArg.expand, invoice_items: queryArg.invoiceItems, schedule: queryArg.schedule, subscription: queryArg.subscription, subscription_billing_cycle_anchor: queryArg.subscriptionBillingCycleAnchor, subscription_cancel_at: queryArg.subscriptionCancelAt, subscription_cancel_at_period_end: queryArg.subscriptionCancelAtPeriodEnd, subscription_cancel_now: queryArg.subscriptionCancelNow, subscription_default_tax_rates: queryArg.subscriptionDefaultTaxRates, subscription_items: queryArg.subscriptionItems, subscription_proration_behavior: queryArg.subscriptionProrationBehavior, subscription_proration_date: queryArg.subscriptionProrationDate, subscription_start_date: queryArg.subscriptionStartDate, subscription_trial_end: queryArg.subscriptionTrialEnd, subscription_trial_from_plan: queryArg.subscriptionTrialFromPlan } })
        }),
        getInvoicesUpcomingLines: build.query<GetInvoicesUpcomingLinesApiResponse, GetInvoicesUpcomingLinesApiArg>({
            query: queryArg => ({ url: `/v1/invoices/upcoming/lines`, body: queryArg.body, params: { coupon: queryArg.coupon, customer: queryArg.customer, discounts: queryArg.discounts, ending_before: queryArg.endingBefore, expand: queryArg.expand, invoice_items: queryArg.invoiceItems, limit: queryArg.limit, schedule: queryArg.schedule, starting_after: queryArg.startingAfter, subscription: queryArg.subscription, subscription_billing_cycle_anchor: queryArg.subscriptionBillingCycleAnchor, subscription_cancel_at: queryArg.subscriptionCancelAt, subscription_cancel_at_period_end: queryArg.subscriptionCancelAtPeriodEnd, subscription_cancel_now: queryArg.subscriptionCancelNow, subscription_default_tax_rates: queryArg.subscriptionDefaultTaxRates, subscription_items: queryArg.subscriptionItems, subscription_proration_behavior: queryArg.subscriptionProrationBehavior, subscription_proration_date: queryArg.subscriptionProrationDate, subscription_start_date: queryArg.subscriptionStartDate, subscription_trial_end: queryArg.subscriptionTrialEnd, subscription_trial_from_plan: queryArg.subscriptionTrialFromPlan } })
        }),
        deleteInvoicesInvoice: build.mutation<DeleteInvoicesInvoiceApiResponse, DeleteInvoicesInvoiceApiArg>({
            query: queryArg => ({ url: `/v1/invoices/${queryArg.invoice}`, method: "DELETE", body: queryArg.body })
        }),
        getInvoicesInvoice: build.query<GetInvoicesInvoiceApiResponse, GetInvoicesInvoiceApiArg>({
            query: queryArg => ({ url: `/v1/invoices/${queryArg.invoice}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postInvoicesInvoice: build.mutation<PostInvoicesInvoiceApiResponse, PostInvoicesInvoiceApiArg>({
            query: queryArg => ({ url: `/v1/invoices/${queryArg.invoice}`, method: "POST", body: queryArg.body })
        }),
        postInvoicesInvoiceFinalize: build.mutation<PostInvoicesInvoiceFinalizeApiResponse, PostInvoicesInvoiceFinalizeApiArg>({
            query: queryArg => ({ url: `/v1/invoices/${queryArg.invoice}/finalize`, method: "POST", body: queryArg.body })
        }),
        getInvoicesInvoiceLines: build.query<GetInvoicesInvoiceLinesApiResponse, GetInvoicesInvoiceLinesApiArg>({
            query: queryArg => ({ url: `/v1/invoices/${queryArg.invoice}/lines`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postInvoicesInvoiceMarkUncollectible: build.mutation<PostInvoicesInvoiceMarkUncollectibleApiResponse, PostInvoicesInvoiceMarkUncollectibleApiArg>({
            query: queryArg => ({ url: `/v1/invoices/${queryArg.invoice}/mark_uncollectible`, method: "POST", body: queryArg.body })
        }),
        postInvoicesInvoicePay: build.mutation<PostInvoicesInvoicePayApiResponse, PostInvoicesInvoicePayApiArg>({
            query: queryArg => ({ url: `/v1/invoices/${queryArg.invoice}/pay`, method: "POST", body: queryArg.body })
        }),
        postInvoicesInvoiceSend: build.mutation<PostInvoicesInvoiceSendApiResponse, PostInvoicesInvoiceSendApiArg>({
            query: queryArg => ({ url: `/v1/invoices/${queryArg.invoice}/send`, method: "POST", body: queryArg.body })
        }),
        postInvoicesInvoiceVoid: build.mutation<PostInvoicesInvoiceVoidApiResponse, PostInvoicesInvoiceVoidApiArg>({
            query: queryArg => ({ url: `/v1/invoices/${queryArg.invoice}/void`, method: "POST", body: queryArg.body })
        }),
        getIssuerFraudRecords: build.query<GetIssuerFraudRecordsApiResponse, GetIssuerFraudRecordsApiArg>({
            query: queryArg => ({ url: `/v1/issuer_fraud_records`, body: queryArg.body, params: { charge: queryArg.charge, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getIssuerFraudRecordsIssuerFraudRecord: build.query<GetIssuerFraudRecordsIssuerFraudRecordApiResponse, GetIssuerFraudRecordsIssuerFraudRecordApiArg>({
            query: queryArg => ({ url: `/v1/issuer_fraud_records/${queryArg.issuerFraudRecord}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getIssuingAuthorizations: build.query<GetIssuingAuthorizationsApiResponse, GetIssuingAuthorizationsApiArg>({
            query: queryArg => ({ url: `/v1/issuing/authorizations`, body: queryArg.body, params: { card: queryArg.card, cardholder: queryArg.cardholder, created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, status: queryArg.status } })
        }),
        getIssuingAuthorizationsAuthorization: build.query<GetIssuingAuthorizationsAuthorizationApiResponse, GetIssuingAuthorizationsAuthorizationApiArg>({
            query: queryArg => ({ url: `/v1/issuing/authorizations/${queryArg.authorization}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postIssuingAuthorizationsAuthorization: build.mutation<PostIssuingAuthorizationsAuthorizationApiResponse, PostIssuingAuthorizationsAuthorizationApiArg>({
            query: queryArg => ({ url: `/v1/issuing/authorizations/${queryArg.authorization}`, method: "POST", body: queryArg.body })
        }),
        postIssuingAuthorizationsAuthorizationApprove: build.mutation<PostIssuingAuthorizationsAuthorizationApproveApiResponse, PostIssuingAuthorizationsAuthorizationApproveApiArg>({
            query: queryArg => ({ url: `/v1/issuing/authorizations/${queryArg.authorization}/approve`, method: "POST", body: queryArg.body })
        }),
        postIssuingAuthorizationsAuthorizationDecline: build.mutation<PostIssuingAuthorizationsAuthorizationDeclineApiResponse, PostIssuingAuthorizationsAuthorizationDeclineApiArg>({
            query: queryArg => ({ url: `/v1/issuing/authorizations/${queryArg.authorization}/decline`, method: "POST", body: queryArg.body })
        }),
        getIssuingCardholders: build.query<GetIssuingCardholdersApiResponse, GetIssuingCardholdersApiArg>({
            query: queryArg => ({ url: `/v1/issuing/cardholders`, body: queryArg.body, params: { created: queryArg.created, email: queryArg.email, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, phone_number: queryArg.phoneNumber, starting_after: queryArg.startingAfter, status: queryArg.status, type: queryArg.type } })
        }),
        postIssuingCardholders: build.mutation<PostIssuingCardholdersApiResponse, PostIssuingCardholdersApiArg>({
            query: queryArg => ({ url: `/v1/issuing/cardholders`, method: "POST", body: queryArg.body })
        }),
        getIssuingCardholdersCardholder: build.query<GetIssuingCardholdersCardholderApiResponse, GetIssuingCardholdersCardholderApiArg>({
            query: queryArg => ({ url: `/v1/issuing/cardholders/${queryArg.cardholder}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postIssuingCardholdersCardholder: build.mutation<PostIssuingCardholdersCardholderApiResponse, PostIssuingCardholdersCardholderApiArg>({
            query: queryArg => ({ url: `/v1/issuing/cardholders/${queryArg.cardholder}`, method: "POST", body: queryArg.body })
        }),
        getIssuingCards: build.query<GetIssuingCardsApiResponse, GetIssuingCardsApiArg>({
            query: queryArg => ({ url: `/v1/issuing/cards`, body: queryArg.body, params: { cardholder: queryArg.cardholder, created: queryArg.created, ending_before: queryArg.endingBefore, exp_month: queryArg.expMonth, exp_year: queryArg.expYear, expand: queryArg.expand, last4: queryArg.last4, limit: queryArg.limit, starting_after: queryArg.startingAfter, status: queryArg.status, type: queryArg.type } })
        }),
        postIssuingCards: build.mutation<PostIssuingCardsApiResponse, PostIssuingCardsApiArg>({
            query: queryArg => ({ url: `/v1/issuing/cards`, method: "POST", body: queryArg.body })
        }),
        getIssuingCardsCard: build.query<GetIssuingCardsCardApiResponse, GetIssuingCardsCardApiArg>({
            query: queryArg => ({ url: `/v1/issuing/cards/${queryArg.card}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postIssuingCardsCard: build.mutation<PostIssuingCardsCardApiResponse, PostIssuingCardsCardApiArg>({
            query: queryArg => ({ url: `/v1/issuing/cards/${queryArg.card}`, method: "POST", body: queryArg.body })
        }),
        getIssuingDisputes: build.query<GetIssuingDisputesApiResponse, GetIssuingDisputesApiArg>({
            query: queryArg => ({ url: `/v1/issuing/disputes`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, status: queryArg.status, transaction: queryArg.transaction } })
        }),
        postIssuingDisputes: build.mutation<PostIssuingDisputesApiResponse, PostIssuingDisputesApiArg>({
            query: queryArg => ({ url: `/v1/issuing/disputes`, method: "POST", body: queryArg.body })
        }),
        getIssuingDisputesDispute: build.query<GetIssuingDisputesDisputeApiResponse, GetIssuingDisputesDisputeApiArg>({
            query: queryArg => ({ url: `/v1/issuing/disputes/${queryArg.dispute}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postIssuingDisputesDispute: build.mutation<PostIssuingDisputesDisputeApiResponse, PostIssuingDisputesDisputeApiArg>({
            query: queryArg => ({ url: `/v1/issuing/disputes/${queryArg.dispute}`, method: "POST", body: queryArg.body })
        }),
        postIssuingDisputesDisputeSubmit: build.mutation<PostIssuingDisputesDisputeSubmitApiResponse, PostIssuingDisputesDisputeSubmitApiArg>({
            query: queryArg => ({ url: `/v1/issuing/disputes/${queryArg.dispute}/submit`, method: "POST", body: queryArg.body })
        }),
        getIssuingSettlements: build.query<GetIssuingSettlementsApiResponse, GetIssuingSettlementsApiArg>({
            query: queryArg => ({ url: `/v1/issuing/settlements`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getIssuingSettlementsSettlement: build.query<GetIssuingSettlementsSettlementApiResponse, GetIssuingSettlementsSettlementApiArg>({
            query: queryArg => ({ url: `/v1/issuing/settlements/${queryArg.settlement}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postIssuingSettlementsSettlement: build.mutation<PostIssuingSettlementsSettlementApiResponse, PostIssuingSettlementsSettlementApiArg>({
            query: queryArg => ({ url: `/v1/issuing/settlements/${queryArg.settlement}`, method: "POST", body: queryArg.body })
        }),
        getIssuingTransactions: build.query<GetIssuingTransactionsApiResponse, GetIssuingTransactionsApiArg>({
            query: queryArg => ({ url: `/v1/issuing/transactions`, body: queryArg.body, params: { card: queryArg.card, cardholder: queryArg.cardholder, created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getIssuingTransactionsTransaction: build.query<GetIssuingTransactionsTransactionApiResponse, GetIssuingTransactionsTransactionApiArg>({
            query: queryArg => ({ url: `/v1/issuing/transactions/${queryArg.transaction}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postIssuingTransactionsTransaction: build.mutation<PostIssuingTransactionsTransactionApiResponse, PostIssuingTransactionsTransactionApiArg>({
            query: queryArg => ({ url: `/v1/issuing/transactions/${queryArg.transaction}`, method: "POST", body: queryArg.body })
        }),
        getMandatesMandate: build.query<GetMandatesMandateApiResponse, GetMandatesMandateApiArg>({
            query: queryArg => ({ url: `/v1/mandates/${queryArg.mandate}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getOrderReturns: build.query<GetOrderReturnsApiResponse, GetOrderReturnsApiArg>({
            query: queryArg => ({ url: `/v1/order_returns`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, order: queryArg.order, starting_after: queryArg.startingAfter } })
        }),
        getOrderReturnsId: build.query<GetOrderReturnsIdApiResponse, GetOrderReturnsIdApiArg>({
            query: queryArg => ({ url: `/v1/order_returns/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getOrders: build.query<GetOrdersApiResponse, GetOrdersApiArg>({
            query: queryArg => ({ url: `/v1/orders`, body: queryArg.body, params: { created: queryArg.created, customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, ids: queryArg.ids, limit: queryArg.limit, starting_after: queryArg.startingAfter, status: queryArg.status, status_transitions: queryArg.statusTransitions, upstream_ids: queryArg.upstreamIds } })
        }),
        postOrders: build.mutation<PostOrdersApiResponse, PostOrdersApiArg>({
            query: queryArg => ({ url: `/v1/orders`, method: "POST", body: queryArg.body })
        }),
        getOrdersId: build.query<GetOrdersIdApiResponse, GetOrdersIdApiArg>({
            query: queryArg => ({ url: `/v1/orders/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postOrdersId: build.mutation<PostOrdersIdApiResponse, PostOrdersIdApiArg>({
            query: queryArg => ({ url: `/v1/orders/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        postOrdersIdPay: build.mutation<PostOrdersIdPayApiResponse, PostOrdersIdPayApiArg>({
            query: queryArg => ({ url: `/v1/orders/${queryArg.id}/pay`, method: "POST", body: queryArg.body })
        }),
        postOrdersIdReturns: build.mutation<PostOrdersIdReturnsApiResponse, PostOrdersIdReturnsApiArg>({
            query: queryArg => ({ url: `/v1/orders/${queryArg.id}/returns`, method: "POST", body: queryArg.body })
        }),
        getPaymentIntents: build.query<GetPaymentIntentsApiResponse, GetPaymentIntentsApiArg>({
            query: queryArg => ({ url: `/v1/payment_intents`, body: queryArg.body, params: { created: queryArg.created, customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postPaymentIntents: build.mutation<PostPaymentIntentsApiResponse, PostPaymentIntentsApiArg>({
            query: queryArg => ({ url: `/v1/payment_intents`, method: "POST", body: queryArg.body })
        }),
        getPaymentIntentsIntent: build.query<GetPaymentIntentsIntentApiResponse, GetPaymentIntentsIntentApiArg>({
            query: queryArg => ({ url: `/v1/payment_intents/${queryArg.intent}`, body: queryArg.body, params: { client_secret: queryArg.clientSecret, expand: queryArg.expand } })
        }),
        postPaymentIntentsIntent: build.mutation<PostPaymentIntentsIntentApiResponse, PostPaymentIntentsIntentApiArg>({
            query: queryArg => ({ url: `/v1/payment_intents/${queryArg.intent}`, method: "POST", body: queryArg.body })
        }),
        postPaymentIntentsIntentCancel: build.mutation<PostPaymentIntentsIntentCancelApiResponse, PostPaymentIntentsIntentCancelApiArg>({
            query: queryArg => ({ url: `/v1/payment_intents/${queryArg.intent}/cancel`, method: "POST", body: queryArg.body })
        }),
        postPaymentIntentsIntentCapture: build.mutation<PostPaymentIntentsIntentCaptureApiResponse, PostPaymentIntentsIntentCaptureApiArg>({
            query: queryArg => ({ url: `/v1/payment_intents/${queryArg.intent}/capture`, method: "POST", body: queryArg.body })
        }),
        postPaymentIntentsIntentConfirm: build.mutation<PostPaymentIntentsIntentConfirmApiResponse, PostPaymentIntentsIntentConfirmApiArg>({
            query: queryArg => ({ url: `/v1/payment_intents/${queryArg.intent}/confirm`, method: "POST", body: queryArg.body })
        }),
        getPaymentMethods: build.query<GetPaymentMethodsApiResponse, GetPaymentMethodsApiArg>({
            query: queryArg => ({ url: `/v1/payment_methods`, body: queryArg.body, params: { customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, type: queryArg.type } })
        }),
        postPaymentMethods: build.mutation<PostPaymentMethodsApiResponse, PostPaymentMethodsApiArg>({
            query: queryArg => ({ url: `/v1/payment_methods`, method: "POST", body: queryArg.body })
        }),
        getPaymentMethodsPaymentMethod: build.query<GetPaymentMethodsPaymentMethodApiResponse, GetPaymentMethodsPaymentMethodApiArg>({
            query: queryArg => ({ url: `/v1/payment_methods/${queryArg.paymentMethod}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postPaymentMethodsPaymentMethod: build.mutation<PostPaymentMethodsPaymentMethodApiResponse, PostPaymentMethodsPaymentMethodApiArg>({
            query: queryArg => ({ url: `/v1/payment_methods/${queryArg.paymentMethod}`, method: "POST", body: queryArg.body })
        }),
        postPaymentMethodsPaymentMethodAttach: build.mutation<PostPaymentMethodsPaymentMethodAttachApiResponse, PostPaymentMethodsPaymentMethodAttachApiArg>({
            query: queryArg => ({ url: `/v1/payment_methods/${queryArg.paymentMethod}/attach`, method: "POST", body: queryArg.body })
        }),
        postPaymentMethodsPaymentMethodDetach: build.mutation<PostPaymentMethodsPaymentMethodDetachApiResponse, PostPaymentMethodsPaymentMethodDetachApiArg>({
            query: queryArg => ({ url: `/v1/payment_methods/${queryArg.paymentMethod}/detach`, method: "POST", body: queryArg.body })
        }),
        getPayouts: build.query<GetPayoutsApiResponse, GetPayoutsApiArg>({
            query: queryArg => ({ url: `/v1/payouts`, body: queryArg.body, params: { arrival_date: queryArg.arrivalDate, created: queryArg.created, destination: queryArg.destination, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, status: queryArg.status } })
        }),
        postPayouts: build.mutation<PostPayoutsApiResponse, PostPayoutsApiArg>({
            query: queryArg => ({ url: `/v1/payouts`, method: "POST", body: queryArg.body })
        }),
        getPayoutsPayout: build.query<GetPayoutsPayoutApiResponse, GetPayoutsPayoutApiArg>({
            query: queryArg => ({ url: `/v1/payouts/${queryArg.payout}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postPayoutsPayout: build.mutation<PostPayoutsPayoutApiResponse, PostPayoutsPayoutApiArg>({
            query: queryArg => ({ url: `/v1/payouts/${queryArg.payout}`, method: "POST", body: queryArg.body })
        }),
        postPayoutsPayoutCancel: build.mutation<PostPayoutsPayoutCancelApiResponse, PostPayoutsPayoutCancelApiArg>({
            query: queryArg => ({ url: `/v1/payouts/${queryArg.payout}/cancel`, method: "POST", body: queryArg.body })
        }),
        postPayoutsPayoutReverse: build.mutation<PostPayoutsPayoutReverseApiResponse, PostPayoutsPayoutReverseApiArg>({
            query: queryArg => ({ url: `/v1/payouts/${queryArg.payout}/reverse`, method: "POST", body: queryArg.body })
        }),
        getPlans: build.query<GetPlansApiResponse, GetPlansApiArg>({
            query: queryArg => ({ url: `/v1/plans`, body: queryArg.body, params: { active: queryArg.active, created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, product: queryArg.product, starting_after: queryArg.startingAfter } })
        }),
        postPlans: build.mutation<PostPlansApiResponse, PostPlansApiArg>({
            query: queryArg => ({ url: `/v1/plans`, method: "POST", body: queryArg.body })
        }),
        deletePlansPlan: build.mutation<DeletePlansPlanApiResponse, DeletePlansPlanApiArg>({
            query: queryArg => ({ url: `/v1/plans/${queryArg.plan}`, method: "DELETE", body: queryArg.body })
        }),
        getPlansPlan: build.query<GetPlansPlanApiResponse, GetPlansPlanApiArg>({
            query: queryArg => ({ url: `/v1/plans/${queryArg.plan}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postPlansPlan: build.mutation<PostPlansPlanApiResponse, PostPlansPlanApiArg>({
            query: queryArg => ({ url: `/v1/plans/${queryArg.plan}`, method: "POST", body: queryArg.body })
        }),
        getPrices: build.query<GetPricesApiResponse, GetPricesApiArg>({
            query: queryArg => ({ url: `/v1/prices`, body: queryArg.body, params: { active: queryArg.active, created: queryArg.created, currency: queryArg.currency, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, lookup_keys: queryArg.lookupKeys, product: queryArg.product, recurring: queryArg.recurring, starting_after: queryArg.startingAfter, type: queryArg.type } })
        }),
        postPrices: build.mutation<PostPricesApiResponse, PostPricesApiArg>({
            query: queryArg => ({ url: `/v1/prices`, method: "POST", body: queryArg.body })
        }),
        getPricesPrice: build.query<GetPricesPriceApiResponse, GetPricesPriceApiArg>({
            query: queryArg => ({ url: `/v1/prices/${queryArg.price}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postPricesPrice: build.mutation<PostPricesPriceApiResponse, PostPricesPriceApiArg>({
            query: queryArg => ({ url: `/v1/prices/${queryArg.price}`, method: "POST", body: queryArg.body })
        }),
        getProducts: build.query<GetProductsApiResponse, GetProductsApiArg>({
            query: queryArg => ({ url: `/v1/products`, body: queryArg.body, params: { active: queryArg.active, created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, ids: queryArg.ids, limit: queryArg.limit, shippable: queryArg.shippable, starting_after: queryArg.startingAfter, url: queryArg.url } })
        }),
        postProducts: build.mutation<PostProductsApiResponse, PostProductsApiArg>({
            query: queryArg => ({ url: `/v1/products`, method: "POST", body: queryArg.body })
        }),
        deleteProductsId: build.mutation<DeleteProductsIdApiResponse, DeleteProductsIdApiArg>({
            query: queryArg => ({ url: `/v1/products/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getProductsId: build.query<GetProductsIdApiResponse, GetProductsIdApiArg>({
            query: queryArg => ({ url: `/v1/products/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postProductsId: build.mutation<PostProductsIdApiResponse, PostProductsIdApiArg>({
            query: queryArg => ({ url: `/v1/products/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        getPromotionCodes: build.query<GetPromotionCodesApiResponse, GetPromotionCodesApiArg>({
            query: queryArg => ({ url: `/v1/promotion_codes`, body: queryArg.body, params: { active: queryArg.active, code: queryArg.code, coupon: queryArg.coupon, created: queryArg.created, customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postPromotionCodes: build.mutation<PostPromotionCodesApiResponse, PostPromotionCodesApiArg>({
            query: queryArg => ({ url: `/v1/promotion_codes`, method: "POST", body: queryArg.body })
        }),
        getPromotionCodesPromotionCode: build.query<GetPromotionCodesPromotionCodeApiResponse, GetPromotionCodesPromotionCodeApiArg>({
            query: queryArg => ({ url: `/v1/promotion_codes/${queryArg.promotionCode}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postPromotionCodesPromotionCode: build.mutation<PostPromotionCodesPromotionCodeApiResponse, PostPromotionCodesPromotionCodeApiArg>({
            query: queryArg => ({ url: `/v1/promotion_codes/${queryArg.promotionCode}`, method: "POST", body: queryArg.body })
        }),
        getRadarEarlyFraudWarnings: build.query<GetRadarEarlyFraudWarningsApiResponse, GetRadarEarlyFraudWarningsApiArg>({
            query: queryArg => ({ url: `/v1/radar/early_fraud_warnings`, body: queryArg.body, params: { charge: queryArg.charge, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getRadarEarlyFraudWarningsEarlyFraudWarning: build.query<GetRadarEarlyFraudWarningsEarlyFraudWarningApiResponse, GetRadarEarlyFraudWarningsEarlyFraudWarningApiArg>({
            query: queryArg => ({ url: `/v1/radar/early_fraud_warnings/${queryArg.earlyFraudWarning}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getRadarValueListItems: build.query<GetRadarValueListItemsApiResponse, GetRadarValueListItemsApiArg>({
            query: queryArg => ({ url: `/v1/radar/value_list_items`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, value: queryArg.value, value_list: queryArg.valueList } })
        }),
        postRadarValueListItems: build.mutation<PostRadarValueListItemsApiResponse, PostRadarValueListItemsApiArg>({
            query: queryArg => ({ url: `/v1/radar/value_list_items`, method: "POST", body: queryArg.body })
        }),
        deleteRadarValueListItemsItem: build.mutation<DeleteRadarValueListItemsItemApiResponse, DeleteRadarValueListItemsItemApiArg>({
            query: queryArg => ({ url: `/v1/radar/value_list_items/${queryArg.item}`, method: "DELETE", body: queryArg.body })
        }),
        getRadarValueListItemsItem: build.query<GetRadarValueListItemsItemApiResponse, GetRadarValueListItemsItemApiArg>({
            query: queryArg => ({ url: `/v1/radar/value_list_items/${queryArg.item}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getRadarValueLists: build.query<GetRadarValueListsApiResponse, GetRadarValueListsApiArg>({
            query: queryArg => ({ url: `/v1/radar/value_lists`, body: queryArg.body, params: { alias: queryArg.alias, contains: queryArg.contains, created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postRadarValueLists: build.mutation<PostRadarValueListsApiResponse, PostRadarValueListsApiArg>({
            query: queryArg => ({ url: `/v1/radar/value_lists`, method: "POST", body: queryArg.body })
        }),
        deleteRadarValueListsValueList: build.mutation<DeleteRadarValueListsValueListApiResponse, DeleteRadarValueListsValueListApiArg>({
            query: queryArg => ({ url: `/v1/radar/value_lists/${queryArg.valueList}`, method: "DELETE", body: queryArg.body })
        }),
        getRadarValueListsValueList: build.query<GetRadarValueListsValueListApiResponse, GetRadarValueListsValueListApiArg>({
            query: queryArg => ({ url: `/v1/radar/value_lists/${queryArg.valueList}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postRadarValueListsValueList: build.mutation<PostRadarValueListsValueListApiResponse, PostRadarValueListsValueListApiArg>({
            query: queryArg => ({ url: `/v1/radar/value_lists/${queryArg.valueList}`, method: "POST", body: queryArg.body })
        }),
        getRecipients: build.query<GetRecipientsApiResponse, GetRecipientsApiArg>({
            query: queryArg => ({ url: `/v1/recipients`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, type: queryArg.type, verified: queryArg.verified } })
        }),
        postRecipients: build.mutation<PostRecipientsApiResponse, PostRecipientsApiArg>({
            query: queryArg => ({ url: `/v1/recipients`, method: "POST", body: queryArg.body })
        }),
        deleteRecipientsId: build.mutation<DeleteRecipientsIdApiResponse, DeleteRecipientsIdApiArg>({
            query: queryArg => ({ url: `/v1/recipients/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getRecipientsId: build.query<GetRecipientsIdApiResponse, GetRecipientsIdApiArg>({
            query: queryArg => ({ url: `/v1/recipients/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postRecipientsId: build.mutation<PostRecipientsIdApiResponse, PostRecipientsIdApiArg>({
            query: queryArg => ({ url: `/v1/recipients/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        getRefunds: build.query<GetRefundsApiResponse, GetRefundsApiArg>({
            query: queryArg => ({ url: `/v1/refunds`, body: queryArg.body, params: { charge: queryArg.charge, created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, payment_intent: queryArg.paymentIntent, starting_after: queryArg.startingAfter } })
        }),
        postRefunds: build.mutation<PostRefundsApiResponse, PostRefundsApiArg>({
            query: queryArg => ({ url: `/v1/refunds`, method: "POST", body: queryArg.body })
        }),
        getRefundsRefund: build.query<GetRefundsRefundApiResponse, GetRefundsRefundApiArg>({
            query: queryArg => ({ url: `/v1/refunds/${queryArg.refund}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postRefundsRefund: build.mutation<PostRefundsRefundApiResponse, PostRefundsRefundApiArg>({
            query: queryArg => ({ url: `/v1/refunds/${queryArg.refund}`, method: "POST", body: queryArg.body })
        }),
        getReportingReportRuns: build.query<GetReportingReportRunsApiResponse, GetReportingReportRunsApiArg>({
            query: queryArg => ({ url: `/v1/reporting/report_runs`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postReportingReportRuns: build.mutation<PostReportingReportRunsApiResponse, PostReportingReportRunsApiArg>({
            query: queryArg => ({ url: `/v1/reporting/report_runs`, method: "POST", body: queryArg.body })
        }),
        getReportingReportRunsReportRun: build.query<GetReportingReportRunsReportRunApiResponse, GetReportingReportRunsReportRunApiArg>({
            query: queryArg => ({ url: `/v1/reporting/report_runs/${queryArg.reportRun}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getReportingReportTypes: build.query<GetReportingReportTypesApiResponse, GetReportingReportTypesApiArg>({
            query: queryArg => ({ url: `/v1/reporting/report_types`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getReportingReportTypesReportType: build.query<GetReportingReportTypesReportTypeApiResponse, GetReportingReportTypesReportTypeApiArg>({
            query: queryArg => ({ url: `/v1/reporting/report_types/${queryArg.reportType}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getReviews: build.query<GetReviewsApiResponse, GetReviewsApiArg>({
            query: queryArg => ({ url: `/v1/reviews`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getReviewsReview: build.query<GetReviewsReviewApiResponse, GetReviewsReviewApiArg>({
            query: queryArg => ({ url: `/v1/reviews/${queryArg.review}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postReviewsReviewApprove: build.mutation<PostReviewsReviewApproveApiResponse, PostReviewsReviewApproveApiArg>({
            query: queryArg => ({ url: `/v1/reviews/${queryArg.review}/approve`, method: "POST", body: queryArg.body })
        }),
        getSetupAttempts: build.query<GetSetupAttemptsApiResponse, GetSetupAttemptsApiArg>({
            query: queryArg => ({ url: `/v1/setup_attempts`, body: queryArg.body, params: { created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, setup_intent: queryArg.setupIntent, starting_after: queryArg.startingAfter } })
        }),
        getSetupIntents: build.query<GetSetupIntentsApiResponse, GetSetupIntentsApiArg>({
            query: queryArg => ({ url: `/v1/setup_intents`, body: queryArg.body, params: { created: queryArg.created, customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, payment_method: queryArg.paymentMethod, starting_after: queryArg.startingAfter } })
        }),
        postSetupIntents: build.mutation<PostSetupIntentsApiResponse, PostSetupIntentsApiArg>({
            query: queryArg => ({ url: `/v1/setup_intents`, method: "POST", body: queryArg.body })
        }),
        getSetupIntentsIntent: build.query<GetSetupIntentsIntentApiResponse, GetSetupIntentsIntentApiArg>({
            query: queryArg => ({ url: `/v1/setup_intents/${queryArg.intent}`, body: queryArg.body, params: { client_secret: queryArg.clientSecret, expand: queryArg.expand } })
        }),
        postSetupIntentsIntent: build.mutation<PostSetupIntentsIntentApiResponse, PostSetupIntentsIntentApiArg>({
            query: queryArg => ({ url: `/v1/setup_intents/${queryArg.intent}`, method: "POST", body: queryArg.body })
        }),
        postSetupIntentsIntentCancel: build.mutation<PostSetupIntentsIntentCancelApiResponse, PostSetupIntentsIntentCancelApiArg>({
            query: queryArg => ({ url: `/v1/setup_intents/${queryArg.intent}/cancel`, method: "POST", body: queryArg.body })
        }),
        postSetupIntentsIntentConfirm: build.mutation<PostSetupIntentsIntentConfirmApiResponse, PostSetupIntentsIntentConfirmApiArg>({
            query: queryArg => ({ url: `/v1/setup_intents/${queryArg.intent}/confirm`, method: "POST", body: queryArg.body })
        }),
        getSigmaScheduledQueryRuns: build.query<GetSigmaScheduledQueryRunsApiResponse, GetSigmaScheduledQueryRunsApiArg>({
            query: queryArg => ({ url: `/v1/sigma/scheduled_query_runs`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getSigmaScheduledQueryRunsScheduledQueryRun: build.query<GetSigmaScheduledQueryRunsScheduledQueryRunApiResponse, GetSigmaScheduledQueryRunsScheduledQueryRunApiArg>({
            query: queryArg => ({ url: `/v1/sigma/scheduled_query_runs/${queryArg.scheduledQueryRun}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getSkus: build.query<GetSkusApiResponse, GetSkusApiArg>({
            query: queryArg => ({ url: `/v1/skus`, body: queryArg.body, params: { active: queryArg.active, attributes: queryArg.attributes, ending_before: queryArg.endingBefore, expand: queryArg.expand, ids: queryArg.ids, in_stock: queryArg.inStock, limit: queryArg.limit, product: queryArg.product, starting_after: queryArg.startingAfter } })
        }),
        postSkus: build.mutation<PostSkusApiResponse, PostSkusApiArg>({
            query: queryArg => ({ url: `/v1/skus`, method: "POST", body: queryArg.body })
        }),
        deleteSkusId: build.mutation<DeleteSkusIdApiResponse, DeleteSkusIdApiArg>({
            query: queryArg => ({ url: `/v1/skus/${queryArg.id}`, method: "DELETE", body: queryArg.body })
        }),
        getSkusId: build.query<GetSkusIdApiResponse, GetSkusIdApiArg>({
            query: queryArg => ({ url: `/v1/skus/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postSkusId: build.mutation<PostSkusIdApiResponse, PostSkusIdApiArg>({
            query: queryArg => ({ url: `/v1/skus/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        postSources: build.mutation<PostSourcesApiResponse, PostSourcesApiArg>({
            query: queryArg => ({ url: `/v1/sources`, method: "POST", body: queryArg.body })
        }),
        getSourcesSource: build.query<GetSourcesSourceApiResponse, GetSourcesSourceApiArg>({
            query: queryArg => ({ url: `/v1/sources/${queryArg.source}`, body: queryArg.body, params: { client_secret: queryArg.clientSecret, expand: queryArg.expand } })
        }),
        postSourcesSource: build.mutation<PostSourcesSourceApiResponse, PostSourcesSourceApiArg>({
            query: queryArg => ({ url: `/v1/sources/${queryArg.source}`, method: "POST", body: queryArg.body })
        }),
        getSourcesSourceMandateNotificationsMandateNotification: build.query<GetSourcesSourceMandateNotificationsMandateNotificationApiResponse, GetSourcesSourceMandateNotificationsMandateNotificationApiArg>({
            query: queryArg => ({ url: `/v1/sources/${queryArg.source}/mandate_notifications/${queryArg.mandateNotification}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getSourcesSourceSourceTransactions: build.query<GetSourcesSourceSourceTransactionsApiResponse, GetSourcesSourceSourceTransactionsApiArg>({
            query: queryArg => ({ url: `/v1/sources/${queryArg.source}/source_transactions`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        getSourcesSourceSourceTransactionsSourceTransaction: build.query<GetSourcesSourceSourceTransactionsSourceTransactionApiResponse, GetSourcesSourceSourceTransactionsSourceTransactionApiArg>({
            query: queryArg => ({ url: `/v1/sources/${queryArg.source}/source_transactions/${queryArg.sourceTransaction}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postSourcesSourceVerify: build.mutation<PostSourcesSourceVerifyApiResponse, PostSourcesSourceVerifyApiArg>({
            query: queryArg => ({ url: `/v1/sources/${queryArg.source}/verify`, method: "POST", body: queryArg.body })
        }),
        getSubscriptionItems: build.query<GetSubscriptionItemsApiResponse, GetSubscriptionItemsApiArg>({
            query: queryArg => ({ url: `/v1/subscription_items`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, subscription: queryArg.subscription } })
        }),
        postSubscriptionItems: build.mutation<PostSubscriptionItemsApiResponse, PostSubscriptionItemsApiArg>({
            query: queryArg => ({ url: `/v1/subscription_items`, method: "POST", body: queryArg.body })
        }),
        deleteSubscriptionItemsItem: build.mutation<DeleteSubscriptionItemsItemApiResponse, DeleteSubscriptionItemsItemApiArg>({
            query: queryArg => ({ url: `/v1/subscription_items/${queryArg.item}`, method: "DELETE", body: queryArg.body })
        }),
        getSubscriptionItemsItem: build.query<GetSubscriptionItemsItemApiResponse, GetSubscriptionItemsItemApiArg>({
            query: queryArg => ({ url: `/v1/subscription_items/${queryArg.item}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postSubscriptionItemsItem: build.mutation<PostSubscriptionItemsItemApiResponse, PostSubscriptionItemsItemApiArg>({
            query: queryArg => ({ url: `/v1/subscription_items/${queryArg.item}`, method: "POST", body: queryArg.body })
        }),
        getSubscriptionItemsSubscriptionItemUsageRecordSummaries: build.query<GetSubscriptionItemsSubscriptionItemUsageRecordSummariesApiResponse, GetSubscriptionItemsSubscriptionItemUsageRecordSummariesApiArg>({
            query: queryArg => ({ url: `/v1/subscription_items/${queryArg.subscriptionItem}/usage_record_summaries`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postSubscriptionItemsSubscriptionItemUsageRecords: build.mutation<PostSubscriptionItemsSubscriptionItemUsageRecordsApiResponse, PostSubscriptionItemsSubscriptionItemUsageRecordsApiArg>({
            query: queryArg => ({ url: `/v1/subscription_items/${queryArg.subscriptionItem}/usage_records`, method: "POST", body: queryArg.body })
        }),
        getSubscriptionSchedules: build.query<GetSubscriptionSchedulesApiResponse, GetSubscriptionSchedulesApiArg>({
            query: queryArg => ({ url: `/v1/subscription_schedules`, body: queryArg.body, params: { canceled_at: queryArg.canceledAt, completed_at: queryArg.completedAt, created: queryArg.created, customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, released_at: queryArg.releasedAt, scheduled: queryArg.scheduled, starting_after: queryArg.startingAfter } })
        }),
        postSubscriptionSchedules: build.mutation<PostSubscriptionSchedulesApiResponse, PostSubscriptionSchedulesApiArg>({
            query: queryArg => ({ url: `/v1/subscription_schedules`, method: "POST", body: queryArg.body })
        }),
        getSubscriptionSchedulesSchedule: build.query<GetSubscriptionSchedulesScheduleApiResponse, GetSubscriptionSchedulesScheduleApiArg>({
            query: queryArg => ({ url: `/v1/subscription_schedules/${queryArg.schedule}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postSubscriptionSchedulesSchedule: build.mutation<PostSubscriptionSchedulesScheduleApiResponse, PostSubscriptionSchedulesScheduleApiArg>({
            query: queryArg => ({ url: `/v1/subscription_schedules/${queryArg.schedule}`, method: "POST", body: queryArg.body })
        }),
        postSubscriptionSchedulesScheduleCancel: build.mutation<PostSubscriptionSchedulesScheduleCancelApiResponse, PostSubscriptionSchedulesScheduleCancelApiArg>({
            query: queryArg => ({ url: `/v1/subscription_schedules/${queryArg.schedule}/cancel`, method: "POST", body: queryArg.body })
        }),
        postSubscriptionSchedulesScheduleRelease: build.mutation<PostSubscriptionSchedulesScheduleReleaseApiResponse, PostSubscriptionSchedulesScheduleReleaseApiArg>({
            query: queryArg => ({ url: `/v1/subscription_schedules/${queryArg.schedule}/release`, method: "POST", body: queryArg.body })
        }),
        getSubscriptions: build.query<GetSubscriptionsApiResponse, GetSubscriptionsApiArg>({
            query: queryArg => ({ url: `/v1/subscriptions`, body: queryArg.body, params: { collection_method: queryArg.collectionMethod, created: queryArg.created, current_period_end: queryArg.currentPeriodEnd, current_period_start: queryArg.currentPeriodStart, customer: queryArg.customer, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, price: queryArg.price, starting_after: queryArg.startingAfter, status: queryArg.status } })
        }),
        postSubscriptions: build.mutation<PostSubscriptionsApiResponse, PostSubscriptionsApiArg>({
            query: queryArg => ({ url: `/v1/subscriptions`, method: "POST", body: queryArg.body })
        }),
        deleteSubscriptionsSubscriptionExposedId: build.mutation<DeleteSubscriptionsSubscriptionExposedIdApiResponse, DeleteSubscriptionsSubscriptionExposedIdApiArg>({
            query: queryArg => ({ url: `/v1/subscriptions/${queryArg.subscriptionExposedId}`, method: "DELETE", body: queryArg.body })
        }),
        getSubscriptionsSubscriptionExposedId: build.query<GetSubscriptionsSubscriptionExposedIdApiResponse, GetSubscriptionsSubscriptionExposedIdApiArg>({
            query: queryArg => ({ url: `/v1/subscriptions/${queryArg.subscriptionExposedId}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postSubscriptionsSubscriptionExposedId: build.mutation<PostSubscriptionsSubscriptionExposedIdApiResponse, PostSubscriptionsSubscriptionExposedIdApiArg>({
            query: queryArg => ({ url: `/v1/subscriptions/${queryArg.subscriptionExposedId}`, method: "POST", body: queryArg.body })
        }),
        deleteSubscriptionsSubscriptionExposedIdDiscount: build.mutation<DeleteSubscriptionsSubscriptionExposedIdDiscountApiResponse, DeleteSubscriptionsSubscriptionExposedIdDiscountApiArg>({
            query: queryArg => ({ url: `/v1/subscriptions/${queryArg.subscriptionExposedId}/discount`, method: "DELETE", body: queryArg.body })
        }),
        getTaxRates: build.query<GetTaxRatesApiResponse, GetTaxRatesApiArg>({
            query: queryArg => ({ url: `/v1/tax_rates`, body: queryArg.body, params: { active: queryArg.active, created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, inclusive: queryArg.inclusive, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postTaxRates: build.mutation<PostTaxRatesApiResponse, PostTaxRatesApiArg>({
            query: queryArg => ({ url: `/v1/tax_rates`, method: "POST", body: queryArg.body })
        }),
        getTaxRatesTaxRate: build.query<GetTaxRatesTaxRateApiResponse, GetTaxRatesTaxRateApiArg>({
            query: queryArg => ({ url: `/v1/tax_rates/${queryArg.taxRate}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postTaxRatesTaxRate: build.mutation<PostTaxRatesTaxRateApiResponse, PostTaxRatesTaxRateApiArg>({
            query: queryArg => ({ url: `/v1/tax_rates/${queryArg.taxRate}`, method: "POST", body: queryArg.body })
        }),
        postTerminalConnectionTokens: build.mutation<PostTerminalConnectionTokensApiResponse, PostTerminalConnectionTokensApiArg>({
            query: queryArg => ({ url: `/v1/terminal/connection_tokens`, method: "POST", body: queryArg.body })
        }),
        getTerminalLocations: build.query<GetTerminalLocationsApiResponse, GetTerminalLocationsApiArg>({
            query: queryArg => ({ url: `/v1/terminal/locations`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postTerminalLocations: build.mutation<PostTerminalLocationsApiResponse, PostTerminalLocationsApiArg>({
            query: queryArg => ({ url: `/v1/terminal/locations`, method: "POST", body: queryArg.body })
        }),
        deleteTerminalLocationsLocation: build.mutation<DeleteTerminalLocationsLocationApiResponse, DeleteTerminalLocationsLocationApiArg>({
            query: queryArg => ({ url: `/v1/terminal/locations/${queryArg.location}`, method: "DELETE", body: queryArg.body })
        }),
        getTerminalLocationsLocation: build.query<GetTerminalLocationsLocationApiResponse, GetTerminalLocationsLocationApiArg>({
            query: queryArg => ({ url: `/v1/terminal/locations/${queryArg.location}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postTerminalLocationsLocation: build.mutation<PostTerminalLocationsLocationApiResponse, PostTerminalLocationsLocationApiArg>({
            query: queryArg => ({ url: `/v1/terminal/locations/${queryArg.location}`, method: "POST", body: queryArg.body })
        }),
        getTerminalReaders: build.query<GetTerminalReadersApiResponse, GetTerminalReadersApiArg>({
            query: queryArg => ({ url: `/v1/terminal/readers`, body: queryArg.body, params: { device_type: queryArg.deviceType, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, location: queryArg.location, starting_after: queryArg.startingAfter, status: queryArg.status } })
        }),
        postTerminalReaders: build.mutation<PostTerminalReadersApiResponse, PostTerminalReadersApiArg>({
            query: queryArg => ({ url: `/v1/terminal/readers`, method: "POST", body: queryArg.body })
        }),
        deleteTerminalReadersReader: build.mutation<DeleteTerminalReadersReaderApiResponse, DeleteTerminalReadersReaderApiArg>({
            query: queryArg => ({ url: `/v1/terminal/readers/${queryArg.reader}`, method: "DELETE", body: queryArg.body })
        }),
        getTerminalReadersReader: build.query<GetTerminalReadersReaderApiResponse, GetTerminalReadersReaderApiArg>({
            query: queryArg => ({ url: `/v1/terminal/readers/${queryArg.reader}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postTerminalReadersReader: build.mutation<PostTerminalReadersReaderApiResponse, PostTerminalReadersReaderApiArg>({
            query: queryArg => ({ url: `/v1/terminal/readers/${queryArg.reader}`, method: "POST", body: queryArg.body })
        }),
        postTokens: build.mutation<PostTokensApiResponse, PostTokensApiArg>({
            query: queryArg => ({ url: `/v1/tokens`, method: "POST", body: queryArg.body })
        }),
        getTokensToken: build.query<GetTokensTokenApiResponse, GetTokensTokenApiArg>({
            query: queryArg => ({ url: `/v1/tokens/${queryArg.token}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        getTopups: build.query<GetTopupsApiResponse, GetTopupsApiArg>({
            query: queryArg => ({ url: `/v1/topups`, body: queryArg.body, params: { amount: queryArg.amount, created: queryArg.created, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, status: queryArg.status } })
        }),
        postTopups: build.mutation<PostTopupsApiResponse, PostTopupsApiArg>({
            query: queryArg => ({ url: `/v1/topups`, method: "POST", body: queryArg.body })
        }),
        getTopupsTopup: build.query<GetTopupsTopupApiResponse, GetTopupsTopupApiArg>({
            query: queryArg => ({ url: `/v1/topups/${queryArg.topup}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postTopupsTopup: build.mutation<PostTopupsTopupApiResponse, PostTopupsTopupApiArg>({
            query: queryArg => ({ url: `/v1/topups/${queryArg.topup}`, method: "POST", body: queryArg.body })
        }),
        postTopupsTopupCancel: build.mutation<PostTopupsTopupCancelApiResponse, PostTopupsTopupCancelApiArg>({
            query: queryArg => ({ url: `/v1/topups/${queryArg.topup}/cancel`, method: "POST", body: queryArg.body })
        }),
        getTransfers: build.query<GetTransfersApiResponse, GetTransfersApiArg>({
            query: queryArg => ({ url: `/v1/transfers`, body: queryArg.body, params: { created: queryArg.created, destination: queryArg.destination, ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter, transfer_group: queryArg.transferGroup } })
        }),
        postTransfers: build.mutation<PostTransfersApiResponse, PostTransfersApiArg>({
            query: queryArg => ({ url: `/v1/transfers`, method: "POST", body: queryArg.body })
        }),
        getTransfersIdReversals: build.query<GetTransfersIdReversalsApiResponse, GetTransfersIdReversalsApiArg>({
            query: queryArg => ({ url: `/v1/transfers/${queryArg.id}/reversals`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postTransfersIdReversals: build.mutation<PostTransfersIdReversalsApiResponse, PostTransfersIdReversalsApiArg>({
            query: queryArg => ({ url: `/v1/transfers/${queryArg.id}/reversals`, method: "POST", body: queryArg.body })
        }),
        getTransfersTransfer: build.query<GetTransfersTransferApiResponse, GetTransfersTransferApiArg>({
            query: queryArg => ({ url: `/v1/transfers/${queryArg.transfer}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postTransfersTransfer: build.mutation<PostTransfersTransferApiResponse, PostTransfersTransferApiArg>({
            query: queryArg => ({ url: `/v1/transfers/${queryArg.transfer}`, method: "POST", body: queryArg.body })
        }),
        getTransfersTransferReversalsId: build.query<GetTransfersTransferReversalsIdApiResponse, GetTransfersTransferReversalsIdApiArg>({
            query: queryArg => ({ url: `/v1/transfers/${queryArg.transfer}/reversals/${queryArg.id}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postTransfersTransferReversalsId: build.mutation<PostTransfersTransferReversalsIdApiResponse, PostTransfersTransferReversalsIdApiArg>({
            query: queryArg => ({ url: `/v1/transfers/${queryArg.transfer}/reversals/${queryArg.id}`, method: "POST", body: queryArg.body })
        }),
        getWebhookEndpoints: build.query<GetWebhookEndpointsApiResponse, GetWebhookEndpointsApiArg>({
            query: queryArg => ({ url: `/v1/webhook_endpoints`, body: queryArg.body, params: { ending_before: queryArg.endingBefore, expand: queryArg.expand, limit: queryArg.limit, starting_after: queryArg.startingAfter } })
        }),
        postWebhookEndpoints: build.mutation<PostWebhookEndpointsApiResponse, PostWebhookEndpointsApiArg>({
            query: queryArg => ({ url: `/v1/webhook_endpoints`, method: "POST", body: queryArg.body })
        }),
        deleteWebhookEndpointsWebhookEndpoint: build.mutation<DeleteWebhookEndpointsWebhookEndpointApiResponse, DeleteWebhookEndpointsWebhookEndpointApiArg>({
            query: queryArg => ({ url: `/v1/webhook_endpoints/${queryArg.webhookEndpoint}`, method: "DELETE", body: queryArg.body })
        }),
        getWebhookEndpointsWebhookEndpoint: build.query<GetWebhookEndpointsWebhookEndpointApiResponse, GetWebhookEndpointsWebhookEndpointApiArg>({
            query: queryArg => ({ url: `/v1/webhook_endpoints/${queryArg.webhookEndpoint}`, body: queryArg.body, params: { expand: queryArg.expand } })
        }),
        postWebhookEndpointsWebhookEndpoint: build.mutation<PostWebhookEndpointsWebhookEndpointApiResponse, PostWebhookEndpointsWebhookEndpointApiArg>({
            query: queryArg => ({ url: `/v1/webhook_endpoints/${queryArg.webhookEndpoint}`, method: "POST", body: queryArg.body })
        })
    })
});
export type Post3DSecureApiResponse = /** status 200 Successful response. */ ThreeDSecure;
export type Post3DSecureApiArg = {
    body: {
        amount: number;
        card?: string;
        currency: string;
        customer?: string;
        expand?: string[];
        return_url: string;
    };
};
export type Get3DSecureThreeDSecureApiResponse = /** status 200 Successful response. */ ThreeDSecure;
export type Get3DSecureThreeDSecureApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    threeDSecure: string;
    body: {};
};
export type DeleteAccountApiResponse = /** status 200 Successful response. */ DeletedAccount;
export type DeleteAccountApiArg = {
    body: {
        account?: string;
    };
};
export type GetAccountApiResponse = /** status 200 Successful response. */ Account;
export type GetAccountApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostAccountApiResponse = /** status 200 Successful response. */ Account;
export type PostAccountApiArg = {
    body: {
        account_token?: string;
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        business_profile?: {
            mcc?: string;
            name?: string;
            product_description?: string;
            support_address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            support_email?: string;
            support_phone?: string;
            support_url?: string;
            url?: string;
        };
        business_type?: "company" | "government_entity" | "individual" | "non_profit";
        capabilities?: {
            au_becs_debit_payments?: {
                requested?: boolean;
            };
            bacs_debit_payments?: {
                requested?: boolean;
            };
            bancontact_payments?: {
                requested?: boolean;
            };
            card_issuing?: {
                requested?: boolean;
            };
            card_payments?: {
                requested?: boolean;
            };
            cartes_bancaires_payments?: {
                requested?: boolean;
            };
            eps_payments?: {
                requested?: boolean;
            };
            fpx_payments?: {
                requested?: boolean;
            };
            giropay_payments?: {
                requested?: boolean;
            };
            grabpay_payments?: {
                requested?: boolean;
            };
            ideal_payments?: {
                requested?: boolean;
            };
            jcb_payments?: {
                requested?: boolean;
            };
            legacy_payments?: {
                requested?: boolean;
            };
            oxxo_payments?: {
                requested?: boolean;
            };
            p24_payments?: {
                requested?: boolean;
            };
            sepa_debit_payments?: {
                requested?: boolean;
            };
            sofort_payments?: {
                requested?: boolean;
            };
            tax_reporting_us_1099_k?: {
                requested?: boolean;
            };
            tax_reporting_us_1099_misc?: {
                requested?: boolean;
            };
            transfers?: {
                requested?: boolean;
            };
        };
        company?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            address_kana?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            address_kanji?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            directors_provided?: boolean;
            executives_provided?: boolean;
            name?: string;
            name_kana?: string;
            name_kanji?: string;
            owners_provided?: boolean;
            phone?: string;
            registration_number?: string;
            structure?: "" | "government_instrumentality" | "governmental_unit" | "incorporated_non_profit" | "limited_liability_partnership" | "multi_member_llc" | "private_company" | "private_corporation" | "private_partnership" | "public_company" | "public_corporation" | "public_partnership" | "sole_proprietorship" | "tax_exempt_government_instrumentality" | "unincorporated_association" | "unincorporated_non_profit";
            tax_id?: string;
            tax_id_registrar?: string;
            vat_id?: string;
            verification?: {
                document?: {
                    back?: string;
                    front?: string;
                };
            };
        };
        default_currency?: string;
        documents?: {
            bank_account_ownership_verification?: {
                files?: string[];
            };
        };
        email?: string;
        expand?: string[];
        external_account?: string;
        individual?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            address_kana?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            address_kanji?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            dob?: {
                day: number;
                month: number;
                year: number;
            } | "";
            email?: string;
            first_name?: string;
            first_name_kana?: string;
            first_name_kanji?: string;
            gender?: string;
            id_number?: string;
            last_name?: string;
            last_name_kana?: string;
            last_name_kanji?: string;
            maiden_name?: string;
            metadata?: {
                [key: string]: string;
            } | "";
            phone?: string;
            political_exposure?: "existing" | "none";
            ssn_last_4?: string;
            verification?: {
                additional_document?: {
                    back?: string;
                    front?: string;
                };
                document?: {
                    back?: string;
                    front?: string;
                };
            };
        };
        metadata?: {
            [key: string]: string;
        } | "";
        settings?: {
            branding?: {
                icon?: string;
                logo?: string;
                primary_color?: string;
                secondary_color?: string;
            };
            card_payments?: {
                decline_on?: {
                    avs_failure?: boolean;
                    cvc_failure?: boolean;
                };
                statement_descriptor_prefix?: string;
            };
            payments?: {
                statement_descriptor?: string;
                statement_descriptor_kana?: string;
                statement_descriptor_kanji?: string;
            };
            payouts?: {
                debit_negative_balances?: boolean;
                schedule?: {
                    delay_days?: "minimum" | number;
                    interval?: "daily" | "manual" | "monthly" | "weekly";
                    monthly_anchor?: number;
                    weekly_anchor?: "friday" | "monday" | "saturday" | "sunday" | "thursday" | "tuesday" | "wednesday";
                };
                statement_descriptor?: string;
            };
        };
        tos_acceptance?: {
            date?: number;
            ip?: string;
            service_agreement?: string;
            user_agent?: string;
        };
    };
};
export type PostAccountBankAccountsApiResponse = /** status 200 Successful response. */ Polymorphic;
export type PostAccountBankAccountsApiArg = {
    body: {
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        default_for_currency?: boolean;
        expand?: string[];
        external_account?: string;
        metadata?: {
            [key: string]: string;
        };
    };
};
export type DeleteAccountBankAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic2;
export type DeleteAccountBankAccountsIdApiArg = {
    id: string;
    body: {};
};
export type GetAccountBankAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic;
export type GetAccountBankAccountsIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostAccountBankAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic;
export type PostAccountBankAccountsIdApiArg = {
    id: string;
    body: {
        account_holder_name?: string;
        account_holder_type?: "" | "company" | "individual";
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line2?: string;
        address_state?: string;
        address_zip?: string;
        default_for_currency?: boolean;
        exp_month?: string;
        exp_year?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
    };
};
export type GetAccountCapabilitiesApiResponse = /** status 200 Successful response. */ {
    data: AccountCapability[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetAccountCapabilitiesApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type GetAccountCapabilitiesCapabilityApiResponse = /** status 200 Successful response. */ AccountCapability;
export type GetAccountCapabilitiesCapabilityApiArg = {
    capability: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostAccountCapabilitiesCapabilityApiResponse = /** status 200 Successful response. */ AccountCapability;
export type PostAccountCapabilitiesCapabilityApiArg = {
    capability: string;
    body: {
        expand?: string[];
        requested?: boolean;
    };
};
export type GetAccountExternalAccountsApiResponse = /** status 200 Successful response. */ {
    data: (BankAccount | Card)[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetAccountExternalAccountsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostAccountExternalAccountsApiResponse = /** status 200 Successful response. */ Polymorphic;
export type PostAccountExternalAccountsApiArg = {
    body: {
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        default_for_currency?: boolean;
        expand?: string[];
        external_account?: string;
        metadata?: {
            [key: string]: string;
        };
    };
};
export type DeleteAccountExternalAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic2;
export type DeleteAccountExternalAccountsIdApiArg = {
    id: string;
    body: {};
};
export type GetAccountExternalAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic;
export type GetAccountExternalAccountsIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostAccountExternalAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic;
export type PostAccountExternalAccountsIdApiArg = {
    id: string;
    body: {
        account_holder_name?: string;
        account_holder_type?: "" | "company" | "individual";
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line2?: string;
        address_state?: string;
        address_zip?: string;
        default_for_currency?: boolean;
        exp_month?: string;
        exp_year?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
    };
};
export type PostAccountLoginLinksApiResponse = /** status 200 Successful response. */ LoginLink;
export type PostAccountLoginLinksApiArg = {
    body: {
        account: string;
        expand?: string[];
        redirect_url?: string;
    };
};
export type PutAccountLogoutApiResponse = /** status 200 Successful response. */ LightAccountLogout;
export type PutAccountLogoutApiArg = {
    body: {
        account: string;
        expand?: string[];
    };
};
export type GetAccountPeopleApiResponse = /** status 200 Successful response. */ {
    data: Person[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetAccountPeopleApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Filters on the list of people returned based on the person's relationship to the account's company. */
    relationship?: {
        director?: boolean;
        executive?: boolean;
        owner?: boolean;
        representative?: boolean;
    };
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostAccountPeopleApiResponse = /** status 200 Successful response. */ Person;
export type PostAccountPeopleApiArg = {
    body: {
        account?: string;
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        address_kana?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        address_kanji?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        dob?: {
            day: number;
            month: number;
            year: number;
        } | "";
        email?: string;
        expand?: string[];
        first_name?: string;
        first_name_kana?: string;
        first_name_kanji?: string;
        gender?: string;
        id_number?: string;
        last_name?: string;
        last_name_kana?: string;
        last_name_kanji?: string;
        maiden_name?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        person_token?: string;
        phone?: string;
        political_exposure?: string;
        relationship?: {
            director?: boolean;
            executive?: boolean;
            owner?: boolean;
            percent_ownership?: number | "";
            representative?: boolean;
            title?: string;
        };
        ssn_last_4?: string;
        verification?: {
            additional_document?: {
                back?: string;
                front?: string;
            };
            document?: {
                back?: string;
                front?: string;
            };
        };
    };
};
export type DeleteAccountPeoplePersonApiResponse = /** status 200 Successful response. */ DeletedPerson;
export type DeleteAccountPeoplePersonApiArg = {
    person: string;
    body: {};
};
export type GetAccountPeoplePersonApiResponse = /** status 200 Successful response. */ Person;
export type GetAccountPeoplePersonApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    person: string;
    body: {};
};
export type PostAccountPeoplePersonApiResponse = /** status 200 Successful response. */ Person;
export type PostAccountPeoplePersonApiArg = {
    person: string;
    body: {
        account?: string;
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        address_kana?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        address_kanji?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        dob?: {
            day: number;
            month: number;
            year: number;
        } | "";
        email?: string;
        expand?: string[];
        first_name?: string;
        first_name_kana?: string;
        first_name_kanji?: string;
        gender?: string;
        id_number?: string;
        last_name?: string;
        last_name_kana?: string;
        last_name_kanji?: string;
        maiden_name?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        person_token?: string;
        phone?: string;
        political_exposure?: string;
        relationship?: {
            director?: boolean;
            executive?: boolean;
            owner?: boolean;
            percent_ownership?: number | "";
            representative?: boolean;
            title?: string;
        };
        ssn_last_4?: string;
        verification?: {
            additional_document?: {
                back?: string;
                front?: string;
            };
            document?: {
                back?: string;
                front?: string;
            };
        };
    };
};
export type GetAccountPersonsApiResponse = /** status 200 Successful response. */ {
    data: Person[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetAccountPersonsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Filters on the list of people returned based on the person's relationship to the account's company. */
    relationship?: {
        director?: boolean;
        executive?: boolean;
        owner?: boolean;
        representative?: boolean;
    };
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostAccountPersonsApiResponse = /** status 200 Successful response. */ Person;
export type PostAccountPersonsApiArg = {
    body: {
        account?: string;
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        address_kana?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        address_kanji?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        dob?: {
            day: number;
            month: number;
            year: number;
        } | "";
        email?: string;
        expand?: string[];
        first_name?: string;
        first_name_kana?: string;
        first_name_kanji?: string;
        gender?: string;
        id_number?: string;
        last_name?: string;
        last_name_kana?: string;
        last_name_kanji?: string;
        maiden_name?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        person_token?: string;
        phone?: string;
        political_exposure?: string;
        relationship?: {
            director?: boolean;
            executive?: boolean;
            owner?: boolean;
            percent_ownership?: number | "";
            representative?: boolean;
            title?: string;
        };
        ssn_last_4?: string;
        verification?: {
            additional_document?: {
                back?: string;
                front?: string;
            };
            document?: {
                back?: string;
                front?: string;
            };
        };
    };
};
export type DeleteAccountPersonsPersonApiResponse = /** status 200 Successful response. */ DeletedPerson;
export type DeleteAccountPersonsPersonApiArg = {
    person: string;
    body: {};
};
export type GetAccountPersonsPersonApiResponse = /** status 200 Successful response. */ Person;
export type GetAccountPersonsPersonApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    person: string;
    body: {};
};
export type PostAccountPersonsPersonApiResponse = /** status 200 Successful response. */ Person;
export type PostAccountPersonsPersonApiArg = {
    person: string;
    body: {
        account?: string;
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        address_kana?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        address_kanji?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        dob?: {
            day: number;
            month: number;
            year: number;
        } | "";
        email?: string;
        expand?: string[];
        first_name?: string;
        first_name_kana?: string;
        first_name_kanji?: string;
        gender?: string;
        id_number?: string;
        last_name?: string;
        last_name_kana?: string;
        last_name_kanji?: string;
        maiden_name?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        person_token?: string;
        phone?: string;
        political_exposure?: string;
        relationship?: {
            director?: boolean;
            executive?: boolean;
            owner?: boolean;
            percent_ownership?: number | "";
            representative?: boolean;
            title?: string;
        };
        ssn_last_4?: string;
        verification?: {
            additional_document?: {
                back?: string;
                front?: string;
            };
            document?: {
                back?: string;
                front?: string;
            };
        };
    };
};
export type PostAccountLinksApiResponse = /** status 200 Successful response. */ AccountLink;
export type PostAccountLinksApiArg = {
    body: {
        account: string;
        collect?: "currently_due" | "eventually_due";
        expand?: string[];
        refresh_url?: string;
        return_url?: string;
        "type": "account_onboarding" | "account_update";
    };
};
export type GetAccountsApiResponse = /** status 200 Successful response. */ {
    data: Account[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetAccountsApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostAccountsApiResponse = /** status 200 Successful response. */ Account;
export type PostAccountsApiArg = {
    body: {
        account_token?: string;
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        business_profile?: {
            mcc?: string;
            name?: string;
            product_description?: string;
            support_address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            support_email?: string;
            support_phone?: string;
            support_url?: string;
            url?: string;
        };
        business_type?: "company" | "government_entity" | "individual" | "non_profit";
        capabilities?: {
            au_becs_debit_payments?: {
                requested?: boolean;
            };
            bacs_debit_payments?: {
                requested?: boolean;
            };
            bancontact_payments?: {
                requested?: boolean;
            };
            card_issuing?: {
                requested?: boolean;
            };
            card_payments?: {
                requested?: boolean;
            };
            cartes_bancaires_payments?: {
                requested?: boolean;
            };
            eps_payments?: {
                requested?: boolean;
            };
            fpx_payments?: {
                requested?: boolean;
            };
            giropay_payments?: {
                requested?: boolean;
            };
            grabpay_payments?: {
                requested?: boolean;
            };
            ideal_payments?: {
                requested?: boolean;
            };
            jcb_payments?: {
                requested?: boolean;
            };
            legacy_payments?: {
                requested?: boolean;
            };
            oxxo_payments?: {
                requested?: boolean;
            };
            p24_payments?: {
                requested?: boolean;
            };
            sepa_debit_payments?: {
                requested?: boolean;
            };
            sofort_payments?: {
                requested?: boolean;
            };
            tax_reporting_us_1099_k?: {
                requested?: boolean;
            };
            tax_reporting_us_1099_misc?: {
                requested?: boolean;
            };
            transfers?: {
                requested?: boolean;
            };
        };
        company?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            address_kana?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            address_kanji?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            directors_provided?: boolean;
            executives_provided?: boolean;
            name?: string;
            name_kana?: string;
            name_kanji?: string;
            owners_provided?: boolean;
            phone?: string;
            registration_number?: string;
            structure?: "" | "government_instrumentality" | "governmental_unit" | "incorporated_non_profit" | "limited_liability_partnership" | "multi_member_llc" | "private_company" | "private_corporation" | "private_partnership" | "public_company" | "public_corporation" | "public_partnership" | "sole_proprietorship" | "tax_exempt_government_instrumentality" | "unincorporated_association" | "unincorporated_non_profit";
            tax_id?: string;
            tax_id_registrar?: string;
            vat_id?: string;
            verification?: {
                document?: {
                    back?: string;
                    front?: string;
                };
            };
        };
        country?: string;
        default_currency?: string;
        documents?: {
            bank_account_ownership_verification?: {
                files?: string[];
            };
        };
        email?: string;
        expand?: string[];
        external_account?: string;
        individual?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            address_kana?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            address_kanji?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            dob?: {
                day: number;
                month: number;
                year: number;
            } | "";
            email?: string;
            first_name?: string;
            first_name_kana?: string;
            first_name_kanji?: string;
            gender?: string;
            id_number?: string;
            last_name?: string;
            last_name_kana?: string;
            last_name_kanji?: string;
            maiden_name?: string;
            metadata?: {
                [key: string]: string;
            } | "";
            phone?: string;
            political_exposure?: "existing" | "none";
            ssn_last_4?: string;
            verification?: {
                additional_document?: {
                    back?: string;
                    front?: string;
                };
                document?: {
                    back?: string;
                    front?: string;
                };
            };
        };
        metadata?: {
            [key: string]: string;
        } | "";
        settings?: {
            branding?: {
                icon?: string;
                logo?: string;
                primary_color?: string;
                secondary_color?: string;
            };
            card_payments?: {
                decline_on?: {
                    avs_failure?: boolean;
                    cvc_failure?: boolean;
                };
                statement_descriptor_prefix?: string;
            };
            payments?: {
                statement_descriptor?: string;
                statement_descriptor_kana?: string;
                statement_descriptor_kanji?: string;
            };
            payouts?: {
                debit_negative_balances?: boolean;
                schedule?: {
                    delay_days?: "minimum" | number;
                    interval?: "daily" | "manual" | "monthly" | "weekly";
                    monthly_anchor?: number;
                    weekly_anchor?: "friday" | "monday" | "saturday" | "sunday" | "thursday" | "tuesday" | "wednesday";
                };
                statement_descriptor?: string;
            };
        };
        tos_acceptance?: {
            date?: number;
            ip?: string;
            service_agreement?: string;
            user_agent?: string;
        };
        "type"?: "custom" | "express" | "standard";
    };
};
export type DeleteAccountsAccountApiResponse = /** status 200 Successful response. */ DeletedAccount;
export type DeleteAccountsAccountApiArg = {
    account: string;
    body: {};
};
export type GetAccountsAccountApiResponse = /** status 200 Successful response. */ Account;
export type GetAccountsAccountApiArg = {
    account: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostAccountsAccountApiResponse = /** status 200 Successful response. */ Account;
export type PostAccountsAccountApiArg = {
    account: string;
    body: {
        account_token?: string;
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        business_profile?: {
            mcc?: string;
            name?: string;
            product_description?: string;
            support_address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            support_email?: string;
            support_phone?: string;
            support_url?: string;
            url?: string;
        };
        business_type?: "company" | "government_entity" | "individual" | "non_profit";
        capabilities?: {
            au_becs_debit_payments?: {
                requested?: boolean;
            };
            bacs_debit_payments?: {
                requested?: boolean;
            };
            bancontact_payments?: {
                requested?: boolean;
            };
            card_issuing?: {
                requested?: boolean;
            };
            card_payments?: {
                requested?: boolean;
            };
            cartes_bancaires_payments?: {
                requested?: boolean;
            };
            eps_payments?: {
                requested?: boolean;
            };
            fpx_payments?: {
                requested?: boolean;
            };
            giropay_payments?: {
                requested?: boolean;
            };
            grabpay_payments?: {
                requested?: boolean;
            };
            ideal_payments?: {
                requested?: boolean;
            };
            jcb_payments?: {
                requested?: boolean;
            };
            legacy_payments?: {
                requested?: boolean;
            };
            oxxo_payments?: {
                requested?: boolean;
            };
            p24_payments?: {
                requested?: boolean;
            };
            sepa_debit_payments?: {
                requested?: boolean;
            };
            sofort_payments?: {
                requested?: boolean;
            };
            tax_reporting_us_1099_k?: {
                requested?: boolean;
            };
            tax_reporting_us_1099_misc?: {
                requested?: boolean;
            };
            transfers?: {
                requested?: boolean;
            };
        };
        company?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            address_kana?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            address_kanji?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            directors_provided?: boolean;
            executives_provided?: boolean;
            name?: string;
            name_kana?: string;
            name_kanji?: string;
            owners_provided?: boolean;
            phone?: string;
            registration_number?: string;
            structure?: "" | "government_instrumentality" | "governmental_unit" | "incorporated_non_profit" | "limited_liability_partnership" | "multi_member_llc" | "private_company" | "private_corporation" | "private_partnership" | "public_company" | "public_corporation" | "public_partnership" | "sole_proprietorship" | "tax_exempt_government_instrumentality" | "unincorporated_association" | "unincorporated_non_profit";
            tax_id?: string;
            tax_id_registrar?: string;
            vat_id?: string;
            verification?: {
                document?: {
                    back?: string;
                    front?: string;
                };
            };
        };
        default_currency?: string;
        documents?: {
            bank_account_ownership_verification?: {
                files?: string[];
            };
        };
        email?: string;
        expand?: string[];
        external_account?: string;
        individual?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            address_kana?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            address_kanji?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            dob?: {
                day: number;
                month: number;
                year: number;
            } | "";
            email?: string;
            first_name?: string;
            first_name_kana?: string;
            first_name_kanji?: string;
            gender?: string;
            id_number?: string;
            last_name?: string;
            last_name_kana?: string;
            last_name_kanji?: string;
            maiden_name?: string;
            metadata?: {
                [key: string]: string;
            } | "";
            phone?: string;
            political_exposure?: "existing" | "none";
            ssn_last_4?: string;
            verification?: {
                additional_document?: {
                    back?: string;
                    front?: string;
                };
                document?: {
                    back?: string;
                    front?: string;
                };
            };
        };
        metadata?: {
            [key: string]: string;
        } | "";
        settings?: {
            branding?: {
                icon?: string;
                logo?: string;
                primary_color?: string;
                secondary_color?: string;
            };
            card_payments?: {
                decline_on?: {
                    avs_failure?: boolean;
                    cvc_failure?: boolean;
                };
                statement_descriptor_prefix?: string;
            };
            payments?: {
                statement_descriptor?: string;
                statement_descriptor_kana?: string;
                statement_descriptor_kanji?: string;
            };
            payouts?: {
                debit_negative_balances?: boolean;
                schedule?: {
                    delay_days?: "minimum" | number;
                    interval?: "daily" | "manual" | "monthly" | "weekly";
                    monthly_anchor?: number;
                    weekly_anchor?: "friday" | "monday" | "saturday" | "sunday" | "thursday" | "tuesday" | "wednesday";
                };
                statement_descriptor?: string;
            };
        };
        tos_acceptance?: {
            date?: number;
            ip?: string;
            service_agreement?: string;
            user_agent?: string;
        };
    };
};
export type PostAccountsAccountBankAccountsApiResponse = /** status 200 Successful response. */ Polymorphic;
export type PostAccountsAccountBankAccountsApiArg = {
    account: string;
    body: {
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        default_for_currency?: boolean;
        expand?: string[];
        external_account?: string;
        metadata?: {
            [key: string]: string;
        };
    };
};
export type DeleteAccountsAccountBankAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic2;
export type DeleteAccountsAccountBankAccountsIdApiArg = {
    account: string;
    id: string;
    body: {};
};
export type GetAccountsAccountBankAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic;
export type GetAccountsAccountBankAccountsIdApiArg = {
    account: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostAccountsAccountBankAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic;
export type PostAccountsAccountBankAccountsIdApiArg = {
    account: string;
    id: string;
    body: {
        account_holder_name?: string;
        account_holder_type?: "" | "company" | "individual";
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line2?: string;
        address_state?: string;
        address_zip?: string;
        default_for_currency?: boolean;
        exp_month?: string;
        exp_year?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
    };
};
export type GetAccountsAccountCapabilitiesApiResponse = /** status 200 Successful response. */ {
    data: AccountCapability[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetAccountsAccountCapabilitiesApiArg = {
    account: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type GetAccountsAccountCapabilitiesCapabilityApiResponse = /** status 200 Successful response. */ AccountCapability;
export type GetAccountsAccountCapabilitiesCapabilityApiArg = {
    account: string;
    capability: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostAccountsAccountCapabilitiesCapabilityApiResponse = /** status 200 Successful response. */ AccountCapability;
export type PostAccountsAccountCapabilitiesCapabilityApiArg = {
    account: string;
    capability: string;
    body: {
        expand?: string[];
        requested?: boolean;
    };
};
export type GetAccountsAccountExternalAccountsApiResponse = /** status 200 Successful response. */ {
    data: (BankAccount | Card)[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetAccountsAccountExternalAccountsApiArg = {
    account: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostAccountsAccountExternalAccountsApiResponse = /** status 200 Successful response. */ Polymorphic;
export type PostAccountsAccountExternalAccountsApiArg = {
    account: string;
    body: {
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        default_for_currency?: boolean;
        expand?: string[];
        external_account?: string;
        metadata?: {
            [key: string]: string;
        };
    };
};
export type DeleteAccountsAccountExternalAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic2;
export type DeleteAccountsAccountExternalAccountsIdApiArg = {
    account: string;
    id: string;
    body: {};
};
export type GetAccountsAccountExternalAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic;
export type GetAccountsAccountExternalAccountsIdApiArg = {
    account: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostAccountsAccountExternalAccountsIdApiResponse = /** status 200 Successful response. */ Polymorphic;
export type PostAccountsAccountExternalAccountsIdApiArg = {
    account: string;
    id: string;
    body: {
        account_holder_name?: string;
        account_holder_type?: "" | "company" | "individual";
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line2?: string;
        address_state?: string;
        address_zip?: string;
        default_for_currency?: boolean;
        exp_month?: string;
        exp_year?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
    };
};
export type PostAccountsAccountLoginLinksApiResponse = /** status 200 Successful response. */ LoginLink;
export type PostAccountsAccountLoginLinksApiArg = {
    account: string;
    body: {
        expand?: string[];
        redirect_url?: string;
    };
};
export type PutAccountsAccountLogoutApiResponse = /** status 200 Successful response. */ LightAccountLogout;
export type PutAccountsAccountLogoutApiArg = {
    account: string;
    body: {
        expand?: string[];
    };
};
export type GetAccountsAccountPeopleApiResponse = /** status 200 Successful response. */ {
    data: Person[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetAccountsAccountPeopleApiArg = {
    account: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Filters on the list of people returned based on the person's relationship to the account's company. */
    relationship?: {
        director?: boolean;
        executive?: boolean;
        owner?: boolean;
        representative?: boolean;
    };
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostAccountsAccountPeopleApiResponse = /** status 200 Successful response. */ Person;
export type PostAccountsAccountPeopleApiArg = {
    account: string;
    body: {
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        address_kana?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        address_kanji?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        dob?: {
            day: number;
            month: number;
            year: number;
        } | "";
        email?: string;
        expand?: string[];
        first_name?: string;
        first_name_kana?: string;
        first_name_kanji?: string;
        gender?: string;
        id_number?: string;
        last_name?: string;
        last_name_kana?: string;
        last_name_kanji?: string;
        maiden_name?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        person_token?: string;
        phone?: string;
        political_exposure?: string;
        relationship?: {
            director?: boolean;
            executive?: boolean;
            owner?: boolean;
            percent_ownership?: number | "";
            representative?: boolean;
            title?: string;
        };
        ssn_last_4?: string;
        verification?: {
            additional_document?: {
                back?: string;
                front?: string;
            };
            document?: {
                back?: string;
                front?: string;
            };
        };
    };
};
export type DeleteAccountsAccountPeoplePersonApiResponse = /** status 200 Successful response. */ DeletedPerson;
export type DeleteAccountsAccountPeoplePersonApiArg = {
    account: string;
    person: string;
    body: {};
};
export type GetAccountsAccountPeoplePersonApiResponse = /** status 200 Successful response. */ Person;
export type GetAccountsAccountPeoplePersonApiArg = {
    account: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    person: string;
    body: {};
};
export type PostAccountsAccountPeoplePersonApiResponse = /** status 200 Successful response. */ Person;
export type PostAccountsAccountPeoplePersonApiArg = {
    account: string;
    person: string;
    body: {
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        address_kana?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        address_kanji?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        dob?: {
            day: number;
            month: number;
            year: number;
        } | "";
        email?: string;
        expand?: string[];
        first_name?: string;
        first_name_kana?: string;
        first_name_kanji?: string;
        gender?: string;
        id_number?: string;
        last_name?: string;
        last_name_kana?: string;
        last_name_kanji?: string;
        maiden_name?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        person_token?: string;
        phone?: string;
        political_exposure?: string;
        relationship?: {
            director?: boolean;
            executive?: boolean;
            owner?: boolean;
            percent_ownership?: number | "";
            representative?: boolean;
            title?: string;
        };
        ssn_last_4?: string;
        verification?: {
            additional_document?: {
                back?: string;
                front?: string;
            };
            document?: {
                back?: string;
                front?: string;
            };
        };
    };
};
export type GetAccountsAccountPersonsApiResponse = /** status 200 Successful response. */ {
    data: Person[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetAccountsAccountPersonsApiArg = {
    account: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Filters on the list of people returned based on the person's relationship to the account's company. */
    relationship?: {
        director?: boolean;
        executive?: boolean;
        owner?: boolean;
        representative?: boolean;
    };
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostAccountsAccountPersonsApiResponse = /** status 200 Successful response. */ Person;
export type PostAccountsAccountPersonsApiArg = {
    account: string;
    body: {
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        address_kana?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        address_kanji?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        dob?: {
            day: number;
            month: number;
            year: number;
        } | "";
        email?: string;
        expand?: string[];
        first_name?: string;
        first_name_kana?: string;
        first_name_kanji?: string;
        gender?: string;
        id_number?: string;
        last_name?: string;
        last_name_kana?: string;
        last_name_kanji?: string;
        maiden_name?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        person_token?: string;
        phone?: string;
        political_exposure?: string;
        relationship?: {
            director?: boolean;
            executive?: boolean;
            owner?: boolean;
            percent_ownership?: number | "";
            representative?: boolean;
            title?: string;
        };
        ssn_last_4?: string;
        verification?: {
            additional_document?: {
                back?: string;
                front?: string;
            };
            document?: {
                back?: string;
                front?: string;
            };
        };
    };
};
export type DeleteAccountsAccountPersonsPersonApiResponse = /** status 200 Successful response. */ DeletedPerson;
export type DeleteAccountsAccountPersonsPersonApiArg = {
    account: string;
    person: string;
    body: {};
};
export type GetAccountsAccountPersonsPersonApiResponse = /** status 200 Successful response. */ Person;
export type GetAccountsAccountPersonsPersonApiArg = {
    account: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    person: string;
    body: {};
};
export type PostAccountsAccountPersonsPersonApiResponse = /** status 200 Successful response. */ Person;
export type PostAccountsAccountPersonsPersonApiArg = {
    account: string;
    person: string;
    body: {
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        address_kana?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        address_kanji?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
            town?: string;
        };
        dob?: {
            day: number;
            month: number;
            year: number;
        } | "";
        email?: string;
        expand?: string[];
        first_name?: string;
        first_name_kana?: string;
        first_name_kanji?: string;
        gender?: string;
        id_number?: string;
        last_name?: string;
        last_name_kana?: string;
        last_name_kanji?: string;
        maiden_name?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        person_token?: string;
        phone?: string;
        political_exposure?: string;
        relationship?: {
            director?: boolean;
            executive?: boolean;
            owner?: boolean;
            percent_ownership?: number | "";
            representative?: boolean;
            title?: string;
        };
        ssn_last_4?: string;
        verification?: {
            additional_document?: {
                back?: string;
                front?: string;
            };
            document?: {
                back?: string;
                front?: string;
            };
        };
    };
};
export type PostAccountsAccountRejectApiResponse = /** status 200 Successful response. */ Account;
export type PostAccountsAccountRejectApiArg = {
    account: string;
    body: {
        expand?: string[];
        reason: string;
    };
};
export type GetApplePayDomainsApiResponse = /** status 200 Successful response. */ {
    data: ApplePayDomain[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetApplePayDomainsApiArg = {
    domainName?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostApplePayDomainsApiResponse = /** status 200 Successful response. */ ApplePayDomain;
export type PostApplePayDomainsApiArg = {
    body: {
        domain_name: string;
        expand?: string[];
    };
};
export type DeleteApplePayDomainsDomainApiResponse = /** status 200 Successful response. */ DeletedApplePayDomain;
export type DeleteApplePayDomainsDomainApiArg = {
    domain: string;
    body: {};
};
export type GetApplePayDomainsDomainApiResponse = /** status 200 Successful response. */ ApplePayDomain;
export type GetApplePayDomainsDomainApiArg = {
    domain: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type GetApplicationFeesApiResponse = /** status 200 Successful response. */ {
    data: PlatformFee[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetApplicationFeesApiArg = {
    /** Only return application fees for the charge specified by this charge ID. */
    charge?: string;
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetApplicationFeesFeeRefundsIdApiResponse = /** status 200 Successful response. */ FeeRefund;
export type GetApplicationFeesFeeRefundsIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    fee: string;
    id: string;
    body: {};
};
export type PostApplicationFeesFeeRefundsIdApiResponse = /** status 200 Successful response. */ FeeRefund;
export type PostApplicationFeesFeeRefundsIdApiArg = {
    fee: string;
    id: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetApplicationFeesIdApiResponse = /** status 200 Successful response. */ PlatformFee;
export type GetApplicationFeesIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostApplicationFeesIdRefundApiResponse = /** status 200 Successful response. */ PlatformFee;
export type PostApplicationFeesIdRefundApiArg = {
    id: string;
    body: {
        amount?: number;
        directive?: string;
        expand?: string[];
    };
};
export type GetApplicationFeesIdRefundsApiResponse = /** status 200 Successful response. */ {
    data: FeeRefund[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetApplicationFeesIdRefundsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostApplicationFeesIdRefundsApiResponse = /** status 200 Successful response. */ FeeRefund;
export type PostApplicationFeesIdRefundsApiArg = {
    id: string;
    body: {
        amount?: number;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
    };
};
export type GetBalanceApiResponse = /** status 200 Successful response. */ Balance;
export type GetBalanceApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type GetBalanceHistoryApiResponse = /** status 200 Successful response. */ {
    data: BalanceTransaction[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetBalanceHistoryApiArg = {
    availableOn?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
    currency?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID. */
    payout?: string;
    /** Only returns the original transaction. */
    source?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only returns transactions of the given type. One of: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `payment`, `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. */
    type?: string;
    body: {};
};
export type GetBalanceHistoryIdApiResponse = /** status 200 Successful response. */ BalanceTransaction;
export type GetBalanceHistoryIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type GetBalanceTransactionsApiResponse = /** status 200 Successful response. */ {
    data: BalanceTransaction[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetBalanceTransactionsApiArg = {
    availableOn?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
    currency?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID. */
    payout?: string;
    /** Only returns the original transaction. */
    source?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only returns transactions of the given type. One of: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `payment`, `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. */
    type?: string;
    body: {};
};
export type GetBalanceTransactionsIdApiResponse = /** status 200 Successful response. */ BalanceTransaction;
export type GetBalanceTransactionsIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostBillingPortalSessionsApiResponse = /** status 200 Successful response. */ PortalSession;
export type PostBillingPortalSessionsApiArg = {
    body: {
        customer: string;
        expand?: string[];
        return_url?: string;
    };
};
export type GetBitcoinReceiversApiResponse = /** status 200 Successful response. */ {
    data: BitcoinReceiver[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetBitcoinReceiversApiArg = {
    /** Filter for active receivers. */
    active?: boolean;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Filter for filled receivers. */
    filled?: boolean;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Filter for receivers with uncaptured funds. */
    uncapturedFunds?: boolean;
    body: {};
};
export type GetBitcoinReceiversIdApiResponse = /** status 200 Successful response. */ BitcoinReceiver;
export type GetBitcoinReceiversIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type GetBitcoinReceiversReceiverTransactionsApiResponse = /** status 200 Successful response. */ {
    data: BitcoinTransaction[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetBitcoinReceiversReceiverTransactionsApiArg = {
    /** Only return transactions for the customer specified by this customer ID. */
    customer?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    receiver: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetBitcoinTransactionsApiResponse = /** status 200 Successful response. */ {
    data: BitcoinTransaction[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetBitcoinTransactionsApiArg = {
    /** Only return transactions for the customer specified by this customer ID. */
    customer?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    receiver?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetChargesApiResponse = /** status 200 Successful response. */ {
    data: Charge[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetChargesApiArg = {};

export type PostChargesApiResponse = /** status 200 Successful response. */ Charge;
export type PostChargesApiArg = {
    body: {
        amount?: number;
        application_fee?: number;
        application_fee_amount?: number;
        capture?: boolean;
        card?: {
            address_city?: string;
            address_country?: string;
            address_line1?: string;
            address_line2?: string;
            address_state?: string;
            address_zip?: string;
            cvc?: string;
            exp_month: number;
            exp_year: number;
            metadata?: {
                [key: string]: string;
            };
            name?: string;
            "number": string;
            "object"?: "card";
        } | string;
        currency?: string;
        customer?: string;
        description?: string;
        destination?: {
            account: string;
            amount?: number;
        } | string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        on_behalf_of?: string;
        receipt_email?: string;
        shipping?: {
            address: {
                city?: string;
                country?: string;
                line1: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            carrier?: string;
            name: string;
            phone?: string;
            tracking_number?: string;
        };
        source?: string;
        statement_descriptor?: string;
        statement_descriptor_suffix?: string;
        transfer_data?: {
            amount?: number;
            destination: string;
        };
        transfer_group?: string;
    };
};
export type GetChargesChargeApiResponse = /** status 200 Successful response. */ Charge;
export type GetChargesChargeApiArg = {
    charge: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostChargesChargeApiResponse = /** status 200 Successful response. */ Charge;
export type PostChargesChargeApiArg = {
    charge: string;
    body: {
        customer?: string;
        description?: string;
        expand?: string[];
        fraud_details?: {
            user_report: "" | "fraudulent" | "safe";
        };
        metadata?: {
            [key: string]: string;
        } | "";
        receipt_email?: string;
        shipping?: {
            address: {
                city?: string;
                country?: string;
                line1: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            carrier?: string;
            name: string;
            phone?: string;
            tracking_number?: string;
        };
        transfer_group?: string;
    };
};
export type PostChargesChargeCaptureApiResponse = /** status 200 Successful response. */ Charge;
export type PostChargesChargeCaptureApiArg = {
    charge: string;
    body: {
        amount?: number;
        application_fee?: number;
        application_fee_amount?: number;
        expand?: string[];
        receipt_email?: string;
        statement_descriptor?: string;
        statement_descriptor_suffix?: string;
        transfer_data?: {
            amount?: number;
        };
        transfer_group?: string;
    };
};
export type GetChargesChargeDisputeApiResponse = /** status 200 Successful response. */ Dispute;
export type GetChargesChargeDisputeApiArg = {
    charge: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostChargesChargeDisputeApiResponse = /** status 200 Successful response. */ Dispute;
export type PostChargesChargeDisputeApiArg = {
    charge: string;
    body: {
        evidence?: {
            access_activity_log?: string;
            billing_address?: string;
            cancellation_policy?: string;
            cancellation_policy_disclosure?: string;
            cancellation_rebuttal?: string;
            customer_communication?: string;
            customer_email_address?: string;
            customer_name?: string;
            customer_purchase_ip?: string;
            customer_signature?: string;
            duplicate_charge_documentation?: string;
            duplicate_charge_explanation?: string;
            duplicate_charge_id?: string;
            product_description?: string;
            receipt?: string;
            refund_policy?: string;
            refund_policy_disclosure?: string;
            refund_refusal_explanation?: string;
            service_date?: string;
            service_documentation?: string;
            shipping_address?: string;
            shipping_carrier?: string;
            shipping_date?: string;
            shipping_documentation?: string;
            shipping_tracking_number?: string;
            uncategorized_file?: string;
            uncategorized_text?: string;
        };
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        submit?: boolean;
    };
};
export type PostChargesChargeDisputeCloseApiResponse = /** status 200 Successful response. */ Dispute;
export type PostChargesChargeDisputeCloseApiArg = {
    charge: string;
    body: {
        expand?: string[];
    };
};
export type PostChargesChargeRefundApiResponse = /** status 200 Successful response. */ Charge;
export type PostChargesChargeRefundApiArg = {
    charge: string;
    body: {
        amount?: number;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        payment_intent?: string;
        reason?: "duplicate" | "fraudulent" | "requested_by_customer";
        refund_application_fee?: boolean;
        reverse_transfer?: boolean;
    };
};
export type GetChargesChargeRefundsApiResponse = /** status 200 Successful response. */ {
    data: Refund[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetChargesChargeRefundsApiArg = {
    charge: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostChargesChargeRefundsApiResponse = /** status 200 Successful response. */ Refund;
export type PostChargesChargeRefundsApiArg = {
    charge: string;
    body: {
        amount?: number;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        payment_intent?: string;
        reason?: "duplicate" | "fraudulent" | "requested_by_customer";
        refund_application_fee?: boolean;
        reverse_transfer?: boolean;
    };
};
export type GetChargesChargeRefundsRefundApiResponse = /** status 200 Successful response. */ Refund;
export type GetChargesChargeRefundsRefundApiArg = {
    charge: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    refund: string;
    body: {};
};
export type PostChargesChargeRefundsRefundApiResponse = /** status 200 Successful response. */ Refund;
export type PostChargesChargeRefundsRefundApiArg = {
    charge: string;
    refund: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetCheckoutSessionsApiResponse = /** status 200 Successful response. */ {
    data: Session[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCheckoutSessionsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Only return the Checkout Session for the PaymentIntent specified. */
    paymentIntent?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only return the Checkout Session for the subscription specified. */
    subscription?: string;
    body: {};
};
export type PostCheckoutSessionsApiResponse = /** status 200 Successful response. */ Session;
export type PostCheckoutSessionsApiArg = {
    body: {
        allow_promotion_codes?: boolean;
        billing_address_collection?: "auto" | "required";
        cancel_url: string;
        client_reference_id?: string;
        customer?: string;
        customer_email?: string;
        discounts?: {
            coupon?: string;
            promotion_code?: string;
        }[];
        expand?: string[];
        line_items?: {
            amount?: number;
            currency?: string;
            description?: string;
            images?: string[];
            name?: string;
            price?: string;
            price_data?: {
                currency: string;
                product?: string;
                product_data?: {
                    description?: string;
                    images?: string[];
                    metadata?: {
                        [key: string]: string;
                    };
                    name: string;
                };
                recurring?: {
                    interval: "day" | "month" | "week" | "year";
                    interval_count?: number;
                };
                unit_amount?: number;
                unit_amount_decimal?: string;
            };
            quantity: number;
            tax_rates?: string[];
        }[];
        locale?: "auto" | "bg" | "cs" | "da" | "de" | "el" | "en" | "en-GB" | "es" | "es-419" | "et" | "fi" | "fr" | "fr-CA" | "hu" | "id" | "it" | "ja" | "lt" | "lv" | "ms" | "mt" | "nb" | "nl" | "pl" | "pt" | "pt-BR" | "ro" | "ru" | "sk" | "sl" | "sv" | "tr" | "zh" | "zh-HK" | "zh-TW";
        metadata?: {
            [key: string]: string;
        };
        mode?: "payment" | "setup" | "subscription";
        payment_intent_data?: {
            application_fee_amount?: number;
            capture_method?: "automatic" | "manual";
            description?: string;
            metadata?: {
                [key: string]: string;
            };
            on_behalf_of?: string;
            receipt_email?: string;
            setup_future_usage?: "off_session" | "on_session";
            shipping?: {
                address: {
                    city?: string;
                    country?: string;
                    line1: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                };
                carrier?: string;
                name: string;
                phone?: string;
                tracking_number?: string;
            };
            statement_descriptor?: string;
            statement_descriptor_suffix?: string;
            transfer_data?: {
                amount?: number;
                destination: string;
            };
            transfer_group?: string;
        };
        payment_method_types: ("alipay" | "bacs_debit" | "bancontact" | "card" | "eps" | "fpx" | "giropay" | "grabpay" | "ideal" | "p24" | "sepa_debit" | "sofort")[];
        setup_intent_data?: {
            description?: string;
            metadata?: {
                [key: string]: string;
            };
            on_behalf_of?: string;
        };
        shipping_address_collection?: {
            allowed_countries: ("AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CV" | "CW" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MK" | "ML" | "MM" | "MN" | "MO" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "ZZ")[];
        };
        submit_type?: "auto" | "book" | "donate" | "pay";
        subscription_data?: {
            application_fee_percent?: number;
            default_tax_rates?: string[];
            items?: {
                plan: string;
                quantity?: number;
                tax_rates?: string[];
            }[];
            metadata?: {
                [key: string]: string;
            };
            trial_end?: number;
            trial_period_days?: number;
        };
        success_url: string;
    };
};
export type GetCheckoutSessionsSessionApiResponse = /** status 200 Successful response. */ Session;
export type GetCheckoutSessionsSessionApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    session: string;
    body: {};
};
export type GetCheckoutSessionsSessionLineItemsApiResponse = /** status 200 Successful response. */ {
    data: LineItem[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCheckoutSessionsSessionLineItemsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    session: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetCountrySpecsApiResponse = /** status 200 Successful response. */ {
    data: CountrySpec[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCountrySpecsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetCountrySpecsCountryApiResponse = /** status 200 Successful response. */ CountrySpec;
export type GetCountrySpecsCountryApiArg = {
    country: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type GetCouponsApiResponse = /** status 200 Successful response. */ {
    data: Coupon[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCouponsApiArg = {
    /** A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostCouponsApiResponse = /** status 200 Successful response. */ Coupon;
export type PostCouponsApiArg = {
    body: {
        amount_off?: number;
        applies_to?: {
            products: string[];
        };
        currency?: string;
        duration: "forever" | "once" | "repeating";
        duration_in_months?: number;
        expand?: string[];
        id?: string;
        max_redemptions?: number;
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
        percent_off?: number;
        redeem_by?: number;
    };
};
export type DeleteCouponsCouponApiResponse = /** status 200 Successful response. */ DeletedCoupon;
export type DeleteCouponsCouponApiArg = {
    coupon: string;
    body: {};
};
export type GetCouponsCouponApiResponse = /** status 200 Successful response. */ Coupon;
export type GetCouponsCouponApiArg = {
    coupon: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostCouponsCouponApiResponse = /** status 200 Successful response. */ Coupon;
export type PostCouponsCouponApiArg = {
    coupon: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
    };
};
export type GetCreditNotesApiResponse = /** status 200 Successful response. */ {
    data: CreditNote[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCreditNotesApiArg = {
    /** Only return credit notes for the customer specified by this customer ID. */
    customer?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Only return credit notes for the invoice specified by this invoice ID. */
    invoice?: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostCreditNotesApiResponse = /** status 200 Successful response. */ CreditNote;
export type PostCreditNotesApiArg = {
    body: {
        amount?: number;
        credit_amount?: number;
        expand?: string[];
        invoice: string;
        lines?: {
            amount?: number;
            description?: string;
            invoice_line_item?: string;
            quantity?: number;
            tax_rates?: string[] | "";
            "type": "custom_line_item" | "invoice_line_item";
            unit_amount?: number;
            unit_amount_decimal?: string;
        }[];
        memo?: string;
        metadata?: {
            [key: string]: string;
        };
        out_of_band_amount?: number;
        reason?: "duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory";
        refund?: string;
        refund_amount?: number;
    };
};
export type GetCreditNotesPreviewApiResponse = /** status 200 Successful response. */ CreditNote;
export type GetCreditNotesPreviewApiArg = {
    /** The integer amount in %s representing the total amount of the credit note. */
    amount?: number;
    /** The integer amount in %s representing the amount to credit the customer's balance, which will be automatically applied to their next invoice. */
    creditAmount?: number;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** ID of the invoice. */
    invoice: string;
    /** Line items that make up the credit note. */
    lines?: {
        amount?: number;
        description?: string;
        invoice_line_item?: string;
        quantity?: number;
        tax_rates?: string[] | "";
        "type": "custom_line_item" | "invoice_line_item";
        unit_amount?: number;
        unit_amount_decimal?: string;
    }[];
    /** The credit note's memo appears on the credit note PDF. */
    memo?: string;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: {
        [key: string]: string;
    };
    /** The integer amount in %s representing the amount that is credited outside of Stripe. */
    outOfBandAmount?: number;
    /** Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` */
    reason?: "duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory";
    /** ID of an existing refund to link this credit note to. */
    refund?: string;
    /** The integer amount in %s representing the amount to refund. If set, a refund will be created for the charge associated with the invoice. */
    refundAmount?: number;
    body: {};
};
export type GetCreditNotesPreviewLinesApiResponse = /** status 200 Successful response. */ {
    data: CreditNoteLineItem[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCreditNotesPreviewLinesApiArg = {
    /** The integer amount in %s representing the total amount of the credit note. */
    amount?: number;
    /** The integer amount in %s representing the amount to credit the customer's balance, which will be automatically applied to their next invoice. */
    creditAmount?: number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** ID of the invoice. */
    invoice: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Line items that make up the credit note. */
    lines?: {
        amount?: number;
        description?: string;
        invoice_line_item?: string;
        quantity?: number;
        tax_rates?: string[] | "";
        "type": "custom_line_item" | "invoice_line_item";
        unit_amount?: number;
        unit_amount_decimal?: string;
    }[];
    /** The credit note's memo appears on the credit note PDF. */
    memo?: string;
    /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. */
    metadata?: {
        [key: string]: string;
    };
    /** The integer amount in %s representing the amount that is credited outside of Stripe. */
    outOfBandAmount?: number;
    /** Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory` */
    reason?: "duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory";
    /** ID of an existing refund to link this credit note to. */
    refund?: string;
    /** The integer amount in %s representing the amount to refund. If set, a refund will be created for the charge associated with the invoice. */
    refundAmount?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetCreditNotesCreditNoteLinesApiResponse = /** status 200 Successful response. */ {
    data: CreditNoteLineItem[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCreditNotesCreditNoteLinesApiArg = {
    creditNote: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetCreditNotesIdApiResponse = /** status 200 Successful response. */ CreditNote;
export type GetCreditNotesIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostCreditNotesIdApiResponse = /** status 200 Successful response. */ CreditNote;
export type PostCreditNotesIdApiArg = {
    id: string;
    body: {
        expand?: string[];
        memo?: string;
        metadata?: {
            [key: string]: string;
        };
    };
};
export type PostCreditNotesIdVoidApiResponse = /** status 200 Successful response. */ CreditNote;
export type PostCreditNotesIdVoidApiArg = {
    id: string;
    body: {
        expand?: string[];
    };
};
export type GetCustomersApiResponse = /** status 200 Successful response. */ {
    data: Customer[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCustomersApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A case-sensitive filter on the list based on the customer's `email` field. The value must be a string. */
    email?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostCustomersApiResponse = /** status 200 Successful response. */ Customer;
export type PostCustomersApiArg = {
    body: {
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        } | "";
        balance?: number;
        coupon?: string;
        description?: string;
        email?: string;
        expand?: string[];
        invoice_prefix?: string;
        invoice_settings?: {
            custom_fields?: {
                name: string;
                value: string;
            }[] | "";
            default_payment_method?: string;
            footer?: string;
        };
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
        next_invoice_sequence?: number;
        payment_method?: string;
        phone?: string;
        preferred_locales?: string[];
        promotion_code?: string;
        shipping?: {
            address: {
                city?: string;
                country?: string;
                line1: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            name: string;
            phone?: string;
        } | "";
        source?: string;
        tax_exempt?: "" | "exempt" | "none" | "reverse";
        tax_id_data?: {
            "type": "ae_trn" | "au_abn" | "br_cnpj" | "br_cpf" | "ca_bn" | "ca_qst" | "ch_vat" | "cl_tin" | "es_cif" | "eu_vat" | "hk_br" | "id_npwp" | "in_gst" | "jp_cn" | "jp_rn" | "kr_brn" | "li_uid" | "mx_rfc" | "my_frp" | "my_itn" | "my_sst" | "no_vat" | "nz_gst" | "ru_inn" | "ru_kpp" | "sa_vat" | "sg_gst" | "sg_uen" | "th_vat" | "tw_vat" | "us_ein" | "za_vat";
            value: string;
        }[];
    };
};
export type DeleteCustomersCustomerApiResponse = /** status 200 Successful response. */ DeletedCustomer;
export type DeleteCustomersCustomerApiArg = {
    customer: string;
    body: {};
};
export type GetCustomersCustomerApiResponse = (/** status 200 Successful response. */ Customer | DeletedCustomer);
export type GetCustomersCustomerApiArg = {
    customer: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostCustomersCustomerApiResponse = /** status 200 Successful response. */ Customer;
export type PostCustomersCustomerApiArg = {
    customer: string;
    body: {
        address?: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        } | "";
        balance?: number;
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        card?: {
            address_city?: string;
            address_country?: string;
            address_line1?: string;
            address_line2?: string;
            address_state?: string;
            address_zip?: string;
            cvc?: string;
            exp_month: number;
            exp_year: number;
            metadata?: {
                [key: string]: string;
            };
            name?: string;
            "number": string;
            "object"?: "card";
        } | string;
        coupon?: string;
        default_alipay_account?: string;
        default_bank_account?: string;
        default_card?: string;
        default_source?: string;
        description?: string;
        email?: string;
        expand?: string[];
        invoice_prefix?: string;
        invoice_settings?: {
            custom_fields?: {
                name: string;
                value: string;
            }[] | "";
            default_payment_method?: string;
            footer?: string;
        };
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
        next_invoice_sequence?: number;
        phone?: string;
        preferred_locales?: string[];
        promotion_code?: string;
        shipping?: {
            address: {
                city?: string;
                country?: string;
                line1: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            name: string;
            phone?: string;
        } | "";
        source?: string;
        tax_exempt?: "" | "exempt" | "none" | "reverse";
        trial_end?: "now" | number;
    };
};
export type GetCustomersCustomerBalanceTransactionsApiResponse = /** status 200 Successful response. */ {
    data: CustomerBalanceTransaction[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCustomersCustomerBalanceTransactionsApiArg = {
    customer: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostCustomersCustomerBalanceTransactionsApiResponse = /** status 200 Successful response. */ CustomerBalanceTransaction;
export type PostCustomersCustomerBalanceTransactionsApiArg = {
    customer: string;
    body: {
        amount: number;
        currency: string;
        description?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetCustomersCustomerBalanceTransactionsTransactionApiResponse = /** status 200 Successful response. */ CustomerBalanceTransaction;
export type GetCustomersCustomerBalanceTransactionsTransactionApiArg = {
    customer: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    transaction: string;
    body: {};
};
export type PostCustomersCustomerBalanceTransactionsTransactionApiResponse = /** status 200 Successful response. */ CustomerBalanceTransaction;
export type PostCustomersCustomerBalanceTransactionsTransactionApiArg = {
    customer: string;
    transaction: string;
    body: {
        description?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetCustomersCustomerBankAccountsApiResponse = /** status 200 Successful response. */ {
    data: BankAccount[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCustomersCustomerBankAccountsApiArg = {
    customer: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostCustomersCustomerBankAccountsApiResponse = /** status 200 Successful response. */ Polymorphic3;
export type PostCustomersCustomerBankAccountsApiArg = {
    customer: string;
    body: {
        alipay_account?: string;
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        card?: {
            address_city?: string;
            address_country?: string;
            address_line1?: string;
            address_line2?: string;
            address_state?: string;
            address_zip?: string;
            cvc?: string;
            exp_month: number;
            exp_year: number;
            metadata?: {
                [key: string]: string;
            };
            name?: string;
            "number": string;
            "object"?: "card";
        } | string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
        source?: string;
    };
};
export type DeleteCustomersCustomerBankAccountsIdApiResponse = (/** status 200 Successful response. */ Polymorphic3 | Polymorphic4);
export type DeleteCustomersCustomerBankAccountsIdApiArg = {
    customer: string;
    id: string;
    body: {
        expand?: string[];
    };
};
export type GetCustomersCustomerBankAccountsIdApiResponse = /** status 200 Successful response. */ BankAccount;
export type GetCustomersCustomerBankAccountsIdApiArg = {
    customer: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostCustomersCustomerBankAccountsIdApiResponse = (/** status 200 Successful response. */ Card | BankAccount | Source);
export type PostCustomersCustomerBankAccountsIdApiArg = {
    customer: string;
    id: string;
    body: {
        account_holder_name?: string;
        account_holder_type?: "company" | "individual";
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line2?: string;
        address_state?: string;
        address_zip?: string;
        exp_month?: string;
        exp_year?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
        owner?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            email?: string;
            name?: string;
            phone?: string;
        };
    };
};
export type PostCustomersCustomerBankAccountsIdVerifyApiResponse = /** status 200 Successful response. */ BankAccount;
export type PostCustomersCustomerBankAccountsIdVerifyApiArg = {
    customer: string;
    id: string;
    body: {
        amounts?: number[];
        expand?: string[];
    };
};
export type GetCustomersCustomerCardsApiResponse = /** status 200 Successful response. */ {
    data: Card[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCustomersCustomerCardsApiArg = {
    customer: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostCustomersCustomerCardsApiResponse = /** status 200 Successful response. */ Polymorphic3;
export type PostCustomersCustomerCardsApiArg = {
    customer: string;
    body: {
        alipay_account?: string;
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        card?: {
            address_city?: string;
            address_country?: string;
            address_line1?: string;
            address_line2?: string;
            address_state?: string;
            address_zip?: string;
            cvc?: string;
            exp_month: number;
            exp_year: number;
            metadata?: {
                [key: string]: string;
            };
            name?: string;
            "number": string;
            "object"?: "card";
        } | string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
        source?: string;
    };
};
export type DeleteCustomersCustomerCardsIdApiResponse = (/** status 200 Successful response. */ Polymorphic3 | Polymorphic4);
export type DeleteCustomersCustomerCardsIdApiArg = {
    customer: string;
    id: string;
    body: {
        expand?: string[];
    };
};
export type GetCustomersCustomerCardsIdApiResponse = /** status 200 Successful response. */ Card;
export type GetCustomersCustomerCardsIdApiArg = {
    customer: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostCustomersCustomerCardsIdApiResponse = (/** status 200 Successful response. */ Card | BankAccount | Source);
export type PostCustomersCustomerCardsIdApiArg = {
    customer: string;
    id: string;
    body: {
        account_holder_name?: string;
        account_holder_type?: "company" | "individual";
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line2?: string;
        address_state?: string;
        address_zip?: string;
        exp_month?: string;
        exp_year?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
        owner?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            email?: string;
            name?: string;
            phone?: string;
        };
    };
};
export type DeleteCustomersCustomerDiscountApiResponse = /** status 200 Successful response. */ DeletedDiscount;
export type DeleteCustomersCustomerDiscountApiArg = {
    customer: string;
    body: {};
};
export type GetCustomersCustomerDiscountApiResponse = /** status 200 Successful response. */ Discount;
export type GetCustomersCustomerDiscountApiArg = {
    customer: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type GetCustomersCustomerSourcesApiResponse = /** status 200 Successful response. */ {
    data: (AlipayAccount | BankAccount | BitcoinReceiver | Card | Source)[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCustomersCustomerSourcesApiArg = {
    customer: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Filter sources according to a particular object type. */
    object?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostCustomersCustomerSourcesApiResponse = /** status 200 Successful response. */ Polymorphic3;
export type PostCustomersCustomerSourcesApiArg = {
    customer: string;
    body: {
        alipay_account?: string;
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            "object"?: "bank_account";
            routing_number?: string;
        } | string;
        card?: {
            address_city?: string;
            address_country?: string;
            address_line1?: string;
            address_line2?: string;
            address_state?: string;
            address_zip?: string;
            cvc?: string;
            exp_month: number;
            exp_year: number;
            metadata?: {
                [key: string]: string;
            };
            name?: string;
            "number": string;
            "object"?: "card";
        } | string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
        source?: string;
    };
};
export type DeleteCustomersCustomerSourcesIdApiResponse = (/** status 200 Successful response. */ Polymorphic3 | Polymorphic4);
export type DeleteCustomersCustomerSourcesIdApiArg = {
    customer: string;
    id: string;
    body: {
        expand?: string[];
    };
};
export type GetCustomersCustomerSourcesIdApiResponse = /** status 200 Successful response. */ Polymorphic3;
export type GetCustomersCustomerSourcesIdApiArg = {
    customer: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostCustomersCustomerSourcesIdApiResponse = (/** status 200 Successful response. */ Card | BankAccount | Source);
export type PostCustomersCustomerSourcesIdApiArg = {
    customer: string;
    id: string;
    body: {
        account_holder_name?: string;
        account_holder_type?: "company" | "individual";
        address_city?: string;
        address_country?: string;
        address_line1?: string;
        address_line2?: string;
        address_state?: string;
        address_zip?: string;
        exp_month?: string;
        exp_year?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
        owner?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            email?: string;
            name?: string;
            phone?: string;
        };
    };
};
export type PostCustomersCustomerSourcesIdVerifyApiResponse = /** status 200 Successful response. */ BankAccount;
export type PostCustomersCustomerSourcesIdVerifyApiArg = {
    customer: string;
    id: string;
    body: {
        amounts?: number[];
        expand?: string[];
    };
};
export type GetCustomersCustomerSubscriptionsApiResponse = /** status 200 Successful response. */ {
    data: Subscription[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCustomersCustomerSubscriptionsApiArg = {
    customer: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostCustomersCustomerSubscriptionsApiResponse = /** status 200 Successful response. */ Subscription;
export type PostCustomersCustomerSubscriptionsApiArg = {
    customer: string;
    body: {
        add_invoice_items?: {
            price?: string;
            price_data?: {
                currency: string;
                product: string;
                unit_amount?: number;
                unit_amount_decimal?: string;
            };
            quantity?: number;
            tax_rates?: string[] | "";
        }[];
        application_fee_percent?: number;
        backdate_start_date?: number;
        billing_cycle_anchor?: number;
        billing_thresholds?: {
            amount_gte?: number;
            reset_billing_cycle_anchor?: boolean;
        } | "";
        cancel_at?: number;
        cancel_at_period_end?: boolean;
        collection_method?: "charge_automatically" | "send_invoice";
        coupon?: string;
        days_until_due?: number;
        default_payment_method?: string;
        default_source?: string;
        default_tax_rates?: string[] | "";
        expand?: string[];
        items?: {
            billing_thresholds?: {
                usage_gte: number;
            } | "";
            metadata?: {
                [key: string]: string;
            };
            price?: string;
            price_data?: {
                currency: string;
                product: string;
                recurring: {
                    interval: "day" | "month" | "week" | "year";
                    interval_count?: number;
                };
                unit_amount?: number;
                unit_amount_decimal?: string;
            };
            quantity?: number;
            tax_rates?: string[] | "";
        }[];
        metadata?: {
            [key: string]: string;
        } | "";
        off_session?: boolean;
        payment_behavior?: "allow_incomplete" | "error_if_incomplete" | "pending_if_incomplete";
        pending_invoice_item_interval?: {
            interval: "day" | "month" | "week" | "year";
            interval_count?: number;
        } | "";
        promotion_code?: string;
        proration_behavior?: "always_invoice" | "create_prorations" | "none";
        transfer_data?: {
            amount_percent?: number;
            destination: string;
        };
        trial_end?: "now" | number;
        trial_from_plan?: boolean;
        trial_period_days?: number;
    };
};
export type DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdApiResponse = /** status 200 Successful response. */ Subscription;
export type DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdApiArg = {
    customer: string;
    subscriptionExposedId: string;
    body: {
        expand?: string[];
        invoice_now?: boolean;
        prorate?: boolean;
    };
};
export type GetCustomersCustomerSubscriptionsSubscriptionExposedIdApiResponse = /** status 200 Successful response. */ Subscription;
export type GetCustomersCustomerSubscriptionsSubscriptionExposedIdApiArg = {
    customer: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    subscriptionExposedId: string;
    body: {};
};
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdApiResponse = /** status 200 Successful response. */ Subscription;
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdApiArg = {
    customer: string;
    subscriptionExposedId: string;
    body: {
        add_invoice_items?: {
            price?: string;
            price_data?: {
                currency: string;
                product: string;
                unit_amount?: number;
                unit_amount_decimal?: string;
            };
            quantity?: number;
            tax_rates?: string[] | "";
        }[];
        application_fee_percent?: number;
        billing_cycle_anchor?: "now" | "unchanged";
        billing_thresholds?: {
            amount_gte?: number;
            reset_billing_cycle_anchor?: boolean;
        } | "";
        cancel_at?: number | "";
        cancel_at_period_end?: boolean;
        collection_method?: "charge_automatically" | "send_invoice";
        coupon?: string;
        days_until_due?: number;
        default_payment_method?: string;
        default_source?: string;
        default_tax_rates?: string[] | "";
        expand?: string[];
        items?: {
            billing_thresholds?: {
                usage_gte: number;
            } | "";
            clear_usage?: boolean;
            deleted?: boolean;
            id?: string;
            metadata?: {
                [key: string]: string;
            } | "";
            price?: string;
            price_data?: {
                currency: string;
                product: string;
                recurring: {
                    interval: "day" | "month" | "week" | "year";
                    interval_count?: number;
                };
                unit_amount?: number;
                unit_amount_decimal?: string;
            };
            quantity?: number;
            tax_rates?: string[] | "";
        }[];
        metadata?: {
            [key: string]: string;
        } | "";
        off_session?: boolean;
        pause_collection?: {
            behavior: "keep_as_draft" | "mark_uncollectible" | "void";
            resumes_at?: number;
        } | "";
        payment_behavior?: "allow_incomplete" | "error_if_incomplete" | "pending_if_incomplete";
        pending_invoice_item_interval?: {
            interval: "day" | "month" | "week" | "year";
            interval_count?: number;
        } | "";
        promotion_code?: string;
        proration_behavior?: "always_invoice" | "create_prorations" | "none";
        proration_date?: number;
        transfer_data?: {
            amount_percent?: number;
            destination: string;
        } | "";
        trial_end?: "now" | number;
        trial_from_plan?: boolean;
    };
};
export type DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscountApiResponse = /** status 200 Successful response. */ DeletedDiscount;
export type DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscountApiArg = {
    customer: string;
    subscriptionExposedId: string;
    body: {};
};
export type GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscountApiResponse = /** status 200 Successful response. */ Discount;
export type GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscountApiArg = {
    customer: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    subscriptionExposedId: string;
    body: {};
};
export type GetCustomersCustomerTaxIdsApiResponse = /** status 200 Successful response. */ {
    data: Tax_id[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetCustomersCustomerTaxIdsApiArg = {
    customer: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostCustomersCustomerTaxIdsApiResponse = /** status 200 Successful response. */ Tax_id;
export type PostCustomersCustomerTaxIdsApiArg = {
    customer: string;
    body: {
        expand?: string[];
        "type": "ae_trn" | "au_abn" | "br_cnpj" | "br_cpf" | "ca_bn" | "ca_qst" | "ch_vat" | "cl_tin" | "es_cif" | "eu_vat" | "hk_br" | "id_npwp" | "in_gst" | "jp_cn" | "jp_rn" | "kr_brn" | "li_uid" | "mx_rfc" | "my_frp" | "my_itn" | "my_sst" | "no_vat" | "nz_gst" | "ru_inn" | "ru_kpp" | "sa_vat" | "sg_gst" | "sg_uen" | "th_vat" | "tw_vat" | "us_ein" | "za_vat";
        value: string;
    };
};
export type DeleteCustomersCustomerTaxIdsIdApiResponse = /** status 200 Successful response. */ Deleted_tax_id;
export type DeleteCustomersCustomerTaxIdsIdApiArg = {
    customer: string;
    id: string;
    body: {};
};
export type GetCustomersCustomerTaxIdsIdApiResponse = /** status 200 Successful response. */ Tax_id;
export type GetCustomersCustomerTaxIdsIdApiArg = {
    customer: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type GetDisputesApiResponse = /** status 200 Successful response. */ {
    data: Dispute[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetDisputesApiArg = {
    /** Only return disputes associated to the charge specified by this charge ID. */
    charge?: string;
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Only return disputes associated to the PaymentIntent specified by this PaymentIntent ID. */
    paymentIntent?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetDisputesDisputeApiResponse = /** status 200 Successful response. */ Dispute;
export type GetDisputesDisputeApiArg = {
    dispute: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostDisputesDisputeApiResponse = /** status 200 Successful response. */ Dispute;
export type PostDisputesDisputeApiArg = {
    dispute: string;
    body: {
        evidence?: {
            access_activity_log?: string;
            billing_address?: string;
            cancellation_policy?: string;
            cancellation_policy_disclosure?: string;
            cancellation_rebuttal?: string;
            customer_communication?: string;
            customer_email_address?: string;
            customer_name?: string;
            customer_purchase_ip?: string;
            customer_signature?: string;
            duplicate_charge_documentation?: string;
            duplicate_charge_explanation?: string;
            duplicate_charge_id?: string;
            product_description?: string;
            receipt?: string;
            refund_policy?: string;
            refund_policy_disclosure?: string;
            refund_refusal_explanation?: string;
            service_date?: string;
            service_documentation?: string;
            shipping_address?: string;
            shipping_carrier?: string;
            shipping_date?: string;
            shipping_documentation?: string;
            shipping_tracking_number?: string;
            uncategorized_file?: string;
            uncategorized_text?: string;
        };
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        submit?: boolean;
    };
};
export type PostDisputesDisputeCloseApiResponse = /** status 200 Successful response. */ Dispute;
export type PostDisputesDisputeCloseApiArg = {
    dispute: string;
    body: {
        expand?: string[];
    };
};
export type PostEphemeralKeysApiResponse = /** status 200 Successful response. */ EphemeralKey;
export type PostEphemeralKeysApiArg = {
    body: {
        customer?: string;
        expand?: string[];
        issuing_card?: string;
    };
};
export type DeleteEphemeralKeysKeyApiResponse = /** status 200 Successful response. */ EphemeralKey;
export type DeleteEphemeralKeysKeyApiArg = {
    key: string;
    body: {
        expand?: string[];
    };
};
export type GetEventsApiResponse = /** status 200 Successful response. */ {
    data: NotificationEvent[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetEventsApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned. */
    deliverySuccess?: boolean;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property. */
    type?: string;
    /** An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both. */
    types?: string[];
    body: {};
};
export type GetEventsIdApiResponse = /** status 200 Successful response. */ NotificationEvent;
export type GetEventsIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type GetExchangeRatesApiResponse = /** status 200 Successful response. */ {
    data: ExchangeRate[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetExchangeRatesApiArg = {
    /** A cursor for use in pagination. `ending_before` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with the exchange rate for currency X your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and total number of supported payout currencies, and the default is the max. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with the exchange rate for currency X, your subsequent call can include `starting_after=X` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetExchangeRatesRateIdApiResponse = /** status 200 Successful response. */ ExchangeRate;
export type GetExchangeRatesRateIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    rateId: string;
    body: {};
};
export type GetFileLinksApiResponse = /** status 200 Successful response. */ {
    data: FileLink[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetFileLinksApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Filter links by their expiration status. By default, all links are returned. */
    expired?: boolean;
    /** Only return links for the given file. */
    file?: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostFileLinksApiResponse = /** status 200 Successful response. */ FileLink;
export type PostFileLinksApiArg = {
    body: {
        expand?: string[];
        expires_at?: number;
        file: string;
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetFileLinksLinkApiResponse = /** status 200 Successful response. */ FileLink;
export type GetFileLinksLinkApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    link: string;
    body: {};
};
export type PostFileLinksLinkApiResponse = /** status 200 Successful response. */ FileLink;
export type PostFileLinksLinkApiArg = {
    link: string;
    body: {
        expand?: string[];
        expires_at?: "now" | number | "";
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetFilesApiResponse = /** status 200 Successful response. */ {
    data: File[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetFilesApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** The file purpose to filter queries by. If none is provided, files will not be filtered by purpose. */
    purpose?: "account_requirement" | "additional_verification" | "business_icon" | "business_logo" | "customer_signature" | "dispute_evidence" | "document_provider_identity_document" | "finance_report_run" | "identity_document" | "pci_document" | "sigma_scheduled_query" | "tax_document_user_upload";
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostFilesApiResponse = /** status 200 Successful response. */ File;
export type PostFilesApiArg = {
    body: {
        expand?: string[];
        file: string;
        file_link_data?: {
            create: boolean;
            expires_at?: number;
            metadata?: {
                [key: string]: string;
            } | "";
        };
        purpose: "account_requirement" | "additional_verification" | "business_icon" | "business_logo" | "customer_signature" | "dispute_evidence" | "identity_document" | "pci_document" | "tax_document_user_upload";
    };
};
export type GetFilesFileApiResponse = /** status 200 Successful response. */ File;
export type GetFilesFileApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    file: string;
    body: {};
};
export type GetInvoiceitemsApiResponse = /** status 200 Successful response. */ {
    data: InvoiceItem[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetInvoiceitemsApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned. */
    customer?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed. */
    invoice?: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Set to `true` to only show pending invoice items, which are not yet attached to any invoices. Set to `false` to only show invoice items already attached to invoices. If unspecified, no filter is applied. */
    pending?: boolean;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostInvoiceitemsApiResponse = /** status 200 Successful response. */ InvoiceItem;
export type PostInvoiceitemsApiArg = {
    body: {
        amount?: number;
        currency?: string;
        customer: string;
        description?: string;
        discountable?: boolean;
        discounts?: {
            coupon?: string;
            discount?: string;
        }[] | "";
        expand?: string[];
        invoice?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        period?: {
            end: number;
            start: number;
        };
        price?: string;
        price_data?: {
            currency: string;
            product: string;
            unit_amount?: number;
            unit_amount_decimal?: string;
        };
        quantity?: number;
        subscription?: string;
        tax_rates?: string[];
        unit_amount?: number;
        unit_amount_decimal?: string;
    };
};
export type DeleteInvoiceitemsInvoiceitemApiResponse = /** status 200 Successful response. */ DeletedInvoiceItem;
export type DeleteInvoiceitemsInvoiceitemApiArg = {
    invoiceitem: string;
    body: {};
};
export type GetInvoiceitemsInvoiceitemApiResponse = /** status 200 Successful response. */ InvoiceItem;
export type GetInvoiceitemsInvoiceitemApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    invoiceitem: string;
    body: {};
};
export type PostInvoiceitemsInvoiceitemApiResponse = /** status 200 Successful response. */ InvoiceItem;
export type PostInvoiceitemsInvoiceitemApiArg = {
    invoiceitem: string;
    body: {
        amount?: number;
        description?: string;
        discountable?: boolean;
        discounts?: {
            coupon?: string;
            discount?: string;
        }[] | "";
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        period?: {
            end: number;
            start: number;
        };
        price?: string;
        price_data?: {
            currency: string;
            product: string;
            unit_amount?: number;
            unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
        unit_amount?: number;
        unit_amount_decimal?: string;
    };
};
export type GetInvoicesApiResponse = /** status 200 Successful response. */ {
    data: Invoice[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetInvoicesApiArg = {
    /** The collection method of the invoice to retrieve. Either `charge_automatically` or `send_invoice`. */
    collectionMethod?: "charge_automatically" | "send_invoice";
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return invoices for the customer specified by this customer ID. */
    customer?: string;
    dueDate?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview) */
    status?: "draft" | "open" | "paid" | "uncollectible" | "void";
    /** Only return invoices for the subscription specified by this subscription ID. */
    subscription?: string;
    body: {};
};
export type PostInvoicesApiResponse = /** status 200 Successful response. */ Invoice;
export type PostInvoicesApiArg = {
    body: {
        account_tax_ids?: string[] | "";
        application_fee_amount?: number;
        auto_advance?: boolean;
        collection_method?: "charge_automatically" | "send_invoice";
        custom_fields?: {
            name: string;
            value: string;
        }[] | "";
        customer: string;
        days_until_due?: number;
        default_payment_method?: string;
        default_source?: string;
        default_tax_rates?: string[];
        description?: string;
        discounts?: {
            coupon?: string;
            discount?: string;
        }[] | "";
        due_date?: number;
        expand?: string[];
        footer?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        statement_descriptor?: string;
        subscription?: string;
        transfer_data?: {
            amount?: number;
            destination: string;
        };
    };
};
export type GetInvoicesUpcomingApiResponse = /** status 200 Successful response. */ Invoice;
export type GetInvoicesUpcomingApiArg = {
    /** The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string. */
    coupon?: string;
    /** The identifier of the customer whose upcoming invoice you'd like to retrieve. */
    customer?: string;
    /** The coupons to redeem into discounts for the invoice preview. If not specified, inherits the discount from the customer or subscription. Pass an empty string to avoid inheriting any discounts. */
    discounts?: {
        coupon?: string;
        discount?: string;
    }[] | "";
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** List of invoice items to add or update in the upcoming invoice preview. */
    invoiceItems?: {
        amount?: number;
        currency?: string;
        description?: string;
        discountable?: boolean;
        discounts?: {
            coupon?: string;
            discount?: string;
        }[] | "";
        invoiceitem?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        period?: {
            end: number;
            start: number;
        };
        price?: string;
        price_data?: {
            currency: string;
            product: string;
            unit_amount?: number;
            unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
        unit_amount?: number;
        unit_amount_decimal?: string;
    }[];
    /** The identifier of the unstarted schedule whose upcoming invoice you'd like to retrieve. Cannot be used with subscription or subscription fields. */
    schedule?: string;
    /** The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions. */
    subscription?: string;
    /** For new subscriptions, a future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. For existing subscriptions, the value can only be set to `now` or `unchanged`. */
    subscriptionBillingCycleAnchor?: ("now" | "unchanged") | number;
    /** Timestamp indicating when the subscription should be scheduled to cancel. Will prorate if within the current period and prorations have been enabled using `proration_behavior`. */
    subscriptionCancelAt?: number | "";
    /** Boolean indicating whether this subscription should cancel at the end of the current period. */
    subscriptionCancelAtPeriodEnd?: boolean;
    /** This simulates the subscription being canceled or expired immediately. */
    subscriptionCancelNow?: boolean;
    /** If provided, the invoice returned will preview updating or creating a subscription with these default tax rates. The default tax rates will apply to any line item that does not have `tax_rates` set. */
    subscriptionDefaultTaxRates?: string[] | "";
    /** A list of up to 20 subscription items, each with an attached price. */
    subscriptionItems?: {
        billing_thresholds?: {
            usage_gte: number;
        } | "";
        clear_usage?: boolean;
        deleted?: boolean;
        id?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        price?: string;
        price_data?: {
            currency: string;
            product: string;
            recurring: {
                interval: "day" | "month" | "week" | "year";
                interval_count?: number;
            };
            unit_amount?: number;
            unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
    }[];
    /** Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.

    Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://stripe.com/docs/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.

    Prorations can be disabled by passing `none`. */
    subscriptionProrationBehavior?: "always_invoice" | "create_prorations" | "none";
    /** If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration_behavior` cannot be set to 'none'. */
    subscriptionProrationDate?: number;
    /** Date a subscription is intended to start (can be future or past) */
    subscriptionStartDate?: number;
    /** If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required. */
    subscriptionTrialEnd?: "now" | number;
    /** Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed. */
    subscriptionTrialFromPlan?: boolean;
    body: {};
};
export type GetInvoicesUpcomingLinesApiResponse = /** status 200 Successful response. */ {
    data: InvoiceLineItem[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetInvoicesUpcomingLinesApiArg = {
    /** The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string. */
    coupon?: string;
    /** The identifier of the customer whose upcoming invoice you'd like to retrieve. */
    customer?: string;
    /** The coupons to redeem into discounts for the invoice preview. If not specified, inherits the discount from the customer or subscription. Pass an empty string to avoid inheriting any discounts. */
    discounts?: {
        coupon?: string;
        discount?: string;
    }[] | "";
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** List of invoice items to add or update in the upcoming invoice preview. */
    invoiceItems?: {
        amount?: number;
        currency?: string;
        description?: string;
        discountable?: boolean;
        discounts?: {
            coupon?: string;
            discount?: string;
        }[] | "";
        invoiceitem?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        period?: {
            end: number;
            start: number;
        };
        price?: string;
        price_data?: {
            currency: string;
            product: string;
            unit_amount?: number;
            unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
        unit_amount?: number;
        unit_amount_decimal?: string;
    }[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** The identifier of the unstarted schedule whose upcoming invoice you'd like to retrieve. Cannot be used with subscription or subscription fields. */
    schedule?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions. */
    subscription?: string;
    /** For new subscriptions, a future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. For existing subscriptions, the value can only be set to `now` or `unchanged`. */
    subscriptionBillingCycleAnchor?: ("now" | "unchanged") | number;
    /** Timestamp indicating when the subscription should be scheduled to cancel. Will prorate if within the current period and prorations have been enabled using `proration_behavior`. */
    subscriptionCancelAt?: number | "";
    /** Boolean indicating whether this subscription should cancel at the end of the current period. */
    subscriptionCancelAtPeriodEnd?: boolean;
    /** This simulates the subscription being canceled or expired immediately. */
    subscriptionCancelNow?: boolean;
    /** If provided, the invoice returned will preview updating or creating a subscription with these default tax rates. The default tax rates will apply to any line item that does not have `tax_rates` set. */
    subscriptionDefaultTaxRates?: string[] | "";
    /** A list of up to 20 subscription items, each with an attached price. */
    subscriptionItems?: {
        billing_thresholds?: {
            usage_gte: number;
        } | "";
        clear_usage?: boolean;
        deleted?: boolean;
        id?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        price?: string;
        price_data?: {
            currency: string;
            product: string;
            recurring: {
                interval: "day" | "month" | "week" | "year";
                interval_count?: number;
            };
            unit_amount?: number;
            unit_amount_decimal?: string;
        };
        quantity?: number;
        tax_rates?: string[] | "";
    }[];
    /** Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.

    Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://stripe.com/docs/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.

    Prorations can be disabled by passing `none`. */
    subscriptionProrationBehavior?: "always_invoice" | "create_prorations" | "none";
    /** If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration_behavior` cannot be set to 'none'. */
    subscriptionProrationDate?: number;
    /** Date a subscription is intended to start (can be future or past) */
    subscriptionStartDate?: number;
    /** If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required. */
    subscriptionTrialEnd?: "now" | number;
    /** Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed. */
    subscriptionTrialFromPlan?: boolean;
    body: {};
};
export type DeleteInvoicesInvoiceApiResponse = /** status 200 Successful response. */ DeletedInvoice;
export type DeleteInvoicesInvoiceApiArg = {
    invoice: string;
    body: {};
};
export type GetInvoicesInvoiceApiResponse = /** status 200 Successful response. */ Invoice;
export type GetInvoicesInvoiceApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    invoice: string;
    body: {};
};
export type PostInvoicesInvoiceApiResponse = /** status 200 Successful response. */ Invoice;
export type PostInvoicesInvoiceApiArg = {
    invoice: string;
    body: {
        account_tax_ids?: string[] | "";
        application_fee_amount?: number;
        auto_advance?: boolean;
        collection_method?: "charge_automatically" | "send_invoice";
        custom_fields?: {
            name: string;
            value: string;
        }[] | "";
        days_until_due?: number;
        default_payment_method?: string;
        default_source?: string;
        default_tax_rates?: string[] | "";
        description?: string;
        discounts?: {
            coupon?: string;
            discount?: string;
        }[] | "";
        due_date?: number;
        expand?: string[];
        footer?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        statement_descriptor?: string;
        transfer_data?: {
            amount?: number;
            destination: string;
        } | "";
    };
};
export type PostInvoicesInvoiceFinalizeApiResponse = /** status 200 Successful response. */ Invoice;
export type PostInvoicesInvoiceFinalizeApiArg = {
    invoice: string;
    body: {
        auto_advance?: boolean;
        expand?: string[];
    };
};
export type GetInvoicesInvoiceLinesApiResponse = /** status 200 Successful response. */ {
    data: InvoiceLineItem[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetInvoicesInvoiceLinesApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    invoice: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostInvoicesInvoiceMarkUncollectibleApiResponse = /** status 200 Successful response. */ Invoice;
export type PostInvoicesInvoiceMarkUncollectibleApiArg = {
    invoice: string;
    body: {
        expand?: string[];
    };
};
export type PostInvoicesInvoicePayApiResponse = /** status 200 Successful response. */ Invoice;
export type PostInvoicesInvoicePayApiArg = {
    invoice: string;
    body: {
        expand?: string[];
        forgive?: boolean;
        off_session?: boolean;
        paid_out_of_band?: boolean;
        payment_method?: string;
        source?: string;
    };
};
export type PostInvoicesInvoiceSendApiResponse = /** status 200 Successful response. */ Invoice;
export type PostInvoicesInvoiceSendApiArg = {
    invoice: string;
    body: {
        expand?: string[];
    };
};
export type PostInvoicesInvoiceVoidApiResponse = /** status 200 Successful response. */ Invoice;
export type PostInvoicesInvoiceVoidApiArg = {
    invoice: string;
    body: {
        expand?: string[];
    };
};
export type GetIssuerFraudRecordsApiResponse = /** status 200 Successful response. */ {
    data: IssuerFraudRecord[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetIssuerFraudRecordsApiArg = {
    /** Only return issuer fraud records for the charge specified by this charge ID. */
    charge?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetIssuerFraudRecordsIssuerFraudRecordApiResponse = /** status 200 Successful response. */ IssuerFraudRecord;
export type GetIssuerFraudRecordsIssuerFraudRecordApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    issuerFraudRecord: string;
    body: {};
};
export type GetIssuingAuthorizationsApiResponse = /** status 200 Successful response. */ {
    data: IssuingAuthorization[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetIssuingAuthorizationsApiArg = {
    /** Only return authorizations that belong to the given card. */
    card?: string;
    /** Only return authorizations that belong to the given cardholder. */
    cardholder?: string;
    /** Only return authorizations that were created during the given date interval. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`. */
    status?: "closed" | "pending" | "reversed";
    body: {};
};
export type GetIssuingAuthorizationsAuthorizationApiResponse = /** status 200 Successful response. */ IssuingAuthorization;
export type GetIssuingAuthorizationsAuthorizationApiArg = {
    authorization: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostIssuingAuthorizationsAuthorizationApiResponse = /** status 200 Successful response. */ IssuingAuthorization;
export type PostIssuingAuthorizationsAuthorizationApiArg = {
    authorization: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type PostIssuingAuthorizationsAuthorizationApproveApiResponse = /** status 200 Successful response. */ IssuingAuthorization;
export type PostIssuingAuthorizationsAuthorizationApproveApiArg = {
    authorization: string;
    body: {
        amount?: number;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type PostIssuingAuthorizationsAuthorizationDeclineApiResponse = /** status 200 Successful response. */ IssuingAuthorization;
export type PostIssuingAuthorizationsAuthorizationDeclineApiArg = {
    authorization: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetIssuingCardholdersApiResponse = /** status 200 Successful response. */ {
    data: IssuingCardholder[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetIssuingCardholdersApiArg = {
    /** Only return cardholders that were created during the given date interval. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return cardholders that have the given email address. */
    email?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Only return cardholders that have the given phone number. */
    phoneNumber?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only return cardholders that have the given status. One of `active`, `inactive`, or `blocked`. */
    status?: "active" | "blocked" | "inactive";
    /** Only return cardholders that have the given type. One of `individual` or `company`. */
    type?: "company" | "individual";
    body: {};
};
export type PostIssuingCardholdersApiResponse = /** status 200 Successful response. */ IssuingCardholder;
export type PostIssuingCardholdersApiArg = {
    body: {
        billing: {
            address: {
                city: string;
                country: string;
                line1: string;
                line2?: string;
                postal_code: string;
                state?: string;
            };
        };
        company?: {
            tax_id?: string;
        };
        email?: string;
        expand?: string[];
        individual?: {
            dob?: {
                day: number;
                month: number;
                year: number;
            };
            first_name: string;
            last_name: string;
            verification?: {
                document?: {
                    back?: string;
                    front?: string;
                };
            };
        };
        metadata?: {
            [key: string]: string;
        };
        name: string;
        phone_number?: string;
        spending_controls?: {
            allowed_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
            blocked_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
            spending_limits?: {
                amount: number;
                categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
                interval: "all_time" | "daily" | "monthly" | "per_authorization" | "weekly" | "yearly";
            }[];
            spending_limits_currency?: string;
        };
        status?: "active" | "inactive";
        "type": "company" | "individual";
    };
};
export type GetIssuingCardholdersCardholderApiResponse = /** status 200 Successful response. */ IssuingCardholder;
export type GetIssuingCardholdersCardholderApiArg = {
    cardholder: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostIssuingCardholdersCardholderApiResponse = /** status 200 Successful response. */ IssuingCardholder;
export type PostIssuingCardholdersCardholderApiArg = {
    cardholder: string;
    body: {
        billing?: {
            address: {
                city: string;
                country: string;
                line1: string;
                line2?: string;
                postal_code: string;
                state?: string;
            };
        };
        company?: {
            tax_id?: string;
        };
        email?: string;
        expand?: string[];
        individual?: {
            dob?: {
                day: number;
                month: number;
                year: number;
            };
            first_name: string;
            last_name: string;
            verification?: {
                document?: {
                    back?: string;
                    front?: string;
                };
            };
        };
        metadata?: {
            [key: string]: string;
        };
        phone_number?: string;
        spending_controls?: {
            allowed_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
            blocked_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
            spending_limits?: {
                amount: number;
                categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
                interval: "all_time" | "daily" | "monthly" | "per_authorization" | "weekly" | "yearly";
            }[];
            spending_limits_currency?: string;
        };
        status?: "active" | "inactive";
    };
};
export type GetIssuingCardsApiResponse = /** status 200 Successful response. */ {
    data: IssuingCard[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetIssuingCardsApiArg = {
    /** Only return cards belonging to the Cardholder with the provided ID. */
    cardholder?: string;
    /** Only return cards that were issued during the given date interval. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Only return cards that have the given expiration month. */
    expMonth?: number;
    /** Only return cards that have the given expiration year. */
    expYear?: number;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Only return cards that have the given last four digits. */
    last4?: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only return cards that have the given status. One of `active`, `inactive`, or `canceled`. */
    status?: "active" | "canceled" | "inactive";
    /** Only return cards that have the given type. One of `virtual` or `physical`. */
    type?: "physical" | "virtual";
    body: {};
};
export type PostIssuingCardsApiResponse = /** status 200 Successful response. */ IssuingCard;
export type PostIssuingCardsApiArg = {
    body: {
        cardholder?: string;
        currency: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
        replacement_for?: string;
        replacement_reason?: "damaged" | "expired" | "lost" | "stolen";
        shipping?: {
            address: {
                city: string;
                country: string;
                line1: string;
                line2?: string;
                postal_code: string;
                state?: string;
            };
            name: string;
            service?: "express" | "priority" | "standard";
            "type"?: "bulk" | "individual";
        };
        spending_controls?: {
            allowed_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
            blocked_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
            spending_limits?: {
                amount: number;
                categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
                interval: "all_time" | "daily" | "monthly" | "per_authorization" | "weekly" | "yearly";
            }[];
        };
        status?: "active" | "inactive";
        "type": "physical" | "virtual";
    };
};
export type GetIssuingCardsCardApiResponse = /** status 200 Successful response. */ IssuingCard;
export type GetIssuingCardsCardApiArg = {
    card: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostIssuingCardsCardApiResponse = /** status 200 Successful response. */ IssuingCard;
export type PostIssuingCardsCardApiArg = {
    card: string;
    body: {
        cancellation_reason?: "lost" | "stolen";
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        spending_controls?: {
            allowed_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
            blocked_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
            spending_limits?: {
                amount: number;
                categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[];
                interval: "all_time" | "daily" | "monthly" | "per_authorization" | "weekly" | "yearly";
            }[];
        };
        status?: "active" | "canceled" | "inactive";
    };
};
export type GetIssuingDisputesApiResponse = /** status 200 Successful response. */ {
    data: IssuingDispute[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetIssuingDisputesApiArg = {
    /** Select Issuing disputes that were created during the given date interval. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Select Issuing disputes with the given status. */
    status?: "expired" | "lost" | "submitted" | "unsubmitted" | "won";
    /** Select the Issuing dispute for the given transaction. */
    transaction?: string;
    body: {};
};
export type PostIssuingDisputesApiResponse = /** status 200 Successful response. */ IssuingDispute;
export type PostIssuingDisputesApiArg = {
    body: {
        evidence?: {
            canceled?: {
                additional_documentation?: string | "";
                canceled_at?: number | "";
                cancellation_policy_provided?: boolean | "";
                cancellation_reason?: string;
                expected_at?: number | "";
                explanation?: string;
                product_description?: string;
                product_type?: "" | "merchandise" | "service";
                return_status?: "" | "merchant_rejected" | "successful";
                returned_at?: number | "";
            } | "";
            duplicate?: {
                additional_documentation?: string | "";
                card_statement?: string | "";
                cash_receipt?: string | "";
                check_image?: string | "";
                explanation?: string;
                original_transaction?: string;
            } | "";
            fraudulent?: {
                additional_documentation?: string | "";
                explanation?: string;
            } | "";
            merchandise_not_as_described?: {
                additional_documentation?: string | "";
                explanation?: string;
                received_at?: number | "";
                return_description?: string;
                return_status?: "" | "merchant_rejected" | "successful";
                returned_at?: number | "";
            } | "";
            not_received?: {
                additional_documentation?: string | "";
                expected_at?: number | "";
                explanation?: string;
                product_description?: string;
                product_type?: "" | "merchandise" | "service";
            } | "";
            other?: {
                additional_documentation?: string | "";
                explanation?: string;
                product_description?: string;
                product_type?: "" | "merchandise" | "service";
            } | "";
            reason?: "canceled" | "duplicate" | "fraudulent" | "merchandise_not_as_described" | "not_received" | "other" | "service_not_as_described";
            service_not_as_described?: {
                additional_documentation?: string | "";
                canceled_at?: number | "";
                cancellation_reason?: string;
                explanation?: string;
                received_at?: number | "";
            } | "";
        };
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
        transaction: string;
    };
};
export type GetIssuingDisputesDisputeApiResponse = /** status 200 Successful response. */ IssuingDispute;
export type GetIssuingDisputesDisputeApiArg = {
    dispute: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type PostIssuingDisputesDisputeApiResponse = /** status 200 Successful response. */ IssuingDispute;
export type PostIssuingDisputesDisputeApiArg = {
    dispute: string;
    body: {
        evidence?: {
            canceled?: {
                additional_documentation?: string | "";
                canceled_at?: number | "";
                cancellation_policy_provided?: boolean | "";
                cancellation_reason?: string;
                expected_at?: number | "";
                explanation?: string;
                product_description?: string;
                product_type?: "" | "merchandise" | "service";
                return_status?: "" | "merchant_rejected" | "successful";
                returned_at?: number | "";
            } | "";
            duplicate?: {
                additional_documentation?: string | "";
                card_statement?: string | "";
                cash_receipt?: string | "";
                check_image?: string | "";
                explanation?: string;
                original_transaction?: string;
            } | "";
            fraudulent?: {
                additional_documentation?: string | "";
                explanation?: string;
            } | "";
            merchandise_not_as_described?: {
                additional_documentation?: string | "";
                explanation?: string;
                received_at?: number | "";
                return_description?: string;
                return_status?: "" | "merchant_rejected" | "successful";
                returned_at?: number | "";
            } | "";
            not_received?: {
                additional_documentation?: string | "";
                expected_at?: number | "";
                explanation?: string;
                product_description?: string;
                product_type?: "" | "merchandise" | "service";
            } | "";
            other?: {
                additional_documentation?: string | "";
                explanation?: string;
                product_description?: string;
                product_type?: "" | "merchandise" | "service";
            } | "";
            reason?: "canceled" | "duplicate" | "fraudulent" | "merchandise_not_as_described" | "not_received" | "other" | "service_not_as_described";
            service_not_as_described?: {
                additional_documentation?: string | "";
                canceled_at?: number | "";
                cancellation_reason?: string;
                explanation?: string;
                received_at?: number | "";
            } | "";
        };
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type PostIssuingDisputesDisputeSubmitApiResponse = /** status 200 Successful response. */ IssuingDispute;
export type PostIssuingDisputesDisputeSubmitApiArg = {
    dispute: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetIssuingSettlementsApiResponse = /** status 200 Successful response. */ {
    data: IssuingSettlement[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetIssuingSettlementsApiArg = {
    /** Only return issuing settlements that were created during the given date interval. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetIssuingSettlementsSettlementApiResponse = /** status 200 Successful response. */ IssuingSettlement;
export type GetIssuingSettlementsSettlementApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    settlement: string;
    body: {};
};
export type PostIssuingSettlementsSettlementApiResponse = /** status 200 Successful response. */ IssuingSettlement;
export type PostIssuingSettlementsSettlementApiArg = {
    settlement: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
    };
};
export type GetIssuingTransactionsApiResponse = /** status 200 Successful response. */ {
    data: IssuingTransaction[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetIssuingTransactionsApiArg = {
    /** Only return transactions that belong to the given card. */
    card?: string;
    /** Only return transactions that belong to the given cardholder. */
    cardholder?: string;
    /** Only return transactions that were created during the given date interval. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetIssuingTransactionsTransactionApiResponse = /** status 200 Successful response. */ IssuingTransaction;
export type GetIssuingTransactionsTransactionApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    transaction: string;
    body: {};
};
export type PostIssuingTransactionsTransactionApiResponse = /** status 200 Successful response. */ IssuingTransaction;
export type PostIssuingTransactionsTransactionApiArg = {
    transaction: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetMandatesMandateApiResponse = /** status 200 Successful response. */ Mandate;
export type GetMandatesMandateApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    mandate: string;
    body: {};
};
export type GetOrderReturnsApiResponse = /** status 200 Successful response. */ {
    data: OrderReturn[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetOrderReturnsApiArg = {
    /** Date this return was created. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** The order to retrieve returns for. */
    order?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetOrderReturnsIdApiResponse = /** status 200 Successful response. */ OrderReturn;
export type GetOrderReturnsIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type GetOrdersApiResponse = /** status 200 Successful response. */ {
    data: Order[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetOrdersApiArg = {
    /** Date this order was created. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return orders for the given customer. */
    customer?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Only return orders with the given IDs. */
    ids?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only return orders that have the given status. One of `created`, `paid`, `fulfilled`, or `refunded`. */
    status?: string;
    /** Filter orders based on when they were paid, fulfilled, canceled, or returned. */
    statusTransitions?: {
        canceled?: {
            gt?: number;
            gte?: number;
            lt?: number;
            lte?: number;
        } | number;
        fulfilled?: {
            gt?: number;
            gte?: number;
            lt?: number;
            lte?: number;
        } | number;
        paid?: {
            gt?: number;
            gte?: number;
            lt?: number;
            lte?: number;
        } | number;
        returned?: {
            gt?: number;
            gte?: number;
            lt?: number;
            lte?: number;
        } | number;
    };
    /** Only return orders with the given upstream order IDs. */
    upstreamIds?: string[];
    body: {};
};
export type PostOrdersApiResponse = /** status 200 Successful response. */ Order;
export type PostOrdersApiArg = {
    body: {
        coupon?: string;
        currency: string;
        customer?: string;
        email?: string;
        expand?: string[];
        items?: {
            amount?: number;
            currency?: string;
            description?: string;
            parent?: string;
            quantity?: number;
            "type"?: "discount" | "shipping" | "sku" | "tax";
        }[];
        metadata?: {
            [key: string]: string;
        };
        shipping?: {
            address: {
                city?: string;
                country?: string;
                line1: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            name: string;
            phone?: string;
        };
    };
};
export type GetOrdersIdApiResponse = /** status 200 Successful response. */ Order;
export type GetOrdersIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostOrdersIdApiResponse = /** status 200 Successful response. */ Order;
export type PostOrdersIdApiArg = {
    id: string;
    body: {
        coupon?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        selected_shipping_method?: string;
        shipping?: {
            carrier: string;
            tracking_number: string;
        };
        status?: "canceled" | "created" | "fulfilled" | "paid" | "returned";
    };
};
export type PostOrdersIdPayApiResponse = /** status 200 Successful response. */ Order;
export type PostOrdersIdPayApiArg = {
    id: string;
    body: {
        application_fee?: number;
        customer?: string;
        email?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
        source?: string;
    };
};
export type PostOrdersIdReturnsApiResponse = /** status 200 Successful response. */ OrderReturn;
export type PostOrdersIdReturnsApiArg = {
    id: string;
    body: {
        expand?: string[];
        items?: {
            amount?: number;
            description?: string;
            parent?: string;
            quantity?: number;
            "type"?: "discount" | "shipping" | "sku" | "tax";
        }[] | "";
    };
};
export type GetPaymentIntentsApiResponse = /** status 200 Successful response. */ {
    data: PaymentIntent[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetPaymentIntentsApiArg = {
    /** A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return PaymentIntents for the customer specified by this customer ID. */
    customer?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostPaymentIntentsApiResponse = /** status 200 Successful response. */ PaymentIntent;
export type PostPaymentIntentsApiArg = {
    body: {
        amount: number;
        application_fee_amount?: number;
        capture_method?: "automatic" | "manual";
        confirm?: boolean;
        confirmation_method?: "automatic" | "manual";
        currency: string;
        customer?: string;
        description?: string;
        error_on_requires_action?: boolean;
        expand?: string[];
        mandate?: string;
        mandate_data?: {
            customer_acceptance: {
                accepted_at?: number;
                offline?: {};
                online?: {
                    ip_address: string;
                    user_agent: string;
                };
                "type": "offline" | "online";
            };
        };
        metadata?: {
            [key: string]: string;
        };
        off_session?: boolean | ("one_off" | "recurring");
        on_behalf_of?: string;
        payment_method?: string;
        payment_method_data?: {
            alipay?: {};
            au_becs_debit?: {
                account_number: string;
                bsb_number: string;
            };
            bacs_debit?: {
                account_number?: string;
                sort_code?: string;
            };
            bancontact?: {};
            billing_details?: {
                address?: {
                    city?: string;
                    country?: string;
                    line1?: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                } | "";
                email?: string;
                name?: string;
                phone?: string;
            };
            eps?: {
                bank?: "arzte_und_apotheker_bank" | "austrian_anadi_bank_ag" | "bank_austria" | "bankhaus_carl_spangler" | "bankhaus_schelhammer_und_schattera_ag" | "bawag_psk_ag" | "bks_bank_ag" | "brull_kallmus_bank_ag" | "btv_vier_lander_bank" | "capital_bank_grawe_gruppe_ag" | "dolomitenbank" | "easybank_ag" | "erste_bank_und_sparkassen" | "hypo_alpeadriabank_international_ag" | "hypo_bank_burgenland_aktiengesellschaft" | "hypo_noe_lb_fur_niederosterreich_u_wien" | "hypo_oberosterreich_salzburg_steiermark" | "hypo_tirol_bank_ag" | "hypo_vorarlberg_bank_ag" | "marchfelder_bank" | "oberbank_ag" | "raiffeisen_bankengruppe_osterreich" | "schoellerbank_ag" | "sparda_bank_wien" | "volksbank_gruppe" | "volkskreditbank_ag" | "vr_bank_braunau";
            };
            fpx?: {
                bank: "affin_bank" | "alliance_bank" | "ambank" | "bank_islam" | "bank_muamalat" | "bank_rakyat" | "bsn" | "cimb" | "deutsche_bank" | "hong_leong_bank" | "hsbc" | "kfh" | "maybank2e" | "maybank2u" | "ocbc" | "pb_enterprise" | "public_bank" | "rhb" | "standard_chartered" | "uob";
            };
            giropay?: {};
            grabpay?: {};
            ideal?: {
                bank?: "abn_amro" | "asn_bank" | "bunq" | "handelsbanken" | "ing" | "knab" | "moneyou" | "rabobank" | "regiobank" | "sns_bank" | "triodos_bank" | "van_lanschot";
            };
            interac_present?: {};
            metadata?: {
                [key: string]: string;
            };
            oxxo?: {};
            p24?: {
                bank?: "alior_bank" | "bank_millennium" | "bank_nowy_bfg_sa" | "bank_pekao_sa" | "banki_spbdzielcze" | "blik" | "bnp_paribas" | "boz" | "citi_handlowy" | "credit_agricole" | "envelobank" | "etransfer_pocztowy24" | "getin_bank" | "ideabank" | "ing" | "inteligo" | "mbank_mtransfer" | "nest_przelew" | "noble_pay" | "pbac_z_ipko" | "plus_bank" | "santander_przelew24" | "tmobile_usbugi_bankowe" | "toyota_bank" | "volkswagen_bank";
            };
            sepa_debit?: {
                iban: string;
            };
            sofort?: {
                country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
            };
            "type": "alipay" | "au_becs_debit" | "bacs_debit" | "bancontact" | "eps" | "fpx" | "giropay" | "grabpay" | "ideal" | "oxxo" | "p24" | "sepa_debit" | "sofort";
        };
        payment_method_options?: {
            alipay?: {} | "";
            bancontact?: {
                preferred_language?: "de" | "en" | "fr" | "nl";
            } | "";
            card?: {
                cvc_token?: string;
                installments?: {
                    enabled?: boolean;
                    plan?: {
                        count: number;
                        interval: "month";
                        "type": "fixed_count";
                    } | "";
                };
                network?: "amex" | "cartes_bancaires" | "diners" | "discover" | "interac" | "jcb" | "mastercard" | "unionpay" | "unknown" | "visa";
                request_three_d_secure?: "any" | "automatic";
            } | "";
            oxxo?: {
                expires_after_days?: number;
            } | "";
            p24?: {
                tos_shown_and_accepted?: boolean;
            } | "";
            sepa_debit?: {
                mandate_options?: {};
            } | "";
            sofort?: {
                preferred_language?: "de" | "en" | "es" | "fr" | "it" | "nl" | "pl";
            } | "";
        };
        payment_method_types?: string[];
        receipt_email?: string;
        return_url?: string;
        setup_future_usage?: "off_session" | "on_session";
        shipping?: {
            address: {
                city?: string;
                country?: string;
                line1: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            carrier?: string;
            name: string;
            phone?: string;
            tracking_number?: string;
        };
        statement_descriptor?: string;
        statement_descriptor_suffix?: string;
        transfer_data?: {
            amount?: number;
            destination: string;
        };
        transfer_group?: string;
        use_stripe_sdk?: boolean;
    };
};
export type GetPaymentIntentsIntentApiResponse = /** status 200 Successful response. */ PaymentIntent;
export type GetPaymentIntentsIntentApiArg = {
    /** The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source. */
    clientSecret?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    intent: string;
    body: {};
};
export type PostPaymentIntentsIntentApiResponse = /** status 200 Successful response. */ PaymentIntent;
export type PostPaymentIntentsIntentApiArg = {
    intent: string;
    body: {
        amount?: number;
        application_fee_amount?: number | "";
        currency?: string;
        customer?: string;
        description?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        payment_method?: string;
        payment_method_data?: {
            alipay?: {};
            au_becs_debit?: {
                account_number: string;
                bsb_number: string;
            };
            bacs_debit?: {
                account_number?: string;
                sort_code?: string;
            };
            bancontact?: {};
            billing_details?: {
                address?: {
                    city?: string;
                    country?: string;
                    line1?: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                } | "";
                email?: string;
                name?: string;
                phone?: string;
            };
            eps?: {
                bank?: "arzte_und_apotheker_bank" | "austrian_anadi_bank_ag" | "bank_austria" | "bankhaus_carl_spangler" | "bankhaus_schelhammer_und_schattera_ag" | "bawag_psk_ag" | "bks_bank_ag" | "brull_kallmus_bank_ag" | "btv_vier_lander_bank" | "capital_bank_grawe_gruppe_ag" | "dolomitenbank" | "easybank_ag" | "erste_bank_und_sparkassen" | "hypo_alpeadriabank_international_ag" | "hypo_bank_burgenland_aktiengesellschaft" | "hypo_noe_lb_fur_niederosterreich_u_wien" | "hypo_oberosterreich_salzburg_steiermark" | "hypo_tirol_bank_ag" | "hypo_vorarlberg_bank_ag" | "marchfelder_bank" | "oberbank_ag" | "raiffeisen_bankengruppe_osterreich" | "schoellerbank_ag" | "sparda_bank_wien" | "volksbank_gruppe" | "volkskreditbank_ag" | "vr_bank_braunau";
            };
            fpx?: {
                bank: "affin_bank" | "alliance_bank" | "ambank" | "bank_islam" | "bank_muamalat" | "bank_rakyat" | "bsn" | "cimb" | "deutsche_bank" | "hong_leong_bank" | "hsbc" | "kfh" | "maybank2e" | "maybank2u" | "ocbc" | "pb_enterprise" | "public_bank" | "rhb" | "standard_chartered" | "uob";
            };
            giropay?: {};
            grabpay?: {};
            ideal?: {
                bank?: "abn_amro" | "asn_bank" | "bunq" | "handelsbanken" | "ing" | "knab" | "moneyou" | "rabobank" | "regiobank" | "sns_bank" | "triodos_bank" | "van_lanschot";
            };
            interac_present?: {};
            metadata?: {
                [key: string]: string;
            };
            oxxo?: {};
            p24?: {
                bank?: "alior_bank" | "bank_millennium" | "bank_nowy_bfg_sa" | "bank_pekao_sa" | "banki_spbdzielcze" | "blik" | "bnp_paribas" | "boz" | "citi_handlowy" | "credit_agricole" | "envelobank" | "etransfer_pocztowy24" | "getin_bank" | "ideabank" | "ing" | "inteligo" | "mbank_mtransfer" | "nest_przelew" | "noble_pay" | "pbac_z_ipko" | "plus_bank" | "santander_przelew24" | "tmobile_usbugi_bankowe" | "toyota_bank" | "volkswagen_bank";
            };
            sepa_debit?: {
                iban: string;
            };
            sofort?: {
                country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
            };
            "type": "alipay" | "au_becs_debit" | "bacs_debit" | "bancontact" | "eps" | "fpx" | "giropay" | "grabpay" | "ideal" | "oxxo" | "p24" | "sepa_debit" | "sofort";
        };
        payment_method_options?: {
            alipay?: {} | "";
            bancontact?: {
                preferred_language?: "de" | "en" | "fr" | "nl";
            } | "";
            card?: {
                cvc_token?: string;
                installments?: {
                    enabled?: boolean;
                    plan?: {
                        count: number;
                        interval: "month";
                        "type": "fixed_count";
                    } | "";
                };
                network?: "amex" | "cartes_bancaires" | "diners" | "discover" | "interac" | "jcb" | "mastercard" | "unionpay" | "unknown" | "visa";
                request_three_d_secure?: "any" | "automatic";
            } | "";
            oxxo?: {
                expires_after_days?: number;
            } | "";
            p24?: {
                tos_shown_and_accepted?: boolean;
            } | "";
            sepa_debit?: {
                mandate_options?: {};
            } | "";
            sofort?: {
                preferred_language?: "de" | "en" | "es" | "fr" | "it" | "nl" | "pl";
            } | "";
        };
        payment_method_types?: string[];
        receipt_email?: string | "";
        setup_future_usage?: "" | "off_session" | "on_session";
        shipping?: {
            address: {
                city?: string;
                country?: string;
                line1: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            carrier?: string;
            name: string;
            phone?: string;
            tracking_number?: string;
        } | "";
        statement_descriptor?: string;
        statement_descriptor_suffix?: string;
        transfer_data?: {
            amount?: number;
        };
        transfer_group?: string;
    };
};
export type PostPaymentIntentsIntentCancelApiResponse = /** status 200 Successful response. */ PaymentIntent;
export type PostPaymentIntentsIntentCancelApiArg = {
    intent: string;
    body: {
        cancellation_reason?: "abandoned" | "duplicate" | "fraudulent" | "requested_by_customer";
        expand?: string[];
    };
};
export type PostPaymentIntentsIntentCaptureApiResponse = /** status 200 Successful response. */ PaymentIntent;
export type PostPaymentIntentsIntentCaptureApiArg = {
    intent: string;
    body: {
        amount_to_capture?: number;
        application_fee_amount?: number;
        expand?: string[];
        statement_descriptor?: string;
        statement_descriptor_suffix?: string;
        transfer_data?: {
            amount?: number;
        };
    };
};
export type PostPaymentIntentsIntentConfirmApiResponse = /** status 200 Successful response. */ PaymentIntent;
export type PostPaymentIntentsIntentConfirmApiArg = {
    intent: string;
    body: {
        client_secret?: string;
        error_on_requires_action?: boolean;
        expand?: string[];
        mandate?: string;
        mandate_data?: {
            customer_acceptance: {
                accepted_at?: number;
                offline?: {};
                online?: {
                    ip_address: string;
                    user_agent: string;
                };
                "type": "offline" | "online";
            };
        } | {
            customer_acceptance: {
                online: {
                    ip_address?: string;
                    user_agent?: string;
                };
                "type": "online";
            };
        };
        off_session?: boolean | ("one_off" | "recurring");
        payment_method?: string;
        payment_method_data?: {
            alipay?: {};
            au_becs_debit?: {
                account_number: string;
                bsb_number: string;
            };
            bacs_debit?: {
                account_number?: string;
                sort_code?: string;
            };
            bancontact?: {};
            billing_details?: {
                address?: {
                    city?: string;
                    country?: string;
                    line1?: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                } | "";
                email?: string;
                name?: string;
                phone?: string;
            };
            eps?: {
                bank?: "arzte_und_apotheker_bank" | "austrian_anadi_bank_ag" | "bank_austria" | "bankhaus_carl_spangler" | "bankhaus_schelhammer_und_schattera_ag" | "bawag_psk_ag" | "bks_bank_ag" | "brull_kallmus_bank_ag" | "btv_vier_lander_bank" | "capital_bank_grawe_gruppe_ag" | "dolomitenbank" | "easybank_ag" | "erste_bank_und_sparkassen" | "hypo_alpeadriabank_international_ag" | "hypo_bank_burgenland_aktiengesellschaft" | "hypo_noe_lb_fur_niederosterreich_u_wien" | "hypo_oberosterreich_salzburg_steiermark" | "hypo_tirol_bank_ag" | "hypo_vorarlberg_bank_ag" | "marchfelder_bank" | "oberbank_ag" | "raiffeisen_bankengruppe_osterreich" | "schoellerbank_ag" | "sparda_bank_wien" | "volksbank_gruppe" | "volkskreditbank_ag" | "vr_bank_braunau";
            };
            fpx?: {
                bank: "affin_bank" | "alliance_bank" | "ambank" | "bank_islam" | "bank_muamalat" | "bank_rakyat" | "bsn" | "cimb" | "deutsche_bank" | "hong_leong_bank" | "hsbc" | "kfh" | "maybank2e" | "maybank2u" | "ocbc" | "pb_enterprise" | "public_bank" | "rhb" | "standard_chartered" | "uob";
            };
            giropay?: {};
            grabpay?: {};
            ideal?: {
                bank?: "abn_amro" | "asn_bank" | "bunq" | "handelsbanken" | "ing" | "knab" | "moneyou" | "rabobank" | "regiobank" | "sns_bank" | "triodos_bank" | "van_lanschot";
            };
            interac_present?: {};
            metadata?: {
                [key: string]: string;
            };
            oxxo?: {};
            p24?: {
                bank?: "alior_bank" | "bank_millennium" | "bank_nowy_bfg_sa" | "bank_pekao_sa" | "banki_spbdzielcze" | "blik" | "bnp_paribas" | "boz" | "citi_handlowy" | "credit_agricole" | "envelobank" | "etransfer_pocztowy24" | "getin_bank" | "ideabank" | "ing" | "inteligo" | "mbank_mtransfer" | "nest_przelew" | "noble_pay" | "pbac_z_ipko" | "plus_bank" | "santander_przelew24" | "tmobile_usbugi_bankowe" | "toyota_bank" | "volkswagen_bank";
            };
            sepa_debit?: {
                iban: string;
            };
            sofort?: {
                country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
            };
            "type": "alipay" | "au_becs_debit" | "bacs_debit" | "bancontact" | "eps" | "fpx" | "giropay" | "grabpay" | "ideal" | "oxxo" | "p24" | "sepa_debit" | "sofort";
        };
        payment_method_options?: {
            alipay?: {} | "";
            bancontact?: {
                preferred_language?: "de" | "en" | "fr" | "nl";
            } | "";
            card?: {
                cvc_token?: string;
                installments?: {
                    enabled?: boolean;
                    plan?: {
                        count: number;
                        interval: "month";
                        "type": "fixed_count";
                    } | "";
                };
                network?: "amex" | "cartes_bancaires" | "diners" | "discover" | "interac" | "jcb" | "mastercard" | "unionpay" | "unknown" | "visa";
                request_three_d_secure?: "any" | "automatic";
            } | "";
            oxxo?: {
                expires_after_days?: number;
            } | "";
            p24?: {
                tos_shown_and_accepted?: boolean;
            } | "";
            sepa_debit?: {
                mandate_options?: {};
            } | "";
            sofort?: {
                preferred_language?: "de" | "en" | "es" | "fr" | "it" | "nl" | "pl";
            } | "";
        };
        payment_method_types?: string[];
        receipt_email?: string | "";
        return_url?: string;
        setup_future_usage?: "" | "off_session" | "on_session";
        shipping?: {
            address: {
                city?: string;
                country?: string;
                line1: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            carrier?: string;
            name: string;
            phone?: string;
            tracking_number?: string;
        } | "";
        use_stripe_sdk?: boolean;
    };
};
export type GetPaymentMethodsApiResponse = /** status 200 Successful response. */ {
    data: PaymentMethod[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetPaymentMethodsApiArg = {
    /** The ID of the customer whose PaymentMethods will be retrieved. */
    customer: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** A required filter on the list, based on the object `type` field. */
    type: "alipay" | "au_becs_debit" | "bacs_debit" | "bancontact" | "card" | "eps" | "fpx" | "giropay" | "grabpay" | "ideal" | "oxxo" | "p24" | "sepa_debit" | "sofort";
    body: {};
};
export type PostPaymentMethodsApiResponse = /** status 200 Successful response. */ PaymentMethod;
export type PostPaymentMethodsApiArg = {
    body: {
        alipay?: {};
        au_becs_debit?: {
            account_number: string;
            bsb_number: string;
        };
        bacs_debit?: {
            account_number?: string;
            sort_code?: string;
        };
        bancontact?: {};
        billing_details?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            } | "";
            email?: string;
            name?: string;
            phone?: string;
        };
        card?: {
            cvc?: string;
            exp_month: number;
            exp_year: number;
            "number": string;
        } | {
            token: string;
        };
        customer?: string;
        eps?: {
            bank?: "arzte_und_apotheker_bank" | "austrian_anadi_bank_ag" | "bank_austria" | "bankhaus_carl_spangler" | "bankhaus_schelhammer_und_schattera_ag" | "bawag_psk_ag" | "bks_bank_ag" | "brull_kallmus_bank_ag" | "btv_vier_lander_bank" | "capital_bank_grawe_gruppe_ag" | "dolomitenbank" | "easybank_ag" | "erste_bank_und_sparkassen" | "hypo_alpeadriabank_international_ag" | "hypo_bank_burgenland_aktiengesellschaft" | "hypo_noe_lb_fur_niederosterreich_u_wien" | "hypo_oberosterreich_salzburg_steiermark" | "hypo_tirol_bank_ag" | "hypo_vorarlberg_bank_ag" | "marchfelder_bank" | "oberbank_ag" | "raiffeisen_bankengruppe_osterreich" | "schoellerbank_ag" | "sparda_bank_wien" | "volksbank_gruppe" | "volkskreditbank_ag" | "vr_bank_braunau";
        };
        expand?: string[];
        fpx?: {
            bank: "affin_bank" | "alliance_bank" | "ambank" | "bank_islam" | "bank_muamalat" | "bank_rakyat" | "bsn" | "cimb" | "deutsche_bank" | "hong_leong_bank" | "hsbc" | "kfh" | "maybank2e" | "maybank2u" | "ocbc" | "pb_enterprise" | "public_bank" | "rhb" | "standard_chartered" | "uob";
        };
        giropay?: {};
        grabpay?: {};
        ideal?: {
            bank?: "abn_amro" | "asn_bank" | "bunq" | "handelsbanken" | "ing" | "knab" | "moneyou" | "rabobank" | "regiobank" | "sns_bank" | "triodos_bank" | "van_lanschot";
        };
        interac_present?: {};
        metadata?: {
            [key: string]: string;
        };
        oxxo?: {};
        p24?: {
            bank?: "alior_bank" | "bank_millennium" | "bank_nowy_bfg_sa" | "bank_pekao_sa" | "banki_spbdzielcze" | "blik" | "bnp_paribas" | "boz" | "citi_handlowy" | "credit_agricole" | "envelobank" | "etransfer_pocztowy24" | "getin_bank" | "ideabank" | "ing" | "inteligo" | "mbank_mtransfer" | "nest_przelew" | "noble_pay" | "pbac_z_ipko" | "plus_bank" | "santander_przelew24" | "tmobile_usbugi_bankowe" | "toyota_bank" | "volkswagen_bank";
        };
        payment_method?: string;
        sepa_debit?: {
            iban: string;
        };
        sofort?: {
            country: "AT" | "BE" | "DE" | "ES" | "IT" | "NL";
        };
        "type"?: "alipay" | "au_becs_debit" | "bacs_debit" | "bancontact" | "card" | "eps" | "fpx" | "giropay" | "grabpay" | "ideal" | "oxxo" | "p24" | "sepa_debit" | "sofort";
    };
};
export type GetPaymentMethodsPaymentMethodApiResponse = /** status 200 Successful response. */ PaymentMethod;
export type GetPaymentMethodsPaymentMethodApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    paymentMethod: string;
    body: {};
};
export type PostPaymentMethodsPaymentMethodApiResponse = /** status 200 Successful response. */ PaymentMethod;
export type PostPaymentMethodsPaymentMethodApiArg = {
    paymentMethod: string;
    body: {
        billing_details?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            } | "";
            email?: string;
            name?: string;
            phone?: string;
        };
        card?: {
            exp_month?: number;
            exp_year?: number;
        };
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type PostPaymentMethodsPaymentMethodAttachApiResponse = /** status 200 Successful response. */ PaymentMethod;
export type PostPaymentMethodsPaymentMethodAttachApiArg = {
    paymentMethod: string;
    body: {
        customer: string;
        expand?: string[];
    };
};
export type PostPaymentMethodsPaymentMethodDetachApiResponse = /** status 200 Successful response. */ PaymentMethod;
export type PostPaymentMethodsPaymentMethodDetachApiArg = {
    paymentMethod: string;
    body: {
        expand?: string[];
    };
};
export type GetPayoutsApiResponse = /** status 200 Successful response. */ {
    data: Payout[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetPayoutsApiArg = {
    arrivalDate?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** The ID of an external account - only return payouts sent to this external account. */
    destination?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`. */
    status?: string;
    body: {};
};
export type PostPayoutsApiResponse = /** status 200 Successful response. */ Payout;
export type PostPayoutsApiArg = {
    body: {
        amount: number;
        currency: string;
        description?: string;
        destination?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
        method?: "instant" | "standard";
        source_type?: "bank_account" | "card" | "fpx";
        statement_descriptor?: string;
    };
};
export type GetPayoutsPayoutApiResponse = /** status 200 Successful response. */ Payout;
export type GetPayoutsPayoutApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    payout: string;
    body: {};
};
export type PostPayoutsPayoutApiResponse = /** status 200 Successful response. */ Payout;
export type PostPayoutsPayoutApiArg = {
    payout: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type PostPayoutsPayoutCancelApiResponse = /** status 200 Successful response. */ Payout;
export type PostPayoutsPayoutCancelApiArg = {
    payout: string;
    body: {
        expand?: string[];
    };
};
export type PostPayoutsPayoutReverseApiResponse = /** status 200 Successful response. */ Payout;
export type PostPayoutsPayoutReverseApiArg = {
    payout: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
    };
};
export type GetPlansApiResponse = /** status 200 Successful response. */ {
    data: Plan[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetPlansApiArg = {
    /** Only return plans that are active or inactive (e.g., pass `false` to list all inactive plans). */
    active?: boolean;
    /** A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Only return plans for the given product. */
    product?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostPlansApiResponse = /** status 200 Successful response. */ Plan;
export type PostPlansApiArg = {
    body: {
        active?: boolean;
        aggregate_usage?: "last_during_period" | "last_ever" | "max" | "sum";
        amount?: number;
        amount_decimal?: string;
        billing_scheme?: "per_unit" | "tiered";
        currency: string;
        expand?: string[];
        id?: string;
        interval: "day" | "month" | "week" | "year";
        interval_count?: number;
        metadata?: {
            [key: string]: string;
        } | "";
        nickname?: string;
        product?: {
            active?: boolean;
            id?: string;
            metadata?: {
                [key: string]: string;
            };
            name: string;
            statement_descriptor?: string;
            unit_label?: string;
        } | string;
        tiers?: {
            flat_amount?: number;
            flat_amount_decimal?: string;
            unit_amount?: number;
            unit_amount_decimal?: string;
            up_to: "inf" | number;
        }[];
        tiers_mode?: "graduated" | "volume";
        transform_usage?: {
            divide_by: number;
            round: "down" | "up";
        };
        trial_period_days?: number;
        usage_type?: "licensed" | "metered";
    };
};
export type DeletePlansPlanApiResponse = /** status 200 Successful response. */ DeletedPlan;
export type DeletePlansPlanApiArg = {
    plan: string;
    body: {};
};
export type GetPlansPlanApiResponse = /** status 200 Successful response. */ Plan;
export type GetPlansPlanApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    plan: string;
    body: {};
};
export type PostPlansPlanApiResponse = /** status 200 Successful response. */ Plan;
export type PostPlansPlanApiArg = {
    plan: string;
    body: {
        active?: boolean;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        nickname?: string;
        product?: string;
        trial_period_days?: number;
    };
};
export type GetPricesApiResponse = /** status 200 Successful response. */ {
    data: Price[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetPricesApiArg = {
    /** Only return prices that are active or inactive (e.g., pass `false` to list all inactive prices). */
    active?: boolean;
    /** A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return prices for the given currency. */
    currency?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Only return the price with these lookup_keys, if any exist. */
    lookupKeys?: string[];
    /** Only return prices for the given product. */
    product?: string;
    /** Only return prices with these recurring fields. */
    recurring?: {
        interval?: "day" | "month" | "week" | "year";
        usage_type?: "licensed" | "metered";
    };
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only return prices of type `recurring` or `one_time`. */
    type?: "one_time" | "recurring";
    body: {};
};
export type PostPricesApiResponse = /** status 200 Successful response. */ Price;
export type PostPricesApiArg = {
    body: {
        active?: boolean;
        billing_scheme?: "per_unit" | "tiered";
        currency: string;
        expand?: string[];
        lookup_key?: string;
        metadata?: {
            [key: string]: string;
        };
        nickname?: string;
        product?: string;
        product_data?: {
            active?: boolean;
            id?: string;
            metadata?: {
                [key: string]: string;
            };
            name: string;
            statement_descriptor?: string;
            unit_label?: string;
        };
        recurring?: {
            aggregate_usage?: "last_during_period" | "last_ever" | "max" | "sum";
            interval: "day" | "month" | "week" | "year";
            interval_count?: number;
            usage_type?: "licensed" | "metered";
        };
        tiers?: {
            flat_amount?: number;
            flat_amount_decimal?: string;
            unit_amount?: number;
            unit_amount_decimal?: string;
            up_to: "inf" | number;
        }[];
        tiers_mode?: "graduated" | "volume";
        transfer_lookup_key?: boolean;
        transform_quantity?: {
            divide_by: number;
            round: "down" | "up";
        };
        unit_amount?: number;
        unit_amount_decimal?: string;
    };
};
export type GetPricesPriceApiResponse = /** status 200 Successful response. */ Price;
export type GetPricesPriceApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    price: string;
    body: {};
};
export type PostPricesPriceApiResponse = /** status 200 Successful response. */ Price;
export type PostPricesPriceApiArg = {
    price: string;
    body: {
        active?: boolean;
        expand?: string[];
        lookup_key?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        nickname?: string;
        transfer_lookup_key?: boolean;
    };
};
export type GetProductsApiResponse = /** status 200 Successful response. */ {
    data: Product[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetProductsApiArg = {
    /** Only return products that are active or inactive (e.g., pass `false` to list all inactive products). */
    active?: boolean;
    /** Only return products that were created during the given date interval. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Only return products with the given IDs. */
    ids?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Only return products that can be shipped (i.e., physical, not digital products). */
    shippable?: boolean;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only return products with the given url. */
    url?: string;
    body: {};
};
export type PostProductsApiResponse = /** status 200 Successful response. */ Product;
export type PostProductsApiArg = {
    body: {
        active?: boolean;
        attributes?: string[];
        caption?: string;
        deactivate_on?: string[];
        description?: string;
        expand?: string[];
        id?: string;
        images?: string[];
        metadata?: {
            [key: string]: string;
        };
        name: string;
        package_dimensions?: {
            height: number;
            length: number;
            weight: number;
            width: number;
        };
        shippable?: boolean;
        statement_descriptor?: string;
        unit_label?: string;
        url?: string;
    };
};
export type DeleteProductsIdApiResponse = /** status 200 Successful response. */ DeletedProduct;
export type DeleteProductsIdApiArg = {
    id: string;
    body: {};
};
export type GetProductsIdApiResponse = /** status 200 Successful response. */ Product;
export type GetProductsIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostProductsIdApiResponse = /** status 200 Successful response. */ Product;
export type PostProductsIdApiArg = {
    id: string;
    body: {
        active?: boolean;
        attributes?: string[] | "";
        caption?: string;
        deactivate_on?: string[];
        description?: string;
        expand?: string[];
        images?: string[] | "";
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
        package_dimensions?: {
            height: number;
            length: number;
            weight: number;
            width: number;
        } | "";
        shippable?: boolean;
        statement_descriptor?: string;
        unit_label?: string;
        url?: string;
    };
};
export type GetPromotionCodesApiResponse = /** status 200 Successful response. */ {
    data: PromotionCode[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetPromotionCodesApiArg = {
    /** Filter promotion codes by whether they are active. */
    active?: boolean;
    /** Only return promotion codes that have this case-insensitive code. */
    code?: string;
    /** Only return promotion codes for this coupon. */
    coupon?: string;
    /** A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return promotion codes that are restricted to this customer. */
    customer?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostPromotionCodesApiResponse = /** status 200 Successful response. */ PromotionCode;
export type PostPromotionCodesApiArg = {
    body: {
        active?: boolean;
        code?: string;
        coupon: string;
        customer?: string;
        expand?: string[];
        expires_at?: number;
        max_redemptions?: number;
        metadata?: {
            [key: string]: string;
        };
        restrictions?: {
            first_time_transaction?: boolean;
            minimum_amount?: number;
            minimum_amount_currency?: string;
        };
    };
};
export type GetPromotionCodesPromotionCodeApiResponse = /** status 200 Successful response. */ PromotionCode;
export type GetPromotionCodesPromotionCodeApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    promotionCode: string;
    body: {};
};
export type PostPromotionCodesPromotionCodeApiResponse = /** status 200 Successful response. */ PromotionCode;
export type PostPromotionCodesPromotionCodeApiArg = {
    promotionCode: string;
    body: {
        active?: boolean;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetRadarEarlyFraudWarningsApiResponse = /** status 200 Successful response. */ {
    data: RadarEarlyFraudWarning[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetRadarEarlyFraudWarningsApiArg = {
    /** Only return early fraud warnings for the charge specified by this charge ID. */
    charge?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetRadarEarlyFraudWarningsEarlyFraudWarningApiResponse = /** status 200 Successful response. */ RadarEarlyFraudWarning;
export type GetRadarEarlyFraudWarningsEarlyFraudWarningApiArg = {
    earlyFraudWarning: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type GetRadarValueListItemsApiResponse = /** status 200 Successful response. */ {
    data: RadarListListItem[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetRadarValueListItemsApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Return items belonging to the parent list whose value matches the specified value (using an "is like" match). */
    value?: string;
    /** Identifier for the parent value list this item belongs to. */
    valueList: string;
    body: {};
};
export type PostRadarValueListItemsApiResponse = /** status 200 Successful response. */ RadarListListItem;
export type PostRadarValueListItemsApiArg = {
    body: {
        expand?: string[];
        value: string;
        value_list: string;
    };
};
export type DeleteRadarValueListItemsItemApiResponse = /** status 200 Successful response. */ RadarListDeletedListItem;
export type DeleteRadarValueListItemsItemApiArg = {
    item: string;
    body: {};
};
export type GetRadarValueListItemsItemApiResponse = /** status 200 Successful response. */ RadarListListItem;
export type GetRadarValueListItemsItemApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    item: string;
    body: {};
};
export type GetRadarValueListsApiResponse = /** status 200 Successful response. */ {
    data: RadarListList[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetRadarValueListsApiArg = {
    /** The alias used to reference the value list when writing rules. */
    alias?: string;
    /** A value contained within a value list - returns all value lists containing this value. */
    contains?: string;
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostRadarValueListsApiResponse = /** status 200 Successful response. */ RadarListList;
export type PostRadarValueListsApiArg = {
    body: {
        alias: string;
        expand?: string[];
        item_type?: "card_bin" | "card_fingerprint" | "case_sensitive_string" | "country" | "email" | "ip_address" | "string";
        metadata?: {
            [key: string]: string;
        };
        name: string;
    };
};
export type DeleteRadarValueListsValueListApiResponse = /** status 200 Successful response. */ RadarListDeletedList;
export type DeleteRadarValueListsValueListApiArg = {
    valueList: string;
    body: {};
};
export type GetRadarValueListsValueListApiResponse = /** status 200 Successful response. */ RadarListList;
export type GetRadarValueListsValueListApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    valueList: string;
    body: {};
};
export type PostRadarValueListsValueListApiResponse = /** status 200 Successful response. */ RadarListList;
export type PostRadarValueListsValueListApiArg = {
    valueList: string;
    body: {
        alias?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
        name?: string;
    };
};
export type GetRecipientsApiResponse = /** status 200 Successful response. */ {
    data: TransferRecipient[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetRecipientsApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    type?: "corporation" | "individual";
    /** Only return recipients that are verified or unverified. */
    verified?: boolean;
    body: {};
};
export type PostRecipientsApiResponse = /** status 200 Successful response. */ TransferRecipient;
export type PostRecipientsApiArg = {
    body: {
        bank_account?: string;
        card?: string;
        description?: string;
        email?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        name: string;
        tax_id?: string;
        "type": string;
    };
};
export type DeleteRecipientsIdApiResponse = /** status 200 Successful response. */ DeletedTransferRecipient;
export type DeleteRecipientsIdApiArg = {
    id: string;
    body: {};
};
export type GetRecipientsIdApiResponse = (/** status 200 Successful response. */ TransferRecipient | DeletedTransferRecipient);
export type GetRecipientsIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostRecipientsIdApiResponse = /** status 200 Successful response. */ TransferRecipient;
export type PostRecipientsIdApiArg = {
    id: string;
    body: {
        bank_account?: string;
        card?: string;
        default_card?: string;
        description?: string;
        email?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        name?: string;
        tax_id?: string;
    };
};
export type GetRefundsApiResponse = /** status 200 Successful response. */ {
    data: Refund[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetRefundsApiArg = {
    /** Only return refunds for the charge specified by this charge ID. */
    charge?: string;
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Only return refunds for the PaymentIntent specified by this ID. */
    paymentIntent?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostRefundsApiResponse = /** status 200 Successful response. */ Refund;
export type PostRefundsApiArg = {
    body: {
        amount?: number;
        charge?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        payment_intent?: string;
        reason?: "duplicate" | "fraudulent" | "requested_by_customer";
        refund_application_fee?: boolean;
        reverse_transfer?: boolean;
    };
};
export type GetRefundsRefundApiResponse = /** status 200 Successful response. */ Refund;
export type GetRefundsRefundApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    refund: string;
    body: {};
};
export type PostRefundsRefundApiResponse = /** status 200 Successful response. */ Refund;
export type PostRefundsRefundApiArg = {
    refund: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetReportingReportRunsApiResponse = /** status 200 Successful response. */ {
    data: Reporting_report_run[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetReportingReportRunsApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostReportingReportRunsApiResponse = /** status 200 Successful response. */ Reporting_report_run;
export type PostReportingReportRunsApiArg = {
    body: {
        expand?: string[];
        parameters?: {
            columns?: string[];
            connected_account?: string;
            currency?: string;
            interval_end?: number;
            interval_start?: number;
            payout?: string;
            reporting_category?: "advance" | "advance_funding" | "anticipation_repayment" | "charge" | "charge_failure" | "connect_collection_transfer" | "connect_reserved_funds" | "contribution" | "dispute" | "dispute_reversal" | "fee" | "financing_paydown" | "financing_paydown_reversal" | "financing_payout" | "financing_payout_reversal" | "issuing_authorization_hold" | "issuing_authorization_release" | "issuing_dispute" | "issuing_transaction" | "network_cost" | "other_adjustment" | "partial_capture_reversal" | "payout" | "payout_reversal" | "platform_earning" | "platform_earning_refund" | "refund" | "refund_failure" | "risk_reserved_funds" | "tax" | "topup" | "topup_reversal" | "transfer" | "transfer_reversal";
            timezone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "Factory" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Pacific-New" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu";
        };
        report_type: string;
    };
};
export type GetReportingReportRunsReportRunApiResponse = /** status 200 Successful response. */ Reporting_report_run;
export type GetReportingReportRunsReportRunApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    reportRun: string;
    body: {};
};
export type GetReportingReportTypesApiResponse = /** status 200 Successful response. */ {
    data: Reporting_report_type[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetReportingReportTypesApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    body: {};
};
export type GetReportingReportTypesReportTypeApiResponse = /** status 200 Successful response. */ Reporting_report_type;
export type GetReportingReportTypesReportTypeApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    reportType: string;
    body: {};
};
export type GetReviewsApiResponse = /** status 200 Successful response. */ {
    data: RadarReview[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetReviewsApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetReviewsReviewApiResponse = /** status 200 Successful response. */ RadarReview;
export type GetReviewsReviewApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    review: string;
    body: {};
};
export type PostReviewsReviewApproveApiResponse = /** status 200 Successful response. */ RadarReview;
export type PostReviewsReviewApproveApiArg = {
    review: string;
    body: {
        expand?: string[];
    };
};
export type GetSetupAttemptsApiResponse = /** status 200 Successful response. */ {
    data: PaymentFlowsSetupIntentSetupAttempt[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetSetupAttemptsApiArg = {
    /** A filter on the list, based on the object `created` field. The value
    can be a string with an integer Unix timestamp, or it can be a
    dictionary with a number of different query options. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Only return SetupAttempts created by the SetupIntent specified by
    this ID. */
    setupIntent: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetSetupIntentsApiResponse = /** status 200 Successful response. */ {
    data: SetupIntent[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetSetupIntentsApiArg = {
    /** A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return SetupIntents for the customer specified by this customer ID. */
    customer?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Only return SetupIntents associated with the specified payment method. */
    paymentMethod?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostSetupIntentsApiResponse = /** status 200 Successful response. */ SetupIntent;
export type PostSetupIntentsApiArg = {
    body: {
        confirm?: boolean;
        customer?: string;
        description?: string;
        expand?: string[];
        mandate_data?: {
            customer_acceptance: {
                accepted_at?: number;
                offline?: {};
                online?: {
                    ip_address: string;
                    user_agent: string;
                };
                "type": "offline" | "online";
            };
        };
        metadata?: {
            [key: string]: string;
        };
        on_behalf_of?: string;
        payment_method?: string;
        payment_method_options?: {
            card?: {
                request_three_d_secure?: "any" | "automatic";
            };
            sepa_debit?: {
                mandate_options?: {};
            };
        };
        payment_method_types?: string[];
        return_url?: string;
        single_use?: {
            amount: number;
            currency: string;
        };
        usage?: "off_session" | "on_session";
    };
};
export type GetSetupIntentsIntentApiResponse = /** status 200 Successful response. */ SetupIntent;
export type GetSetupIntentsIntentApiArg = {
    /** The client secret of the SetupIntent. Required if a publishable key is used to retrieve the SetupIntent. */
    clientSecret?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    intent: string;
    body: {};
};
export type PostSetupIntentsIntentApiResponse = /** status 200 Successful response. */ SetupIntent;
export type PostSetupIntentsIntentApiArg = {
    intent: string;
    body: {
        customer?: string;
        description?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        payment_method?: string;
        payment_method_options?: {
            card?: {
                request_three_d_secure?: "any" | "automatic";
            };
            sepa_debit?: {
                mandate_options?: {};
            };
        };
        payment_method_types?: string[];
    };
};
export type PostSetupIntentsIntentCancelApiResponse = /** status 200 Successful response. */ SetupIntent;
export type PostSetupIntentsIntentCancelApiArg = {
    intent: string;
    body: {
        cancellation_reason?: "abandoned" | "duplicate" | "requested_by_customer";
        expand?: string[];
    };
};
export type PostSetupIntentsIntentConfirmApiResponse = /** status 200 Successful response. */ SetupIntent;
export type PostSetupIntentsIntentConfirmApiArg = {
    intent: string;
    body: {
        client_secret?: string;
        expand?: string[];
        mandate_data?: {
            customer_acceptance: {
                accepted_at?: number;
                offline?: {};
                online?: {
                    ip_address: string;
                    user_agent: string;
                };
                "type": "offline" | "online";
            };
        } | {
            customer_acceptance: {
                online: {
                    ip_address?: string;
                    user_agent?: string;
                };
                "type": "online";
            };
        };
        payment_method?: string;
        payment_method_options?: {
            card?: {
                request_three_d_secure?: "any" | "automatic";
            };
            sepa_debit?: {
                mandate_options?: {};
            };
        };
        return_url?: string;
    };
};
export type GetSigmaScheduledQueryRunsApiResponse = /** status 200 Successful response. */ {
    data: ScheduledQueryRun[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetSigmaScheduledQueryRunsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetSigmaScheduledQueryRunsScheduledQueryRunApiResponse = /** status 200 Successful response. */ ScheduledQueryRun;
export type GetSigmaScheduledQueryRunsScheduledQueryRunApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    scheduledQueryRun: string;
    body: {};
};
export type GetSkusApiResponse = /** status 200 Successful response. */ {
    data: Sku[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetSkusApiArg = {
    /** Only return SKUs that are active or inactive (e.g., pass `false` to list all inactive products). */
    active?: boolean;
    /** Only return SKUs that have the specified key-value pairs in this partially constructed dictionary. Can be specified only if `product` is also supplied. For instance, if the associated product has attributes `["color", "size"]`, passing in `attributes[color]=red` returns all the SKUs for this product that have `color` set to `red`. */
    attributes?: {
        [key: string]: string;
    };
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Only return SKUs with the given IDs. */
    ids?: string[];
    /** Only return SKUs that are either in stock or out of stock (e.g., pass `false` to list all SKUs that are out of stock). If no value is provided, all SKUs are returned. */
    inStock?: boolean;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** The ID of the product whose SKUs will be retrieved. Must be a product with type `good`. */
    product?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostSkusApiResponse = /** status 200 Successful response. */ Sku;
export type PostSkusApiArg = {
    body: {
        active?: boolean;
        attributes?: {
            [key: string]: string;
        };
        currency: string;
        expand?: string[];
        id?: string;
        image?: string;
        inventory: {
            quantity?: number;
            "type": "bucket" | "finite" | "infinite";
            value?: "" | "in_stock" | "limited" | "out_of_stock";
        };
        metadata?: {
            [key: string]: string;
        };
        package_dimensions?: {
            height: number;
            length: number;
            weight: number;
            width: number;
        };
        price: number;
        product: string;
    };
};
export type DeleteSkusIdApiResponse = /** status 200 Successful response. */ DeletedSku;
export type DeleteSkusIdApiArg = {
    id: string;
    body: {};
};
export type GetSkusIdApiResponse = (/** status 200 Successful response. */ Sku | DeletedSku);
export type GetSkusIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    body: {};
};
export type PostSkusIdApiResponse = /** status 200 Successful response. */ Sku;
export type PostSkusIdApiArg = {
    id: string;
    body: {
        active?: boolean;
        attributes?: {
            [key: string]: string;
        };
        currency?: string;
        expand?: string[];
        image?: string;
        inventory?: {
            quantity?: number;
            "type"?: "bucket" | "finite" | "infinite";
            value?: "" | "in_stock" | "limited" | "out_of_stock";
        };
        metadata?: {
            [key: string]: string;
        } | "";
        package_dimensions?: {
            height: number;
            length: number;
            weight: number;
            width: number;
        } | "";
        price?: number;
        product?: string;
    };
};
export type PostSourcesApiResponse = /** status 200 Successful response. */ Source;
export type PostSourcesApiArg = {
    body: {
        amount?: number;
        currency?: string;
        customer?: string;
        expand?: string[];
        flow?: "code_verification" | "none" | "receiver" | "redirect";
        mandate?: {
            acceptance?: {
                date?: number;
                ip?: string;
                offline?: {
                    contact_email: string;
                };
                online?: {
                    date?: number;
                    ip?: string;
                    user_agent?: string;
                };
                status: "accepted" | "pending" | "refused" | "revoked";
                "type"?: "offline" | "online";
                user_agent?: string;
            };
            amount?: number | "";
            currency?: string;
            interval?: "one_time" | "scheduled" | "variable";
            notification_method?: "deprecated_none" | "email" | "manual" | "none" | "stripe_email";
        };
        metadata?: {
            [key: string]: string;
        };
        original_source?: string;
        owner?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            email?: string;
            name?: string;
            phone?: string;
        };
        receiver?: {
            refund_attributes_method?: "email" | "manual" | "none";
        };
        redirect?: {
            return_url: string;
        };
        source_order?: {
            items?: {
                amount?: number;
                currency?: string;
                description?: string;
                parent?: string;
                quantity?: number;
                "type"?: "discount" | "shipping" | "sku" | "tax";
            }[];
            shipping?: {
                address: {
                    city?: string;
                    country?: string;
                    line1: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                };
                carrier?: string;
                name?: string;
                phone?: string;
                tracking_number?: string;
            };
        };
        statement_descriptor?: string;
        token?: string;
        "type"?: string;
        usage?: "reusable" | "single_use";
    };
};
export type GetSourcesSourceApiResponse = /** status 200 Successful response. */ Source;
export type GetSourcesSourceApiArg = {
    /** The client secret of the source. Required if a publishable key is used to retrieve the source. */
    clientSecret?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    source: string;
    body: {};
};
export type PostSourcesSourceApiResponse = /** status 200 Successful response. */ Source;
export type PostSourcesSourceApiArg = {
    source: string;
    body: {
        amount?: number;
        expand?: string[];
        mandate?: {
            acceptance?: {
                date?: number;
                ip?: string;
                offline?: {
                    contact_email: string;
                };
                online?: {
                    date?: number;
                    ip?: string;
                    user_agent?: string;
                };
                status: "accepted" | "pending" | "refused" | "revoked";
                "type"?: "offline" | "online";
                user_agent?: string;
            };
            amount?: number | "";
            currency?: string;
            interval?: "one_time" | "scheduled" | "variable";
            notification_method?: "deprecated_none" | "email" | "manual" | "none" | "stripe_email";
        };
        metadata?: {
            [key: string]: string;
        } | "";
        owner?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            email?: string;
            name?: string;
            phone?: string;
        };
        source_order?: {
            items?: {
                amount?: number;
                currency?: string;
                description?: string;
                parent?: string;
                quantity?: number;
                "type"?: "discount" | "shipping" | "sku" | "tax";
            }[];
            shipping?: {
                address: {
                    city?: string;
                    country?: string;
                    line1: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                };
                carrier?: string;
                name?: string;
                phone?: string;
                tracking_number?: string;
            };
        };
    };
};
export type GetSourcesSourceMandateNotificationsMandateNotificationApiResponse = /** status 200 Successful response. */ SourceMandateNotification;
export type GetSourcesSourceMandateNotificationsMandateNotificationApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    mandateNotification: string;
    source: string;
    body: {};
};
export type GetSourcesSourceSourceTransactionsApiResponse = /** status 200 Successful response. */ {
    data: SourceTransaction[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetSourcesSourceSourceTransactionsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    source: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type GetSourcesSourceSourceTransactionsSourceTransactionApiResponse = /** status 200 Successful response. */ SourceTransaction;
export type GetSourcesSourceSourceTransactionsSourceTransactionApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    source: string;
    sourceTransaction: string;
    body: {};
};
export type PostSourcesSourceVerifyApiResponse = /** status 200 Successful response. */ Source;
export type PostSourcesSourceVerifyApiArg = {
    source: string;
    body: {
        expand?: string[];
        values: string[];
    };
};
export type GetSubscriptionItemsApiResponse = /** status 200 Successful response. */ {
    data: SubscriptionItem[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetSubscriptionItemsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** The ID of the subscription whose items will be retrieved. */
    subscription: string;
    body: {};
};
export type PostSubscriptionItemsApiResponse = /** status 200 Successful response. */ SubscriptionItem;
export type PostSubscriptionItemsApiArg = {
    body: {
        billing_thresholds?: {
            usage_gte: number;
        } | "";
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
        payment_behavior?: "allow_incomplete" | "error_if_incomplete" | "pending_if_incomplete";
        price?: string;
        price_data?: {
            currency: string;
            product: string;
            recurring: {
                interval: "day" | "month" | "week" | "year";
                interval_count?: number;
            };
            unit_amount?: number;
            unit_amount_decimal?: string;
        };
        proration_behavior?: "always_invoice" | "create_prorations" | "none";
        proration_date?: number;
        quantity?: number;
        subscription: string;
        tax_rates?: string[] | "";
    };
};
export type DeleteSubscriptionItemsItemApiResponse = /** status 200 Successful response. */ DeletedSubscriptionItem;
export type DeleteSubscriptionItemsItemApiArg = {
    item: string;
    body: {
        clear_usage?: boolean;
        proration_behavior?: "always_invoice" | "create_prorations" | "none";
        proration_date?: number;
    };
};
export type GetSubscriptionItemsItemApiResponse = /** status 200 Successful response. */ SubscriptionItem;
export type GetSubscriptionItemsItemApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    item: string;
    body: {};
};
export type PostSubscriptionItemsItemApiResponse = /** status 200 Successful response. */ SubscriptionItem;
export type PostSubscriptionItemsItemApiArg = {
    item: string;
    body: {
        billing_thresholds?: {
            usage_gte: number;
        } | "";
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        off_session?: boolean;
        payment_behavior?: "allow_incomplete" | "error_if_incomplete" | "pending_if_incomplete";
        price?: string;
        price_data?: {
            currency: string;
            product: string;
            recurring: {
                interval: "day" | "month" | "week" | "year";
                interval_count?: number;
            };
            unit_amount?: number;
            unit_amount_decimal?: string;
        };
        proration_behavior?: "always_invoice" | "create_prorations" | "none";
        proration_date?: number;
        quantity?: number;
        tax_rates?: string[] | "";
    };
};
export type GetSubscriptionItemsSubscriptionItemUsageRecordSummariesApiResponse = /** status 200 Successful response. */ {
    data: UsageRecordSummary[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetSubscriptionItemsSubscriptionItemUsageRecordSummariesApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    subscriptionItem: string;
    body: {};
};
export type PostSubscriptionItemsSubscriptionItemUsageRecordsApiResponse = /** status 200 Successful response. */ UsageRecord;
export type PostSubscriptionItemsSubscriptionItemUsageRecordsApiArg = {
    subscriptionItem: string;
    body: {
        action?: "increment" | "set";
        expand?: string[];
        quantity: number;
        timestamp: number;
    };
};
export type GetSubscriptionSchedulesApiResponse = /** status 200 Successful response. */ {
    data: SubscriptionSchedule[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetSubscriptionSchedulesApiArg = {
    /** Only return subscription schedules that were created canceled the given date interval. */
    canceledAt?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return subscription schedules that completed during the given date interval. */
    completedAt?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return subscription schedules that were created during the given date interval. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return subscription schedules for the given customer. */
    customer?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Only return subscription schedules that were released during the given date interval. */
    releasedAt?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return subscription schedules that have not started yet. */
    scheduled?: boolean;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostSubscriptionSchedulesApiResponse = /** status 200 Successful response. */ SubscriptionSchedule;
export type PostSubscriptionSchedulesApiArg = {
    body: {
        customer?: string;
        default_settings?: {
            application_fee_percent?: number;
            billing_cycle_anchor?: "automatic" | "phase_start";
            billing_thresholds?: {
                amount_gte?: number;
                reset_billing_cycle_anchor?: boolean;
            } | "";
            collection_method?: "charge_automatically" | "send_invoice";
            default_payment_method?: string;
            invoice_settings?: {
                days_until_due?: number;
            };
            transfer_data?: {
                amount_percent?: number;
                destination: string;
            } | "";
        };
        end_behavior?: "cancel" | "none" | "release" | "renew";
        expand?: string[];
        from_subscription?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        phases?: {
            add_invoice_items?: {
                price?: string;
                price_data?: {
                    currency: string;
                    product: string;
                    unit_amount?: number;
                    unit_amount_decimal?: string;
                };
                quantity?: number;
                tax_rates?: string[] | "";
            }[];
            application_fee_percent?: number;
            billing_cycle_anchor?: "automatic" | "phase_start";
            billing_thresholds?: {
                amount_gte?: number;
                reset_billing_cycle_anchor?: boolean;
            } | "";
            collection_method?: "charge_automatically" | "send_invoice";
            coupon?: string;
            default_payment_method?: string;
            default_tax_rates?: string[] | "";
            end_date?: number;
            invoice_settings?: {
                days_until_due?: number;
            };
            items: {
                billing_thresholds?: {
                    usage_gte: number;
                } | "";
                price?: string;
                price_data?: {
                    currency: string;
                    product: string;
                    recurring: {
                        interval: "day" | "month" | "week" | "year";
                        interval_count?: number;
                    };
                    unit_amount?: number;
                    unit_amount_decimal?: string;
                };
                quantity?: number;
                tax_rates?: string[] | "";
            }[];
            iterations?: number;
            proration_behavior?: "always_invoice" | "create_prorations" | "none";
            transfer_data?: {
                amount_percent?: number;
                destination: string;
            };
            trial?: boolean;
            trial_end?: number;
        }[];
        start_date?: number | "now";
    };
};
export type GetSubscriptionSchedulesScheduleApiResponse = /** status 200 Successful response. */ SubscriptionSchedule;
export type GetSubscriptionSchedulesScheduleApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    schedule: string;
    body: {};
};
export type PostSubscriptionSchedulesScheduleApiResponse = /** status 200 Successful response. */ SubscriptionSchedule;
export type PostSubscriptionSchedulesScheduleApiArg = {
    schedule: string;
    body: {
        default_settings?: {
            application_fee_percent?: number;
            billing_cycle_anchor?: "automatic" | "phase_start";
            billing_thresholds?: {
                amount_gte?: number;
                reset_billing_cycle_anchor?: boolean;
            } | "";
            collection_method?: "charge_automatically" | "send_invoice";
            default_payment_method?: string;
            invoice_settings?: {
                days_until_due?: number;
            };
            transfer_data?: {
                amount_percent?: number;
                destination: string;
            } | "";
        };
        end_behavior?: "cancel" | "none" | "release" | "renew";
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        phases?: {
            add_invoice_items?: {
                price?: string;
                price_data?: {
                    currency: string;
                    product: string;
                    unit_amount?: number;
                    unit_amount_decimal?: string;
                };
                quantity?: number;
                tax_rates?: string[] | "";
            }[];
            application_fee_percent?: number;
            billing_cycle_anchor?: "automatic" | "phase_start";
            billing_thresholds?: {
                amount_gte?: number;
                reset_billing_cycle_anchor?: boolean;
            } | "";
            collection_method?: "charge_automatically" | "send_invoice";
            coupon?: string;
            default_payment_method?: string;
            default_tax_rates?: string[] | "";
            end_date?: number | "now";
            invoice_settings?: {
                days_until_due?: number;
            };
            items: {
                billing_thresholds?: {
                    usage_gte: number;
                } | "";
                price?: string;
                price_data?: {
                    currency: string;
                    product: string;
                    recurring: {
                        interval: "day" | "month" | "week" | "year";
                        interval_count?: number;
                    };
                    unit_amount?: number;
                    unit_amount_decimal?: string;
                };
                quantity?: number;
                tax_rates?: string[] | "";
            }[];
            iterations?: number;
            proration_behavior?: "always_invoice" | "create_prorations" | "none";
            start_date?: number | "now";
            transfer_data?: {
                amount_percent?: number;
                destination: string;
            };
            trial?: boolean;
            trial_end?: number | "now";
        }[];
        proration_behavior?: "always_invoice" | "create_prorations" | "none";
    };
};
export type PostSubscriptionSchedulesScheduleCancelApiResponse = /** status 200 Successful response. */ SubscriptionSchedule;
export type PostSubscriptionSchedulesScheduleCancelApiArg = {
    schedule: string;
    body: {
        expand?: string[];
        invoice_now?: boolean;
        prorate?: boolean;
    };
};
export type PostSubscriptionSchedulesScheduleReleaseApiResponse = /** status 200 Successful response. */ SubscriptionSchedule;
export type PostSubscriptionSchedulesScheduleReleaseApiArg = {
    schedule: string;
    body: {
        expand?: string[];
        preserve_cancel_date?: boolean;
    };
};
export type GetSubscriptionsApiResponse = /** status 200 Successful response. */ {
    data: Subscription[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetSubscriptionsApiArg = {
    /** The collection method of the subscriptions to retrieve. Either `charge_automatically` or `send_invoice`. */
    collectionMethod?: "charge_automatically" | "send_invoice";
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    currentPeriodEnd?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    currentPeriodStart?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** The ID of the customer whose subscriptions will be retrieved. */
    customer?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** Filter for subscriptions that contain this recurring price ID. */
    price?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** The status of the subscriptions to retrieve. Passing in a value of `canceled` will return all canceled subscriptions, including those belonging to deleted customers. Pass `ended` to find subscriptions that are canceled and subscriptions that are expired due to [incomplete payment](https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses). Passing in a value of `all` will return subscriptions of all statuses. */
    status?: "active" | "all" | "canceled" | "ended" | "incomplete" | "incomplete_expired" | "past_due" | "trialing" | "unpaid";
    body: {};
};
export type PostSubscriptionsApiResponse = /** status 200 Successful response. */ Subscription;
export type PostSubscriptionsApiArg = {
    body: {
        add_invoice_items?: {
            price?: string;
            price_data?: {
                currency: string;
                product: string;
                unit_amount?: number;
                unit_amount_decimal?: string;
            };
            quantity?: number;
            tax_rates?: string[] | "";
        }[];
        application_fee_percent?: number;
        backdate_start_date?: number;
        billing_cycle_anchor?: number;
        billing_thresholds?: {
            amount_gte?: number;
            reset_billing_cycle_anchor?: boolean;
        } | "";
        cancel_at?: number;
        cancel_at_period_end?: boolean;
        collection_method?: "charge_automatically" | "send_invoice";
        coupon?: string;
        customer: string;
        days_until_due?: number;
        default_payment_method?: string;
        default_source?: string;
        default_tax_rates?: string[] | "";
        expand?: string[];
        items?: {
            billing_thresholds?: {
                usage_gte: number;
            } | "";
            metadata?: {
                [key: string]: string;
            };
            price?: string;
            price_data?: {
                currency: string;
                product: string;
                recurring: {
                    interval: "day" | "month" | "week" | "year";
                    interval_count?: number;
                };
                unit_amount?: number;
                unit_amount_decimal?: string;
            };
            quantity?: number;
            tax_rates?: string[] | "";
        }[];
        metadata?: {
            [key: string]: string;
        } | "";
        off_session?: boolean;
        payment_behavior?: "allow_incomplete" | "error_if_incomplete" | "pending_if_incomplete";
        pending_invoice_item_interval?: {
            interval: "day" | "month" | "week" | "year";
            interval_count?: number;
        } | "";
        promotion_code?: string;
        proration_behavior?: "always_invoice" | "create_prorations" | "none";
        transfer_data?: {
            amount_percent?: number;
            destination: string;
        };
        trial_end?: "now" | number;
        trial_from_plan?: boolean;
        trial_period_days?: number;
    };
};
export type DeleteSubscriptionsSubscriptionExposedIdApiResponse = /** status 200 Successful response. */ Subscription;
export type DeleteSubscriptionsSubscriptionExposedIdApiArg = {
    subscriptionExposedId: string;
    body: {
        expand?: string[];
        invoice_now?: boolean;
        prorate?: boolean;
    };
};
export type GetSubscriptionsSubscriptionExposedIdApiResponse = /** status 200 Successful response. */ Subscription;
export type GetSubscriptionsSubscriptionExposedIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    subscriptionExposedId: string;
    body: {};
};
export type PostSubscriptionsSubscriptionExposedIdApiResponse = /** status 200 Successful response. */ Subscription;
export type PostSubscriptionsSubscriptionExposedIdApiArg = {
    subscriptionExposedId: string;
    body: {
        add_invoice_items?: {
            price?: string;
            price_data?: {
                currency: string;
                product: string;
                unit_amount?: number;
                unit_amount_decimal?: string;
            };
            quantity?: number;
            tax_rates?: string[] | "";
        }[];
        application_fee_percent?: number;
        billing_cycle_anchor?: "now" | "unchanged";
        billing_thresholds?: {
            amount_gte?: number;
            reset_billing_cycle_anchor?: boolean;
        } | "";
        cancel_at?: number | "";
        cancel_at_period_end?: boolean;
        collection_method?: "charge_automatically" | "send_invoice";
        coupon?: string;
        days_until_due?: number;
        default_payment_method?: string;
        default_source?: string;
        default_tax_rates?: string[] | "";
        expand?: string[];
        items?: {
            billing_thresholds?: {
                usage_gte: number;
            } | "";
            clear_usage?: boolean;
            deleted?: boolean;
            id?: string;
            metadata?: {
                [key: string]: string;
            } | "";
            price?: string;
            price_data?: {
                currency: string;
                product: string;
                recurring: {
                    interval: "day" | "month" | "week" | "year";
                    interval_count?: number;
                };
                unit_amount?: number;
                unit_amount_decimal?: string;
            };
            quantity?: number;
            tax_rates?: string[] | "";
        }[];
        metadata?: {
            [key: string]: string;
        } | "";
        off_session?: boolean;
        pause_collection?: {
            behavior: "keep_as_draft" | "mark_uncollectible" | "void";
            resumes_at?: number;
        } | "";
        payment_behavior?: "allow_incomplete" | "error_if_incomplete" | "pending_if_incomplete";
        pending_invoice_item_interval?: {
            interval: "day" | "month" | "week" | "year";
            interval_count?: number;
        } | "";
        promotion_code?: string;
        proration_behavior?: "always_invoice" | "create_prorations" | "none";
        proration_date?: number;
        transfer_data?: {
            amount_percent?: number;
            destination: string;
        } | "";
        trial_end?: "now" | number;
        trial_from_plan?: boolean;
    };
};
export type DeleteSubscriptionsSubscriptionExposedIdDiscountApiResponse = /** status 200 Successful response. */ DeletedDiscount;
export type DeleteSubscriptionsSubscriptionExposedIdDiscountApiArg = {
    subscriptionExposedId: string;
    body: {};
};
export type GetTaxRatesApiResponse = /** status 200 Successful response. */ {
    data: TaxRate[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetTaxRatesApiArg = {
    /** Optional flag to filter by tax rates that are either active or inactive (archived). */
    active?: boolean;
    /** Optional range for filtering created date. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** Optional flag to filter by tax rates that are inclusive (or those that are not inclusive). */
    inclusive?: boolean;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostTaxRatesApiResponse = /** status 200 Successful response. */ TaxRate;
export type PostTaxRatesApiArg = {
    body: {
        active?: boolean;
        description?: string;
        display_name: string;
        expand?: string[];
        inclusive: boolean;
        jurisdiction?: string;
        metadata?: {
            [key: string]: string;
        };
        percentage: number;
    };
};
export type GetTaxRatesTaxRateApiResponse = /** status 200 Successful response. */ TaxRate;
export type GetTaxRatesTaxRateApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    taxRate: string;
    body: {};
};
export type PostTaxRatesTaxRateApiResponse = /** status 200 Successful response. */ TaxRate;
export type PostTaxRatesTaxRateApiArg = {
    taxRate: string;
    body: {
        active?: boolean;
        description?: string;
        display_name?: string;
        expand?: string[];
        jurisdiction?: string;
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type PostTerminalConnectionTokensApiResponse = /** status 200 Successful response. */ TerminalConnectionToken;
export type PostTerminalConnectionTokensApiArg = {
    body: {
        expand?: string[];
        location?: string;
    };
};
export type GetTerminalLocationsApiResponse = /** status 200 Successful response. */ {
    data: TerminalLocationLocation[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetTerminalLocationsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostTerminalLocationsApiResponse = /** status 200 Successful response. */ TerminalLocationLocation;
export type PostTerminalLocationsApiArg = {
    body: {
        address: {
            city?: string;
            country: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        display_name: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type DeleteTerminalLocationsLocationApiResponse = /** status 200 Successful response. */ TerminalLocationDeletedLocation;
export type DeleteTerminalLocationsLocationApiArg = {
    location: string;
    body: {};
};
export type GetTerminalLocationsLocationApiResponse = /** status 200 Successful response. */ TerminalLocationLocation;
export type GetTerminalLocationsLocationApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    location: string;
    body: {};
};
export type PostTerminalLocationsLocationApiResponse = /** status 200 Successful response. */ TerminalLocationLocation;
export type PostTerminalLocationsLocationApiArg = {
    location: string;
    body: {
        address?: {
            city?: string;
            country: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        display_name?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetTerminalReadersApiResponse = /** status 200 Successful response. */ {
    data: TerminalReaderReader[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetTerminalReadersApiArg = {
    /** Filters readers by device type */
    deviceType?: "bbpos_chipper2x" | "verifone_P400";
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A location ID to filter the response list to only readers at the specific location */
    location?: string;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** A status filter to filter readers to only offline or online readers */
    status?: "offline" | "online";
    body: {};
};
export type PostTerminalReadersApiResponse = /** status 200 Successful response. */ TerminalReaderReader;
export type PostTerminalReadersApiArg = {
    body: {
        expand?: string[];
        label?: string;
        location?: string;
        metadata?: {
            [key: string]: string;
        } | "";
        registration_code: string;
    };
};
export type DeleteTerminalReadersReaderApiResponse = /** status 200 Successful response. */ TerminalReaderDeletedReader;
export type DeleteTerminalReadersReaderApiArg = {
    reader: string;
    body: {};
};
export type GetTerminalReadersReaderApiResponse = /** status 200 Successful response. */ TerminalReaderReader;
export type GetTerminalReadersReaderApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    reader: string;
    body: {};
};
export type PostTerminalReadersReaderApiResponse = /** status 200 Successful response. */ TerminalReaderReader;
export type PostTerminalReadersReaderApiArg = {
    reader: string;
    body: {
        expand?: string[];
        label?: string;
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type PostTokensApiResponse = /** status 200 Successful response. */ Token;
export type PostTokensApiArg = {
    body: {
        account?: {
            business_type?: "company" | "government_entity" | "individual" | "non_profit";
            company?: {
                address?: {
                    city?: string;
                    country?: string;
                    line1?: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                };
                address_kana?: {
                    city?: string;
                    country?: string;
                    line1?: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                    town?: string;
                };
                address_kanji?: {
                    city?: string;
                    country?: string;
                    line1?: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                    town?: string;
                };
                directors_provided?: boolean;
                executives_provided?: boolean;
                name?: string;
                name_kana?: string;
                name_kanji?: string;
                owners_provided?: boolean;
                phone?: string;
                registration_number?: string;
                structure?: "" | "government_instrumentality" | "governmental_unit" | "incorporated_non_profit" | "limited_liability_partnership" | "multi_member_llc" | "private_company" | "private_corporation" | "private_partnership" | "public_company" | "public_corporation" | "public_partnership" | "sole_proprietorship" | "tax_exempt_government_instrumentality" | "unincorporated_association" | "unincorporated_non_profit";
                tax_id?: string;
                tax_id_registrar?: string;
                vat_id?: string;
                verification?: {
                    document?: {
                        back?: string;
                        front?: string;
                    };
                };
            };
            individual?: {
                address?: {
                    city?: string;
                    country?: string;
                    line1?: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                };
                address_kana?: {
                    city?: string;
                    country?: string;
                    line1?: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                    town?: string;
                };
                address_kanji?: {
                    city?: string;
                    country?: string;
                    line1?: string;
                    line2?: string;
                    postal_code?: string;
                    state?: string;
                    town?: string;
                };
                dob?: {
                    day: number;
                    month: number;
                    year: number;
                } | "";
                email?: string;
                first_name?: string;
                first_name_kana?: string;
                first_name_kanji?: string;
                gender?: string;
                id_number?: string;
                last_name?: string;
                last_name_kana?: string;
                last_name_kanji?: string;
                maiden_name?: string;
                metadata?: {
                    [key: string]: string;
                } | "";
                phone?: string;
                political_exposure?: "existing" | "none";
                ssn_last_4?: string;
                verification?: {
                    additional_document?: {
                        back?: string;
                        front?: string;
                    };
                    document?: {
                        back?: string;
                        front?: string;
                    };
                };
            };
            tos_shown_and_accepted?: boolean;
        };
        bank_account?: {
            account_holder_name?: string;
            account_holder_type?: "company" | "individual";
            account_number: string;
            country: string;
            currency?: string;
            routing_number?: string;
        };
        card?: {
            address_city?: string;
            address_country?: string;
            address_line1?: string;
            address_line2?: string;
            address_state?: string;
            address_zip?: string;
            currency?: string;
            cvc?: string;
            exp_month: string;
            exp_year: string;
            name?: string;
            "number": string;
        } | string;
        customer?: string;
        cvc_update?: {
            cvc: string;
        };
        expand?: string[];
        person?: {
            address?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
            };
            address_kana?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            address_kanji?: {
                city?: string;
                country?: string;
                line1?: string;
                line2?: string;
                postal_code?: string;
                state?: string;
                town?: string;
            };
            dob?: {
                day: number;
                month: number;
                year: number;
            } | "";
            email?: string;
            first_name?: string;
            first_name_kana?: string;
            first_name_kanji?: string;
            gender?: string;
            id_number?: string;
            last_name?: string;
            last_name_kana?: string;
            last_name_kanji?: string;
            maiden_name?: string;
            metadata?: {
                [key: string]: string;
            } | "";
            phone?: string;
            political_exposure?: string;
            relationship?: {
                director?: boolean;
                executive?: boolean;
                owner?: boolean;
                percent_ownership?: number | "";
                representative?: boolean;
                title?: string;
            };
            ssn_last_4?: string;
            verification?: {
                additional_document?: {
                    back?: string;
                    front?: string;
                };
                document?: {
                    back?: string;
                    front?: string;
                };
            };
        };
        pii?: {
            id_number?: string;
        };
    };
};
export type GetTokensTokenApiResponse = /** status 200 Successful response. */ Token;
export type GetTokensTokenApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    token: string;
    body: {};
};
export type GetTopupsApiResponse = /** status 200 Successful response. */ {
    data: Topup[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetTopupsApiArg = {
    /** A positive integer representing how much to transfer. */
    amount?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options. */
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`. */
    status?: "canceled" | "failed" | "pending" | "succeeded";
    body: {};
};
export type PostTopupsApiResponse = /** status 200 Successful response. */ Topup;
export type PostTopupsApiArg = {
    body: {
        amount: number;
        currency: string;
        description?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        source?: string;
        statement_descriptor?: string;
        transfer_group?: string;
    };
};
export type GetTopupsTopupApiResponse = /** status 200 Successful response. */ Topup;
export type GetTopupsTopupApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    topup: string;
    body: {};
};
export type PostTopupsTopupApiResponse = /** status 200 Successful response. */ Topup;
export type PostTopupsTopupApiArg = {
    topup: string;
    body: {
        description?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type PostTopupsTopupCancelApiResponse = /** status 200 Successful response. */ Topup;
export type PostTopupsTopupCancelApiArg = {
    topup: string;
    body: {
        expand?: string[];
    };
};
export type GetTransfersApiResponse = /** status 200 Successful response. */ {
    data: Transfer[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetTransfersApiArg = {
    created?: {
        gt?: number;
        gte?: number;
        lt?: number;
        lte?: number;
    } | number;
    /** Only return transfers for the destination specified by this account ID. */
    destination?: string;
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    /** Only return transfers with the specified transfer group. */
    transferGroup?: string;
    body: {};
};
export type PostTransfersApiResponse = /** status 200 Successful response. */ Transfer;
export type PostTransfersApiArg = {
    body: {
        amount?: number;
        currency: string;
        description?: string;
        destination: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        };
        source_transaction?: string;
        source_type?: "bank_account" | "card" | "fpx";
        transfer_group?: string;
    };
};
export type GetTransfersIdReversalsApiResponse = /** status 200 Successful response. */ {
    data: TransferReversal[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetTransfersIdReversalsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostTransfersIdReversalsApiResponse = /** status 200 Successful response. */ TransferReversal;
export type PostTransfersIdReversalsApiArg = {
    id: string;
    body: {
        amount?: number;
        description?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        refund_application_fee?: boolean;
    };
};
export type GetTransfersTransferApiResponse = /** status 200 Successful response. */ Transfer;
export type GetTransfersTransferApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    transfer: string;
    body: {};
};
export type PostTransfersTransferApiResponse = /** status 200 Successful response. */ Transfer;
export type PostTransfersTransferApiArg = {
    transfer: string;
    body: {
        description?: string;
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetTransfersTransferReversalsIdApiResponse = /** status 200 Successful response. */ TransferReversal;
export type GetTransfersTransferReversalsIdApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    id: string;
    transfer: string;
    body: {};
};
export type PostTransfersTransferReversalsIdApiResponse = /** status 200 Successful response. */ TransferReversal;
export type PostTransfersTransferReversalsIdApiArg = {
    id: string;
    transfer: string;
    body: {
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
    };
};
export type GetWebhookEndpointsApiResponse = /** status 200 Successful response. */ {
    data: NotificationWebhookEndpoint[];
    has_more: boolean;
    "object": "list";
    url: string;
};
export type GetWebhookEndpointsApiArg = {
    /** A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list. */
    endingBefore?: string;
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
    limit?: number;
    /** A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list. */
    startingAfter?: string;
    body: {};
};
export type PostWebhookEndpointsApiResponse = /** status 200 Successful response. */ NotificationWebhookEndpoint;
export type PostWebhookEndpointsApiArg = {
    body: {
        api_version?: "2011-01-01" | "2011-06-21" | "2011-06-28" | "2011-08-01" | "2011-09-15" | "2011-11-17" | "2012-02-23" | "2012-03-25" | "2012-06-18" | "2012-06-28" | "2012-07-09" | "2012-09-24" | "2012-10-26" | "2012-11-07" | "2013-02-11" | "2013-02-13" | "2013-07-05" | "2013-08-12" | "2013-08-13" | "2013-10-29" | "2013-12-03" | "2014-01-31" | "2014-03-13" | "2014-03-28" | "2014-05-19" | "2014-06-13" | "2014-06-17" | "2014-07-22" | "2014-07-26" | "2014-08-04" | "2014-08-20" | "2014-09-08" | "2014-10-07" | "2014-11-05" | "2014-11-20" | "2014-12-08" | "2014-12-17" | "2014-12-22" | "2015-01-11" | "2015-01-26" | "2015-02-10" | "2015-02-16" | "2015-02-18" | "2015-03-24" | "2015-04-07" | "2015-06-15" | "2015-07-07" | "2015-07-13" | "2015-07-28" | "2015-08-07" | "2015-08-19" | "2015-09-03" | "2015-09-08" | "2015-09-23" | "2015-10-01" | "2015-10-12" | "2015-10-16" | "2016-02-03" | "2016-02-19" | "2016-02-22" | "2016-02-23" | "2016-02-29" | "2016-03-07" | "2016-06-15" | "2016-07-06" | "2016-10-19" | "2017-01-27" | "2017-02-14" | "2017-04-06" | "2017-05-25" | "2017-06-05" | "2017-08-15" | "2017-12-14" | "2018-01-23" | "2018-02-05" | "2018-02-06" | "2018-02-28" | "2018-05-21" | "2018-07-27" | "2018-08-23" | "2018-09-06" | "2018-09-24" | "2018-10-31" | "2018-11-08" | "2019-02-11" | "2019-02-19" | "2019-03-14" | "2019-05-16" | "2019-08-14" | "2019-09-09" | "2019-10-08" | "2019-10-17" | "2019-11-05" | "2019-12-03" | "2020-03-02" | "2020-08-27";
        connect?: boolean;
        description?: string;
        enabled_events: ("*" | "account.application.authorized" | "account.application.deauthorized" | "account.external_account.created" | "account.external_account.deleted" | "account.external_account.updated" | "account.updated" | "application_fee.created" | "application_fee.refund.updated" | "application_fee.refunded" | "balance.available" | "capability.updated" | "charge.captured" | "charge.dispute.closed" | "charge.dispute.created" | "charge.dispute.funds_reinstated" | "charge.dispute.funds_withdrawn" | "charge.dispute.updated" | "charge.expired" | "charge.failed" | "charge.pending" | "charge.refund.updated" | "charge.refunded" | "charge.succeeded" | "charge.updated" | "checkout.session.async_payment_failed" | "checkout.session.async_payment_succeeded" | "checkout.session.completed" | "coupon.created" | "coupon.deleted" | "coupon.updated" | "credit_note.created" | "credit_note.updated" | "credit_note.voided" | "customer.created" | "customer.deleted" | "customer.discount.created" | "customer.discount.deleted" | "customer.discount.updated" | "customer.source.created" | "customer.source.deleted" | "customer.source.expiring" | "customer.source.updated" | "customer.subscription.created" | "customer.subscription.deleted" | "customer.subscription.pending_update_applied" | "customer.subscription.pending_update_expired" | "customer.subscription.trial_will_end" | "customer.subscription.updated" | "customer.tax_id.created" | "customer.tax_id.deleted" | "customer.tax_id.updated" | "customer.updated" | "file.created" | "invoice.created" | "invoice.deleted" | "invoice.finalization_failed" | "invoice.finalized" | "invoice.marked_uncollectible" | "invoice.paid" | "invoice.payment_action_required" | "invoice.payment_failed" | "invoice.payment_succeeded" | "invoice.sent" | "invoice.upcoming" | "invoice.updated" | "invoice.voided" | "invoiceitem.created" | "invoiceitem.deleted" | "invoiceitem.updated" | "issuing_authorization.created" | "issuing_authorization.request" | "issuing_authorization.updated" | "issuing_card.created" | "issuing_card.updated" | "issuing_cardholder.created" | "issuing_cardholder.updated" | "issuing_dispute.closed" | "issuing_dispute.created" | "issuing_dispute.funds_reinstated" | "issuing_dispute.submitted" | "issuing_dispute.updated" | "issuing_transaction.created" | "issuing_transaction.updated" | "mandate.updated" | "order.created" | "order.payment_failed" | "order.payment_succeeded" | "order.updated" | "order_return.created" | "payment_intent.amount_capturable_updated" | "payment_intent.canceled" | "payment_intent.created" | "payment_intent.payment_failed" | "payment_intent.processing" | "payment_intent.requires_action" | "payment_intent.succeeded" | "payment_method.attached" | "payment_method.automatically_updated" | "payment_method.detached" | "payment_method.updated" | "payout.canceled" | "payout.created" | "payout.failed" | "payout.paid" | "payout.updated" | "person.created" | "person.deleted" | "person.updated" | "plan.created" | "plan.deleted" | "plan.updated" | "price.created" | "price.deleted" | "price.updated" | "product.created" | "product.deleted" | "product.updated" | "promotion_code.created" | "promotion_code.updated" | "radar.early_fraud_warning.created" | "radar.early_fraud_warning.updated" | "recipient.created" | "recipient.deleted" | "recipient.updated" | "reporting.report_run.failed" | "reporting.report_run.succeeded" | "reporting.report_type.updated" | "review.closed" | "review.opened" | "setup_intent.canceled" | "setup_intent.created" | "setup_intent.requires_action" | "setup_intent.setup_failed" | "setup_intent.succeeded" | "sigma.scheduled_query_run.created" | "sku.created" | "sku.deleted" | "sku.updated" | "source.canceled" | "source.chargeable" | "source.failed" | "source.mandate_notification" | "source.refund_attributes_required" | "source.transaction.created" | "source.transaction.updated" | "subscription_schedule.aborted" | "subscription_schedule.canceled" | "subscription_schedule.completed" | "subscription_schedule.created" | "subscription_schedule.expiring" | "subscription_schedule.released" | "subscription_schedule.updated" | "tax_rate.created" | "tax_rate.updated" | "topup.canceled" | "topup.created" | "topup.failed" | "topup.reversed" | "topup.succeeded" | "transfer.created" | "transfer.failed" | "transfer.paid" | "transfer.reversed" | "transfer.updated")[];
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        url: string;
    };
};
export type DeleteWebhookEndpointsWebhookEndpointApiResponse = /** status 200 Successful response. */ NotificationWebhookEndpointDeleted;
export type DeleteWebhookEndpointsWebhookEndpointApiArg = {
    webhookEndpoint: string;
    body: {};
};
export type GetWebhookEndpointsWebhookEndpointApiResponse = /** status 200 Successful response. */ NotificationWebhookEndpoint;
export type GetWebhookEndpointsWebhookEndpointApiArg = {
    /** Specifies which fields in the response should be expanded. */
    expand?: string[];
    webhookEndpoint: string;
    body: {};
};
export type PostWebhookEndpointsWebhookEndpointApiResponse = /** status 200 Successful response. */ NotificationWebhookEndpoint;
export type PostWebhookEndpointsWebhookEndpointApiArg = {
    webhookEndpoint: string;
    body: {
        description?: string;
        disabled?: boolean;
        enabled_events?: ("*" | "account.application.authorized" | "account.application.deauthorized" | "account.external_account.created" | "account.external_account.deleted" | "account.external_account.updated" | "account.updated" | "application_fee.created" | "application_fee.refund.updated" | "application_fee.refunded" | "balance.available" | "capability.updated" | "charge.captured" | "charge.dispute.closed" | "charge.dispute.created" | "charge.dispute.funds_reinstated" | "charge.dispute.funds_withdrawn" | "charge.dispute.updated" | "charge.expired" | "charge.failed" | "charge.pending" | "charge.refund.updated" | "charge.refunded" | "charge.succeeded" | "charge.updated" | "checkout.session.async_payment_failed" | "checkout.session.async_payment_succeeded" | "checkout.session.completed" | "coupon.created" | "coupon.deleted" | "coupon.updated" | "credit_note.created" | "credit_note.updated" | "credit_note.voided" | "customer.created" | "customer.deleted" | "customer.discount.created" | "customer.discount.deleted" | "customer.discount.updated" | "customer.source.created" | "customer.source.deleted" | "customer.source.expiring" | "customer.source.updated" | "customer.subscription.created" | "customer.subscription.deleted" | "customer.subscription.pending_update_applied" | "customer.subscription.pending_update_expired" | "customer.subscription.trial_will_end" | "customer.subscription.updated" | "customer.tax_id.created" | "customer.tax_id.deleted" | "customer.tax_id.updated" | "customer.updated" | "file.created" | "invoice.created" | "invoice.deleted" | "invoice.finalization_failed" | "invoice.finalized" | "invoice.marked_uncollectible" | "invoice.paid" | "invoice.payment_action_required" | "invoice.payment_failed" | "invoice.payment_succeeded" | "invoice.sent" | "invoice.upcoming" | "invoice.updated" | "invoice.voided" | "invoiceitem.created" | "invoiceitem.deleted" | "invoiceitem.updated" | "issuing_authorization.created" | "issuing_authorization.request" | "issuing_authorization.updated" | "issuing_card.created" | "issuing_card.updated" | "issuing_cardholder.created" | "issuing_cardholder.updated" | "issuing_dispute.closed" | "issuing_dispute.created" | "issuing_dispute.funds_reinstated" | "issuing_dispute.submitted" | "issuing_dispute.updated" | "issuing_transaction.created" | "issuing_transaction.updated" | "mandate.updated" | "order.created" | "order.payment_failed" | "order.payment_succeeded" | "order.updated" | "order_return.created" | "payment_intent.amount_capturable_updated" | "payment_intent.canceled" | "payment_intent.created" | "payment_intent.payment_failed" | "payment_intent.processing" | "payment_intent.requires_action" | "payment_intent.succeeded" | "payment_method.attached" | "payment_method.automatically_updated" | "payment_method.detached" | "payment_method.updated" | "payout.canceled" | "payout.created" | "payout.failed" | "payout.paid" | "payout.updated" | "person.created" | "person.deleted" | "person.updated" | "plan.created" | "plan.deleted" | "plan.updated" | "price.created" | "price.deleted" | "price.updated" | "product.created" | "product.deleted" | "product.updated" | "promotion_code.created" | "promotion_code.updated" | "radar.early_fraud_warning.created" | "radar.early_fraud_warning.updated" | "recipient.created" | "recipient.deleted" | "recipient.updated" | "reporting.report_run.failed" | "reporting.report_run.succeeded" | "reporting.report_type.updated" | "review.closed" | "review.opened" | "setup_intent.canceled" | "setup_intent.created" | "setup_intent.requires_action" | "setup_intent.setup_failed" | "setup_intent.succeeded" | "sigma.scheduled_query_run.created" | "sku.created" | "sku.deleted" | "sku.updated" | "source.canceled" | "source.chargeable" | "source.failed" | "source.mandate_notification" | "source.refund_attributes_required" | "source.transaction.created" | "source.transaction.updated" | "subscription_schedule.aborted" | "subscription_schedule.canceled" | "subscription_schedule.completed" | "subscription_schedule.created" | "subscription_schedule.expiring" | "subscription_schedule.released" | "subscription_schedule.updated" | "tax_rate.created" | "tax_rate.updated" | "topup.canceled" | "topup.created" | "topup.failed" | "topup.reversed" | "topup.succeeded" | "transfer.created" | "transfer.failed" | "transfer.paid" | "transfer.reversed" | "transfer.updated")[];
        expand?: string[];
        metadata?: {
            [key: string]: string;
        } | "";
        url?: string;
    };
};
export type Address = {
    city?: string | null;
    country?: string | null;
    line1?: string | null;
    line2?: string | null;
    postal_code?: string | null;
    state?: string | null;
};
export type AccountBusinessProfile = {
    mcc?: string | null;
    name?: string | null;
    product_description?: string | null;
    support_address?: (Address) | null;
    support_email?: string | null;
    support_phone?: string | null;
    support_url?: string | null;
    url?: string | null;
};
export type AccountCapabilities = {
    au_becs_debit_payments?: "active" | "inactive" | "pending";
    bacs_debit_payments?: "active" | "inactive" | "pending";
    bancontact_payments?: "active" | "inactive" | "pending";
    card_issuing?: "active" | "inactive" | "pending";
    card_payments?: "active" | "inactive" | "pending";
    cartes_bancaires_payments?: "active" | "inactive" | "pending";
    eps_payments?: "active" | "inactive" | "pending";
    fpx_payments?: "active" | "inactive" | "pending";
    giropay_payments?: "active" | "inactive" | "pending";
    grabpay_payments?: "active" | "inactive" | "pending";
    ideal_payments?: "active" | "inactive" | "pending";
    jcb_payments?: "active" | "inactive" | "pending";
    legacy_payments?: "active" | "inactive" | "pending";
    oxxo_payments?: "active" | "inactive" | "pending";
    p24_payments?: "active" | "inactive" | "pending";
    sepa_debit_payments?: "active" | "inactive" | "pending";
    sofort_payments?: "active" | "inactive" | "pending";
    tax_reporting_us_1099_k?: "active" | "inactive" | "pending";
    tax_reporting_us_1099_misc?: "active" | "inactive" | "pending";
    transfers?: "active" | "inactive" | "pending";
};
export type LegalEntityJapanAddress = {
    city?: string | null;
    country?: string | null;
    line1?: string | null;
    line2?: string | null;
    postal_code?: string | null;
    state?: string | null;
    town?: string | null;
};
export type FileLink = {
    created: number;
    expired: boolean;
    expires_at?: number | null;
    file: string | File;
    id: string;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    "object": "file_link";
    url?: string | null;
};
export type File = {
    created: number;
    expires_at?: number | null;
    filename?: string | null;
    id: string;
    links?: {
        data: FileLink[];
        has_more: boolean;
        "object": "list";
        url: string;
    } | null;
    "object": "file";
    purpose: "account_requirement" | "additional_verification" | "business_icon" | "business_logo" | "customer_signature" | "dispute_evidence" | "identity_document" | "pci_document" | "tax_document_user_upload";
    size: number;
    title?: string | null;
    "type"?: string | null;
    url?: string | null;
};
export type LegalEntityCompanyVerificationDocument = {
    back?: (string | File) | null;
    details?: string | null;
    details_code?: string | null;
    front?: (string | File) | null;
};
export type LegalEntityCompanyVerification = {
    document: LegalEntityCompanyVerificationDocument;
};
export type LegalEntityCompany = {
    address?: Address;
    address_kana?: (LegalEntityJapanAddress) | null;
    address_kanji?: (LegalEntityJapanAddress) | null;
    directors_provided?: boolean;
    executives_provided?: boolean;
    name?: string | null;
    name_kana?: string | null;
    name_kanji?: string | null;
    owners_provided?: boolean;
    phone?: string | null;
    structure?: "government_instrumentality" | "governmental_unit" | "incorporated_non_profit" | "limited_liability_partnership" | "multi_member_llc" | "private_company" | "private_corporation" | "private_partnership" | "public_company" | "public_corporation" | "public_partnership" | "sole_proprietorship" | "tax_exempt_government_instrumentality" | "unincorporated_association" | "unincorporated_non_profit";
    tax_id_provided?: boolean;
    tax_id_registrar?: string;
    vat_id_provided?: boolean;
    verification?: (LegalEntityCompanyVerification) | null;
};
export type DeletedCustomer = {
    deleted: true;
    id: string;
    "object": "customer";
};
export type AlipayAccount = {
    created: number;
    customer?: (string | Customer | DeletedCustomer) | null;
    fingerprint: string;
    id: string;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    };
    "object": "alipay_account";
    payment_amount?: number | null;
    payment_currency?: string | null;
    reusable: boolean;
    used: boolean;
    username: string;
};
export type BitcoinTransaction = {
    amount: number;
    bitcoin_amount: number;
    created: number;
    currency: string;
    id: string;
    "object": "bitcoin_transaction";
    receiver: string;
};
export type BitcoinReceiver = {
    active: boolean;
    amount: number;
    amount_received: number;
    bitcoin_amount: number;
    bitcoin_amount_received: number;
    bitcoin_uri: string;
    created: number;
    currency: string;
    customer?: string | null;
    description?: string | null;
    email?: string | null;
    filled: boolean;
    id: string;
    inbound_address: string;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "bitcoin_receiver";
    payment?: string | null;
    refund_address?: string | null;
    transactions?: {
        data: BitcoinTransaction[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    uncaptured_funds: boolean;
    used_for_payment?: boolean | null;
};
export type Source_type_ach_credit_transfer = {
    account_number?: string | null;
    bank_name?: string | null;
    fingerprint?: string | null;
    refund_account_holder_name?: string | null;
    refund_account_holder_type?: string | null;
    refund_routing_number?: string | null;
    routing_number?: string | null;
    swift_code?: string | null;
};
export type Source_type_ach_debit = {
    bank_name?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    routing_number?: string | null;
    "type"?: string | null;
};
export type Source_type_alipay = {
    data_string?: string | null;
    native_url?: string | null;
    statement_descriptor?: string | null;
};
export type Source_type_au_becs_debit = {
    bsb_number?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
};
export type Source_type_bancontact = {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    iban_last4?: string | null;
    preferred_language?: string | null;
    statement_descriptor?: string | null;
};
export type Source_type_card = {
    address_line1_check?: string | null;
    address_zip_check?: string | null;
    brand?: string | null;
    country?: string | null;
    cvc_check?: string | null;
    dynamic_last4?: string | null;
    exp_month?: number | null;
    exp_year?: number | null;
    fingerprint?: string;
    funding?: string | null;
    last4?: string | null;
    name?: string | null;
    three_d_secure?: string;
    tokenization_method?: string | null;
};
export type Source_type_card_present = {
    application_cryptogram?: string;
    application_preferred_name?: string;
    authorization_code?: string | null;
    authorization_response_code?: string;
    brand?: string | null;
    country?: string | null;
    cvm_type?: string;
    data_type?: string | null;
    dedicated_file_name?: string;
    emv_auth_data?: string;
    evidence_customer_signature?: string | null;
    evidence_transaction_certificate?: string | null;
    exp_month?: number | null;
    exp_year?: number | null;
    fingerprint?: string;
    funding?: string | null;
    last4?: string | null;
    pos_device_id?: string | null;
    pos_entry_mode?: string;
    read_method?: string | null;
    reader?: string | null;
    terminal_verification_results?: string;
    transaction_status_information?: string;
};
export type SourceCodeVerificationFlow = {
    attempts_remaining: number;
    status: string;
};
export type Source_type_eps = {
    reference?: string | null;
    statement_descriptor?: string | null;
};
export type Source_type_giropay = {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    statement_descriptor?: string | null;
};
export type Source_type_ideal = {
    bank?: string | null;
    bic?: string | null;
    iban_last4?: string | null;
    statement_descriptor?: string | null;
};
export type Source_type_klarna = {
    background_image_url?: string;
    client_token?: string | null;
    first_name?: string;
    last_name?: string;
    locale?: string;
    logo_url?: string;
    page_title?: string;
    pay_later_asset_urls_descriptive?: string;
    pay_later_asset_urls_standard?: string;
    pay_later_name?: string;
    pay_later_redirect_url?: string;
    pay_now_asset_urls_descriptive?: string;
    pay_now_asset_urls_standard?: string;
    pay_now_name?: string;
    pay_now_redirect_url?: string;
    pay_over_time_asset_urls_descriptive?: string;
    pay_over_time_asset_urls_standard?: string;
    pay_over_time_name?: string;
    pay_over_time_redirect_url?: string;
    payment_method_categories?: string;
    purchase_country?: string;
    purchase_type?: string;
    redirect_url?: string;
    shipping_delay?: number;
    shipping_first_name?: string;
    shipping_last_name?: string;
};
export type Source_type_multibanco = {
    entity?: string | null;
    reference?: string | null;
    refund_account_holder_address_city?: string | null;
    refund_account_holder_address_country?: string | null;
    refund_account_holder_address_line1?: string | null;
    refund_account_holder_address_line2?: string | null;
    refund_account_holder_address_postal_code?: string | null;
    refund_account_holder_address_state?: string | null;
    refund_account_holder_name?: string | null;
    refund_iban?: string | null;
};
export type SourceOwner = {
    address?: (Address) | null;
    email?: string | null;
    name?: string | null;
    phone?: string | null;
    verified_address?: (Address) | null;
    verified_email?: string | null;
    verified_name?: string | null;
    verified_phone?: string | null;
};
export type Source_type_p24 = {
    reference?: string | null;
};
export type SourceReceiverFlow = {
    address?: string | null;
    amount_charged: number;
    amount_received: number;
    amount_returned: number;
    refund_attributes_method: string;
    refund_attributes_status: string;
};
export type SourceRedirectFlow = {
    failure_reason?: string | null;
    return_url: string;
    status: string;
    url: string;
};
export type Source_type_sepa_debit = {
    bank_code?: string | null;
    branch_code?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    mandate_reference?: string | null;
    mandate_url?: string | null;
};
export type Source_type_sofort = {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    country?: string | null;
    iban_last4?: string | null;
    preferred_language?: string | null;
    statement_descriptor?: string | null;
};
export type SourceOrderItem = {
    amount?: number | null;
    currency?: string | null;
    description?: string | null;
    parent?: string | null;
    quantity?: number;
    "type"?: string | null;
};
export type Shipping = {
    address?: Address;
    carrier?: string | null;
    name?: string | null;
    phone?: string | null;
    tracking_number?: string | null;
};
export type SourceOrder = {
    amount: number;
    currency: string;
    email?: string;
    items?: SourceOrderItem[] | null;
    shipping?: Shipping;
};
export type Source_type_three_d_secure = {
    address_line1_check?: string | null;
    address_zip_check?: string | null;
    authenticated?: boolean | null;
    brand?: string | null;
    card?: string | null;
    country?: string | null;
    customer?: string | null;
    cvc_check?: string | null;
    dynamic_last4?: string | null;
    exp_month?: number | null;
    exp_year?: number | null;
    fingerprint?: string;
    funding?: string | null;
    last4?: string | null;
    name?: string | null;
    three_d_secure?: string;
    tokenization_method?: string | null;
};
export type Source_type_wechat = {
    prepay_id?: string;
    qr_code_url?: string | null;
    statement_descriptor?: string;
};
export type Source = {
    ach_credit_transfer?: Source_type_ach_credit_transfer;
    ach_debit?: Source_type_ach_debit;
    alipay?: Source_type_alipay;
    amount?: number | null;
    au_becs_debit?: Source_type_au_becs_debit;
    bancontact?: Source_type_bancontact;
    card?: Source_type_card;
    card_present?: Source_type_card_present;
    client_secret: string;
    code_verification?: SourceCodeVerificationFlow;
    created: number;
    currency?: string | null;
    customer?: string;
    eps?: Source_type_eps;
    flow: string;
    giropay?: Source_type_giropay;
    id: string;
    ideal?: Source_type_ideal;
    klarna?: Source_type_klarna;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    multibanco?: Source_type_multibanco;
    "object": "source";
    owner?: (SourceOwner) | null;
    p24?: Source_type_p24;
    receiver?: SourceReceiverFlow;
    redirect?: SourceRedirectFlow;
    sepa_debit?: Source_type_sepa_debit;
    sofort?: Source_type_sofort;
    source_order?: SourceOrder;
    statement_descriptor?: string | null;
    status: string;
    three_d_secure?: Source_type_three_d_secure;
    "type": "ach_credit_transfer" | "ach_debit" | "alipay" | "au_becs_debit" | "bancontact" | "card" | "card_present" | "eps" | "giropay" | "ideal" | "klarna" | "multibanco" | "p24" | "sepa_debit" | "sofort" | "three_d_secure" | "wechat";
    usage?: string | null;
    wechat?: Source_type_wechat;
};
export type CouponAppliesTo = {
    products: string[];
};
export type Coupon = {
    amount_off?: number | null;
    applies_to?: CouponAppliesTo;
    created: number;
    currency?: string | null;
    duration: "forever" | "once" | "repeating";
    duration_in_months?: number | null;
    id: string;
    livemode: boolean;
    max_redemptions?: number | null;
    metadata?: {
        [key: string]: string;
    } | null;
    name?: string | null;
    "object": "coupon";
    percent_off?: number | null;
    redeem_by?: number | null;
    times_redeemed: number;
    valid: boolean;
};
export type PromotionCodesResourceRestrictions = {
    first_time_transaction: boolean;
    minimum_amount?: number | null;
    minimum_amount_currency?: string | null;
};
export type PromotionCode = {
    active: boolean;
    code: string;
    coupon: Coupon;
    created: number;
    customer?: (string | Customer | DeletedCustomer) | null;
    expires_at?: number | null;
    id: string;
    livemode: boolean;
    max_redemptions?: number | null;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "promotion_code";
    restrictions: PromotionCodesResourceRestrictions;
    times_redeemed: number;
};
export type Discount = {
    checkout_session?: string | null;
    coupon: Coupon;
    customer?: (string | Customer | DeletedCustomer) | null;
    end?: number | null;
    id: string;
    invoice?: string | null;
    invoice_item?: string | null;
    "object": "discount";
    promotion_code?: (string | PromotionCode) | null;
    start: number;
    subscription?: string | null;
};
export type InvoiceSettingCustomField = {
    name: string;
    value: string;
};
export type PaymentFlowsPrivatePaymentMethodsAlipay = {};
export type Payment_method_au_becs_debit = {
    bsb_number?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
};
export type Payment_method_bacs_debit = {
    fingerprint?: string | null;
    last4?: string | null;
    sort_code?: string | null;
};
export type Payment_method_bancontact = {};
export type Billing_details = {
    address?: (Address) | null;
    email?: string | null;
    name?: string | null;
    phone?: string | null;
};
export type Payment_method_card_checks = {
    address_line1_check?: string | null;
    address_postal_code_check?: string | null;
    cvc_check?: string | null;
};
export type Payment_method_details_card_present_receipt = {
    account_type?: "checking" | "credit" | "prepaid" | "unknown";
    application_cryptogram?: string | null;
    application_preferred_name?: string | null;
    authorization_code?: string | null;
    authorization_response_code?: string | null;
    cardholder_verification_method?: string | null;
    dedicated_file_name?: string | null;
    terminal_verification_results?: string | null;
    transaction_status_information?: string | null;
};
export type Payment_method_details_card_present = {
    brand?: string | null;
    cardholder_name?: string | null;
    country?: string | null;
    emv_auth_data?: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint?: string | null;
    funding?: string | null;
    generated_card?: string | null;
    last4?: string | null;
    network?: string | null;
    read_method?: ("contact_emv" | "contactless_emv" | "contactless_magstripe_mode" | "magnetic_stripe_fallback" | "magnetic_stripe_track2") | null;
    receipt?: (Payment_method_details_card_present_receipt) | null;
};
export type Card_generated_from_payment_method_details = {
    card_present?: Payment_method_details_card_present;
    "type": string;
};
export type Application = {
    id: string;
    name?: string | null;
    "object": "application";
};
export type Offline_acceptance = {};
export type Online_acceptance = {
    ip_address?: string | null;
    user_agent?: string | null;
};
export type Customer_acceptance = {
    accepted_at?: number | null;
    offline?: Offline_acceptance;
    online?: Online_acceptance;
    "type": "offline" | "online";
};
export type Mandate_multi_use = {};
export type Mandate_au_becs_debit = {
    url: string;
};
export type Mandate_bacs_debit = {
    network_status: "accepted" | "pending" | "refused" | "revoked";
    reference: string;
    url: string;
};
export type Card_mandate_payment_method_details = {};
export type Mandate_sepa_debit = {
    reference: string;
    url: string;
};
export type Mandate_payment_method_details = {
    au_becs_debit?: Mandate_au_becs_debit;
    bacs_debit?: Mandate_bacs_debit;
    card?: Card_mandate_payment_method_details;
    sepa_debit?: Mandate_sepa_debit;
    "type": string;
};
export type Mandate_single_use = {
    amount: number;
    currency: string;
};
export type Mandate = {
    customer_acceptance: Customer_acceptance;
    id: string;
    livemode: boolean;
    multi_use?: Mandate_multi_use;
    "object": "mandate";
    payment_method: string | PaymentMethod;
    payment_method_details: Mandate_payment_method_details;
    single_use?: Mandate_single_use;
    status: "active" | "inactive" | "pending";
    "type": "multi_use" | "single_use";
};
export type Setup_attempt_payment_method_details_bancontact = {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    generated_sepa_debit?: (string | PaymentMethod) | null;
    generated_sepa_debit_mandate?: (string | Mandate) | null;
    iban_last4?: string | null;
    preferred_language?: ("de" | "en" | "fr" | "nl") | null;
    verified_name?: string | null;
};
export type Three_d_secure_details = {
    authentication_flow?: ("challenge" | "frictionless") | null;
    result: "attempt_acknowledged" | "authenticated" | "failed" | "not_supported" | "processing_error";
    result_reason?: ("abandoned" | "bypassed" | "canceled" | "card_not_enrolled" | "network_not_supported" | "protocol_error" | "rejected") | null;
    version: "1.0.2" | "2.1.0" | "2.2.0";
};
export type Setup_attempt_payment_method_details_card = {
    three_d_secure?: (Three_d_secure_details) | null;
};
export type Setup_attempt_payment_method_details_card_present = {
    generated_card?: (string | PaymentMethod) | null;
};
export type Setup_attempt_payment_method_details_ideal = {
    bank?: ("abn_amro" | "asn_bank" | "bunq" | "handelsbanken" | "ing" | "knab" | "moneyou" | "rabobank" | "regiobank" | "sns_bank" | "triodos_bank" | "van_lanschot") | null;
    bic?: ("ABNANL2A" | "ASNBNL21" | "BUNQNL2A" | "FVLBNL22" | "HANDNL2A" | "INGBNL2A" | "KNABNL2H" | "MOYONL21" | "RABONL2U" | "RBRBNL21" | "SNSBNL2A" | "TRIONL2U") | null;
    generated_sepa_debit?: (string | PaymentMethod) | null;
    generated_sepa_debit_mandate?: (string | Mandate) | null;
    iban_last4?: string | null;
    verified_name?: string | null;
};
export type Setup_attempt_payment_method_details_sofort = {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    generated_sepa_debit?: (string | PaymentMethod) | null;
    generated_sepa_debit_mandate?: (string | Mandate) | null;
    iban_last4?: string | null;
    preferred_language?: ("de" | "en" | "fr" | "nl") | null;
    verified_name?: string | null;
};
export type SetupAttemptPaymentMethodDetails = {
    bancontact?: Setup_attempt_payment_method_details_bancontact;
    card?: Setup_attempt_payment_method_details_card;
    card_present?: Setup_attempt_payment_method_details_card_present;
    ideal?: Setup_attempt_payment_method_details_ideal;
    sofort?: Setup_attempt_payment_method_details_sofort;
    "type": string;
};
export type Fee = {
    amount: number;
    application?: string | null;
    currency: string;
    description?: string | null;
    "type": string;
};
export type ConnectCollectionTransfer = {
    amount: number;
    currency: string;
    destination: string | Account;
    id: string;
    livemode: boolean;
    "object": "connect_collection_transfer";
};
export type DisputeEvidence = {
    access_activity_log?: string | null;
    billing_address?: string | null;
    cancellation_policy?: (string | File) | null;
    cancellation_policy_disclosure?: string | null;
    cancellation_rebuttal?: string | null;
    customer_communication?: (string | File) | null;
    customer_email_address?: string | null;
    customer_name?: string | null;
    customer_purchase_ip?: string | null;
    customer_signature?: (string | File) | null;
    duplicate_charge_documentation?: (string | File) | null;
    duplicate_charge_explanation?: string | null;
    duplicate_charge_id?: string | null;
    product_description?: string | null;
    receipt?: (string | File) | null;
    refund_policy?: (string | File) | null;
    refund_policy_disclosure?: string | null;
    refund_refusal_explanation?: string | null;
    service_date?: string | null;
    service_documentation?: (string | File) | null;
    shipping_address?: string | null;
    shipping_carrier?: string | null;
    shipping_date?: string | null;
    shipping_documentation?: (string | File) | null;
    shipping_tracking_number?: string | null;
    uncategorized_file?: (string | File) | null;
    uncategorized_text?: string | null;
};
export type DisputeEvidenceDetails = {
    due_by?: number | null;
    has_evidence: boolean;
    past_due: boolean;
    submission_count: number;
};
export type Dispute = {
    amount: number;
    balance_transactions: BalanceTransaction[];
    charge: string | Charge;
    created: number;
    currency: string;
    evidence: DisputeEvidence;
    evidence_details: DisputeEvidenceDetails;
    id: string;
    is_charge_refundable: boolean;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    "object": "dispute";
    payment_intent?: (string | PaymentIntent) | null;
    reason: string;
    status: "charge_refunded" | "lost" | "needs_response" | "under_review" | "warning_closed" | "warning_needs_response" | "warning_under_review" | "won";
};
export type FeeRefund = {
    amount: number;
    balance_transaction?: (string | BalanceTransaction) | null;
    created: number;
    currency: string;
    fee: string | PlatformFee;
    id: string;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "fee_refund";
};
export type IssuingAuthorizationAmountDetails = {
    atm_fee?: number | null;
};
export type IssuingCardholderAddress = {
    address: Address;
};
export type IssuingCardholderCompany = {
    tax_id_provided: boolean;
};
export type IssuingCardholderIndividualDOB = {
    day?: number | null;
    month?: number | null;
    year?: number | null;
};
export type IssuingCardholderIdDocument = {
    back?: (string | File) | null;
    front?: (string | File) | null;
};
export type IssuingCardholderVerification = {
    document?: (IssuingCardholderIdDocument) | null;
};
export type IssuingCardholderIndividual = {
    dob?: (IssuingCardholderIndividualDOB) | null;
    first_name: string;
    last_name: string;
    verification?: (IssuingCardholderVerification) | null;
};
export type IssuingCardholderRequirements = {
    disabled_reason?: ("listed" | "rejected.listed" | "under_review") | null;
    past_due?: ("company.tax_id" | "individual.dob.day" | "individual.dob.month" | "individual.dob.year" | "individual.first_name" | "individual.last_name" | "individual.verification.document")[] | null;
};
export type IssuingCardholderSpendingLimit = {
    amount: number;
    categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[] | null;
    interval: "all_time" | "daily" | "monthly" | "per_authorization" | "weekly" | "yearly";
};
export type IssuingCardholderAuthorizationControls = {
    allowed_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[] | null;
    blocked_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[] | null;
    spending_limits?: IssuingCardholderSpendingLimit[] | null;
    spending_limits_currency?: string | null;
};
export type IssuingCardholder = {
    billing: IssuingCardholderAddress;
    company?: (IssuingCardholderCompany) | null;
    created: number;
    email?: string | null;
    id: string;
    individual?: (IssuingCardholderIndividual) | null;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    name: string;
    "object": "issuing.cardholder";
    phone_number?: string | null;
    requirements: IssuingCardholderRequirements;
    spending_controls?: (IssuingCardholderAuthorizationControls) | null;
    status: "active" | "blocked" | "inactive";
    "type": "company" | "individual";
};
export type IssuingCardShipping = {
    address: Address;
    carrier?: ("fedex" | "usps") | null;
    eta?: number | null;
    name: string;
    service: "express" | "priority" | "standard";
    status?: ("canceled" | "delivered" | "failure" | "pending" | "returned" | "shipped") | null;
    tracking_number?: string | null;
    tracking_url?: string | null;
    "type": "bulk" | "individual";
};
export type IssuingCardSpendingLimit = {
    amount: number;
    categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[] | null;
    interval: "all_time" | "daily" | "monthly" | "per_authorization" | "weekly" | "yearly";
};
export type IssuingCardAuthorizationControls = {
    allowed_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[] | null;
    blocked_categories?: ("ac_refrigeration_repair" | "accounting_bookkeeping_services" | "advertising_services" | "agricultural_cooperative" | "airlines_air_carriers" | "airports_flying_fields" | "ambulance_services" | "amusement_parks_carnivals" | "antique_reproductions" | "antique_shops" | "aquariums" | "architectural_surveying_services" | "art_dealers_and_galleries" | "artists_supply_and_craft_shops" | "auto_and_home_supply_stores" | "auto_body_repair_shops" | "auto_paint_shops" | "auto_service_shops" | "automated_cash_disburse" | "automated_fuel_dispensers" | "automobile_associations" | "automotive_parts_and_accessories_stores" | "automotive_tire_stores" | "bail_and_bond_payments" | "bakeries" | "bands_orchestras" | "barber_and_beauty_shops" | "betting_casino_gambling" | "bicycle_shops" | "billiard_pool_establishments" | "boat_dealers" | "boat_rentals_and_leases" | "book_stores" | "books_periodicals_and_newspapers" | "bowling_alleys" | "bus_lines" | "business_secretarial_schools" | "buying_shopping_services" | "cable_satellite_and_other_pay_television_and_radio" | "camera_and_photographic_supply_stores" | "candy_nut_and_confectionery_stores" | "car_and_truck_dealers_new_used" | "car_and_truck_dealers_used_only" | "car_rental_agencies" | "car_washes" | "carpentry_services" | "carpet_upholstery_cleaning" | "caterers" | "charitable_and_social_service_organizations_fundraising" | "chemicals_and_allied_products" | "child_care_services" | "childrens_and_infants_wear_stores" | "chiropodists_podiatrists" | "chiropractors" | "cigar_stores_and_stands" | "civic_social_fraternal_associations" | "cleaning_and_maintenance" | "clothing_rental" | "colleges_universities" | "commercial_equipment" | "commercial_footwear" | "commercial_photography_art_and_graphics" | "commuter_transport_and_ferries" | "computer_network_services" | "computer_programming" | "computer_repair" | "computer_software_stores" | "computers_peripherals_and_software" | "concrete_work_services" | "construction_materials" | "consulting_public_relations" | "correspondence_schools" | "cosmetic_stores" | "counseling_services" | "country_clubs" | "courier_services" | "court_costs" | "credit_reporting_agencies" | "cruise_lines" | "dairy_products_stores" | "dance_hall_studios_schools" | "dating_escort_services" | "dentists_orthodontists" | "department_stores" | "detective_agencies" | "digital_goods_applications" | "digital_goods_games" | "digital_goods_large_volume" | "digital_goods_media" | "direct_marketing_catalog_merchant" | "direct_marketing_combination_catalog_and_retail_merchant" | "direct_marketing_inbound_telemarketing" | "direct_marketing_insurance_services" | "direct_marketing_other" | "direct_marketing_outbound_telemarketing" | "direct_marketing_subscription" | "direct_marketing_travel" | "discount_stores" | "doctors" | "door_to_door_sales" | "drapery_window_covering_and_upholstery_stores" | "drinking_places" | "drug_stores_and_pharmacies" | "drugs_drug_proprietaries_and_druggist_sundries" | "dry_cleaners" | "durable_goods" | "duty_free_stores" | "eating_places_restaurants" | "educational_services" | "electric_razor_stores" | "electrical_parts_and_equipment" | "electrical_services" | "electronics_repair_shops" | "electronics_stores" | "elementary_secondary_schools" | "employment_temp_agencies" | "equipment_rental" | "exterminating_services" | "family_clothing_stores" | "fast_food_restaurants" | "financial_institutions" | "fines_government_administrative_entities" | "fireplace_fireplace_screens_and_accessories_stores" | "floor_covering_stores" | "florists" | "florists_supplies_nursery_stock_and_flowers" | "freezer_and_locker_meat_provisioners" | "fuel_dealers_non_automotive" | "funeral_services_crematories" | "furniture_home_furnishings_and_equipment_stores_except_appliances" | "furniture_repair_refinishing" | "furriers_and_fur_shops" | "general_services" | "gift_card_novelty_and_souvenir_shops" | "glass_paint_and_wallpaper_stores" | "glassware_crystal_stores" | "golf_courses_public" | "government_services" | "grocery_stores_supermarkets" | "hardware_equipment_and_supplies" | "hardware_stores" | "health_and_beauty_spas" | "hearing_aids_sales_and_supplies" | "heating_plumbing_a_c" | "hobby_toy_and_game_shops" | "home_supply_warehouse_stores" | "hospitals" | "hotels_motels_and_resorts" | "household_appliance_stores" | "industrial_supplies" | "information_retrieval_services" | "insurance_default" | "insurance_underwriting_premiums" | "intra_company_purchases" | "jewelry_stores_watches_clocks_and_silverware_stores" | "landscaping_services" | "laundries" | "laundry_cleaning_services" | "legal_services_attorneys" | "luggage_and_leather_goods_stores" | "lumber_building_materials_stores" | "manual_cash_disburse" | "marinas_service_and_supplies" | "masonry_stonework_and_plaster" | "massage_parlors" | "medical_and_dental_labs" | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies" | "medical_services" | "membership_organizations" | "mens_and_boys_clothing_and_accessories_stores" | "mens_womens_clothing_stores" | "metal_service_centers" | "miscellaneous" | "miscellaneous_apparel_and_accessory_shops" | "miscellaneous_auto_dealers" | "miscellaneous_business_services" | "miscellaneous_food_stores" | "miscellaneous_general_merchandise" | "miscellaneous_general_services" | "miscellaneous_home_furnishing_specialty_stores" | "miscellaneous_publishing_and_printing" | "miscellaneous_recreation_services" | "miscellaneous_repair_shops" | "miscellaneous_specialty_retail" | "mobile_home_dealers" | "motion_picture_theaters" | "motor_freight_carriers_and_trucking" | "motor_homes_dealers" | "motor_vehicle_supplies_and_new_parts" | "motorcycle_shops_and_dealers" | "motorcycle_shops_dealers" | "music_stores_musical_instruments_pianos_and_sheet_music" | "news_dealers_and_newsstands" | "non_fi_money_orders" | "non_fi_stored_value_card_purchase_load" | "nondurable_goods" | "nurseries_lawn_and_garden_supply_stores" | "nursing_personal_care" | "office_and_commercial_furniture" | "opticians_eyeglasses" | "optometrists_ophthalmologist" | "orthopedic_goods_prosthetic_devices" | "osteopaths" | "package_stores_beer_wine_and_liquor" | "paints_varnishes_and_supplies" | "parking_lots_garages" | "passenger_railways" | "pawn_shops" | "pet_shops_pet_food_and_supplies" | "petroleum_and_petroleum_products" | "photo_developing" | "photographic_photocopy_microfilm_equipment_and_supplies" | "photographic_studios" | "picture_video_production" | "piece_goods_notions_and_other_dry_goods" | "plumbing_heating_equipment_and_supplies" | "political_organizations" | "postal_services_government_only" | "precious_stones_and_metals_watches_and_jewelry" | "professional_services" | "public_warehousing_and_storage" | "quick_copy_repro_and_blueprint" | "railroads" | "real_estate_agents_and_managers_rentals" | "record_stores" | "recreational_vehicle_rentals" | "religious_goods_stores" | "religious_organizations" | "roofing_siding_sheet_metal" | "secretarial_support_services" | "security_brokers_dealers" | "service_stations" | "sewing_needlework_fabric_and_piece_goods_stores" | "shoe_repair_hat_cleaning" | "shoe_stores" | "small_appliance_repair" | "snowmobile_dealers" | "special_trade_services" | "specialty_cleaning" | "sporting_goods_stores" | "sporting_recreation_camps" | "sports_and_riding_apparel_stores" | "sports_clubs_fields" | "stamp_and_coin_stores" | "stationary_office_supplies_printing_and_writing_paper" | "stationery_stores_office_and_school_supply_stores" | "swimming_pools_sales" | "t_ui_travel_germany" | "tailors_alterations" | "tax_payments_government_agencies" | "tax_preparation_services" | "taxicabs_limousines" | "telecommunication_equipment_and_telephone_sales" | "telecommunication_services" | "telegraph_services" | "tent_and_awning_shops" | "testing_laboratories" | "theatrical_ticket_agencies" | "timeshares" | "tire_retreading_and_repair" | "tolls_bridge_fees" | "tourist_attractions_and_exhibits" | "towing_services" | "trailer_parks_campgrounds" | "transportation_services" | "travel_agencies_tour_operators" | "truck_stop_iteration" | "truck_utility_trailer_rentals" | "typesetting_plate_making_and_related_services" | "typewriter_stores" | "u_s_federal_government_agencies_or_departments" | "uniforms_commercial_clothing" | "used_merchandise_and_secondhand_stores" | "utilities" | "variety_stores" | "veterinary_services" | "video_amusement_game_supplies" | "video_game_arcades" | "video_tape_rental_stores" | "vocational_trade_schools" | "watch_jewelry_repair" | "welding_repair" | "wholesale_clubs" | "wig_and_toupee_stores" | "wires_money_orders" | "womens_accessory_and_specialty_shops" | "womens_ready_to_wear_stores" | "wrecking_and_salvage_yards")[] | null;
    spending_limits?: IssuingCardSpendingLimit[] | null;
    spending_limits_currency?: string | null;
};
export type IssuingCard = {
    brand: string;
    cancellation_reason?: ("lost" | "stolen") | null;
    cardholder: IssuingCardholder;
    created: number;
    currency: string;
    cvc?: string;
    exp_month: number;
    exp_year: number;
    id: string;
    last4: string;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    "number"?: string;
    "object": "issuing.card";
    replaced_by?: (string | IssuingCard) | null;
    replacement_for?: (string | IssuingCard) | null;
    replacement_reason?: ("damaged" | "expired" | "lost" | "stolen") | null;
    shipping?: (IssuingCardShipping) | null;
    spending_controls: IssuingCardAuthorizationControls;
    status: "active" | "canceled" | "inactive";
    "type": "physical" | "virtual";
};
export type IssuingAuthorizationMerchantData = {
    category: string;
    city?: string | null;
    country?: string | null;
    name?: string | null;
    network_id: string;
    postal_code?: string | null;
    state?: string | null;
};
export type IssuingAuthorizationPendingRequest = {
    amount: number;
    amount_details?: (IssuingAuthorizationAmountDetails) | null;
    currency: string;
    is_amount_controllable: boolean;
    merchant_amount: number;
    merchant_currency: string;
};
export type IssuingAuthorizationRequest = {
    amount: number;
    amount_details?: (IssuingAuthorizationAmountDetails) | null;
    approved: boolean;
    created: number;
    currency: string;
    merchant_amount: number;
    merchant_currency: string;
    reason: "account_disabled" | "card_active" | "card_inactive" | "cardholder_inactive" | "cardholder_verification_required" | "insufficient_funds" | "not_allowed" | "spending_controls" | "suspected_fraud" | "verification_failed" | "webhook_approved" | "webhook_declined" | "webhook_timeout";
};
export type IssuingTransactionAmountDetails = {
    atm_fee?: number | null;
};
export type IssuingDisputeCanceledEvidence = {
    additional_documentation?: (string | File) | null;
    canceled_at?: number | null;
    cancellation_policy_provided?: boolean | null;
    cancellation_reason?: string | null;
    expected_at?: number | null;
    explanation?: string | null;
    product_description?: string | null;
    product_type?: ("merchandise" | "service") | null;
    return_status?: ("merchant_rejected" | "successful") | null;
    returned_at?: number | null;
};
export type IssuingDisputeDuplicateEvidence = {
    additional_documentation?: (string | File) | null;
    card_statement?: (string | File) | null;
    cash_receipt?: (string | File) | null;
    check_image?: (string | File) | null;
    explanation?: string | null;
    original_transaction?: string | null;
};
export type IssuingDisputeFraudulentEvidence = {
    additional_documentation?: (string | File) | null;
    explanation?: string | null;
};
export type IssuingDisputeMerchandiseNotAsDescribedEvidence = {
    additional_documentation?: (string | File) | null;
    explanation?: string | null;
    received_at?: number | null;
    return_description?: string | null;
    return_status?: ("merchant_rejected" | "successful") | null;
    returned_at?: number | null;
};
export type IssuingDisputeNotReceivedEvidence = {
    additional_documentation?: (string | File) | null;
    expected_at?: number | null;
    explanation?: string | null;
    product_description?: string | null;
    product_type?: ("merchandise" | "service") | null;
};
export type IssuingDisputeOtherEvidence = {
    additional_documentation?: (string | File) | null;
    explanation?: string | null;
    product_description?: string | null;
    product_type?: ("merchandise" | "service") | null;
};
export type IssuingDisputeServiceNotAsDescribedEvidence = {
    additional_documentation?: (string | File) | null;
    canceled_at?: number | null;
    cancellation_reason?: string | null;
    explanation?: string | null;
    received_at?: number | null;
};
export type IssuingDisputeEvidence = {
    canceled?: IssuingDisputeCanceledEvidence;
    duplicate?: IssuingDisputeDuplicateEvidence;
    fraudulent?: IssuingDisputeFraudulentEvidence;
    merchandise_not_as_described?: IssuingDisputeMerchandiseNotAsDescribedEvidence;
    not_received?: IssuingDisputeNotReceivedEvidence;
    other?: IssuingDisputeOtherEvidence;
    reason: "canceled" | "duplicate" | "fraudulent" | "merchandise_not_as_described" | "not_received" | "other" | "service_not_as_described";
    service_not_as_described?: IssuingDisputeServiceNotAsDescribedEvidence;
};
export type IssuingDispute = {
    amount?: number;
    balance_transactions?: BalanceTransaction[] | null;
    created?: number;
    currency?: string;
    evidence?: IssuingDisputeEvidence;
    id: string;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    };
    "object": "issuing.dispute";
    status?: "expired" | "lost" | "submitted" | "unsubmitted" | "won";
    transaction: string | IssuingTransaction;
};
export type IssuingTransactionFlightDataLeg = {
    arrival_airport_code?: string | null;
    carrier?: string | null;
    departure_airport_code?: string | null;
    flight_number?: string | null;
    service_class?: string | null;
    stopover_allowed?: boolean | null;
};
export type IssuingTransactionFlightData = {
    departure_at?: number | null;
    passenger_name?: string | null;
    refundable?: boolean | null;
    segments?: IssuingTransactionFlightDataLeg[] | null;
    travel_agency?: string | null;
};
export type IssuingTransactionFuelData = {
    "type": string;
    unit: string;
    unit_cost_decimal: string;
    volume_decimal?: string | null;
};
export type IssuingTransactionLodgingData = {
    check_in_at?: number | null;
    nights?: number | null;
};
export type IssuingTransactionReceiptData = {
    description?: string | null;
    quantity?: number | null;
    total?: number | null;
    unit_cost?: number | null;
};
export type IssuingTransactionPurchaseDetails = {
    flight?: (IssuingTransactionFlightData) | null;
    fuel?: (IssuingTransactionFuelData) | null;
    lodging?: (IssuingTransactionLodgingData) | null;
    receipt?: IssuingTransactionReceiptData[] | null;
    reference?: string | null;
};
export type IssuingTransaction = {
    amount: number;
    amount_details?: (IssuingTransactionAmountDetails) | null;
    authorization?: (string | IssuingAuthorization) | null;
    balance_transaction?: (string | BalanceTransaction) | null;
    card: string | IssuingCard;
    cardholder?: (string | IssuingCardholder) | null;
    created: number;
    currency: string;
    dispute?: (string | IssuingDispute) | null;
    id: string;
    livemode: boolean;
    merchant_amount: number;
    merchant_currency: string;
    merchant_data: IssuingAuthorizationMerchantData;
    metadata: {
        [key: string]: string;
    };
    "object": "issuing.transaction";
    purchase_details?: (IssuingTransactionPurchaseDetails) | null;
    "type": "capture" | "dispute" | "refund";
};
export type IssuingAuthorizationVerificationData = {
    address_line1_check: "match" | "mismatch" | "not_provided";
    address_postal_code_check: "match" | "mismatch" | "not_provided";
    cvc_check: "match" | "mismatch" | "not_provided";
    expiry_check: "match" | "mismatch" | "not_provided";
};
export type IssuingAuthorization = {
    amount: number;
    amount_details?: (IssuingAuthorizationAmountDetails) | null;
    approved: boolean;
    authorization_method: "chip" | "contactless" | "keyed_in" | "online" | "swipe";
    balance_transactions: BalanceTransaction[];
    card: IssuingCard;
    cardholder?: (string | IssuingCardholder) | null;
    created: number;
    currency: string;
    id: string;
    livemode: boolean;
    merchant_amount: number;
    merchant_currency: string;
    merchant_data: IssuingAuthorizationMerchantData;
    metadata: {
        [key: string]: string;
    };
    "object": "issuing.authorization";
    pending_request?: (IssuingAuthorizationPendingRequest) | null;
    request_history: IssuingAuthorizationRequest[];
    status: "closed" | "pending" | "reversed";
    transactions: IssuingTransaction[];
    verification_data: IssuingAuthorizationVerificationData;
    wallet?: string | null;
};
export type DeletedBankAccount = {
    currency?: string | null;
    deleted: true;
    id: string;
    "object": "bank_account";
};
export type DeletedCard = {
    currency?: string | null;
    deleted: true;
    id: string;
    "object": "card";
};
export type Payout = {
    amount: number;
    arrival_date: number;
    automatic: boolean;
    balance_transaction?: (string | BalanceTransaction) | null;
    created: number;
    currency: string;
    description?: string | null;
    destination?: (string | BankAccount | Card | DeletedBankAccount | DeletedCard) | null;
    failure_balance_transaction?: (string | BalanceTransaction) | null;
    failure_code?: string | null;
    failure_message?: string | null;
    id: string;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    method: string;
    "object": "payout";
    original_payout?: (string | Payout) | null;
    reversed_by?: (string | Payout) | null;
    source_type: string;
    statement_descriptor?: string | null;
    status: string;
    "type": "bank_account" | "card";
};
export type PlatformTax = {
    account: string;
    id: string;
    "object": "platform_tax_fee";
    source_transaction: string;
    "type": string;
};
export type Transfer = {
    amount: number;
    amount_reversed: number;
    balance_transaction?: (string | BalanceTransaction) | null;
    created: number;
    currency: string;
    description?: string | null;
    destination?: (string | Account) | null;
    destination_payment?: string | Charge;
    id: string;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    "object": "transfer";
    reversals: {
        data: TransferReversal[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    reversed: boolean;
    source_transaction?: (string | Charge) | null;
    source_type?: string | null;
    transfer_group?: string | null;
};
export type TransferReversal = {
    amount: number;
    balance_transaction?: (string | BalanceTransaction) | null;
    created: number;
    currency: string;
    destination_payment_refund?: (string | Refund) | null;
    id: string;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "transfer_reversal";
    source_refund?: (string | Refund) | null;
    transfer: string | Transfer;
};
export type Refund = {
    amount: number;
    balance_transaction?: (string | BalanceTransaction) | null;
    charge?: (string | Charge) | null;
    created: number;
    currency: string;
    description?: string;
    failure_balance_transaction?: string | BalanceTransaction;
    failure_reason?: string;
    id: string;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "refund";
    payment_intent?: (string | PaymentIntent) | null;
    reason?: string | null;
    receipt_number?: string | null;
    source_transfer_reversal?: (string | TransferReversal) | null;
    status?: string | null;
    transfer_reversal?: (string | TransferReversal) | null;
};
export type ReserveTransaction = {
    amount: number;
    currency: string;
    description?: string | null;
    id: string;
    "object": "reserve_transaction";
};
export type TaxDeductedAtSource = {
    id: string;
    "object": "tax_deducted_at_source";
    period_end: number;
    period_start: number;
    tax_deduction_account_number: string;
};
export type Topup = {
    amount: number;
    balance_transaction?: (string | BalanceTransaction) | null;
    created: number;
    currency: string;
    description?: string | null;
    expected_availability_date?: number | null;
    failure_code?: string | null;
    failure_message?: string | null;
    id: string;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    "object": "topup";
    source: Source;
    statement_descriptor?: string | null;
    status: "canceled" | "failed" | "pending" | "reversed" | "succeeded";
    transfer_group?: string | null;
};
export type BalanceTransaction = {
    amount: number;
    available_on: number;
    created: number;
    currency: string;
    description?: string | null;
    exchange_rate?: number | null;
    fee: number;
    fee_details: Fee[];
    id: string;
    net: number;
    "object": "balance_transaction";
    reporting_category: string;
    source?: (string | PlatformFee | Charge | ConnectCollectionTransfer | Dispute | FeeRefund | IssuingAuthorization | IssuingDispute | IssuingTransaction | Payout | PlatformTax | Refund | ReserveTransaction | TaxDeductedAtSource | Topup | Transfer | TransferReversal) | null;
    status: string;
    "type": "adjustment" | "advance" | "advance_funding" | "anticipation_repayment" | "application_fee" | "application_fee_refund" | "charge" | "connect_collection_transfer" | "contribution" | "issuing_authorization_hold" | "issuing_authorization_release" | "issuing_dispute" | "issuing_transaction" | "payment" | "payment_failure_refund" | "payment_refund" | "payout" | "payout_cancel" | "payout_failure" | "refund" | "refund_failure" | "reserve_transaction" | "reserved_funds" | "stripe_fee" | "stripe_fx_fee" | "tax_fee" | "topup" | "topup_reversal" | "transfer" | "transfer_cancel" | "transfer_failure" | "transfer_refund";
};
export type PlatformFee = {
    account: string | Account;
    amount: number;
    amount_refunded: number;
    application: string | Application;
    balance_transaction?: (string | BalanceTransaction) | null;
    charge: string | Charge;
    created: number;
    currency: string;
    id: string;
    livemode: boolean;
    "object": "application_fee";
    originating_transaction?: (string | Charge) | null;
    refunded: boolean;
    refunds: {
        data: FeeRefund[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
};
export type ChargeFraudDetails = {
    stripe_report?: string;
    user_report?: string;
};
export type Tax_id_verification = {
    status: "pending" | "unavailable" | "unverified" | "verified";
    verified_address?: string | null;
    verified_name?: string | null;
};
export type Tax_id = {
    country?: string | null;
    created: number;
    customer?: (string | Customer) | null;
    id: string;
    livemode: boolean;
    "object": "tax_id";
    "type": "ae_trn" | "au_abn" | "br_cnpj" | "br_cpf" | "ca_bn" | "ca_qst" | "ch_vat" | "cl_tin" | "es_cif" | "eu_vat" | "hk_br" | "id_npwp" | "in_gst" | "jp_cn" | "jp_rn" | "kr_brn" | "li_uid" | "mx_rfc" | "my_frp" | "my_itn" | "my_sst" | "no_vat" | "nz_gst" | "ru_inn" | "ru_kpp" | "sa_vat" | "sg_gst" | "sg_uen" | "th_vat" | "tw_vat" | "unknown" | "us_ein" | "za_vat";
    value: string;
    verification?: (Tax_id_verification) | null;
};
export type Deleted_tax_id = {
    deleted: true;
    id: string;
    "object": "tax_id";
};
export type InvoicesResourceInvoiceTaxID = {
    "type": "ae_trn" | "au_abn" | "br_cnpj" | "br_cpf" | "ca_bn" | "ca_qst" | "ch_vat" | "cl_tin" | "es_cif" | "eu_vat" | "hk_br" | "id_npwp" | "in_gst" | "jp_cn" | "jp_rn" | "kr_brn" | "li_uid" | "mx_rfc" | "my_frp" | "my_itn" | "my_sst" | "no_vat" | "nz_gst" | "ru_inn" | "ru_kpp" | "sa_vat" | "sg_gst" | "sg_uen" | "th_vat" | "tw_vat" | "unknown" | "us_ein" | "za_vat";
    value?: string | null;
};
export type TaxRate = {
    active: boolean;
    created: number;
    description?: string | null;
    display_name: string;
    id: string;
    inclusive: boolean;
    jurisdiction?: string | null;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "tax_rate";
    percentage: number;
};
export type DeletedDiscount = {
    checkout_session?: string | null;
    coupon: Coupon;
    customer?: (string | Customer | DeletedCustomer) | null;
    deleted: true;
    id: string;
    invoice?: string | null;
    invoice_item?: string | null;
    "object": "discount";
    promotion_code?: (string | PromotionCode) | null;
    start: number;
    subscription?: string | null;
};
export type DiscountsResourceDiscountAmount = {
    amount: number;
    discount: string | Discount | DeletedDiscount;
};
export type InvoiceLineItemPeriod = {
    end: number;
    start: number;
};
export type PackageDimensions = {
    height: number;
    length: number;
    weight: number;
    width: number;
};
export type Product = {
    active: boolean;
    attributes?: string[] | null;
    caption?: string | null;
    created: number;
    deactivate_on?: string[];
    description?: string | null;
    id: string;
    images: string[];
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    name: string;
    "object": "product";
    package_dimensions?: (PackageDimensions) | null;
    shippable?: boolean | null;
    statement_descriptor?: string | null;
    unit_label?: string | null;
    updated: number;
    url?: string | null;
};
export type DeletedProduct = {
    deleted: true;
    id: string;
    "object": "product";
};
export type Recurring = {
    aggregate_usage?: ("last_during_period" | "last_ever" | "max" | "sum") | null;
    interval: "day" | "month" | "week" | "year";
    interval_count: number;
    usage_type: "licensed" | "metered";
};
export type PriceTier = {
    flat_amount?: number | null;
    flat_amount_decimal?: string | null;
    unit_amount?: number | null;
    unit_amount_decimal?: string | null;
    up_to?: number | null;
};
export type TransformQuantity = {
    divide_by: number;
    round: "down" | "up";
};
export type Price = {
    active: boolean;
    billing_scheme: "per_unit" | "tiered";
    created: number;
    currency: string;
    id: string;
    livemode: boolean;
    lookup_key?: string | null;
    metadata: {
        [key: string]: string;
    };
    nickname?: string | null;
    "object": "price";
    product: string | Product | DeletedProduct;
    recurring?: (Recurring) | null;
    tiers?: PriceTier[];
    tiers_mode?: ("graduated" | "volume") | null;
    transform_quantity?: (TransformQuantity) | null;
    "type": "one_time" | "recurring";
    unit_amount?: number | null;
    unit_amount_decimal?: string | null;
};
export type InvoiceTaxAmount = {
    amount: number;
    inclusive: boolean;
    tax_rate: string | TaxRate;
};
export type InvoiceLineItem = {
    amount: number;
    currency: string;
    description?: string | null;
    discount_amounts?: DiscountsResourceDiscountAmount[] | null;
    discountable: boolean;
    discounts?: (string | Discount)[] | null;
    id: string;
    invoice_item?: string;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    "object": "line_item";
    period: InvoiceLineItemPeriod;
    price?: (Price) | null;
    proration: boolean;
    quantity?: number | null;
    subscription?: string | null;
    subscription_item?: string;
    tax_amounts?: InvoiceTaxAmount[];
    tax_rates?: TaxRate[];
    "type": "invoiceitem" | "subscription";
};
export type InvoicesStatusTransitions = {
    finalized_at?: number | null;
    marked_uncollectible_at?: number | null;
    paid_at?: number | null;
    voided_at?: number | null;
};
export type SubscriptionBillingThresholds = {
    amount_gte?: number | null;
    reset_billing_cycle_anchor?: boolean | null;
};
export type SubscriptionItemBillingThresholds = {
    usage_gte?: number | null;
};
export type SubscriptionItem = {
    billing_thresholds?: (SubscriptionItemBillingThresholds) | null;
    created: number;
    id: string;
    metadata: {
        [key: string]: string;
    };
    "object": "subscription_item";
    price: Price;
    quantity?: number;
    subscription: string;
    tax_rates?: TaxRate[] | null;
};
export type SubscriptionsResourcePauseCollection = {
    behavior: "keep_as_draft" | "mark_uncollectible" | "void";
    resumes_at?: number | null;
};
export type SubscriptionPendingInvoiceItemInterval = {
    interval: "day" | "month" | "week" | "year";
    interval_count: number;
};
export type SetupIntentNextActionRedirectToUrl = {
    return_url?: string | null;
    url?: string | null;
};
export type SetupIntentNextAction = {
    redirect_to_url?: SetupIntentNextActionRedirectToUrl;
    "type": string;
    use_stripe_sdk?: object;
};
export type Setup_intent_payment_method_options_card = {
    request_three_d_secure?: ("any" | "automatic" | "challenge_only") | null;
};
export type Setup_intent_payment_method_options_mandate_options_sepa_debit = {};
export type Setup_intent_payment_method_options_sepa_debit = {
    mandate_options?: Setup_intent_payment_method_options_mandate_options_sepa_debit;
};
export type SetupIntentPaymentMethodOptions = {
    card?: Setup_intent_payment_method_options_card;
    sepa_debit?: Setup_intent_payment_method_options_sepa_debit;
};
export type SetupIntent = {
    application?: (string | Application) | null;
    cancellation_reason?: ("abandoned" | "duplicate" | "requested_by_customer") | null;
    client_secret?: string | null;
    created: number;
    customer?: (string | Customer | DeletedCustomer) | null;
    description?: string | null;
    id: string;
    last_setup_error?: (APIErrors) | null;
    latest_attempt?: (string | PaymentFlowsSetupIntentSetupAttempt) | null;
    livemode: boolean;
    mandate?: (string | Mandate) | null;
    metadata?: {
        [key: string]: string;
    } | null;
    next_action?: (SetupIntentNextAction) | null;
    "object": "setup_intent";
    on_behalf_of?: (string | Account) | null;
    payment_method?: (string | PaymentMethod) | null;
    payment_method_options?: (SetupIntentPaymentMethodOptions) | null;
    payment_method_types: string[];
    single_use_mandate?: (string | Mandate) | null;
    status: "canceled" | "processing" | "requires_action" | "requires_confirmation" | "requires_payment_method" | "succeeded";
    usage: string;
};
export type SubscriptionsResourcePendingUpdate = {
    billing_cycle_anchor?: number | null;
    expires_at: number;
    subscription_items?: SubscriptionItem[] | null;
    trial_end?: number | null;
    trial_from_plan?: boolean | null;
};
export type SubscriptionScheduleCurrentPhase = {
    end_date: number;
    start_date: number;
};
export type InvoiceSettingSubscriptionScheduleSetting = {
    days_until_due?: number | null;
};
export type SubscriptionTransferData = {
    amount_percent?: number | null;
    destination: string | Account;
};
export type SubscriptionSchedulesResourceDefaultSettings = {
    application_fee_percent?: number | null;
    billing_cycle_anchor: "automatic" | "phase_start";
    billing_thresholds?: (SubscriptionBillingThresholds) | null;
    collection_method?: ("charge_automatically" | "send_invoice") | null;
    default_payment_method?: (string | PaymentMethod) | null;
    invoice_settings?: (InvoiceSettingSubscriptionScheduleSetting) | null;
    transfer_data?: (SubscriptionTransferData) | null;
};
export type DeletedPrice = {
    deleted: true;
    id: string;
    "object": "price";
};
export type SubscriptionScheduleAddInvoiceItem = {
    price: string | Price | DeletedPrice;
    quantity?: number | null;
    tax_rates?: TaxRate[] | null;
};
export type DeletedCoupon = {
    deleted: true;
    id: string;
    "object": "coupon";
};
export type SubscriptionScheduleConfigurationItem = {
    billing_thresholds?: (SubscriptionItemBillingThresholds) | null;
    price: string | Price | DeletedPrice;
    quantity?: number;
    tax_rates?: TaxRate[] | null;
};
export type SubscriptionSchedulePhaseConfiguration = {
    add_invoice_items: SubscriptionScheduleAddInvoiceItem[];
    application_fee_percent?: number | null;
    billing_cycle_anchor?: ("automatic" | "phase_start") | null;
    billing_thresholds?: (SubscriptionBillingThresholds) | null;
    collection_method?: ("charge_automatically" | "send_invoice") | null;
    coupon?: (string | Coupon | DeletedCoupon) | null;
    default_payment_method?: (string | PaymentMethod) | null;
    default_tax_rates?: TaxRate[] | null;
    end_date: number;
    invoice_settings?: (InvoiceSettingSubscriptionScheduleSetting) | null;
    items: SubscriptionScheduleConfigurationItem[];
    proration_behavior: "always_invoice" | "create_prorations" | "none";
    start_date: number;
    transfer_data?: (SubscriptionTransferData) | null;
    trial_end?: number | null;
};
export type SubscriptionSchedule = {
    canceled_at?: number | null;
    completed_at?: number | null;
    created: number;
    current_phase?: (SubscriptionScheduleCurrentPhase) | null;
    customer: string | Customer | DeletedCustomer;
    default_settings: SubscriptionSchedulesResourceDefaultSettings;
    end_behavior: "cancel" | "none" | "release" | "renew";
    id: string;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "subscription_schedule";
    phases: SubscriptionSchedulePhaseConfiguration[];
    released_at?: number | null;
    released_subscription?: string | null;
    status: "active" | "canceled" | "completed" | "not_started" | "released";
    subscription?: (string | Subscription) | null;
};
export type Subscription = {
    application_fee_percent?: number | null;
    billing_cycle_anchor: number;
    billing_thresholds?: (SubscriptionBillingThresholds) | null;
    cancel_at?: number | null;
    cancel_at_period_end: boolean;
    canceled_at?: number | null;
    collection_method?: ("charge_automatically" | "send_invoice") | null;
    created: number;
    current_period_end: number;
    current_period_start: number;
    customer: string | Customer | DeletedCustomer;
    days_until_due?: number | null;
    default_payment_method?: (string | PaymentMethod) | null;
    default_source?: (string | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source) | null;
    default_tax_rates?: TaxRate[] | null;
    discount?: (Discount) | null;
    ended_at?: number | null;
    id: string;
    items: {
        data: SubscriptionItem[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    latest_invoice?: (string | Invoice) | null;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    next_pending_invoice_item_invoice?: number | null;
    "object": "subscription";
    pause_collection?: (SubscriptionsResourcePauseCollection) | null;
    pending_invoice_item_interval?: (SubscriptionPendingInvoiceItemInterval) | null;
    pending_setup_intent?: (string | SetupIntent) | null;
    pending_update?: (SubscriptionsResourcePendingUpdate) | null;
    schedule?: (string | SubscriptionSchedule) | null;
    start_date: number;
    status: "active" | "canceled" | "incomplete" | "incomplete_expired" | "past_due" | "trialing" | "unpaid";
    transfer_data?: (SubscriptionTransferData) | null;
    trial_end?: number | null;
    trial_start?: number | null;
};
export type InvoiceItemThresholdReason = {
    line_item_ids: string[];
    usage_gte: number;
};
export type InvoiceThresholdReason = {
    amount_gte?: number | null;
    item_reasons: InvoiceItemThresholdReason[];
};
export type InvoiceTransferData = {
    amount?: number | null;
    destination: string | Account;
};
export type Invoice = {
    account_country?: string | null;
    account_name?: string | null;
    account_tax_ids?: (string | Tax_id | Deleted_tax_id)[] | null;
    amount_due: number;
    amount_paid: number;
    amount_remaining: number;
    application_fee_amount?: number | null;
    attempt_count: number;
    attempted: boolean;
    auto_advance?: boolean;
    billing_reason?: ("automatic_pending_invoice_item_invoice" | "manual" | "subscription" | "subscription_create" | "subscription_cycle" | "subscription_threshold" | "subscription_update" | "upcoming") | null;
    charge?: (string | Charge) | null;
    collection_method?: ("charge_automatically" | "send_invoice") | null;
    created: number;
    currency: string;
    custom_fields?: InvoiceSettingCustomField[] | null;
    customer: string | Customer | DeletedCustomer;
    customer_address?: (Address) | null;
    customer_email?: string | null;
    customer_name?: string | null;
    customer_phone?: string | null;
    customer_shipping?: (Shipping) | null;
    customer_tax_exempt?: ("exempt" | "none" | "reverse") | null;
    customer_tax_ids?: InvoicesResourceInvoiceTaxID[] | null;
    default_payment_method?: (string | PaymentMethod) | null;
    default_source?: (string | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source) | null;
    default_tax_rates: TaxRate[];
    description?: string | null;
    discount?: (Discount) | null;
    discounts?: (string | Discount | DeletedDiscount)[] | null;
    due_date?: number | null;
    ending_balance?: number | null;
    footer?: string | null;
    hosted_invoice_url?: string | null;
    id?: string;
    invoice_pdf?: string | null;
    last_finalization_error?: (APIErrors) | null;
    lines: {
        data: InvoiceLineItem[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    next_payment_attempt?: number | null;
    "number"?: string | null;
    "object": "invoice";
    paid: boolean;
    payment_intent?: (string | PaymentIntent) | null;
    period_end: number;
    period_start: number;
    post_payment_credit_notes_amount: number;
    pre_payment_credit_notes_amount: number;
    receipt_number?: string | null;
    starting_balance: number;
    statement_descriptor?: string | null;
    status?: ("deleted" | "draft" | "open" | "paid" | "uncollectible" | "void") | null;
    status_transitions: InvoicesStatusTransitions;
    subscription?: (string | Subscription) | null;
    subscription_proration_date?: number;
    subtotal: number;
    tax?: number | null;
    threshold_reason?: InvoiceThresholdReason;
    total: number;
    total_discount_amounts?: DiscountsResourceDiscountAmount[] | null;
    total_tax_amounts: InvoiceTaxAmount[];
    transfer_data?: (InvoiceTransferData) | null;
    webhooks_delivered_at?: number | null;
};
export type Inventory = {
    quantity?: number | null;
    "type": string;
    value?: string | null;
};
export type Sku = {
    active: boolean;
    attributes: {
        [key: string]: string;
    };
    created: number;
    currency: string;
    id: string;
    image?: string | null;
    inventory: Inventory;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    "object": "sku";
    package_dimensions?: (PackageDimensions) | null;
    price: number;
    product: string | Product;
    updated: number;
};
export type OrderItem = {
    amount: number;
    currency: string;
    description: string;
    "object": "order_item";
    parent?: (string | Sku) | null;
    quantity?: number | null;
    "type": string;
};
export type OrderReturn = {
    amount: number;
    created: number;
    currency: string;
    id: string;
    items: OrderItem[];
    livemode: boolean;
    "object": "order_return";
    order?: (string | Order) | null;
    refund?: (string | Refund) | null;
};
export type DeliveryEstimate = {
    date?: string;
    earliest?: string;
    latest?: string;
    "type": string;
};
export type ShippingMethod = {
    amount: number;
    currency: string;
    delivery_estimate?: (DeliveryEstimate) | null;
    description: string;
    id: string;
};
export type StatusTransitions = {
    canceled?: number | null;
    fulfiled?: number | null;
    paid?: number | null;
    returned?: number | null;
};
export type Order = {
    amount: number;
    amount_returned?: number | null;
    application?: string | null;
    application_fee?: number | null;
    charge?: (string | Charge) | null;
    created: number;
    currency: string;
    customer?: (string | Customer | DeletedCustomer) | null;
    email?: string | null;
    external_coupon_code?: string;
    id: string;
    items: OrderItem[];
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "order";
    returns?: {
        data: OrderReturn[];
        has_more: boolean;
        "object": "list";
        url: string;
    } | null;
    selected_shipping_method?: string | null;
    shipping?: (Shipping) | null;
    shipping_methods?: ShippingMethod[] | null;
    status: string;
    status_transitions?: (StatusTransitions) | null;
    updated?: number | null;
    upstream_id?: string;
};
export type RadarRule = {
    action: string;
    id: string;
    predicate: string;
};
export type ChargeOutcome = {
    network_status?: string | null;
    reason?: string | null;
    risk_level?: string;
    risk_score?: number;
    rule?: string | RadarRule;
    seller_message?: string | null;
    "type": string;
};
export type Payment_method_details_ach_credit_transfer = {
    account_number?: string | null;
    bank_name?: string | null;
    routing_number?: string | null;
    swift_code?: string | null;
};
export type Payment_method_details_ach_debit = {
    account_holder_type?: ("company" | "individual") | null;
    bank_name?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    routing_number?: string | null;
};
export type PaymentFlowsPrivatePaymentMethodsAlipayDetails = {
    fingerprint?: string | null;
    transaction_id?: string | null;
};
export type Payment_method_details_au_becs_debit = {
    bsb_number?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    mandate?: string;
};
export type Payment_method_details_bacs_debit = {
    fingerprint?: string | null;
    last4?: string | null;
    mandate?: string | null;
    sort_code?: string | null;
};
export type Payment_method_details_bancontact = {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    generated_sepa_debit?: (string | PaymentMethod) | null;
    generated_sepa_debit_mandate?: (string | Mandate) | null;
    iban_last4?: string | null;
    preferred_language?: ("de" | "en" | "fr" | "nl") | null;
    verified_name?: string | null;
};
export type Payment_method_details_card_checks = {
    address_line1_check?: string | null;
    address_postal_code_check?: string | null;
    cvc_check?: string | null;
};
export type Payment_method_details_card_installments_plan = {
    count?: number | null;
    interval?: "month" | null;
    "type": "fixed_count";
};
export type Payment_method_details_card_installments = {
    plan?: (Payment_method_details_card_installments_plan) | null;
};
export type Payment_method_details_card_wallet_amex_express_checkout = {};
export type Payment_method_details_card_wallet_apple_pay = {};
export type Payment_method_details_card_wallet_google_pay = {};
export type Payment_method_details_card_wallet_masterpass = {
    billing_address?: (Address) | null;
    email?: string | null;
    name?: string | null;
    shipping_address?: (Address) | null;
};
export type Payment_method_details_card_wallet_samsung_pay = {};
export type Payment_method_details_card_wallet_visa_checkout = {
    billing_address?: (Address) | null;
    email?: string | null;
    name?: string | null;
    shipping_address?: (Address) | null;
};
export type Payment_method_details_card_wallet = {
    amex_express_checkout?: Payment_method_details_card_wallet_amex_express_checkout;
    apple_pay?: Payment_method_details_card_wallet_apple_pay;
    dynamic_last4?: string | null;
    google_pay?: Payment_method_details_card_wallet_google_pay;
    masterpass?: Payment_method_details_card_wallet_masterpass;
    samsung_pay?: Payment_method_details_card_wallet_samsung_pay;
    "type": "amex_express_checkout" | "apple_pay" | "google_pay" | "masterpass" | "samsung_pay" | "visa_checkout";
    visa_checkout?: Payment_method_details_card_wallet_visa_checkout;
};
export type Payment_method_details_card = {
    brand?: string | null;
    checks?: (Payment_method_details_card_checks) | null;
    country?: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint?: string | null;
    funding?: string | null;
    installments?: (Payment_method_details_card_installments) | null;
    last4?: string | null;
    network?: string | null;
    three_d_secure?: (Three_d_secure_details) | null;
    wallet?: (Payment_method_details_card_wallet) | null;
};
export type Payment_method_details_eps = {
    bank?: ("arzte_und_apotheker_bank" | "austrian_anadi_bank_ag" | "bank_austria" | "bankhaus_carl_spangler" | "bankhaus_schelhammer_und_schattera_ag" | "bawag_psk_ag" | "bks_bank_ag" | "brull_kallmus_bank_ag" | "btv_vier_lander_bank" | "capital_bank_grawe_gruppe_ag" | "dolomitenbank" | "easybank_ag" | "erste_bank_und_sparkassen" | "hypo_alpeadriabank_international_ag" | "hypo_bank_burgenland_aktiengesellschaft" | "hypo_noe_lb_fur_niederosterreich_u_wien" | "hypo_oberosterreich_salzburg_steiermark" | "hypo_tirol_bank_ag" | "hypo_vorarlberg_bank_ag" | "marchfelder_bank" | "oberbank_ag" | "raiffeisen_bankengruppe_osterreich" | "schoellerbank_ag" | "sparda_bank_wien" | "volksbank_gruppe" | "volkskreditbank_ag" | "vr_bank_braunau") | null;
    verified_name?: string | null;
};
export type Payment_method_details_fpx = {
    bank: "affin_bank" | "alliance_bank" | "ambank" | "bank_islam" | "bank_muamalat" | "bank_rakyat" | "bsn" | "cimb" | "deutsche_bank" | "hong_leong_bank" | "hsbc" | "kfh" | "maybank2e" | "maybank2u" | "ocbc" | "pb_enterprise" | "public_bank" | "rhb" | "standard_chartered" | "uob";
    transaction_id?: string | null;
};
export type Payment_method_details_giropay = {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    verified_name?: string | null;
};
export type Payment_method_details_grabpay = {
    transaction_id?: string | null;
};
export type Payment_method_details_ideal = {
    bank?: ("abn_amro" | "asn_bank" | "bunq" | "handelsbanken" | "ing" | "knab" | "moneyou" | "rabobank" | "regiobank" | "sns_bank" | "triodos_bank" | "van_lanschot") | null;
    bic?: ("ABNANL2A" | "ASNBNL21" | "BUNQNL2A" | "FVLBNL22" | "HANDNL2A" | "INGBNL2A" | "KNABNL2H" | "MOYONL21" | "RABONL2U" | "RBRBNL21" | "SNSBNL2A" | "TRIONL2U") | null;
    generated_sepa_debit?: (string | PaymentMethod) | null;
    generated_sepa_debit_mandate?: (string | Mandate) | null;
    iban_last4?: string | null;
    verified_name?: string | null;
};
export type Payment_method_details_interac_present_receipt = {
    account_type?: "checking" | "savings" | "unknown";
    application_cryptogram?: string | null;
    application_preferred_name?: string | null;
    authorization_code?: string | null;
    authorization_response_code?: string | null;
    cardholder_verification_method?: string | null;
    dedicated_file_name?: string | null;
    terminal_verification_results?: string | null;
    transaction_status_information?: string | null;
};
export type Payment_method_details_interac_present = {
    brand?: string | null;
    cardholder_name?: string | null;
    country?: string | null;
    emv_auth_data?: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint?: string | null;
    funding?: string | null;
    generated_card?: string | null;
    last4?: string | null;
    network?: string | null;
    preferred_locales?: string[] | null;
    read_method?: ("contact_emv" | "contactless_emv" | "contactless_magstripe_mode" | "magnetic_stripe_fallback" | "magnetic_stripe_track2") | null;
    receipt?: (Payment_method_details_interac_present_receipt) | null;
};
export type Payment_method_details_klarna = {};
export type Payment_method_details_multibanco = {
    entity?: string | null;
    reference?: string | null;
};
export type Payment_method_details_oxxo = {
    "number"?: string | null;
};
export type Payment_method_details_p24 = {
    bank?: ("alior_bank" | "bank_millennium" | "bank_nowy_bfg_sa" | "bank_pekao_sa" | "banki_spbdzielcze" | "blik" | "bnp_paribas" | "boz" | "citi_handlowy" | "credit_agricole" | "envelobank" | "etransfer_pocztowy24" | "getin_bank" | "ideabank" | "ing" | "inteligo" | "mbank_mtransfer" | "nest_przelew" | "noble_pay" | "pbac_z_ipko" | "plus_bank" | "santander_przelew24" | "tmobile_usbugi_bankowe" | "toyota_bank" | "volkswagen_bank") | null;
    reference?: string | null;
    verified_name?: string | null;
};
export type Payment_method_details_sepa_debit = {
    bank_code?: string | null;
    branch_code?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    last4?: string | null;
    mandate?: string | null;
};
export type Payment_method_details_sofort = {
    bank_code?: string | null;
    bank_name?: string | null;
    bic?: string | null;
    country?: string | null;
    generated_sepa_debit?: (string | PaymentMethod) | null;
    generated_sepa_debit_mandate?: (string | Mandate) | null;
    iban_last4?: string | null;
    preferred_language?: ("de" | "en" | "es" | "fr" | "it" | "nl" | "pl") | null;
    verified_name?: string | null;
};
export type Payment_method_details_stripe_account = {};
export type Payment_method_details_wechat = {};
export type Payment_method_details = {
    ach_credit_transfer?: Payment_method_details_ach_credit_transfer;
    ach_debit?: Payment_method_details_ach_debit;
    alipay?: PaymentFlowsPrivatePaymentMethodsAlipayDetails;
    au_becs_debit?: Payment_method_details_au_becs_debit;
    bacs_debit?: Payment_method_details_bacs_debit;
    bancontact?: Payment_method_details_bancontact;
    card?: Payment_method_details_card;
    card_present?: Payment_method_details_card_present;
    eps?: Payment_method_details_eps;
    fpx?: Payment_method_details_fpx;
    giropay?: Payment_method_details_giropay;
    grabpay?: Payment_method_details_grabpay;
    ideal?: Payment_method_details_ideal;
    interac_present?: Payment_method_details_interac_present;
    klarna?: Payment_method_details_klarna;
    multibanco?: Payment_method_details_multibanco;
    oxxo?: Payment_method_details_oxxo;
    p24?: Payment_method_details_p24;
    sepa_debit?: Payment_method_details_sepa_debit;
    sofort?: Payment_method_details_sofort;
    stripe_account?: Payment_method_details_stripe_account;
    "type": string;
    wechat?: Payment_method_details_wechat;
};
export type RadarReviewResourceLocation = {
    city?: string | null;
    country?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    region?: string | null;
};
export type RadarReviewResourceSession = {
    browser?: string | null;
    device?: string | null;
    platform?: string | null;
    version?: string | null;
};
export type RadarReview = {
    billing_zip?: string | null;
    charge?: (string | Charge) | null;
    closed_reason?: ("approved" | "disputed" | "refunded" | "refunded_as_fraud") | null;
    created: number;
    id: string;
    ip_address?: string | null;
    ip_address_location?: (RadarReviewResourceLocation) | null;
    livemode: boolean;
    "object": "review";
    open: boolean;
    opened_reason: "manual" | "rule";
    payment_intent?: string | PaymentIntent;
    reason: string;
    session?: (RadarReviewResourceSession) | null;
};
export type ChargeTransferData = {
    amount?: number | null;
    destination: string | Account;
};
export type Charge = {
    amount: number;
    amount_captured: number;
    amount_refunded: number;
    application?: (string | Application) | null;
    application_fee?: (string | PlatformFee) | null;
    application_fee_amount?: number | null;
    balance_transaction?: (string | BalanceTransaction) | null;
    billing_details: Billing_details;
    calculated_statement_descriptor?: string | null;
    captured: boolean;
    created: number;
    currency: string;
    customer?: (string | Customer | DeletedCustomer) | null;
    description?: string | null;
    disputed: boolean;
    failure_code?: string | null;
    failure_message?: string | null;
    fraud_details?: (ChargeFraudDetails) | null;
    id: string;
    invoice?: (string | Invoice) | null;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    "object": "charge";
    on_behalf_of?: (string | Account) | null;
    order?: (string | Order) | null;
    outcome?: (ChargeOutcome) | null;
    paid: boolean;
    payment_intent?: (string | PaymentIntent) | null;
    payment_method?: string | null;
    payment_method_details?: (Payment_method_details) | null;
    receipt_email?: string | null;
    receipt_number?: string | null;
    receipt_url?: string | null;
    refunded: boolean;
    refunds: {
        data: Refund[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    review?: (string | RadarReview) | null;
    shipping?: (Shipping) | null;
    source_transfer?: (string | Transfer) | null;
    statement_descriptor?: string | null;
    statement_descriptor_suffix?: string | null;
    status: string;
    transfer?: string | Transfer;
    transfer_data?: (ChargeTransferData) | null;
    transfer_group?: string | null;
};
export type PaymentIntentNextActionAlipayHandleRedirect = {
    native_data?: string | null;
    native_url?: string | null;
    return_url?: string | null;
    url?: string | null;
};
export type PaymentIntentNextActionDisplayOxxoDetails = {
    expires_after?: number | null;
    hosted_voucher_url?: string | null;
    "number"?: string | null;
};
export type PaymentIntentNextActionRedirectToUrl = {
    return_url?: string | null;
    url?: string | null;
};
export type PaymentIntentNextAction = {
    alipay_handle_redirect?: PaymentIntentNextActionAlipayHandleRedirect;
    oxxo_display_details?: PaymentIntentNextActionDisplayOxxoDetails;
    redirect_to_url?: PaymentIntentNextActionRedirectToUrl;
    "type": string;
    use_stripe_sdk?: object;
};
export type Payment_method_options_alipay = {};
export type Payment_method_options_bancontact = {
    preferred_language: "de" | "en" | "fr" | "nl";
};
export type Payment_method_options_card_installments = {
    available_plans?: Payment_method_details_card_installments_plan[] | null;
    enabled: boolean;
    plan?: (Payment_method_details_card_installments_plan) | null;
};
export type Payment_intent_payment_method_options_card = {
    installments?: (Payment_method_options_card_installments) | null;
    network?: ("amex" | "cartes_bancaires" | "diners" | "discover" | "interac" | "jcb" | "mastercard" | "unionpay" | "unknown" | "visa") | null;
    request_three_d_secure?: ("any" | "automatic" | "challenge_only") | null;
};
export type Payment_method_options_oxxo = {
    expires_after_days: number;
};
export type Payment_method_options_p24 = {};
export type Payment_intent_payment_method_options_mandate_options_sepa_debit = {};
export type Payment_intent_payment_method_options_sepa_debit = {
    mandate_options?: Payment_intent_payment_method_options_mandate_options_sepa_debit;
};
export type Payment_method_options_sofort = {
    preferred_language?: ("de" | "en" | "es" | "fr" | "it" | "nl" | "pl") | null;
};
export type PaymentIntentPaymentMethodOptions = {
    alipay?: Payment_method_options_alipay;
    bancontact?: Payment_method_options_bancontact;
    card?: Payment_intent_payment_method_options_card;
    oxxo?: Payment_method_options_oxxo;
    p24?: Payment_method_options_p24;
    sepa_debit?: Payment_intent_payment_method_options_sepa_debit;
    sofort?: Payment_method_options_sofort;
};
export type Transfer_data = {
    amount?: number;
    destination: string | Account;
};
export type PaymentIntent = {
    amount: number;
    amount_capturable?: number;
    amount_received?: number;
    application?: (string | Application) | null;
    application_fee_amount?: number | null;
    canceled_at?: number | null;
    cancellation_reason?: ("abandoned" | "automatic" | "duplicate" | "failed_invoice" | "fraudulent" | "requested_by_customer" | "void_invoice") | null;
    capture_method: "automatic" | "manual";
    charges?: {
        data: Charge[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    client_secret?: string | null;
    confirmation_method: "automatic" | "manual";
    created: number;
    currency: string;
    customer?: (string | Customer | DeletedCustomer) | null;
    description?: string | null;
    id: string;
    invoice?: (string | Invoice) | null;
    last_payment_error?: (APIErrors) | null;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    };
    next_action?: (PaymentIntentNextAction) | null;
    "object": "payment_intent";
    on_behalf_of?: (string | Account) | null;
    payment_method?: (string | PaymentMethod) | null;
    payment_method_options?: (PaymentIntentPaymentMethodOptions) | null;
    payment_method_types: string[];
    receipt_email?: string | null;
    review?: (string | RadarReview) | null;
    setup_future_usage?: ("off_session" | "on_session") | null;
    shipping?: (Shipping) | null;
    statement_descriptor?: string | null;
    statement_descriptor_suffix?: string | null;
    status: "canceled" | "processing" | "requires_action" | "requires_capture" | "requires_confirmation" | "requires_payment_method" | "succeeded";
    transfer_data?: (Transfer_data) | null;
    transfer_group?: string | null;
};
export type APIErrors = {
    charge?: string;
    code?: string;
    decline_code?: string;
    doc_url?: string;
    message?: string;
    param?: string;
    payment_intent?: PaymentIntent;
    payment_method?: PaymentMethod;
    payment_method_type?: string;
    setup_intent?: SetupIntent;
    source?: BankAccount | Card | Source;
    "type": "api_connection_error" | "api_error" | "authentication_error" | "card_error" | "idempotency_error" | "invalid_request_error" | "rate_limit_error";
};
export type PaymentFlowsSetupIntentSetupAttempt = {
    application?: (string | Application) | null;
    created: number;
    customer?: (string | Customer | DeletedCustomer) | null;
    id: string;
    livemode: boolean;
    "object": "setup_attempt";
    on_behalf_of?: (string | Account) | null;
    payment_method: string | PaymentMethod;
    payment_method_details: SetupAttemptPaymentMethodDetails;
    setup_error?: (APIErrors) | null;
    setup_intent: string | SetupIntent;
    status: string;
    usage: string;
};
export type Payment_method_card_generated_card = {
    charge?: string | null;
    payment_method_details?: (Card_generated_from_payment_method_details) | null;
    setup_attempt?: (string | PaymentFlowsSetupIntentSetupAttempt) | null;
};
export type Networks = {
    available: string[];
    preferred?: string | null;
};
export type Three_d_secure_usage = {
    supported: boolean;
};
export type Payment_method_card_wallet_amex_express_checkout = {};
export type Payment_method_card_wallet_apple_pay = {};
export type Payment_method_card_wallet_google_pay = {};
export type Payment_method_card_wallet_masterpass = {
    billing_address?: (Address) | null;
    email?: string | null;
    name?: string | null;
    shipping_address?: (Address) | null;
};
export type Payment_method_card_wallet_samsung_pay = {};
export type Payment_method_card_wallet_visa_checkout = {
    billing_address?: (Address) | null;
    email?: string | null;
    name?: string | null;
    shipping_address?: (Address) | null;
};
export type Payment_method_card_wallet = {
    amex_express_checkout?: Payment_method_card_wallet_amex_express_checkout;
    apple_pay?: Payment_method_card_wallet_apple_pay;
    dynamic_last4?: string | null;
    google_pay?: Payment_method_card_wallet_google_pay;
    masterpass?: Payment_method_card_wallet_masterpass;
    samsung_pay?: Payment_method_card_wallet_samsung_pay;
    "type": "amex_express_checkout" | "apple_pay" | "google_pay" | "masterpass" | "samsung_pay" | "visa_checkout";
    visa_checkout?: Payment_method_card_wallet_visa_checkout;
};
export type Payment_method_card = {
    brand: string;
    checks?: (Payment_method_card_checks) | null;
    country?: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint?: string | null;
    funding: string;
    generated_from?: (Payment_method_card_generated_card) | null;
    last4: string;
    networks?: (Networks) | null;
    three_d_secure_usage?: (Three_d_secure_usage) | null;
    wallet?: (Payment_method_card_wallet) | null;
};
export type Payment_method_card_present = {};
export type Payment_method_eps = {
    bank?: ("arzte_und_apotheker_bank" | "austrian_anadi_bank_ag" | "bank_austria" | "bankhaus_carl_spangler" | "bankhaus_schelhammer_und_schattera_ag" | "bawag_psk_ag" | "bks_bank_ag" | "brull_kallmus_bank_ag" | "btv_vier_lander_bank" | "capital_bank_grawe_gruppe_ag" | "dolomitenbank" | "easybank_ag" | "erste_bank_und_sparkassen" | "hypo_alpeadriabank_international_ag" | "hypo_bank_burgenland_aktiengesellschaft" | "hypo_noe_lb_fur_niederosterreich_u_wien" | "hypo_oberosterreich_salzburg_steiermark" | "hypo_tirol_bank_ag" | "hypo_vorarlberg_bank_ag" | "marchfelder_bank" | "oberbank_ag" | "raiffeisen_bankengruppe_osterreich" | "schoellerbank_ag" | "sparda_bank_wien" | "volksbank_gruppe" | "volkskreditbank_ag" | "vr_bank_braunau") | null;
};
export type Payment_method_fpx = {
    bank: "affin_bank" | "alliance_bank" | "ambank" | "bank_islam" | "bank_muamalat" | "bank_rakyat" | "bsn" | "cimb" | "deutsche_bank" | "hong_leong_bank" | "hsbc" | "kfh" | "maybank2e" | "maybank2u" | "ocbc" | "pb_enterprise" | "public_bank" | "rhb" | "standard_chartered" | "uob";
};
export type Payment_method_giropay = {};
export type Payment_method_grabpay = {};
export type Payment_method_ideal = {
    bank?: ("abn_amro" | "asn_bank" | "bunq" | "handelsbanken" | "ing" | "knab" | "moneyou" | "rabobank" | "regiobank" | "sns_bank" | "triodos_bank" | "van_lanschot") | null;
    bic?: ("ABNANL2A" | "ASNBNL21" | "BUNQNL2A" | "FVLBNL22" | "HANDNL2A" | "INGBNL2A" | "KNABNL2H" | "MOYONL21" | "RABONL2U" | "RBRBNL21" | "SNSBNL2A" | "TRIONL2U") | null;
};
export type Payment_method_interac_present = {};
export type Payment_method_oxxo = {};
export type Payment_method_p24 = {
    bank?: ("alior_bank" | "bank_millennium" | "bank_nowy_bfg_sa" | "bank_pekao_sa" | "banki_spbdzielcze" | "blik" | "bnp_paribas" | "boz" | "citi_handlowy" | "credit_agricole" | "envelobank" | "etransfer_pocztowy24" | "getin_bank" | "ideabank" | "ing" | "inteligo" | "mbank_mtransfer" | "nest_przelew" | "noble_pay" | "pbac_z_ipko" | "plus_bank" | "santander_przelew24" | "tmobile_usbugi_bankowe" | "toyota_bank" | "volkswagen_bank") | null;
};
export type Sepa_debit_generated_from = {
    charge?: (string | Charge) | null;
    setup_attempt?: (string | PaymentFlowsSetupIntentSetupAttempt) | null;
};
export type Payment_method_sepa_debit = {
    bank_code?: string | null;
    branch_code?: string | null;
    country?: string | null;
    fingerprint?: string | null;
    generated_from?: (Sepa_debit_generated_from) | null;
    last4?: string | null;
};
export type Payment_method_sofort = {
    country?: string | null;
};
export type PaymentMethod = {
    alipay?: PaymentFlowsPrivatePaymentMethodsAlipay;
    au_becs_debit?: Payment_method_au_becs_debit;
    bacs_debit?: Payment_method_bacs_debit;
    bancontact?: Payment_method_bancontact;
    billing_details: Billing_details;
    card?: Payment_method_card;
    card_present?: Payment_method_card_present;
    created: number;
    customer?: (string | Customer) | null;
    eps?: Payment_method_eps;
    fpx?: Payment_method_fpx;
    giropay?: Payment_method_giropay;
    grabpay?: Payment_method_grabpay;
    id: string;
    ideal?: Payment_method_ideal;
    interac_present?: Payment_method_interac_present;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "payment_method";
    oxxo?: Payment_method_oxxo;
    p24?: Payment_method_p24;
    sepa_debit?: Payment_method_sepa_debit;
    sofort?: Payment_method_sofort;
    "type": "alipay" | "au_becs_debit" | "bacs_debit" | "bancontact" | "card" | "card_present" | "eps" | "fpx" | "giropay" | "grabpay" | "ideal" | "interac_present" | "oxxo" | "p24" | "sepa_debit" | "sofort";
};
export type InvoiceSettingCustomerSetting = {
    custom_fields?: InvoiceSettingCustomField[] | null;
    default_payment_method?: (string | PaymentMethod) | null;
    footer?: string | null;
};
export type Customer = {
    address?: (Address) | null;
    balance?: number;
    created: number;
    currency?: string | null;
    default_source?: (string | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source) | null;
    delinquent?: boolean | null;
    description?: string | null;
    discount?: (Discount) | null;
    email?: string | null;
    id: string;
    invoice_prefix?: string | null;
    invoice_settings?: InvoiceSettingCustomerSetting;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    };
    name?: string | null;
    next_invoice_sequence?: number;
    "object": "customer";
    phone?: string | null;
    preferred_locales?: string[] | null;
    shipping?: (Shipping) | null;
    sources?: {
        data: (AlipayAccount | BankAccount | BitcoinReceiver | Card | Source)[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    subscriptions?: {
        data: Subscription[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    tax_exempt?: ("exempt" | "none" | "reverse") | null;
    tax_ids?: {
        data: Tax_id[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
};
export type BankAccount = {
    account?: (string | Account) | null;
    account_holder_name?: string | null;
    account_holder_type?: string | null;
    available_payout_methods?: ("instant" | "standard")[] | null;
    bank_name?: string | null;
    country: string;
    currency: string;
    customer?: (string | Customer | DeletedCustomer) | null;
    default_for_currency?: boolean | null;
    fingerprint?: string | null;
    id: string;
    last4: string;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "bank_account";
    routing_number?: string | null;
    status: string;
};
export type LegalEntityDOB = {
    day?: number | null;
    month?: number | null;
    year?: number | null;
};
export type PersonRelationship = {
    director?: boolean | null;
    executive?: boolean | null;
    owner?: boolean | null;
    percent_ownership?: number | null;
    representative?: boolean | null;
    title?: string | null;
};
export type AccountRequirementsError = {
    code: "invalid_address_city_state_postal_code" | "invalid_street_address" | "invalid_value_other" | "verification_document_address_mismatch" | "verification_document_address_missing" | "verification_document_corrupt" | "verification_document_country_not_supported" | "verification_document_dob_mismatch" | "verification_document_duplicate_type" | "verification_document_expired" | "verification_document_failed_copy" | "verification_document_failed_greyscale" | "verification_document_failed_other" | "verification_document_failed_test_mode" | "verification_document_fraudulent" | "verification_document_id_number_mismatch" | "verification_document_id_number_missing" | "verification_document_incomplete" | "verification_document_invalid" | "verification_document_issue_or_expiry_date_missing" | "verification_document_manipulated" | "verification_document_missing_back" | "verification_document_missing_front" | "verification_document_name_mismatch" | "verification_document_name_missing" | "verification_document_nationality_mismatch" | "verification_document_not_readable" | "verification_document_not_signed" | "verification_document_not_uploaded" | "verification_document_photo_mismatch" | "verification_document_too_large" | "verification_document_type_not_supported" | "verification_failed_address_match" | "verification_failed_business_iec_number" | "verification_failed_document_match" | "verification_failed_id_number_match" | "verification_failed_keyed_identity" | "verification_failed_keyed_match" | "verification_failed_name_match" | "verification_failed_other" | "verification_failed_tax_id_match" | "verification_failed_tax_id_not_issued";
    reason: string;
    requirement: string;
};
export type PersonRequirements = {
    currently_due: string[];
    errors: AccountRequirementsError[];
    eventually_due: string[];
    past_due: string[];
    pending_verification: string[];
};
export type LegalEntityPersonVerificationDocument = {
    back?: (string | File) | null;
    details?: string | null;
    details_code?: string | null;
    front?: (string | File) | null;
};
export type LegalEntityPersonVerification = {
    additional_document?: (LegalEntityPersonVerificationDocument) | null;
    details?: string | null;
    details_code?: string | null;
    document?: LegalEntityPersonVerificationDocument;
    status: string;
};
export type Person = {
    account: string;
    address?: Address;
    address_kana?: (LegalEntityJapanAddress) | null;
    address_kanji?: (LegalEntityJapanAddress) | null;
    created: number;
    dob?: LegalEntityDOB;
    email?: string | null;
    first_name?: string | null;
    first_name_kana?: string | null;
    first_name_kanji?: string | null;
    gender?: string | null;
    id: string;
    id_number_provided?: boolean;
    last_name?: string | null;
    last_name_kana?: string | null;
    last_name_kanji?: string | null;
    maiden_name?: string | null;
    metadata?: {
        [key: string]: string;
    };
    "object": "person";
    phone?: string | null;
    political_exposure?: "existing" | "none";
    relationship?: PersonRelationship;
    requirements?: (PersonRequirements) | null;
    ssn_last_4_provided?: boolean;
    verification?: LegalEntityPersonVerification;
};
export type AccountRequirements = {
    current_deadline?: number | null;
    currently_due?: string[] | null;
    disabled_reason?: string | null;
    errors?: AccountRequirementsError[] | null;
    eventually_due?: string[] | null;
    past_due?: string[] | null;
    pending_verification?: string[] | null;
};
export type AccountBacsDebitPaymentsSettings = {
    display_name?: string;
};
export type AccountBrandingSettings = {
    icon?: (string | File) | null;
    logo?: (string | File) | null;
    primary_color?: string | null;
    secondary_color?: string | null;
};
export type AccountDeclineChargeOn = {
    avs_failure: boolean;
    cvc_failure: boolean;
};
export type AccountCardPaymentsSettings = {
    decline_on?: AccountDeclineChargeOn;
    statement_descriptor_prefix?: string | null;
};
export type AccountDashboardSettings = {
    display_name?: string | null;
    timezone?: string | null;
};
export type AccountPaymentsSettings = {
    statement_descriptor?: string | null;
    statement_descriptor_kana?: string | null;
    statement_descriptor_kanji?: string | null;
};
export type TransferSchedule = {
    delay_days: number;
    interval: string;
    monthly_anchor?: number;
    weekly_anchor?: string;
};
export type AccountPayoutSettings = {
    debit_negative_balances: boolean;
    schedule: TransferSchedule;
    statement_descriptor?: string | null;
};
export type AccountSepaDebitPaymentsSettings = {
    creditor_id?: string;
};
export type AccountSettings = {
    bacs_debit_payments?: AccountBacsDebitPaymentsSettings;
    branding: AccountBrandingSettings;
    card_payments: AccountCardPaymentsSettings;
    dashboard: AccountDashboardSettings;
    payments: AccountPaymentsSettings;
    payouts?: AccountPayoutSettings;
    sepa_debit_payments?: AccountSepaDebitPaymentsSettings;
};
export type AccountTOSAcceptance = {
    date?: number | null;
    ip?: string | null;
    service_agreement?: string;
    user_agent?: string | null;
};
export type Account = {
    business_profile?: (AccountBusinessProfile) | null;
    business_type?: ("company" | "government_entity" | "individual" | "non_profit") | null;
    capabilities?: AccountCapabilities;
    charges_enabled?: boolean;
    company?: LegalEntityCompany;
    country?: string;
    created?: number;
    default_currency?: string;
    details_submitted?: boolean;
    email?: string | null;
    external_accounts?: {
        data: (BankAccount | Card)[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    id: string;
    individual?: Person;
    metadata?: {
        [key: string]: string;
    };
    "object": "account";
    payouts_enabled?: boolean;
    requirements?: AccountRequirements;
    settings?: (AccountSettings) | null;
    tos_acceptance?: AccountTOSAcceptance;
    "type"?: "custom" | "express" | "standard";
};
export type TransferRecipient = {
    active_account?: (BankAccount) | null;
    cards?: {
        data: Card[];
        has_more: boolean;
        "object": "list";
        url: string;
    } | null;
    created: number;
    default_card?: (string | Card) | null;
    description?: string | null;
    email?: string | null;
    id: string;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    migrated_to?: (string | Account) | null;
    name?: string | null;
    "object": "recipient";
    rolled_back_from?: string | Account;
    "type": string;
};
export type Card = {
    account?: (string | Account) | null;
    address_city?: string | null;
    address_country?: string | null;
    address_line1?: string | null;
    address_line1_check?: string | null;
    address_line2?: string | null;
    address_state?: string | null;
    address_zip?: string | null;
    address_zip_check?: string | null;
    available_payout_methods?: ("instant" | "standard")[] | null;
    brand: string;
    country?: string | null;
    currency?: string | null;
    customer?: (string | Customer | DeletedCustomer) | null;
    cvc_check?: string | null;
    default_for_currency?: boolean | null;
    dynamic_last4?: string | null;
    exp_month: number;
    exp_year: number;
    fingerprint?: string | null;
    funding: string;
    id: string;
    last4: string;
    metadata?: {
        [key: string]: string;
    } | null;
    name?: string | null;
    "object": "card";
    recipient?: (string | TransferRecipient) | null;
    tokenization_method?: string | null;
};
export type ThreeDSecure = {
    amount: number;
    authenticated: boolean;
    card: Card;
    created: number;
    currency: string;
    id: string;
    livemode: boolean;
    "object": "three_d_secure";
    redirect_url?: string | null;
    status: string;
};
export type Error = {
    error: APIErrors;
};
export type DeletedAccount = {
    deleted: true;
    id: string;
    "object": "account";
};
export type Polymorphic = BankAccount | Card;
export type Polymorphic2 = DeletedBankAccount | DeletedCard;
export type AccountCapabilityRequirements = {
    current_deadline?: number | null;
    currently_due: string[];
    disabled_reason?: string | null;
    errors: AccountRequirementsError[];
    eventually_due: string[];
    past_due: string[];
    pending_verification: string[];
};
export type AccountCapability = {
    account: string | Account;
    id: string;
    "object": "capability";
    requested: boolean;
    requested_at?: number | null;
    requirements?: AccountCapabilityRequirements;
    status: "active" | "disabled" | "inactive" | "pending" | "unrequested";
};
export type LoginLink = {
    created: number;
    "object": "login_link";
    url: string;
};
export type LightAccountLogout = {};
export type DeletedPerson = {
    deleted: true;
    id: string;
    "object": "person";
};
export type AccountLink = {
    created: number;
    expires_at: number;
    "object": "account_link";
    url: string;
};
export type ApplePayDomain = {
    created: number;
    domain_name: string;
    id: string;
    livemode: boolean;
    "object": "apple_pay_domain";
};
export type DeletedApplePayDomain = {
    deleted: true;
    id: string;
    "object": "apple_pay_domain";
};
export type BalanceAmountBySourceType = {
    bank_account?: number;
    card?: number;
    fpx?: number;
};
export type BalanceAmount = {
    amount: number;
    currency: string;
    source_types?: BalanceAmountBySourceType;
};
export type BalanceDetail = {
    available: BalanceAmount[];
};
export type Balance = {
    available: BalanceAmount[];
    connect_reserved?: BalanceAmount[];
    instant_available?: BalanceAmount[];
    issuing?: BalanceDetail;
    livemode: boolean;
    "object": "balance";
    pending: BalanceAmount[];
};
export type PortalSession = {
    created: number;
    customer: string;
    id: string;
    livemode: boolean;
    "object": "billing_portal.session";
    return_url: string;
    url: string;
};
export type LineItemsDiscountAmount = {
    amount: number;
    discount: Discount;
};
export type LineItemsTaxAmount = {
    amount: number;
    rate: TaxRate;
};
export type LineItem = {
    amount_subtotal?: number | null;
    amount_total?: number | null;
    currency: string;
    description: string;
    discounts?: LineItemsDiscountAmount[];
    id: string;
    "object": "item";
    price: Price;
    quantity?: number | null;
    taxes?: LineItemsTaxAmount[];
};
export type PaymentPagesPaymentPageResourcesShippingAddressCollection = {
    allowed_countries: ("AC" | "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CV" | "CW" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MK" | "ML" | "MM" | "MN" | "MO" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SZ" | "TA" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "ZZ")[];
};
export type PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown = {
    discounts: LineItemsDiscountAmount[];
    taxes: LineItemsTaxAmount[];
};
export type PaymentPagesCheckoutSessionTotalDetails = {
    amount_discount: number;
    amount_tax: number;
    breakdown?: PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown;
};
export type Session = {
    allow_promotion_codes?: boolean | null;
    amount_subtotal?: number | null;
    amount_total?: number | null;
    billing_address_collection?: ("auto" | "required") | null;
    cancel_url: string;
    client_reference_id?: string | null;
    currency?: string | null;
    customer?: (string | Customer | DeletedCustomer) | null;
    customer_email?: string | null;
    id: string;
    line_items?: {
        data: LineItem[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    livemode: boolean;
    locale?: ("auto" | "bg" | "cs" | "da" | "de" | "el" | "en" | "en-GB" | "es" | "es-419" | "et" | "fi" | "fr" | "fr-CA" | "hu" | "id" | "it" | "ja" | "lt" | "lv" | "ms" | "mt" | "nb" | "nl" | "pl" | "pt" | "pt-BR" | "ro" | "ru" | "sk" | "sl" | "sv" | "tr" | "zh" | "zh-HK" | "zh-TW") | null;
    metadata?: {
        [key: string]: string;
    } | null;
    mode: "payment" | "setup" | "subscription";
    "object": "checkout.session";
    payment_intent?: (string | PaymentIntent) | null;
    payment_method_types: string[];
    payment_status: "no_payment_required" | "paid" | "unpaid";
    setup_intent?: (string | SetupIntent) | null;
    shipping?: (Shipping) | null;
    shipping_address_collection?: (PaymentPagesPaymentPageResourcesShippingAddressCollection) | null;
    submit_type?: ("auto" | "book" | "donate" | "pay") | null;
    subscription?: (string | Subscription) | null;
    success_url: string;
    total_details?: (PaymentPagesCheckoutSessionTotalDetails) | null;
};
export type CountrySpecVerificationFieldDetails = {
    additional: string[];
    minimum: string[];
};
export type CountrySpecVerificationFields = {
    company: CountrySpecVerificationFieldDetails;
    individual: CountrySpecVerificationFieldDetails;
};
export type CountrySpec = {
    default_currency: string;
    id: string;
    "object": "country_spec";
    supported_bank_account_currencies: {
        [key: string]: string[];
    };
    supported_payment_currencies: string[];
    supported_payment_methods: string[];
    supported_transfer_countries: string[];
    verification_fields: CountrySpecVerificationFields;
};
export type CustomerBalanceTransaction = {
    amount: number;
    created: number;
    credit_note?: (string | CreditNote) | null;
    currency: string;
    customer: string | Customer;
    description?: string | null;
    ending_balance: number;
    id: string;
    invoice?: (string | Invoice) | null;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "customer_balance_transaction";
    "type": "adjustment" | "applied_to_invoice" | "credit_note" | "initial" | "invoice_too_large" | "invoice_too_small" | "migration" | "unapplied_from_invoice" | "unspent_receiver_credit";
};
export type CreditNoteTaxAmount = {
    amount: number;
    inclusive: boolean;
    tax_rate: string | TaxRate;
};
export type CreditNoteLineItem = {
    amount: number;
    description?: string | null;
    discount_amount: number;
    discount_amounts: DiscountsResourceDiscountAmount[];
    id: string;
    invoice_line_item?: string;
    livemode: boolean;
    "object": "credit_note_line_item";
    quantity?: number | null;
    tax_amounts: CreditNoteTaxAmount[];
    tax_rates: TaxRate[];
    "type": "custom_line_item" | "invoice_line_item";
    unit_amount?: number | null;
    unit_amount_decimal?: string | null;
};
export type CreditNote = {
    amount: number;
    created: number;
    currency: string;
    customer: string | Customer | DeletedCustomer;
    customer_balance_transaction?: (string | CustomerBalanceTransaction) | null;
    discount_amount: number;
    discount_amounts: DiscountsResourceDiscountAmount[];
    id: string;
    invoice: string | Invoice;
    lines: {
        data: CreditNoteLineItem[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    livemode: boolean;
    memo?: string | null;
    metadata?: {
        [key: string]: string;
    } | null;
    "number": string;
    "object": "credit_note";
    out_of_band_amount?: number | null;
    pdf: string;
    reason?: ("duplicate" | "fraudulent" | "order_change" | "product_unsatisfactory") | null;
    refund?: (string | Refund) | null;
    status: "issued" | "void";
    subtotal: number;
    tax_amounts: CreditNoteTaxAmount[];
    total: number;
    "type": "post_payment" | "pre_payment";
    voided_at?: number | null;
};
export type Polymorphic3 = Account | AlipayAccount | BankAccount | BitcoinReceiver | Card | Source;
export type AlipayDeletedAccount = {
    deleted: true;
    id: string;
    "object": "alipay_account";
};
export type BitcoinDeletedReceiver = {
    deleted: true;
    id: string;
    "object": "bitcoin_receiver";
};
export type Polymorphic4 = AlipayDeletedAccount | DeletedBankAccount | BitcoinDeletedReceiver | DeletedCard;
export type EphemeralKey = {
    created: number;
    expires: number;
    id: string;
    livemode: boolean;
    "object": "ephemeral_key";
    secret?: string;
};
export type NotificationEventData = {
    "object": object;
    previous_attributes?: object;
};
export type NotificationEventRequest = {
    id?: string | null;
    idempotency_key?: string | null;
};
export type NotificationEvent = {
    account?: string;
    api_version?: string | null;
    created: number;
    data: NotificationEventData;
    id: string;
    livemode: boolean;
    "object": "event";
    pending_webhooks: number;
    request?: (NotificationEventRequest) | null;
    "type": string;
};
export type ExchangeRate = {
    id: string;
    "object": "exchange_rate";
    rates: {
        [key: string]: number;
    };
};
export type InvoiceItem = {
    amount: number;
    currency: string;
    customer: string | Customer | DeletedCustomer;
    date: number;
    description?: string | null;
    discountable: boolean;
    discounts?: (string | Discount)[] | null;
    id: string;
    invoice?: (string | Invoice) | null;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    "object": "invoiceitem";
    period: InvoiceLineItemPeriod;
    price?: (Price) | null;
    proration: boolean;
    quantity: number;
    subscription?: (string | Subscription) | null;
    subscription_item?: string;
    tax_rates?: TaxRate[] | null;
    unit_amount?: number | null;
    unit_amount_decimal?: string | null;
};
export type DeletedInvoiceItem = {
    deleted: true;
    id: string;
    "object": "invoiceitem";
};
export type DeletedInvoice = {
    deleted: true;
    id: string;
    "object": "invoice";
};
export type IssuerFraudRecord = {
    actionable: boolean;
    charge: string | Charge;
    created: number;
    fraud_type: string;
    has_liability_shift: boolean;
    id: string;
    livemode: boolean;
    "object": "issuer_fraud_record";
    post_date: number;
};
export type IssuingSettlement = {
    bin: string;
    clearing_date: number;
    created: number;
    currency: string;
    id: string;
    interchange_fees: number;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    net_total: number;
    network: "visa";
    network_fees: number;
    network_settlement_identifier: string;
    "object": "issuing.settlement";
    settlement_service: string;
    transaction_count: number;
    transaction_volume: number;
};
export type PlanTier = {
    flat_amount?: number | null;
    flat_amount_decimal?: string | null;
    unit_amount?: number | null;
    unit_amount_decimal?: string | null;
    up_to?: number | null;
};
export type TransformUsage = {
    divide_by: number;
    round: "down" | "up";
};
export type Plan = {
    active: boolean;
    aggregate_usage?: ("last_during_period" | "last_ever" | "max" | "sum") | null;
    amount?: number | null;
    amount_decimal?: string | null;
    billing_scheme: "per_unit" | "tiered";
    created: number;
    currency: string;
    id: string;
    interval: "day" | "month" | "week" | "year";
    interval_count: number;
    livemode: boolean;
    metadata?: {
        [key: string]: string;
    } | null;
    nickname?: string | null;
    "object": "plan";
    product?: (string | Product | DeletedProduct) | null;
    tiers?: PlanTier[];
    tiers_mode?: ("graduated" | "volume") | null;
    transform_usage?: (TransformUsage) | null;
    trial_period_days?: number | null;
    usage_type: "licensed" | "metered";
};
export type DeletedPlan = {
    deleted: true;
    id: string;
    "object": "plan";
};
export type RadarEarlyFraudWarning = {
    actionable: boolean;
    charge: string | Charge;
    created: number;
    fraud_type: string;
    id: string;
    livemode: boolean;
    "object": "radar.early_fraud_warning";
};
export type RadarListListItem = {
    created: number;
    created_by: string;
    id: string;
    livemode: boolean;
    "object": "radar.value_list_item";
    value: string;
    value_list: string;
};
export type RadarListDeletedListItem = {
    deleted: true;
    id: string;
    "object": "radar.value_list_item";
};
export type RadarListList = {
    alias: string;
    created: number;
    created_by: string;
    id: string;
    item_type: "card_bin" | "card_fingerprint" | "case_sensitive_string" | "country" | "email" | "ip_address" | "string";
    list_items: {
        data: RadarListListItem[];
        has_more: boolean;
        "object": "list";
        url: string;
    };
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    name: string;
    "object": "radar.value_list";
};
export type RadarListDeletedList = {
    deleted: true;
    id: string;
    "object": "radar.value_list";
};
export type DeletedTransferRecipient = {
    deleted: true;
    id: string;
    "object": "recipient";
};
export type FinancialReportingFinanceReportRunRunParameters = {
    columns?: string[];
    connected_account?: string;
    currency?: string;
    interval_end?: number;
    interval_start?: number;
    payout?: string;
    reporting_category?: string;
    timezone?: string;
};
export type Reporting_report_run = {
    created: number;
    error?: string | null;
    id: string;
    livemode: boolean;
    "object": "reporting.report_run";
    parameters: FinancialReportingFinanceReportRunRunParameters;
    report_type: string;
    result?: (File) | null;
    status: string;
    succeeded_at?: number | null;
};
export type Reporting_report_type = {
    data_available_end: number;
    data_available_start: number;
    default_columns?: string[] | null;
    id: string;
    name: string;
    "object": "reporting.report_type";
    updated: number;
    version: number;
};
export type SigmaScheduledQueryRunError = {
    message: string;
};
export type ScheduledQueryRun = {
    created: number;
    data_load_time: number;
    error?: SigmaScheduledQueryRunError;
    file?: (File) | null;
    id: string;
    livemode: boolean;
    "object": "scheduled_query_run";
    result_available_until: number;
    sql: string;
    status: string;
    title: string;
};
export type DeletedSku = {
    deleted: true;
    id: string;
    "object": "sku";
};
export type SourceMandateNotificationAcssDebitData = {
    statement_descriptor?: string;
};
export type SourceMandateNotificationBacsDebitData = {
    last4?: string;
};
export type SourceMandateNotificationSepaDebitData = {
    creditor_identifier?: string;
    last4?: string;
    mandate_reference?: string;
};
export type SourceMandateNotification = {
    acss_debit?: SourceMandateNotificationAcssDebitData;
    amount?: number | null;
    bacs_debit?: SourceMandateNotificationBacsDebitData;
    created: number;
    id: string;
    livemode: boolean;
    "object": "source_mandate_notification";
    reason: string;
    sepa_debit?: SourceMandateNotificationSepaDebitData;
    source: Source;
    status: string;
    "type": string;
};
export type SourceTransactionAchCreditTransferData = {
    customer_data?: string;
    fingerprint?: string;
    last4?: string;
    routing_number?: string;
};
export type SourceTransactionChfCreditTransferData = {
    reference?: string;
    sender_address_country?: string;
    sender_address_line1?: string;
    sender_iban?: string;
    sender_name?: string;
};
export type SourceTransactionGbpCreditTransferData = {
    fingerprint?: string;
    funding_method?: string;
    last4?: string;
    reference?: string;
    sender_account_number?: string;
    sender_name?: string;
    sender_sort_code?: string;
};
export type SourceTransactionPaperCheckData = {
    available_at?: string;
    invoices?: string;
};
export type SourceTransactionSepaCreditTransferData = {
    reference?: string;
    sender_iban?: string;
    sender_name?: string;
};
export type SourceTransaction = {
    ach_credit_transfer?: SourceTransactionAchCreditTransferData;
    amount: number;
    chf_credit_transfer?: SourceTransactionChfCreditTransferData;
    created: number;
    currency: string;
    gbp_credit_transfer?: SourceTransactionGbpCreditTransferData;
    id: string;
    livemode: boolean;
    "object": "source_transaction";
    paper_check?: SourceTransactionPaperCheckData;
    sepa_credit_transfer?: SourceTransactionSepaCreditTransferData;
    source: string;
    status: string;
    "type": "ach_credit_transfer" | "ach_debit" | "alipay" | "bancontact" | "card" | "card_present" | "eps" | "giropay" | "ideal" | "klarna" | "multibanco" | "p24" | "sepa_debit" | "sofort" | "three_d_secure" | "wechat";
};
export type DeletedSubscriptionItem = {
    deleted: true;
    id: string;
    "object": "subscription_item";
};
export type Period = {
    end?: number | null;
    start?: number | null;
};
export type UsageRecordSummary = {
    id: string;
    invoice?: string | null;
    livemode: boolean;
    "object": "usage_record_summary";
    period: Period;
    subscription_item: string;
    total_usage: number;
};
export type UsageRecord = {
    id: string;
    livemode: boolean;
    "object": "usage_record";
    quantity: number;
    subscription_item: string;
    timestamp: number;
};
export type TerminalConnectionToken = {
    location?: string;
    "object": "terminal.connection_token";
    secret: string;
};
export type TerminalLocationLocation = {
    address: Address;
    display_name: string;
    id: string;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    "object": "terminal.location";
};
export type TerminalLocationDeletedLocation = {
    deleted: true;
    id: string;
    "object": "terminal.location";
};
export type TerminalReaderReader = {
    device_sw_version?: string | null;
    device_type: "bbpos_chipper2x" | "verifone_P400";
    id: string;
    ip_address?: string | null;
    label: string;
    livemode: boolean;
    location?: string | null;
    metadata: {
        [key: string]: string;
    };
    "object": "terminal.reader";
    serial_number: string;
    status?: string | null;
};
export type TerminalReaderDeletedReader = {
    deleted: true;
    id: string;
    "object": "terminal.reader";
};
export type Token = {
    bank_account?: BankAccount;
    card?: Card;
    client_ip?: string | null;
    created: number;
    id: string;
    livemode: boolean;
    "object": "token";
    "type": string;
    used: boolean;
};
export type NotificationWebhookEndpoint = {
    api_version?: string | null;
    application?: string | null;
    created: number;
    description?: string | null;
    enabled_events: string[];
    id: string;
    livemode: boolean;
    metadata: {
        [key: string]: string;
    };
    "object": "webhook_endpoint";
    secret?: string;
    status: string;
    url: string;
};
export type NotificationWebhookEndpointDeleted = {
    deleted: true;
    id: string;
    "object": "webhook_endpoint";
};
