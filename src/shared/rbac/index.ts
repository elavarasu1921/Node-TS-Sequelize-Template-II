import { AccessControl } from "accesscontrol";

export const ac = new AccessControl();

export enum Roles {
  USER = "user",
  GUEST = "guest",
  ACTOR = "actor",
  EMPLOYER = "employer",
}

export enum Resources {
  VIDEO = "video",
}

import "./actor-rbac";
import "./employer-rbac";
