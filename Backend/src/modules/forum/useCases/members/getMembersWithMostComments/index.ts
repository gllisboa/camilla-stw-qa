import { memberRepo } from "../../../repos";
import { GetMembersWithMostComments } from "./getMembersWithMostComments";
import { GetMembersWithMostCommentsController } from "./getMembersWithMostCommentsController";

const getMembersWithMostComments = new GetMembersWithMostComments(memberRepo);

/**
 * Creates a new instance of GetMembersWithMostCommentsController with the provided GetMembersWithMostComments use case.
 * @param {Function} getMembersWithMostComments - The use case function for getting the members with most comments.
 * @returns {GetMembersWithMostCommentsController} - A new instance of GetMembersWithMostCommentsController.
 */
const getMembersWithMostCommentsController =
  new GetMembersWithMostCommentsController(getMembersWithMostComments);

export { getMembersWithMostComments, getMembersWithMostCommentsController };
