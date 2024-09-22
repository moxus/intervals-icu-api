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
 * @interface Display
 */
export interface Display {
    /**
     * 
     * @type {string}
     * @memberof Display
     */
    colorScheme?: string;
    /**
     * 
     * @type {number}
     * @memberof Display
     */
    lowIntensity?: number;
    /**
     * 
     * @type {number}
     * @memberof Display
     */
    highIntensity?: number;
    /**
     * 
     * @type {number}
     * @memberof Display
     */
    lowLoad?: number;
    /**
     * 
     * @type {number}
     * @memberof Display
     */
    highLoad?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    usePairedWorkoutColor?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    ignoreWorkoutColors?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showAverageHR?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showNormalizedWatts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showLoad?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showWork?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showWorkAboveFTP?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showWeightLifted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showAveragePower?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showRPE?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showFeel?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showPace?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showGAP?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showIntensity?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showName?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showIntervals?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showSkylineChart?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showPairedWorkoutChart?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showDescription?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    showStartTime?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Display
     */
    preciseDistance?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Display
     */
    color?: string;
    /**
     * 
     * @type {string}
     * @memberof Display
     */
    color2?: string;
}

/**
 * Check if a given object implements the Display interface.
 */
export function instanceOfDisplay(value: object): value is Display {
    return true;
}

export function DisplayFromJSON(json: any): Display {
    return DisplayFromJSONTyped(json, false);
}

export function DisplayFromJSONTyped(json: any, ignoreDiscriminator: boolean): Display {
    if (json == null) {
        return json;
    }
    return {
        
        'colorScheme': json['colorScheme'] == null ? undefined : json['colorScheme'],
        'lowIntensity': json['lowIntensity'] == null ? undefined : json['lowIntensity'],
        'highIntensity': json['highIntensity'] == null ? undefined : json['highIntensity'],
        'lowLoad': json['lowLoad'] == null ? undefined : json['lowLoad'],
        'highLoad': json['highLoad'] == null ? undefined : json['highLoad'],
        'usePairedWorkoutColor': json['usePairedWorkoutColor'] == null ? undefined : json['usePairedWorkoutColor'],
        'ignoreWorkoutColors': json['ignoreWorkoutColors'] == null ? undefined : json['ignoreWorkoutColors'],
        'showAverageHR': json['showAverageHR'] == null ? undefined : json['showAverageHR'],
        'showNormalizedWatts': json['showNormalizedWatts'] == null ? undefined : json['showNormalizedWatts'],
        'showLoad': json['showLoad'] == null ? undefined : json['showLoad'],
        'showWork': json['showWork'] == null ? undefined : json['showWork'],
        'showWorkAboveFTP': json['showWorkAboveFTP'] == null ? undefined : json['showWorkAboveFTP'],
        'showWeightLifted': json['showWeightLifted'] == null ? undefined : json['showWeightLifted'],
        'showAveragePower': json['showAveragePower'] == null ? undefined : json['showAveragePower'],
        'showRPE': json['showRPE'] == null ? undefined : json['showRPE'],
        'showFeel': json['showFeel'] == null ? undefined : json['showFeel'],
        'showPace': json['showPace'] == null ? undefined : json['showPace'],
        'showGAP': json['showGAP'] == null ? undefined : json['showGAP'],
        'showIntensity': json['showIntensity'] == null ? undefined : json['showIntensity'],
        'showName': json['showName'] == null ? undefined : json['showName'],
        'showIntervals': json['showIntervals'] == null ? undefined : json['showIntervals'],
        'showSkylineChart': json['showSkylineChart'] == null ? undefined : json['showSkylineChart'],
        'showPairedWorkoutChart': json['showPairedWorkoutChart'] == null ? undefined : json['showPairedWorkoutChart'],
        'showDescription': json['showDescription'] == null ? undefined : json['showDescription'],
        'showStartTime': json['showStartTime'] == null ? undefined : json['showStartTime'],
        'preciseDistance': json['preciseDistance'] == null ? undefined : json['preciseDistance'],
        'color': json['color'] == null ? undefined : json['color'],
        'color2': json['color2'] == null ? undefined : json['color2'],
    };
}

export function DisplayToJSON(value?: Display | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'colorScheme': value['colorScheme'],
        'lowIntensity': value['lowIntensity'],
        'highIntensity': value['highIntensity'],
        'lowLoad': value['lowLoad'],
        'highLoad': value['highLoad'],
        'usePairedWorkoutColor': value['usePairedWorkoutColor'],
        'ignoreWorkoutColors': value['ignoreWorkoutColors'],
        'showAverageHR': value['showAverageHR'],
        'showNormalizedWatts': value['showNormalizedWatts'],
        'showLoad': value['showLoad'],
        'showWork': value['showWork'],
        'showWorkAboveFTP': value['showWorkAboveFTP'],
        'showWeightLifted': value['showWeightLifted'],
        'showAveragePower': value['showAveragePower'],
        'showRPE': value['showRPE'],
        'showFeel': value['showFeel'],
        'showPace': value['showPace'],
        'showGAP': value['showGAP'],
        'showIntensity': value['showIntensity'],
        'showName': value['showName'],
        'showIntervals': value['showIntervals'],
        'showSkylineChart': value['showSkylineChart'],
        'showPairedWorkoutChart': value['showPairedWorkoutChart'],
        'showDescription': value['showDescription'],
        'showStartTime': value['showStartTime'],
        'preciseDistance': value['preciseDistance'],
        'color': value['color'],
        'color2': value['color2'],
    };
}

