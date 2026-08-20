export const siteUrl = (process.env["SITE_URL"] ?? "https://www.example.com").replace(
  /\/$/,
  "",
);
