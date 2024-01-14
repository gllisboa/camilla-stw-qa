/**
 * Creating a new user;
 * Creation verification (accesstoken);
 * User login;
 * Post creation (title and text) successfully;
 * Post creation (title and link) successfully;
 * Error Creation
 * Post error in title (-1 character and + 85);
 * Post error in text ( - 1 character and + 10 000)
 * Post error on link (-7 character and +500);
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

let accessToken: string;
let refreshToken: string;
let slug: string;
let commentId: string;

describe("TC-US005 - Create a Post", (): void => {
  beforeAll(async (): Promise<void> => {
    posts = new Posts();

    log.debug("1. Posts Base url: " + posts.getBaseUrl());
  });

  describe("Users endpoint", (): void => {
    beforeAll(async (): Promise<void> => {
      users = new Users();

      log.debug("1. Users Base url: " + users.getBaseUrl());
    });

    describe("Comments endpoint", (): void => {
      beforeAll(async (): Promise<void> => {
        comments = new Comments();

        log.debug("1. Comments Base url: " + comments.getBaseUrl());
      });
      // testing on create user, log in, and get me access token//
      it("US005 - Post - Create User", async (): Promise<void> => {
        //Arrange - Act
        const response = await users.post("US005", "US005@gmail.com", "123456");
        //Assert
        expect(response.status).toBe(200);
      });
      it("US005 - Post Login", async (): Promise<void> => {
        // Arrange
        const response = await users.postLogin("US005", "123456");
        // Act
        accessToken = response.data.accessToken;
        refreshToken = response.data.refreshToken;
        // Assert
        expect(response.status).toBe(200);
        expect(response.data.accessToken).toBeDefined();
        expect(response.data.refreshToken).toBeDefined();
      });
      it("US005 - Get Me", async (): Promise<void> => {
        // Arrange - Act
        const response = await users.getMe(accessToken);
        // Assert
        expect(response.data.user).toBeDefined();
        expect(response.data.user.username).toBeDefined();
        expect(response.data.user.username).toContain("US005");
        expect(response.status).toBe(200);
      });
      //testing creating posts, get popular posts, get recent posts
      it("US005 - Creates a post sucess link", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          accessToken,
          "US005 - linksucess",
          "link",
          "",
          "www.google.com"
        );
        // assert
        expect(response.status).toBe(200);
      });
      it("US005 - Creates a post sucess text", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          accessToken,
          "US005 - textsucess",
          "text",
          "tentativa300",
          ""
        );
        // assert
        expect(response.status).toBe(200);
      });
      it("US005 - Creates a post error title (1caracter)", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          accessToken,
          "n",
          "text",
          "US005 - error (1 characters)",
          ""
        );
        // assert
        expect(response.status).toBe(500);
      });
      it("US005 - Creates a post error title (86 caracter)", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          accessToken,
          "n".repeat(86),
          "text",
          "US005 - error (86 characters)",
          ""
        );
        // assert
        expect(response.status).toBe(500);
      });
      it("US005 - Creates a post error tex 1 characters", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          accessToken,
          "US005 - errotext",
          "text",
          "t",
          ""
        );
        // assert
        expect(response.status).toBe(500);
      });
      it("US005 - Creates a post error text 10 000", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          accessToken,
          "US005 - erro10mil",
          "text",
          "N".repeat(10001),
          ""
        );
        // assert
        expect(response.status).toBe(500);
      });
      it("US005 - Creates a post link - starting from 6 characters (lower boundary 8 characters) ", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          accessToken,
          "US005 - link6characters",
          "link",
          "",
          "www.bu"
        );
        // assert
        expect(response.status).toBe(500);
      });
      it("US005- Creates a post link - up to 2082 characters - Status Code 500 (upper boundary 500 characters)", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          accessToken,
          "US005 - link2082characters",
          "link",
          "",
          "www.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle.com/googlegooglegooglegooglegooglegooglegooglegooglegoooglegoooglegooogelgoogleerro2083ink82"
        );
        // assert
        expect(response.status).toBe(500);
      });
      it("US005 - Creates a post error link - up to 5 characters - Status Code: 500 (lower boundary 8 characters) ", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          accessToken,
          "US005 - errorlink5characters",
          "link",
          "",
          "www.b"
        );
        // assert
        expect(response.status).toBe(500);
      });
      it("US005 - Creates a post error link - starting from 2083 characters - Status Code: 500 (upper boundary 500 characters)", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          accessToken,
          "US005 - errorlink2083characters",
          "link",
          "",
          "www.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogle.com/googlegooglegooglegooglegooglegooglegooglegooglegoooglegoooglegooogelgoogleerro2083inke83"
        );
        // assert
        expect(response.status).toBe(500);
      });
      it("US005 - Creates a post error acessToken", async (): Promise<void> => {
        // arrange - act
        const response = await posts.postCreatePost(
          (accessToken = "ERRO"),
          "US005 - acessToken",
          "link",
          "",
          "www.google.com"
        );
        // assert
        expect(response.status).toBe(403);
      });
    });
  });
});

export default {};
