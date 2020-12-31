import React from 'react';
import './Experience.css'

function Experience(){
  return(
      <section id="experience">
        <div className="container">
          <h2>Dynamic Pills</h2>
          <p>To make the tabs toggleable, add the data-toggle="pill" attribute to each link. Then add a .tab-pane className with a unique ID for every tab and wrap them inside a div element with className .tab-content.</p>
          <ul className="nav nav-pills">
          <li className="active"><a data-toggle="pill" href="#company1">Home</a></li>
          <li><a data-toggle="pill" href="#company2">company 1</a></li>
          <li><a data-toggle="pill" href="#company3">company 2</a></li>
          <li><a data-toggle="pill" href="#company4">company 3</a></li>
          </ul>
          
          <div className="tab-content">
          <div id="company1" className="tab-pane fade in active show">
              <h3>company #1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div id="company2" className="tab-pane fade">
              <h3>company #2</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div id="company3" className="tab-pane fade">
              <h3>company #3</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>
          <div id="company4" className="tab-pane fade">
              <h3>company #4</h3>
              <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          </div>
      </div>
    </section>
  );
}

export default Experience;