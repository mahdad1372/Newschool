import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button , Navbar , Nav , NavDropdown , Form } from 'react-bootstrap';
import '../App.css';

class Header extends Component{

    render(){
      
        return(
            <div className="bg-header navbar-style mb-3">
 <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <div className="List-style">
    <ul>
      <li><a href="#">خانه</a></li>
      <li><a href="#">صفحات</a></li>
      <li><a href="#">ثبت نام</a></li>
      <li>
        <Link to="/adminpanel"><a href="#">مدیریت</a></Link>
        </li>
      <li><a href="#">ورود</a></li>
      </ul>
    </div>
  </Navbar.Collapse>
  <Navbar.Brand href="#home"><img src={require('../img/Logo1-01.png')} className="img-size1"/></Navbar.Brand>
</Navbar>
<div className="container col-style-1">
  <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12 text-white d-flex justify-content-center">
    <img src={require('../img/school1.jpg')} className="img-size2"/>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-12 text-right col-style-2">
      <div className=" mt-3">
        <h2>موسسه آموزشی ما جهت رفاه حال فرزندان </h2>
      </div>
      <div className="">
        <h2>شما آماده خدمت رسانی می باشد</h2>
      </div><br/><br/>
      <div className="">
        <a>این موسسه دارای کادر دبیران مجرب و دانش آموزان پویا می باشد</a>
      </div>
    </div>

  </div>
</div>

            </div>
        )
    }
}

export default Header;