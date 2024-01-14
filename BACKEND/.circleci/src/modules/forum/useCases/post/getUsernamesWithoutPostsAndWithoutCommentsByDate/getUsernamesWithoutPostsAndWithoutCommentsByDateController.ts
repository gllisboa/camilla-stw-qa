import { BaseController } from "../../../../../shared/infra/http/models/BaseController";
import { DecodedExpressRequest } from "../../../../users/infra/http/models/decodedRequest";
import { GetUsernamesWithoutPostsAndWithoutCommentsByDate } from "./getUsernamesWithoutPostsAndWithoutCommentsByDate";
import { GetUsernamesWithoutPostsAndWithoutCommentsByDateDTO } from "./getUsernamesWithoutPostsAndWithoutCommentsByDateDTO";
import { GetUsernamesWithoutPostsAndWithoutCommentsByDateErrors } from "./getUsernamesWithoutPostsAndWithoutCommentsByDateErrors";

/**
 * Controller class for getting usernames without posts and without comments by date.
 * @class
 */
export class GetUsernamesWithoutPostsAndWithoutCommentsByDateController extends BaseController {
  private useCase: GetUsernamesWithoutPostsAndWithoutCommentsByDate;

  constructor(useCase: GetUsernamesWithoutPostsAndWithoutCommentsByDate) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(req: DecodedExpressRequest, res: any): Promise<any> {
    const dto: GetUsernamesWithoutPostsAndWithoutCommentsByDateDTO = {
      date: req.query.date ? new Date(req.query.date) : null
    };

    try {
      const result = await this.useCase.execute(dto);
      const currentDate = new Date();

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case GetUsernamesWithoutPostsAndWithoutCommentsByDateErrors.UserNotFoundError:
            return this.ok(res, {
              message: error.getErrorValue().message,
              usernames: []
            });
          case GetUsernamesWithoutPostsAndWithoutCommentsByDateErrors.DateNotValidError:
            return this.clientError(res, error.getErrorValue().message);
          default:
            return this.fail(res, error.getErrorValue().message);
        }
      } else {
        const usernames = result.value.getValue();

        if (usernames.length === 0) {
          return this.fail(res, "No users found for the requested date.");
        }

        if (dto.date && dto.date > currentDate) {
          return this.fail(res, "The date supplied is not valid.");
        }

        return this.ok(res, {
          message: "Usernames retrieved successfully",
          usernames
        });
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      return this.fail(res, "An unexpected error occurred");
    }
  }
}
