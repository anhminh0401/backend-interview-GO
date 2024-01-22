import { CustomError } from "./error";

export class ResponseWrapper {
  data: any;
  error: CustomError;
  pagination: any;

  constructor(data: any, error: CustomError = null, pagnition: any = null) {
    this.data = data;
    this.error = error;
    this.pagination = pagnition;
  }
}
