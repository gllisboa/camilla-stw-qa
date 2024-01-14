import * as actionCreators from '../actionCreators';
import { postService } from '../../services';

/**
 * Retrieves a list of usernames without posts and without comments by date.
 * @param date - Optional parameter to filter the results by date.
 * @returns A promise that resolves to an array of strings representing the usernames.
 */
function getListOfUsernamesWithoutPostsAndWithoutCommentsByDate(
  date?: Date | string
) {
  return async (dispatch: any) => {
    dispatch(
      actionCreators.getListOfUsernamesWithoutPostsAndWithoutCommentsByDate()
    );

    const result =
      await postService.getListOfUsernamesWithoutPostsAndWithoutCommentsByDate(
        date
      );
    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(
        actionCreators.getListOfUsernamesWithoutPostsAndWithoutCommentsByDateFailure(
          error
        )
      );
    } else {
      const usernames: string[] = result.value.getValue();
      dispatch(
        actionCreators.getListOfUsernamesWithoutPostsAndWithoutCommentsByDateSuccess(
          usernames
        )
      );
      return usernames;
    }
  };
}

export { getListOfUsernamesWithoutPostsAndWithoutCommentsByDate };
