import { Member } from '../models/Member';
import { MemberDTO } from '../dtos/memberDTO';

export class MemberUtil {
  public static toViewModel(dto: MemberDTO): Member {
    return {
      username: dto.user.username,
      reputation: dto.reputation
    };
  }
}
