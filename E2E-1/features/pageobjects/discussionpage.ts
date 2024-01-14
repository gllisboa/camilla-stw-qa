import {$} from '@wdio/globals'
import Page from './Page';

class DiscussionPage {
    // ... outros elementos e métodos existentes
  
    get joinButton() {
      return $('.button'); //  classe para o botão "Join"
    }
  
    clickJoinButton() {
      this.joinButton.click();
    }
  }
  
  module.exports = new DiscussionPage();
  