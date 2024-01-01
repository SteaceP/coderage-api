/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import graphql from "@strapi/plugin-graphql/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    graphql: graphql,
    "users-permissions": usersPermissions,
    i18n: i18N,
    "strapi-cloud": strapiCloud,
  },
});
