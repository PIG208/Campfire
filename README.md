# Unihack - Campfire

## Setup

### Prerequisites
- Yarn ([Install here](https://classic.yarnpkg.com/en/docs/install))
- Node ([Download here](https://nodejs.org/en/))
- MySQL ([Download here](https://dev.mysql.com/downloads/mysql/))
    - For MySQL, you need to prepare a connection string

### Install dependencies

MacOS, Linux:
```
git clone https://github.com/PIG208/Campfire.git
cd Campfire
tools/setup
```

Windows:
```
git clone https://github.com/PIG208/Campfire.git
cd Campfire/app
yarn install
```

- Create a file `.env` under `/server`, and enter your connection string
  according to your mysql setup:

```
DATABASE_URL="mysql://username:password@hostname:port/campfire"
```

- Then,

```
cd ../server
yarn install
yarn migrate
```

## Deployment

Run (MacOS, Linux):
```
git clone https://github.com/PIG208/Campfire.git
cd Campfire
tools/run
```