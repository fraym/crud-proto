/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "management";

export interface UpdateTypesRequest {
  schema: string;
}

export interface UpdateTypesResponse {
}

function createBaseUpdateTypesRequest(): UpdateTypesRequest {
  return { schema: "" };
}

export const UpdateTypesRequest = {
  encode(message: UpdateTypesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== "") {
      writer.uint32(10).string(message.schema);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTypesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTypesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schema = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateTypesRequest {
    return { schema: isSet(object.schema) ? String(object.schema) : "" };
  },

  toJSON(message: UpdateTypesRequest): unknown {
    const obj: any = {};
    if (message.schema !== "") {
      obj.schema = message.schema;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTypesRequest>, I>>(base?: I): UpdateTypesRequest {
    return UpdateTypesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTypesRequest>, I>>(object: I): UpdateTypesRequest {
    const message = createBaseUpdateTypesRequest();
    message.schema = object.schema ?? "";
    return message;
  },
};

function createBaseUpdateTypesResponse(): UpdateTypesResponse {
  return {};
}

export const UpdateTypesResponse = {
  encode(_: UpdateTypesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTypesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTypesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UpdateTypesResponse {
    return {};
  },

  toJSON(_: UpdateTypesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTypesResponse>, I>>(base?: I): UpdateTypesResponse {
    return UpdateTypesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateTypesResponse>, I>>(_: I): UpdateTypesResponse {
    const message = createBaseUpdateTypesResponse();
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
