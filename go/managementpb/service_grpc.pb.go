// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: management/service.proto

package managementpb

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
	CreateTypes(ctx context.Context, in *CreateTypesRequest, opts ...grpc.CallOption) (*CreateTypesResponse, error)
	UpdateTypes(ctx context.Context, in *UpdateTypesRequest, opts ...grpc.CallOption) (*UpdateTypesResponse, error)
	RemoveTypes(ctx context.Context, in *RemoveTypesRequest, opts ...grpc.CallOption) (*RemoveTypesResponse, error)
	GetTypes(ctx context.Context, in *GetTypesRequest, opts ...grpc.CallOption) (*GetTypesResponse, error)
}

type serviceClient struct {
	cc grpc.ClientConnInterface
}

func NewServiceClient(cc grpc.ClientConnInterface) ServiceClient {
	return &serviceClient{cc}
}

func (c *serviceClient) CreateTypes(ctx context.Context, in *CreateTypesRequest, opts ...grpc.CallOption) (*CreateTypesResponse, error) {
	out := new(CreateTypesResponse)
	err := c.cc.Invoke(ctx, "/management.Service/CreateTypes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) UpdateTypes(ctx context.Context, in *UpdateTypesRequest, opts ...grpc.CallOption) (*UpdateTypesResponse, error) {
	out := new(UpdateTypesResponse)
	err := c.cc.Invoke(ctx, "/management.Service/UpdateTypes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) RemoveTypes(ctx context.Context, in *RemoveTypesRequest, opts ...grpc.CallOption) (*RemoveTypesResponse, error) {
	out := new(RemoveTypesResponse)
	err := c.cc.Invoke(ctx, "/management.Service/RemoveTypes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *serviceClient) GetTypes(ctx context.Context, in *GetTypesRequest, opts ...grpc.CallOption) (*GetTypesResponse, error) {
	out := new(GetTypesResponse)
	err := c.cc.Invoke(ctx, "/management.Service/GetTypes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ServiceServer is the server API for Service service.
// All implementations must embed UnimplementedServiceServer
// for forward compatibility
type ServiceServer interface {
	CreateTypes(context.Context, *CreateTypesRequest) (*CreateTypesResponse, error)
	UpdateTypes(context.Context, *UpdateTypesRequest) (*UpdateTypesResponse, error)
	RemoveTypes(context.Context, *RemoveTypesRequest) (*RemoveTypesResponse, error)
	GetTypes(context.Context, *GetTypesRequest) (*GetTypesResponse, error)
	mustEmbedUnimplementedServiceServer()
}

// UnimplementedServiceServer must be embedded to have forward compatible implementations.
type UnimplementedServiceServer struct {
}

func (UnimplementedServiceServer) CreateTypes(context.Context, *CreateTypesRequest) (*CreateTypesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateTypes not implemented")
}
func (UnimplementedServiceServer) UpdateTypes(context.Context, *UpdateTypesRequest) (*UpdateTypesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateTypes not implemented")
}
func (UnimplementedServiceServer) RemoveTypes(context.Context, *RemoveTypesRequest) (*RemoveTypesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveTypes not implemented")
}
func (UnimplementedServiceServer) GetTypes(context.Context, *GetTypesRequest) (*GetTypesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTypes not implemented")
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

func _Service_CreateTypes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateTypesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).CreateTypes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/management.Service/CreateTypes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).CreateTypes(ctx, req.(*CreateTypesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_UpdateTypes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateTypesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).UpdateTypes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/management.Service/UpdateTypes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).UpdateTypes(ctx, req.(*UpdateTypesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_RemoveTypes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveTypesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).RemoveTypes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/management.Service/RemoveTypes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).RemoveTypes(ctx, req.(*RemoveTypesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Service_GetTypes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetTypesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ServiceServer).GetTypes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/management.Service/GetTypes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ServiceServer).GetTypes(ctx, req.(*GetTypesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Service_ServiceDesc is the grpc.ServiceDesc for Service service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Service_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "management.Service",
	HandlerType: (*ServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateTypes",
			Handler:    _Service_CreateTypes_Handler,
		},
		{
			MethodName: "UpdateTypes",
			Handler:    _Service_UpdateTypes_Handler,
		},
		{
			MethodName: "RemoveTypes",
			Handler:    _Service_RemoveTypes_Handler,
		},
		{
			MethodName: "GetTypes",
			Handler:    _Service_GetTypes_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "management/service.proto",
}
