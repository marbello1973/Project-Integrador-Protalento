import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>   
      <nav className="border-gray-200 mb-10">
                  
          <div className="justify-between items-end w-full md:w-auto md:order-1">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to={'home'}>
                <a className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Home</a>
                </Link>
              </li>
              <li>
                <Link to={'about'}>
                  <a className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">About</a>
                </Link>
              </li>
              <li>
                <Link to={'task'} >
                  <a className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Tasks</a>
                </Link>
              </li>
            </ul>
          </div>      
       
      </nav>
    </>    
    
  )
}

export default Navbar


