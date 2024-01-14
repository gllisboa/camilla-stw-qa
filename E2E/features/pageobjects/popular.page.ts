import { $ } from "@wdio/globals";
import Page from "./Page";
<<<<<<< HEAD
//import DatabaseGreen from './DatabaseGreen';
import Database from "./Database";
=======
import DatabaseGreen from "./DatabaseGreen";
>>>>>>> 4e01416fefbeeb8899488b0fe057d60462e83129

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Popular extends Page {
  public get popularPostLMenu() {
    return $("div=Popular");
  }

<<<<<<< HEAD
  public get selectDate() {
    return $("#postMostComDay");
  }

  public checkGreenHighlighted() {
    $$(".highlighted-green").length;
    $$(".highlighted-green").then((elementosDestacados) => {
      elementosDestacados.forEach((element) => {
        element.waitForDisplayed();
      });
      const tamanhoDoVetor = elementosDestacados.length;
      expect(
        Number.isNaN(Number(tamanhoDoVetor)) ? 0 : Number(tamanhoDoVetor)
      ).toEqual(1);
    });
  }

  public async checkZeroGreenHighlighted() {
    $$(".highlighted-green").then((elementosDestacados) => {
      const tamanhoDoVetor = elementosDestacados.length;
      expect(
        Number.isNaN(Number(tamanhoDoVetor)) ? 0 : Number(tamanhoDoVetor)
      ).toEqual(4);
    });
  }

  public async checkSingleGreenHighlighted() {
    $$(".highlighted-green").then((elementosDestacados) => {
      const tamanhoDoVetor = elementosDestacados.length;
      expect(
        Number.isNaN(Number(tamanhoDoVetor)) ? 0 : Number(tamanhoDoVetor)
      ).toEqual(0);
    });
  }

  async runDBQuery(string: string) {
    const db = new Database();
    await db.executeQuery(string);
  }

  async clearCache() {
    const db = new Database();
    const clearCacheQuery = `RESET QUERY CACHE;`;
    await db.executeQuery(clearCacheQuery);
  }

   async commit() {
    const db = new Database();
    await db.commit();
  }

  async runUS16dbCT01() {
    const queryDelete = `DELETE FROM post `;
    const queryInsert36 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (236, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0036', 'Text -Post0036', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-17 10:17:01' as datetime), now());`;
    const queryInsert37 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (237, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0037', 'Text -Post0037', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-17 10:16:01' as datetime), now());`;
    const queryInsert38 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (238, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0038', 'Text -Post0038', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-17 10:15:01' as datetime), now());`;

    await this.runDBQuery(queryDelete);
    await this.clearCache();
    await this.runDBQuery(queryInsert36);
    await this.runDBQuery(queryInsert37);
    await this.runDBQuery(queryInsert38);
    await this.commit();
  }

  async runUS16dbCT02() {
    const queryDelete = `DELETE FROM post `;
    const queryInsert39 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (239, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0039', 'Text -Post0039', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 9, cast('2023-12-18 10:17:01' as datetime), now());`;
    
    await this.runDBQuery(queryDelete);
    await this.clearCache();
    await this.runDBQuery(queryInsert39);
    await this.commit();
  }

  async runUS16dbCT03() {
    const queryDelete = `DELETE FROM post `;
    const queryInsert21 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (221, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0021', 'Text -Post0021', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 9, cast('2023-12-19 10:17:01' as datetime), now()); `;
    const queryInsert22 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (222, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0022', 'Text -Post0022', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 8, cast('2023-12-19 10:16:01' as datetime), now()); `;
    const queryInsert23 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (223, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0023', 'Text -Post0023', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 7, cast('2023-12-19 10:15:01' as datetime), now()); `;
    const queryInsert24 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (224, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0024', 'Text -Post0024', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 6, cast('2023-12-19 10:14:01' as datetime), now()); `;
    const queryInsert25 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (225, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0025', 'Text -Post0025', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 5, cast('2023-12-19 10:13:01' as datetime), now()); `;
    const queryInsert26 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (226, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0026', 'Text -Post0026', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 4, cast('2023-12-19 10:12:01' as datetime), now()); `;
    const queryInsert27 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (227, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0027', 'Text -Post0027', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 3, cast('2023-12-19 10:11:01' as datetime), now()); `;
    const queryInsert28 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (228, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0028', 'Text -Post0028', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 2, cast('2023-12-19 10:10:01' as datetime), now()); `;
    const queryInsert29 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (229, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0029', 'Text -Post0029', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 1, cast('2023-12-19 10:09:01' as datetime), now()); `;
    const queryInsert30 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (230, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0030', 'Text -Post0030', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-19 10:08:01' as datetime), now());`;
    const queryInsert31 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (231, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0031', 'Text -Post0031', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-19 10:07:01' as datetime), now());`;
    const queryInsert32 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (232, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0032', 'Text -Post0032', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 1, cast('2023-12-19 10:06:01' as datetime), now());`;
    const queryInsert33 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (233, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0033', 'Text -Post0033', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 2, cast('2023-12-19 10:05:01' as datetime), now());`;
    const queryInsert34 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (234, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0034', 'Text -Post0034', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 3, cast('2023-12-19 10:04:01' as datetime), now());`;
    const queryInsert35 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (235, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0035', 'Text -Post0035', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 4, cast('2023-12-19 10:03:01' as datetime), now());`;

    await this.runDBQuery(queryDelete);
    await this.runDBQuery(queryInsert21);
    await this.runDBQuery(queryInsert22);
    await this.runDBQuery(queryInsert23);
    await this.runDBQuery(queryInsert24);
    await this.runDBQuery(queryInsert25);
    await this.runDBQuery(queryInsert26);
    await this.runDBQuery(queryInsert27);
    await this.runDBQuery(queryInsert28);
    await this.runDBQuery(queryInsert29);
    await this.runDBQuery(queryInsert30);
    await this.runDBQuery(queryInsert31);
    await this.runDBQuery(queryInsert32);
    await this.runDBQuery(queryInsert33);
    await this.runDBQuery(queryInsert34);
    await this.runDBQuery(queryInsert35);
    await this.commit();
  }

=======
  // public get selectDate() {
  //   return $("#postMostComDay");
  // }

  public get buttonSubmit() {
    return $(
      "#root > div > div > div.header-container.flex.flex-row.flex-center.flex-even > div.header > div.content-container > div > a"
    );
  }

  public get buttonPopular() {
    return $("#root > div > div > div.post-filters > div:nth-child(1)");
  }

  public get firstPostPleaseCommentMe() {
    return $("a.please-comment-me");
  }

  public get firstPostNumberOfComments() {
    return $("span.post-comment");
  }

  public checkGreenHighlighted() {
    $$(".highlighted-green").length;
    $$(".highlighted-green").then((elementosDestacados) => {
      elementosDestacados.forEach((element) => {
        element.waitForDisplayed();
      });
      console.log(elementosDestacados);
      console.log(`O tamanho do vetor é: ${elementosDestacados.length}`);
      const tamanhoDoVetor = elementosDestacados.length;
      console.log(`O tamanho do vetor é: ${tamanhoDoVetor}`);
      expect(
        Number.isNaN(Number(tamanhoDoVetor)) ? 0 : Number(tamanhoDoVetor)
      ).toEqual(4);
    });
  }

  public checkZeroGreenHighlighted() {
    $$(".highlighted-green").then((elementosDestacados) => {
      const tamanhoDoVetor = elementosDestacados.length;
      console.log(`O tamanho do vetor é: ${tamanhoDoVetor}`);
      expect(
        Number.isNaN(Number(tamanhoDoVetor)) ? 0 : Number(tamanhoDoVetor)
      ).toEqual(0);
    });
  }

  async runQuery(string: string) {
    const db = new DatabaseGreen();
    await db.executeQuery(string);
  }

  async runUS16dbCT01() {
    const queryDelete = `DELETE FROM post where created_at between '2023-12-01' and '2023-12-31'`;
    await this.runQuery(queryDelete);
    const queryInsert36 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (236, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0036', 'Text -Post0036', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-17 10:17:01' as datetime), now());`;
    const queryInsert37 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (237, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0037', 'Text -Post0037', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-17 10:16:01' as datetime), now());`;
    const queryInsert38 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (238, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0038', 'Text -Post0038', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-17 10:15:01' as datetime), now());`;

    await this.runQuery(queryDelete);
    await this.runQuery(queryInsert36);
    await this.runQuery(queryInsert37);
    await this.runQuery(queryInsert38);
  }

  async runUS16dbCT02() {
    const queryDelete = `DELETE FROM post where created_at between '2023-12-01' and '2023-12-31' `;
    const queryInsert39 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (239, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0039', 'Text -Post0039', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 9, cast('2023-12-18 10:17:01' as datetime), now());`;

    await this.runQuery(queryDelete);
    await this.runQuery(queryInsert39);
  }

  //   // async runUS16dbCT03() {
  //   //   const queryDelete = `DELETE FROM post `;
  //   //   const queryInsert21 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (221, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0021', 'Text -Post0021', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 9, cast('2023-12-19 10:17:01' as datetime), now()); `;
  //   //   const queryInsert22 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (222, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0022', 'Text -Post0022', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 8, cast('2023-12-19 10:16:01' as datetime), now()); `;
  //   //   const queryInsert23 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (223, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0023', 'Text -Post0023', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 7, cast('2023-12-19 10:15:01' as datetime), now()); `;
  //   //   const queryInsert24 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (224, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0024', 'Text -Post0024', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 6, cast('2023-12-19 10:14:01' as datetime), now()); `;
  //   //   const queryInsert25 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (225, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0025', 'Text -Post0025', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 5, cast('2023-12-19 10:13:01' as datetime), now()); `;
  //   //   const queryInsert26 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (226, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0026', 'Text -Post0026', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 4, cast('2023-12-19 10:12:01' as datetime), now()); `;
  //   //   const queryInsert27 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (227, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0027', 'Text -Post0027', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 3, cast('2023-12-19 10:11:01' as datetime), now()); `;
  //   //   const queryInsert28 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (228, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0028', 'Text -Post0028', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 2, cast('2023-12-19 10:10:01' as datetime), now()); `;
  //   //   const queryInsert29 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (229, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0029', 'Text -Post0029', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 1, cast('2023-12-19 10:09:01' as datetime), now()); `;
  //   //   const queryInsert30 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (230, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0030', 'Text -Post0030', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-19 10:08:01' as datetime), now());`;
  //   //   const queryInsert31 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (231, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0031', 'Text -Post0031', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 0, cast('2023-12-19 10:07:01' as datetime), now());`;
  //   //   const queryInsert32 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (232, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0032', 'Text -Post0032', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 1, cast('2023-12-19 10:06:01' as datetime), now());`;
  //   //   const queryInsert33 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (233, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0033', 'Text -Post0033', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 2, cast('2023-12-19 10:05:01' as datetime), now());`;
  //   //   const queryInsert34 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (234, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0034', 'Text -Post0034', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 3, cast('2023-12-19 10:04:01' as datetime), now());`;
  //   //   const queryInsert35 = `insert into post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) values (235, 'e9e645d5-8344-11ee-99bc-0242ac120002', 'text', 'Post0035', 'Text -Post0035', null,   concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test'), 0, 4, cast('2023-12-19 10:03:01' as datetime), now());`;

  //   //   await this.runQuery(queryDelete);
  //   //   await this.runQuery(queryInsert21);
  //   //   await this.runQuery(queryInsert22);
  //   //   await this.runQuery(queryInsert23);
  //   //   await this.runQuery(queryInsert24);
  //   //   await this.runQuery(queryInsert25);
  //   //   await this.runQuery(queryInsert26);
  //   //   await this.runQuery(queryInsert27);
  //   //   await this.runQuery(queryInsert28);
  //   //   await this.runQuery(queryInsert29);
  //   //   await this.runQuery(queryInsert30);
  //   //   await this.runQuery(queryInsert31);
  //   //   await this.runQuery(queryInsert32);
  //   //   await this.runQuery(queryInsert33);
  //   //   await this.runQuery(queryInsert34);
  //   //   await this.runQuery(queryInsert35);
  //   // }

  //   async runUS16dbCT03() {
  //     const queryDelete = `DELETE FROM post;`;

  //     const postsData = [
  //         { id: 221, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0021', text: 'Text - Post0021', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 9, createdAt: '2023-12-19 10:17:01' },
  //         { id: 222, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0022', text: 'Text - Post0022', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 8, createdAt: '2023-12-19 10:16:01' },
  //         { id: 223, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0023', text: 'Text - Post0023', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 7, createdAt: '2023-12-19 10:15:01' },
  //         { id: 224, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0024', text: 'Text - Post0024', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 6, createdAt: '2023-12-19 10:14:01' },
  //         { id: 225, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0025', text: 'Text - Post0025', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 5, createdAt: '2023-12-19 10:13:01' },
  //         { id: 226, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0026', text: 'Text - Post0026', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 4, createdAt: '2023-12-19 10:12:01' },
  //         { id: 227, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0027', text: 'Text - Post0027', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 3, createdAt: '2023-12-19 10:11:01' },
  //         { id: 228, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0028', text: 'Text - Post0028', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 2, createdAt: '2023-12-19 10:10:01' },
  //         { id: 229, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0029', text: 'Text - Post0029', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 1, createdAt: '2023-12-19 10:09:01' },
  //         { id: 230, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0030', text: 'Text - Post0030', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 0, createdAt: '2023-12-19 10:08:01' },
  //         { id: 231, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0031', text: 'Text - Post0031', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 0, createdAt: '2023-12-19 10:07:01' },
  //         { id: 232, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0032', text: 'Text - Post0032', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 1, createdAt: '2023-12-19 10:06:01' },
  //         { id: 233, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0033', text: 'Text - Post0033', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 2, createdAt: '2023-12-19 10:05:01' },
  //         { id: 234, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0034', text: 'Text - Post0034', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 3, createdAt: '2023-12-19 10:04:01' },
  //         { id: 235, memberId: 'e9e645d5-8344-11ee-99bc-0242ac120002', type: 'text', title: 'Post0035', text: 'Text - Post0035', link: null, slug: `concat(cast(ROUND((RAND() * (8999999))+1000000) as char(7)), '-test')`, points: 0, totalNumComments: 4, createdAt: '2023-12-19 10:03:01' },
  //     ];

  //     const queriesInsert = postsData.map(post => `INSERT INTO post (post_id, member_id, type, title, text, link, slug, points, total_num_comments, created_at, updated_at) VALUES (${post.id}, '${post.memberId}', '${post.type}', '${post.title}', '${post.text}', ${post.link}, ${post.slug}, ${post.points}, ${post.totalNumComments}, '${post.createdAt}', now());`);

  //     const fullQuery = `${queryDelete} ${queriesInsert.join(' ')}`;

  //     // Execute the full query
  //     // Your database connection and execution logic here
  // }
>>>>>>> 4e01416fefbeeb8899488b0fe057d60462e83129
}
export default new Popular();
