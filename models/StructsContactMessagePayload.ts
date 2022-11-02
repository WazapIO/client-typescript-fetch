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
import type { StructsContactMessagePayloadVcard } from './StructsContactMessagePayloadVcard';
import {
    StructsContactMessagePayloadVcardFromJSON,
    StructsContactMessagePayloadVcardFromJSONTyped,
    StructsContactMessagePayloadVcardToJSON,
} from './StructsContactMessagePayloadVcard';

/**
 * 
 * @export
 * @interface StructsContactMessagePayload
 */
export interface StructsContactMessagePayload {
    /**
     * 
     * @type {string}
     * @memberof StructsContactMessagePayload
     */
    to: string;
    /**
     * 
     * @type {StructsContactMessagePayloadVcard}
     * @memberof StructsContactMessagePayload
     */
    vcard: StructsContactMessagePayloadVcard;
}

/**
 * Check if a given object implements the StructsContactMessagePayload interface.
 */
export function instanceOfStructsContactMessagePayload(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "vcard" in value;

    return isInstance;
}

export function StructsContactMessagePayloadFromJSON(json: any): StructsContactMessagePayload {
    return StructsContactMessagePayloadFromJSONTyped(json, false);
}

export function StructsContactMessagePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructsContactMessagePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'to': json['to'],
        'vcard': StructsContactMessagePayloadVcardFromJSON(json['vcard']),
    };
}

export function StructsContactMessagePayloadToJSON(value?: StructsContactMessagePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'to': value.to,
        'vcard': StructsContactMessagePayloadVcardToJSON(value.vcard),
    };
}
