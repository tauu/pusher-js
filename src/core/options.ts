import ConnectionManager from './connection/connection_manager';
import { AuthOptions, AuthorizerGenerator } from './auth/options';
import { AuthTransport, Transport } from './config';
import * as nacl from 'tweetnacl';

export interface Options {
  nacl?: nacl;

  activityTimeout?: number;
  auth?: AuthOptions;
  authEndpoint?: string;
  authTransport?: AuthTransport;
  authorizer?: AuthorizerGenerator;
  cluster?: string;
  enableStats?: boolean;
  disableStats?: boolean;
  disabledTransports?: Transport[];
  enabledTransports?: Transport[];
  encrypted?: boolean;
  forceTLS?: boolean;
  httpHost?: string;
  httpPath?: string;
  httpPort?: number;
  httpsPort?: number;
  ignoreNullOrigin?: boolean;
  pongTimeout?: number;
  statsHost?: string;
  timelineParams?: any;
  unavailableTimeout?: number;
  wsHost?: string;
  wsPath?: string;
  wsPort?: number;
  wssPort?: number;
}
