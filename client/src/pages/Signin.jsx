import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

export default function SignIn() {

  const [formData, setFormData] = useState({})
  const [errorMessage , setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // send form data to server here
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      console.log(data);
      if(data.success === false) {
        setLoading(false)
        setErrorMessage(data.message)
        return;
      } 
      setLoading(false)
      setErrorMessage(null)
      navigate('/')
      
    } catch (error) {
      setLoading(false)
      setErrorMessage(error.message)
    }
    
  console.log(errorMessage)


  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" placeholder="email" className="border p-3 rounded-lg" id="email" onChange={handleChange}/>
      <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password" onChange={handleChange}/>
      <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading ? 'Loading...' : 'Sign In' }</button>
    </form>
    <div className="flex gap-2 mt-5">
      <p>Dont Have an account?</p>
      <Link to={"/sign-up"}>
      <span className="text-blue-700">Sign Up</span>
      </Link>
    </div>
    {errorMessage && <p className='text-red-500 mt-5'>{errorMessage}</p>}

    </div>
  )
}
