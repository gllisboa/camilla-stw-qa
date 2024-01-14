/**
 *
 * @remarks
 * This code is based on the project {@link https://github.com/jmfiola/jest-api-test-typescript-example}.
 */
import { Logger } from "tslog";
import ConfigHandler from "./config/configHandler";
import * as jwt from "jsonwebtoken";
import { JWTClaims } from "../modules/users/domain/jwt";
/**
 * Imports all the endpoints used in the tests.
 */
import Users from "./endpoints/Users";
import Posts from "./endpoints/Posts";
import Comments from "./endpoints/Comments";
import Members from "./endpoints/member";

const config = ConfigHandler.getInstance();
/**
 * Creates a new Logger instance with the specified configuration.
 * @param {Object} config - The configuration object for the Logger.
 * @param {string} config.minLevel - The minimum log level to output.
 * @param {string} [config.dateTimeTimezone] - The timezone to use for log timestamps.
 * @returns {Logger} A new Logger instance.
 */
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

let commentId: string;
let userId: string;
let email: string;
let username: string;
let password: string;
let accessToken: string;
let refreshToken: string;
let slug: string;

/******
 * US012 - Display Information of Member
 *
 * Pre-Requesites:
 *
 * 1. Login as "Admin User"
 *
 ******/

describe("US012 - Display information of member  -------------------  API Unit Tests", (): void => {
  beforeAll(async (): Promise<void> => {
    posts = new Posts();
    users = new Users();
    comments = new Comments();
    members = new Members();
  });

  describe("US012/D ------------------- Functional Tests ------------------- Display Information of Member", (): void => {
    it("US012/D -1 -------------------------------------- Register of a New Account", async (): Promise<void> => {
      // Arrange:
      let username: string = "adminuser";
      let email: string = "adminuser@gmail.com";
      let password: string = "adminuser";

      // Act:
      const response = await users.post(username, email, password);

      // Assert:
      expect(response.status).toBe(200);
    });

    it("US012/D - 2 -------------------------------------- Login Admin User", async (): Promise<void> => {
      /**
       * Logs in as an admin user with the given credentials and returns the response.
       * @param {string} username - The username of the admin user.
       * @param {string} password - The password of the admin user.
       * @returns {Promise<Response>} - The response from the login request.
       */

      // Act:
      const loginAdminUser = await users.postLogin("adminuser", "adminuser");

      // Assert:
      expect(loginAdminUser.status).toBe(200);

      expect(loginAdminUser.data.accessToken).toBeDefined();
      expect(loginAdminUser.data.refreshToken).toBeDefined();

      accessToken = loginAdminUser.data.accessToken;
      refreshToken = loginAdminUser.data.refreshToken;

      const decodedToken = jwt.decode(accessToken) as JWTClaims;

      userId = decodedToken.userId;
      email = decodedToken.email;
      username = decodedToken.username;
    });

    it("US012/D - 3 -------------------------------------- Creates a post", async (): Promise<void> => {
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

    it("US012/D - 4 -------------------------------------- Get a user by username", async (): Promise<void> => {
      /**
       * Retrieves user information by username using the provided access token.
       * @param {string} username - The username of the user to retrieve information for.
       * @param {string} accessToken - The access token to use for authentication.
       * @returns {Promise<any>} - A promise that resolves with the user information.
       */

      // Act:
      const response = await users.getUserByUsername(username, accessToken);

      // Assert:
      expect(response.status).toBe(200);
      expect(response.data).toBeDefined();
    });

    it("US012/D - 5 -------------------------------------- Get Member by username", async (): Promise<void> => {
      /**
       * Retrieves a member by their username using the provided access token.
       * @param {string} username - The username of the member to retrieve.
       * @param {string} accessToken - The access token to use for authentication.
       * @returns {Promise<Member>} - A promise that resolves with the retrieved member object.
       */

      // Act:
      const response = await members.getMemberByUserName(username, accessToken);

      // Assert:
      expect(response.status).toBe(200);
    });

    it("US012/D - 6 -------------------------------------- Get username most comments", async (): Promise<void> => {
      // Act:
      const response = await posts.getUsernameMostComments(accessToken);

      // Assert:
      expect(response.status).toBe(200);

      //console.log(response);
    });

    it("US012/D - 7 -------------------------------------- Get Member Post Count", async (): Promise<void> => {
      /**
       * Retrieves the post count for a given member.
       * @param userId - The ID of the member to retrieve the post count for.
       * @returns A Promise that resolves with the post count for the given member.
       */

      // Act:
      const response = await members.getMemberPostCount(username);

      // Assert:
      expect(response.status).toBe(200);
    });

    it("US012/D - 8 -------------------------------------- Get Member Comment Count", async (): Promise<void> => {
      // Act:
      const response = await members.getMemberCommentCount(username);

      // Assert:
      expect(response.status).toBe(200);
    });
  });
});

export default {};
