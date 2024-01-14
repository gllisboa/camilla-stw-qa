/**
 *
 * @remarks
 * This code is based on the project {@link https://github.com/jmfiola/jest-api-test-typescript-example}.
 */
import { Logger } from "tslog";
import ConfigHandler from "./config/configHandler";

import Users from "./endpoints/Users";
import Posts from "./endpoints/Posts";

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

function waitMilliseconds(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("Ascending posts", (): void => {
  beforeAll(async () => {
    posts = new Posts();
    users = new Users();
    jest.setTimeout(60000);
  });

  afterEach(async () => {
    await waitMilliseconds(200);
  });

  // Test pre-requisites - Login and get token

  it("Pre-requisites.01 - Create Test User", async (): Promise<void> => {
    const responseCreateTestOwner = await users.post(
      "testuser2",
      "test2@gmail.com",
      "complexPwd2"
    );
    expect(responseCreateTestOwner.status).toBe(200);
  });

  it("Pre-requisites.01 - Login Test User", async (): Promise<void> => {
    const responseLoginTestOwner = await users.postLogin(
      "testuser2",
      "complexPwd2"
    );
    expect(responseLoginTestOwner.status).toBe(200);
    expect(responseLoginTestOwner.data.accessToken).toBeDefined();
    accessTokenForTestUser = responseLoginTestOwner.data.accessToken;
  });

  /******
   *
   * TC001 - Check that for a day without posts returns 0
   *
   ******/
  it("TC001.01 - Check that for a day without posts returns 0 ", async (): Promise<void> => {
    // Arrange

    // Act
    const response = await posts.getAveragePosts(
      accessTokenForTestUser,
      "2023-10-28"
    );

    // Assert
    expect(response.status).toBe(200);
    const responsePosts = response.data.average;
    expect(responsePosts).toBe(0);
  });

  /******
   *
   * TC002 - Check that for a day with 3 posts (1 - member A, 1 - member B, 1 - member 3) returns 1
   *
   ******/
  it("TC002.01 - Check that for a day with 3 posts (1 - member A, 1 - member B, 1 - member 3) returns 1.5", async (): Promise<void> => {
    // Arrange

    // Act
    const response = await posts.getAveragePosts(
      accessTokenForTestUser,
      "2023-10-01"
    );

    // Assert
    expect(response.status).toBe(200);
    const responsePosts = response.data.average;
    expect(responsePosts).toBe(1.5);
  });

  /******
   *
   * TC003 - Check that for a day with 4 posts (2 - member A, 1 - member B, 1 - member C) returns 1.33(3)
   *
   ******/
  it("TC003.01 - Check that for a day with 4 posts (2 - member A, 1 - member B, 1 - member C) returns 1.33(3) ", async (): Promise<void> => {
    // Arrange

    // Act
    const response = await posts.getAveragePosts(
      accessTokenForTestUser,
      "2023-10-05"
    );

    // Assert
    expect(response.status).toBe(200);
    const responsePosts = response.data.average;
    expect(responsePosts).toBe(1.3333333333333333);
  });

  /******
   *
   * TC004 - Check that for a day with 1 post returns 1
   *
   ******/
  it("TC004.01 - Check that for a day with 1 post returns 1", async (): Promise<void> => {
    // Arrange

    // Act
    const response = await posts.getAveragePosts(
      accessTokenForTestUser,
      "2023-10-09"
    );

    // Assert
    expect(response.status).toBe(200);
    const responsePosts = response.data.average;
    expect(responsePosts).toBe(1);
  });

  /******
   *
   * TC005 - Check that for a day with 7 posts (4 - member A, 3 - member B) returns 3.5
   *
   ******/
  it("TC005.01 - Check that for a day with 7 posts (4 - member A, 3 - member B) returns 3.5", async (): Promise<void> => {
    // Arrange

    // Act
    const response = await posts.getAveragePosts(
      accessTokenForTestUser,
      "2023-10-12"
    );

    // Assert
    expect(response.status).toBe(200);
    const responsePosts = response.data.average;
    expect(responsePosts).toBe(3.5);
  });

  /******
   *
   * TC006 - Check that for a day with 2 posts (2 - member A) returns 2
   *
   ******/
  it("TC006.01 - Check that for a day with 2 posts (2 - member A) returns 2", async (): Promise<void> => {
    // Arrange

    // Act
    const response = await posts.getAveragePosts(
      accessTokenForTestUser,
      "2023-11-01"
    );

    // Assert
    expect(response.status).toBe(200);
    const responsePosts = response.data.average;
    expect(responsePosts).toBe(2);
  });
});

export default {};
