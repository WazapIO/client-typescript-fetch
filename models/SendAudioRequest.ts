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
 * @interface SendAudioRequest
 */
export interface SendAudioRequest {
    /**
     * Audio file
     * @type {Blob}
     * @memberof SendAudioRequest
     */
    file: Blob;
}

/**
 * Check if a given object implements the SendAudioRequest interface.
 */
export function instanceOfSendAudioRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "file" in value;

    return isInstance;
}

export function SendAudioRequestFromJSON(json: any): SendAudioRequest {
    return SendAudioRequestFromJSONTyped(json, false);
}

export function SendAudioRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendAudioRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'file': json['file'],
    };
}

export function SendAudioRequestToJSON(value?: SendAudioRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'file': value.file,
    };
}

