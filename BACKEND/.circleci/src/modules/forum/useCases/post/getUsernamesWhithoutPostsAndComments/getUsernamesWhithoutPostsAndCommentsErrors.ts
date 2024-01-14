import { UseCaseError } from "../../../../../shared/core/UseCaseError";
import { Result } from "../../../../../shared/core/Result";

/**
 * Namespace containing errors for the GetUsernamesWithoutPostsAndWithoutComments use case.
 */

export namespace GetUsernamesWithoutPostsAndWithoutCommentsErrors {
  export class UserNotFoundError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Couldn't find any usernames without posts or comments.`
      } as UseCaseError);
    }
  }
}
