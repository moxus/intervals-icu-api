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
import type { Attachment } from './Attachment';
import {
    AttachmentFromJSON,
    AttachmentFromJSONTyped,
    AttachmentToJSON,
} from './Attachment';

/**
 * 
 * @export
 * @interface WorkoutEx
 */
export interface WorkoutEx {
    /**
     * 
     * @type {string}
     * @memberof WorkoutEx
     */
    athleteId?: string;
    /**
     * 
     * @type {number}
     * @memberof WorkoutEx
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkoutEx
     */
    icuTrainingLoad?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkoutEx
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkoutEx
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkoutEx
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WorkoutEx
     */
    indoor?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkoutEx
     */
    color?: string;
    /**
     * 
     * @type {number}
     * @memberof WorkoutEx
     */
    movingTime?: number;
    /**
     * 
     * @type {Date}
     * @memberof WorkoutEx
     */
    updated?: Date;
    /**
     * 
     * @type {number}
     * @memberof WorkoutEx
     */
    joules?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkoutEx
     */
    joulesAboveFtp?: number;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof WorkoutEx
     */
    workoutDoc?: { [key: string]: object; };
    /**
     * 
     * @type {number}
     * @memberof WorkoutEx
     */
    folderId?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkoutEx
     */
    day?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkoutEx
     */
    days?: number;
    /**
     * 
     * @type {Date}
     * @memberof WorkoutEx
     */
    planApplied?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof WorkoutEx
     */
    hideFromAthlete?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkoutEx
     */
    target?: WorkoutExTargetEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof WorkoutEx
     */
    targets?: Array<WorkoutExTargetsEnum>;
    /**
     * 
     * @type {Array<string>}
     * @memberof WorkoutEx
     */
    tags?: Array<string>;
    /**
     * 
     * @type {Array<Attachment>}
     * @memberof WorkoutEx
     */
    attachments?: Array<Attachment>;
    /**
     * 
     * @type {string}
     * @memberof WorkoutEx
     */
    time?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkoutEx
     */
    fileContents?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkoutEx
     */
    fileContentsBase64?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkoutEx
     */
    filename?: string;
    /**
     * 
     * @type {number}
     * @memberof WorkoutEx
     */
    distance?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkoutEx
     */
    icuIntensity?: number;
}


/**
 * @export
 */
export const WorkoutExTargetEnum = {
    Auto: 'AUTO',
    Power: 'POWER',
    Hr: 'HR',
    Pace: 'PACE'
} as const;
export type WorkoutExTargetEnum = typeof WorkoutExTargetEnum[keyof typeof WorkoutExTargetEnum];

/**
 * @export
 */
export const WorkoutExTargetsEnum = {
    Auto: 'AUTO',
    Power: 'POWER',
    Hr: 'HR',
    Pace: 'PACE'
} as const;
export type WorkoutExTargetsEnum = typeof WorkoutExTargetsEnum[keyof typeof WorkoutExTargetsEnum];


/**
 * Check if a given object implements the WorkoutEx interface.
 */
export function instanceOfWorkoutEx(value: object): value is WorkoutEx {
    return true;
}

export function WorkoutExFromJSON(json: any): WorkoutEx {
    return WorkoutExFromJSONTyped(json, false);
}

export function WorkoutExFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkoutEx {
    if (json == null) {
        return json;
    }
    return {
        
        'athleteId': json['athlete_id'] == null ? undefined : json['athlete_id'],
        'id': json['id'] == null ? undefined : json['id'],
        'icuTrainingLoad': json['icu_training_load'] == null ? undefined : json['icu_training_load'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'type': json['type'] == null ? undefined : json['type'],
        'indoor': json['indoor'] == null ? undefined : json['indoor'],
        'color': json['color'] == null ? undefined : json['color'],
        'movingTime': json['moving_time'] == null ? undefined : json['moving_time'],
        'updated': json['updated'] == null ? undefined : (new Date(json['updated'])),
        'joules': json['joules'] == null ? undefined : json['joules'],
        'joulesAboveFtp': json['joules_above_ftp'] == null ? undefined : json['joules_above_ftp'],
        'workoutDoc': json['workout_doc'] == null ? undefined : json['workout_doc'],
        'folderId': json['folder_id'] == null ? undefined : json['folder_id'],
        'day': json['day'] == null ? undefined : json['day'],
        'days': json['days'] == null ? undefined : json['days'],
        'planApplied': json['plan_applied'] == null ? undefined : (new Date(json['plan_applied'])),
        'hideFromAthlete': json['hide_from_athlete'] == null ? undefined : json['hide_from_athlete'],
        'target': json['target'] == null ? undefined : json['target'],
        'targets': json['targets'] == null ? undefined : json['targets'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'attachments': json['attachments'] == null ? undefined : ((json['attachments'] as Array<any>).map(AttachmentFromJSON)),
        'time': json['time'] == null ? undefined : json['time'],
        'fileContents': json['file_contents'] == null ? undefined : json['file_contents'],
        'fileContentsBase64': json['file_contents_base64'] == null ? undefined : json['file_contents_base64'],
        'filename': json['filename'] == null ? undefined : json['filename'],
        'distance': json['distance'] == null ? undefined : json['distance'],
        'icuIntensity': json['icu_intensity'] == null ? undefined : json['icu_intensity'],
    };
}

export function WorkoutExToJSON(value?: WorkoutEx | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'athlete_id': value['athleteId'],
        'id': value['id'],
        'icu_training_load': value['icuTrainingLoad'],
        'name': value['name'],
        'description': value['description'],
        'type': value['type'],
        'indoor': value['indoor'],
        'color': value['color'],
        'moving_time': value['movingTime'],
        'updated': value['updated'] == null ? undefined : ((value['updated']).toISOString()),
        'joules': value['joules'],
        'joules_above_ftp': value['joulesAboveFtp'],
        'workout_doc': value['workoutDoc'],
        'folder_id': value['folderId'],
        'day': value['day'],
        'days': value['days'],
        'plan_applied': value['planApplied'] == null ? undefined : ((value['planApplied']).toISOString()),
        'hide_from_athlete': value['hideFromAthlete'],
        'target': value['target'],
        'targets': value['targets'],
        'tags': value['tags'],
        'attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(AttachmentToJSON)),
        'time': value['time'],
        'file_contents': value['fileContents'],
        'file_contents_base64': value['fileContentsBase64'],
        'filename': value['filename'],
        'distance': value['distance'],
        'icu_intensity': value['icuIntensity'],
    };
}

