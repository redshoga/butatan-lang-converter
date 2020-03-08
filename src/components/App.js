import React from "react";
import styles from "./App.module.scss";
import { convertToButatanLang } from "../lib/butatan-lang";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      japanese: "ぴんくのぶたです",
      butatan: "ぴんくのぶたでとぅ"
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
  }

  handleChange(event) {
    this.setState({ japanese: event.target.value });
  }

  clickButton(event) {
    this.setState({ butatan: convertToButatanLang(this.state.japanese) });
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>ぶたたん語変換機</h1>
        <p>みんなでぶたたん語を学ぼう</p>
        <main>
          <textarea
            className={styles.textarea}
            value={this.state.japanese}
            onChange={this.handleChange}
          />
          <button onClick={this.clickButton} className={styles.button}>
            ぶたたん語に変換↓
          </button>
          <textarea className={styles.textarea} value={this.state.butatan} />
        </main>
        <p>
          <a href="https://github.com/redshoga/butatan-lang-converter">
            GitHub (redshoga/butatan-lang-converter)
          </a>
        </p>
      </div>
    );
  }
}
