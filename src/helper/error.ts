import { Response } from "express";
import { ResponseWrapper } from "./response-wrapper";

export class CustomError extends Error {
  status: number;
  code: string;
  message: string;

  constructor(code: string, message: string, status?: number) {
    super();
    this.code = code;
    this.message = message;
    this.status = status;
  }
}

export const Errors = {
  serverError: new CustomError("serverError", "Something error in server", 500),
  badRequest: new CustomError("badRequest", "Miss info"),
  findNotFound: new CustomError("findNotFound", "find not found"),
};

export const handleError = (err: Error, res: Response) => {
  if (err instanceof CustomError) {
    const customErr = err as CustomError;
    customErr.status = customErr.status || 400;
    res
      .status(customErr.status)
      .send(new ResponseWrapper(null, customErr, null));
  } else {
    res.status(500).send(new ResponseWrapper(null, Errors.serverError, null));
  }
};
