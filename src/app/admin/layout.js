import AdminHeader from "../components/AdminHeader/page";
import Footer from "../components/Footer/page";

export default function Layout({children}) {
    return (
     <div>
     <AdminHeader/>
     {children}
     <Footer/>
    </div>
    );
}