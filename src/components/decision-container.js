import { Component } from "react";
import { Container, FloatingLabel, Form, Stack, Button } from "react-bootstrap";
class DecisionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      options: [
        { option: "Yes", picked: false },
        { option: "No", picked: false },
        { option: "Kinda", picked: false },
      ],
      optionValue: "",
      error: "",
    };
    this.handleQuestion = this.handleQuestionChange.bind(this);
    this.handleOption = this.handleOptionChange.bind(this);
    this.saveOnEnter = this.handleKeyDown.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
  }
  handleQuestionChange(e) {
    e.preventDefault();
    this.setState({ error: "" });
    this.setState({ question: e.target.value });
  }
  handleOptionChange(e) {
    e.preventDefault();
    this.setState({ optionValue: e.target.value });
  }
  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.setState((prevState) => ({
        options: [
          ...prevState.options,
          { option: prevState.optionValue, picked: false },
        ],
      }));
      this.setState({ optionValue: "" });
    }
  }
  setAnswer() {
    if (!this.state.question) {
      this.setState({ error: "Ask a question" });
      return;
    }
    const payload = {
      question: this.state.question,
      options: this.state.options,
    };
    this.props.updateDecision(payload);
    this.setState({
      question: " ",
      options: [
        { option: "Yes", picked: false },
        { option: "No", picked: false },
        { option: "Kinda", picked: false },
      ],
    });
  }
  render() {
    let { options, optionValue, question } = this.state;
    return (
      <Container fluid="sm" className="mt-4">
        <Stack direction="vertical" gap={3}>
          <p className="text-secondary text-md p-2 text-justify" style={ { fontSize: "20px", fontWeight:"600"}}>
            Ask away your question and I will pick an option for you.
          </p>
          {this.state.error && (
            <p className="text-danger"> {this.state.error} </p>
          )}
          <FloatingLabel controlId="floatingTextarea2" label="Question">
            <Form.Control
              as="textarea"
              placeholder="Type your question"
              style={{ height: "100px", resize: "none" }}
              value={question}
              onChange={this.handleQuestion}
            />
          </FloatingLabel>
          <Stack direction="horizontal" gap={2} className="flex-wrap">
            
            {options.map(({ option }, index) => (
              <p
                className={`bg-secondary text-light text-left te py-1 px-4`}
                key={index}
              >
                
                {option}
              </p>
            ))}
          </Stack>
          
          <FloatingLabel
            controlId="floatingInput"
            label="Add Option. Type and press Enter"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="add option"
              value={optionValue}
              onChange={this.handleOption}
              onKeyDown={this.saveOnEnter}
            />
          </FloatingLabel>
          <Button className="primary" onClick={this.setAnswer}>
            Get Answer
          </Button>
        </Stack>
      </Container>
    );
  }
}

export default DecisionContainer;
