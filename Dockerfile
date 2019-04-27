# node底包 体积稍大 支持bash
FROM node:9.11.1-slim
# 可选node底包 体积更小 但不支持bash
#FROM node:9.11.1-alpine

# 定义容器中的工作路径
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile
# 拷贝所有文件
COPY . .
# 构建打包
RUN yarn run build
EXPOSE 8000
CMD yarn run serve
