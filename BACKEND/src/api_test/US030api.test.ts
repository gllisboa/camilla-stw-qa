/**
 *
 * @remarks
 * This code is based on the project {@link https://github.com/jmfiola/jest-api-test-typescript-example}.
 */
import { Logger } from "tslog";
import ConfigHandler from "./config/configHandler";

import Users from "./endpoints/Users";
import Posts from "./endpoints/Posts";
import Comments from "./endpoints/Comments";

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

let accessTokenForUser1: string;
let accessTokenForUser2: string;
let accessTokenForUser3: string;
let postSlug1: string;
let postSlug2: string;

function waitMilliseconds(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("Commented posts by member", (): void => {
  beforeAll(async () => {
    posts = new Posts();
    users = new Users();
    comments = new Comments();
    jest.setTimeout(60000);
  });

  afterEach(async () => {
    await waitMilliseconds(200);
  });

  // Test pre-requisites - Create user, login and get token

  it("Pre-requisites.01 - Create User 1", async (): Promise<void> => {
    const responseCreatePostsOwner = await users.post(
      "mcpuser1",
      "mcpuser1@gmail.com",
      "complexPwd"
    );
    expect(responseCreatePostsOwner.status).toBe(200);
  });

  it("Pre-requisites.02 - Login User 1", async (): Promise<void> => {
    const responseLoginPostsOwner = await users.postLogin(
      "mcpuser1",
      "complexPwd"
    );
    expect(responseLoginPostsOwner.status).toBe(200);
    expect(responseLoginPostsOwner.data.accessToken).toBeDefined();
    accessTokenForUser1 = responseLoginPostsOwner.data.accessToken;
  });

  it("Pre-requisites.03 - Create the User 2", async (): Promise<void> => {
    const responseCreateUser1 = await users.post(
      "mcpuser2",
      "mcpuser2@gmail.com",
      "complexPwd"
    );
    expect(responseCreateUser1.status).toBe(200);
  });

  it("Pre-requisites.04 - Login the User 2", async (): Promise<void> => {
    const responseLoginUser1 = await users.postLogin("mcpuser2", "complexPwd");
    expect(responseLoginUser1.status).toBe(200);
    expect(responseLoginUser1.data.accessToken).toBeDefined();
    accessTokenForUser2 = responseLoginUser1.data.accessToken;
  });

  it("Pre-requisites.05 - Create the User 3", async (): Promise<void> => {
    const responseLoginUser2 = await users.post(
      "mcpuser3",
      "mcpuser3@gmail.com",
      "complexPwd"
    );
    expect(responseLoginUser2.status).toBe(200);
  });

  it("Pre-requisites.06 - Login the User3", async (): Promise<void> => {
    const responseLoginUser2 = await users.postLogin("mcpuser3", "complexPwd");
    expect(responseLoginUser2.status).toBe(200);
    expect(responseLoginUser2.data.accessToken).toBeDefined();
    accessTokenForUser3 = responseLoginUser2.data.accessToken;
  });

  it("Pre-requisites.07 - Create Post ap001 with user1", async (): Promise<void> => {
    const response = await posts.postCreatePost(
      accessTokenForUser1,
      "ap001",
      "link",
      "",
      "www.isep.ipp.pt"
    );
    expect(response.status).toBe(200);
  });

  it("Pre-requisites.08 - Get ap001 slug", async (): Promise<void> => {
    const recentPostsResponse = await posts.getRecentPosts();
    expect(recentPostsResponse.status).toBe(200);
    postSlug1 = recentPostsResponse.data.posts[0].slug;
  });

  it("Pre-requisites.09 - Create Post ap002 with user1", async (): Promise<void> => {
    const response = await posts.postCreatePost(
      accessTokenForUser1,
      "ap002",
      "link",
      "",
      "www.isep.ipp.pt"
    );
    expect(response.status).toBe(200);
  });

  it("Pre-requisites.10 - Get ap002 slug", async (): Promise<void> => {
    const recentPostsResponse = await posts.getRecentPosts();
    expect(recentPostsResponse.status).toBe(200);
    postSlug2 = recentPostsResponse.data.posts[0].slug;
  });

  // End of test pre-requisites

  /******
   *
   * TC001 - Check that if no comments have been created by the member no posts are returned
   *
   ******/
  it("TC001.01 - Check that no posts exists - user 1", async (): Promise<void> => {
    // Act
    const myCommentsResponse = await posts.getPostsWithMyComments(
      accessTokenForUser1
    );

    // Assert
    expect(myCommentsResponse.status).toBe(200);
    const responsePosts = myCommentsResponse.data.posts;
    expect(responsePosts).toHaveLength(0);
  });

  it("TC001.02 - Check that no posts exists - user 2", async (): Promise<void> => {
    // Act
    const myCommentsResponse = await posts.getPostsWithMyComments(
      accessTokenForUser2
    );

    // Assert
    expect(myCommentsResponse.status).toBe(200);
    const responsePosts = myCommentsResponse.data.posts;
    expect(responsePosts).toHaveLength(0);
  });

  it("TC001.03 - Check that no posts exists - user 3", async (): Promise<void> => {
    // Act
    const myCommentsResponse = await posts.getPostsWithMyComments(
      accessTokenForUser3
    );

    // Assert
    expect(myCommentsResponse.status).toBe(200);
    const responsePosts = myCommentsResponse.data.posts;
    expect(responsePosts).toHaveLength(0);
  });

  /******
   *
   * TC002 - After creating a comment on post ap001 user 1 should get it from the my comments
   *
   ******/

  it("TC002.01 - After creating a comment on post ap001 user 1 should get it from the my comments - Create a comment", async (): Promise<void> => {
    // Arrange
    const commentCreationResponse = await comments.replyPost(
      accessTokenForUser1,
      postSlug1,
      "this is a comment to the post..."
    );
    expect(commentCreationResponse.status).toBe(200);
  });

  it("TC002.02 - Check that user 1 commented posts have 1", async (): Promise<void> => {
    // Act
    const myCommentsResponse = await posts.getPostsWithMyComments(
      accessTokenForUser1
    );

    // Assert
    expect(myCommentsResponse.status).toBe(200);
    const responsePosts = myCommentsResponse.data.posts;
    expect(responsePosts).toHaveLength(1);
    expect(responsePosts[0].slug).toBe(postSlug1);
  });

  it("TC002.03 - Check that user 2 commented posts have 0", async (): Promise<void> => {
    const myCommentsResponse = await posts.getPostsWithMyComments(
      accessTokenForUser2
    );

    expect(myCommentsResponse.status).toBe(200);
    const responsePosts = myCommentsResponse.data.posts;
    expect(responsePosts).toHaveLength(0);
  });

  it("TC002.03 - Check that user 3 commented posts have 0", async (): Promise<void> => {
    const myCommentsResponse = await posts.getPostsWithMyComments(
      accessTokenForUser3
    );

    expect(myCommentsResponse.status).toBe(200);
    const responsePosts = myCommentsResponse.data.posts;
    expect(responsePosts).toHaveLength(0);
  });

  /******
   *
   * TC003 - User 1 and 3 comments Post ap002 - User 1 should get 2 commented posts and User 3 should get 1 commented post
   *
   ******/
  it("TC003.01 - User 1 and 3 comments Post ap002 - User 1 should get 2 commented posts and User 3 should get 1 commented post - Create a comment User 1", async (): Promise<void> => {
    // Arrange
    const commentCreationResponse = await comments.replyPost(
      accessTokenForUser1,
      postSlug2,
      "this is a comment to the post..."
    );
    expect(commentCreationResponse.status).toBe(200);
  });

  it("TC003.02 - Create a comment User 3", async (): Promise<void> => {
    const commentCreationResponse = await comments.replyPost(
      accessTokenForUser3,
      postSlug2,
      "this is a comment to the post..."
    );
    expect(commentCreationResponse.status).toBe(200);
  });

  it("TC003.03 - Check that user 1 commented posts have 2", async (): Promise<void> => {
    // Act
    const myCommentsResponse = await posts.getPostsWithMyComments(
      accessTokenForUser1
    );

    // Assert
    expect(myCommentsResponse.status).toBe(200);
    const responsePosts = myCommentsResponse.data.posts;
    expect(responsePosts).toHaveLength(2);
    let user1Slugs = [postSlug1, postSlug2];
    expect(user1Slugs).toContain(responsePosts[0].slug);
    expect(user1Slugs).toContain(responsePosts[1].slug);
  });

  it("TC003.04 - Check that user 2 commented posts have 0", async (): Promise<void> => {
    const myCommentsResponse = await posts.getPostsWithMyComments(
      accessTokenForUser2
    );

    expect(myCommentsResponse.status).toBe(200);
    const responsePosts = myCommentsResponse.data.posts;
    expect(responsePosts).toHaveLength(0);
  });

  it("TC003.05 - Check that user 3 commented posts have 1", async (): Promise<void> => {
    const myCommentsResponse = await posts.getPostsWithMyComments(
      accessTokenForUser3
    );

    expect(myCommentsResponse.status).toBe(200);
    const responsePosts = myCommentsResponse.data.posts;
    expect(responsePosts).toHaveLength(1);
    expect(responsePosts[0].slug).toBe(postSlug2);
  });
});
export default {};
