import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { GettPostsByDateRequestDTO } from "./GetPostByDateRequestDTO";
import { GetPostsByDate } from "./GetPostByDate";
import { GettPostsByDateResponseDTO } from "./GetPostByDateResponseDTO";
import { PostDetailsMap } from "../../../mappers/postDetailsMap";
import { DecodedExpressRequest } from "../../../../users/infra/http/models/decodedRequest";
import * as express from "express";

export class GetPostsByDateController extends BaseController {
  private useCase: GetPostsByDate;

  constructor(useCase: GetPostsByDate) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: DecodedExpressRequest, res: any): Promise<any> {
    const dto: GettPostsByDateRequestDTO = {
      date: req.query.date ? new Date(req.query.date as string) : null
    };

    try {
      const result = await this.useCase.execute(dto); // Faz a comunicação com o repositório que se comunica com a base de dados

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          default:
            return this.fail(res, error.getErrorValue().message);
        }
      } else {
        const postDetails = result.value.getValue();
        return this.ok<GettPostsByDateResponseDTO>(res, {
          posts: postDetails.map((d) => PostDetailsMap.toDTO(d)) // Mapeia os dados para o DTO no formato que deve ser enviado para o Frontend
        });
      }
    } catch (err) {
      return this.fail(res, err);
    }
  }
}
