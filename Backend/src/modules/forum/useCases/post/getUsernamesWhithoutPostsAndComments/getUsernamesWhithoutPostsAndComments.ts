import { UseCase } from "../../../../../shared/core/UseCase";
import { IPostRepo } from "../../../repos/postRepo";
import { Either, Result, left, right } from "../../../../../shared/core/Result";
import { AppError } from "../../../../../shared/core/AppError";
import { GetUsernamesWithoutPostsAndWithoutCommentsDTO } from "./getUsernamesWhithoutPostsAndCommentsDTO";

type Response = Either<AppError.UnexpectedError, Result<string[]>>;

/**
 * Use case that retrieves a list of usernames that have not made any posts or comments.
 */

export class GetUsernamesWithoutPostsAndWithoutComments
  implements
    UseCase<GetUsernamesWithoutPostsAndWithoutCommentsDTO, Promise<Response>>
{
  private postRepo: IPostRepo;

  constructor(postRepo: IPostRepo) {
    this.postRepo = postRepo;
  }

  public async execute(
    req: GetUsernamesWithoutPostsAndWithoutCommentsDTO
  ): Promise<Response> {
    const usernames =
      await this.postRepo.getListOfUsernamesWithoutisdeletedWithoutPostAndWithoutComments();

    return right(Result.ok<string[]>(usernames));
  }
}
