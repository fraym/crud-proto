/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface RemoveTypesRequest {
  typeNames: string[];
}

export interface RemoveTypesResponse {
}

function createBaseRemoveTypesRequest(): RemoveTypesRequest {
  return { typeNames: [] };
}

export const RemoveTypesRequest = {
  encode(message: RemoveTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.typeNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTypesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RemoveTypesRequest {
    return { typeNames: Array.isArray(object?.typeNames) ? object.typeNames.map((e: any) => String(e)) : [] };
  },

  toJSON(message: RemoveTypesRequest): unknown {
    const obj: any = {};
    if (message.typeNames) {
      obj.typeNames = message.typeNames.map((e) => e);
    } else {
      obj.typeNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveTypesRequest>, I>>(object: I): RemoveTypesRequest {
    const message = createBaseRemoveTypesRequest();
    message.typeNames = object.typeNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseRemoveTypesResponse(): RemoveTypesResponse {
  return {};
}

export const RemoveTypesResponse = {
  encode(_: RemoveTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveTypesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveTypesResponse();
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

  fromJSON(_: any): RemoveTypesResponse {
    return {};
  },

  toJSON(_: RemoveTypesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RemoveTypesResponse>, I>>(_: I): RemoveTypesResponse {
    const message = createBaseRemoveTypesResponse();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };
