import './Layout.scss';
const Layout = ({children,...props}) => {
    console.log(1111111);
    const {
        type,
        className,
    } = props;


    return (
        <div className={`Layout Layout_${type === 'wide' ? 'wide' : 'thin'} ${className}`}>
            {children}
        </div>
    )
}

export default Layout;