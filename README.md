# GitHub Orgs API

## Overview

This service is uses GitHub API. The service function is to getting orgs member and manage comments againts orgs.

## How to Run

How to run this project is simple you only just need have prerequisites tools to run the project with only `node index.js`.

### API Documentation

It's included as Postman file on the root of project named `github-org.postman_collection.json`. You can import the file on your Postman / Insomnia client directly;

### Prerequisites

- PostgreSQL
- Nodejs v16.x or later with npm
- Docker (optional)

### Development Guide

Create `.env` file and :

```bash
cp .env.example .env
```

Run Database Migration:

```bash
npm run migrate:up
```

Install dependencies:

```bash
npm install
```

Running the service:

```bash
npm run dev
```

### Environment Variables

Available environment variable that used by this service

```bash
NODE_ENV        # node environment e.g: development / production / local
GITHUB_TOKEN    # github personal token generated from github app
GITHUB_API_URL  # github API base url

DB_HOST         # database host, default: localhost
DB_NAME         # database name
DB_USER         # database username
DB_PASS         # database password
DB_PORT         # database port number, default: 5432
APP_PORT        # app port that listen to, default: 3000

AUTH_TOKEN      # auth token that will be going used on API call/request
```

## Additional Information

### Getting GITHUB_TOKEN

To getting GitHub token, generate the token from [Token Settings](https://github.com/settings/tokens). You just allow for read access to organization, and user.

### Docker Build

To build the image using docker:

```bash
docker build -t [image_name] .
```

### Troubleshooting

#### Getting 401 even with correct token header

Check your GitHub token if the token is already blocked or expired by GitHub itself. If that so, generate the new token.
