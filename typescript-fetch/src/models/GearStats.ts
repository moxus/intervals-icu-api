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
 * @interface GearStats
 */
export interface GearStats {
    /**
     * 
     * @type {number}
     * @memberof GearStats
     */
    distance?: number;
    /**
     * 
     * @type {number}
     * @memberof GearStats
     */
    elapsedTime?: number;
    /**
     * 
     * @type {number}
     * @memberof GearStats
     */
    movingTime?: number;
    /**
     * 
     * @type {number}
     * @memberof GearStats
     */
    activities?: number;
}

/**
 * Check if a given object implements the GearStats interface.
 */
export function instanceOfGearStats(value: object): value is GearStats {
    return true;
}

export function GearStatsFromJSON(json: any): GearStats {
    return GearStatsFromJSONTyped(json, false);
}

export function GearStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GearStats {
    if (json == null) {
        return json;
    }
    return {
        
        'distance': json['distance'] == null ? undefined : json['distance'],
        'elapsedTime': json['elapsed_time'] == null ? undefined : json['elapsed_time'],
        'movingTime': json['moving_time'] == null ? undefined : json['moving_time'],
        'activities': json['activities'] == null ? undefined : json['activities'],
    };
}

export function GearStatsToJSON(value?: GearStats | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'distance': value['distance'],
        'elapsed_time': value['elapsedTime'],
        'moving_time': value['movingTime'],
        'activities': value['activities'],
    };
}

