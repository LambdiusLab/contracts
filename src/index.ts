import { join } from "node:path";
import "./types";

export const ACCESS_CONTROL_PROTO_PATH = join(__dirname, "proto/access_control.proto");

export * from "./generated";
export * from "./enums";
