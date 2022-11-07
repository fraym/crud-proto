# crud-proto

This repository contains all protocol buffers for the gRPC api of the crud service.

## Usage

### Install go package

```bash
go get -u github.com/fraym/crud-proto/go
```

### Install nodejs package

```bash
npm i @fraym/crud-proto
```

## Development

1. change .proto files
2. run `make proto`
3. ensure that you export all services and requests in `nodejs/src/index.ts`
4. run `make build`
5. adjust CHANGELOG.md and commit all your changes
6. release nodejs code by executing `make publish-nodejs`
7. release go code by creating a new git release with a tag in the form of `go/v1.0.0` (the prefix `go/` is important)

## Components

### Management

Contains all proto files for the management api of the crud service.

### Delivery

Contains all proto files for the delivery api of the crud service.
