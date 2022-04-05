FROM node:16-alpine AS build
WORKDIR /app
COPY . /app
ENV NODE_ENV=production
ARG APP
ENV APP "${APP}"
RUN yarn workspaces focus @apps/${APP} --production

FROM node:16-alpine
WORKDIR /app
COPY --from=build /app .
ENV NODE_ENV=production

ARG APP
ENV APP "${APP}"
CMD ["sh", "-c", "yarn workspace @apps/${APP} start"]
