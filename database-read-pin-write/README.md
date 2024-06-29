# Read a sequence of values from database to apply to pins

It's more a [issue exploration][issue] really.


## How to run

Provision mysql. There is a compose file (run with docker compose or podman compose)

```bash
podman compose up -d
```

Run script

```bash
npm start
```

Then led should blink


## Tested on:

- Fedora 38 + gpio-sim

[issue]: https://github.com/sombriks/node-libgpiod/issues/30
