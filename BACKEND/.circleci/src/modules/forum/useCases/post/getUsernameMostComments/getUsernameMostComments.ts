import { UseCase } from "../../../../../shared/core/UseCase";
import { IPostRepo } from "../../../repos/postRepo";
import { Either, Result, left, right } from "../../../../../shared/core/Result";
import { AppError } from "../../../../../shared/core/AppError";
import { GetUsernameMostCommentsDTO } from "./getUsernameMostCommentsDTO";

type Response = Either<AppError.UnexpectedError, Result<[string, number]>>;

/**
 * Use case that retrieves the username with the most comments.
 */

export class GetUsernameMostComments
  implements UseCase<GetUsernameMostCommentsDTO, Promise<Response>>
{
  private postRepo: IPostRepo;

  constructor(postRepo: IPostRepo) {
    this.postRepo = postRepo;
  }
  public async execute(req: GetUsernameMostCommentsDTO): Promise<Response> {
    const username = await this.postRepo.getUsernameMostComments();

    return right(Result.ok<[string, number]>(username));
  }
}
