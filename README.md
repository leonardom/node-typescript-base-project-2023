# 4 Libs for NodeJS

## Project Setup

1. Create a new NodeJS project

```shell
npm init -y
```

2. Install `typescript` as development dependency

```
npm install typescript -D
```

3. Start `typescript` setup

```
npx tsc --init
```

4. Open `tsconfig.json` and update `target` as following:

```json
{
  "target": "es2020"
}
```

## Installing the Libs

### 1st lib: tsx

This lib uses the esbuild and it can replace the `ts-node` but it's more performatic.

```shell
npm i tsx -D
```

Once installed you can create a script in your `package.json`:

```json
"scripts": {
  "start": "tsx src/server.ts"
},
```

This lib also comes with a watch mode which you can start with the following script:

```json
"scripts": {
  "start:dev": "tsx watch src/server.ts"
},
```

### 2nd lib: tsup

This lib also uses the esbuild but it is used in the build process instead.

```shell
npm i tsup -D
```

Once installed you can create another script in your `package.json` for build:

```json
"scripts": {
  // other scripts,
  "build": "tsup src"
}
```

### 3rd lib: vitest

This lib is similiar to jest but it also brings tests to typescritp, react, etc without additional config. It also makes use of esbuild to transpile to code from Typescript to Javascript.

https://vitest.dev

```shell
npm i vitest -D
```

Once installed, create a script to run your test in your `package.json` for build:

```json
"scripts": {
  // other scripts,
  "test": "vitest"
}
```

### 4th lib: zod

Zod is a TypeScript-first schema declaration and validation library.

https://zod.dev

```shell
npm i zod
```
