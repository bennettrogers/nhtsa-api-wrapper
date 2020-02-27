/**
 * @module api/actions/DecodeVinExtended
 * @category Actions
 * @description DecodeVinExtended NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVinExtended](module-api_actions_DecodeVinExtended.DecodeVinExtended.html)
 * >
 * > **Types**
 * > - Type: [DecodeVinExtendedResponse](#DecodeVinExtendedResponse)
 * > - Type: [DecodeVinExtendedResults](#DecodeVinExtendedResults)
 *
 */
import { Fetch, FetchResponse } from '../Fetch';
/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @hideconstructor
 */
export declare class DecodeVinExtended extends Fetch {
    /**
     * This is exactly like the DecodeVin method but provides additional information on variables
     * related to other NHTSA programs like
     * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.
     * - This will decode the VIN and the decoded output will be made available
     *   in the format of Key-value pairs.
     * - In the returned 'Results` object:
     *   - The IDs (VariableID and ValueID) represent the unique ID associated with the Variable/Value.
     *   - In case of text variables, the ValueID is not applicable.
     * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
     *   or older (pre-1980), model year ranges.
     *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
     * - This Action also supports partial VIN decoding (VINs that are less than 17 characters).
     *   - In this case, the VIN will be decoded partially with the available characters.
     *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     *   - The 9th digit is not necessary.
     *
     * @async
     * @param {string} vin - Vehicle Identification Number (full or partial).
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {string|number} [params.modelYear] - Optional Model Year search parameter.
     * @returns {(Promise<DecodeVinExtendedResponse | Error>)} - Api Response object.
     */
    DecodeVinExtended(vin: string, params?: {
        modelYear?: string | number;
    }): Promise<DecodeVinExtendedResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link DecodeVinExtendedResponse}.Results' array.
 *
 * @memberof module:api/actions/DecodeVinExtended
 * @alias DecodeVinExtendedResults
 */
export declare type DecodeVinExtendedResults = {
    Value: string | null;
    ValueId: string | null;
    Variable: string;
    VariableId: number;
};
/**
 * Type representing the complete response returned by the DecodeVinExtended API Action.
 *
 * @memberof module:api/actions/DecodeVinExtended
 * @alias DecodeVinExtendedResponse
 */
export declare type DecodeVinExtendedResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<DecodeVinExtendedResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=DecodeVinExtended.d.ts.map