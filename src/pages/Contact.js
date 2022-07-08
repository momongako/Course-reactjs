import React from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
const Contact = () => {
  const [title, setTitle] = useState('')
  const [title2, setTitle2] = useState('')
  const [title3, setTitle3] = useState('')
  const [title4, setTitle4] = useState('')
  const [title5, setTitle5] = useState('')
  const handleSubmit = () => {
    console.log('ok :', title)
    if (title && title2 && title3 && title4 && title5) {
      toast.success(`Gửi thông tin thành công `)
      setTitle('')
      setTitle2('')
      setTitle3('')
      setTitle4('')
      setTitle5('')
      return;
    }
    else (
      toast.error(`Thông Tin không chính xác hoặc sai vui lòng kiểm tra lại!`)
    )
  }
  return (
    <div className="contact-sect">
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-sm-6 col-lg-4">
            <div className="contact_location">
              <div className="icon">
                <img
                  src="https://bn8p3.csb.app/images/cicon4.png"
                  alt="Location Icon"
                />
              </div>
              <h4>Địa chỉ</h4>
              <p>
                Peakview Tower, Phố Hoàng Cầu, Ô Chợ Dừa, Đống Đa, Hà Nội, Việt
                Nam
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="contact_location">
              <div className="icon">
                <img
                  src="https://raw.githubusercontent.com/Ak-SK/courseapp/d0c5023fbce950ba5f6d4e6c2a7fac2d22de1d9a/public/images/cicon2.png"
                  alt="Call Icon"
                />
              </div>
              <h4>Phone</h4>
              024 3202 0339
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="contact_location">
              <div className="icon">
                <img
                  src="https://bn8p3.csb.app/images/cicon3.png"
                  alt="Mail Icon"
                />
              </div>
              <h4>Email</h4>
              changwon46.lee@multicampus.com
            </div>
          </div>
        </div>
        <div className="row p-20 m-0">
          <div className="map-grid col-md-6 col-lg-6 col-xl-6">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3360329235875!2d105.82147621537564!3d21.019236386003673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb4623fb1d3%3A0x10291e8bc5361d64!2sPeakview%20Tower!5e0!3m2!1sen!2sus!4v1656921164507!5m2!1sen!2sus"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a href="https://www.online-timer.net" />
                <br />
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
              </div>
            </div>
          </div>
          <div className="form-grid col-md-6 col-lg-6 col-xl-6">
            <h4>Gửi phản hồi</h4>
            <form className="form-group" action="#" method="get">
              <label htmlFor="name">Họ và tên</label>
              <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="ipbox" id="name" name="name" />
              <label htmlFor="mail">Email</label>
              <input type="mail" value={title2} onChange={(event) => setTitle2(event.target.value)} className="ipbox" id="mail" name="mail" />
              <label htmlFor="phone">Số điện thoại</label>
              <input type="phone" value={title3} onChange={(event) => setTitle3(event.target.value)} className="ipbox" id="number" name="number" />
              <label htmlFor="sub">Tiêu đề</label>
              <input type="text" value={title4} onChange={(event) => setTitle4(event.target.value)} className="ipbox" id="sub" name="subject" />
              <label htmlFor="yourm">Nội dung</label>
              <textarea rows={3} value={title5} onChange={(event) => setTitle5(event.target.value)} id="yourm" className="ipbox" />
              <div className="button" onClick={handleSubmit}>
                <input
                  type="button"
                  className="submit_btn"
                  name
                  defaultValue="Gửi"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
