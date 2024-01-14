/**
 * FILEPATH: /c:/Users/nunof/Switch-QA-PROJETOS/switch-qa-23-project-switch-qa-23-3/src/api_test/US020.api.test.ts
 *
 * This file contains a suite of tests that verify the functionality of various endpoints in the API.
 * The tests cover creating users, logging in, creating posts, commenting on posts, upvoting and downvoting posts and comments, and more.
 *
 * @packageDocumentation
 */

//"test:api:us020:noclean"  noclean_deleted_Creadted_migrated_db
//"test:api:us020"  clean_db

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

describe("All functionalities working - status code: 200", (): void => {
  beforeAll(async (): Promise<void> => {
    posts = new Posts();
    users = new Users();
    comments = new Comments();
    members = new Members();
  });

  // testing on create user, log in, and get me access token//

  it("Post - Create User", async (): Promise<void> => {
    //arrange and act
    const response = await users.post("123", "123@gmail.com", "123456");
    //assert
    expect(response.status).toBe(200);
  });

  it("Post Login", async (): Promise<void> => {
    // Arrange
    const response = await users.postLogin("123", "123456");
    // Act
    accessToken = response.data.accessToken;
    refreshToken = response.data.refreshToken;
    const decodedToken = jwt.decode(accessToken) as JWTClaims;
    userId = decodedToken.userId;
    email = decodedToken.email;
    username = decodedToken.username;
    // Assert
    expect(response.data.accessToken).toBeDefined();
    expect(response.data.refreshToken).toBeDefined();
    expect(response.status).toBe(200);
  });
  it("Get Me", async (): Promise<void> => {
    // Arrange
    const response = await users.getMe(accessToken);
    //act
    expect(response.data.user).toBeDefined();
    expect(response.data.user.username).toBeDefined();
    expect(response.data.user.username).toContain("123");
    //assert
    expect(response.status).toBe(200);
  });
  it("Creates a post", async (): Promise<void> => {
    // arrange - act
    const response = await posts.postCreatePost(
      accessToken,
      "Novo post através de VSCode",
      "text",
      "<p>Post através de VSCode</p>",
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });

  it("Creates a post - Sem Comment", async (): Promise<void> => {
    // arrange - act
    const response = await posts.postCreatePost(
      accessToken,
      "Novo post através de VSCode - Sem Comment",
      "text",
      "<p>Post através de VSCode - Sem Comment</p>",
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("Get popular posts", async (): Promise<void> => {
    // arrange
    const response = await posts.getPopularPosts();
    //act
    expect(response.data.posts).toBeDefined();
    //assert
    expect(response.status).toBe(200);
  });
  it("Get recent posts", async (): Promise<void> => {
    // arrange
    const response = await posts.getRecentPosts();
    //act
    expect(response.data.posts).toBeDefined();
    //assert
    expect(response.status).toBe(200);
  });
  it("Get slug of a post", async (): Promise<void> => {
    // arrange
    const response = await posts.getRecentPosts();
    //act
    const postData = response.data.posts[0];
    slug = postData.slug;
    expect(postData.slug).toBeDefined();
    //assert
    expect(response.status).toBe(200);
  });
  it("Upvote a post", async (): Promise<void> => {
    // arrange - act
    const response = await posts.postUpvotePosts(accessToken, slug);
    //assert
    expect(response.status).toBe(200);
  });
  it("Downvote a post", async (): Promise<void> => {
    // arrange - act
    const response = await posts.postDownvotePosts(accessToken, slug);
    //assert
    expect(response.status).toBe(200);
  });
  it("Reply to a post", async (): Promise<void> => {
    // arrange - act
    const response = await comments.replyPost(
      accessToken,
      slug,
      "<p>Comentário a um post 3000</p>"
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("Get commentID of a comment of a post", async (): Promise<void> => {
    // arrange
    const response = await comments.getPostComments(slug);
    const commentI = response.data.comments[0].commentId;
    //act
    commentId = response.data.comments[0].commentId;
    expect(commentI).toBeDefined();
    expect(response.data.comments).toBeDefined();
    expect(response.data.comments.length).toBeGreaterThan(0);
    //assert
    expect(response.status).toBe(200);
  });
  it("Comment a comment of a post", async (): Promise<void> => {
    // arrange - act
    const response = await comments.replyComment(
      accessToken,
      slug,
      commentId,
      "<p>Comentário a um comentário através de VSCode 30000</p>"
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("Upvote a comment", async (): Promise<void> => {
    // arrange - act
    const response = await comments.upvoteComment(accessToken, commentId);
    //assert
    expect(response.status).toBe(200);
  });
  it("Downvote a comment", async (): Promise<void> => {
    // arrange - act
    const response = await comments.downvoteComment(accessToken, commentId);
    //assert
    expect(response.status).toBe(200);
  });
  it("Get Percentage of Posts without Comments", async (): Promise<void> => {
    // arrange
    const day = 12;
    const month = 11;
    const year = 2023;
    const date = new Date(year, month - 1, day);
    // act
    const response = await posts.getPercentageOfPostsWithoutComments(
      accessToken,
      date.toISOString()
    );
    //assert
    expect(response.status).toBe(200);
    console.log(response);
  });
  it("Get Hour With the Most Posts Created In a Day", async (): Promise<void> => {
    // arrange - act
    const date = new Date();
    const response = await posts.getHourWiththeMostPostsCreatedInaDay(
      accessToken,
      date
    );
    //assert
    expect(response.status).toBe(200);
    console.log(response);
  });
  it("Get a user by username", async (): Promise<void> => {
    // arrange - act
    const response = await users.getUserByUsername(username, accessToken);
    //assert
    expect(response.status).toBe(200);
  });
  it("Delete a user", async (): Promise<void> => {
    // arrange - act
    const response = await users.deleteUser(accessToken, username);
    //assert
    expect(response.status).toBe(200);
  });
  it("Login 2nd try", async (): Promise<void> => {
    // arrange - act
    const response = await users.postLogin("123", "123456");
    //assert
    expect(response.status).toBe(500);
  });
  it("Get - usermane most comments", async (): Promise<void> => {
    // arrange - act
    const response = await posts.getUsernameMostComments(accessToken);
    //assert
    expect(response.status).toBe(200);
    console.log(response);
  });
  it("Member Logout of the Forum", async (): Promise<void> => {
    // arrange - act
    const response = await users.postLogout(accessToken);
    //assert
    expect(response.status).toBe(200);
  });
  it("Get Member by username", async (): Promise<void> => {
    // arrange - act
    const response = await members.getMemberByUserName(username, accessToken);
    //assert
    expect(response.status).toBe(200);
  });
  it("Get Member Post Count", async (): Promise<void> => {
    // arrange - act
    const response = await members.getMemberPostCount(username);
    //assert
    expect(response.status).toBe(200);
  });
  it("Get Member Comment Count", async (): Promise<void> => {
    // arrange - act
    const response = await members.getMemberCommentCount(username);
    //assert
    expect(response.status).toBe(200);
  });
});

export default {};
