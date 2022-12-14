/* tslint:disable */
/* eslint-disable */
/**
 * WhatsAPI Go
 * The V2 of WhatsAPI Go
 *
 * The version of the OpenAPI document: 2.0
 * Contact: manjit@sponsorbook.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface StructsPollMessagePayload
 */
export interface StructsPollMessagePayload {
    /**
     * 
     * @type {Array<string>}
     * @memberof StructsPollMessagePayload
     */
    options: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof StructsPollMessagePayload
     */
    selectableOptionsCount: number;
    /**
     * 
     * @type {string}
     * @memberof StructsPollMessagePayload
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof StructsPollMessagePayload
     */
    to: string;
}

/**
 * Check if a given object implements the StructsPollMessagePayload interface.
 */
export function instanceOfStructsPollMessagePayload(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "options" in value;
    isInstance = isInstance && "selectableOptionsCount" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function StructsPollMessagePayloadFromJSON(json: any): StructsPollMessagePayload {
    return StructsPollMessagePayloadFromJSONTyped(json, false);
}

export function StructsPollMessagePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructsPollMessagePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'options': json['options'],
        'selectableOptionsCount': json['selectable_options_count'],
        'title': json['title'],
        'to': json['to'],
    };
}

export function StructsPollMessagePayloadToJSON(value?: StructsPollMessagePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'options': value.options,
        'selectable_options_count': value.selectableOptionsCount,
        'title': value.title,
        'to': value.to,
    };
}

