import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages.login.open(page);
});

Given(/^I'm logged in as member$/, async () => {
  await pages.login.open("login");
  await LoginPage.login("testuser", "complexPwd");
});

When(/^I login with ([^"]*) and ([^"]*)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
