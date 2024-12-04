// AUTHOR : DIPAM AGARWAL
//2024
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { MessengerService, MessengerServer } from './generated/message';

const PROTO_PATH = './message.proto';

// Load the .proto file
const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObject = grpc.loadPackageDefinition(packageDef);
const messengerPackage = grpcObject.messenger as any;

// Implement the service
const sendMessage: MessengerServer['sendMessage'] = (call, callback) => {
    const message = call.request.content;
    console.log(`Received from client: ${message}`);
    const response = { content: `Hello from Server! You sent: ${message}` };
    
    callback(null, response);
};

// Start the gRPC server
function startServer() {
    const server = new grpc.Server();
    server.addService(MessengerService, { sendMessage });
    server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log('Server running at http://127.0.0.1:50051');
        server.start();
    });
}

startServer();

