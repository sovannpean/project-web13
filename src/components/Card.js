function Card({imageURL, title}){
    return(
        <>
            <div className="card h-100 shadow-sm border-0">
                <img 
                    src={imageURL} 
                    className="card-img-top" alt="card image" 
                />
                <div className="card-body">
                    <h5 className="card-text text-center">{title}</h5>
                </div>
            </div>
        </>
    )
}
export default Card