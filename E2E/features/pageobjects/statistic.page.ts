import { $, $$ } from "@wdio/globals";
import Page from "./Page";
import Database from "./Database";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class statisticPage extends Page {
  inputDate: any;
  resultComment: any;
  buttonRefresh: any;

  public get title() {
    return $("#root > div > div > h1");
  }

  public get inputAveragePostDay() {
    return $("#avgPostDay");
  }

  public get buttonAveragePostDayRefresh() {
    return $(
      "#root > div > div > div.statisticsMetrics > div.avgPostDay > form > button"
    );
  }

  public get averagePostsResult() {
    return $(
      "#root > div > div > div.statisticsMetrics > div.avgPostDay > table > tr:nth-child(2) > td:nth-child(2)"
    );
  }

  public async getAveragePostsPerDay(date: string) {
    await this.inputAveragePostDay.setValue(date);
    await this.buttonAveragePostDayRefresh.click();
  }

  // US024 - acceptancetests -  Hour of the day with more Posts
  //correr npm run test:api:us020 + db_test_env_prep (acc_db_test_env_prep.sql)

  public get titlehourMostPost() {
    return $(
      "#root > div > div > div.statisticsMetrics > div.getHourWitheMostPostsCreadInaDay"
    );
  }

  public get inputHourMostPost() {
    return $("#hourMostPost");
  }
  public get inputHourWithe() {
    return $("#HourWithe");
  }
  public get buttonHourMostPost() {
    return $(
      "#root > div > div > div.statisticsMetrics > div.getHourWitheMostPostsCreadInaDay > form > button"
    );
  }
  public get hourMostPostResult() {
    return $($('//*[@id="root"]/div/div/div[5]/div[7]/div/p'));
  }
  public async getHourMostPostByDate(date: string) {
    await this.inputHourMostPost.setValue(date);
    await this.buttonHourMostPost.click();
  }

  //US Camilla
  public get inputDateMoreComments() {
    return $("#postMostComDay");
  }

  public get buttonMostCommentedPost() {
    return $(
      "#root > div > div > div.statisticsMetrics > div.postMostComDay > form > button"
    );
  }

  public get topCommentedPost() {
    return $(
      "#root > div > div > div.statisticsMetrics > div.postMostComDay > div > div > div.post-row-content"
    );
  }

  public get noTopPost() {
    return $(
      "#root > div > div > div.statisticsMetrics > div.postMostComDay > div > p"
    );
  }

  public get listTopCommentedPost() {
    return $$(".postMostComDay > div > div.post-row");
  }

  public get noTopCommentedPost() {
    return $(
      "#root > div > div > div.statisticsMetrics > div.postMostComDay > div > div > p"
    );
  }

  async runUS016dbSetup() {
    const queryDelete = `DELETE FROM post where created_at between '2023-12-01' and '2023-12-31' `;
    const queryInsert1 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0031, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post031', 'Text -Post031', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-01 10:17:01' as datetime), now());`;
    const queryInsert2 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0032, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post032', 'Text -Post032', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-01 10:16:01' as datetime), now());`;
    const queryInsert3 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0033, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post033', 'Text -Post033', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-01 10:15:01' as datetime), now());`;
    const queryInsert4 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0034, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post034', 'Text -Post034', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 1, cast('2023-12-02 10:14:01' as datetime), now());`;
    const queryInsert5 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0035, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post035', 'Text -Post035', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 3, cast('2023-12-02 10:13:01' as datetime), now());`;
    const queryInsert6 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0036, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post036', 'Text -Post036', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 3, cast('2023-12-02 10:12:01' as datetime), now());`;
    await this.runQuery(queryDelete);
    await this.runQuery(queryInsert1);
    await this.runQuery(queryInsert2);
    await this.runQuery(queryInsert3);
    await this.runQuery(queryInsert4);
    await this.runQuery(queryInsert5);
    await this.runQuery(queryInsert6);
  }

  //Sandra - US014 - acceptancetests -  Average number of comments per post per day

  public get buttonAverageCommented() {
    return $(
      "#root > div > div > div.statisticsMetrics > div.avgComDayMetric > form > button"
    );
  }

  public get inputDateAverageComments() {
    return $("#avgComDay");
  }

  public get averageComments() {
    return $(
      "#root > div > div > div.statisticsMetrics > div.avgComDayMetric > div > table > tr:nth-child(2) > td:nth-child(2)"
    );
  }

  public async getAverageComments() {
    const averageCommentsValue = parseFloat(
      await this.averageComments.getText()
    );
    return averageCommentsValue;
  }

  // DB US014 - Setup
  async runQuery(string: string) {
    const db = new Database();
    await db.executeQuery(string);
  }

  //DB US014 - Scenario 001 - User chooses a specific date there are no comments created
  async runUS014dbSetup() {
    const queryDelete = `DELETE FROM post where created_at between '2023-12-01' and '2023-12-31' `;
    const queryInsert1 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0031, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post031', 'Text -Post031', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-01 10:17:01' as datetime), now());`;
    const queryInsert2 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0032, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post032', 'Text -Post032', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-01 10:16:01' as datetime), now());`;
    const queryInsert3 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0033, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post033', 'Text -Post033', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 9, cast('2023-12-02 10:15:01' as datetime), now());`;
    const queryInsert4 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0034, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post034', 'Text -Post034', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 1, cast('2023-12-03 10:14:01' as datetime), now());`;
    const queryInsert5 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0035, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post035', 'Text -Post035', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 2, cast('2023-12-03 10:13:01' as datetime), now());`;
    const queryInsert6 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0036, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post036', 'Text -Post036', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 3, cast('2023-12-03 10:12:01' as datetime), now());`;
    await this.runQuery(queryDelete);
    await this.runQuery(queryInsert1);
    await this.runQuery(queryInsert2);
    await this.runQuery(queryInsert3);
    await this.runQuery(queryInsert4);
    await this.runQuery(queryInsert5);
    await this.runQuery(queryInsert6);
  }

  /**
   * overwrite specific options to adapt it to page object
   * This shows how to override a default path.
   */
  public open() {
    return super.open("statistics"); //or return super.open('login');
  }
}

export default new statisticPage();
