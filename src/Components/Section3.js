import React from 'react';
import '../App.css';

const Section3 = () => {
    return(
        <div className="section3">
            <br/><br/><br/>
  <div class="d-flex justify-content-center text-center">
    <div class="p-2 text4 text-white"><a>بهترین موسسه آموزشی در جنوب کشور</a></div>
    
  </div>
  <div class="d-flex justify-content-center">
    <div class="p-2 text5 text-white"><a>با بالاترین سطح کیفی وعلمی در جهت رشد فرزندان شما</a></div>
    
  </div>
  <br/><br/><br/><br/>
  <div className="container">
      <div className="row">
          <div className="col-lg-3 col-md-6 text-center mt-3">
          <div class="card">
      <div class="card-body">
      <img src={require('../img/mobile-phone.png')}/><br/><br/>
      <h5 class="card-title">اپلیکیشن موبایل</h5>
     
        <p class="card-text">در راستای ارتفا سطح علمی فرزندان شما میتوانید برنامه های آموزشی و علمی را بر روی موبایل مشاهده نمایید</p>
      </div>
    </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mt-3">
          <div class="card">
      <div class="card-body">
      <img src={require('../img/computer.png')}/><br/><br/>
      <h5 class="card-title">آموزش آنلاین</h5>
     
        <p class="card-text">
یادگیری برنامه ریزی شده ای است که در آن معمولاً یادگیری و آموزش در محیط های جدا از هم صورت می گیرند. </p>
      </div>
    </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mt-3">
          <div class="card">
      <div class="card-body">
      <img src={require('../img/teacher.png')}/><br/><br/>
      <h5 class="card-title">دبیران با تجربه</h5>
     
        <p class="card-text">
معلمان کارگزاران اصلی ورود و تعامل موفقیت آمیز فاوا در نظام آموزشی هستند(Buntat and et al, 2010). </p>
      </div>
    </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center mt-3">
          <div class="card">
      <div class="card-body">
      <img src={require('../img/robot.png')}/><br/><br/>
      <h5 class="card-title">ثبت اختراعات</h5>
     
        <p class="card-text">
در راستای ارتقای سطح علمی وشکوفایی علمی دانش آموزان شروع به اداعات و انجام و ثبت اختراعات می نماییم
 </p>
      </div>
    </div>
          </div>

      </div>
      <br/><br/>
  </div>
        </div>
    )
}

export default Section3;
