import React from 'react'
import Styles from './pagination.module.css'
const Pagination =(props)=>{
    const calcultePages=()=>{
        const numberOfPages=Math.ceil(props.totalPost/props.postPerPage);
        return numberOfPages
    }
    const renderButtons=()=>{
        const pageLinks=[];
        for(let i=1;i<=calcultePages();i++){
            const active=i===props.pageShowed?Styles.active:'';
            pageLinks.push(
                <button className={`${Styles.btnPag} ${active}`} key={i} onClick={()=>{props.onChangePage(i)}}>
                    {i}
                </button>
            )
        }
        return pageLinks
    }
    return (
        <div className={Styles.pagination}>
            {renderButtons()}
        </div>

    )
}

export default Pagination;