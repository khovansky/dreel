import { Component } from '@angular/core';

import { Tab1Page} from "../tab1/tab1";
import { Tab2Page} from "../tab2/tab2";
import {Tab3Page} from "../tab3/tab3";
import {Tab4Page} from "../tab4/tab4";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Tab1Page;
  tab2Root = Tab2Page;
  tab3Root = Tab3Page;
  tab4Root = Tab4Page;

  constructor() {

  }
}
