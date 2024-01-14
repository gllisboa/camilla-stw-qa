import { PostDTO } from "../../../dtos/postDTO";

/**
 * Represents the get the posts with comments made by the member response data transfer object (DTO).
 */
export interface GetPostsWithMyCommentsResponseDTO {
  // Gets or sets the posts with comments made by the member.
  posts: PostDTO[];
}
