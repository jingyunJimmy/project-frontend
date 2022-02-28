/**
 * Create a new instance of ApiResponseModel
 * @class ApiResponseModel
 * @description
 * ApiResponseModel is used to define the base API response
 */

 import { CommonBase } from './common-base';

 export class ApiResponseModel<T = any> {
     public status: 'success' | 'error';
     public message: string;
     public data: T;
     public errors: CommonBase;
 }    