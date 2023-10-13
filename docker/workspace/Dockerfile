FROM node:20.8.0

ARG HOST_UID=1000
ARG HOST_GID=1000

RUN userdel --remove node \
    && groupadd --gid $HOST_GID node \
    && useradd --uid $HOST_UID --gid $HOST_GID --shell /bin/bash --create-home node
