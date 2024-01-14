import { UseCaseError } from "../../../../../shared/core/UseCaseError";
import { Result } from "../../../../../shared/core/Result";

/**
 * Namespace containing errors for the GetUsernamesWithoutPostsAndWithoutCommentsByDate use case.
 */
export namespace GetUsernamesWithoutPostsAndWithoutCommentsByDateErrors {
  export class UserNotFoundError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `No users found for the requested date.`
      } as UseCaseError);
    }
  }
  export class DateNotValidError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `The date supplied is not valid.`
      } as UseCaseError);
    }
  }
}
