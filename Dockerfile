FROM node:14

COPY . /app

WORKDIR /app

RUN if [ ! -e "./node_modules" ]; then yarn; fi

WORKDIR bin

ENTRYPOINT ["./ConvertJavaTextureToBedrock.mjs"]
