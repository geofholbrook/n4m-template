import maxApi, { MESSAGE_TYPES, POST_LEVELS } from "max-api";

maxApi.addHandler(MESSAGE_TYPES.BANG, () => {
  maxApi.post("received bang message");
});

declare class Patcher {
  constructor(...args: unknown[])
}

var p = new Patcher(1,2,3,4);
