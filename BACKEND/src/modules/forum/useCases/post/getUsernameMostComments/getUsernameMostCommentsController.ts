import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { DecodedExpressRequest } from "../../../../users/infra/http/models/decodedRequest";
import { GetUsernameMostComments } from "./getUsernameMostComments";
import { GetUsernameMostCommentsDTO } from "./getUsernameMostCommentsDTO";
import { GetUsernameMostCommentsErrors } from "./getUsernameMostCommentseErrors";
/**
 * Controller class for getting the username with the most comments.
 * @class
 */

export class GetUsernameMostCommentsController extends BaseController {
  private useCase: GetUsernameMostComments;

  constructor(useCase: GetUsernameMostComments) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: DecodedExpressRequest, res: any): Promise<any> {
    const dto: GetUsernameMostCommentsDTO = {
      offset: req.query.offset
    };

    try {
      const result = await this.useCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case GetUsernameMostCommentsErrors.UserNotFoundError:
            return this.notFound(res, error.getErrorValue().message);
          default:
            return this.fail(res, error.getErrorValue().message);
        }
      }
      return this.ok(res, result.value.getValue());
    } catch (err) {
      return this.fail(res, err);
    }
  }
}
