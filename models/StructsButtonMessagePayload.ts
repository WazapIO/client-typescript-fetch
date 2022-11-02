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
import type { StructsReplyButton } from './StructsReplyButton';
import {
    StructsReplyButtonFromJSON,
    StructsReplyButtonFromJSONTyped,
    StructsReplyButtonToJSON,
} from './StructsReplyButton';

/**
 * 
 * @export
 * @interface StructsButtonMessagePayload
 */
export interface StructsButtonMessagePayload {
    /**
     * 
     * @type {Array<StructsReplyButton>}
     * @memberof StructsButtonMessagePayload
     */
    buttons?: Array<StructsReplyButton>;
    /**
     * 
     * @type {string}
     * @memberof StructsButtonMessagePayload
     */
    footerText?: string;
    /**
     * 
     * @type {string}
     * @memberof StructsButtonMessagePayload
     */
    headerText?: string;
    /**
     * 
     * @type {string}
     * @memberof StructsButtonMessagePayload
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof StructsButtonMessagePayload
     */
    to?: string;
}

/**
 * Check if a given object implements the StructsButtonMessagePayload interface.
 */
export function instanceOfStructsButtonMessagePayload(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StructsButtonMessagePayloadFromJSON(json: any): StructsButtonMessagePayload {
    return StructsButtonMessagePayloadFromJSONTyped(json, false);
}

export function StructsButtonMessagePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructsButtonMessagePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buttons': !exists(json, 'buttons') ? undefined : ((json['buttons'] as Array<any>).map(StructsReplyButtonFromJSON)),
        'footerText': !exists(json, 'footer_text') ? undefined : json['footer_text'],
        'headerText': !exists(json, 'header_text') ? undefined : json['header_text'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'to': !exists(json, 'to') ? undefined : json['to'],
    };
}

export function StructsButtonMessagePayloadToJSON(value?: StructsButtonMessagePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buttons': value.buttons === undefined ? undefined : ((value.buttons as Array<any>).map(StructsReplyButtonToJSON)),
        'footer_text': value.footerText,
        'header_text': value.headerText,
        'text': value.text,
        'to': value.to,
    };
}

