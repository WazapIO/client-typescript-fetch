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
 * @interface TextMessage
 */
export interface TextMessage {
    /**
     * 
     * @type {string}
     * @memberof TextMessage
     */
    text: string;
    /**
     * 
     * @type {string}
     * @memberof TextMessage
     */
    to: string;
}

/**
 * Check if a given object implements the TextMessage interface.
 */
export function instanceOfTextMessage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "text" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function TextMessageFromJSON(json: any): TextMessage {
    return TextMessageFromJSONTyped(json, false);
}

export function TextMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'text': json['text'],
        'to': json['to'],
    };
}

export function TextMessageToJSON(value?: TextMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'text': value.text,
        'to': value.to,
    };
}

