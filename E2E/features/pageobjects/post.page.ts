import { $ } from "@wdio/globals";
import Page from "./Page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class postPage extends Page {
  public get inputTitle() {
    return $("#root > div > div > div.post-submission > input");
  }

  public get inputText() {
    return $(
      "#root > div > div > div.post-submission > div:nth-child(4) > div > div > div.ql-container.ql-snow > div.ql-editor.ql-blank"
    );
  }

  public get buttonSubmitPost() {
    return $("#root > div > div > div.post-submission > button");
  }

  public get inputComment() {
    return $(
      "#root > div > div > div.editor > div > div.ql-container.ql-snow > div.ql-editor.ql-blank"
    );
  }

  public get buttonSubmitComment() {
    return $("#root > div > div > button");
  }

  public get buttonBackToAllDiscussionsButton() {
    return $(
      "#root > div > div > div.header-container.flex.flex-row.flex-center.flex-between > a"
    );
  }

  public async createPost(title: string, text: string) {
    await this.inputTitle.setValue(title);
    await this.inputText.setValue(text);
    await this.buttonSubmitPost.click();
  }

  public async createComment(comment: string) {
    await this.inputComment.setValue(comment);
    await this.buttonSubmitComment.click();
  }

  public async backToAllDiscussions() {
    await this.buttonBackToAllDiscussionsButton.click();
  }
  /**
   * overwrite specific options to adapt it to page object
   * This shows how to override a default path.
   */
  public open(path: string) {
    return super.open(path); //or return super.open('login');
  }
}

export default new postPage();
