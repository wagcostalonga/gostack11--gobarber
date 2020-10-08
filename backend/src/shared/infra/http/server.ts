import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from "express";
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import rateLimiter from './middlewares/rateLimiter';
import routes from "./routes";

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(rateLimiter);
app.use(routes);
app.use(errors());

// Fazendo as tratativas de erros sempre após as rotas
app.use(
  (err: Error, req: Request, res: Response, _: NextFunction) => {
    // verificando se o erro foi originado na instância de AppError
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    // Caso o erro não pertença a instância AppError
    console.log(err);
    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
);

app.listen(3333, () => {
  console.log("🚀 Server started on port 3333!");
});
