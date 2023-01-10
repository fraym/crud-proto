/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "delivery";

export interface CreateEntryRequest {
  type: string;
  tenantId: string;
  data: { [key: string]: string };
}

export interface CreateEntryRequest_DataEntry {
  key: string;
  value: string;
}

export interface CreateEntryResponse {
  id: string;
}

function createBaseCreateEntryRequest(): CreateEntryRequest {
  return { type: "", tenantId: "", data: {} };
}

export const CreateEntryRequest = {
  encode(message: CreateEntryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    Object.entries(message.data).forEach(([key, value]) => {
      CreateEntryRequest_DataEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEntryRequest();
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
          const entry3 = CreateEntryRequest_DataEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.data[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEntryRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateEntryRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    obj.data = {};
    if (message.data) {
      Object.entries(message.data).forEach(([k, v]) => {
        obj.data[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CreateEntryRequest>): CreateEntryRequest {
    const message = createBaseCreateEntryRequest();
    message.type = object.type ?? "";
    message.tenantId = object.tenantId ?? "";
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCreateEntryRequest_DataEntry(): CreateEntryRequest_DataEntry {
  return { key: "", value: "" };
}

export const CreateEntryRequest_DataEntry = {
  encode(message: CreateEntryRequest_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntryRequest_DataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEntryRequest_DataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEntryRequest_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CreateEntryRequest_DataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateEntryRequest_DataEntry>): CreateEntryRequest_DataEntry {
    const message = createBaseCreateEntryRequest_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCreateEntryResponse(): CreateEntryResponse {
  return { id: "" };
}

export const CreateEntryResponse = {
  encode(message: CreateEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEntryResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: CreateEntryResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateEntryResponse>): CreateEntryResponse {
    const message = createBaseCreateEntryResponse();
    message.id = object.id ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
