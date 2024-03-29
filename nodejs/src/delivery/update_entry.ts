/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CrudAuthData, CrudEventMetadata } from "./shared_crud";

export const protobufPackage = "delivery";

export interface UpdateEntryRequest {
  type: string;
  auth: CrudAuthData | undefined;
  id: string;
  data: { [key: string]: string };
  eventMetadata: CrudEventMetadata | undefined;
}

export interface UpdateEntryRequest_DataEntry {
  key: string;
  value: string;
}

export interface UpdateEntryResponse {
  newData: { [key: string]: string };
  validationErrors: string[];
  fieldValidationErrors: { [key: string]: string };
}

export interface UpdateEntryResponse_NewDataEntry {
  key: string;
  value: string;
}

export interface UpdateEntryResponse_FieldValidationErrorsEntry {
  key: string;
  value: string;
}

function createBaseUpdateEntryRequest(): UpdateEntryRequest {
  return { type: "", auth: undefined, id: "", data: {}, eventMetadata: undefined };
}

export const UpdateEntryRequest = {
  encode(message: UpdateEntryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.auth !== undefined) {
      CrudAuthData.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    Object.entries(message.data).forEach(([key, value]) => {
      UpdateEntryRequest_DataEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.eventMetadata !== undefined) {
      CrudEventMetadata.encode(message.eventMetadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEntryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEntryRequest();
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

          const entry4 = UpdateEntryRequest_DataEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.data[entry4.key] = entry4.value;
          }
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

  fromJSON(object: any): UpdateEntryRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      auth: isSet(object.auth) ? CrudAuthData.fromJSON(object.auth) : undefined,
      id: isSet(object.id) ? String(object.id) : "",
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      eventMetadata: isSet(object.eventMetadata) ? CrudEventMetadata.fromJSON(object.eventMetadata) : undefined,
    };
  },

  toJSON(message: UpdateEntryRequest): unknown {
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
    if (message.data) {
      const entries = Object.entries(message.data);
      if (entries.length > 0) {
        obj.data = {};
        entries.forEach(([k, v]) => {
          obj.data[k] = v;
        });
      }
    }
    if (message.eventMetadata !== undefined) {
      obj.eventMetadata = CrudEventMetadata.toJSON(message.eventMetadata);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateEntryRequest>): UpdateEntryRequest {
    return UpdateEntryRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateEntryRequest>): UpdateEntryRequest {
    const message = createBaseUpdateEntryRequest();
    message.type = object.type ?? "";
    message.auth = (object.auth !== undefined && object.auth !== null)
      ? CrudAuthData.fromPartial(object.auth)
      : undefined;
    message.id = object.id ?? "";
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.eventMetadata = (object.eventMetadata !== undefined && object.eventMetadata !== null)
      ? CrudEventMetadata.fromPartial(object.eventMetadata)
      : undefined;
    return message;
  },
};

function createBaseUpdateEntryRequest_DataEntry(): UpdateEntryRequest_DataEntry {
  return { key: "", value: "" };
}

export const UpdateEntryRequest_DataEntry = {
  encode(message: UpdateEntryRequest_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEntryRequest_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEntryRequest_DataEntry();
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

  fromJSON(object: any): UpdateEntryRequest_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: UpdateEntryRequest_DataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateEntryRequest_DataEntry>): UpdateEntryRequest_DataEntry {
    return UpdateEntryRequest_DataEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateEntryRequest_DataEntry>): UpdateEntryRequest_DataEntry {
    const message = createBaseUpdateEntryRequest_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUpdateEntryResponse(): UpdateEntryResponse {
  return { newData: {}, validationErrors: [], fieldValidationErrors: {} };
}

export const UpdateEntryResponse = {
  encode(message: UpdateEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.newData).forEach(([key, value]) => {
      UpdateEntryResponse_NewDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    for (const v of message.validationErrors) {
      writer.uint32(18).string(v!);
    }
    Object.entries(message.fieldValidationErrors).forEach(([key, value]) => {
      UpdateEntryResponse_FieldValidationErrorsEntry.encode({ key: key as any, value }, writer.uint32(26).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEntryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = UpdateEntryResponse_NewDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.newData[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validationErrors.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = UpdateEntryResponse_FieldValidationErrorsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.fieldValidationErrors[entry3.key] = entry3.value;
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

  fromJSON(object: any): UpdateEntryResponse {
    return {
      newData: isObject(object.newData)
        ? Object.entries(object.newData).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => String(e))
        : [],
      fieldValidationErrors: isObject(object.fieldValidationErrors)
        ? Object.entries(object.fieldValidationErrors).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: UpdateEntryResponse): unknown {
    const obj: any = {};
    if (message.newData) {
      const entries = Object.entries(message.newData);
      if (entries.length > 0) {
        obj.newData = {};
        entries.forEach(([k, v]) => {
          obj.newData[k] = v;
        });
      }
    }
    if (message.validationErrors?.length) {
      obj.validationErrors = message.validationErrors;
    }
    if (message.fieldValidationErrors) {
      const entries = Object.entries(message.fieldValidationErrors);
      if (entries.length > 0) {
        obj.fieldValidationErrors = {};
        entries.forEach(([k, v]) => {
          obj.fieldValidationErrors[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateEntryResponse>): UpdateEntryResponse {
    return UpdateEntryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateEntryResponse>): UpdateEntryResponse {
    const message = createBaseUpdateEntryResponse();
    message.newData = Object.entries(object.newData ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.validationErrors = object.validationErrors?.map((e) => e) || [];
    message.fieldValidationErrors = Object.entries(object.fieldValidationErrors ?? {}).reduce<
      { [key: string]: string }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseUpdateEntryResponse_NewDataEntry(): UpdateEntryResponse_NewDataEntry {
  return { key: "", value: "" };
}

export const UpdateEntryResponse_NewDataEntry = {
  encode(message: UpdateEntryResponse_NewDataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEntryResponse_NewDataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEntryResponse_NewDataEntry();
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

  fromJSON(object: any): UpdateEntryResponse_NewDataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: UpdateEntryResponse_NewDataEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateEntryResponse_NewDataEntry>): UpdateEntryResponse_NewDataEntry {
    return UpdateEntryResponse_NewDataEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateEntryResponse_NewDataEntry>): UpdateEntryResponse_NewDataEntry {
    const message = createBaseUpdateEntryResponse_NewDataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseUpdateEntryResponse_FieldValidationErrorsEntry(): UpdateEntryResponse_FieldValidationErrorsEntry {
  return { key: "", value: "" };
}

export const UpdateEntryResponse_FieldValidationErrorsEntry = {
  encode(
    message: UpdateEntryResponse_FieldValidationErrorsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEntryResponse_FieldValidationErrorsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEntryResponse_FieldValidationErrorsEntry();
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

  fromJSON(object: any): UpdateEntryResponse_FieldValidationErrorsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: UpdateEntryResponse_FieldValidationErrorsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(
    base?: DeepPartial<UpdateEntryResponse_FieldValidationErrorsEntry>,
  ): UpdateEntryResponse_FieldValidationErrorsEntry {
    return UpdateEntryResponse_FieldValidationErrorsEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<UpdateEntryResponse_FieldValidationErrorsEntry>,
  ): UpdateEntryResponse_FieldValidationErrorsEntry {
    const message = createBaseUpdateEntryResponse_FieldValidationErrorsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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
