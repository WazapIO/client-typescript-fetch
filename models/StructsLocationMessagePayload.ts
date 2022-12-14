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
import type { StructsLocationMessagePayloadLocation } from './StructsLocationMessagePayloadLocation';
import {
    StructsLocationMessagePayloadLocationFromJSON,
    StructsLocationMessagePayloadLocationFromJSONTyped,
    StructsLocationMessagePayloadLocationToJSON,
} from './StructsLocationMessagePayloadLocation';

/**
 * 
 * @export
 * @interface StructsLocationMessagePayload
 */
export interface StructsLocationMessagePayload {
    /**
     * 
     * @type {StructsLocationMessagePayloadLocation}
     * @memberof StructsLocationMessagePayload
     */
    location: StructsLocationMessagePayloadLocation;
    /**
     * 
     * @type {string}
     * @memberof StructsLocationMessagePayload
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof StructsLocationMessagePayload
     */
    url?: string;
}

/**
 * Check if a given object implements the StructsLocationMessagePayload interface.
 */
export function instanceOfStructsLocationMessagePayload(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "location" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function StructsLocationMessagePayloadFromJSON(json: any): StructsLocationMessagePayload {
    return StructsLocationMessagePayloadFromJSONTyped(json, false);
}

export function StructsLocationMessagePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructsLocationMessagePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'location': StructsLocationMessagePayloadLocationFromJSON(json['location']),
        'to': json['to'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function StructsLocationMessagePayloadToJSON(value?: StructsLocationMessagePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'location': StructsLocationMessagePayloadLocationToJSON(value.location),
        'to': value.to,
        'url': value.url,
    };
}

