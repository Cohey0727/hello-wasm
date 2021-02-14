const js = import("./node_modules/@cohey0727/hello-wasm/hello_wasm.js");
js.then((js) => {
  js.greet("WebAssembly");
});
