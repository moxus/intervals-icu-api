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
/**
 * 
 * @export
 * @interface Ignore
 */
export interface Ignore {
    /**
     * 
     * @type {number}
     * @memberof Ignore
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof Ignore
     */
    endIndex?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Ignore
     */
    power?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Ignore
     */
    pace?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Ignore
     */
    hr?: boolean;
}

/**
 * Check if a given object implements the Ignore interface.
 */
export function instanceOfIgnore(value: object): value is Ignore {
    return true;
}

export function IgnoreFromJSON(json: any): Ignore {
    return IgnoreFromJSONTyped(json, false);
}

export function IgnoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ignore {
    if (json == null) {
        return json;
    }
    return {
        
        'startIndex': json['start_index'] == null ? undefined : json['start_index'],
        'endIndex': json['end_index'] == null ? undefined : json['end_index'],
        'power': json['power'] == null ? undefined : json['power'],
        'pace': json['pace'] == null ? undefined : json['pace'],
        'hr': json['hr'] == null ? undefined : json['hr'],
    };
}

export function IgnoreToJSON(value?: Ignore | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'start_index': value['startIndex'],
        'end_index': value['endIndex'],
        'power': value['power'],
        'pace': value['pace'],
        'hr': value['hr'],
    };
}

