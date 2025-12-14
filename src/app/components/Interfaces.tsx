// export interface IProduct {
//   id ?: string ,
//   title ?: string ,
//   price ?:  number ,
//   description ?: string ,
//   category ?: string ,
//   image_src ?: string ,
//   pclass ?: string ,
//   rating ?: {
//     rate ?: number ,
//     count ?: number
//   },
//   specs ?: {
//     spec: {
//       id : number
//       key: string,
//       value: string
//     }[]
//   }
// }

export interface IProduct {
  _id ?: string ,
  id ?: number,
  pid ?: number,
  title ?: string ,
  price ?:  number ,
  discount ?: number,
  description ?: string ,
  category ?: string ,
  image_src ?: string ,
  pclass ?: string ,
}

export interface IDiscount{
  id ?: number,
  code ?: string,
  perc ?: number
}

export interface TCartItems {
  id : number,
  quantity : number
}

export interface CartPageContextProps {
  children : React.ReactNode
}

export interface IAddToCart{
  color ?: string
  id : number
}

export interface IChildren {
  children : React.ReactNode
}

export interface TItems {
  marginTop ?: string,
  title : string,
  desc : string,
  isrc?: string
}

export interface Iprops{
  params:Promise<{id : number}>
  searchParams:Promise<{}>
}

export interface ISearchParams{
  params :Promise<{}>
  searchParams : Promise<{page : string}>
}

export interface IBannerElements{
  title : string,
  image : string
}

export interface ICarousel{
  CarouselBack ?: ()=> void,
  CarouselForward ?: ()=> void
}