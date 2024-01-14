import { UseCase } from "../../../../../shared/core/UseCase";
import { Either, Result, left, right } from "../../../../../shared/core/Result";
import { GetMembersWithMostCommentsRequestDTO } from "./getMembersWithMostCommentsRequestDTO";
import { AppError } from "../../../../../shared/core/AppError";
import { IMemberRepo } from "../../../repos/memberRepo";
import { MemberDetails } from "../../../domain/memberDetails";

type Response = Either<
  AppError.UnexpectedError,
  Result<{ memberDetails: MemberDetails; commentCount: number }[]>
>;

/**
 * Use case to get the members with most comments.
 */
export class GetMembersWithMostComments
  implements UseCase<GetMembersWithMostCommentsRequestDTO, Promise<Response>>
{
  private memberRepo: IMemberRepo;

  /**
   * Creates an instance of GetMembersWithMostComments.
   * @param {IMemberRepo} memberRepo - The member repository.
   */
  constructor(memberRepo: IMemberRepo) {
    this.memberRepo = memberRepo;
  }

  /**
   * Executes the use case to get the members with most comments.
   * @param {GetMembersWithMostCommentsRequestDTO} dto - The data transfer object containing the user ID.
   * @returns {Promise<Response>} A promise that resolves to a response containing the top members with most comments.
   */
  public async execute(
    dto: GetMembersWithMostCommentsRequestDTO
  ): Promise<Response> {
    let members: { memberDetails: MemberDetails; commentCount: number }[];
    try {
      // members = await this.memberRepo.getTopMembersWithMostComments(
      //   dto.numOfMembers,
      //   dto.date
      // );
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }

    return right(
      Result.ok<{ memberDetails: MemberDetails; commentCount: number }[]>(
        members
      )
    );
  }
}
