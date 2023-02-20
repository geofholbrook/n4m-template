import maxApi, { MESSAGE_TYPES } from "max-api";
import { repeatNote, OutletMidiOutput, superRandom } from "./lib/player";

maxApi.addHandler(MESSAGE_TYPES.BANG, () => {
  maxApi.post("received bang message");
  //   repeatNote(60, new OutletMidiOutput());
  superRandom(new OutletMidiOutput());
});
