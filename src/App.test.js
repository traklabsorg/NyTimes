import { render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";

describe("Fetching Article List", () => {
  it("Fetching Article List", async () => {
    const response = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=TqzYufLatOE910IxYwg36sWZ2SrgqkKC"
    );
    let articles = response.data.results;
    // console.log(articles);
    expect(articles.length).toEqual(20);
  });
});
