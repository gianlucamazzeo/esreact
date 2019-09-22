import React from "react";
import    "../../../css/mainLayout/footer/footer.css";



export default class Footer extends React.Component{ 

   render(){ 
      return( 
        <div className = "container-fluid footer">
   <div className = "row">
      <div className = "col mr-auto">
         <p>Book Seller Company</p>
         <p>Via Paolo Dell'Aguzzo, 56</p>
         <p>Senigallia, Ancona, Italia</p>
         <p>info@paolodellaguzzo.com</p>
      </div>
      <div className = "col">
         <div className = "pull-right">
            <a href="https://www.facebook.com/gianlucamazzeo/" >
               <i className = "fa fa-facebook-official fa-2x"></i>
            </a>
            <a href="https://twitter.com/gianlucamazzeo" >
               <i className = "fa fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/paolodellaguzzo/" >
               <i className = "fa fa-linkedin-square fa-2x"></i>
            </a>
            <a href="https://plus.google.com/u/0/+paolodellaguzzo">
               <i className = "fa fa-google-plus-official fa-2x"></i>
            </a>
         </div>
      </div>
   </div>
</div>
      ); 
   }
}