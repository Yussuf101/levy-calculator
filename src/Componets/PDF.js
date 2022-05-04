import React, { Component } from 'react';
import { Button } from './Button';
import jsPDF from 'jspdf';

export default class PDF extends Component {
    pdfGenerate=()=>{
        var doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.save('a.pdf')
    }
  render() {
    return (
      <div style={{textAlign:'center'}}><br/>
          <Button onClick={this.pdfGenerate}></Button>

          pdfDownload</div>
    )
  }
}
