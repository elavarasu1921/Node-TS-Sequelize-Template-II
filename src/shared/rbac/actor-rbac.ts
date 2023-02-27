import { Resources, Roles, ac } from ".";

ac.grant(Roles.USER).readOwn(Resources.VIDEO);
