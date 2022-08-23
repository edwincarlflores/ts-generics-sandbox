import { String, Union } from "ts-toolbelt";

const query = "/home?name=burke&profession=chat-baiter";

type Query = typeof query;

type SecondQueryPart = String.Split<Query, "?">[1];

type QueryElements = String.Split<SecondQueryPart, "&">;

type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, "=">[0]]: String.Split<
      QueryElement,
      "="
    >[1];
  };
};

type QueryValues = QueryParams[QueryElements[number]];

const obj: Union.Merge<QueryValues> = {
  name: "burke",
  profession: "chat-baiter",
};
