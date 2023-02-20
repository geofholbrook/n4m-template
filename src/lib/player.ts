import { outlet } from "max-api";
type Milliseconds = number;

interface IMidiOutput {
  //   noteOn: (pitch: number, velocity: number, channel: number) => void;
  //   noteOff: (pitch: number, channel: number) => void;
  playNote: (
    pitch: number,
    velocity: number,
    channel: number,
    duration: Milliseconds
  ) => void;
}

interface ITransporterState {
  tempo: number;
}

export function repeatNote(pitch: number, output: IMidiOutput) {
  setInterval(() => {
    output.playNote(pitch, 127, 1, 500);
  }, 1000);
}

export function superRandom(output: IMidiOutput) {
  setInterval(() => {
    output.playNote(Math.floor(Math.random() * 50 + 30), 127, 1, 100);
  }, 250);
}

export class StdoutMidiOutput implements IMidiOutput {
  public playNote(
    pitch: number,
    velocity: number,
    channel: number,
    duration: Milliseconds
  ) {
    console.log(pitch, velocity, channel, duration);
  }
}

export class OutletMidiOutput implements IMidiOutput {
  public playNote(
    pitch: number,
    velocity: number,
    channel: number,
    duration: Milliseconds
  ) {
    outlet("midinote", pitch, velocity, channel, duration);
  }
}
