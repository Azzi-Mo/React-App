const Categories = ({filterItems}) => {
    return (
        <>
        <div className="btn-container">
        <button className="filter-btn" onClick={filterItems('breakfast')}>breakfast</button>
        </div></>
    )

}
export default Categories