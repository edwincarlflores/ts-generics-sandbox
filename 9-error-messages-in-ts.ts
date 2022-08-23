export const deepEqualCompare = <Arg>(
  a: Arg extends any[] ? `Dont pass an array!` : Arg,
  b: Arg extends any[] ? `Dont pass an array!` : Arg
): boolean => {
  // The conditional check below is not need anymore
  // because the constraint has beed added to the type
  // if (Array.isArray(a) || Array.isArray(b)) {
  //   throw new Error("You cannot compare two arrays using deepEqualCompare");
  // }
  return a === b;
};

deepEqualCompare("a", "b");
deepEqualCompare([], []);

const func = (val: { name: string } | { age: number }) => {
  // Old conditional below is not needed since we already inferred the type of val
  // to be an object with property name
  // if (typeof val === "object" && val && "name" in val) {
  if ("name" in val) {
    val.name;
  } else {
    val.age;
  }
};

interface Letters {
  a: number;
  b: string;
  c: {
    name: string;
  };
}

// type LettersAsUnion = "a" | "b" | "c";
type LettersAsUnion = keyof Letters;

type LettersSubset = Letters["c" | "a"];

const letter: LettersAsUnion = "c";

const letterValue: LettersSubset = "c";
