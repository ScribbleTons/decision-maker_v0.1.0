import { Component } from "react";
import { Container, Button, Stack } from "react-bootstrap";

export default class DecisionReport extends Component {
  render() {
    const { report, reset, questionPop } = this.props;
    return (
      <Container className="mt-4">
        <p
          className="p-2 m-2 m-auto text-primary"
          style={{ fontWeight: "700", fontSize: "20px" }}
        >
          Decided!!
        </p>
        <Stack className="mt-2 text-left border-danger">
          <p
            className="text-dark p-1 my-1"
            style={{ width: "100%", textAlign: "left" }}
          >
            <span style={{ fontWeight: "700" }}> Question: </span>{" "}
            {report.question}
          </p>
          {report?.options.map(({ option, picked }, index) => (
            <p
              style={{ width: "40%", textAlign: "left", fontWeight: "600" }}
              className={`p-1 my-1 ml-4 ${
                picked ? "checked text-light bg-info" : ""
              }`}
              key={index}
            >
              {option}
            </p>
          ))}
        </Stack>
        <Button
          style={{ marginTop: "10px", marginBottom: "10px" }}
          onClick={reset}
        >
          Ask another Question
        </Button>
        <Container
          style={{ height: "400px", overflowY: "auto", marginTop: "10px" }}
        >
          <Stack
            gap={2}
            direction="horizontal"
            className="justify-content-between mt-4"
          >
            <p
              className="p-1 m-1 text-md font-md text-primary text-center"
              style={{ fontWeight: "700" }}
            >
              Questions
            </p>
            <p
              className="p-1 m-1 text-md font-md text-primary text-center"
              style={{ fontWeight: "700" }}
            >
              Popularity
            </p>
          </Stack>
          {questionPop.map(({ question, count }, index) => (
            <Stack
              key={index}
              gap={2}
              direction="horizontal"
              className="justify-content-between mb-1"
            >
              <p className="p-1 m-1 text-md font-md text-secondary text-center">
                {question}
              </p>
              <p className="p-1 m-1 text-md font-md text-secondary text-center">
                {count}
              </p>
            </Stack>
          ))}
        </Container>
      </Container>
    );
  }
}
