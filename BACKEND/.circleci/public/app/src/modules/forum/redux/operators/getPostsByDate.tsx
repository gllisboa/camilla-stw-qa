import * as actionCreators from '../actionCreators';
import { postService } from '../../services';
import { Post } from '../../models/Post';

function getPostsByDate(date?: Date | string) {
  return async (dispatch: any) => {
    dispatch(actionCreators.getPostsByDate());

    const result = await postService.getPostsByDate(date);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.getPostsByDateFailure(error));
    } else {
      const posts: Post[] = result.value.getValue();
      if (posts.length === 0) {
        dispatch(actionCreators.getPostsByDateSuccess(posts));
        return posts;
      } else {
        const descPosts = posts.sort((a, b) => b.numComments - a.numComments);
        const mostPostCommentsByDate = descPosts[0].numComments;
        if (mostPostCommentsByDate === 0) {
          //No caso de todos os posts terem 0 comentários
          dispatch(actionCreators.getPostsByDateSuccess([]));
          const post: Post = {
            slug: '',
            title: '',
            createdAt: new Date(),
            postAuthor: '',
            numComments: 0,
            points: 0,
            type: 'text',
            text: '',
            link: '',
            wasUpvotedByMe: false,
            wasDownvotedByMe: false
          };
          return [post];
        } else {
          const postsCommentsByDate = posts.filter(
            (elem) => elem.numComments === mostPostCommentsByDate
          );
          dispatch(actionCreators.getPostsByDateSuccess(postsCommentsByDate));
          return postsCommentsByDate;
        }
      }
    }
  };
}

export { getPostsByDate };
