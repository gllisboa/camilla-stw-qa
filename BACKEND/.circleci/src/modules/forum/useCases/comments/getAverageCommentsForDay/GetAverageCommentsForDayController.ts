import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { GetAverageCommentsForDayRequestDTO } from "./GetAverageCommentsForDayRequestDTO";
import { GetAverageCommentsForDay } from "./GetAverageCommentsForDay";
import { GetAverageCommentsForDayResponseDTO } from "./GetAverageCommentsForDayResponseDTO";
import { DecodedExpressRequest } from "../../../../users/infra/http/models/decodedRequest";
import * as express from "express";

export class GetAverageCommentsForDayController extends BaseController {
  private useCase: GetAverageCommentsForDay;

  constructor(useCase: GetAverageCommentsForDay) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(
    request: DecodedExpressRequest,
    res: express.Response
  ): Promise<any> {
    const dto: GetAverageCommentsForDayRequestDTO = {
      date: request.params.date ? request.params.date : ""
    };

    try {
      const result = await this.useCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          default:
            return this.fail(res, error.getErrorValue().message);
        }
      } else {
        return this.ok<GetAverageCommentsForDayResponseDTO>(res, {
          numComments: result.value.getValue() as number
        });
      }
    } catch (err) {
      return this.fail(res, err);
    }
  }
}
