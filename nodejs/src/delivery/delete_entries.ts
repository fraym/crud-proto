/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { EntryFilter } from "./entry_filter";

export const protobufPackage = "delivery";

export interface DeleteEntriesRequest {
  type: string;
  tenantId: string;
  id: string;
  filter: EntryFilter | undefined;
}

export interface DeleteEntriesResponse {
}

function createBaseDeleteEntriesRequest(): DeleteEntriesRequest {
  return { type: "", tenantId: "", id: "", filter: undefined };
}

export const DeleteEntriesRequest = {
  encode(message: DeleteEntriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.filter !== undefined) {
      EntryFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEntriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEntriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.tenantId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.filter = EntryFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteEntriesRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      filter: isSet(object.filter) ? EntryFilter.fromJSON(object.filter) : undefined,
    };
  },

  toJSON(message: DeleteEntriesRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.id !== undefined && (obj.id = message.id);
    message.filter !== undefined && (obj.filter = message.filter ? EntryFilter.toJSON(message.filter) : undefined);
    return obj;
  },

  create(base?: DeepPartial<DeleteEntriesRequest>): DeleteEntriesRequest {
    return DeleteEntriesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteEntriesRequest>): DeleteEntriesRequest {
    const message = createBaseDeleteEntriesRequest();
    message.type = object.type ?? "";
    message.tenantId = object.tenantId ?? "";
    message.id = object.id ?? "";
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? EntryFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

function createBaseDeleteEntriesResponse(): DeleteEntriesResponse {
  return {};
}

export const DeleteEntriesResponse = {
  encode(_: DeleteEntriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteEntriesResponse {
    return {};
  },

  toJSON(_: DeleteEntriesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<DeleteEntriesResponse>): DeleteEntriesResponse {
    return DeleteEntriesResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<DeleteEntriesResponse>): DeleteEntriesResponse {
    const message = createBaseDeleteEntriesResponse();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
