/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "delivery";

export interface DeleteEntryRequest {
  type: string;
  tenantId: string;
  id: string;
}

export interface DeleteEntryResponse {
}

function createBaseDeleteEntryRequest(): DeleteEntryRequest {
  return { type: "", tenantId: "", id: "" };
}

export const DeleteEntryRequest = {
  encode(message: DeleteEntryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEntryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEntryRequest();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteEntryRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: DeleteEntryRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create(base?: DeepPartial<DeleteEntryRequest>): DeleteEntryRequest {
    return DeleteEntryRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteEntryRequest>): DeleteEntryRequest {
    const message = createBaseDeleteEntryRequest();
    message.type = object.type ?? "";
    message.tenantId = object.tenantId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteEntryResponse(): DeleteEntryResponse {
  return {};
}

export const DeleteEntryResponse = {
  encode(_: DeleteEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEntryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteEntryResponse();
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

  fromJSON(_: any): DeleteEntryResponse {
    return {};
  },

  toJSON(_: DeleteEntryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<DeleteEntryResponse>): DeleteEntryResponse {
    return DeleteEntryResponse.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<DeleteEntryResponse>): DeleteEntryResponse {
    const message = createBaseDeleteEntryResponse();
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
