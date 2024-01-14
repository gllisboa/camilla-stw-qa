import { postRepo } from "../../../repos";
import { GetUsernamesWithoutPostsAndWithoutComments } from "./getUsernamesWhithoutPostsAndComments";
import { GetUsernamesWithoutPostsAndWithoutCommentsController } from "./getUsernamesWhithoutPostsAndCommentsController";

const getUsernamesWithoutPostsAndWithoutComments =
  new GetUsernamesWithoutPostsAndWithoutComments(postRepo);

const getUsernamesWithoutPostsAndWithoutCommentsController =
  new GetUsernamesWithoutPostsAndWithoutCommentsController(
    getUsernamesWithoutPostsAndWithoutComments
  );

export {
  getUsernamesWithoutPostsAndWithoutComments,
  getUsernamesWithoutPostsAndWithoutCommentsController
};
