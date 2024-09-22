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
 * @interface PowerModel
 */
export interface PowerModel {
    /**
     * 
     * @type {string}
     * @memberof PowerModel
     */
    type?: PowerModelTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof PowerModel
     */
    criticalPower?: number;
    /**
     * 
     * @type {number}
     * @memberof PowerModel
     */
    wPrime?: number;
    /**
     * 
     * @type {number}
     * @memberof PowerModel
     */
    pMax?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof PowerModel
     */
    inputPointIndexes?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof PowerModel
     */
    ftp?: number;
}


/**
 * @export
 */
export const PowerModelTypeEnum = {
    Ms2P: 'MS_2P',
    Morton3P: 'MORTON_3P',
    FftCurves: 'FFT_CURVES',
    Ecp: 'ECP'
} as const;
export type PowerModelTypeEnum = typeof PowerModelTypeEnum[keyof typeof PowerModelTypeEnum];


/**
 * Check if a given object implements the PowerModel interface.
 */
export function instanceOfPowerModel(value: object): value is PowerModel {
    return true;
}

export function PowerModelFromJSON(json: any): PowerModel {
    return PowerModelFromJSONTyped(json, false);
}

export function PowerModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PowerModel {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'criticalPower': json['criticalPower'] == null ? undefined : json['criticalPower'],
        'wPrime': json['wPrime'] == null ? undefined : json['wPrime'],
        'pMax': json['pMax'] == null ? undefined : json['pMax'],
        'inputPointIndexes': json['inputPointIndexes'] == null ? undefined : json['inputPointIndexes'],
        'ftp': json['ftp'] == null ? undefined : json['ftp'],
    };
}

export function PowerModelToJSON(value?: PowerModel | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'criticalPower': value['criticalPower'],
        'wPrime': value['wPrime'],
        'pMax': value['pMax'],
        'inputPointIndexes': value['inputPointIndexes'],
        'ftp': value['ftp'],
    };
}

