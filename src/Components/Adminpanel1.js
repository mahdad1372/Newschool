import React from 'react';
import '../App.css';

class Adminepanel extends React.Component  {
    constructor(props) {
        super(props)
    
        this.state = {
          name: 'Reza'
        }
    }

   
    render(){
    return(
        <div>
            <br/>
<table class="table">
  <thead class="thead-dark">
    <tr>
    <th scope="col">{this.props.job}</th>
      <th scope="col">نام</th>
      <th scope="col">نام خانوادگی</th>
      <th scope="col">شماره تماس</th>
      <th scope="col"> حذف و تایید</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>ساسان</td>
      <td>جمالی</td>
      <td className="mt-3">+1 2354849</td>
      <td>
        <a className="btn btn-danger mr-2">حذف</a>
        <a className="btn btn-warning">تایید</a>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>احمد</td>
      <td>شهابی</td>
      <td>+9 55616518</td>
      <td>
      <a className="btn btn-danger mr-2">حذف</a>
        <a className="btn btn-warning">تایید</a>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>احمد</td>
      <td>شهابی</td>
      <td>+9 55616518</td>
      <td>
      <a className="btn btn-danger mr-2">حذف</a>
        <a className="btn btn-warning">تایید</a>
      </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>احمد</td>
      <td>شهابی</td>
      <td>+9 55616518</td>
      <td>
      <a className="btn btn-danger mr-2">حذف</a>
        <a className="btn btn-warning">تایید</a>
      </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>احمد</td>
      <td>شهابی</td>
      <td>+9 55616518</td>
      <td>
      <a className="btn btn-danger mr-2">حذف</a>
        <a className="btn btn-warning">تایید</a>
      </td>
    </tr>
    <tr>
      <th scope="row">6</th>
    <td>{this.props.name}</td>
      <td>شهابی</td>
      <td>+9 55616518</td>
      <td>
      <a className="btn btn-danger mr-2">حذف</a>
        <a className="btn btn-warning">تایید</a>
      </td>
    </tr>
  </tbody>
</table>
        </div>
    )}
}

export default Adminepanel;