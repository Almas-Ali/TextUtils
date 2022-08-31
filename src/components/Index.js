import React, { useState } from 'react'
import propTypes from 'prop-types'

export default function Index(props) {

  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  let newText;

  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type) => {
    setAlert({
      msg:msg,
      type:type
    })
  }


  function upperCase() {
    newText = text.toUpperCase();
    setResult(newText);
  }

  function lowerCase() {
    newText = text.toLowerCase();
    setResult(newText);
  }

  function handleSubmit(event) {
    setText(event.target.value);
  }

  function handleReset() {
    setText('');
    setResult('');
  }

  function capitalCase() {
    setResult(text[0].toUpperCase() + text.slice(1).toLowerCase());
  }

  function removeExtraSpace() {
    newText = text.split(/[ ]+/);
    setResult(newText.join(' '));
  }

  function copyOutput() {
    // var text = document.getElementById('output-text');
    // text.select();
    navigator.clipboard.writeText(result);
    showAlert('Output copied Successfully!', 'success')
  }

  function wordsCount() {
    var newText1 = text.split(/[ ]+/);
    return newText1.join(' ').length;
  }

  return (
    <>
      <div className="container">
        <center className="my-3">
          <h1>{props.title}</h1>
        </center>
        <div className="container">
          <div className="my-3">
            <label htmlFor="input-text" className="form-label">Enter text here:</label>
            <textarea class="form-control" name='input-text' id='input-text' value={text} onChange={handleSubmit} required></textarea>
          </div>
          <p>
            <strong>Input status :</strong> <strong>{text.length}</strong> Characters <strong>{wordsCount()}</strong> Words <strong>{0.008 * text.length}</strong> Minutes to read
          </p>
          <div className="btns">
            <button className='btn btn-primary m-2' onClick={upperCase}>Upper Case</button>
            <button className='btn btn-primary m-2' onClick={lowerCase}>Lower Case</button>
            <button className='btn btn-primary m-2' onClick={capitalCase}>Capital Case</button>
            <button className='btn btn-primary m-2' onClick={removeExtraSpace}>Remove extra space</button>
            <button className='btn btn-danger m-2' onClick={handleReset}>Reset</button>
          </div>

          <div className="mt-2">
            <h3 className='mt-4'>Output</h3>

            {alert && <div class={`alert alert-${showAlert.type} alert-dismissible fade show`} role="alert">
              {showAlert.msg}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}

            <p className='card p-3 rounded'>{result}</p>
            <div>
              <button className='btn btn-primary m-2' onClick={copyOutput}>Copy output</button>
            </div>
            <p>
              <strong>Output status :</strong> <strong>{result.length}</strong> Characters <strong>{wordsCount()}</strong> Words <strong>{0.008 * result.length}</strong> Minutes to read
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

Index.propTypes = {
  title: propTypes.string.isRequired
}

Index.defaultProps = {
  title: 'TextUtils'
}
