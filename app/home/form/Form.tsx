import React from 'react';
import styles from './form.module.css';
import {useForm , SubmitHandler } from 'react-hook-form';

type inputs ={
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    website: string,
    phone: number
}
function Form() {

    const {register, handleSubmit}= useForm<inputs>({
         defaultValues:{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            website: '',
            phone: 0
        }
    })
    const onSubmit: SubmitHandler<inputs> = (data) => console.log(data);
  return (
    <>
        <h4> form with validation </h4>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name' > User Name </label>
            <input type='text' id='name' {...register('name')}></input>

            <label htmlFor='email' > Email </label>
            <input type='email' id='email' {...register('email')}></input>

            <label htmlFor='phone' > phone number </label>
            <input type='number' id='phone' {...register('phone')}></input>

            <label htmlFor='password' > password </label>
            <input type='password' id='password' {...register('password')}></input>

            <label htmlFor='confirmPassword' > confirm password </label>
            <input type='password' id='confirmPassword' {...register('confirmPassword')}></input>

            <label htmlFor='website' > website </label>
            <input type='text' id='website' {...register('website')}></input>

            <button type='submit'>submit</button>
        </form>
    </>
  )
}

export default Form