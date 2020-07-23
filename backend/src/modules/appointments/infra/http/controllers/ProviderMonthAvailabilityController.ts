import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.query;

    const listProviderMonthAvailaibilty = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const availability = await listProviderMonthAvailaibilty.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });

    console.log(availability);

    return response.json(availability);
  }
}
