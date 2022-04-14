import Nav from "./nav"

const Layout = ({ children }) => {
    return (
        <div>
            <Nav title="conWorld"/>
            {children}
        </div>
    )
}

export default Layout