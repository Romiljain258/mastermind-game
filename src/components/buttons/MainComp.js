import React from "react";
import { Link, Redirect } from 'react-router-dom';

class MainComp extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render() {
    let { BtnIndex } = this.props;
    let ref = this.props.color;
    let arr = [];

    for (let i = 0; i < 10; i++) {

      arr.push(
        ref.count == i ?
          <>
            <div>
              <button onClick={
                () => { BtnIndex(1) }}
                style={{ background: ref.bbColor1, marginLeft: '-1rem' }}
                className="MainCompBtn ptr">
              </button>

              <button onClick={
                () => { BtnIndex(2) }}
                style={{ background: ref.bbColor2 }}
                className="MainCompBtn ptr">
              </button>

              <button onClick={
                () => { BtnIndex(3) }}
                style={{ background: ref.bbColor3 }}
                className="MainCompBtn ptr">
              </button>

              <button onClick={
                () => { BtnIndex(4) }}
                style={{ background: ref.bbColor4 }}
                className="MainCompBtn ptr">
              </button>

              <button style={
                { background: ref.smColor1, marginLeft: '1rem' }}
                className="btn btn-c btn-s">
              </button>

              <button style={
                { background: ref.smColor2 }}
                className="btn btn-c btn-s">
              </button>

              <button style={
                { background: ref.smColor3 }}
                className="btn btn-c btn-s">
              </button>

              <button style={
                { background: ref.smColor4 }}
                className="btn btn-c btn-s">
              </button>

            </div>
          </>
          :
          // ((ref.count < i) ?
          //   <div>
          //     <button style={
          //       { background: ref.bbColor1, marginLeft: '-1rem' }}
          //       className="MainCompBtn ptr1">
          //     </button>

          //     <button style={
          //       { background: ref.bbColor2 }}
          //       className="MainCompBtn ptr1">
          //     </button>

          //     <button style={
          //       { background: ref.bbColor3 }}
          //       className="MainCompBtn ptr1">
          //     </button>

          //     <button style={
          //       { background: ref.bbColor4 }}
          //       className="MainCompBtn ptr1">
          //     </button>

          //     <button style={
          //       { background: ref.smColor1, marginLeft: '1rem' }}
          //       className="btn btn-c btn-s">
          //     </button>

          //     <button style={
          //       { background: ref.smColor2 }}
          //       className="btn btn-c btn-s">
          //     </button>

          //     <button style={
          //       { background: ref.smColor3 }}
          //       className="btn btn-c btn-s">
          //     </button>

          //     <button style={
          //       { background: ref.smColor4 }}
          //       className="btn btn-c btn-s">
          //     </button>

          //   </div>
          //   :
          <>
            <div>
              <button style={
                { marginLeft: '-1rem' }}
                className="MainCompBtn ptr1">
              </button>

              <button
                className="MainCompBtn ptr1">
              </button>

              <button
                className="MainCompBtn ptr1">
              </button>

              <button
                className="MainCompBtn ptr1">
              </button>

              <button style={
                { marginLeft: '1rem' }}
                className="btn btn-c btn-s">
              </button>

              <button
                className="btn btn-c btn-s">
              </button>

              <button
                className="btn btn-c btn-s">
              </button>

              <button
                className="btn btn-c btn-s">
              </button>
            </div>
          </>
      );
      if (ref.smColor1 == 'red' && ref.smColor2 == 'red' && ref.smColor3 == 'red' && ref.smColor4 == 'red') {
        // this.props.history.push("/cong");
        console.log("coming1");
        { BtnIndex(8) }
    }
      //  )
    };
    return arr;
  }
};
export default MainComp;