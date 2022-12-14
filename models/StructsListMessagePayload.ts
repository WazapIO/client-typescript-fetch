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
import type { StructsListSection } from './StructsListSection';
import {
    StructsListSectionFromJSON,
    StructsListSectionFromJSONTyped,
    StructsListSectionToJSON,
} from './StructsListSection';

/**
 * 
 * @export
 * @interface StructsListMessagePayload
 */
export interface StructsListMessagePayload {
    /**
     * 
     * @type {string}
     * @memberof StructsListMessagePayload
     */
    buttonText?: string;
    /**
     * 
     * @type {string}
     * @memberof StructsListMessagePayload
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StructsListMessagePayload
     */
    multiSelect?: boolean;
    /**
     * 
     * @type {Array<StructsListSection>}
     * @memberof StructsListMessagePayload
     */
    sections: Array<StructsListSection>;
    /**
     * 
     * @type {string}
     * @memberof StructsListMessagePayload
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof StructsListMessagePayload
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof StructsListMessagePayload
     */
    to: string;
}

/**
 * Check if a given object implements the StructsListMessagePayload interface.
 */
export function instanceOfStructsListMessagePayload(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sections" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function StructsListMessagePayloadFromJSON(json: any): StructsListMessagePayload {
    return StructsListMessagePayloadFromJSONTyped(json, false);
}

export function StructsListMessagePayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructsListMessagePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buttonText': !exists(json, 'button_text') ? undefined : json['button_text'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'multiSelect': !exists(json, 'multi_select') ? undefined : json['multi_select'],
        'sections': ((json['sections'] as Array<any>).map(StructsListSectionFromJSON)),
        'text': !exists(json, 'text') ? undefined : json['text'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'to': json['to'],
    };
}

export function StructsListMessagePayloadToJSON(value?: StructsListMessagePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'button_text': value.buttonText,
        'description': value.description,
        'multi_select': value.multiSelect,
        'sections': ((value.sections as Array<any>).map(StructsListSectionToJSON)),
        'text': value.text,
        'title': value.title,
        'to': value.to,
    };
}

