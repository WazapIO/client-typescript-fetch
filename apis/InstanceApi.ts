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


import * as runtime from '../runtime';
import type {
  APIResponse,
  WebhookPayload,
} from '../models';
import {
    APIResponseFromJSON,
    APIResponseToJSON,
    WebhookPayloadFromJSON,
    WebhookPayloadToJSON,
} from '../models';

export interface InstancesCreateGetRequest {
    instanceKey?: string;
}

export interface InstancesInstanceKeyContactsGetRequest {
    instanceKey: string;
}

export interface InstancesInstanceKeyDeleteDeleteRequest {
    instanceKey: string;
}

export interface InstancesInstanceKeyGetRequest {
    instanceKey: string;
}

export interface InstancesInstanceKeyLogoutDeleteRequest {
    instanceKey: string;
}

export interface InstancesInstanceKeyQrcodeGetRequest {
    instanceKey: string;
}

export interface InstancesInstanceKeyWebhookPutRequest {
    instanceKey: string;
    data: WebhookPayload;
}

/**
 * 
 */
export class InstanceApi extends runtime.BaseAPI {

    /**
     * This endpoint is used to create a new WhatsApp Web instance.
     * Creates a new instance key.
     */
    async instancesCreateGetRaw(requestParameters: InstancesCreateGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        const queryParameters: any = {};

        if (requestParameters.instanceKey !== undefined) {
            queryParameters['instance_key'] = requestParameters.instanceKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/create`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint is used to create a new WhatsApp Web instance.
     * Creates a new instance key.
     */
    async instancesCreateGet(requestParameters: InstancesCreateGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.instancesCreateGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetches the list of contacts in the instance.
     * Get contacts.
     */
    async instancesInstanceKeyContactsGetRaw(requestParameters: InstancesInstanceKeyContactsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling instancesInstanceKeyContactsGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/contacts`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Fetches the list of contacts in the instance.
     * Get contacts.
     */
    async instancesInstanceKeyContactsGet(requestParameters: InstancesInstanceKeyContactsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.instancesInstanceKeyContactsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the instance with the provided key.
     * Delete Instance.
     */
    async instancesInstanceKeyDeleteDeleteRaw(requestParameters: InstancesInstanceKeyDeleteDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling instancesInstanceKeyDeleteDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/delete`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Deletes the instance with the provided key.
     * Delete Instance.
     */
    async instancesInstanceKeyDeleteDelete(requestParameters: InstancesInstanceKeyDeleteDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.instancesInstanceKeyDeleteDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the instance data of single instance with connection status.
     * Get Instance.
     */
    async instancesInstanceKeyGetRaw(requestParameters: InstancesInstanceKeyGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling instancesInstanceKeyGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Returns the instance data of single instance with connection status.
     * Get Instance.
     */
    async instancesInstanceKeyGet(requestParameters: InstancesInstanceKeyGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.instancesInstanceKeyGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Logouts of the instance with the provided key.
     * Logout Instance.
     */
    async instancesInstanceKeyLogoutDeleteRaw(requestParameters: InstancesInstanceKeyLogoutDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling instancesInstanceKeyLogoutDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/logout`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Logouts of the instance with the provided key.
     * Logout Instance.
     */
    async instancesInstanceKeyLogoutDelete(requestParameters: InstancesInstanceKeyLogoutDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.instancesInstanceKeyLogoutDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the qrcode in the base64 format.
     * Get QrCode.
     */
    async instancesInstanceKeyQrcodeGetRaw(requestParameters: InstancesInstanceKeyQrcodeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling instancesInstanceKeyQrcodeGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/qrcode`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Returns the qrcode in the base64 format.
     * Get QrCode.
     */
    async instancesInstanceKeyQrcodeGet(requestParameters: InstancesInstanceKeyQrcodeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.instancesInstanceKeyQrcodeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Changes the webhook url of an instance.
     * Change Webhook url.
     */
    async instancesInstanceKeyWebhookPutRaw(requestParameters: InstancesInstanceKeyWebhookPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling instancesInstanceKeyWebhookPut.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling instancesInstanceKeyWebhookPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/webhook`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookPayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Changes the webhook url of an instance.
     * Change Webhook url.
     */
    async instancesInstanceKeyWebhookPut(requestParameters: InstancesInstanceKeyWebhookPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.instancesInstanceKeyWebhookPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetches the list of all Instances with login status.
     * Get all instances.
     */
    async instancesListGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Fetches the list of all Instances with login status.
     * Get all instances.
     */
    async instancesListGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.instancesListGetRaw(initOverrides);
        return await response.value();
    }

}
