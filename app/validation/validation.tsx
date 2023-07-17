
import {z} from 'zod';
const phoneRegex = /^01\d{9}$/;
 const schema = z
.object({
    name: z.string().min(3,{message:'name min length three char'}).max(10,{message:'name max length 10 char'}).trim().toLowerCase(),
    email: z.string().email({message: 'email is required '}).toLowerCase(),
    password: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,{message:"password must has one capital letter , special char, one number and min 8 char"}),
    confirmPassword: z.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,{message:"confirm password must be matched with password "}),
    website: z.string().url(),
    phone: z.string().regex(phoneRegex, {message:'must be 11 digits'})
})
.refine(
    (data)=> data.password === data.confirmPassword,{
        message:'password do not match',
        path:[]
    }
)

export default schema;