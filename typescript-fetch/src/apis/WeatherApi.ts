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
  WeatherConfig,
  WeatherDTO,
} from '../models/index';
import {
    WeatherConfigFromJSON,
    WeatherConfigToJSON,
    WeatherDTOFromJSON,
    WeatherDTOToJSON,
} from '../models/index';

export interface GetForecastRequest {
    id: string;
}

export interface GetWeatherConfigRequest {
    id: string;
}

export interface UpdateWeatherConfigRequest {
    id: string;
    weatherConfig: WeatherConfig;
}

/**
 * 
 */
export class WeatherApi extends runtime.BaseAPI {

    /**
     * Get weather forecast information
     */
    async getForecastRaw(requestParameters: GetForecastRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WeatherDTO>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getForecast().'
            );
        }

        const queryParameters: any = {};

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
            path: `/api/v1/athlete/{id}/weather-forecast`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WeatherDTOFromJSON(jsonValue));
    }

    /**
     * Get weather forecast information
     */
    async getForecast(requestParameters: GetForecastRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WeatherDTO> {
        const response = await this.getForecastRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the athlete\'s weather forecast configuration
     */
    async getWeatherConfigRaw(requestParameters: GetWeatherConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WeatherConfig>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getWeatherConfig().'
            );
        }

        const queryParameters: any = {};

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
            path: `/api/v1/athlete/{id}/weather-config`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WeatherConfigFromJSON(jsonValue));
    }

    /**
     * Get the athlete\'s weather forecast configuration
     */
    async getWeatherConfig(requestParameters: GetWeatherConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WeatherConfig> {
        const response = await this.getWeatherConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the athlete\'s weather forecast configuration
     */
    async updateWeatherConfigRaw(requestParameters: UpdateWeatherConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WeatherConfig>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateWeatherConfig().'
            );
        }

        if (requestParameters['weatherConfig'] == null) {
            throw new runtime.RequiredError(
                'weatherConfig',
                'Required parameter "weatherConfig" was null or undefined when calling updateWeatherConfig().'
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
            path: `/api/v1/athlete/{id}/weather-config`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: WeatherConfigToJSON(requestParameters['weatherConfig']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WeatherConfigFromJSON(jsonValue));
    }

    /**
     * Update the athlete\'s weather forecast configuration
     */
    async updateWeatherConfig(requestParameters: UpdateWeatherConfigRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WeatherConfig> {
        const response = await this.updateWeatherConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
