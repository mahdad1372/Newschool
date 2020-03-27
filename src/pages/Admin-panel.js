import React , { Component } from 'react';
import {Link} from 'react-router-dom';
import Dropdowns from '../Components/Dropdowns';
import Adminpanel from '../Components/Adminpanel1';

class Admine_Panel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          name: 'محسن',
          job : 'دانش آموزان'
        }
        console.log(this.props.history);
    }


    student = () => {
        this.setState({ name: 'سارا' , job : 'دانش آموزان'}) 
        // history.push('/')
    }

    parent = () => {
      this.setState({ name: 'میلاد' , job : 'والدین'}) 
      // history.push('/')
  }

  teacher = () => {
    this.setState({ name: 'تهمینه' , job : 'دبیران'}) 
    // history.push('/')
  }
  
      render() {
    return (
        <div className="container-fluid adminpanel">
            <div className="row">
                
                <div className="col-lg-10 col-md-10 col-sm-8 col-12">
                    <Adminpanel name={this.state.name} job={this.state.job} />
                </div>

                <div className="col-lg-2 col-md-2 col-sm-4 col-12" style={{backgroundColor:'#154360'}}>
                  <Dropdowns title="دانش آموزان" content1="همه دانش آموزان" icon = {<i class="fas fa-angle-left text-white ml-3"></i>} content2="جزئیات دانش آموزان"
                  content3="فرم پذیرش" content4="ارتقا دانش آموز"/>
                  <Dropdowns title="معلمان" content1="همه دانش آموزان" content2="جزئیات دانش آموزان"
                  content3="فرم پذیرش" content4="ارتقا دانش آموز"/>
                  <Dropdowns title="کتابخانه" content1="همه والدین"/>
                  <Dropdowns title="والدین" content1="همه والدین"/>
                  <Dropdowns title="حساب" content1="همه والدین"/>
                  <Dropdowns title="کلاس" content1="همه والدین"/>
                  <Dropdowns title="موضوع" content1="همه والدین"/>
                  <Dropdowns title="روال کلاس" content1="همه والدین"/>
                  <Dropdowns title="حضور" content1="همه والدین"/>
                  <Dropdowns title="امتحان" content1="همه والدین"/>
                  <Dropdowns title="انتقال" content1="همه والدین"/>
                  <Dropdowns title="خوابگاه" content1="همه والدین"/>
                  <Dropdowns title="اطلاع" content1="همه والدین"/>
                  <Dropdowns title="پیام" content1="همه والدین"/>
                  <Dropdowns title="عناصر رابط کاربری" content1="همه والدین"/>
                  <Dropdowns title="نقشه" content1="همه والدین"/>
                  <Dropdowns title="حساب" content1="همه والدین"/>
                  
                </div>
            </div>
        </div>
    )
    }
}

export default Admine_Panel;