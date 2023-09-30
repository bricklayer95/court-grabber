/// <reference types="node" />
import type { TypedArray, JsonValue } from 'type-fest';
import { ApifyApiError } from './apify_api_error';
import { WebhookUpdateData } from './resource_clients/webhook';
import { RequestQueueClientListRequestsOptions, RequestQueueClientListRequestsResult } from './resource_clients/request_queue';
export interface MaybeData<R> {
    data?: R;
}
/**
 * Returns object's 'data' property or throws if parameter is not an object,
 * or an object without a 'data' property.
 */
export declare function pluckData<R>(obj: MaybeData<R>): R;
/**
 * If given HTTP error has NOT_FOUND_STATUS_CODE status code then returns undefined.
 * Otherwise rethrows error.
 */
export declare function catchNotFoundOrThrow(err: ApifyApiError): void;
type ReturnJsonValue = string | number | boolean | null | Date | ReturnJsonObject | ReturnJsonArray;
type ReturnJsonObject = {
    [Key in string]?: ReturnJsonValue;
};
type ReturnJsonArray = Array<ReturnJsonValue>;
/**
 * Helper function that traverses JSON structure and parses fields such as modifiedAt or createdAt to dates.
 */
export declare function parseDateFields(input: JsonValue, depth?: number): ReturnJsonValue;
/**
 * Helper function that converts array of webhooks to base64 string
 */
export declare function stringifyWebhooksToBase64(webhooks: WebhookUpdateData[]): string | undefined;
/**
 * Gzip provided value, otherwise returns undefined.
 */
export declare function maybeGzipValue(value: unknown): Promise<Buffer | undefined>;
export declare function isNode(): boolean;
export declare function isBuffer(value: unknown): value is Buffer | ArrayBuffer | TypedArray;
export declare function isStream(value: unknown): value is ReadableStream;
export declare function getVersionData(): {
    version: string;
};
/**
 * Helper class to create async iterators from paginated list endpoints with exclusive start key.
 */
export declare class PaginationIterator {
    private readonly maxPageLimit;
    private readonly getPage;
    private readonly limit?;
    private readonly exclusiveStartId?;
    constructor(options: PaginationIteratorOptions);
    [Symbol.asyncIterator](): AsyncIterator<RequestQueueClientListRequestsResult>;
}
declare global {
    export const BROWSER_BUILD: boolean | undefined;
    export const VERSION: string | undefined;
}
export interface PaginationIteratorOptions {
    maxPageLimit: number;
    getPage: (opts: RequestQueueClientListRequestsOptions) => Promise<RequestQueueClientListRequestsResult>;
    limit?: number;
    exclusiveStartId?: string;
}
export interface PaginatedList<Data> {
    /** Total count of entries in the dataset. */
    total: number;
    /** Count of dataset entries returned in this set. */
    count: number;
    /** Position of the first returned entry in the dataset. */
    offset: number;
    /** Maximum number of dataset entries requested. */
    limit: number;
    /** Should the results be in descending order. */
    desc: boolean;
    /** Dataset entries based on chosen format parameter. */
    items: Data[];
}
export declare function cast<T>(input: unknown): T;
export type Dictionary<T = unknown> = Record<PropertyKey, T>;
export {};
//# sourceMappingURL=utils.d.ts.map