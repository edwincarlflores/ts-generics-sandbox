import { z } from "zod";

const Data = z.object({
  id: z.string(),
  name: z.string(),
});

type DataType = z.infer<typeof Data>;

fetch("/something")
  .then((res) => res.json())
  .then((result) => {
    const data = Data.parse(result);
  });

// Why interface over type?
// Use interface for most things, for plain objects
// Use types for mostly anything
