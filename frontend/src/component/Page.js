import { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { ApiContext } from '../context/ApiContext';


function AdvancedExample() {

    const { lindex, size, index, setIndex, page, pageIndex, setPageIndex } = useContext(ApiContext)

    return (
        <Pagination>
            <Pagination.First onClick={() => { setIndex(0); setPageIndex(1) }} />
            {(index === 0) ?
                <Pagination.Prev disabled />
                : <Pagination.Prev onClick={() => { setIndex(index - size); setPageIndex(index / size ) }} />
            }
            {/* <Pagination.Prev  onClick={()=>setIndex(index-size)}/> */}
            {
                (page < 8) ?
                    (
                        Array.from(Array(page), (e, i) => {
                            return (
                                <Pagination.Item key={i + 1}
                                    active={(i + 1 === pageIndex) ? true : false}
                                onClick={() => { setIndex(i * size); setPageIndex(i + 1) }}>{i + 1} </Pagination.Item>
                            )
                        })
                    ) :
                    (
                        (pageIndex < 4) ?
                            (<>
                                {Array.from(Array(5), (e, i) => {
                                    return (
                                        <Pagination.Item key={i + 1}
                                            active={(i + 1 ===pageIndex)? true :false }
                                        onClick={() => { setIndex(i * size); setPageIndex(i + 1) }}>{i + 1} </Pagination.Item>
                                    )
                                })}
                                < Pagination.Ellipsis /></>
                            ) :
                            (
                                (pageIndex < page - 2) ?
                                    (<> < Pagination.Ellipsis />
                                        {Array.from(Array(5), (e, i) => {
                                            return (
                                                <Pagination.Item key={i + pageIndex - 2}
                                                    active={(i + pageIndex - 2 === pageIndex) ? true : false}
                                                onClick={() => { setIndex((i + pageIndex - 3) * size); setPageIndex(i + pageIndex - 2) }}>{i + pageIndex - 2} </Pagination.Item>
                                            )
                                        })}
                                        < Pagination.Ellipsis /></>) :
                                    (<>
                                        < Pagination.Ellipsis />
                                        {Array.from(Array(5), (e, i) => {
                                            return (
                                                <Pagination.Item key={i + page - 4} 
                                                    active={(i + page - 4 === pageIndex) ? true : false}
                                                onClick={() => { setIndex((i + page - 5) * size); setPageIndex(i + page - 4) }}>{i + page - 4} </Pagination.Item>
                                            )
                                        })}
                                    </>)

                            )
                    )
            }
            {/* <Pagination.Next onClick={() => setIndex(index + size)} /> */}
            {
                (index === lindex) ?
                    <Pagination.Next disabled />
                    : <Pagination.Next onClick={() => { setIndex(index + size); setPageIndex(index / size +2) }} />

            }

            <Pagination.Last onClick={() => { setIndex(lindex); setPageIndex(page) }} />
        </Pagination>
    );
}











{/* <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item> */}

export default AdvancedExample;