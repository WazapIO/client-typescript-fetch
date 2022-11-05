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
import type { TemplateButton } from './TemplateButton';
import {
    TemplateButtonFromJSON,
    TemplateButtonFromJSONTyped,
    TemplateButtonToJSON,
} from './TemplateButton';

/**
 * 
 * @export
 * @interface TemplateButtonPayload
 */
export interface TemplateButtonPayload {
    /**
     * 
     * @type {Array<TemplateButton>}
     * @memberof TemplateButtonPayload
     */
    buttons: Array<TemplateButton>;
    /**
     * 
     * @type {string}
     * @memberof TemplateButtonPayload
     */
    contentText?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateButtonPayload
     */
    footer?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateButtonPayload
     */
    header?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateButtonPayload
     */
    to: string;
}

/**
 * Check if a given object implements the TemplateButtonPayload interface.
 */
export function instanceOfTemplateButtonPayload(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "buttons" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function TemplateButtonPayloadFromJSON(json: any): TemplateButtonPayload {
    return TemplateButtonPayloadFromJSONTyped(json, false);
}

export function TemplateButtonPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateButtonPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buttons': ((json['buttons'] as Array<any>).map(TemplateButtonFromJSON)),
        'contentText': !exists(json, 'content_text') ? undefined : json['content_text'],
        'footer': !exists(json, 'footer') ? undefined : json['footer'],
        'header': !exists(json, 'header') ? undefined : json['header'],
        'to': json['to'],
    };
}

export function TemplateButtonPayloadToJSON(value?: TemplateButtonPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buttons': ((value.buttons as Array<any>).map(TemplateButtonToJSON)),
        'content_text': value.contentText,
        'footer': value.footer,
        'header': value.header,
        'to': value.to,
    };
}

