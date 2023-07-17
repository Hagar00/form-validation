"use client"
import React from 'react';
import styles from './form.module.css';
import {useForm , SubmitHandler } from 'react-hook-form';
import{zodResolver} from '@hookform/resolvers/zod';
import  schema  from '../../validation/validation';




type inputs ={
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    website: string,
    phone: string
}
function Form() {

    const {register, handleSubmit, formState:{errors,isSubmitting}}= useForm<inputs>({
         defaultValues:{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            website: '',
            phone: ''
        },
        resolver: zodResolver(schema)
    })
    const onSubmit: SubmitHandler<inputs> = (data) => console.log(data);
  return (
    <>
        <h2 className={styles.txt}> form with validation </h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name' > User Name </label>
            <input type='text' id='name' {...register('name')} disabled={isSubmitting}/>
            {errors.name?.message && <div className={styles.error}> {errors.name?.message} </div>}

            <label htmlFor='email' > Email </label>
            <input type='email' id='email' {...register('email')} disabled={isSubmitting}></input>
            {errors.email?.message && <div className={styles.error}> {errors.email?.message} </div>}

            <label htmlFor='phone' > phone number </label>
            <input type='text' id='phone' {...register('phone')} disabled={isSubmitting}></input>
            {errors.phone?.message && <div className={styles.error}> {errors.phone?.message} </div>}

            <label htmlFor='password' > password </label>
            <input type='password' id='password' {...register('password')} disabled={isSubmitting}></input>
            {errors.password?.message && <div className={styles.error}> {errors.password?.message} </div>}

            <label htmlFor='confirmPassword' > confirm password </label>
            <input type='password' id='confirmPassword' {...register('confirmPassword')} disabled={isSubmitting}></input>
            {errors.confirmPassword?.message && <div className={styles.error}> {errors.confirmPassword?.message} </div>}

            <label htmlFor='website' > website </label>
            <input type='text' id='website' {...register('website')} disabled={isSubmitting}></input>
            {errors.website?.message && <div className={styles.error}> {errors.website?.message} </div>}

            <button type='submit' disabled={isSubmitting}>submit</button>
        </form>
    </>
  )
}

export default Form