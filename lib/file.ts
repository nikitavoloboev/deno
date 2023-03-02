/** Writes JSON to file */
export function writeJson(path: string, data: string): string {
  try {
    Deno.writeTextFileSync(path, JSON.stringify(data))

    return "Written to " + path
  } catch (e) {
    return e.message
  }
}
