# Life is Like (Discord Bot)

In college, I wrote a goofy web page for web apps that involved generated wisdom.

At some point, I turned this concept into a Discord bot.

## Quick Start

Create a file `.env` with the token from Discord:
```
DISCORD_TOKEN=FILLMEIN
```

Build and run the Docker container:
```sh
docker build -t life-is-like-discord-bot .
docker run --rm -it --env-file .env life-is-like-discord-bot
```
