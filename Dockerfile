# Commands to build and run Dockerfile(from Dockerfile directory):
# docker build -t (your image name here)
# docker run -p 80:80/tcp (your image name here)

FROM node:23-alpine3.20

WORKDIR /app

RUN npm install express

EXPOSE 80

COPY  ./app .

CMD ["node", "./index.js"]