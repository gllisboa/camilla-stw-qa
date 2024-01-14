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
let isdeleted: boolean;

describe("All functionalities working - status code: 200", (): void => {
  beforeAll(async (): Promise<void> => {
    posts = new Posts();
    users = new Users();
    comments = new Comments();
    members = new Members();
  });
  // testing on create user, log in, and get me access token//
  it("Post - Create User", async (): Promise<void> => {
    //Arrange - Act
    const response = await users.post("123", "123@gmail.com", "123456");
    //Assert
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
    // Arrange - Act
    const response = await users.getMe(accessToken);
    // Assert
    expect(response.data.user).toBeDefined();
    expect(response.data.user.username).toBeDefined();
    expect(response.data.user.username).toContain("123");
    expect(response.status).toBe(200);
  });
  //testing creating posts, get popular posts, get recent posts, get slug of a post, upvote a post, downvote a post
  it("Creates a post", async (): Promise<void> => {
    // Arrange - Act
    const response = await posts.postCreatePost(
      accessToken,
      "Novo post através de VSCode",
      "text",
      "<p>Post através de VSCode</p>",
      ""
    );
    // Assert
    expect(response.status).toBe(200);
  });
  it("Get popular posts", async (): Promise<void> => {
    // Arrange - Act
    const response = await posts.getPopularPosts();
    // Assert
    expect(response.data.posts).toBeDefined();
    expect(response.status).toBe(200);
  });
  it("Get recent posts", async (): Promise<void> => {
    // Arrange - Act
    const response = await posts.getRecentPosts();
    // Assert
    expect(response.data.posts).toBeDefined();
    expect(response.status).toBe(200);
  });
  it("Get slug of a post", async (): Promise<void> => {
    // Arrange
    const response = await posts.getRecentPosts();
    // Act
    const postData = response.data.posts[0];
    slug = postData.slug;
    // Assert
    expect(postData.slug).toBeDefined();
    expect(response.status).toBe(200);
  });
  it("Upvote a post", async (): Promise<void> => {
    // Arrange - Act
    const response = await posts.postUpvotePosts(accessToken, slug);
    // Assert
    expect(response.status).toBe(200);
  });
  it("Downvote a post", async (): Promise<void> => {
    // Arrange - Act
    const response = await posts.postDownvotePosts(accessToken, slug);
    // Assert
    expect(response.status).toBe(200);
  });
  // testing on comments and upvote and downvote comments
  it("Reply to a post", async (): Promise<void> => {
    // Arrange - Act
    const response = await comments.replyPost(
      accessToken,
      slug,
      "<p>Comentário a um post através de VSCode</p>"
    );
    // Assert
    expect(response.status).toBe(200);
  });
  it("Get commentID of a comment of a post", async (): Promise<void> => {
    // Arrange
    const response = await comments.getPostComments(slug);
    // Act
    const commentI = response.data.comments[0].commentId;
    commentId = response.data.comments[0].commentId;
    // Assert
    expect(commentI).toBeDefined();
    expect(response.data.comments).toBeDefined();
    expect(response.data.comments.length).toBeGreaterThan(0);
    expect(response.status).toBe(200);
  });
  it("Comment a comment of a post", async (): Promise<void> => {
    // Arrange - Act
    const response = await comments.replyComment(
      accessToken,
      slug,
      commentId,
      "<p>Comentário a um comentário através de VSCode</p>"
    );
    // Assert
    expect(response.status).toBe(200);
  });
  //testing on get user by username
  it("Get a user by username", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.getUserByUsername(username, accessToken);
    // Assert
    expect(response.status).toBe(200);
  });

  it("Get - List of usernames without isdeleted, without posts and without comments (arry=0)", async (): Promise<void> => {
    // Arrange - Act
    const response = await posts.getUsernamesWhithoutPostsAndComments(
      accessToken
    );
    // Assert
    expect(response.status).toBe(200);
    console.log(response.data);
  });
  // testing on delete user
  it("Delete a user", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.deleteUser(accessToken, "123");
    // Assert
    expect(response.status).toBe(200);
    console.log(response.data);
  });
  it("Login 2nd try", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.postLogin("123", "123456");
    // Assert
    expect(response.status).toBe(500);
  });
  it("Member Logout of the Forum", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.postLogout(accessToken);
    // Assert
    expect(response.status).toBe(200);
  });
  it("create a user userlist", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.post("userlist", "uslist@gmail.com", "123456");
    // Assert
    expect(response.status).toBe(200);
  });
  //criar um user, fazer login, get me, delete user
  it("create a user us013", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.post("us013-1", "us013-1@gmail.com", "123456");
    // Assert
    expect(response.status).toBe(200);
  });
  it("Post Login us013-1", async (): Promise<void> => {
    // Arrange
    const response = await users.postLogin("us013-1", "123456");
    // Act
    accessToken = response.data.accessToken;
    refreshToken = response.data.refreshToken;
    // Assert
    expect(response.status).toBe(200);
    expect(response.data.accessToken).toBeDefined();
    expect(response.data.refreshToken).toBeDefined();
  });
  it("Get Me us013-1", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.getMe(accessToken);
    // Assert
    expect(response.data.user.username).toBeDefined();
    expect(response.data.user.username).toContain("us013-1");
    expect(response.status).toBe(200);
  });
  it("delete - Username 123 - User has posts or comments", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.deleteUser(accessToken, "123");
    // Assert
    expect(response.status).toBe(200);
  });
  it("Post logout us013-1", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.postLogout(accessToken);
    // Assert
    expect(response.status).toBe(200);
  });
  //cretae a user, login, get me logout
  it("create a user us013-2", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.post("us013-2", "us013-2@live.com", "123456");
    // Assert
    expect(response.status).toBe(200);
  });
  it("Post Login us013-2", async (): Promise<void> => {
    // Arrange
    const response = await users.postLogin("us013-2", "123456");
    // Act
    accessToken = response.data.accessToken;
    refreshToken = response.data.refreshToken;
    // Assert
    expect(response.status).toBe(200);
    expect(response.data.accessToken).toBeDefined();
    expect(response.data.refreshToken).toBeDefined();
  });
  it("Get Me us013-2", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.getMe(accessToken);
    // Assert
    expect(response.data.user.username).toBeDefined();
    expect(response.data.user.username).toContain("us013-2");
    expect(response.status).toBe(200);
  });
  //create a user, login, get me, delete user
  it("Post - List of usernames without isdeleted, without posts and without comments", async (): Promise<void> => {
    // Arrange - Act
    const response = await posts.getUsernamesWhithoutPostsAndComments(
      accessToken
    );
    // Assert
    expect(response.status).toBe(200);
    console.log(response.data);
  });
  it("Post logout us013-2", async (): Promise<void> => {
    // Arrange - Act
    const response = await users.postLogout(accessToken);
    // Assert
    expect(response.status).toBe(200);
  });
});
export default {};
