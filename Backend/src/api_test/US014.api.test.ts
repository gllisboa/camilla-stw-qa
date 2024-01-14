/**
 * @author SRS
 * @UserStory US014 - Average of comments for a specific day
 *
 *
 * @remarks
 */

import { Logger } from "tslog";
import ConfigHandler from "./config/configHandler";
import Comments from "./endpoints/Comments";
import Users from "./endpoints/Users";

const config = ConfigHandler.getInstance();
const log = new Logger({
  minLevel: config.environmnetConfig.log_level,
  dateTimeTimezone:
    config.environmnetConfig.time_zone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone
});

let comments: Comments;
let users: Users;

let accessTokenForTestUser: string;

function waitMilliseconds(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe("Average of comments for a specific day", () => {
  beforeAll(async (): Promise<void> => {
    comments = new Comments();
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

  it("TC001.1 - Should return the Average of comments for a specific day", async () => {
    // Act:
    const specificDay = "2023-10-17";
    console.log("Specific Day: " + specificDay);
    // Arrange:
    const response = await comments.getCommentsByDate(
      accessTokenForTestUser,
      specificDay
    );

    const numAveregeComments = response.data.numComments;

    // Assert:
    console.log("Average Comments for Specific Day", response.data);
    expect(response.status).toBe(200);
    expect(numAveregeComments).toBe(3);
  });

  it("TC001.2 - No comments on a specific day should return 0", async () => {
    // Act:
    const specificDay = "2023-11-05";
    // Arrange:
    const response = await comments.getCommentsByDate(
      accessTokenForTestUser,
      specificDay
    );

    console.log("Response from Average Comments for Specific Day", response);

    const numAveregeComments = response.data.numComments;

    // Assert:
    console.log("Average Comments for Specific Day", response.data);
    expect(response.status).toBe(200);
    expect(numAveregeComments).toBeNull();
  });

  it("TC001.3 - Verify if there is 1 comment, on a day, it returns the average of 1", async () => {
    // Act:
    const specificDay = "2023-11-14";
    console.log("Specific Day: " + specificDay);
    // Arrange:
    const response = await comments.getCommentsByDate(
      accessTokenForTestUser,
      specificDay
    );
    const numAveregeComments = response.data.numComments;

    // Assert:
    console.log("Average Comments for Specific Day", response.data);
    expect(response.status).toBe(200);
    expect(numAveregeComments).toBe(1);
  });

  it("TC001.4 - Verify if there is 7 comments (User A: 4, User B: 3), on a day, returns the average of 3.5", async () => {
    // Act:
    const specificDay = "2023-12-02";
    console.log("Specific Day: " + specificDay);
    // Arrange:
    const response = await comments.getCommentsByDate(
      accessTokenForTestUser,
      specificDay
    );
    console.log("Response from Average Comments for Specific Day", response);
    const numAveregeComments = response.data.numComments;
    // Assert:
    console.log(response);
    expect(response.status).toBe(200);
    expect(numAveregeComments).toBe(3.5);
  });
});

export default {};
