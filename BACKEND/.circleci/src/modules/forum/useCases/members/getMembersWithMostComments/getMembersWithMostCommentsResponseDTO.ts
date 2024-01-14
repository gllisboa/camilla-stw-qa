import { MemberDTO } from "../../../dtos/memberDTO";

export interface GetMembersWithMostCommentsResponseDTO {
  members: {
    member: MemberDTO;
    commentCount: number;
  }[];
}
