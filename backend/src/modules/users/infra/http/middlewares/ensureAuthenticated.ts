import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void{
  // validação do token JWT
  // pegando o Header com o token gerado
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  // dividindo o token - [Bearer, "token"]
  const [, token ] = authHeader.split(' ');

  // '' = secret(md5)
  try {
    const decoded = verify(token, authConfig.jwt.secret);

    // forçando o decoded a reconhecer a tipagem da variável
    const { sub } = decoded as ITokenPayload;

    req.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}