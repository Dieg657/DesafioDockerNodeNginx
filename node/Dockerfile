FROM node

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.4/wait-for && \
    chmod +x /usr/bin/wait-for

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000