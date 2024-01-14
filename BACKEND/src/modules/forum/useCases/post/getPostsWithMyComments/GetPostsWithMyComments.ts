import { UseCase } from "../../../../../shared/core/UseCase";
import { GetPostsWithMyCommentsRequestDTO } from "./GetPostsWithMyCommentsRequestDTO";
import { Either, Result, left, right } from "../../../../../shared/core/Result";
import { AppError } from "../../../../../shared/core/AppError";
import { IPostRepo } from "../../../repos/postRepo";
import { PostDetails } from "../../../domain/postDetails";
import { Member } from "../../../domain/member";
import { IMemberRepo } from "../../../repos/memberRepo";

type Response = Either<AppError.UnexpectedError, Result<PostDetails[]>>;

/**
 * This use case is responsible for calling the data layer the posts with comments made by the member.
 */
export class GetPostsWithMyComments
  implements UseCase<GetPostsWithMyCommentsRequestDTO, Promise<Response>>
{
  private postRepo: IPostRepo;
  private memberRepo: IMemberRepo;

  /**
   * Use case constructor.
   *
   * @param postRepo the posts repository interface.
   * @param memberRepo the members repository interface.
   */
  constructor(postRepo: IPostRepo, memberRepo: IMemberRepo) {
    this.postRepo = postRepo;
    this.memberRepo = memberRepo;
  }

  /**
   * The use case execution method that invokes the data layer to fetch the desired results.
   *
   * If an error occurs while calling the posts repository an `AppError.UnexpectedError` is returned.
   *
   * @param req the use case request parameters as `GetPostsWithMyCommentsRequestDTO` representation.
   * @returns the the posts with comments made by the member as `GetPostsWithMyCommentsResponseDTO`.
   */
  public async execute(
    req: GetPostsWithMyCommentsRequestDTO
  ): Promise<Response> {
    let member: Member;
    try {
      member = await this.memberRepo.getMemberByUserId(req.userId);
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }

    try {
      const posts = await this.postRepo.getPostsWithMyComments(member);
      return right(Result.ok<PostDetails[]>(posts));
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}
