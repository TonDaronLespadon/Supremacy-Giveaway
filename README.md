# Supremacy-Giveaway
An Open-Source Giveaway Bot for Discord

## Config Setup
./config.json:
```json
{
  "prefix":"PREFIX HERE",
  "token":"TOKEN HERE",
  "owners":["OWNER USER-ID HERE"]
}
```

### Command Usage Explanation
Basically, everything in `[]` is optional. Everything in `<>` is required.

The most complex command you can have (for `$create` anyways) is `$create #giveaways -w 2 2m Test`, which creates a giveaway in #giveaways with 2 winners and will last 2 minutes. It will have the title "Test".

The least complex is `$create 60 Test`, which creates a giveaway for 1 minute with 1 winner in the current channel. It will have the title of "Test".
