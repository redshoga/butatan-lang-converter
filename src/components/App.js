import React from "react";
import styles from "./App.module.scss";
import { convertToButatanLang } from "../lib/butatan-lang";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      japanese: "ぴんくのぶたです",
      butatan: "ぺんくのぶたでとぅ",
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.openTweet = this.openTweet.bind(this);
  }

  handleChange(event) {
    this.setState({ japanese: event.target.value });
  }

  clickButton(event) {
    this.setState({ butatan: convertToButatanLang(this.state.japanese) });
  }

  openTweet() {
    window.open(
      `https://twitter.com/intent/tweet?text=${this.state.butatan}`,
      "_blank"
    );
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
          <button onClick={this.clickButton} className={styles.convertButton}>
            ぶたたん語に変換↓
          </button>
          <textarea
            readOnly
            className={styles.textarea}
            value={this.state.butatan}
          />
          <button onClick={this.openTweet} className={styles.tweetButton}>
            とぅいーと
          </button>
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
