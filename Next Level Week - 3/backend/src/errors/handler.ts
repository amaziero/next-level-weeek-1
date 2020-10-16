import { ErrorRequestHandler } from 'express';
const errorHandler: ErrorRequestHandler = (error, resquest, response, next) => {
  console.log(error);

  return response.status(500).json({ messsage: 'Internal server error' });
};

export default errorHandler;
