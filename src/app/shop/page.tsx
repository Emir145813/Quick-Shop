import Product from '../components/Product'
import Container from '../components/Container'
import Link from 'next/link'
import { IProduct, Iprops, ISearchParams } from '../components/Interfaces'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import getData from '../components/getData'





async function Shop({searchParams} : ISearchParams) {

  let page = parseInt((await searchParams).page) ?? 1
  page = !page || page < 1 ? 1 : page
  const perPage = 8
  const PInfo = await getData(page , perPage)
  
  const totalPage = Math.ceil(PInfo.productCount / 8);
  const nextPage = page == totalPage ? page : page + 1
  const pervPage = page > 1 ? page -1 : 1


  const pageNumbers = [];
  const offsetNumber = 3;
  for( let i = page - offsetNumber ;i <= page ; i++){
    if( i >= 1 && i <= totalPage){
      pageNumbers.push(i);
    }
  }

  return (
    <Container>
      <div className='grid grid-cols-4 bg-[#FAFAFA] p-[20px] my-[54px] gap-[24px] rounded-[24px]' >
        {PInfo.PInfo && PInfo.PInfo.map((product : IProduct) => (
          <Link key={product.pid} href={`/shop/${product.pid}`} >
            <Product title={product.title} image_src={product.image_src} pclass={product.pclass} price={product.price} discount={product.discount}/>
          </Link>
        ))}
      </div>
      <div className='mb-10'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href={`?page=${pervPage}`} />
            </PaginationItem>
            {
              pageNumbers.map((pageNumber , index)=>(
                <PaginationItem key={index}>
                  <PaginationLink href={`?page=${pageNumber}`}>{pageNumber}</PaginationLink>
                </PaginationItem>
              ))
            }
            <PaginationItem>
              <PaginationNext href={`?page=${nextPage}`} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Container>
  )
}

export default Shop