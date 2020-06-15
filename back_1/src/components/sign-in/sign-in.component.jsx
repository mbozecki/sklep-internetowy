import React from 'react'
import './sign-in.styles.scss'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            email: '',
            password: ''
        }
        
    }

    handleSubmit= async event =>{
        event.preventDefault();
        const {email, password}= this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        } catch (err){
            console.log(err)
        }
        this.setState({email: '', password: ''})
    }

    handleChange= event => { //uniwersalna funkcja, jednoczesnie obsluguje email i haslo
        const {value,name}=event.target;
        this.setState({[name]:value})
    }
    render () {
        return( 
            <div className="sign-in">
                <div class="bg-grey-lighter text-base text-grey-darkest font-normal relative">
                    <div class="h-2 bg-primary"></div>

                        <div class="container mx-auto p-8">
                            <div class="mx-auto max-w-sm">
                                <div class="py-6 text-center text-6xl">
                                    LOGO.
                                </div>
                                <div class="bg-white rounded shadow">
                                    <div class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
                                        Zaloguj się
                                    </div>

                                    <form onSubmit={this.handleSubmit} class="bg-grey-lightest px-10 py-10">

                                        <div class="mb-3">
                                            <input class="border w-full p-3" name="email" type="text" placeholder="e-mail" value={this.state.email} required onChange={this.handleChange}/>
                                        </div>
                                        <div class="mb-6">
                                            <input class="border w-full p-3" name="password" type="password" placeholder="**************"  value={this.state.password} required onChange={this.handleChange}/>
                                        </div>
                                        <div class="flex justify-between">
                                            <button type="submit" class=" border-gray-500 border-2 w-full p-4 text-sm uppercase font-bold tracking-wider m-1">
                                                Zaloguj się
                                            </button>
                                            <button onClick={signInWithGoogle} class="bg-red-200 border-gray-500 border-2 w-full p-4 text-sm uppercase font-bold tracking-wider m-1">
                                                Zaloguj się z Google
                                            </button>
                                        </div>
                                    </form>

                                <div class="border-t px-10 py-6">
                                    <div class="flex justify-between">
                                        <a href="#" class="font-bold text-primary hover:text-primary-dark no-underline">Nie masz konta?</a>
                                        <a href="#" class="text-grey-darkest ">Zapomniałem hasła</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</div>
            </div>
        )
    }
}

export default SignIn;