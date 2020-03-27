import React, { useState } from 'react';
import './Dropdowns.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <div className="d-flex mt-3">
      <div class="mr-auto">
      <i class="fas fa-angle-left text-white"></i>
      </div>
  <div class="">
  <div className="text-right text-style1">
      <a className="ml-3" onClick={toggle} style={{ marginBottom: '1rem' }}>{props.title}
      <i class="fas fa-user-graduate ml-2 text-warning"></i>
      </a>
      </div>
  </div>
      </div>
      
      <Collapse isOpen={isOpen}>
          <div class="d-flex justify-content-end mt-3">
  <div class="text-style2">{props.content1} {props.icon}</div>
  </div> 
  <div class="d-flex justify-content-end mt-3">
    <div class="text-style2">{props.content2}{props.icon}</div>
  </div> 
  <div class="d-flex justify-content-end mt-3">
    <div class="text-style2">{props.content3} {props.icon}</div>
  </div> 
  <div class="d-flex justify-content-end mt-3">
    <div class="text-style2">{props.content4} {props.icon}</div>
  </div> 
      </Collapse>
      <div className="line2 mt-3">
      </div>
    </div>
  );
}

export default Example;