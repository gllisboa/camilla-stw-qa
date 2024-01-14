import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { GetMembersWithMostCommentsRequestDTO } from "./getMembersWithMostCommentsRequestDTO";
import { GetMembersWithMostCommentsResponseDTO } from "./getMembersWithMostCommentsResponseDTO";
import { GetMembersWithMostComments } from "./getMembersWithMostComments";
import { DecodedExpressRequest } from "../../../../users/infra/http/models/decodedRequest";

import * as express from "express";
import { MemberDetailsMap } from "../../../mappers/memberDetailsMap";

/**
 * Controller class for getting the members with most comments.
 */
export class GetMembersWithMostCommentsController extends BaseController {
  private useCase: GetMembersWithMostComments;

  /**
   * Creates a new instance of GetMembersWithMostCommentsController.
   * @param useCase The use case for getting the members with most comments.
   */
  constructor(useCase: GetMembersWithMostComments) {
    super();
    this.useCase = useCase;
  }

  /**
   * Executes the controller logic to get the members with most comments.
   * @param req The decoded express request.
   * @param res The express response.
   * @returns A promise that resolves to the response object.
   */
  async executeImpl(
    req: DecodedExpressRequest,
    res: express.Response
  ): Promise<any> {
    const dto: GetMembersWithMostCommentsRequestDTO = {
      date: req.params.date,
      numOfMembers: Number.parseInt(req.params.numOfMembers)
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
        const resDTO: GetMembersWithMostCommentsResponseDTO = {
          members: result.value.getValue().map((member) => {
            return {
              member: MemberDetailsMap.toDTO(member.memberDetails),
              commentCount: member.commentCount
            };
          })
        };

        return this.ok<GetMembersWithMostCommentsResponseDTO>(res, resDTO);
      }
    } catch (err) {
      return this.fail(res, err);
    }
  }
}
