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
 * @interface UploadMediaRequest
 */
export interface UploadMediaRequest {
    /**
     * Media file
     * @type {Blob}
     * @memberof UploadMediaRequest
     */
    file: Blob;
}

/**
 * Check if a given object implements the UploadMediaRequest interface.
 */
export function instanceOfUploadMediaRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "file" in value;

    return isInstance;
}

export function UploadMediaRequestFromJSON(json: any): UploadMediaRequest {
    return UploadMediaRequestFromJSONTyped(json, false);
}

export function UploadMediaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadMediaRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'file': json['file'],
    };
}

export function UploadMediaRequestToJSON(value?: UploadMediaRequest | null): any {
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

