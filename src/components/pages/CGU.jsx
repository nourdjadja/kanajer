import React from 'react'

export const CGU = ({
    isOpen,
    handleDismount
}) => {
  if(!isOpen){
    return <></>
  } else {
    return (
        <div style={{
          overflow:"scroll",
        }} className="popover-set">
          <button style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            border:"none"
          }} className='absolute-left-return' onClick={handleDismount}>
            <img style={{
              width:"50px"
            }} src="image/toLeft.svg" alt="BACK"  />
          </button>
          <div style={{
            height:'fit-content',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            gap:"30px",
            padding:"3%",
            textAlign:"justify"
          }}  >
            <h1 class="main-text">Terms of Service</h1>
            <p class="smallest-text">Welcome to <span style={{
              backgroundColor:"red"
            }}>KANAJER!</span> By using our service, you agree to these terms of service (TOS). Please read them carefully before registering or using our service.</p>
        
            <h2 class="small-text">1. Collection and Use of Personal Data</h2>
            <p class="smallest-text">We only collect the following data when you register:</p>
            <ul class="smallest-text">
                <li>Username</li>
                <li>Password (hashed for security reasons)</li>
            </ul>
            <p class="smallest-text">This data is necessary to allow you to access our service. By registering, you consent to provide this information, and its use is based on our legitimate interest in providing a secure and personalized service.</p>
        
            <h2 class="small-text">2. Data Retention</h2>
            <p class="smallest-text">Your personal data will be retained for a maximum period of one year from the last use of your account. After this period, the data will be securely deleted.</p>
        
            <h2 class="small-text">3. Data Security</h2>
            <p class="smallest-text">We implement appropriate security measures to protect your personal data. Your password is hashed before being stored in our database, and we use secure transmission protocols to protect your information during transfer to our servers.</p>
        
            <h2 class="small-text">4. User Rights</h2>
            <p class="smallest-text">You have the right to request access to your personal data, to rectify it, or to delete it at any time. To exercise these rights or for any other questions regarding your data, please contact us by email at nourikatama@gmail.com.</p>
        
            <h2 class="small-text">5. Cookies and Data Transfer</h2>
            <p class="smallest-text">We do not use cookies or transfer your personal data to third parties.</p>
        
            <h2 class="small-text">6. Account Modification or Deletion</h2>
            <p class="smallest-text">You may request modification or deletion of your account at any time by contacting us by email at nourikatama@gmail.com. Upon receiving your request, we will take appropriate measures to process your request promptly.</p>
        
            <h2 class="small-text">7. Modifications to the Terms of Service</h2>
            <p class="smallest-text">We reserve the right to modify these terms of service at any time. Changes will be effective upon publication on our website. It is your responsibility to regularly check the TOS for any updates.</p>
        
          </div>
        </div>
      )
  }
}
