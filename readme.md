# Deno

> Deno libraries + testing code

This repo is exploring use of [Deno](https://deno.com/).

Main repo with TS code I mostly run with [Bun](https://bun.sh/) is [here](https://github.com/nikitavoloboev/ts).

[Exported libraries](https://deno.land/x/nikiv/lib) to use from [Deno.land](https://deno.land) are found in [lib](lib).

## File structure

- [lib](lib) - Deno libraries
- [src](src) - testing out Deno code
  - [main.ts](src/main.ts) - use file to run code quickly

## Setup

Everything is driven using [Deno tasks](https://deno.land/manual/tools/task_runner).

## Run

```
deno task dev
```

Runs: `deno run --watch -q -A --unstable src/main.ts`

## Publish libraries

> TODO:

## Contribute

The tasks to do are outlined in [existing issues](../../issues) and in [tasks below](#tasks) (sorted by priority).

If issue/idea you have is not there, [open new issue](../../issues/new/choose) or [start discussion](../../discussions).

Any PR with code/doc improvements is welcome. ✨

Join [Discord](https://discord.com/invite/TVafwaD23d) for more indepth discussions on this repo and [others](https://github.com/nikitavoloboev#src).

## Tasks

- check deno standard library
- check deno tooling

### ♥️

[Support on GitHub](https://github.com/sponsors/nikitavoloboev) or look into [other projects](https://nikiv.dev/projects).

[![MIT](http://bit.ly/mitbadge)](https://choosealicense.com/licenses/mit/) [![Twitter](http://bit.ly/nikitatweet)](https://twitter.com/nikitavoloboev)
