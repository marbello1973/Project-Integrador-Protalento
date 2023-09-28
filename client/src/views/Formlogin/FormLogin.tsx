//import { Button } from "../../componentes/Form/Button/Button";
//import Input from "../../componentes/Form/Input/Input";
import styles from "./FormLogin.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux/store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface Credential {
  email: string;
  password: string;
}

export function FormLogin({ email, password }: Credential) {
  

  const [formData, setFormData] = useState<Credential>({ email, password})
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(setFormData)
        
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch({ type: "LOGIN", payload: formData });
  }


  const { auth } = useSelector((state: RootState) => state);

  console.log(auth);

  return (
    <>
      <div className="container mx-auto px-4">
        <form onSubmit={handleOnSubmit} className={styles.container}>
                  <div>
                      <label>
            <input              
                placeholder="Digite el email"               
                onChange={handleOnChange}
            />
                      </label>
          </div>
          <div>
            <input              
              placeholder="Digite su passwsord"             
              onChange={handleOnChange}
            />
          </div>
                  <div>
                      <button>
                      enviar 
                      </button>
          </div>
        </form>
      </div>
    </>
  );
}

/*
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-500">
            Inicia sesión en tu cuenta
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleOnSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium leading-6 text-gray-500"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  onChange={handleOnChange}
                  id="email"
                  name="email"
                  type="email"
                  className="                  
                    outline-none 
                    block w-full 
                    rounded-md 
                    border-0 
                    py-1.5 
                    text-gray-500 
                    shadow-sm 
                    ring-1 
                    ring-inset 
                    ring-gray-300 
                    placeholder:text-gray-200 
                    focus:ring-2 
                    focus:ring-inset 
                    focus:ring-indigo-600 
                    sm:text-lg sm:leading-8
                    text-2xl "
                />
              </div>
              <span>
                <p className=" text-red-600 ">{errors.email}</p>
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-6 text-gray-500"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={handleOnChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="
                    outline-none 
                    block w-full 
                    rounded-md 
                    border-0 
                    py-1.5 
                    text-gray-500 
                    shadow-sm 
                    ring-1 
                    ring-inset 
                    ring-gray-300 
                    placeholder:text-gray-200 
                    focus:ring-2 
                    focus:ring-inset 
                    focus:ring-indigo-600 
                    sm:text-lg sm:leading-8
                    text-2xl "
                />
              </div>
              <span>
                <p className=" text-red-600 ">{errors.password}</p>
              </span>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>


*/
