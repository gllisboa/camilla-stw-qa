/**
 * @author Camilla
 * @UserStory US016 - View posts with more Comments for a Specific Day
 *
 *
 * @remarks
 */

import { Logger } from "tslog";
import ConfigHandler from "./config/configHandler";
import Posts from "./endpoints/Posts";
import Users from "./endpoints/Users";

const config = ConfigHandler.getInstance();
const log = new Logger({
  minLevel: config.environmnetConfig.log_level,
  dateTimeTimezone:
    config.environmnetConfig.time_zone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone
});

let posts: Posts;
let users: Users;

let accessTokenForTestUser: string;

const testCases = [
  { specificDay: "2023-11-12", expectedLength: 1 },
  { specificDay: "2023-11-14", expectedLength: 2 },
  { specificDay: "2023-11-13", expectedLength: 0 },
  { specificDay: "2023-11-15", expectedLength: 0 }
];

function waitMilliseconds(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("View post with  more comments for a specific day", () => {
  beforeAll(async (): Promise<void> => {
    posts = new Posts();
    users = new Users();
    jest.setTimeout(60000);
  });

  afterEach(async () => {
    await waitMilliseconds(200);
  });

  it("Pre-requisites.01 - Create Test User", async (): Promise<void> => {
    const responseCreateTestOwner = await users.post(
      "testuser",
      "test@gmail.com",
      "complexPwd"
    );
    expect(responseCreateTestOwner.status).toBe(200);
  });

  it("Pre-requisites.01 - Login Test User", async (): Promise<void> => {
    const responseLoginTestOwner = await users.postLogin(
      "testuser",
      "complexPwd"
    );
    expect(responseLoginTestOwner.status).toBe(200);
    expect(responseLoginTestOwner.data.accessToken).toBeDefined();
    accessTokenForTestUser = responseLoginTestOwner.data.accessToken;
  });

  it("TC001.01 - Check that for a specific day returns the post with more comments", async () => {
    // Arrange
    const specificDay = testCases[0].specificDay; // 2023-11-12

    // Act
    const response = await posts.getPostsByDate(
      accessTokenForTestUser,
      specificDay
    );
    const postsWithComments = response.data.posts;

    // Assert
    expect(response.status).toBe(200);
    expect(postsWithComments.length).toBe(testCases[0].expectedLength);
  });

  it("TC001.02 - Check that for a specific day returns no posts found", async () => {
    // Arrange
    const specificDay = testCases[2].specificDay; // 2023-11-13

    // Act
    const response = await posts.getPostsByDate(
      accessTokenForTestUser,
      specificDay
    );
    const postsWithComments = response.data.posts;

    // Assert
    expect(response.status).toBe(200);
    expect(postsWithComments.length).toBe(testCases[2].expectedLength);
  });

  it("TC001.03 - Check that for a specific day returns posts with more comments", async () => {
    // Arrange
    const specificDay = testCases[1].specificDay; // 2023-11-14

    // Act
    const response = await posts.getPostsByDate(
      accessTokenForTestUser,
      specificDay
    );
    const postsWithComments = response.data.posts;

    // Assert
    expect(response.status).toBe(200);
    expect(postsWithComments.length).toBe(testCases[1].expectedLength);
  });

  it("TC001.04 - Check that for a specific day returns one post with no comments - no comments found", async () => {
    // Arrange
    const specificDay = testCases[3].specificDay; // 2023-11-15

    // Act
    const response = await posts.getPostsByDate(
      accessTokenForTestUser,
      specificDay
    );
    const postsWithComments = response.data.posts;
    const numComments = postsWithComments[0].numComments;

    // Assert
    expect(response.status).toBe(200);
    expect(numComments).toBe(testCases[3].expectedLength);
  });
});

export default {};
