/**
 * @constant
 * Used to for the office colour selector.
 *
 * Opted over tailwind config colours to be able to
 * render colour list selector from this
 * array and to easily set in the DB
 */
export const OFFICE_COLOURS = [
  "#FFBE0B",
  "#FF9B71",
  "#FB5607",
  "#97512C",
  "#DBBADD",
  "#FF006E",
  "#A9F0D1",
  "#00B402",
  "#489DDA",
  "#0072E8",
  "#8338EC",
];

/**
 * @constant
 * Title for the app
 */
export const TITLE = "Office Space Manager";

/**
 * @constant
 * Staff Member avatar URI's (relative)
 */
export const STAFF_MEMBER_AVATARS = new Array(7)
  .fill(0)
  .map((_, i) => `/avatars/staff/${i + 1}.svg`);
