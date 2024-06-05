'use server'

import Image from "next/image";
import { getProductList } from "./action";

export default async function ProductsPage(){    
    const products = await getProductList();  

    return(
        <>
        <h1>Product list</h1>
        <div className="row">
          {products.map((val,i)=> {            
            return (
            <div key={i} className="col-4">
                <div className="card text-center">
                    <div className="card-body">
                        <Image src={val.imageUrl} width={300} height={300} style={{maxWidth: '100%', maxHeight: '100%', objectFit: "contain"}}/>
                    </div>
                    <div className="card-header">
                        <h3>{val.name}</h3>
                    </div>
                    <div className="card-body">
                        <h3 className="alert alert-success">{val.price}</h3>
                    </div>
                </div>
            </div>
            )
          })}  
        </div>
        </>
    )
}