/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface GetTypesRequest {
}

export interface GetTypesResponse {
  typeNames: string[];
}

function createBaseGetTypesRequest(): GetTypesRequest {
  return {};
}

export const GetTypesRequest = {
  encode(_: GetTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTypesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTypesRequest();
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

  fromJSON(_: any): GetTypesRequest {
    return {};
  },

  toJSON(_: GetTypesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTypesRequest>, I>>(base?: I): GetTypesRequest {
    return GetTypesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetTypesRequest>, I>>(_: I): GetTypesRequest {
    const message = createBaseGetTypesRequest();
    return message;
  },
};

function createBaseGetTypesResponse(): GetTypesResponse {
  return { typeNames: [] };
}

export const GetTypesResponse = {
  encode(message: GetTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.typeNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTypesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTypesResponse();
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

  fromJSON(object: any): GetTypesResponse {
    return { typeNames: Array.isArray(object?.typeNames) ? object.typeNames.map((e: any) => String(e)) : [] };
  },

  toJSON(message: GetTypesResponse): unknown {
    const obj: any = {};
    if (message.typeNames) {
      obj.typeNames = message.typeNames.map((e) => e);
    } else {
      obj.typeNames = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTypesResponse>, I>>(base?: I): GetTypesResponse {
    return GetTypesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetTypesResponse>, I>>(object: I): GetTypesResponse {
    const message = createBaseGetTypesResponse();
    message.typeNames = object.typeNames?.map((e) => e) || [];
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
