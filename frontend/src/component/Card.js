import React from 'react';

const Card = ({ data }) => {
    const { id, sol, camera, img_src, earth_date, rover } = data;

    return (
        <div className="card">
            <img src={img_src} alt={`Mars Rover ${rover.name} - Sol ${sol}`} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{`Rover: ${rover.name}`}</h2>
                <p className="card-text">{`id: ${id}`}</p>
                <p className="card-text">{`Camera: ${camera.full_name}`}</p>
                <p className="card-text">{`Earth Date: ${earth_date}`}</p>
            </div>
        </div>
    );
};

export default Card;



// import React from 'react';

// const Card = ({ data }) => {
//     const { id, sol, camera, img_src, earth_date, rover } = data;

//     return (
//         <div className="card m-3">
//             <img src={img_src} alt={`Mars Rover ${rover.name} - Sol ${sol}`} className="card-img-top" />
//             <div className="card-body">
//                 <h5 className="card-title">{`Rover: ${rover.name}`}</h5>
//                 <p className="card-text">{`Sol: ${sol}`}</p>
//                 <p className="card-text">{`Camera: ${camera.full_name}`}</p>
//                 <p className="card-text">{`Earth Date: ${earth_date}`}</p>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">{`Rover Status: ${rover.status}`}</li>
//                     <li className="list-group-item">{`Total Photos: ${rover.total_photos}`}</li>
//                     <li className="list-group-item">{`Rover Launch Date: ${rover.launch_date}`}</li>
//                     <li className="list-group-item">{`Rover Landing Date: ${rover.landing_date}`}</li>
//                     <li className="list-group-item">{`Max Sol: ${rover.max_sol}`}</li>
//                     <li className="list-group-item">{`Max Date: ${rover.max_date}`}</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Card;




// // import React from 'react';

// // const Card = ({ data }) => {
// //     const { id, sol, camera, img_src, earth_date, rover } = data;

// //     return (
// //         <div className="card m-3">
// //             <img src={img_src} alt={`Mars Rover ${rover.name} - Sol ${sol}`} className="card-img-top" />
// //             <div className="card-body">
// //                 <h5 className="card-title">{`Rover: ${rover.name}`}</h5>
// //                 <p className="card-text">{`Sol: ${sol}`}</p>
// //                 <p className="card-text">{`Camera: ${camera.full_name}`}</p>
// //                 <p className="card-text">{`Earth Date: ${earth_date}`}</p>
// //                 <div className="row">
// //                     <div className="col-sm-6">
// //                         <ul className="list-group list-group-flush">
// //                             <li className="list-group-item bg-primary text-light">{`Rover Status: ${rover.status}`}</li>
// //                             <li className="list-group-item bg-secondary text-light">{`Total Photos: ${rover.total_photos}`}</li>
// //                             <li className="list-group-item bg-success text-light">{`Rover Launch Date: ${rover.launch_date}`}</li>
// //                         </ul>
// //                     </div>
// //                     <div className="col-sm-6">
// //                         <ul className="list-group list-group-flush">
// //                             <li className="list-group-item bg-danger text-light">{`Rover Landing Date: ${rover.landing_date}`}</li>
// //                             <li className="list-group-item bg-warning text-dark">{`Max Sol: ${rover.max_sol}`}</li>
// //                             <li className="list-group-item bg-info text-dark">{`Max Date: ${rover.max_date}`}</li>
// //                         </ul>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Card;
