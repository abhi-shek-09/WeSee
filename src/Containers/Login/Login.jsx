import React from "react";
import * as Auth from '../../Components/Auth/Auth';
import './Login.css'
function Login() {
    const [signIn, toggle] = React.useState(true);
     return(
         <Auth.Container>
             <Auth.SignUpContainer signinIn={signIn}>
                 <Auth.Form>
                     <Auth.Title>Create Account</Auth.Title>
                     <Auth.Input type='text' placeholder='Name' />
                     <Auth.Input type='email' placeholder='Email' />
                     <Auth.Input type='password' placeholder='Password' />
                     <Auth.Button>Sign Up</Auth.Button>
                 </Auth.Form>
             </Auth.SignUpContainer>

             <Auth.SignInContainer signinIn={signIn}>
                  <Auth.Form>
                      <Auth.Title>Sign in</Auth.Title>
                      <Auth.Input type='email' placeholder='Email' />
                      <Auth.Input type='password' placeholder='Password' />
                      <Auth.Anchor href='#'>Forgot your password?</Auth.Anchor>
                      <Auth.Button>Sign In</Auth.Button>
                  </Auth.Form>
             </Auth.SignInContainer>

             <Auth.OverlayContainer signinIn={signIn}>
                 <Auth.Overlay signinIn={signIn}>

                 <Auth.LeftOverlayPanel signinIn={signIn}>
                     <Auth.Title>Welcome Back!</Auth.Title>
                     <Auth.Paragraph>
                         To keep connected with us please login with your personal info
                     </Auth.Paragraph>
                     <Auth.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Auth.GhostButton>
                     </Auth.LeftOverlayPanel>

                     <Auth.RightOverlayPanel signinIn={signIn}>
                       <Auth.Title>Hello, Friend!</Auth.Title>
                       <Auth.Paragraph>
                           Enter Your personal details and start journey with us
                       </Auth.Paragraph>
                           <Auth.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Auth.GhostButton> 
                     </Auth.RightOverlayPanel>
 
                 </Auth.Overlay>
             </Auth.OverlayContainer>

         </Auth.Container>
     )
}

export default Login;