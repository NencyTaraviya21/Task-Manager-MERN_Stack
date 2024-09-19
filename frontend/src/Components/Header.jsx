import './Header.css'

const Header = () => {
  return (
    <div>
      <nav class="">
        <div class="">
          <a class="text-lg align-s" href="#">Task Manager</a>
          
          <div class=" flex justify-end gap-3" >
            <form class="flex gap-2 me-3" role="search">
              <input class=" me-3" type="search" placeholder="Search" aria-label="Search" />
              <button class="bg-blue-500 rounded-md text-l px-3 py-2 hover:bg-blue-300 " type="submit" >SignUp</button>
              <button class="bg-blue-500 rounded-md text-l px-3 py-2  hover:bg-blue-300 " type="submit">SignIn</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header