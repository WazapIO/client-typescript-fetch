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
import type { ReplyButton } from './ReplyButton';
import {
    ReplyButtonFromJSON,
    ReplyButtonFromJSONTyped,
    ReplyButtonToJSON,
} from './ReplyButton';

/**
 * 
 * @export
 * @interface ButtonMessageWithMediaPayload
 */
export interface ButtonMessageWithMediaPayload {
    /**
     * 
     * @type {Array<ReplyButton>}
     * @memberof ButtonMessageWithMediaPayload
     */
    buttons?: Array<ReplyButton>;
    /**
     * 
     * @type {string}
     * @memberof ButtonMessageWithMediaPayload
     */
    footerText?: string;
    /**
     * 
     * @type {FileUpload}
     * @memberof ButtonMessageWithMediaPayload
     */
    mediaData?: FileUpload;
    /**
     * 
     * @type {string}
     * @memberof ButtonMessageWithMediaPayload
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof ButtonMessageWithMediaPayload
     */
    to?: string;
}

/**
 * Check if a given object implements the ButtonMessageWithMediaPayload interface.
 */
export function instanceOfButtonMessageWithMediaPayload(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ButtonMessageWithMediaPayloadFromJSON(json: any): ButtonMessageWithMediaPayload {
    return ButtonMessageWithMediaPayloadFromJSONTyped(json, false);
}

export function ButtonMessageWithMediaPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ButtonMessageWithMediaPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buttons': !exists(json, 'buttons') ? undefined : ((json['buttons'] as Array<any>).map(ReplyButtonFromJSON)),
        'footerText': !exists(json, 'footer_text') ? undefined : json['footer_text'],
        'mediaData': !exists(json, 'media_data') ? undefined : FileUploadFromJSON(json['media_data']),
        'text': !exists(json, 'text') ? undefined : json['text'],
        'to': !exists(json, 'to') ? undefined : json['to'],
    };
}

export function ButtonMessageWithMediaPayloadToJSON(value?: ButtonMessageWithMediaPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buttons': value.buttons === undefined ? undefined : ((value.buttons as Array<any>).map(ReplyButtonToJSON)),
        'footer_text': value.footerText,
        'media_data': FileUploadToJSON(value.mediaData),
        'text': value.text,
        'to': value.to,
    };
}
