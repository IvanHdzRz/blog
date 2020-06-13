import React from 'react'
import Styles from './pagination.module.css'
const Pagination =(props)=>{
    const calcultePages=()=>{
        const numberOfPages=Math.ceil(props.totalPost/props.postPerPage);
        return numberOfPages
    }
    const renderButtons=()=>{
        const maxButtonsShowed=5;
        const totalPages=calcultePages();
        let bottomLimit=1
        let topLimit=totalPages
        /*si se va a mostrar mas botones de los permitidos*/
        if(totalPages>maxButtonsShowed){
            bottomLimit=props.pageShowed-Math.floor(maxButtonsShowed/2);
            topLimit=props.pageShowed+Math.floor(maxButtonsShowed/2);
            
            if(bottomLimit<1){
                topLimit+=Math.abs(bottomLimit)+1;
                bottomLimit=1;
                
            }
            if(topLimit>totalPages){
                bottomLimit-=topLimit-totalPages;
                topLimit=totalPages;
                
            }
        }

        const pageLinks=[];
        console.log(bottomLimit,topLimit)
        for(let i=bottomLimit;i<=topLimit;i++){
            const active=i===props.pageShowed?Styles.active:'';
            pageLinks.push(
                <button className={`${Styles.btnPag} ${active}`} key={i} onClick={()=>{props.onChangePage(i)}}>
                    {i}
                </button>
            )
        }
        pageLinks.push(
            <button 
                className={`${Styles.btnPag}`} 
                key={'NEXT'} 
                onClick={()=>{props.onChangePage(props.pageShowed+1)}}
                disabled={props.pageShowed+1>totalPages?true:false}
            >
                    {'>'}
            </button>
        )
        pageLinks.unshift(
            <button 
                className={`${Styles.btnPag}`} 
                key={'Prev'} 
                onClick={()=>{props.onChangePage(props.pageShowed-1)}}
                disabled={props.pageShowed-1>0?false:true}
            >
                    {'<'}
            </button>
        )
        return pageLinks
    }
    return (
        <div className={Styles.pagination}>
            {renderButtons()}
        </div>

    )
}

export default Pagination;