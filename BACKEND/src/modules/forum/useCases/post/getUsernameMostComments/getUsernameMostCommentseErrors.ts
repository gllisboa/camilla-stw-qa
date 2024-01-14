import { UseCaseError } from "../../../../../shared/core/UseCaseError";
import { Result } from "../../../../../shared/core/Result";
import { GetUsernameMostComments } from "./getUsernameMostComments";

/**
 * Namespace containing errors for the GetUsernamesWithoutPostsAndWithoutComments use case.
 */

export namespace GetUsernameMostCommentsErrors {
  export class UserNotFoundError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Couldn't find any usernames without posts or comments.`
      } as UseCaseError);
    }
  }
}
