import { GetPostsWithMyComments } from "./GetPostsWithMyComments";
import { memberRepo, postRepo } from "../../../repos";
import { GetPostsWithMyCommentsController } from "./GetPostsWithMyCommentsController";

const getPostsWithMyComments = new GetPostsWithMyComments(postRepo, memberRepo);

const getPostsWithMyCommentsController = new GetPostsWithMyCommentsController(
  getPostsWithMyComments
);

export { getPostsWithMyComments, getPostsWithMyCommentsController };
