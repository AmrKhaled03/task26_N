import React ,{useRef} from 'react'
import "../App.css"
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ib9q8mf', 'template_7hn7tqe', form.current, 'Go-F8wtSOy7rYOqzq')
      Swal.fire(
        'Your message is sent successfully!',
        'You clicked the button!',
        'success'
      )
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };
  return (
<>
<div className="container my-5 p-5">
   <div className="row text-center">
                <div className="col-lg-12">
                    <h1 className='special-heading mb-5'>
Contact Us
                    </h1>
                </div>
            </div> 
</div>
 
 <div className="contact" id="contact">

 <div className="container">
  <form ref={form} onSubmit={sendEmail} className="d-flex flex-column justify-content-center align-items-center text-center" style={{ padding: '20px' }}>
    <div className="row">
      <div className="col-md-12 m-2">
        <div className="md-form mb-0">
          <input type="text" id="name" name="name" className="form-control" placeholder="Name" />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 m-2">
        <div className="md-form mb-0">
          <input type="text" id="email" name="email" className="form-control" placeholder="Email" />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 m-2">
        <div className="md-form mb-0">
          <input type="text" id="phone" name="phone" placeholder="Phone" className="form-control" />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 m-2">
        <div className="md-form">
          <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder="Message"></textarea>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <input type="submit" value="Send" className="btn cont btn-lg  m-2 px-4 py-2" style={{borderRadius:50}} />
      </div>
    </div>
  </form>
</div>
  
   </div>
</>



  
  )
}

export default Contact