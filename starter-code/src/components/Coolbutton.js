import React, { Component } from "react";

class Coolbutton extends Component {
    render() {
        return ( 
            <div className="su">
<h1>Sign Up</h1>

            <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>
<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
</div>
<div class="field">
  <label class="label">Password</label>
  <div class="control">
    <input class="input" type="password" placeholder="xxxxxxxx" />
  </div>
</div>
<button class="button is-rounded my-class is-danger is-small">Submit</button>
</div>
        )
    }
}


export default Coolbutton;