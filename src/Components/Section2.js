import React from 'react';
import '../App.css';
const Section2 = () => {
    return(
        <div className="section2">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 img-style1">
                    <img src={require('../img/school_art.jpg')} />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-right col-style2">
                <img src={require('../img/comment.png')} /><br/>
                <h2>درباره ما</h2>
                <a>
موسسه آموزشی ما از سال 1385 شروع به کار کرده است و در حال حاضر یکی از معتبرتیرن و موفت ترین موسسه های آموزشی در کشور می باشد به طوری که دانش آموزان بسیار موفقی در زمینه علمی و پژوهشی و ادبی آتربیت کرده است</a>
             </div>
            </div>
            </div>
        </div>
    )
}

export default Section2;