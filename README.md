THIS PROJECT IS NO OFFICIAL MINECRAFT PRODUCT - NOT AUTHORIZED OR ASSOCIATED BY MOJANG

---

# CLI for convert Minecraft Java texture packs to Bedrock texture packs

## Description

Look at https://github.com/ozelot379/ConvertJavaTextureToBedrock#user-content-description

## Requirements

This is an "ES module"

So it requires NodeJS v14

If you need older support, please try to use something like `webpack` or `babel`

Only tested with Linux

## CLI

Install it global so you can use the binary

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
