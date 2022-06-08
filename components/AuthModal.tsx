/* eslint-disable @next/next/no-img-element */  
import 'react-phone-number-input/style.css'
import { Button, Checkbox, Modal, Radio } from "antd";
import { useContext, useState } from "react";
import styled from "styled-components"
import { AppContext } from "../context/AppContext";
import CustomButtonComponent from "./CustomButtonComponent";
import ImgComponent from "./ImgComponent";
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags'
import type { RadioChangeEvent } from 'antd';

const logo = '../img/auth/logo.png'
const facebook = '../img/icon/facebook.png'
const google = '../img/icon/google.png'

export default function AuthModal(props:any) {

    const {
        user, 
        setUser,
        isAuthModalVisible,
        setIsAuthModalVisible
    } = useContext(AppContext)  

    const [isExternalAuthed, setIsExternalAuthed] = useState(false)
    const [phonenumber, setPhonenumber] = useState('')
    const [signEmail, setSignEmail] = useState('')
    const [signPWD, setSignPWD] = useState('')
    const [country, setcountry] = useState(1); 
    const [isExternalNextStep, setIsExternalNextStep] = useState(false);
    const [hasEmailError, sethasEmailError] = useState(false);
    const [hasPWDError, sethasPWDError] = useState(false);
    const [isVisibleSignupPart, setisVisibleSignupPart] = useState(false);
    const [isCreatedAccount, setisCreatedAccount] = useState(false);
    const [isSUnextStep, setisSUnextStep] = useState(false);
     
    const handleOk = () => {
        setIsAuthModalVisible(false);
    };

    const handleCancel = () => {
        setIsAuthModalVisible(false);
    };

    const externalNextStep = () => { 
        setIsExternalNextStep(true)
    }

    const setSignEmailData = (data:string) => {
        setSignEmail(data)
        sethasEmailError(false)
    }

    const setSignPWDData = (data:string) => {
        setSignPWD(data)
        sethasPWDError(false)
    }

    const signin =()=> { 
        if(signEmail !== "test@test.com") {
            sethasEmailError(true)
        } 
        else if(signPWD !== 'test') {
            sethasPWDError(true)
        }        
        else {
            sethasEmailError(false)
            sethasPWDError(false)
            localStorage.setItem('user', 'admin')
            setUser('admin')
            setIsAuthModalVisible(false)
        } 
    }

    const onChange = (e: RadioChangeEvent) => { 
        setcountry(e.target.value);
    }; 

    const createAccount =()=> {
        setisCreatedAccount(true)
    }

    const AfterSingupNextStep =()=> {
        setisSUnextStep(true)
    }
    const completedDescribe =()=> {
        setIsAuthModalVisible(false)
        setisSUnextStep(false)
        setisCreatedAccount(false)
        setisVisibleSignupPart(false)
    }       
    

    return(
        <Component>
            <Modal visible={isAuthModalVisible} onOk={handleOk} onCancel={handleCancel} className='signModal' footer={null}>
                <div className="left">
                    <ImgComponent src={logo} alt='Distributeur de materiaux de construction'/>
                    <h1>Distributeur de materiaux de construction</h1>
                    <p>Real-time delivery, for everyone. The single platform to start or grow your business online in the industry</p>
                </div>
                {
                isExternalAuthed?
                // // After Signin using FaceBook, Google, You have to descibe about you.
                <div className="right describeyou">
                    {
                        isExternalNextStep !== true?
                        <>
                            <h1>A little about you</h1>                     
                            <div className="sign_form describe_form">
                                <div>
                                    <label htmlFor="">Full Name</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div>
                                    <label htmlFor="">Company Name</label>
                                    <input type="text" name="" id="" />
                                </div>            
                                <div>
                                    <label htmlFor="">Email</label>
                                    <input type="email" name="" id="" />
                                </div>
                                <div className="phonediv">
                                    <label htmlFor="">Phone Number</label>
                                    <PhoneInput
                                        international
                                        defaultCountry="UA"
                                        value={phonenumber}
                                        onChange={(value: string) =>setPhonenumber(value)}/>
                                </div>               
                            </div>
                            <div className='choosecountry'>
                                <h3>Choose your  Country</h3>
                                <p>All the product prices and your account balance will be in according currency</p>
                                <div className="country_radios">
                                    <Radio.Group onChange={onChange} value={country}>
                                        <Radio value={1}>United States</Radio>
                                        <Radio value={2}>Canada</Radio> 
                                    </Radio.Group>
                                </div>
                            </div>
                            <div className="login_btn">
                                <CustomButtonComponent buttonText="Next" dataname={undefined} even={externalNextStep}/>
                            </div>
                        </>:
                        <>
                            <div className='bestdescribe'>
                                <h3>Which best describes you?</h3>
                                <div className="job_radios">
                                    <div>
                                        <input type="radio" name="job" id="job1" />
                                        <label htmlFor="job1">Concrete Contractor</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="job" id="job2" />
                                        <label htmlFor="job2">General Contractor</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="job" id="job3" />
                                        <label htmlFor="job3">Landscape Contractor</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="job" id="job4" />
                                        <label htmlFor="job4">Other types of Contractor</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="job" id="job5" />
                                        <label htmlFor="job5">Civil Contractor</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="job" id="job6" />
                                        <label htmlFor="job6">I’m a homeowner</label>
                                    </div> 
                                </div>
                                <h3>What type  project do you work on?</h3>
                                <div className="project_checks">
                                    <div>
                                        <input type="checkbox" name="" id="residencial" />
                                        <label htmlFor="residencial">Residencial</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" id="goverment" />
                                        <label htmlFor="goverment">Goverment</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" id="commercial" />
                                        <label htmlFor="commercial">Commercial</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" id="other" />
                                        <label htmlFor="other">Other</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="" id="industrial" />
                                        <label htmlFor="industrial">Industrial</label>
                                    </div>  
                                </div>
                                <h3 className='comsize_title'>Company Size</h3>
                                <div className="com_size">
                                    <div>
                                        <input type="radio" name="comsize" id="size1" />
                                        <label htmlFor="size1">1</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="comsize" id="size2" />
                                        <label htmlFor="size2">2-10</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="comsize" id="size3" />
                                        <label htmlFor="size3">11-20</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="comsize" id="size4" />
                                        <label htmlFor="size4">21-50</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="comsize" id="size5" />
                                        <label htmlFor="size5">50+</label>
                                    </div>
                                </div> 
                                <div className="login_btn">
                                    <CustomButtonComponent buttonText="Done" dataname={undefined} even={externalNextStep}/>
                                </div>
                            </div>
                        </>
                    }                     
                </div> :

                // SignUp form part
                <div className={"right " + (isVisibleSignupPart?'signupformpart':'')}>
                    {
                        isCreatedAccount?
                        // After Create Account, You have to descibe about you.
                        <>
                            {
                                isSUnextStep !== true?
                                // First Step for Describe
                                <>
                                    <h1>A little about you</h1>
                                    <div className='choosecountry'>
                                        <h3>Choose your  Country</h3>
                                        <p>All the product prices and your account balance will be in according currency</p>
                                        <div className="country_radios">
                                            <Radio.Group onChange={onChange} value={country}>
                                                <Radio value={1}>United States</Radio>
                                                <Radio value={2}>Canada</Radio> 
                                            </Radio.Group>
                                        </div>
                                    </div>
                                    <div className='bestdescribe mt_50'>
                                        <h3>Which best describes you?</h3>
                                        <div className="job_radios">
                                            <div>
                                                <input type="radio" name="job" id="job1" />
                                                <label htmlFor="job1">Concrete Contractor</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="job" id="job2" />
                                                <label htmlFor="job2">General Contractor</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="job" id="job3" />
                                                <label htmlFor="job3">Landscape Contractor</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="job" id="job4" />
                                                <label htmlFor="job4">Other types of Contractor</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="job" id="job5" />
                                                <label htmlFor="job5">Civil Contractor</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="job" id="job6" />
                                                <label htmlFor="job6">I’m a homeowner</label>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="login_btn">
                                        <CustomButtonComponent buttonText="Next" dataname={undefined} even={AfterSingupNextStep}/>
                                    </div>
                                </>:
                                // Second Step for Describe
                                <>
                                    <div className='bestdescribe'>
                                        <h3>What type  project do you work on?</h3>
                                        <div className="project_checks">
                                            <div>
                                                <input type="checkbox" name="" id="residencial" />
                                                <label htmlFor="residencial">Residencial</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="" id="goverment" />
                                                <label htmlFor="goverment">Goverment</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="" id="commercial" />
                                                <label htmlFor="commercial">Commercial</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="" id="other" />
                                                <label htmlFor="other">Other</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" name="" id="industrial" />
                                                <label htmlFor="industrial">Industrial</label>
                                            </div>  
                                        </div>
                                        <h3 className='comsize_title'>Company Size</h3>
                                        <div className="com_size">
                                            <div>
                                                <input type="radio" name="comsize" id="size1" />
                                                <label htmlFor="size1">1</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="comsize" id="size2" />
                                                <label htmlFor="size2">2-10</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="comsize" id="size3" />
                                                <label htmlFor="size3">11-20</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="comsize" id="size4" />
                                                <label htmlFor="size4">21-50</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="comsize" id="size5" />
                                                <label htmlFor="size5">50+</label>
                                            </div>
                                        </div> 
                                    </div>  
                                    <div className="login_btn">
                                        <CustomButtonComponent buttonText="Done" dataname={undefined} even={completedDescribe}/>
                                    </div>
                                </>
                            }
                        </>:
                        // Create Account Form
                        <>
                            {
                                isVisibleSignupPart?
                                <h1>Create account</h1>:
                                <h1>Hi, Welcome Back</h1>
                            }                    
                            <div className="external_sign">
                                <div>
                                    <Button icon={<ImgComponent src={google} alt='google'/>}>Sign-in with google</Button>
                                </div>
                                <div>
                                    <Button icon={<ImgComponent src={facebook} alt='facebook'/>}>Sign-in with Facebook</Button>                        
                                </div>
                            </div>
                            <div className="ordiv">
                                <div>
                                    Or continue with
                                </div>
                            </div>
                            {
                                    isVisibleSignupPart?
                                    <>
                                        <div className="sign_form describe_form signup_form">
                                            <div>
                                                <label htmlFor="">Full Name</label>
                                                <input type="text" name="" id="" />
                                            </div>
                                            <div>
                                                <label htmlFor="">Company Name</label>
                                                <input type="text" name="" id="" />
                                            </div>            
                                            <div>
                                                <label htmlFor="">Email</label>
                                                <input type="email" name="" id="" />
                                            </div>
                                            <div className="phonediv has_error">
                                                <label htmlFor="">Phone Number</label>
                                                <PhoneInput
                                                    international
                                                    defaultCountry="UA"
                                                    value={phonenumber}
                                                    onChange={(value: string) =>setPhonenumber(value)}/>
                                                <p>Incorrect phone number</p>
                                            </div> 
                                            <div className='has_error'>
                                                <label htmlFor="">Password</label>
                                                <input type="email" name="" id="" />
                                                <p>Passwords do not match</p>
                                                <p className='reqular'>Passwords must be at least 6 characters</p>                                        
                                            </div>
                                            <div className='has_error'>
                                                <label htmlFor="">Password Confirmation</label>
                                                <input type="email" name="" id="" />
                                            </div>              
                                        </div>
                                        <div className='agree_and_creat'>
                                            <div>
                                                <input type="checkbox" name="" id="" />
                                                <label htmlFor=""><span>Agree with</span> Terms and Conditions</label>
                                            </div>
                                            <div className="create_acc_btn">
                                                <CustomButtonComponent buttonText="Create Account" dataname={undefined} even={createAccount}/>
                                            </div>
                                        </div>
                                        <div className="gosignup">
                                            Already have account?  <label onClick={()=>setisVisibleSignupPart(false)}>Sign In</label>
                                        </div>
                                    </>:
                                    <>
                                        <div className="sign_form">                        
                                            <div className={'' + (hasEmailError?'has_error':'')}>
                                                <label htmlFor="">Email</label>
                                                <input 
                                                    type="email" 
                                                    name="" 
                                                    id="" 
                                                    onFocus={(e)=>setSignEmailData(e.target.value)} 
                                                    onChange={(e)=>setSignEmailData(e.target.value)} 
                                                    onBlur={(e)=>setSignEmailData(e.target.value)}/>
                                                <p>Email is not exist</p>
                                            </div>
                                            <div className={'' + (hasPWDError?'has_error':'')}>
                                                <label htmlFor="">Password</label>
                                                <input type="password" name="" id="" 
                                                    onFocus={(e)=>setSignPWDData(e.target.value)} 
                                                    onChange={(e)=>setSignPWDData(e.target.value)} 
                                                    onBlur={(e)=>setSignPWDData(e.target.value)}
                                                />
                                                <p>Incorrect password</p>
                                            </div>                                             
                                        </div>
                                        <div className="login_btn">
                                            <CustomButtonComponent buttonText="Log In" dataname={undefined} even={signin}/>
                                        </div>
                                        <div className="gosignup">
                                            Don’t have an account? <label onClick={()=>setisVisibleSignupPart(true)}>Sign Up</label>
                                        </div>
                                    </>
                            }  
                        </>
                    }                  
                </div>
                }               
            </Modal>
        </Component>
    )
}

interface StyleProps {
    color?: any;
}  

const Component = styled.div` 
`