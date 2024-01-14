import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { GetPostsWithMyCommentsRequestDTO } from "./GetPostsWithMyCommentsRequestDTO";
import { GetPostsWithMyComments } from "./GetPostsWithMyComments";
import { GetPostsWithMyCommentsResponseDTO } from "./GetPostsWithMyCommentsResponseDTO";
import { PostDetailsMap } from "../../../mappers/postDetailsMap";
import { DecodedExpressRequest } from "../../../../users/infra/http/models/decodedRequest";
import * as express from "express";

/**
 * Get the the posts with comments made by the member controller.
 *
 * This controller is responsible for handling requests for the "/mycomments" route and calling the use cases layers.
 */
export class GetPostsWithMyCommentsController extends BaseController {
  private useCase: GetPostsWithMyComments;

  /**
   * Controller constructor.
   *
   * @param useCase the use case associated to the business requirements of the get the posts with comments made by the member.
   */
  constructor(useCase: GetPostsWithMyComments) {
    super();
    this.useCase = useCase;
  }

  /**
   * Handler responsible for handling the request and forward it to the use cases layer.
   * It picks the request context, transforms it into a `GetPostsWithMyCommentsyRequestDTO` that it passed to the use case.
   * The use case then returns the `PostDetails[]` and it is mapped into the `GetPostsWithMyCommentsResponseDTO`.
   *
   * If an error occurs calling the use case it calls the BaseController.fail method to handle the error properly.
   *
   * @param req the request context.
   * @param res the response handler.
   * @returns the resulting result response as `GetPostsWithMyCommentsResponseDTO` Data Transfer Object.
   */
  async executeImpl(
    req: DecodedExpressRequest,
    res: express.Response
  ): Promise<any> {
    const dto: GetPostsWithMyCommentsRequestDTO = {
      userId: !!req.decoded === true ? req.decoded.userId : null
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
        const postDetails = result.value.getValue();
        return this.ok<GetPostsWithMyCommentsResponseDTO>(res, {
          posts: postDetails.map((d) => PostDetailsMap.toDTO(d))
        });
      }
    } catch (err) {
      return this.fail(res, err);
    }
  }
}
