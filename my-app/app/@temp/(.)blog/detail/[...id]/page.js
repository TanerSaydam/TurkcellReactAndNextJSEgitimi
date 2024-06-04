'use client'


import { BlogDetail } from "@/app/(customer)/blog/detail/[...id]/blog-detail";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function TempBlogDetailPage({params}){
    const router = useRouter();
  
    return(
        <div className="modal" onClick={()=> router.back()}>
        <div className="modal-body">
            <BlogDetail/>
        </div>
    </div>
    )
}