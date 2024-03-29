// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: delivery/service.proto

package deliverypb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ServiceClient is the client API for Service service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ServiceClient interface {
	GetEntry(ctx context.Context, in *GetEntryRequest, opts ...grpc.CallOption) (*GetEntryResponse, error)
	GetEntryList(ctx context.Context, in *GetEntryListRequest, opts ...grpc.CallOption) (*GetEntryListResponse, error)
	CreateEntry(ctx context.Context, in *CreateEntryRequest, opts ...grpc.CallOption) (*CreateEntryResponse, error)
	UpdateEntry(ctx context.Context, in *UpdateEntryRequest, opts ...grpc.CallOption) (*UpdateEntryResponse, error)
	DeleteEntries(ctx context.Context, in *DeleteEntriesRequest, opts ...grpc.CallOption) (*DeleteEntriesResponse, error)
}

type serviceClient struct {
	cc grpc.ClientConnInterface
}

func NewServiceClient(cc grpc.ClientConnInterface) ServiceClient {
	return &serviceClient{cc}
}

func (c *serviceClient) GetEntry(ctx context.Context, in *GetEntryRequest, opts ...grpc.CallOption) (*GetEntryResponse, error) {
	out := new(GetEntryResponse)
	err := c.cc.Invoke(ctx, "/delivery.Service/GetEntry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) GetEntryList(ctx context.Context, in *GetEntryListRequest, opts ...grpc.CallOption) (*GetEntryListResponse, error) {
	out := new(GetEntryListResponse)
	err := c.cc.Invoke(ctx, "/delivery.Service/GetEntryList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) CreateEntry(ctx context.Context, in *CreateEntryRequest, opts ...grpc.CallOption) (*CreateEntryResponse, error) {
	out := new(CreateEntryResponse)
	err := c.cc.Invoke(ctx, "/delivery.Service/CreateEntry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) UpdateEntry(ctx context.Context, in *UpdateEntryRequest, opts ...grpc.CallOption) (*UpdateEntryResponse, error) {
	out := new(UpdateEntryResponse)
	err := c.cc.Invoke(ctx, "/delivery.Service/UpdateEntry", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) DeleteEntries(ctx context.Context, in *DeleteEntriesRequest, opts ...grpc.CallOption) (*DeleteEntriesResponse, error) {
	out := new(DeleteEntriesResponse)
	err := c.cc.Invoke(ctx, "/delivery.Service/DeleteEntries", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServiceServer is the server API for Service service.
// All implementations must embed UnimplementedServiceServer
// for forward compatibility
type ServiceServer interface {
	GetEntry(context.Context, *GetEntryRequest) (*GetEntryResponse, error)
	GetEntryList(context.Context, *GetEntryListRequest) (*GetEntryListResponse, error)
	CreateEntry(context.Context, *CreateEntryRequest) (*CreateEntryResponse, error)
	UpdateEntry(context.Context, *UpdateEntryRequest) (*UpdateEntryResponse, error)
	DeleteEntries(context.Context, *DeleteEntriesRequest) (*DeleteEntriesResponse, error)
	mustEmbedUnimplementedServiceServer()
}

// UnimplementedServiceServer must be embedded to have forward compatible implementations.
type UnimplementedServiceServer struct {
}

func (UnimplementedServiceServer) GetEntry(context.Context, *GetEntryRequest) (*GetEntryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEntry not implemented")
}
func (UnimplementedServiceServer) GetEntryList(context.Context, *GetEntryListRequest) (*GetEntryListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEntryList not implemented")
}
func (UnimplementedServiceServer) CreateEntry(context.Context, *CreateEntryRequest) (*CreateEntryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateEntry not implemented")
}
func (UnimplementedServiceServer) UpdateEntry(context.Context, *UpdateEntryRequest) (*UpdateEntryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateEntry not implemented")
}
func (UnimplementedServiceServer) DeleteEntries(context.Context, *DeleteEntriesRequest) (*DeleteEntriesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteEntries not implemented")
}
func (UnimplementedServiceServer) mustEmbedUnimplementedServiceServer() {}

// UnsafeServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ServiceServer will
// result in compilation errors.
type UnsafeServiceServer interface {
	mustEmbedUnimplementedServiceServer()
}

func RegisterServiceServer(s grpc.ServiceRegistrar, srv ServiceServer) {
	s.RegisterService(&Service_ServiceDesc, srv)
}

func _Service_GetEntry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEntryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GetEntry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/delivery.Service/GetEntry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GetEntry(ctx, req.(*GetEntryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_GetEntryList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEntryListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GetEntryList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/delivery.Service/GetEntryList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GetEntryList(ctx, req.(*GetEntryListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_CreateEntry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateEntryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).CreateEntry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/delivery.Service/CreateEntry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).CreateEntry(ctx, req.(*CreateEntryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_UpdateEntry_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateEntryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).UpdateEntry(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/delivery.Service/UpdateEntry",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).UpdateEntry(ctx, req.(*UpdateEntryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_DeleteEntries_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteEntriesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).DeleteEntries(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/delivery.Service/DeleteEntries",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).DeleteEntries(ctx, req.(*DeleteEntriesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Service_ServiceDesc is the grpc.ServiceDesc for Service service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Service_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "delivery.Service",
	HandlerType: (*ServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetEntry",
			Handler:    _Service_GetEntry_Handler,
		},
		{
			MethodName: "GetEntryList",
			Handler:    _Service_GetEntryList_Handler,
		},
		{
			MethodName: "CreateEntry",
			Handler:    _Service_CreateEntry_Handler,
		},
		{
			MethodName: "UpdateEntry",
			Handler:    _Service_UpdateEntry_Handler,
		},
		{
			MethodName: "DeleteEntries",
			Handler:    _Service_DeleteEntries_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "delivery/service.proto",
}
