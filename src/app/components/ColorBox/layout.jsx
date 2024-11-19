export default function Layout({children,left,right}) {
    const isSidebar = true;
    return (
     <div>
     {children}
    {isSidebar ?left:right}
    </div>
    );
}