FROM node:14

RUN yarn global add @ozelot379/convert-minecraft-java-texture-to-bedrock-cli

ENTRYPOINT ["ConvertJavaTextureToBedrock"]
