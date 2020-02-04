// tslint:disable
/**
 * フロント⇆バックエンド用リファレンス
 * cloudfunctionでフロントからDBを叩くためのAPI
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// @ts-ignore
import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    image: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    madeBy: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    subject?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    comment: string;
    /**
     * 
     * @type {boolean}
     * @memberof Comment
     */
    isRecommend: boolean;
}
/**
 * 
 * @export
 * @interface ModelClass
 */
export interface ModelClass {
    /**
     * 
     * @type {string}
     * @memberof ModelClass
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelClass
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof ModelClass
     */
    faculty: string;
    /**
     * 
     * @type {number}
     * @memberof ModelClass
     */
    favAmount: number;
    /**
     * 
     * @type {string}
     * @memberof ModelClass
     */
    department: string;
    /**
     * 
     * @type {string}
     * @memberof ModelClass
     */
    grade: string;
    /**
     * 
     * @type {string}
     * @memberof ModelClass
     */
    professor: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelClass
     */
    isRandom: boolean;
    /**
     * 
     * @type {number}
     * @memberof ModelClass
     */
    rating: number;
    /**
     * 
     * @type {string}
     * @memberof ModelClass
     */
    term: string;
    /**
     * 
     * @type {string}
     * @memberof ModelClass
     */
    updateBy: string;
    /**
     * 
     * @type {string}
     * @memberof ModelClass
     */
    madeBy: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 授業データを取得する、授業名が指定された場合、その授業のデータを取得する。
         * @param {string} [className] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classDataGet(className?: string, options: any = {}): RequestArgs {
            const localVarPath = `/class_data`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (className !== undefined) {
                localVarQueryParameter['class_name'] = className;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 授業を新規に投稿する
         * @param {ModelClass} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classDataPost(data: ModelClass, options: any = {}): RequestArgs {
            // verify required parameter 'data' is not null or undefined
            if (data === null || data === undefined) {
                throw new RequiredError('data','Required parameter data was null or undefined when calling classDataPost.');
            }
            const localVarPath = `/class_data`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firebaseAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("Authorization")
                    : configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof data !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(data !== undefined ? data : {}) : (data || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 授業名とヘッダーに含まれた情報を使用して授業情報の削除をする。
         * @summary コメントを削除する
         * @param {string} className 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentDelete(className: string, options: any = {}): RequestArgs {
            // verify required parameter 'className' is not null or undefined
            if (className === null || className === undefined) {
                throw new RequiredError('className','Required parameter className was null or undefined when calling commentDelete.');
            }
            const localVarPath = `/comment`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firebaseAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("Authorization")
                    : configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (className !== undefined) {
                localVarQueryParameter['class_name'] = className;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 授業のコメントをコメントidから取得する、コメントidが指定されなかった場合はその授業のコメント全て取得する。
         * @param {string} className 
         * @param {number} [commentId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentGet(className: string, commentId?: number, options: any = {}): RequestArgs {
            // verify required parameter 'className' is not null or undefined
            if (className === null || className === undefined) {
                throw new RequiredError('className','Required parameter className was null or undefined when calling commentGet.');
            }
            const localVarPath = `/comment`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (commentId !== undefined) {
                localVarQueryParameter['comment_id'] = commentId;
            }

            if (className !== undefined) {
                localVarQueryParameter['class_name'] = className;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 授業に対してコメントを追加する。
         * @summary コメントを新規に投稿する
         * @param {string} className 
         * @param {Comment} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentPost(className: string, body: Comment, options: any = {}): RequestArgs {
            // verify required parameter 'className' is not null or undefined
            if (className === null || className === undefined) {
                throw new RequiredError('className','Required parameter className was null or undefined when calling commentPost.');
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling commentPost.');
            }
            const localVarPath = `/comment`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firebaseAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("Authorization")
                    : configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
            }

            if (className !== undefined) {
                localVarQueryParameter['class_name'] = className;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary コメントを一括取得する
         * @param {string} className 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsGet(className: string, options: any = {}): RequestArgs {
            // verify required parameter 'className' is not null or undefined
            if (className === null || className === undefined) {
                throw new RequiredError('className','Required parameter className was null or undefined when calling commentsGet.');
            }
            const localVarPath = `/comments`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (className !== undefined) {
                localVarQueryParameter['class_name'] = className;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 授業データがすでに存在しているかを確認する
         * @param {string} className 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        existClassGet(className: string, options: any = {}): RequestArgs {
            // verify required parameter 'className' is not null or undefined
            if (className === null || className === undefined) {
                throw new RequiredError('className','Required parameter className was null or undefined when calling existClassGet.');
            }
            const localVarPath = `/exist_class`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (className !== undefined) {
                localVarQueryParameter['class_name'] = className;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 授業データを取得する、授業名が指定された場合、その授業のデータを取得する。
         * @param {string} [className] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classDataGet(className?: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ModelClass>> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).classDataGet(className, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 授業を新規に投稿する
         * @param {ModelClass} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classDataPost(data: ModelClass, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).classDataPost(data, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 授業名とヘッダーに含まれた情報を使用して授業情報の削除をする。
         * @summary コメントを削除する
         * @param {string} className 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentDelete(className: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).commentDelete(className, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 授業のコメントをコメントidから取得する、コメントidが指定されなかった場合はその授業のコメント全て取得する。
         * @param {string} className 
         * @param {number} [commentId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentGet(className: string, commentId?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Comment>> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).commentGet(className, commentId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 授業に対してコメントを追加する。
         * @summary コメントを新規に投稿する
         * @param {string} className 
         * @param {Comment} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentPost(className: string, body: Comment, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).commentPost(className, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary コメントを一括取得する
         * @param {string} className 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsGet(className: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Comment>> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).commentsGet(className, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 授業データがすでに存在しているかを確認する
         * @param {string} className 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        existClassGet(className: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).existClassGet(className, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 授業データを取得する、授業名が指定された場合、その授業のデータを取得する。
         * @param {string} [className] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classDataGet(className?: string, options?: any) {
            return DefaultApiFp(configuration).classDataGet(className, options)(axios, basePath);
        },
        /**
         * 
         * @summary 授業を新規に投稿する
         * @param {ModelClass} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        classDataPost(data: ModelClass, options?: any) {
            return DefaultApiFp(configuration).classDataPost(data, options)(axios, basePath);
        },
        /**
         * 授業名とヘッダーに含まれた情報を使用して授業情報の削除をする。
         * @summary コメントを削除する
         * @param {string} className 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentDelete(className: string, options?: any) {
            return DefaultApiFp(configuration).commentDelete(className, options)(axios, basePath);
        },
        /**
         * 
         * @summary 授業のコメントをコメントidから取得する、コメントidが指定されなかった場合はその授業のコメント全て取得する。
         * @param {string} className 
         * @param {number} [commentId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentGet(className: string, commentId?: number, options?: any) {
            return DefaultApiFp(configuration).commentGet(className, commentId, options)(axios, basePath);
        },
        /**
         * 授業に対してコメントを追加する。
         * @summary コメントを新規に投稿する
         * @param {string} className 
         * @param {Comment} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentPost(className: string, body: Comment, options?: any) {
            return DefaultApiFp(configuration).commentPost(className, body, options)(axios, basePath);
        },
        /**
         * 
         * @summary コメントを一括取得する
         * @param {string} className 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsGet(className: string, options?: any) {
            return DefaultApiFp(configuration).commentsGet(className, options)(axios, basePath);
        },
        /**
         * 
         * @summary 授業データがすでに存在しているかを確認する
         * @param {string} className 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        existClassGet(className: string, options?: any) {
            return DefaultApiFp(configuration).existClassGet(className, options)(axios, basePath);
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary 授業データを取得する、授業名が指定された場合、その授業のデータを取得する。
     * @param {string} [className] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public classDataGet(className?: string, options?: any) {
        return DefaultApiFp(this.configuration).classDataGet(className, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary 授業を新規に投稿する
     * @param {ModelClass} data 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public classDataPost(data: ModelClass, options?: any) {
        return DefaultApiFp(this.configuration).classDataPost(data, options)(this.axios, this.basePath);
    }

    /**
     * 授業名とヘッダーに含まれた情報を使用して授業情報の削除をする。
     * @summary コメントを削除する
     * @param {string} className 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public commentDelete(className: string, options?: any) {
        return DefaultApiFp(this.configuration).commentDelete(className, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary 授業のコメントをコメントidから取得する、コメントidが指定されなかった場合はその授業のコメント全て取得する。
     * @param {string} className 
     * @param {number} [commentId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public commentGet(className: string, commentId?: number, options?: any) {
        return DefaultApiFp(this.configuration).commentGet(className, commentId, options)(this.axios, this.basePath);
    }

    /**
     * 授業に対してコメントを追加する。
     * @summary コメントを新規に投稿する
     * @param {string} className 
     * @param {Comment} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public commentPost(className: string, body: Comment, options?: any) {
        return DefaultApiFp(this.configuration).commentPost(className, body, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary コメントを一括取得する
     * @param {string} className 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public commentsGet(className: string, options?: any) {
        return DefaultApiFp(this.configuration).commentsGet(className, options)(this.axios, this.basePath);
    }

    /**
     * 
     * @summary 授業データがすでに存在しているかを確認する
     * @param {string} className 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public existClassGet(className: string, options?: any) {
        return DefaultApiFp(this.configuration).existClassGet(className, options)(this.axios, this.basePath);
    }

}


