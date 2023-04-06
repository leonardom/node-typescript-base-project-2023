import crypto from "crypto";

export class Person {
  readonly id: string;

  constructor(readonly name: string, readonly age: number) {
    this.id = crypto.randomUUID();
  }
}
