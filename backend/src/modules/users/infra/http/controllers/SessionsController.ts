import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import SessionUserService from '@modules/users/services/SessionUserService';

export default class SessionsController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.status(204).json();
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const sessionUser = container.resolve(SessionUserService);

    const { user, token } = await sessionUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  }
}
