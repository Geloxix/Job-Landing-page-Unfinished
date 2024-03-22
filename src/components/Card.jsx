const Card = ({ children, bG = 'bg-gray-100'}) => {
    return (
        <div className={`${bG} rounded-lg shadow-md p-6`}>
            {children}
        </div>
    );
}

export default Card