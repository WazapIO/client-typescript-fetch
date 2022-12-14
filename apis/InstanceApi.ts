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
  CreateInstancePayload,
  WebhookPayload,
} from '../models';
import {
    APIResponseFromJSON,
    APIResponseToJSON,
    CreateInstancePayloadFromJSON,
    CreateInstancePayloadToJSON,
    WebhookPayloadFromJSON,
    WebhookPayloadToJSON,
} from '../models';

export interface ChangeWebhookUrlRequest {
    instanceKey: string;
    data: WebhookPayload;
}

export interface CreateInstanceRequest {
    data: CreateInstancePayload;
}

export interface DeleteInstanceRequest {
    instanceKey: string;
}

export interface GetContactsRequest {
    instanceKey: string;
}

export interface GetInstanceRequest {
    instanceKey: string;
}

export interface GetQrCodeRequest {
    instanceKey: string;
}

export interface LogoutInstanceRequest {
    instanceKey: string;
}

/**
 * 
 */
export class InstanceApi extends runtime.BaseAPI {

    /**
     * Changes the webhook url of an instance.
     * Change Webhook url.
     */
    async changeWebhookUrlRaw(requestParameters: ChangeWebhookUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling changeWebhookUrl.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling changeWebhookUrl.');
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
    async changeWebhookUrl(requestParameters: ChangeWebhookUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.changeWebhookUrlRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint is used to create a new WhatsApp Web instance.
     * Creates a new instance key.
     */
    async createInstanceRaw(requestParameters: CreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling createInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateInstancePayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint is used to create a new WhatsApp Web instance.
     * Creates a new instance key.
     */
    async createInstance(requestParameters: CreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.createInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the instance with the provided key.
     * Delete Instance.
     */
    async deleteInstanceRaw(requestParameters: DeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling deleteInstance.');
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
    async deleteInstance(requestParameters: DeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.deleteInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetches the list of contacts in the instance.
     * Get contacts.
     */
    async getContactsRaw(requestParameters: GetContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling getContacts.');
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
    async getContacts(requestParameters: GetContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.getContactsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the instance data of single instance with connection status.
     * Get Instance.
     */
    async getInstanceRaw(requestParameters: GetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling getInstance.');
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
    async getInstance(requestParameters: GetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.getInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the qrcode in the base64 format.
     * Get QrCode.
     */
    async getQrCodeRaw(requestParameters: GetQrCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling getQrCode.');
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
    async getQrCode(requestParameters: GetQrCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.getQrCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Fetches the list of all Instances with login status.
     * Get all instances.
     */
    async listInstancesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
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
    async listInstances(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.listInstancesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Logouts of the instance with the provided key.
     * Logout Instance.
     */
    async logoutInstanceRaw(requestParameters: LogoutInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling logoutInstance.');
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
    async logoutInstance(requestParameters: LogoutInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.logoutInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
