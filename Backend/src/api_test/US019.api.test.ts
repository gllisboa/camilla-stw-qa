/**
 *
 * @remarks
 * This code is based on the project {@link https://github.com/jmfiola/jest-api-test-typescript-example}.
 */
import { Logger } from "tslog";
import ConfigHandler from "./config/configHandler";
import * as jwt from "jsonwebtoken";
import { JWTClaims } from "../modules/users/domain/jwt";

import Users from "./endpoints/Users";
import Posts from "./endpoints/Posts";
import Comments from "./endpoints/Comments";
import Members from "./endpoints/member";

const config = ConfigHandler.getInstance();
const log = new Logger({
  minLevel: config.environmnetConfig.log_level,
  dateTimeTimezone:
    config.environmnetConfig.time_zone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone
});

let posts: Posts;
let users: Users;
let comments: Comments;
let members: Members;

let accessToken: string;
let refreshToken: string;
let slug: string;
let commentId: string;
let userId: string;
let email: string;
let username: string;
let memberId: string;

describe("US019 - Get percentage of posts without comments on a given day", (): void => {
  //Arrange
  beforeAll(async (): Promise<void> => {
    posts = new Posts();
    users = new Users();
    comments = new Comments();
    members = new Members();
  });

  // testing on create user, log in, and get me access token//

  it("Post - Create User - US019", async (): Promise<void> => {
    //Act
    const response = await users.post("us019", "us019@gmail.com", "123456");
    //Assert
    expect(response.status).toBe(200);
  });

  it("Post Login", async (): Promise<void> => {
    //Act
    const response = await users.postLogin("us019", "123456");

    //Assert
    expect(response.status).toBe(200);
    expect(response.data.accessToken).toBeDefined();
    expect(response.data.refreshToken).toBeDefined();

    accessToken = response.data.accessToken;
    refreshToken = response.data.refreshToken;
    //Act
    const decodedToken = jwt.decode(accessToken) as JWTClaims;

    userId = decodedToken.userId;
    email = decodedToken.email;
    username = decodedToken.username;
  });

  it("Get Me - US019", async (): Promise<void> => {
    //Act
    const response = await users.getMe(accessToken);
    //Assert
    expect(response.status).toBe(200);
    expect(response.data.user).toBeDefined();
    expect(response.data.user.username).toBeDefined();
    expect(response.data.user.username).toContain("us019");
  });

  //testing creating posts, get popular posts, get recent posts, get slug of a post, upvote a post, downvote a post

  it("Creates a post", async (): Promise<void> => {
    //Act
    const response = await posts.postCreatePost(
      accessToken,
      "Novo post através de VSCode - US019",
      "text",
      "<p>Post através de VSCode - US019</p>",
      ""
    );
    //Assert
    expect(response.status).toBe(200);
  });

  it("Creates a post - Sem Comment - US019", async (): Promise<void> => {
    //Act
    const response = await posts.postCreatePost(
      accessToken,
      "Novo post através de VSCode - Sem Comment - US019",
      "text",
      "<p>Post através de VSCode - Sem Comment - US019</p>",
      ""
    );
    //Assert
    expect(response.status).toBe(200);
  });

  it("Get popular posts - US019", async (): Promise<void> => {
    //Act
    const response = await posts.getPopularPosts();
    //Assert
    expect(response.status).toBe(200);
    expect(response.data.posts).toBeDefined();
  });

  it("Get recent posts - US019", async (): Promise<void> => {
    //Act
    const response = await posts.getRecentPosts();
    //Assert
    expect(response.status).toBe(200);
    expect(response.data.posts).toBeDefined();
  });

  it("Get slug of a post - US019", async (): Promise<void> => {
    //Act
    const response = await posts.getRecentPosts();
    //Assert
    expect(response.status).toBe(200);
    //Act
    const postData = response.data.posts[0];
    //Assert
    expect(postData.slug).toBeDefined();

    slug = postData.slug;
  });

  it("Reply to a post - US019", async (): Promise<void> => {
    //Act
    const response = await comments.replyPost(
      accessToken,
      slug,
      "<p>Comentário a um post através de VSCode - US019</p>"
    );
    //Assert
    expect(response.status).toBe(200);
  });

  it("Get commentID of a comment of a post - US019", async (): Promise<void> => {
    //Act
    const response = await comments.getPostComments(slug);
    //Assert
    expect(response.status).toBe(200);
    expect(response.data.comments).toBeDefined();
    expect(response.data.comments.length).toBeGreaterThan(0);

    //Act
    const commentI = response.data.comments[0].commentId;

    //Assert
    expect(commentI).toBeDefined();
    commentId = response.data.comments[0].commentId;
  });

  it("Comment a comment of a post - US019", async (): Promise<void> => {
    //Act
    const response = await comments.replyComment(
      accessToken,
      slug,
      commentId,
      "<p>Comentário a um comentário através de VSCode - US019</p>"
    );
    //Assert
    expect(response.status).toBe(200);
  });

  it("Get Percentage of Posts without Comments - US019", async (): Promise<void> => {
    //Arrange
    const day = 15;
    const month = 10;
    const year = 2023;

    const date = new Date(year, month - 1, day);

    //Act
    const response = await posts.getPercentageOfPostsWithoutComments(
      accessToken,
      date
    );
    //Assert
    expect(response.status).toBe(200);
  });
});

export default {};
