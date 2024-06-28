export interface ProductsT {
    products : ProductT[]
}

export interface ProductT {
  id: number,
  title: string,
  price: number,
  totalPrice?: number,
  quantity?: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number },
}
