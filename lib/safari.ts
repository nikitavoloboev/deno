import $ from "https://deno.land/x/dax/mod.ts"

/** Return URL of current tab in Safari */
export async function getSafariUrl() {
  return await $`osascript -e 'tell application "Safari" to return URL of front document'`
}
