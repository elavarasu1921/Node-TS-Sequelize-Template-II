import { Resources, Roles, ac } from ".";

const emp_rbac = {
  [Roles.EMPLOYER]: {
    [Resources.VIDEO]: {
      "create:any": ["*", "!views"],
      "read:own": ["*"],
      "update:any": ["*", "!views"],
      "delete:any": ["*"],
    },
  },
};

ac.setGrants(emp_rbac);
