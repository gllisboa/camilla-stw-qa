/**
 * @author SFFDS
 * @UserStory US001 - Register of a New Account
 *
 *
 * @remarks API Unit Tests batch for the US001 - Register of a New Account
 */
import { Logger } from "tslog";
import ConfigHandler from "../config/configHandler";
import Users from "../endpoints/Users";

const config = ConfigHandler.getInstance();
const log = new Logger({
  minLevel: config.environmnetConfig.log_level,
  dateTimeTimezone:
    config.environmnetConfig.time_zone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone
});

/**
 * Global Variables Declaration
 */
let users: Users;
let accessToken: string;
let refreshToken: string;

/******
 * @UserStory US001
 * @TestType Integration Tests
 * @Test TC-US001-BUG - Register of a New Account with empty string as input parameters for Username, and Password
 * @UsDependency NA
 * @acceptanceCriteria AC1 / AC2 / AC3 / AC4 / AC5
 ******/
describe("TC-US001-BUG - Register of a New Account with empty string as input parameters for Username, and Password", (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    log.debug("1. Users Base url: " + users.getBaseUrl());
  });

  it("TC-US001-BUG/1 - Register of a New Account with Username as an empty string with 2 characters length", async (): Promise<void> => {
    // Arrange:
    let username: string = "  ";
    let email: string = "admin1@gmail.com";
    let password: string = "admin1";

    // Act:
    const response = await users.post(username, email, password);

    // Assert:
    expect(response.status).toBe(500);
  });

  it("TC-US001-BUG/2 - Register of a New Account with Username as an empty string with 15 characters length", async (): Promise<void> => {
    // Arrange:
    let username: string = "               ";
    let email: string = "admin1@gmail.com";
    let password: string = "admin1";

    // Act:
    const response = await users.post(username, email, password);

    // Assert:
    expect(response.status).toBe(500);
  });

  it("TC-US001-BUG/3 - Register of a New Account with Password as an empty string with 6 characters length", async (): Promise<void> => {
    // Arrange:
    let username: string = "adminuser";
    let email: string = "adminuser@gmail.com";
    let password: string = "      ";

    // Act:
    const response = await users.post(username, email, password);

    // Assert:
    expect(response.status).toBe(500);
  });
});

export default {};
