/**
 * @author JATR
 * @UserStory US017 - View top 3 Members that published more Comments for a Specific Day
 *
 * STATUS: GIVES A 404 ERROR AND ITS NOT WORKING AS IT SHOULD
 * @remarks
 

import { Logger } from "tslog";
import ConfigHandler from "./config/configHandler";
import * as jwt from "jsonwebtoken";
import { JWTClaims } from "../modules/users/domain/jwt";
import Users from "./endpoints/Users";
import Posts from "./endpoints/Posts";
import Comments from "./endpoints/Comments";
import Members from "./endpoints/member";
import { is } from "sequelize/types/lib/operators";
import e from "express";
import { memberRepo } from "../modules/forum/repos";

const config = ConfigHandler.getInstance();
const log = new Logger({
  minLevel: config.environmnetConfig.log_level,
  dateTimeTimezone:
    config.environmnetConfig.time_zone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone
});

let users: Users;
let member: Members;
let comments: Comments;
let accessToken: string;
let refreshToken: string;

describe("AC1 - View Top 3 Members with Most Comments for a Specific Day", (): void => {
  beforeAll(async () => {
    member = new Members();
  });
  it("should respond with HTTP 200 when users request the top 3 members for a specific day", async (): Promise<void> => {
    // Arrange:
    // Assuming you have the necessary parameters for getTopMembersWithMostComments
    const accessToken = "accessToken";
    const numOfMembers = 3;
    const date = "2023-11-01";

    // Act:
    const topMembersResponse = await member.getTopMembersWithMostComments(
      accessToken,
      numOfMembers,
      date
    );

    // Assert:
    expect(topMembersResponse.status).toBe(200);
  });
});

export default {}; 

*/
