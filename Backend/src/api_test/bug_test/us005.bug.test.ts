/* * Error in Link Validation When Creating a Post
Creating a new user;
* Creation verification (accesstoken);
* User login;
//title
* Post creation (title and text) error 500 title - 200 - caracter 1
*post creation (title and text) successfully title - 200 - caracter 2
*post creation (title and text) successfully title - 200 - caracter 3
* Post creation (title and text) successfully title - 200 - caracter 40
* Post creation (title and text) successfully title - 200 - caracter 84
* Post creation (title and text) successfully title - 200 - caracter 85
* Post creation (title and text) error 500 title - 200 - caracter 86
//text
* Post creation (title and text) error 500 text - 200 - caracter 19
* Post creation (title and text) successfully text - 200 - caracter 20
* Post creation (title and text) successfully text - 200 - caracter 21
* Post creation (title and text) successfully text - 200 - caracter 5000
* Post creation (title and text) successfully text - 200 - caracter 9999
* Post creation (title and text) successfully text - 200 - caracter 10 000
* Post creation (title and text) error 500 text - 200 - caracter 10 001
//link 
* link size conditions from 8 to 500 characters
* Post creation (title and link) error - 200 - caracter 7;
* Post creation (title and link) successfully - 200 - caracter 8;
* Post creation (title and link) successfully - 200 - caracter 9;
* Post creation (title and link) successfully - 200 - caracter 250
* Post creation (title and link) successfully - 200 - caracter 499
* Post creation (title and link) successfully - 200 - caracter 500
* Post creation (title and link) error 500 - caracter 501;
* formatting conditions (validator),
common protocols ('http', 'https', 'ftp')
* Post creation (title and link) http - 200 
* Post creation (title and link) http - 500 
* Post creation (title and link) https - 200
* Post creation (title and link) https - 500
* Post creation (title and link) ftp - 200 
* Post creation (title and link) ftp - 500 
* Post- Creates a post error link ssh - 500 
* Post creation (title and link) string - 500 
* Post creation (title and link) number - 500 
* Post creation (title and link) !#$%&/()=! - 500 
*/

import { Logger } from "tslog";
import ConfigHandler from "../config/configHandler";
import validator from "validator";

import Users from "../endpoints/Users";
import Posts from "../endpoints/Posts";
import Comments from "../endpoints/Comments";
import { stat } from "fs";

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

describe("Users endpoint", (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    posts = new Posts();
    comments = new Comments();
  });

  // testing on create user, log in, and get me access token//
  it("US005 - Post - Create User", async (): Promise<void> => {
    //arrange and act
    const response = await users.post(
      "US005-bug",
      "US005-bug@gmail.com",
      "123456"
    );
    //assert
    expect(response.status).toBe(200);
  });

  it("US005 - Post Login", async (): Promise<void> => {
    //arrange
    const response = await users.postLogin("US005-bug", "123456");
    //act
    expect(response.data.accessToken).toBeDefined();
    expect(response.data.refreshToken).toBeDefined();
    accessToken = response.data.accessToken;
    refreshToken = response.data.refreshToken;
    //assert
    expect(response.status).toBe(200);
  });

  it("US005 - Get Me", async (): Promise<void> => {
    //arrange
    const response = await users.getMe(accessToken);
    //act
    expect(response.data.user).toBeDefined();
    expect(response.data.user.username).toBeDefined();
    expect(response.data.user.username).toContain("US005-bug");
    //assert
    expect(response.status).toBe(200);
  });
  // testing on create a post sucess title (2 - 85 characters):
  it("US005 - Creates a post error title 1 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "U",
      "text",
      "text",
      ""
    );
    //assert
    expect(response.status).toBe(500);
  });
  it("US005 - Creates a post sucess title 2 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US",
      "text",
      "text",
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess title 3 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US0",
      "text",
      "text",
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess title 40 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess title 40 characters",
      "text",
      "text",
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess title 84 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess title 84 characters",
      "text",
      "text",
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess title 85 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "N".repeat(85),
      "text",
      "text",
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post error title 86 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "N".repeat(86),
      "text",
      "text",
      ""
    );
    //assert
    expect(response.status).toBe(500);
  });
  // testing on create a post sucess text (20 - 10000 characters):
  it("US005 - Creates a post error text 19 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post error text 19 characters",
      "text",
      "N".repeat(19),
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess text 20 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess text 20 characters",
      "text",
      "N".repeat(20),
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess text 21 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess text 21 characters",
      "text",
      "N".repeat(21),
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess text 5000 characters", async (): Promise<void> => {
    const response = await posts.postCreatePost(
      //arrange and act
      accessToken,
      "US005 - Creates a post sucess text 5000 characters",
      "text",
      "N".repeat(5000),
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess text 9999 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess text 9999 characters",
      "text",
      "N".repeat(9999),
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess text 10000 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess text 10000 characters",
      "text",
      "N".repeat(10000),
      ""
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post error text 10001 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post error text 10001 characters",
      "text",
      "N".repeat(10001),
      ""
    );
    //assert
    expect(response.status).toBe(500);
  });
  // testing on create a post sucess link (8 - 500 characters):
  it("US005 - Creates a post error link 7 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post error link 7 characters",
      "link",
      "",
      "www.bcm"
    );
    //assert
    expect(response.status).toBe(500);
  });
  it("US005 - Creates a post sucess link 8 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess link 8 characters",
      "link",
      "",
      "www.bcom"
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess link 9 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US05 - Creates a post sucess link 9 characters",
      "link",
      "",
      "www.bcomm"
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess link 250 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess link 250 characters",
      "link",
      "",
      "www.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoog250"
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess link 499 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US05 - Creates a post sucess link 499 characters",
      "link",
      "",
      "www.google.com/googlegooglegooglegooglegooglegooglegooglegooglegoog250www.google.com/googlegooglegooglegooglegooglegooglegooglegooglegoo499e.com/googlegooglegooglegooglegooglegooglegooglegooglegoo499e.com/googlegooglegooglegooglegooglegooglegooglegooglegoo499e.com/googlegooglegooglegooglegooglegooglegooglegooglegoo499e.com/googlegooglegooglegooglegooglegooglegooglegooglegoo499e.com/googlegooglegooglegooglegooglegooglegooglegooglegoo499e.com/googlegooglegooglegooglegooglegooglegooglegooglegoo499"
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post sucess link 500 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess link 500 characters",
      "link",
      "",
      "www.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogwww.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoog000500"
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post error link 501 characters", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post error link 501 characters",
      "link",
      "",
      "www.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoogwww.google.com/googlegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegooglegoog0000501"
    );
    //assert
    expect(response.status).toBe(500);
  });
  // formatting conditions (validator),common protocols (HTTP ,HTTPS , FTP, SSH,Telnet,File)
  it("US005 - Creates a post sucess link http", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess link http",
      "link",
      "",
      "http://www.google.com"
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post error link http", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post error link http",
      "link",
      "",
      "http:/www.google.com"
    );
    //assert
    expect(response.status).toBe(500);
  });
  it("US005 - Creates a post sucess link https", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess link https",
      "link",
      "",
      "https://www.google.com"
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post error link https", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post error link https",
      "link",
      "",
      "https:/www.google.com"
    );
    //assert
    expect(response.status).toBe(500);
  });
  it("US005 - Creates a post sucess link ftp", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess link ftp",
      "link",
      "",
      "ftp://www.google.com"
    );
    //assert
    expect(response.status).toBe(200);
  });
  it("US005 - Creates a post error link ftp", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post error link ftp",
      "link",
      "",
      "ftp:/www.google.com"
    );
    //assert
    expect(response.status).toBe(500);
  });
  it("US005 - Creates a post error link ssh", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "US005 - Creates a post sucess link ssh",
      "link",
      "",
      "ssh://www.google.com"
    );
    //assert
    expect(response.status).toBe(500);
  });

  it("US005 - Creates a post error link string", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "string",
      "link",
      "",
      "string"
    );
    //assert
    expect(response.status).toBe(500);
  });
  it("US005 - Creates a post error link number", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "number",
      "link",
      "",
      "123456789"
    );
    //assert
    expect(response.status).toBe(500);
  });
  it("US005 - Creates a post error link !#$%&/()=!", async (): Promise<void> => {
    //arrange and act
    const response = await posts.postCreatePost(
      accessToken,
      "!#$%&/()=!",
      "link",
      "",
      "!#$%&/()=!"
    );
    //assert
    expect(response.status).toBe(500);
  });
});

export default {};
