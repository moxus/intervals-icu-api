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
 * @interface GearReminder
 */
export interface GearReminder {
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GearReminder
     */
    gearId?: string;
    /**
     * 
     * @type {string}
     * @memberof GearReminder
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    distance?: number;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    time?: number;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    activities?: number;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    days?: number;
    /**
     * 
     * @type {Date}
     * @memberof GearReminder
     */
    lastReset?: Date;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    startingDistance?: number;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    startingTime?: number;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    startingActivities?: number;
    /**
     * 
     * @type {Date}
     * @memberof GearReminder
     */
    snoozedUntil?: Date;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    percentUsed?: number;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    distanceUsed?: number;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    timeUsed?: number;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    activitiesUsed?: number;
    /**
     * 
     * @type {number}
     * @memberof GearReminder
     */
    daysUsed?: number;
}

/**
 * Check if a given object implements the GearReminder interface.
 */
export function instanceOfGearReminder(value: object): value is GearReminder {
    return true;
}

export function GearReminderFromJSON(json: any): GearReminder {
    return GearReminderFromJSONTyped(json, false);
}

export function GearReminderFromJSONTyped(json: any, ignoreDiscriminator: boolean): GearReminder {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'gearId': json['gear_id'] == null ? undefined : json['gear_id'],
        'name': json['name'] == null ? undefined : json['name'],
        'distance': json['distance'] == null ? undefined : json['distance'],
        'time': json['time'] == null ? undefined : json['time'],
        'activities': json['activities'] == null ? undefined : json['activities'],
        'days': json['days'] == null ? undefined : json['days'],
        'lastReset': json['last_reset'] == null ? undefined : (new Date(json['last_reset'])),
        'startingDistance': json['starting_distance'] == null ? undefined : json['starting_distance'],
        'startingTime': json['starting_time'] == null ? undefined : json['starting_time'],
        'startingActivities': json['starting_activities'] == null ? undefined : json['starting_activities'],
        'snoozedUntil': json['snoozed_until'] == null ? undefined : (new Date(json['snoozed_until'])),
        'percentUsed': json['percent_used'] == null ? undefined : json['percent_used'],
        'distanceUsed': json['distance_used'] == null ? undefined : json['distance_used'],
        'timeUsed': json['time_used'] == null ? undefined : json['time_used'],
        'activitiesUsed': json['activities_used'] == null ? undefined : json['activities_used'],
        'daysUsed': json['days_used'] == null ? undefined : json['days_used'],
    };
}

export function GearReminderToJSON(value?: GearReminder | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'gear_id': value['gearId'],
        'name': value['name'],
        'distance': value['distance'],
        'time': value['time'],
        'activities': value['activities'],
        'days': value['days'],
        'last_reset': value['lastReset'] == null ? undefined : ((value['lastReset']).toISOString()),
        'starting_distance': value['startingDistance'],
        'starting_time': value['startingTime'],
        'starting_activities': value['startingActivities'],
        'snoozed_until': value['snoozedUntil'] == null ? undefined : ((value['snoozedUntil']).toISOString()),
        'percent_used': value['percentUsed'],
        'distance_used': value['distanceUsed'],
        'time_used': value['timeUsed'],
        'activities_used': value['activitiesUsed'],
        'days_used': value['daysUsed'],
    };
}

