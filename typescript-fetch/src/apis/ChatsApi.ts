/* tslint:disable */
/* eslint-disable */
/**
 * Intervals.icu API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Message,
  NewActivityMsg,
  NewMsg,
} from '../models/index';
import {
    MessageFromJSON,
    MessageToJSON,
    NewActivityMsgFromJSON,
    NewActivityMsgToJSON,
    NewMsgFromJSON,
    NewMsgToJSON,
} from '../models/index';

export interface ListActivityMessagesRequest {
    id: string;
    sinceId?: number;
    limit?: number;
}

export interface SendActivityMessageRequest {
    id: string;
    newActivityMsg: NewActivityMsg;
}

/**
 * 
 */
export class ChatsApi extends runtime.BaseAPI {

    /**
     * List all messages (comments) for the activity
     */
    async listActivityMessagesRaw(requestParameters: ListActivityMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Message>>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling listActivityMessages().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['sinceId'] != null) {
            queryParameters['sinceId'] = requestParameters['sinceId'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("AccessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/activity/{id}/messages`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MessageFromJSON));
    }

    /**
     * List all messages (comments) for the activity
     */
    async listActivityMessages(requestParameters: ListActivityMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Message>> {
        const response = await this.listActivityMessagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add a message (comment) to an activity
     */
    async sendActivityMessageRaw(requestParameters: SendActivityMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NewMsg>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling sendActivityMessage().'
            );
        }

        if (requestParameters['newActivityMsg'] == null) {
            throw new runtime.RequiredError(
                'newActivityMsg',
                'Required parameter "newActivityMsg" was null or undefined when calling sendActivityMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("AccessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/activity/{id}/messages`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewActivityMsgToJSON(requestParameters['newActivityMsg']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NewMsgFromJSON(jsonValue));
    }

    /**
     * Add a message (comment) to an activity
     */
    async sendActivityMessage(requestParameters: SendActivityMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NewMsg> {
        const response = await this.sendActivityMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
