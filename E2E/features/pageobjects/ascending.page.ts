import { $ } from "@wdio/globals";
import Page from "./Page";
<<<<<<< HEAD
import Database from "./Database";
=======
import Database from './Database';
>>>>>>> 4e01416fefbeeb8899488b0fe057d60462e83129

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Ascending extends Page {
<<<<<<< HEAD
  public get ascendingPostLMenu() {
    return $("div=Ascending");
  }

  public get statsPostMenu() {
    return $("a[href*='statistics']");
  }

  public get selectDate() {
    return $("#postMostComDay");
  }

  //Highlight Yellow: Highlight posts between 1/3 and 2/3 of comments
  public checkYellowHighlighted() {
    $$(".highlighted-yellow").length;
    $$(".highlighted-yellow").then((elementosDestacados) => {
      elementosDestacados.forEach((element) => {
        element.waitForDisplayed();
      });
      console.log(elementosDestacados);
      console.log(`O tamanho do vetor é: ${elementosDestacados.length}`);
      const tamanhoDoVetor = elementosDestacados.length;
      console.log(`O tamanho do vetor é: ${tamanhoDoVetor}`);
      expect(
        Number.isNaN(Number(tamanhoDoVetor)) ? 0 : Number(tamanhoDoVetor)
      ).toEqual(6);
    });
  }

  public checkNoPostYellowHighlighted() {
    $$(".highlighted-yellow").then((elementosDestacados) => {
      const tamanhoDoVetor = elementosDestacados.length;
      console.log(`O tamanho do vetor é: ${tamanhoDoVetor}`);
      expect(
        Number.isNaN(Number(tamanhoDoVetor)) ? 0 : Number(tamanhoDoVetor)
      ).toEqual(0);
    });
  }


  /*  DBs Setup --------------------------------------------------------------------------------
  Datasets US023: Highlight posts between 1/3 and 2/3 of comments in Yellow
  */

  async runQuery(string: string) {
    const db = new Database();
    await db.executeQuery(string);
  }

  //@CT-AscendingYellow0001 - Scenario: Single post in the recent posts section
  async runAscendingCT0001() {
    const queryDelete = `DELETE FROM post `;
    const queryInsert = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0031, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post031', 'Text -Post031', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL FLOOR(RAND() * 5) + 2 DAY), '%Y-%m-%d %H:%i:%s'), now());`;
    await this.runQuery(queryDelete);
    await this.runQuery(queryInsert);
  }

  ///@CT-AscendingYellow0002 - Scenario: No posts highlighted in yellow when all posts are highly commented
  async runAscendingCT0002() {
    const queryDelete = `DELETE FROM post `;
    const queryInsert0001 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0016, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0016', 'Text -Post0016', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 9, cast('2023-12-09 10:17:01' as datetime), now());`;
    const queryInsert0002 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0017, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0017', 'Text -Post0017', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 2, cast('2023-12-09 10:16:01' as datetime), now());`;
    const queryInsert0003 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0018, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0018', 'Text -Post0018', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 2, cast('2023-12-09 10:15:01' as datetime), now());`;
    const queryInsert0004 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0019, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0019', 'Text -Post0019', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 2, cast('2023-12-09 10:14:01' as datetime), now());`;
    const queryInsert0005 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (0020, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0020', 'Text -Post0020', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 1, cast('2023-12-09 10:13:01' as datetime), now());`;
    console.log("CT-001- datebase sucess");
    await this.runQuery(queryDelete);
    await this.runQuery(queryInsert0001);
    await this.runQuery(queryInsert0002);
    await this.runQuery(queryInsert0003);
    await this.runQuery(queryInsert0004);
    await this.runQuery(queryInsert0005);
    console.log("CT-001- datebase sucess 2");
  }

  ///@CT-AscendingYellow0003 - Scenario: Highlight posts between 1/3 and 2/3 of comments in Yellow
  async runAscendingCT0003() {
    const queryDelete = `DELETE FROM post `;
    const queryInsert1 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (1, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post001', 'Text -Post001', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 9, cast('2023-12-10 10:17:01' as datetime), now()); `;
    const queryInsert2 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (2, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post002', 'Text -Post002', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 8, cast('2023-12-10 10:16:01' as datetime), now()); `;
    const queryInsert3 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (3, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post003', 'Text -Post003', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 7, cast('2023-12-10 10:15:01' as datetime), now()); `;
    const queryInsert4 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (4, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post004', 'Text -Post004', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 6, cast('2023-12-10 10:14:01' as datetime), now()); `;
    const queryInsert5 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (5, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post005', 'Text -Post005', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 5, cast('2023-12-10 10:13:01' as datetime), now()); `;
    const queryInsert6 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (6, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post006', 'Text -Post006', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 4, cast('2023-12-10 10:12:01' as datetime), now()); `;
    const queryInsert7 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (7, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post007', 'Text -Post007', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 3, cast('2023-12-10 10:11:01' as datetime), now()); `;
    const queryInsert8 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (8, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post008', 'Text -Post008', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 2, cast('2023-12-10 10:10:01' as datetime), now()); `;
    const queryInsert9 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (9, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post009', 'Text -Post009', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 1, cast('2023-12-10 10:09:01' as datetime), now()); `;
    const queryInsert10 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (10, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post010', 'Text -Post010', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-10 10:08:01' as datetime), now());`;
    const queryInsert11 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (11, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post011', 'Text -Post011', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-10 10:07:01' as datetime), now());`;
    const queryInsert12 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (12, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post012', 'Text -Post012', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 1, cast('2023-12-10 10:06:01' as datetime), now());`;
    const queryInsert13 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (13, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post013', 'Text -Post013', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 2, cast('2023-12-10 10:05:01' as datetime), now());`;
    const queryInsert14 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (14, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post014', 'Text -Post014', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 3, cast('2023-12-10 10:04:01' as datetime), now());`;
    const queryInsert15 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (15, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post015', 'Text -Post015', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 4, cast('2023-12-10 10:03:01' as datetime), now());`;
    console.log("CT-001- datebase sucess");
    await this.runQuery(queryDelete);
    await this.runQuery(queryInsert1);
    await this.runQuery(queryInsert2);
    await this.runQuery(queryInsert3);
    await this.runQuery(queryInsert4);
    await this.runQuery(queryInsert5);
    await this.runQuery(queryInsert6);
    await this.runQuery(queryInsert7);
    await this.runQuery(queryInsert8);
    await this.runQuery(queryInsert9);
    await this.runQuery(queryInsert10);
    await this.runQuery(queryInsert11);
    await this.runQuery(queryInsert12);
    await this.runQuery(queryInsert13);
    await this.runQuery(queryInsert14);
    await this.runQuery(queryInsert15);
    console.log("CT-001- datebase sucess 2");
  }
}
=======

    public async getNumberofposts() {
        return await $$('div.post-row').length;
    }

    public clickAscending() {
        $('div=Ascending').click();
    }

    public async getPostDate() {
        return await $('div.post-row > div.post-date').getText();
    }

    public checkGreenHighlighted() {
        $$('.highlighted-green').length;
        $$('.highlighted-green').then((greenElements) => {
          greenElements.forEach((element) => {
            element.waitForDisplayed();
          });
          console.log(greenElements);
          console.log(`O tamanho do vetor é: ${greenElements.length}`);
          const tamanhoDoVetor = greenElements.length;
          console.log(`O tamanho do vetor é: ${tamanhoDoVetor}`);
          expect(Number.isNaN(Number(tamanhoDoVetor)) ? 0 : Number(tamanhoDoVetor)).toEqual(8);
        });
      }
      

    async runQuery(string: string) {
        const db = new Database();
        await db.executeQuery(string);
      }
    
      async runTC_01() {
        const queryDelete = `DELETE FROM post `;
        const queryInsert1 = `
          INSERT INTO post (
            post_id,
            member_id,
            type,
            title,
            text,
            link,
            slug,
            points,
            total_num_comments,
            created_at,
            updated_at
          ) VALUES (
            1,
            'e9e645d5-8344-11ee-99bc-0242ac120002',
            'text',
            'Post001',
            'Text - Post001',
            null,
            concat(cast(ROUND((RAND() * (8999999)) + 1000000) as char(7)), '-test'),
            0,
            9,
            cast('2023-12-10 10:17:01' as datetime),
            now()
          )`;
    
        console.log('TC_01 - Database success');
        
        try {
          await this.runQuery(queryDelete);
          await this.runQuery(queryInsert1);
          console.log('TC_01 - Database success 2');
        } catch (error) {
          console.error('TC_01 - Error:', error);
          throw error;
        }
      }
    }

>>>>>>> 4e01416fefbeeb8899488b0fe057d60462e83129
export default new Ascending();
