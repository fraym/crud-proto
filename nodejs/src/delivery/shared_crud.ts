/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "delivery";

export interface CrudAuthData {
  tenantId: string;
  scopes: string[];
  data: { [key: string]: string };
}

export interface CrudAuthData_DataEntry {
  key: string;
  value: string;
}

export interface EntryFilter {
  fields: { [key: string]: EntryFieldFilter };
  and: EntryFilter[];
  or: EntryFilter[];
}

export interface EntryFilter_FieldsEntry {
  key: string;
  value: EntryFieldFilter | undefined;
}

export interface EntryFieldFilter {
  type: string;
  operation: string;
  value: string;
}

export interface CrudEventMetadata {
  causationId: string;
  correlationId: string;
}

function createBaseCrudAuthData(): CrudAuthData {
  return { tenantId: "", scopes: [], data: {} };
}

export const CrudAuthData = {
  encode(message: CrudAuthData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    for (const v of message.scopes) {
      writer.uint32(18).string(v!);
    }
    Object.entries(message.data).forEach(([key, value]) => {
      CrudAuthData_DataEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrudAuthData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrudAuthData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scopes.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = CrudAuthData_DataEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.data[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrudAuthData {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      scopes: Array.isArray(object?.scopes) ? object.scopes.map((e: any) => String(e)) : [],
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CrudAuthData): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    if (message.scopes?.length) {
      obj.scopes = message.scopes;
    }
    if (message.data) {
      const entries = Object.entries(message.data);
      if (entries.length > 0) {
        obj.data = {};
        entries.forEach(([k, v]) => {
          obj.data[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<CrudAuthData>): CrudAuthData {
    return CrudAuthData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CrudAuthData>): CrudAuthData {
    const message = createBaseCrudAuthData();
    message.tenantId = object.tenantId ?? "";
    message.scopes = object.scopes?.map((e) => e) || [];
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCrudAuthData_DataEntry(): CrudAuthData_DataEntry {
  return { key: "", value: "" };
}

export const CrudAuthData_DataEntry = {
  encode(message: CrudAuthData_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrudAuthData_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrudAuthData_DataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrudAuthData_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CrudAuthData_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<CrudAuthData_DataEntry>): CrudAuthData_DataEntry {
    return CrudAuthData_DataEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CrudAuthData_DataEntry>): CrudAuthData_DataEntry {
    const message = createBaseCrudAuthData_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEntryFilter(): EntryFilter {
  return { fields: {}, and: [], or: [] };
}

export const EntryFilter = {
  encode(message: EntryFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      EntryFilter_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    for (const v of message.and) {
      EntryFilter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.or) {
      EntryFilter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntryFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntryFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = EntryFilter_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.and.push(EntryFilter.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.or.push(EntryFilter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntryFilter {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{ [key: string]: EntryFieldFilter }>((acc, [key, value]) => {
          acc[key] = EntryFieldFilter.fromJSON(value);
          return acc;
        }, {})
        : {},
      and: Array.isArray(object?.and) ? object.and.map((e: any) => EntryFilter.fromJSON(e)) : [],
      or: Array.isArray(object?.or) ? object.or.map((e: any) => EntryFilter.fromJSON(e)) : [],
    };
  },

  toJSON(message: EntryFilter): unknown {
    const obj: any = {};
    if (message.fields) {
      const entries = Object.entries(message.fields);
      if (entries.length > 0) {
        obj.fields = {};
        entries.forEach(([k, v]) => {
          obj.fields[k] = EntryFieldFilter.toJSON(v);
        });
      }
    }
    if (message.and?.length) {
      obj.and = message.and.map((e) => EntryFilter.toJSON(e));
    }
    if (message.or?.length) {
      obj.or = message.or.map((e) => EntryFilter.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<EntryFilter>): EntryFilter {
    return EntryFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EntryFilter>): EntryFilter {
    const message = createBaseEntryFilter();
    message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: EntryFieldFilter }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = EntryFieldFilter.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.and = object.and?.map((e) => EntryFilter.fromPartial(e)) || [];
    message.or = object.or?.map((e) => EntryFilter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEntryFilter_FieldsEntry(): EntryFilter_FieldsEntry {
  return { key: "", value: undefined };
}

export const EntryFilter_FieldsEntry = {
  encode(message: EntryFilter_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      EntryFieldFilter.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntryFilter_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntryFilter_FieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = EntryFieldFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntryFilter_FieldsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? EntryFieldFilter.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EntryFilter_FieldsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = EntryFieldFilter.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<EntryFilter_FieldsEntry>): EntryFilter_FieldsEntry {
    return EntryFilter_FieldsEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EntryFilter_FieldsEntry>): EntryFilter_FieldsEntry {
    const message = createBaseEntryFilter_FieldsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? EntryFieldFilter.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEntryFieldFilter(): EntryFieldFilter {
  return { type: "", operation: "", value: "" };
}

export const EntryFieldFilter = {
  encode(message: EntryFieldFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.operation !== "") {
      writer.uint32(18).string(message.operation);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntryFieldFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntryFieldFilter();
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

          message.operation = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntryFieldFilter {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      operation: isSet(object.operation) ? String(object.operation) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: EntryFieldFilter): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.operation !== "") {
      obj.operation = message.operation;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<EntryFieldFilter>): EntryFieldFilter {
    return EntryFieldFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EntryFieldFilter>): EntryFieldFilter {
    const message = createBaseEntryFieldFilter();
    message.type = object.type ?? "";
    message.operation = object.operation ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCrudEventMetadata(): CrudEventMetadata {
  return { causationId: "", correlationId: "" };
}

export const CrudEventMetadata = {
  encode(message: CrudEventMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.causationId !== "") {
      writer.uint32(10).string(message.causationId);
    }
    if (message.correlationId !== "") {
      writer.uint32(18).string(message.correlationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrudEventMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrudEventMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.causationId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.correlationId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CrudEventMetadata {
    return {
      causationId: isSet(object.causationId) ? String(object.causationId) : "",
      correlationId: isSet(object.correlationId) ? String(object.correlationId) : "",
    };
  },

  toJSON(message: CrudEventMetadata): unknown {
    const obj: any = {};
    if (message.causationId !== "") {
      obj.causationId = message.causationId;
    }
    if (message.correlationId !== "") {
      obj.correlationId = message.correlationId;
    }
    return obj;
  },

  create(base?: DeepPartial<CrudEventMetadata>): CrudEventMetadata {
    return CrudEventMetadata.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CrudEventMetadata>): CrudEventMetadata {
    const message = createBaseCrudEventMetadata();
    message.causationId = object.causationId ?? "";
    message.correlationId = object.correlationId ?? "";
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
