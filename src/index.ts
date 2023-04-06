import { z } from "zod";
import { Person } from "@/domain/model";

const personSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must have at least 3 charactes" })
    .transform((name) => name.toLocaleUpperCase()),
  age: z.number().min(18, { message: "You need to be an adult" }),
});

type PersonInput = z.infer<typeof personSchema>;

function doSomething(input: PersonInput) {
  const { name, age } = personSchema.parse(input);
  const user = new Person(name, age);
  console.table({ user });
}

try {
  doSomething({
    name: "Le",
    age: 45,
  });
} catch (err) {
  console.error(`Opss: ${err}`);
}
