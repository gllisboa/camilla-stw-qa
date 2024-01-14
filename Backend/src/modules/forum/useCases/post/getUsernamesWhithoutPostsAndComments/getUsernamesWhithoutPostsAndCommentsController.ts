import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { DecodedExpressRequest } from "../../../../users/infra/http/models/decodedRequest";
import { GetUsernamesWithoutPostsAndWithoutComments } from "./getUsernamesWhithoutPostsAndComments";
import { GetUsernamesWithoutPostsAndWithoutCommentsDTO } from "./getUsernamesWhithoutPostsAndCommentsDTO";
import { GetUsernamesWithoutPostsAndWithoutCommentsErrors } from "./getUsernamesWhithoutPostsAndCommentsErrors";

/**
 * Controller class for getting usernames without posts and without comments.
 * @class
 */

export class GetUsernamesWithoutPostsAndWithoutCommentsController extends BaseController {
  private useCase: GetUsernamesWithoutPostsAndWithoutComments;

  constructor(useCase: GetUsernamesWithoutPostsAndWithoutComments) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: DecodedExpressRequest, res: any): Promise<any> {
    const dto: GetUsernamesWithoutPostsAndWithoutCommentsDTO = {
      offset: req.query.offset,
      userId: !!req.decoded === true ? req.decoded.userId : null
    };

    try {
      const result = await this.useCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case GetUsernamesWithoutPostsAndWithoutCommentsErrors.UserNotFoundError:
            return this.notFound(res, error.getErrorValue().message);
          default:
            return this.fail(res, error.getErrorValue().message);
        }
      } else {
        const usernames = result.value.getValue();
        if (usernames.length === 0) {
          return this.ok(res, { message: "No usernames found" });
        } else {
          return this.ok(res, {
            usernames: usernames
          });
        }
      }
    } catch (err) {
      return this.fail(res, err);
    }
  }
}
