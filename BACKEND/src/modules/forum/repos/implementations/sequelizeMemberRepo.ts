import { IMemberRepo } from "../memberRepo";
import { Member } from "../../domain/member";
import { MemberMap } from "../../mappers/memberMap";
import { MemberDetails } from "../../domain/memberDetails";
import { MemberDetailsMap } from "../../mappers/memberDetailsMap";
import { MemberId } from "../../domain/memberId";
import { MemberIdMap } from "../../mappers/memberIdMap";
import { Sequelize, Op } from "sequelize";

export class MemberRepo implements IMemberRepo {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }
  getUsernamesOfAllMembersWithNoPostAndNoCommentsByDate: any;

  private createBaseQuery(): any {
    const models = this.models;
    return {
      where: {},
      include: [{ model: models.BaseUser, as: "BaseUser" }]
    };
  }

  public async exists(userId: string): Promise<boolean> {
    const MemberModel = this.models.Member;
    const baseQuery = this.createBaseQuery();
    baseQuery.where["member_base_id"] = userId;
    const member = await MemberModel.findOne(baseQuery);
    const found = !!member === true;
    return found;
  }

  public async getMemberDetailsByPostLinkOrSlug(
    linkOrSlug: string
  ): Promise<MemberDetails> {
    const MemberModel = this.models.Member;
    const baseQuery = this.createBaseQuery();
    baseQuery.include.push({
      model: this.models.Post,
      as: "Post",
      required: true,
      where: {
        [Op.or]: {
          slug: { [Op.eq]: linkOrSlug },
          link: { [Op.eq]: linkOrSlug }
        }
      }
    });
    const member = await MemberModel.findOne(baseQuery);
    const found = !!member === true;
    if (!found) throw new Error("Member not found");
    return MemberDetailsMap.toDomain(member);
  }

  public async getMemberIdByUserId(userId: string): Promise<MemberId> {
    const MemberModel = this.models.Member;
    const baseQuery = this.createBaseQuery();
    baseQuery.where["member_base_id"] = userId;
    const member = await MemberModel.findOne(baseQuery);
    const found = !!member === true;
    if (!found) throw new Error("Member id not found");
    return MemberIdMap.toDomain(member);
  }

  public async getMemberByUserId(userId: string): Promise<Member> {
    const MemberModel = this.models.Member;
    const baseQuery = this.createBaseQuery();
    baseQuery.where["member_base_id"] = userId;
    const member = await MemberModel.findOne(baseQuery);
    const found = !!member === true;
    if (!found) throw new Error("Member not found");
    return MemberMap.toDomain(member);
  }

  public async getMemberByUserName(username: string): Promise<Member> {
    const MemberModel = this.models.Member;
    const baseQuery = this.createBaseQuery();
    baseQuery.include[0].where = {
      username: username
    };
    const member = await MemberModel.findOne(baseQuery);
    const found = !!member === true;
    if (!found) throw new Error("Member not found");
    return MemberMap.toDomain(member);
  }

  public async getMemberDetailsByUserName(
    username: string
  ): Promise<MemberDetails> {
    const MemberModel = this.models.Member;
    const baseQuery = this.createBaseQuery();
    baseQuery.include[0].where = {
      username: username
    };
    const member = await MemberModel.findOne(baseQuery);
    const found = !!member === true;
    if (!found) throw new Error("Member not found");
    return MemberDetailsMap.toDomain(member);
  }

  public async save(member: Member): Promise<void> {
    const MemberModel = this.models.Member;
    const exists = await this.exists(member.userId.id.toString());

    if (!exists) {
      const rawSequelizeMember = await MemberMap.toPersistence(member);
      await MemberModel.create(rawSequelizeMember);
    }

    return;
  }

  /**
   * Retrieves member details for members who have not made any posts or comments
   * after a given date.
   * @param date - The date after which no posts or comments should have been made.
   * @returns A Promise that resolves to an array of MemberDetails objects.
   * @throws An error if no members are found.
   */
  public async getMemberNoPostNoCommentsByDate(
    date: Date | string
  ): Promise<MemberDetails> {
    const formattedDate = new Date(date);

    const formattedDateString = formattedDate.toISOString().split("T")[0];

    const MemberModel = this.models.Member;
    const baseQuery = this.createBaseQuery();
    baseQuery.include.push({
      model: this.models.Post,
      as: "Post",
      required: false,
      where: {
        createdAt: { [Op.gte]: formattedDateString }
      }
    });
    baseQuery.include.push({
      model: this.models.Comment,
      as: "Comment",
      required: false,
      where: {
        createdAt: { [Op.gte]: formattedDateString }
      }
    });

    const members = await MemberModel.findAll(baseQuery);

    const found = !!members === true;
    if (!found) throw new Error("Member not found");

    const memberDetails = members.map((member) =>
      MemberDetailsMap.toDomain(member)
    );

    return memberDetails;
  }

  async getNumberOfMembersOnDate(
    day: number,
    month: number,
    year: number
  ): Promise<number> {
    const CommentModel = this.models.Comment;
    const result = await this.models.sequelize.query(
      `SELECT COUNT(*) AS NUM_MEMBERS FROM MEMBER WHERE date(created_at) = "${year}-${month}-${day}";`
    );
    const count = result[0][0]["NUM_MEMBERS"];
    return count;
  }

  /**
   * Retrieves the top members with most comments on a specific date.
   * @param numOfMembers The number of members to fetch.
   * @param date The date to check for members with most comments.
   * @returns A Promise that resolves to an array of usernames.
   */
  public async getTopMembersWithMostComments(
    numOfMembers: number,
    date: string
  ): Promise<{ memberDetails: MemberDetails; commentCount: number }[]> {
    const formattedDate = new Date(date);
    const formattedDateString = formattedDate.toISOString().split("T")[0];

    const baseModel = this.models.BaseUser;
    const commentModel = this.models.Comment;
    const memberModel = this.models.Member;

    const members = await commentModel.findAll({
      attributes: [
        [Sequelize.literal("COUNT(*)"), "commentCount"],
        "member_id"
      ],
      include: [
        {
          model: memberModel,
          attributes: ["name", "reputation", `member_base_id`],
          include: [
            {
              model: baseModel,
              as: "BaseUser"
            }
          ]
        }
      ],
      where: {
        createdAt: {
          [Op.gte]: new Date(`${formattedDateString}T00:00:00Z`),
          [Op.lt]: new Date(`${formattedDateString}T23:59:59Z`)
        }
      },
      group: ["comment.member_id"],
      order: [[Sequelize.literal("commentCount"), "DESC"]],
      limit: numOfMembers
    });

    const membersWithCommentCount: {
      memberDetails: MemberDetails;
      commentCount: number;
    }[] = [];
    members.forEach((member) => {
      membersWithCommentCount.push({
        memberDetails: MemberDetailsMap.toDomain(member),
        commentCount: member.get("commentCount")
      });
    });
    return members;
  }
}
