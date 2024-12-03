import React from 'react'

function contact() {
  return (
    <div>
      <section className='contact-form'>
        <h2 className='fade-in' >Contact Us</h2>
      <form>
        <input type="text" placeholder='Full name' required />
        <input type="email" placeholder='Email Address' required />
        <input type="text" placeholder='Contact number' required />
        <textarea placeholder='Your message' rows={5} required > </textarea>
        <button type='submit'>Submit</button>
        </form>
      </section>
    </div>
  )
}

export default contact
