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
 * @interface PaceDistancesDTO
 */
export interface PaceDistancesDTO {
    /**
     * 
     * @type {Array<number>}
     * @memberof PaceDistancesDTO
     */
    distances?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof PaceDistancesDTO
     */
    defaults?: Array<number>;
}

/**
 * Check if a given object implements the PaceDistancesDTO interface.
 */
export function instanceOfPaceDistancesDTO(value: object): value is PaceDistancesDTO {
    return true;
}

export function PaceDistancesDTOFromJSON(json: any): PaceDistancesDTO {
    return PaceDistancesDTOFromJSONTyped(json, false);
}

export function PaceDistancesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaceDistancesDTO {
    if (json == null) {
        return json;
    }
    return {
        
        'distances': json['distances'] == null ? undefined : json['distances'],
        'defaults': json['defaults'] == null ? undefined : json['defaults'],
    };
}

export function PaceDistancesDTOToJSON(value?: PaceDistancesDTO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'distances': value['distances'],
        'defaults': value['defaults'],
    };
}

