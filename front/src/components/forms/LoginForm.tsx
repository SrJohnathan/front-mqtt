'use client'

import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useState} from "react";


const schema = z.object({
    username: z.string().email("Insira o e-mail válido"),
    password: z.string(),
    checked: z.boolean().refine((val) => val, {
        message: "O checkbox precisa estar marcado",
        path: ["checked"],
    })


})
type  formSchema = z.infer<typeof schema>

const LoginForm = () => {

    const {watch,register, handleSubmit, formState: {errors}} = useForm<formSchema>(
        {resolver: zodResolver(schema)}
    )
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submit = async (data: formSchema) => {


        alert(JSON.stringify(data))

    }

    return (
        <div className="card padding">
            <h2 className={"bold"}>Control
            </h2>
            <div className={"large-space"}></div>
            <p>Seamless Access, Secure Connection: Your Gateway to a Personalized Experience.</p>
            <form onSubmit={handleSubmit(submit)}>
                <div className="field fill round label">
                    <input   type="text" {...register("username")} required/>
                    <label >Email Address</label>

                    {errors.username && <span className="error">{errors.username.message}</span>}

                </div>


                <div className="field fill round label">
                    <input  {...register("password")}
                            type={showPassword ? 'text' : 'password'} required/>
                    <label>Password</label>

                    {errors.password && <span className="error">{errors.password.message}</span>}


                    <a onClick={togglePasswordVisibility}><i>{showPassword ? 'visibility_off' : 'visibility'}</i></a>

                </div>


                <div className={"middle-align"}>
                    <label className="checkbox small-padding">
                    <input {...register("checked")} type="checkbox" required/>
                        <span>I agree with terms and conditions</span>
                    </label>
                </div>


                <button type="submit" className="responsive margin ">Login</button>

            </form>


            <button className="responsive margin transparent ">Login with Google</button>
            <p>Haven't account <a className={"primary-text"} href="#">Create One</a></p>
        </div>
    );

}

export default LoginForm