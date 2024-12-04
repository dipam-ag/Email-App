# Email-Application
// STEPS TO RUN THIS PROJECT IN YOUR MACHINE 

// First of all we start our node server using folloing steps: 

Ensure you have the following tools installed on your system:

1. Protobuf Compiler (protoc)
Install protoc if it's not already installed:
Linux: Use your package manager (e.g., sudo apt install protobuf-compiler).
Mac: Install via Homebrew: brew install protobuf.
Windows: Download from protobuf releases.

2. gRPC Node.js Plugins
Install the required Node.js plugins globally or as dev dependencies in your project:
npm install -D @grpc/proto-loader @grpc/grpc-js

3. Create a  folder named generated in your root directory.
npm init -y (For package.json)
npx tsc --init (Generated tsconfig)
npm install ts-proto --save-dev

5. Generate TypeScript Code for Server
Run the following command to generate TypeScript stubs:
npx protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./generated \
  --ts_proto_opt=outputServices=grpc-js \
  --ts_proto_opt=esModuleInterop=true \
  message.proto

Message.ts will be generated in the folder .

5. Run the server:
tsc server.ts
node server.js

// YOUR SERVER MUST HAVE BEEN STARTED 


// NOW TO RUN CLIENT ON YOUR SYSTEM FOLLOW THESE STEPS TO SET UP C++ ENVIRONMENT: 

Build and locally install gRPC and Protocol Buffers :

1. Linux / macOS
export MY_INSTALL_DIR=$HOME/.local

2. Ensure that the directory exists:
mkdir -p $MY_INSTALL_DIR

3. Add the local bin folder to your path variable, for example:
export PATH="$MY_INSTALL_DIR/bin:$PATH"
Windows
set MY_INSTALL_DIR=%USERPROFILE%\cmake

4. Ensure that the directory exists:
mkdir %INSTALL_DIR%

5. Add the local bin folder to your path variable, for example:
set PATH=%PATH%;$MY_INSTALL_DIR\bin

6. Install cmake
You need version 3.16 or later of cmake. Install it by following these instructions if you don’t have it:
Linux
sudo apt install -y cmake
macOS:
brew install cmake
Windows:
choco install cmake

7. Check the version of cmake:
cmake --version

8. Install the basic tools required to build gRPC:
Linux:
sudo apt install -y build-essential autoconf libtool pkg-config
macOS:
brew install autoconf automake libtool pkg-config

9. Clone the grpc repo and its submodules:
git clone --recurse-submodules -b v1.66.0 --depth 1 --shallow-submodules https://github.com/grpc/grpc

10. Build and install gRPC and Protocol Buffers
The following commands build and locally install gRPC and Protocol Buffers:
Linux & macOS
cd grpc
mkdir -p cmake/build
pushd cmake/build
cmake -DgRPC_INSTALL=ON \
      -DgRPC_BUILD_TESTS=OFF \
      -DCMAKE_INSTALL_PREFIX=$MY_INSTALL_DIR \
      ../..
make -j 4
make install
popd

Windows
mkdir "cmake\build"
pushd "cmake\build"
cmake -DgRPC_INSTALL=ON -DCMAKE_INSTALL_PREFIX=%MY_INSTALL_DIR% -DgRPC_BUILD_TESTS=OFF ..\..
cmake --build . --config Release --target install -j 4
popd

11. open bashrc
nano .bashrc

12. ADD THIS COMMAND IN bashrc :
export MY_INSTALL_DIR=$HOME/.local
export PATH="$MY_INSTALL_DIR/bin:$PATH"

NOW OPEN YOUR PROJECT IN CODE EDITOR AND DO THESE STEPS: 

*** Change the path in CMakeLists.txt according to your folder structure 
13. Make build folder in root directory 
mkdir build
cd build 
cmake ..
make

14. Run the C++ client
cd build 
./client


// YOU MUST SEE : Received from server: Hello from Server! You sent: Hello Server!

// THANKS 
