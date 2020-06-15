import React from 'react'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor(){
        super();
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword:'',
        }
    }

    handleSubmit= async event => {
        event.preventDefault(); //zapobiega domyslnemu dzialaniu funkcji
        const {displayName,email,password,confirmPassword}=this.state

        if (password!=confirmPassword){
            alert("Hasła nie zgadzają się")
            return;
        }

        try {
            const {user}= await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({ //czyszczenie formularza
                displayName: '',
                email: '',
                password: '',
                confirmPassword:'',
            })
        } catch(err){
            console.log(err)
        }

    };

    handleChange= event => {
        const {name, value} =event.target;
        this.setState({[name]:value});
    }
    render (){

        const {displayName,email,password,confirmPassword}=this.state

        return (<div className="sign-up">
            <div class="bg-grey-lighter text-base text-grey-darkest font-normal relative">
                    <div class="h-2 bg-primary"></div>

                        <div class="container mx-auto p-8">
                            <div class="mx-auto max-w-sm">
                                <div class="py-6 text-center text-6xl">
                                    LOGO.
                                </div>
                                <div class="bg-white rounded shadow">
                                    <div class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
                                        Zarejestruj się
                                    </div>

                                    <form onSubmit={this.handleSubmit} class="bg-grey-lightest px-10 py-10">

                                        <div class="mb-3">
                                            <input class="border w-full p-3" name="displayName" type="text" placeholder="Imię" value={displayName} required onChange={this.handleChange}/>
                                        </div>
                                        <div class="mb-3">
                                            <input class="border w-full p-3" name="email" type="email" placeholder="e-mail"  value={email} required onChange={this.handleChange}/>
                                        </div>
                                        <div class="mb-3">
                                            <input class="border w-full p-3" name="password" type="password" placeholder="hasło" value={password} required onChange={this.handleChange}/>
                                        </div>
                                        <div class="mb-3">
                                            <input class="border w-full p-3" name="confirmPassword" type="password" placeholder="Potwierdź hasło" value={confirmPassword} required onChange={this.handleChange}/>
                                        </div>
                                        <div class="flex justify-between">
                                            <button type="submit" class=" border-gray-500 border-2 w-full p-4 text-sm uppercase font-bold tracking-wider m-1">
                                                Zarejestruj się
                                            </button>
                                        
                                        </div>
                                    </form>

                                <div class="border-t px-10 py-6">
                                    <div class="flex justify-between">
                                        <a href="/login" class="font-bold text-primary hover:text-primary-dark no-underline">Masz konto?</a>
                                        <a href="/forgot" class="text-grey-darkest ">Zapomniałem hasła</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)

    }
}
export default SignUp;