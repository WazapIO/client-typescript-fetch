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
import type { StructsListItem } from './StructsListItem';
import {
    StructsListItemFromJSON,
    StructsListItemFromJSONTyped,
    StructsListItemToJSON,
} from './StructsListItem';

/**
 * 
 * @export
 * @interface StructsListSection
 */
export interface StructsListSection {
    /**
     * 
     * @type {Array<StructsListItem>}
     * @memberof StructsListSection
     */
    rows: Array<StructsListItem>;
    /**
     * 
     * @type {string}
     * @memberof StructsListSection
     */
    title: string;
}

/**
 * Check if a given object implements the StructsListSection interface.
 */
export function instanceOfStructsListSection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rows" in value;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function StructsListSectionFromJSON(json: any): StructsListSection {
    return StructsListSectionFromJSONTyped(json, false);
}

export function StructsListSectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructsListSection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rows': ((json['rows'] as Array<any>).map(StructsListItemFromJSON)),
        'title': json['title'],
    };
}

export function StructsListSectionToJSON(value?: StructsListSection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rows': ((value.rows as Array<any>).map(StructsListItemToJSON)),
        'title': value.title,
    };
}

