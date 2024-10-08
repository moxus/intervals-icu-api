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
 * @interface NewActivityMsg
 */
export interface NewActivityMsg {
    /**
     * 
     * @type {string}
     * @memberof NewActivityMsg
     */
    content?: string;
}

/**
 * Check if a given object implements the NewActivityMsg interface.
 */
export function instanceOfNewActivityMsg(value: object): value is NewActivityMsg {
    return true;
}

export function NewActivityMsgFromJSON(json: any): NewActivityMsg {
    return NewActivityMsgFromJSONTyped(json, false);
}

export function NewActivityMsgFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewActivityMsg {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : json['content'],
    };
}

export function NewActivityMsgToJSON(value?: NewActivityMsg | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'content': value['content'],
    };
}

