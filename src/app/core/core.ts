import { SimpleCore } from "simple-core-state";

const instance = new SimpleCore({});

export const core = instance.core();
