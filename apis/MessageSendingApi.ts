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
  ButtonMessagePayload,
  ButtonMessageWithMediaPayload,
  ContactMessagePayload,
  ListMessagePayload,
  LocationMessagePayload,
  PollMessagePayload,
  SendAudioRequest,
  SendDocumentRequest,
  SendImageRequest,
  SendMediaPayload,
  SendVideoRequest,
  TemplateButtonPayload,
  TemplateButtonWithMediaPayload,
  TextMessage,
  UploadMediaRequest,
} from '../models';
import {
    APIResponseFromJSON,
    APIResponseToJSON,
    ButtonMessagePayloadFromJSON,
    ButtonMessagePayloadToJSON,
    ButtonMessageWithMediaPayloadFromJSON,
    ButtonMessageWithMediaPayloadToJSON,
    ContactMessagePayloadFromJSON,
    ContactMessagePayloadToJSON,
    ListMessagePayloadFromJSON,
    ListMessagePayloadToJSON,
    LocationMessagePayloadFromJSON,
    LocationMessagePayloadToJSON,
    PollMessagePayloadFromJSON,
    PollMessagePayloadToJSON,
    SendAudioRequestFromJSON,
    SendAudioRequestToJSON,
    SendDocumentRequestFromJSON,
    SendDocumentRequestToJSON,
    SendImageRequestFromJSON,
    SendImageRequestToJSON,
    SendMediaPayloadFromJSON,
    SendMediaPayloadToJSON,
    SendVideoRequestFromJSON,
    SendVideoRequestToJSON,
    TemplateButtonPayloadFromJSON,
    TemplateButtonPayloadToJSON,
    TemplateButtonWithMediaPayloadFromJSON,
    TemplateButtonWithMediaPayloadToJSON,
    TextMessageFromJSON,
    TextMessageToJSON,
    UploadMediaRequestFromJSON,
    UploadMediaRequestToJSON,
} from '../models';

export interface SendAudioOperationRequest {
    instanceKey: string;
    to: string;
    sendAudioRequest: SendAudioRequest;
    caption?: string;
}

export interface SendButtonMessageRequest {
    instanceKey: string;
    data: ButtonMessagePayload;
}

export interface SendButtonWithMediaRequest {
    instanceKey: string;
    data: ButtonMessageWithMediaPayload;
}

export interface SendContactRequest {
    instanceKey: string;
    data: ContactMessagePayload;
}

export interface SendDocumentOperationRequest {
    instanceKey: string;
    to: string;
    sendDocumentRequest: SendDocumentRequest;
    caption?: string;
}

export interface SendImageOperationRequest {
    instanceKey: string;
    to: string;
    sendImageRequest: SendImageRequest;
    caption?: string;
}

export interface SendListMessageRequest {
    instanceKey: string;
    data: ListMessagePayload;
}

export interface SendLocationRequest {
    instanceKey: string;
    data: LocationMessagePayload;
}

export interface SendMediaMessageRequest {
    instanceKey: string;
    data: SendMediaPayload;
}

export interface SendPollMessageRequest {
    instanceKey: string;
    data: PollMessagePayload;
}

export interface SendTemplateRequest {
    instanceKey: string;
    data: TemplateButtonPayload;
}

export interface SendTemplateWithMediaRequest {
    instanceKey: string;
    data: TemplateButtonWithMediaPayload;
}

export interface SendTextMessageRequest {
    instanceKey: string;
    data: TextMessage;
}

export interface SendVideoOperationRequest {
    instanceKey: string;
    to: string;
    sendVideoRequest: SendVideoRequest;
    caption?: string;
}

export interface UploadMediaOperationRequest {
    instanceKey: string;
    type: UploadMediaTypeEnum;
    uploadMediaRequest: UploadMediaRequest;
}

/**
 * 
 */
export class MessageSendingApi extends runtime.BaseAPI {

    /**
     * Sends a audio message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * Send raw audio.
     */
    async sendAudioRaw(requestParameters: SendAudioOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendAudio.');
        }

        if (requestParameters.to === null || requestParameters.to === undefined) {
            throw new runtime.RequiredError('to','Required parameter requestParameters.to was null or undefined when calling sendAudio.');
        }

        if (requestParameters.sendAudioRequest === null || requestParameters.sendAudioRequest === undefined) {
            throw new runtime.RequiredError('sendAudioRequest','Required parameter requestParameters.sendAudioRequest was null or undefined when calling sendAudio.');
        }

        const queryParameters: any = {};

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        if (requestParameters.caption !== undefined) {
            queryParameters['caption'] = requestParameters.caption;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/audio`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendAudioRequestToJSON(requestParameters.sendAudioRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends a audio message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * Send raw audio.
     */
    async sendAudio(requestParameters: SendAudioOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendAudioRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends an interactive button message to the given user. Make sure that all the button ids are unique
     * Send a button message.
     */
    async sendButtonMessageRaw(requestParameters: SendButtonMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendButtonMessage.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling sendButtonMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/buttons`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ButtonMessagePayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends an interactive button message to the given user. Make sure that all the button ids are unique
     * Send a button message.
     */
    async sendButtonMessage(requestParameters: SendButtonMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendButtonMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends an interactive button message to the given user. This message also has media header with it. Make sure that all the button ids are unique
     * Send a button message with a media header.
     */
    async sendButtonWithMediaRaw(requestParameters: SendButtonWithMediaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendButtonWithMedia.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling sendButtonWithMedia.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/button-media`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ButtonMessageWithMediaPayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends an interactive button message to the given user. This message also has media header with it. Make sure that all the button ids are unique
     * Send a button message with a media header.
     */
    async sendButtonWithMedia(requestParameters: SendButtonWithMediaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendButtonWithMediaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends a contact (vcard) message to the given user.
     * Send a contact message.
     */
    async sendContactRaw(requestParameters: SendContactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendContact.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling sendContact.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/contact`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ContactMessagePayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends a contact (vcard) message to the given user.
     * Send a contact message.
     */
    async sendContact(requestParameters: SendContactRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendContactRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends a document message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * Send raw document.
     */
    async sendDocumentRaw(requestParameters: SendDocumentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendDocument.');
        }

        if (requestParameters.to === null || requestParameters.to === undefined) {
            throw new runtime.RequiredError('to','Required parameter requestParameters.to was null or undefined when calling sendDocument.');
        }

        if (requestParameters.sendDocumentRequest === null || requestParameters.sendDocumentRequest === undefined) {
            throw new runtime.RequiredError('sendDocumentRequest','Required parameter requestParameters.sendDocumentRequest was null or undefined when calling sendDocument.');
        }

        const queryParameters: any = {};

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        if (requestParameters.caption !== undefined) {
            queryParameters['caption'] = requestParameters.caption;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/document`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendDocumentRequestToJSON(requestParameters.sendDocumentRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends a document message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * Send raw document.
     */
    async sendDocument(requestParameters: SendDocumentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends a image message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * Send raw image.
     */
    async sendImageRaw(requestParameters: SendImageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendImage.');
        }

        if (requestParameters.to === null || requestParameters.to === undefined) {
            throw new runtime.RequiredError('to','Required parameter requestParameters.to was null or undefined when calling sendImage.');
        }

        if (requestParameters.sendImageRequest === null || requestParameters.sendImageRequest === undefined) {
            throw new runtime.RequiredError('sendImageRequest','Required parameter requestParameters.sendImageRequest was null or undefined when calling sendImage.');
        }

        const queryParameters: any = {};

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        if (requestParameters.caption !== undefined) {
            queryParameters['caption'] = requestParameters.caption;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/image`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendImageRequestToJSON(requestParameters.sendImageRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends a image message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * Send raw image.
     */
    async sendImage(requestParameters: SendImageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends an interactive List message to the given user.
     * Send a List message.
     */
    async sendListMessageRaw(requestParameters: SendListMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendListMessage.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling sendListMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/list`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ListMessagePayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends an interactive List message to the given user.
     * Send a List message.
     */
    async sendListMessage(requestParameters: SendListMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendListMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends a location message to the given user. This is static location and does not update Note: The Address and Url fields are optional
     * Send a location message.
     */
    async sendLocationRaw(requestParameters: SendLocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendLocation.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling sendLocation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/location`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LocationMessagePayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends a location message to the given user. This is static location and does not update Note: The Address and Url fields are optional
     * Send a location message.
     */
    async sendLocation(requestParameters: SendLocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendLocationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends a media message to the given user.
     * Send a media message.
     */
    async sendMediaMessageRaw(requestParameters: SendMediaMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendMediaMessage.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling sendMediaMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/media`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendMediaPayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends a media message to the given user.
     * Send a media message.
     */
    async sendMediaMessage(requestParameters: SendMediaMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendMediaMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends an interactive poll message to the given user. The poll message is a new feature that is currently in beta.
     * Send a Poll message.
     */
    async sendPollMessageRaw(requestParameters: SendPollMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendPollMessage.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling sendPollMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/poll`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PollMessagePayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends an interactive poll message to the given user. The poll message is a new feature that is currently in beta.
     * Send a Poll message.
     */
    async sendPollMessage(requestParameters: SendPollMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendPollMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends an interactive template message to the given user. Note: The valid button types are \"replyButton\", \"urlButton\", \"callButton\"
     * Send a template message.
     */
    async sendTemplateRaw(requestParameters: SendTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendTemplate.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling sendTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/template`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TemplateButtonPayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends an interactive template message to the given user. Note: The valid button types are \"replyButton\", \"urlButton\", \"callButton\"
     * Send a template message.
     */
    async sendTemplate(requestParameters: SendTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends an interactive template message with a media header to the given user. Note: The valid button types are \"replyButton\", \"urlButton\", \"callButton\"
     * Send a template message with media.
     */
    async sendTemplateWithMediaRaw(requestParameters: SendTemplateWithMediaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendTemplateWithMedia.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling sendTemplateWithMedia.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/template-media`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TemplateButtonWithMediaPayloadToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends an interactive template message with a media header to the given user. Note: The valid button types are \"replyButton\", \"urlButton\", \"callButton\"
     * Send a template message with media.
     */
    async sendTemplateWithMedia(requestParameters: SendTemplateWithMediaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendTemplateWithMediaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends a text message to the given user.
     * Send a text message.
     */
    async sendTextMessageRaw(requestParameters: SendTextMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendTextMessage.');
        }

        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling sendTextMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/text`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TextMessageToJSON(requestParameters.data),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends a text message to the given user.
     * Send a text message.
     */
    async sendTextMessage(requestParameters: SendTextMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendTextMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sends a video message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * Send raw video.
     */
    async sendVideoRaw(requestParameters: SendVideoOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling sendVideo.');
        }

        if (requestParameters.to === null || requestParameters.to === undefined) {
            throw new runtime.RequiredError('to','Required parameter requestParameters.to was null or undefined when calling sendVideo.');
        }

        if (requestParameters.sendVideoRequest === null || requestParameters.sendVideoRequest === undefined) {
            throw new runtime.RequiredError('sendVideoRequest','Required parameter requestParameters.sendVideoRequest was null or undefined when calling sendVideo.');
        }

        const queryParameters: any = {};

        if (requestParameters.to !== undefined) {
            queryParameters['to'] = requestParameters.to;
        }

        if (requestParameters.caption !== undefined) {
            queryParameters['caption'] = requestParameters.caption;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/video`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SendVideoRequestToJSON(requestParameters.sendVideoRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Sends a video message by uploading to the WhatsApp servers every time. This is not recommended for bulk sending.
     * Send raw video.
     */
    async sendVideo(requestParameters: SendVideoOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.sendVideoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Uploads media to WhatsApp servers and returns the media keys. Store the returned media keys, as you will need them to send media messages
     * Upload media.
     */
    async uploadMediaRaw(requestParameters: UploadMediaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<APIResponse>> {
        if (requestParameters.instanceKey === null || requestParameters.instanceKey === undefined) {
            throw new runtime.RequiredError('instanceKey','Required parameter requestParameters.instanceKey was null or undefined when calling uploadMedia.');
        }

        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling uploadMedia.');
        }

        if (requestParameters.uploadMediaRequest === null || requestParameters.uploadMediaRequest === undefined) {
            throw new runtime.RequiredError('uploadMediaRequest','Required parameter requestParameters.uploadMediaRequest was null or undefined when calling uploadMedia.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/instances/{instance_key}/send/upload`.replace(`{${"instance_key"}}`, encodeURIComponent(String(requestParameters.instanceKey))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UploadMediaRequestToJSON(requestParameters.uploadMediaRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => APIResponseFromJSON(jsonValue));
    }

    /**
     * Uploads media to WhatsApp servers and returns the media keys. Store the returned media keys, as you will need them to send media messages
     * Upload media.
     */
    async uploadMedia(requestParameters: UploadMediaOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<APIResponse> {
        const response = await this.uploadMediaRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const UploadMediaOperationTypeEnum = {
    Image: 'image',
    Video: 'video',
    Audio: 'audio',
    Document: 'document'
} as const;
export type UploadMediaOperationTypeEnum = typeof UploadMediaOperationTypeEnum[keyof typeof UploadMediaOperationTypeEnum];
