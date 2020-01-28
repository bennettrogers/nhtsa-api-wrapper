import fetch from 'cross-fetch';

import { getTypeof, makeQueryString, QueryStringParameters } from '../utils';

export interface NhtsaConfig {
  apiResponseFormat: string | undefined;
  baseUrl: string | undefined;
}

export type NhtsaResponse = {
  headers?: Headers;
  ok?: boolean;
  redirected?: boolean;
  status?: number;
  statusText?: string;
  url?: string;
  [propName: string]: any;
};

export const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export const DEFAULT_CONFIG = {
  apiResponseFormat: 'json',
  baseUrl: BASE_URL
};

export class Fetch {
  apiResponseFormat: string | undefined;
  baseUrl: string | undefined;
  config: NhtsaConfig;

  constructor(userConfig?: NhtsaConfig) {
    let finalConfig: NhtsaConfig;

    if (getTypeof(userConfig) === 'object') {
      finalConfig = { ...DEFAULT_CONFIG, ...userConfig };
    } else {
      finalConfig = { ...DEFAULT_CONFIG };
    }

    this.apiResponseFormat = finalConfig.apiResponseFormat;
    this.baseUrl = finalConfig.baseUrl;
    this.config = finalConfig;
  }

  public async buildQueryString(
    params: QueryStringParameters
  ): Promise<string | Error> {
    /*
     * Make sure we're always using 'format=json' in the url Query parameters
     * If the user provides a 'format' key in the params, during class instantiation we want to override it to 'json'
     * Support for the other formats (CSV and XML) can be added at a later date by configuring the fetch request
     */
    if (!params || getTypeof(params) !== 'object') {
      params = {
        format: this.apiResponseFormat
      };
    } else {
      params = { ...params, format: this.apiResponseFormat };
    }

    return await makeQueryString(params);
  }

  public async get(url: string): Promise<NhtsaResponse | Error> {
    if (getTypeof(url) !== 'string') {
      return Promise.reject(
        new Error('Fetch.get(url) - url argument must be of type string')
      );
    }

    const response: Response = await fetch(url)
      .then(result => {
        if (result?.status >= 400) {
          throw new Error(
            `Bad response from server, status code: ${result.status}, ${result.statusText}`
          );
        }

        return result;
      })
      .catch(err => Promise.reject(new Error(`Fetch.get() error: ${err}`)));

    const json = await response.json();

    return Promise.resolve({
      ...json,
      headers: response?.headers,
      ok: response?.ok,
      redirected: response?.redirected,
      status: response?.status,
      statusText: response?.statusText,
      url: response?.url
    });
  }
}