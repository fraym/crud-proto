/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CrudAuthData, CrudEventMetadata, EntryFilter } from "./shared_crud";

export const protobufPackage = "delivery";

export interface DeleteEntriesRequest {
  type: string;
  auth: CrudAuthData | undefined;
  id: string;
  filter: EntryFilter | undefined;
  eventMetadata: CrudEventMetadata | undefined;
}

export interface DeleteEntriesResponse {
  numberOfDeletedEntries: number;
}

function createBaseDeleteEntriesRequest(): DeleteEntriesRequest {
  return { type: "", auth: undefined, id: "", filter: undefined, eventMetadata: undefined };
}

export const DeleteEntriesRequest = {
  encode(message: DeleteEntriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.auth !== undefined) {
      CrudAuthData.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.filter !== undefined) {
      EntryFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
    }
    if (message.eventMetadata !== undefined) {
      CrudEventMetadata.encode(message.eventMetadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEntriesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEntriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.auth = CrudAuthData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filter = EntryFilter.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.eventMetadata = CrudEventMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteEntriesRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      auth: isSet(object.auth) ? CrudAuthData.fromJSON(object.auth) : undefined,
      id: isSet(object.id) ? String(object.id) : "",
      filter: isSet(object.filter) ? EntryFilter.fromJSON(object.filter) : undefined,
      eventMetadata: isSet(object.eventMetadata) ? CrudEventMetadata.fromJSON(object.eventMetadata) : undefined,
    };
  },

  toJSON(message: DeleteEntriesRequest): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.auth !== undefined) {
      obj.auth = CrudAuthData.toJSON(message.auth);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.filter !== undefined) {
      obj.filter = EntryFilter.toJSON(message.filter);
    }
    if (message.eventMetadata !== undefined) {
      obj.eventMetadata = CrudEventMetadata.toJSON(message.eventMetadata);
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteEntriesRequest>): DeleteEntriesRequest {
    return DeleteEntriesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteEntriesRequest>): DeleteEntriesRequest {
    const message = createBaseDeleteEntriesRequest();
    message.type = object.type ?? "";
    message.auth = (object.auth !== undefined && object.auth !== null)
      ? CrudAuthData.fromPartial(object.auth)
      : undefined;
    message.id = object.id ?? "";
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? EntryFilter.fromPartial(object.filter)
      : undefined;
    message.eventMetadata = (object.eventMetadata !== undefined && object.eventMetadata !== null)
      ? CrudEventMetadata.fromPartial(object.eventMetadata)
      : undefined;
    return message;
  },
};

function createBaseDeleteEntriesResponse(): DeleteEntriesResponse {
  return { numberOfDeletedEntries: 0 };
}

export const DeleteEntriesResponse = {
  encode(message: DeleteEntriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numberOfDeletedEntries !== 0) {
      writer.uint32(8).int64(message.numberOfDeletedEntries);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.numberOfDeletedEntries = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteEntriesResponse {
    return { numberOfDeletedEntries: isSet(object.numberOfDeletedEntries) ? Number(object.numberOfDeletedEntries) : 0 };
  },

  toJSON(message: DeleteEntriesResponse): unknown {
    const obj: any = {};
    if (message.numberOfDeletedEntries !== 0) {
      obj.numberOfDeletedEntries = Math.round(message.numberOfDeletedEntries);
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteEntriesResponse>): DeleteEntriesResponse {
    return DeleteEntriesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteEntriesResponse>): DeleteEntriesResponse {
    const message = createBaseDeleteEntriesResponse();
    message.numberOfDeletedEntries = object.numberOfDeletedEntries ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
