import { $ } from "@wdio/globals";
import Page from "./Page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get flashAlert() {
    return $(".Toastify__toast-body");
  }

  public get userName() {
    //return $(".header-container div.button > span > a:nth-child(1)");
    return $(
      "#root > div > div > div.header-container.flex.flex-row.flex-center.flex-even > div.button > span > a:nth-child(1)"
    );
  }
}

export default new SecurePage();
