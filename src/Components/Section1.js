import React from 'react';
import '../App.css';
const Section1 = () => {
    return(
        <div className="section1">
            <div className="d-flex justify-content-center text2">
                <a>مجموعه آموزشی ما شامل بهترین و مجهز ترین امکانات آموزشی <br/>جهت رفاه حال شما و فرزندان شما می باشد</a>
            </div>
        <div className="container text3">
            <div className="row mt-3">
                <div className="col-lg-6 col-md-12 col-sm-12 box3">
                <div class="d-flex flex-row-reverse">
    <div><img src={require('../img/examination.png')}/></div>
    <div class="p-2 text-right"><h2>برگزاری آزمون های کتبی منظم</h2><br/>
    <a>
آزمون های کتبی یکی از ابزارهای ارزشیابی است که به صورت کتبی اجرا می شود و آن مجموعه پرسشهایی است که فراگیر باید کتباً به آنها پاسخ گوید.</a></div>
   
  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 box3">
                <div class="d-flex flex-row-reverse">
    <div><img src={require('../img/play.png')}/></div>
    <div class="p-2 text-right"><h2>برگزاری آموزشهای ویدیویی</h2><br/>
    <a>

    فیلــم آموزشــی منبــع آموزشــی بــه شــمار مــیرود و فیلمهــای مبتنــی تفکــر نقــاد اســتفاده در محیطهــای آموزشــی و فضــای شــخصی مناســب اســت.</a></div>
   
  </div>
                </div>
            </div>

            <div className="row mt-3 ">
                <div className="col-lg-6 col-md-12 col-sm-12 box3">
                <div class="d-flex flex-row-reverse">
    <div><img src={require('../img/microphone.png')}/></div>
    <div class="p-2 text-right"><h2>آموزش صوتی</h2><br/>
    <a>
فایلهای صوتی که بر روی سرورهای مشخصی آپلود می‌شود و شما می‌توانید به کمک برنامه‌هایی که برای گوش دادن به پادکست طراحی شده‌اند</a></div>
   
  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 box3">
                <div class="d-flex flex-row-reverse">
    <div><img src={require('../img/book.png')}/></div>
    <div class="p-2 text-right"><h2>کتابخانه مجهز</h2><br/>
    <a>جهت رفاه حال فرزندان شما و مطالع دقیق تر و جهت تمرکز بیشتر و کسب اطلاعات بهروز فرزندانتان کتاب خانه با تمامامکانات دایر گردیده است
</a></div>
   
  </div>
                </div>
            </div>
        </div>
        <br/><br/><br/><br/>
        <div className="container">
            <div className="line2">
            </div>
        </div>
        </div>
    )
}

export default Section1;