import React, { Component } from "react";
import Header from "./components/header";
import DecisionContainer from "./components/decision-container";
import "./App.css";
import DecisionReport from "./components/decision-report";
import { Container, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      decision: {},
      showReport: false,
      processing: false,
    };
    this.updateDecision = this.updateDecision.bind(this);
    this.reset = this.resetHandler.bind(this);
  }

  addToQuestionBank(ques) {
    const result = this.state.questionBank.find(
      ({ question }) => question === ques.question
    );

    if (result) {
      const temp = this.state.questionBank;
      const index = this.state.questionBank.indexOf(result);
      temp[index].count++;
      this.setState({ questionBank: temp });
      return;
    }
    this.setState((prev) => ({
      questionBank: [...prev.questionBank, ques],
    }));
  }
  updateDecision(decision) {
    const randomIndex = Math.floor(Math.random() * decision.options.length);

    decision.options[randomIndex].picked = true;

    this.setState({ decision });
    this.addToQuestionBank({ question: decision.question, count: 1 });
    this.setState({ processing: true });
  }

  resetHandler() {
    this.setState({ decision: {}, processing: false, showReport: false });
  }

  render() {
    if (this.state.processing) {
      setTimeout(() => {
        this.setState({ processing: false, showReport: true });
      }, 1000);
    }
    console.log("rendr");
    return (
      <div className="App">
        <Header />
        <Col lg="5" className="m-auto">
          <Container>
            {!this.state.showReport && !this.state.processing && (
              <DecisionContainer updateDecision={this.updateDecision} />
            )}
            {this.state.processing && (
              <p
                className="bg-light text-primary mx-auto p-3"
                style={{ height: "100%", marginTop: "60px" }}
              >
                Process...
              </p>
            )}
            {this.state.showReport && !this.state.processing && (
              <DecisionReport
                report={this.state.decision}
                reset={this.reset}
                questionPop={this.state.questionBank}
              />
            )}
          </Container>
        </Col>
      </div>
    );
  }
}

export default App;
