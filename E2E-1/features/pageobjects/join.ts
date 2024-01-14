import {$} from '@wdio/globals'
import Page from './Page';

class JoinPage extends Page {

    get loginButton() {
      return $('.button'); //  classe para o botão "Join"
    }

    clickLoginButton() {
      this.loginButton.click();
    }

    public get inputUsername() {
    return $('#username');
}

public get inputPassword() {
    return $('#password');
}
}