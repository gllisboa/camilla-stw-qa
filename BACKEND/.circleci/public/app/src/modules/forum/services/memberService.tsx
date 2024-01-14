import { APIResponse } from '../../../shared/infra/services/APIResponse';
import { BaseAPI } from '../../../shared/infra/services/BaseAPI';
import { IAuthService } from '../../users/services/authService';
import { Result } from '../../../shared/core/Result';
import { right, left } from '../../../shared/core/Either';
import { MemberUtil } from '../utils/MemberUtil';
import { MemberDTO } from '../dtos/memberDTO';
import { Member } from '../models/Member';

export interface IMemberService {
  getTopMembersWithMoreComments(
    date: Date | string,
    numOfMembers: number
  ): Promise<APIResponse<{ member: Member; commentCount: number }[]>>;
}

export class MemberService extends BaseAPI implements IMemberService {
  constructor(authService: IAuthService) {
    super(authService);
  }

  public async getTopMembersWithMoreComments(
    date: Date | string,
    numOfMembers: number
  ): Promise<APIResponse<{ member: Member; commentCount: number }[]>> {
    try {
      const accessToken = this.authService.getToken('access-token');
      const isAuthenticated = !!accessToken === true;
      const auth = {
        authorization: accessToken
      };

      const response = await this.get(
        '/members/mostcomments',
        { date, numOfMembers },
        isAuthenticated ? auth : null
      );
      const membersResp: {
        members: { member: MemberDTO; commentCount: number }[];
      } = response.data.members;

      return right(
        Result.ok<{ member: Member; commentCount: number }[]>(
          membersResp.members.map((m) => {
            return {
              member: MemberUtil.toViewModel(m.member),
              commentCount: m.commentCount
            };
          })
        )
      );
    } catch (err) {
      return left(
        err.response ? err.response.data.message : 'Connection failed'
      );
    }
  }
}
