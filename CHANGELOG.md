# v1.0.0-alpha.14

- (feature) Specify correlation and causation ids

# v1.0.0-alpha.13

- (bc) Use int64 instead of int32 for pagination
- (bc) Extend and refactor delivery api

# v1.0.0-alpha.12

- (bc) Delete multiple entries instead of one: `DeleteEntry` is now `DeleteEntries`
- (feature) Add `EntryOrder` to `GetEntriesRequest`

# v1.0.0-alpha.11

- (internal) Update @grpc/grpc-js

# v1.0.0-alpha.10

- (feature) Allow defining the id when creating a entry

# v1.0.0-alpha.9

- (bug) Fix nodejs lib

# v1.0.0-alpha.8

- (bug) Rename `DataFilter` to `EntryFilter`

# v1.0.0-alpha.7

- (feature) Add `DataFilter` to `GetEntriesRequest`

# v1.0.0-alpha.6

- (feature) Add `returnEmptyDataIfNotFound` to `GetEntriesRequest`

# v1.0.0-alpha.5

- (bug) Add tenant to all requests

# v1.0.0-alpha.4

- (bc) Fix service function names

# v1.0.0-alpha.3

- (bc) Update org name

# v1.0.0-alpha.2

- (feature) Add generated go code
- (feature) Add generated nodejs code

# v1.0.0-alpha.1

- (feature) Add management
- (feature) Add delivery
