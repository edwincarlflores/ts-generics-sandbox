interface Person {
  id: number;
  name: string;
  age: number;
}

// Create a custom function type that accepts a generic type
// and then returns a type of URLSearchParams instance
type CustomURLSearchParamsType<T> = new (init: T) => URLSearchParams;

// Assign the custom type above to the custom UrlSearchParams function
// then pass the generic type which in this case is PriceBreakdownRequestParams
const CustomUrlSearchParams =
  URLSearchParams as unknown as CustomURLSearchParamsType<Person>;

const person = {
  id: 26,
  name: "Shaquille O'Neal",
  age: 50,
};

const urlParams = new CustomUrlSearchParams(person);
// const urlParamsErr = new URLSearchParams(person);

console.log(urlParams.toString()); // id=26&name=Shaquille+O%27Neal&age=50
// console.log(urlParamsErr.toString()); // id=26&name=Shaquille+O%27Neal&age=50

// console.log(urlParams.toString() === urlParamsErr.toString()); //  true
