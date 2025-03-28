// import * as grpc from '@grpc/grpc-js';
// import * as protoLoader from '@grpc/proto-loader';
// import { ProtoGrpcType } from '@proto/generated/ai';
// import path from 'path';

// const PROTO_PATH = path.join(process.cwd(), './proto/ai.proto');

// // suggested options for similarity to loading grpc.load behavior
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
//   keepCase: true,
//   defaults: true,
//   oneofs: true,
// });

// const aiService = (
//   grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
// ).ai.api.proto;

// export const { AiService } = aiService;

// lib/grpc-client.ts
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '@proto/generated/ai';
import path from 'path';

// Only runs on the server
export async function fetchDataFromGrpc() {
  const PROTO_PATH = path.join(process.cwd(), './proto/ai.proto');
  
  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    defaults: true,
    oneofs: true,
  });
  
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
  const { AiService } = protoDescriptor.ai.api.proto;
  
  // Create client and make call
  const client = new AiService('http://changerzaryx.ddns.net:50051/api/v1/ask', grpc.credentials.createInsecure());
  
  return new Promise((resolve, reject) => {
    client.Ask({question: 'ลงทะเบียนยังไง'}, (err, response) => {
      if (err) return reject(err);
      resolve(response);
    });
  });
}