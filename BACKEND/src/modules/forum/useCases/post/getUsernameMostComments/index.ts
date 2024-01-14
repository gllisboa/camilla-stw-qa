import { postRepo } from "../../../repos";
import { GetUsernameMostComments } from "./getUsernameMostComments";
import { GetUsernameMostCommentsController } from "./getUsernameMostCommentsController";

const getUsernameMostComments = new GetUsernameMostComments(postRepo);

const getUsernameMostCommentsController = new GetUsernameMostCommentsController(
  getUsernameMostComments
);

export { getUsernameMostComments, getUsernameMostCommentsController };
