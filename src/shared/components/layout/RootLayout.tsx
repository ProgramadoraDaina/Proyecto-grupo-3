import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}

