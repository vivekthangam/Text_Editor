import React, { Component } from "react";
import "./TextEditor.css";
import * as Rfns from "react-native-fs";
class TextEditor extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidUpdate() {
    // this.runCode();
  }

  componentDidMount() {
    this.setState({
      // id: pushid(),
    });
  }

  render() {
    return (
      <div className="text-editor" contenteditable>
        <pre contenteditable="true">
          <code>helli</code>
        </pre>
        <div contenteditable="true">ello</div>
      </div>
    );
  }

  componentWillMount() {
    var items;
    console.log(Rfns.DocumentDirectoryPath);
    // Rfns.readDir(Rfns.DocumentDirectoryPath)
    //   .then((result) => {
    //     console.warn("result: ", result); // debug

    //     for (var i = 0; i < result.length; i++) {
    //       if (result[i].name.endsWith(".txt")) {
    //         var tmp = result[i].name;
    //         console.warn(tmp); // debugyarn 
    //       }
    //     }
    //     console.warn(items); // empty
    //   })
    //   .catch((err) => {
    //     console.log(err.message, err.code);
    //   });
  }
}

export default TextEditor;
