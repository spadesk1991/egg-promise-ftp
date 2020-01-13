
import * as  ftp from 'promise-ftp';
declare module 'egg' {
  export interface Application {
    ftp: typeof ftp
  }
   // extend your config
  export interface EggAppConfig {
    promiseFtp: ftp.Options
  }
};