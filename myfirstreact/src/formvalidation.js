import React from 'react'
const initialstate={
    name:"",
    email:"",
    password:"",
    confirmpassword:"",
    number:"",
    states:"",
    nameerr : " ",
    emailerr : "",
    passworderr:"",
    confirmpassworderr:"",
    numbererr:""
       

}

export default class VForm extends React.Component{
    state= initialstate;
    
    handlechange=(e)=>{
      
        this.setState({
            [e.target.name]:  (e.target.value)
        });
    }
    validate=()=>{
        let nameerr ="";
        let emailerr="";
        let passworderr="";
        let confirmpassworderr="";
        let numbererr="";
        let len_confirmpass=this.state.confirmpassword.length;
        let len_pass=this.state.password.length;

        if(!this.state.name)
        {
            nameerr="NAME CANNOT BE LEFT BLANK";
               
        }
        
        if(!this.state.email.includes("@") || !this.state.email.includes(".")  )
        {
           
            emailerr="INVALID EMAIL"
            
        }

        if(len_pass<6)
        {
            passworderr="PASSWORD SHOULD HAVE MINIMUM 6 CHARACTERS"
        }  
        if(this.state.password)
        {
            if(len_confirmpass<6)
            {
                confirmpassworderr="PASSWORD SHOULD HAVE MINIMUM 6 CHARACTERS"
            }  
            else if(this.state.confirmpassword!==this.state.password)
            {
                confirmpassworderr="BOTH PASSWORDS DOESN'T MATCH "
            }
        }

        if(this.state.number.length!==10)
         {
             numbererr="MOBILE NUMBER SHOULD HAVE EXACTLY 10 DIGITS"
         }
        if(emailerr||nameerr||passworderr||confirmpassworderr||numbererr)
        {
            this.setState({nameerr,emailerr,passworderr,confirmpassworderr,numbererr});  
            return false;  
        }
        
        
        return true;
    }
    
    handlesubmit=(e)=>{
        e.preventDefault();
        const isvalid=this.validate();
       if(isvalid){
            console.log(this.state);       
            this.setState(initialstate);     
        }
        
    }
    
    render(){
        console.log(this.state)
        return(
           
            <div>
                <section>
                <form onSubmit={this.handlesubmit} >                    
                    
                    <div>
                        <input name="name"  placeholder="Name" value={this.state.name}  onChange={this.handlechange}/>
                        <p style={{fontSize:10 ,color:"red"}}><b>{this.state.nameerr}</b></p>
                    </div>

                    <div>
                        <input name="email" placeholder="Email" value={this.state.email} onChange={this.handlechange}/>
                        <p style={{fontSize:10,color:"red"}}><b>{this.state.emailerr}</b></p>
                    </div>

                    <div>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlechange}/>
                        <p style={{fontSize:10,color:"red"}}><b>{this.state.passworderr}</b></p>
                    </div>

                    <div>
                        <input type="password" name="confirmpassword" placeholder="Confirm Password" value={this.state.confirmpassword} onChange={this.handlechange}/>
                        <p style={{fontSize:10,color:"red"}}><b>{this.state.confirmpassworderr}</b></p>
                    </div>

                    <div>
                        <input  name="number" placeholder="Enter Mobile Number" value={this.state.number} onChange={this.handlechange}/>
                        <p style={{fontSize:10,color:"red"}}><b>{this.state.numbererr}</b></p>
                    </div>


                    <div>
                    <select onChange={this.handlechange} >
                        <option>Tamil Nadu</option>
                        <option>Karnataka</option>                    
                        <option>Kerala</option>
                        <option>Andhra Pradesh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Chhatisgarh</option>
                        <option>Goa</option>
                        <option>Gujarat</option>
                        <option>Haryana</option>
                        <option>Himachal Pradesh</option>
                        <option>Jharkhand</option>
                        <option>Karnataka </option>
                        <option>Kerala</option>
                        <option>Madhya Pradesh </option>
                        <option>Maharashtra </option>
                        <option>Manipur</option>
                        <option>Meghalaya</option>
                        <option>Mizoram</option>
                        <option>Nagaland</option>
                        <option>Odisha </option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                        <option>Sikkim</option>
                        <option>Tamil Nadu</option>
                        <option>Telangana</option>
                        <option>Tripura</option>
                        <option>Uttarakhand</option>
                        <option>Uttar Pradesh</option>
                        <option>West Bengal</option>
                    </select>
                    </div>
                    <div>
                        <button type='submit' >SUBMIT</button>
                    </div>
                </form>
                </section>

            </div>
        )
        
    }
}
