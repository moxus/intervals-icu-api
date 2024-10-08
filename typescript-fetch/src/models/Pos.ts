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
 * @interface Pos
 */
export interface Pos {
    /**
     * 
     * @type {string}
     * @memberof Pos
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Pos
     */
    width?: string;
    /**
     * 
     * @type {string}
     * @memberof Pos
     */
    height?: string;
}

/**
 * Check if a given object implements the Pos interface.
 */
export function instanceOfPos(value: object): value is Pos {
    return true;
}

export function PosFromJSON(json: any): Pos {
    return PosFromJSONTyped(json, false);
}

export function PosFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pos {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'width': json['width'] == null ? undefined : json['width'],
        'height': json['height'] == null ? undefined : json['height'],
    };
}

export function PosToJSON(value?: Pos | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'width': value['width'],
        'height': value['height'],
    };
}

