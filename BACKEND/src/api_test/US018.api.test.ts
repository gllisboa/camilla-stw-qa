/**
 * @author SFFDS
 * @UserStory US018 - Member view Members without any activity (Posts and Comments) for a Specific Day
 *
 *
 * @remarks
 */
import { Logger } from "tslog";
import ConfigHandler from "./config/configHandler";
import Users from "./endpoints/Users";
import Member from "./endpoints/member";
import Posts from "./endpoints/Posts";

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
let member: Member;
let accessToken: string;
let refreshToken: string;
let posts: Posts;

/******
 * @UserStory US018
 * @TestType Integrations Tests
 * @Test TC-US018 - Integration Tests
 * @UsDependency US001, US005, US007, US009, US010
 * @acceptanceCriteria AC.1 / AC.2 / AC.8 / AC.9 / AC.11
 ******/
describe("TC-US018 - Member view Members without any activity (Posts and Comments) for a Specific Day", (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    member = new Member();
    posts = new Posts();

    log.debug("1. Users Base url: " + users.getBaseUrl());
  });

  /******
   * @TestType US018 - Pre-Requesites
   * @Test Register of a New Account / FURPS - Login / Creation of 1 post at current date
   * @UsDepndency US001
   * @acceptanceCriteria NA
   ******/
  describe("Pre-Requesites - Register of a New Account / FURPS - Login / Creation of 1 post at current date by adminuser", (): void => {
    it("PR1 - Register of a New Account with Unique Parameters Email & Username", async (): Promise<void> => {
      // Arrange:
      let username: string = "adminuser";
      let email: string = "adminuser@gmail.com";
      let password: string = "adminuser";

      // Act:
      const response = await users.post(username, email, password);

      // Assert:
      expect(response.status).toBe(200);
    });

    it("PR2 - FURPS - Login with Parameters of a Registered Account (Valid Username & Password)", async (): Promise<void> => {
      // Arrange:
      let username: string = "adminuser";
      let password: string = "adminuser";

      // Act:
      const response = await users.postLogin(username, password);

      expect(response.data.accessToken).toBeDefined();
      expect(response.data.refreshToken).toBeDefined();

      accessToken = response.data.accessToken;
      refreshToken = response.data.refreshToken;

      // Assert:
      expect(response.status).toBe(200);
    });

    it("PR3 - Creation of 1 Post at current date by Authenticated User", async (): Promise<void> => {
      // Arrange:
      let title: string = "Post by AdminUser at Current Date";
      let content: string = "Post by AdminUser at Current Date";
      let type: string = "text";
      let link: string = "";

      // Act:
      const response = await posts.postCreatePost(
        accessToken,
        title,
        type,
        content,
        link
      );

      // Assert:
      expect(response.status).toBe(200);
    });
  });

  /******
   * @UserStory US018
   * @TestType Integrations Tests
   * @Test TC-US018 - Register of a New Account / FURPS - Login / Creation of 1 post at current date
   * @UsDependency US001, US005, US007, US009, US010
   * @acceptanceCriteria AC.1 / AC.2 / AC.8 / AC.9 / AC.11
   * @Remarks This test include the injection of data directly in the DB to test environment set-up through the execution of the SQL script "acc_db_test_env_prep.sql"
   *
   * Test scenarios considered:
   *
   * 1 - Test with current date with all registered users active (Post or Coment Submission)
   *
   * 2 - Test with date 03-10-2023 or 15-11-2023 when half of registerd users are active (Post or Coment Submission)
   *
   * 3 - Test with date 01-10-2023 with no activity from any of the registered users (Post or Coment Submission)
   *
   * 4 - Test with date after current date with no activity from any of the registered users (Post or Coment Submission)
   *
   ******/
  describe("TC-US018 - Integration Tests - Member view Members without any activity (Posts and Comments) for a Specific Day", (): void => {
    it("TC-US018/1 - Return Status Code 500 - With No users inactive for Current Date (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const currentDate = new Date();

      // Act:
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          currentDate
        );

      // Assert:
      expect(response.status).toBe(500);
    });

    it("TC-US018/2 - Return Status Code 200 - For date = 03-10-2023, with 1/2 of the registered users inactive (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const day = 3;
      const month = 10;
      const year = 2023;

      // Act:
      const date = new Date(year, month - 1, day);
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          date
        );

      // Assert:
      expect(response.status).toBe(200);
    });

    it("TC-US018/3 - Return Status Code 200 - For date = 01-10-2023, with All users Inactive (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const day = 1;
      const month = 10;
      const year = 2023;

      // Act:
      const date = new Date(year, month - 1, day);
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          date
        );
      // Assert:
      expect(response.status).toBe(200);
    });

    it("TC-US018/4 - Return Status Code 500 - For date after Current Date, with No users Active (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const date = new Date();
      const datePlusOne = new Date(date.setDate(date.getDate() + 1));

      //console.log("date >>>>>>>>>>>>>>>>>>>>>>>>>>>>" + date);
      //console.log("datePlusOne >>>>>>>>>>>>>>>>>>>>>>>>>>>>" + datePlusOne);

      // Act:
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          datePlusOne
        );

      //console.log("response >>>>>>>>>>>>>>>>>>>>>>>>>>>>" + response.data);

      // Assert:
      expect(response.status).toBe(500);
    });

    it("TC-US018/5 - Return Empty List of Users - For Current Date All Users are active (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const date = new Date();
      const usersList = [];

      // Act:
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          date
        );

      // Assert:
      expect(response.data.usernames).toEqual(
        expect.arrayContaining(usersList)
      );
    });

    it("TC-US018/6 - Return List of All Users - For date = 01-10-2023 with all Users inactive (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const day = 1;
      const month = 10;
      const year = 2023;
      const usersList = [
        "user-number1",
        "user-number2",
        "user-number3",
        "user-number4",
        "user-number5",
        "user-number6",
        "user-number7",
        "user-number8",
        "user-number9",
        "adminuser"
      ];

      // Act:
      const date = new Date(year, month - 1, day);
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          date
        );

      // Assert:
      expect(response.data.usernames).toEqual(
        expect.arrayContaining(usersList)
      );
    });

    it("TC-US018/7 - Return List of 1/2 Users - For date = 03-10-2023, with 1/2 of the registered users inactive (Post or Coment Submission)", async (): Promise<void> => {
      // Arrange:
      const day = 3;
      const month = 10;
      const year = 2023;
      const usersList = [
        "user-number6",
        "user-number7",
        "user-number8",
        "user-number9",
        "adminuser"
      ];

      // Act:
      const date = new Date(year, month - 1, day);
      //console.log("date >>>>>>>>>>>>>>>>>>>>>>>>>>>>" + date);
      //console.log("users list >>>>>>>>>>>>>>>>>>>>>>>>>>>>" + usersList);

      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          date
        );

      //console.log("Data response >>>>>>>>>>>>>>>>>>>>>" + response.data);

      // Assert:
      expect(response.data.usernames).toEqual(
        expect.arrayContaining(usersList)
      );
    });

    it("TC-US018/8 - Return Error Message - With no users inactive for Current Date (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const currentDate = new Date();
      const errorMessage = "No users found for the requested date.";

      // Act:
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          currentDate
        );

      //console.log(response.data.message);

      // Assert:
      expect(response.data.message).toBe(errorMessage);
    });

    it("TC-US018/9 - Return Error Message - For date after Current Date, with No users Active (Post or Comment Submission)", async (): Promise<void> => {
      // Arrange:
      const date = new Date();
      const datePlusOne = new Date(date.setDate(date.getDate() + 1));
      const errorMessage = "The date supplied is not valid.";

      //console.log("date >>>>>>>>>>>>>>>>>>>>>>>>>>>>" + date);
      //console.log("datePlusOne >>>>>>>>>>>>>>>>>>>>>>>>>>>>" + datePlusOne);

      // Act:
      const response =
        await posts.getUsernamesWithoutPostsAndWithoutCommentsByDateController(
          accessToken,
          datePlusOne
        );

      //console.log(response.data.message);

      // Assert:
      expect(response.data.message).toBe(errorMessage);
    });
  });
});
