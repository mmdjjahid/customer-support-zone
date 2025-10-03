import React, { Component } from "react";
import img from '../../assets/x.png'
import img2 from '../../assets/in.png'
import img3 from '../../assets/fb.png'
import img4 from '../../assets/mail.png'

export class FooterComponent extends Component {
  render() {
    return (
      <div className=" bg-neutral p-10">
        <footer className="footer sm:footer-horizontal  text-neutral-content  max-w-6xl my-0 mx-auto">
          <aside>
            <p className=" font-bold text-2xl text-white	">CS — Ticket System</p>
            <p className="text-base font-normal text-[#A1A1AA]">
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry. Lorem<br />
               Ipsum has been the industry's standard<br />
                dummy text ever since the 1500s, when an<br />
                 unknown printer took a galley of type and<br />
                  scrambled it to make a type specimen book.
            </p>
          </aside>
          <nav>
            <h6 className=" font-medium text-[20px]">Company</h6>
            <a className="link link-hover text-base text-[#A1A1AA] font-normal">About Us</a>
            <a className="link link-hover text-base text-[#A1A1AA] font-normal">Our Mission</a>
            <a className="link link-hover text-base text-[#A1A1AA] font-normal">Contact Saled</a>
            
          </nav>
          <nav>
            <h6 className="font-medium text-[20px]">Services</h6>
            <a className="link link-hover text-base text-[#A1A1AA] font-normal">Products & Services</a>
            <a className="link link-hover text-base text-[#A1A1AA] font-normal">Customer Stories</a>
            <a className="link link-hover text-base text-[#A1A1AA] font-normal">Download Apps</a>
           
          </nav>
          <nav>
            <h6 className="font-medium text-[20px]">Information</h6>
            <a className="link link-hover text-base text-[#A1A1AA] font-normal">Privacy Policy</a>
            <a className="link link-hover text-base text-[#A1A1AA] font-normal">Terms & Conditions</a>
            <a className="link link-hover text-base text-[#A1A1AA] font-normal">Join Us</a>
            
          </nav>
          <nav>
            <h6 className="font-medium text-[20px]">Legal</h6>
            <div className="flex justify-center items-center gap-1"><img src={img} alt="" srcset="" /><a className="link link-hover text-base text-[#A1A1AA] font-normal">@CS — Ticket System</a></div>
            <div className="flex justify-center items-center gap-1"><img src={img2} alt="" srcset="" /><a className="link link-hover text-base text-[#A1A1AA] font-normal">@CS — Ticket System</a></div>
            <div className="flex justify-center items-center gap-1"><img src={img3} alt="" srcset="" /><a className="link link-hover text-base text-[#A1A1AA] font-normal">@CS — Ticket System</a></div>
            <div className="flex justify-center items-center gap-1"><img src={img4} alt="" srcset="" /><a className="link link-hover text-base text-[#A1A1AA] font-normal">support@cst.com</a></div>
            
          </nav>
        </footer>
        <div className="mt-28 border-t-1 footer sm:footer-horizontal footer-center text-white p-4 max-w-6xl my-0 mx-auto">
          <aside>
            <p>
              © 2025 CS — Ticket System. All rights reserved.
            </p>
          </aside>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
