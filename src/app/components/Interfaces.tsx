export interface IProduct {
  id ?: number ,
  title ?: string ,
  price ?:  number ,
  description ?: string ,
  category ?: string ,
  image_src ?: string ,
  pclass ?: string ,
  rating ?: {
    rate ?: number ,
    count ?: number
  },
  specs ?: {
    spec: {
      id : number
      key: string,
      value: string
    }[]
  }
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
  searchparams:Promise<{}>
}