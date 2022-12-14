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
 * @interface StructsUserInfoPayload
 */
export interface StructsUserInfoPayload {
    /**
     * 
     * @type {Array<string>}
     * @memberof StructsUserInfoPayload
     */
    userIds: Array<string>;
}

/**
 * Check if a given object implements the StructsUserInfoPayload interface.
 */
export function instanceOfStructsUserInfoPayload(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userIds" in value;

    return isInstance;
}

export function StructsUserInfoPayloadFromJSON(json: any): StructsUserInfoPayload {
    return StructsUserInfoPayloadFromJSONTyped(json, false);
}

export function StructsUserInfoPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructsUserInfoPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userIds': json['user_ids'],
    };
}

export function StructsUserInfoPayloadToJSON(value?: StructsUserInfoPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_ids': value.userIds,
    };
}

