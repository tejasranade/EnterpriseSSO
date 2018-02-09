// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { Kinvey } from 'kinvey-nativescript-sdk';

Kinvey.init({
  appKey: 'kid_HkkomAX6Z',
  appSecret: '4dd9e92d4c7b4fbb9a730207fd2bdf0c'
});

platformNativeScriptDynamic().bootstrapModule(AppModule);