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
import type { FileUpload } from './FileUpload';
import {
    FileUploadFromJSON,
    FileUploadFromJSONTyped,
    FileUploadToJSON,
} from './FileUpload';

/**
 * 
 * @export
 * @interface SendMediaPayload
 */
export interface SendMediaPayload {
    /**
     * 
     * @type {string}
     * @memberof SendMediaPayload
     */
    caption?: string;
    /**
     * 
     * @type {string}
     * @memberof SendMediaPayload
     */
    filename?: string;
    /**
     * 
     * @type {FileUpload}
     * @memberof SendMediaPayload
     */
    mediaData: FileUpload;
    /**
     * 
     * @type {string}
     * @memberof SendMediaPayload
     */
    mediaType: string;
    /**
     * 
     * @type {string}
     * @memberof SendMediaPayload
     */
    to: string;
}

/**
 * Check if a given object implements the SendMediaPayload interface.
 */
export function instanceOfSendMediaPayload(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mediaData" in value;
    isInstance = isInstance && "mediaType" in value;
    isInstance = isInstance && "to" in value;

    return isInstance;
}

export function SendMediaPayloadFromJSON(json: any): SendMediaPayload {
    return SendMediaPayloadFromJSONTyped(json, false);
}

export function SendMediaPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendMediaPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caption': !exists(json, 'caption') ? undefined : json['caption'],
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'mediaData': FileUploadFromJSON(json['media_data']),
        'mediaType': json['media_type'],
        'to': json['to'],
    };
}

export function SendMediaPayloadToJSON(value?: SendMediaPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caption': value.caption,
        'filename': value.filename,
        'media_data': FileUploadToJSON(value.mediaData),
        'media_type': value.mediaType,
        'to': value.to,
    };
}

