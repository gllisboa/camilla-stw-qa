import * as actionCreators from '../actionCreators';
import { memberService } from '../../services';

function getTopMembersWithMoreComments(
  date: Date | string,
  numOfMembers: number = 3
) {
  return async (dispatch: any) => {
    dispatch(actionCreators.getTopMembersWithMoreComments());

    const result = await memberService.getTopMembersWithMoreComments(
      date,
      numOfMembers
    );

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.getTopMembersWithMoreCommentsFailure(error));
    } else {
      const members = result.value.getValue();
      dispatch(actionCreators.getTopMembersWithMoreCommentsSuccess(members));
      return members;
    }
  };
}

export { getTopMembersWithMoreComments };
