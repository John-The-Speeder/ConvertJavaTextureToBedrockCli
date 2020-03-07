THIS PROJECT IS NO OFFICIAL MINECRAFT PRODUCT - NOT AUTHORIZED OR ASSOCIATED BY MOJANG

---

# Convert Minecraft Java texture packs to Bedrock texture packs

## Description
It supports the follow Minecraft versions:

| Minecraft | Version |
|-----------|---------|
| Java | v1.13.x, v1.14.x or v1.15.x |
| Bedrock | v1.14.x |

Some conversions of HD texture packs may takes a while

This project is inspired by the no longer continued [PCTexture2PE](https://github.com/rodrigojxd/PCTexture2PE)

It supports to convert blocks, items, entities, paintings, particles, map icons, mob effects and hotbar

Please reopen Minecraft after selecting the converted texture pack, because in the current version it seems to be a bug to reload the texture cache (Otherwise it's possible that you will have a mix between your previous and new texture pack, which can lead to appearance bugs that would not occur)

Some experimental conversions are disabled by default, but can be enabled if you want to try, but please be warned, it contains many bugs and may are not beautiful and may not usable:
- UI
    - Buttons
    - Tabs
    - Dialogs
    - Inventory / Recipe book
    - Tables

## CLI
First be sure you have installed [NodeJS](https://nodejs.org) (At least the LTS version) and install [Yarn](https://yarnpkg.com/en/docs/install)

Then install this global so you can use the binary

```bash
yarn global add @ozelot379/convert-minecraft-java-texture-to-bedrock-cli
```

You can now convert your texture packs like

```bash
ConvertJavaTextureToBedrock -i input/java_texture_pack.zip -o output/bedrock_texture_pack.mcpack
```

| Parameter | Description |
|-----------|-------------|
| -i (Required) | Input folder or zip path |
| -o (Required) | Output folder or zip path |
| -l | Show log (Default) |
| -e | Enable experimental conversions (No default) |

## Web app
Look at https://github.com/ozelot379/ConvertJavaTextureToBedrock

## API
Look at https://github.com/ozelot379/ConvertJavaTextureToBedrockApi

## Report issue
Use github repo issues (https://github.com/ozelot379/ConvertJavaTextureToBedrock/issues/new/choose)
