import maxApi, { MESSAGE_TYPES, POST_LEVELS } from "max-api";

maxApi.outlet("demonstrates", "outlet", "method");
maxApi.outletBang();
maxApi.post("demonstrates post method");
maxApi.post(JSON.stringify({ MESSAGE_TYPES, POST_LEVELS }, null, 4));


maxApi.addHandler("myHandler", () => {
  maxApi.post("received myHandler message");
});

maxApi.getDict("abc").then((dict) => {
  maxApi.post(dict);
});

const handlers = {
  [MESSAGE_TYPES.BANG]: () => {
    maxApi.post("got a bang");
  },
  [MESSAGE_TYPES.NUMBER]: (n: number) => {
    maxApi.post(`received a number: ${n}`);
  },
  [MESSAGE_TYPES.LIST]: (...elements: [number, ...unknown[]]) => {
    maxApi.post(`received a list: ${elements}`);
  },
  [MESSAGE_TYPES.DICT]: (dict: Record<string, unknown>) => {
    maxApi.post(`received an object: ${JSON.stringify(dict)}`);
  },
  myHandler2: () => {
    maxApi.post("received myHandler2 message");
  },
  myHandlerWithArgs: (arg1: unknown, arg2: unknown) => {
    maxApi.post(`received myHandlerWithArgs message with: ${arg1}, ${arg2}`);
  },
  [MESSAGE_TYPES.ALL]: (handled: string, ...args: unknown[]) => {
    if (handled) return;
    maxApi.post(`unhandled event: ${args}`);
  },
};

maxApi.addHandlers(handlers);
