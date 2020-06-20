FROM node:14-alpine

COPY . /app
WORKDIR /app

ENV NODE_ENV production
RUN yarn

WORKDIR bin
ENTRYPOINT ["./ConvertJavaTextureToBedrockCli.mjs"]
