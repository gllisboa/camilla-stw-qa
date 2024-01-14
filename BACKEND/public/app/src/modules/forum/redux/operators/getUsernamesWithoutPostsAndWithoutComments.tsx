import * as actionCreators from '../actionCreators';
import { postService } from '../../services';

function getListOfUsernamesWithoutPostsAndWithoutComments(offset?: number) {
  return async (dispatch: any) => {
    dispatch(actionCreators.getListOfUsernamesWithoutPostsAndWithoutComments());

    const result =
      await postService.getListOfUsernamesWithoutPostsAndWithoutComments(
        offset
      );

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(
        actionCreators.getListOfUsernamesWithoutPostsAndWithoutCommentsFailure(
          error
        )
      );
    } else {
      const usernames: string[] = result.value.getValue();

      if (usernames.length === 0) {
        dispatch(
          actionCreators.getListOfUsernamesWithoutPostsAndWithoutCommentsEmpty(
            'erro'
          )
        );
      } else {
        dispatch(
          actionCreators.getListOfUsernamesWithoutPostsAndWithoutCommentsSuccess(
            usernames
          )
        );
      }
      return usernames;
    }
  };
}

export { getListOfUsernamesWithoutPostsAndWithoutComments };
