import React from 'react'

const Card2 = () => {
    let card = [
        {
          status: "✔️", plan: "5 User"
        },
        {
          status: "✔️", plan: "50GB Storage"
        },
        {
          status: "✔️", plan: "Unlimited Public Supports"
        },
        {
          status: "✔️", plan: "Community Access"
        },
        {
          status: "✔️", plan: "Unlimited Private Projects"
        },
        {
          status: "✔️", plan: "Dedicated Phone Supports"
        },
        {
          status: "✔️", plan: "Free Sub-Domains"
        },
        {
          status: "❌", plan: "Monthly Status Reports"
        },
      ];
      return (
        <div>
          <div class="container bg-light card p-3 mx-auto" >
            <div class="header d-flex flex-column" >
                <div class="fs-6 fw-light"> PLUS</div>
                <div class="fs-6"><h2>$9</h2>/per month</div>     
                <hr></hr>
            </div>
            <div>
              <div class="d-flex gap-2 ">
                <ul class="plan-Lists text-start">
                    {card.map((index)=> {return <Marking plan={index.plan} status = {index.status}/>})}
                      </ul>
                  </div>
                <div className='row'><input type="button" class="btn btn-primary fw-bold" value="Subscribe"></input></div>
            </div> 
          </div>
        </div>
      );
     function Marking({plan,status}){
      if (status === "✔️")
        return (
          <ActivePlan status={status} plan={plan}/>
        );
      else  
        return (
          <PassivePlan status={status} plan={plan} />
        );
     }
     function ActivePlan({plan,status}){
        return (
          <li className='fw-semibold banner'>{status} {plan}</li>
        );
     }
     function PassivePlan({plan,status}){
      return (
        <li className='fw-lighter banner'><span className='opacity-50'>{status}</span> {plan}</li>
      );
   }

}

export default Card2;