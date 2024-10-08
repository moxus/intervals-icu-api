/* tslint:disable */
/* eslint-disable */
/**
 * Intervals.icu API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Effort } from './Effort';
import {
    EffortFromJSON,
    EffortFromJSONTyped,
    EffortToJSON,
} from './Effort';

/**
 * 
 * @export
 * @interface BestEfforts
 */
export interface BestEfforts {
    /**
     * 
     * @type {Array<Effort>}
     * @memberof BestEfforts
     */
    efforts?: Array<Effort>;
}

/**
 * Check if a given object implements the BestEfforts interface.
 */
export function instanceOfBestEfforts(value: object): value is BestEfforts {
    return true;
}

export function BestEffortsFromJSON(json: any): BestEfforts {
    return BestEffortsFromJSONTyped(json, false);
}

export function BestEffortsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BestEfforts {
    if (json == null) {
        return json;
    }
    return {
        
        'efforts': json['efforts'] == null ? undefined : ((json['efforts'] as Array<any>).map(EffortFromJSON)),
    };
}

export function BestEffortsToJSON(value?: BestEfforts | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'efforts': value['efforts'] == null ? undefined : ((value['efforts'] as Array<any>).map(EffortToJSON)),
    };
}

