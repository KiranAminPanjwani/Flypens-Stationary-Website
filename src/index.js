import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Components/Heading";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
// import AboutSection from "./Components/AboutSection";
import "./index.css";

//if we want a div
// ReactDOM.render(
//   <div>
//     <h1>Hello Girl! ':-)'</h1>
//     <h2>Let's go london!</h2>
//   </div>,
//    document.getElementById("root")
// )  //(kya dikhana h , or kahn dikhana h)

//when me don't want div, use react-fragments
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hello Girl! ':-)'</h1>
//     <h2>Let's go london!</h2>
//   </React.Fragment>,
//    document.getElementById("root")
// )

// ReactDOM.render(
//   <>
//     <h1>Hello Girl! ':-)'</h1>
//     <h2>Let's go london!</h2>
//   </>,
//    document.getElementById("root")
// )

ReactDOM.render(
  <>
    <Heading />
    <div className="row outerCont out_JournalCont">
      <div _ngcontent-mav-c113="" class="separator">
        <div _ngcontent-mav-c113="" class="separator__line"></div>
        <h1>TSC Journals</h1>
        <div _ngcontent-mav-c113="" class="separator__line"></div>
      </div>

      <div className="row journalCont">
        <Container
          Name="rainbow"
          ProductName="Rainbow Notebook Set"
          Price="Rs.190.00"
          image="https://cdn.shopify.com/s/files/1/2531/5420/products/WhatsAppImage2022-04-21at4.31.30PM_1_3ee44088-c89f-44a0-8b3c-d7449d8aa23b_1200x.jpg?v=1659782647"
        />
        <Container
          Name="zebra"
          ProductName="Zebra Printed Notebook"
          Price="Rs.210.00"
          image="https://lifestylebymo.com/wp-content/uploads/2017/12/d5c6f05ffc468a8e1f1606f56424a93c-notebook-cover-design-notebook-ideas-cover794892374.jpg"
        />
        <Container
          Name="DIY"
          ProductName="DIY Customized Notebook"
          Price="Rs.1,350"
          image="https://data.whicdn.com/images/292718679/original.jpg"
        />
        <Container
          Name="vector"
          ProductName="Vector Designed Notebook"
          Price="Rs.1,400"
          image="https://images.all-free-download.com/images/graphiclarge/notebook_cover_background_classical_flat_design_plants_decor_6848091.jpg"
        />
        <Container
          Name="pattern"
          ProductName="Blue Pattern Printed Notebook"
          Price="Rs.1,100"
          image="https://cdn.dribbble.com/users/914439/screenshots/13571336/media/e64112834a3ad405cd3f881ec998ddd2.jpg?compress=1&resize=400x300"
        />
      </div>
      <div className="row journalCont">
        <Container
          Name="fourColor"
          ProductName="Four Color Notebook Set"
          Price="Rs.490.00"
          image="https://ae01.alicdn.com/kf/HTB11OzXJVXXXXa0XpXXq6xXFXXXN/2017-Sketchbook-Paper-No-Pocket-New-Notebook-Small-Memo-Journal-Design-Stationery-Topselling-Durable-Travel-Vocabulary.jpg"
        />
        <Container
          Name="pastel"
          ProductName="Pastel Color Notebook Set"
          Price="Rs.510.00"
          image="https://ae01.alicdn.com/kf/H0cc6c1953a1b48758f437ca9b272372eC/Daily-Planner-Simple-Design-Hardcover-Flexible-Daily-Planner-Thick-Paper-Time-Management-For-Women-Men-Notebooks.jpg_Q90.jpg_.webp"
        />
        <Container
          Name="galaxy"
          ProductName="Galaxy Printed Notebook"
          Price="Rs.950.00"
          image="https://cf.shopee.co.id/file/3d762689789bdeb076ad0bcf2b73747d"
        />
        <Container
          Name="puffy"
          ProductName="Puffy Painted Seonsory Notebook"
          Price="Rs.1,000"
          image="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2020/4/17/0/Original_Karen-Kavett_Puffy-Paint-Notebook-Cover_dots-3-1-finished.jpg.rend.hgtvcom.616.411.suffix/1587133088251.jpeg"
        />
        <Container
          Name="pattern2"
          ProductName="Graphic Pattern Notebook"
          Price="Rs.1,200"
          image="https://cdn.dribbble.com/users/1224972/screenshots/10283629/media/6752b7d8d8de567477b20f79af99788f.jpg?compress=1&resize=400x300"
        />
      </div>

      <div className="row showMore">
        <button className="showmoreBtn">Show More</button>
      </div>
    </div>

  <div className="row outerCont out_newArrivalCont">
  <div _ngcontent-mav-c113="" class="separator">
        <div _ngcontent-mav-c113="" class="separator__line"></div>
        <h1>New Arrivals</h1>
        <div _ngcontent-mav-c113="" class="separator__line"></div>
      </div>

      <div className="row newArrivalCont">
        <Container
          Name="colorpencil"
          ProductName="Water Color Pencils"
          Price="Rs.190.00"
          image="https://almanar.bh/wp-content/uploads/2021/03/STAEDTLER-36-WATER-COLOUR-PENCILS-144-10ND36.jpg"
        />
        <Container
          Name="bags"
          ProductName="Pink-Blue Bags"
          Price="Rs.4,600"
          image="https://imgmedia.lbb.in/68914897_611722356022822_1123698780344358669_n_1574663603252.jpg"
        />
        <Container
          Name="formatsheets"
          ProductName="Format Sheets"
          Price="Rs.850.00"
          image="https://assetscdn1.paytm.com/images/catalog/product/S/ST/STAEVA-FOAM-SHEKAPI63599336D8CB51/1563562065545_0..jpg"
        />
        <Container
          Name="pouch"
          ProductName="Shiney Stationary Pouch"
          Price="Rs.1,000"
          image="https://m.media-amazon.com/images/I/81eMPjVpUyL._SL1500_.jpg"
        />
        <Container
          Name="kidsSet"
          ProductName="Kids Complete Set"
          Price="Rs.1,300"
          image="https://www.pngitem.com/pimgs/m/65-656708_transparent-background-stationery-png-png-download.png"
        />
      </div>
  </div>

  <Footer/>
  
  </>,
  document.getElementById("root")
);
