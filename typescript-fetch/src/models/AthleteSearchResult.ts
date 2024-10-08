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
 * @interface AthleteSearchResult
 */
export interface AthleteSearchResult {
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    profileMedium?: string;
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    timezone?: string;
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    sex?: string;
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    bio?: string;
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof AthleteSearchResult
     */
    email?: string;
}

/**
 * Check if a given object implements the AthleteSearchResult interface.
 */
export function instanceOfAthleteSearchResult(value: object): value is AthleteSearchResult {
    return true;
}

export function AthleteSearchResultFromJSON(json: any): AthleteSearchResult {
    return AthleteSearchResultFromJSONTyped(json, false);
}

export function AthleteSearchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AthleteSearchResult {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'profileMedium': json['profile_medium'] == null ? undefined : json['profile_medium'],
        'city': json['city'] == null ? undefined : json['city'],
        'state': json['state'] == null ? undefined : json['state'],
        'country': json['country'] == null ? undefined : json['country'],
        'timezone': json['timezone'] == null ? undefined : json['timezone'],
        'sex': json['sex'] == null ? undefined : json['sex'],
        'bio': json['bio'] == null ? undefined : json['bio'],
        'website': json['website'] == null ? undefined : json['website'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function AthleteSearchResultToJSON(value?: AthleteSearchResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'profile_medium': value['profileMedium'],
        'city': value['city'],
        'state': value['state'],
        'country': value['country'],
        'timezone': value['timezone'],
        'sex': value['sex'],
        'bio': value['bio'],
        'website': value['website'],
        'email': value['email'],
    };
}

