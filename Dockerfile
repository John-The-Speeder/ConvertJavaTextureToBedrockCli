FROM node:14-alpine

COPY . /app

WORKDIR /app

RUN yarn

WORKDIR bin

ENTRYPOINT ["./ConvertJavaTextureToBedrock.mjs"]
